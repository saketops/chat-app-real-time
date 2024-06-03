import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = "https://cloud.appwrite.io/v1"
export const PROJECT_ID = "665de9b20029182ccefd"
export const DATABASE_ID = "665deb8500052da0270e"
export const COLLECTION_ID_MESSAGES = "665deb9b0027b0c4f65c"

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665de9b20029182ccefd');

export const account = new Account(client);
export const databases = new Databases(client)

export default client;
