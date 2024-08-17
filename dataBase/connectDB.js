import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB is connected`);
    } catch (error) {
        console.log(`Error while connecting DB ${error}`);
    }
}

export default db;