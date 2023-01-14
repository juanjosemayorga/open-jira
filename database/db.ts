import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongooConection = {
  isConnected: 0,
}

export const connect = async () => {
  if (mongooConection.isConnected) {
    console.log('We are already connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConection.isConnected = mongoose.connections[0].readyState;

    if (mongooConection.isConnected === 1) {
      console.log('Using previous connection');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || '');
  mongooConection.isConnected = 1;
  console.log('Connected to MongoDB: ', process.env.MONGO_URL);
}

export const disconnect = async () => {
  if (mongooConection.isConnected === 0) {
    return;
  }

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
}
