import { MongoClient, Db, Collection, Document, WithId, InferIdType } from 'mongodb';

const MONGO_URL = "mongodb+srv://periwinkloavr:RockAhyieuo@0126Descriptions@web-data.0ky8km2.mongodb.net/?retryWrites=true&w=majority&appName=web-data";
const DATABASE_NAME = "web-data";

let db: Db;

async function connect() {
    if (!db) {
        const client = new MongoClient(MONGO_URL);
        await client.connect();
        db = client.db(DATABASE_NAME);
        console.log(`Connected to MongoDB`);
    }
    return db;
}

async function getCollection<T extends Document>(name: string): Promise<Collection<T>> {
    const database = await connect();
    return database.collection<T>(name);
}

async function findAll<T extends Document>(collectionName: string): Promise<WithId<T>[]> {
    const collection = await getCollection<T>(collectionName);
    return collection.find({}).toArray();
}

// async function addOne<T extends Document>(collectionName: string, data: T): Promise<InferIdType<T>> {
//     const collection = await getCollection<T>(collectionName);
//     const result = await collection.insertOne(data);
//     return result.insertedId;
// }

// async function updateOne<T extends Document>(
//     collectionName: string,
//     filter: Partial<T>,
//     updateData: Partial<T>
// ) {
//     const collection = await getCollection<T>(collectionName);
//     return collection.updateOne(filter, { $set: updateData });
// }

export const MongoClientWrapper = {
    connect,
    getCollection,
    findAll,
    // addOne,
    // updateOne
};