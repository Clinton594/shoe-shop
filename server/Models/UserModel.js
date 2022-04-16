import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add matchPassword method to schema
userSchema.methods.matchPassword = async function (pwd) {
  return await bcrypt.compare(pwd, this.password);
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
