import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tastetroop:gpwRsBVxKeTx9aUo@cluster0.7vhnn.mongodb.net/tastetroop"
    )
    .then(() => console.log("DB Connected"));
};
