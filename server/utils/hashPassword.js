import bcrypt from "bcryptjs";

const hashPassword = (pwd) => {
  return bcrypt.hashSync(pwd, 10);
};

export default hashPassword;
