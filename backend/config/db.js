import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sabbirhossainrinku:ASzx1234@cluster0.xbj0t.mongodb.net/myet').then(()=>console.log('DB connected'));
}