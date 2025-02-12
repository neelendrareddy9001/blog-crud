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
