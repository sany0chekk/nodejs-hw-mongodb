import mongoose from 'mongoose';

export const initMongoCollection = async () => {
  try {
    const user = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const db = process.env.MONGODB_DB;

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority`,
    );
    console.log('MongoDB: Mongo connection successfully established!');
  } catch (error) {
    console.log('MongoDB: Something went wrong', error);
    throw error;
  }
};
