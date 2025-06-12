const express = require('express');
const {
  getUser,
  getUserPosts,
  getPostComments,
  getUserFullData
} = require('../controllers/userController');

const router = express.Router();

router.get('/users/:userId', getUser);
router.get('/users/:userId/posts', getUserPosts);
router.get('/posts/:postId/comments', getPostComments);
router.get('/users/:userId/full', getUserFullData);

module.exports = router;
