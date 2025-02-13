import prisma from "../Db/db.config.js";

//create comment
export const createComm = async (req, res) => {
  const { user_id, title, description } = req.body;

  const newPost = await prisma.comment.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });

  return res.json({
    status: 200,
    message: "Post created sussessfully",
    data: newPost,
  });
};

//update comment
export const updateComm = async (req, res) => {
  const postId = req.params.id;
  const { post_id, title, description } = req.body;

  await prisma.comment.update({
    where: {
      id: Number(postId),
    },
    data: {
      title,
      description,
    },
  });

  return res.json({ status: 200, message: "Post updated successfully" });
};

//fetch comments
export const fetchComments = async (req, res) => {
  const posts = await prisma.comment.findMany({});

  return res.json({
    status: 201,
    message: "fetched posts successfully",
    data: posts,
  });
};

//get single comm by id
export const singleComm = async (req, res) => {
  const postId = req.params.id;

  const post = await prisma.comment.findFirst({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, data: post, message: "Fetched single post" });
};

//delete comm
export const deleteComm = async (req, res) => {
  const postId = req.params.id;
  await prisma.comment.delete({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 201, message: "post deleted successfully" });
};
