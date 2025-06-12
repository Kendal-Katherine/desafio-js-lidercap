const util = require('util');

function getUser(userId, callback) {
  setTimeout(() => {
    const users = {
      1: { name: 'Alice', id: 1 },
      2: { name: 'Bob', id: 2 }
    };
    const user = users[userId];
    user ? callback(null, user) : callback('User not found', null);
  }, 500);
}

function getUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = {
      1: [
        { postId: 101, title: 'My first post' },
        { postId: 102, title: 'Travel photos' }
      ],
      2: [{ postId: 201, title: 'Cooking tips' }]
    };
    const userPosts = posts[userId];
    userPosts ? callback(null, userPosts) : callback('No posts found for this user', null);
  }, 700);
}

function getPostComments(postId, callback) {
  setTimeout(() => {
    const comments = {
      101: [
        { commentId: 1, text: 'Great post!' },
        { commentId: 2, text: 'Very insightful.' }
      ],
      102: [{ commentId: 3, text: 'Amazing pictures!' }],
      201: [{ commentId: 4, text: 'Tried your recipe, it was delicious!' }]
    };
    const postComments = comments[postId];
    postComments ? callback(null, postComments) : callback('No comments found for this post', null);
  }, 600);
}

module.exports = {
  getUser: util.promisify(getUser),
  getUserPosts: util.promisify(getUserPosts),
  getPostComments: util.promisify(getPostComments)
};
