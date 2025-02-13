import prisma from "../Db/db.config.js";

export const createPost = async (req, res) => {
  const { user_id, title, description } = req.body;

  const newPost = await prisma.post.create({
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

//update
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { post_id, title, description } = req.body;

  await prisma.post.update({
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

//fetch users
export const fetchPosts = async (req, res) => {
  const posts = await prisma.post.findMany({});

  return res.json({
    status: 201,
    message: "fetched posts successfully",
    data: posts,
  });
};

//get single post by id
export const singlePost = async (req, res) => {
  const postId = req.params.id;

  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 200, data: post, message: "Fetched single post" });
};

//delete post
export const deletePost = async (req, res) => {
  const postId = req.params.id;
  await prisma.post.delete({
    where: {
      id: Number(postId),
    },
  });

  return res.json({ status: 201, message: "post deleted successfully" });
};
