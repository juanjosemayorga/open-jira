import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConection = {
  isConnected: 0,
}

export const connect = async () => {
  if (mongoConection.isConnected) {
    console.log('We are already connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConection.isConnected = mongoose.connections[0].readyState;

    if (mongoConection.isConnected === 1) {
      console.log('Using previous connection');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || '');
  mongoConection.isConnected = 1;
  console.log('Connected to MongoDB: ', process.env.MONGO_URL);
}

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  if (mongoConection.isConnected === 0) {
    return;
  }

  await mongoose.disconnect();
  mongoConection.isConnected = 0;

  console.log('Disconnected from MongoDB');
}
