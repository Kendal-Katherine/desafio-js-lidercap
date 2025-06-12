const service = require('../services/service');

exports.getUser = async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    const user = await service.getUser(userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.getUserPosts = async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    const posts = await service.getUserPosts(userId);
    res.json(posts);
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.getPostComments = async (req, res) => {
  const postId = parseInt(req.params.postId);
  try {
    const comments = await service.getPostComments(postId);
    res.json(comments);
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.getUserFullData = async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    const user = await service.getUser(userId);
    const posts = await service.getUserPosts(userId);

    let comments = [];
    if (posts.length > 0) {
      comments = await service.getPostComments(posts[0].postId);
    }

    res.json({
      user,
      posts,
      commentsOnFirstPost: comments
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};
