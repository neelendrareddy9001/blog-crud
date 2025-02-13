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
  const userId = req.params.id;
  const { name, email, password } = req.body;

  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      name,
      email,
      password,
    },
  });

  return res.json({ status: 200, message: "User updated successfully" });
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

//get single user by id
export const singlePost = async (req, res) => {
  const userId = req.params.id;

  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, data: user, message: "Fetched single user" });
};

//delete user
export const deletePost = async (req, res) => {
  const userId = req.params.id;
  await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 201, message: "User deleted successfully" });
};
