import prisma from "../Db/db.config.js";

//create comment
export const createComm = async (req, res) => {
  const { user_id, post_id, comment } = req.body;

  //increase comment by adding multiple comment
  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        increment: 1,
      },
    },
  });

  const newComment = await prisma.comment.create({
    data: {
      user_id: Number(user_id),
      post_id: Number(post_id),
      comment,
    },
  });

  return res.json({
    status: 200,
    message: "Comment created sussessfully",
    data: newComment,
  });
};

//update comment
export const updateComm = async (req, res) => {
  const postId = req.params.id;
  const { post_id, user_id, comment } = req.body;

  await prisma.comment.update({
    where: {
      user_id: Number(user_id),
      id: Number(postId),
    },
    data: {
      comment,
    },
  });

  return res.json({ status: 200, message: "Post updated successfully" });
};

//fetch comments
export const fetchComments = async (req, res) => {
  const comments = await prisma.comment.findMany({});

  return res.json({
    status: 201,
    message: "fetched comments successfully",
    data: comments,
  });
};

//get single comm by id
export const singleComm = async (req, res) => {
  const commentId = req.params.id;

  const comment = await prisma.comment.findFirst({
    where: {
      id: Number(commentId),
    },
  });

  return res.json({
    status: 200,
    data: comment,
    message: "Fetched single comment",
  });
};

//delete comm
export const deleteComm = async (req, res) => {
  const commentId = req.params.id;

  //decrease comment by deleting a comment as total coomment count
  await prisma.post.update({
    where: {
      id: Number(post_id),
    },
    data: {
      comment_count: {
        decrement: 1,
      },
    },
  });

  await prisma.comment.delete({
    where: {
      id: Number(commentId),
    },
  });

  return res.json({ status: 201, message: "Comment deleted successfully" });
};
