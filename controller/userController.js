import prisma from "../Db/db.config.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.json({
      status: 400,
      message: "Email is already taken. Please try with another emaiil",
    });
  }

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return res.json({
    status: 200,
    message: "User created sussessfully",
    data: newUser,
  });
};

//update
export const updateUser = async (req, res) => {
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
export const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany({});

  return res.json({
    status: 201,
    message: "Users fetched successfully",
    data: users,
  });
};

//get single user by id
export const singleUser = async (req, res) => {
  const userId = req.params.id;

  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, data: user, message: "Fetched single user" });
};

//delete user
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 201, message: "User deleted successfully" });
};
