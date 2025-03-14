import { MongoClient } from "mongodb";
import 'dotenv/config';

const URI = process.env.MONGO_URI

if (!URI) {
    throw new Error("MONGO_URI não foi definida!");
  }

const client = new MongoClient(URI);

export const db = client.db("whodidit");
