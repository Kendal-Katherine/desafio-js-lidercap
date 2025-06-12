const request = require('supertest');
const app = require('../../app');

// Mock do service
jest.mock('../../src/services/service', () => ({
  getUser: jest.fn((userId) => Promise.resolve({ userId, name: 'Mock User' })),
  getUserPosts: jest.fn((userId) => Promise.resolve([{ postId: 1, title: 'Mock Post' }])),
  getPostComments: jest.fn((postId) => Promise.resolve([{ commentId: 1, text: 'Mock Comment' }])),
}));

const service = require('../../src/services/service');

describe('User Controller', () => {
  it('GET /api/users/:userId - should return user data', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ userId: 1, name: 'Mock User' });
  });

  it('GET /api/users/:userId/posts - should return user posts', async () => {
    const res = await request(app).get('/api/users/1/posts');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ postId: 1, title: 'Mock Post' }]);
  });

  it('GET /api/posts/:postId/comments - should return post comments', async () => {
    const res = await request(app).get('/api/posts/1/comments');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ commentId: 1, text: 'Mock Comment' }]);
  });

  it('GET /api/users/:userId/full - should return full user data', async () => {
    const res = await request(app).get('/api/users/1/full');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('posts');
    expect(res.body).toHaveProperty('commentsOnFirstPost');
  });

  it('should return 404 on error', async () => {
    // Faz o mock lançar erro para simular falha
    service.getUser.mockImplementationOnce(() => Promise.reject('User not found'));
    const res = await request(app).get('/api/users/9999');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});
