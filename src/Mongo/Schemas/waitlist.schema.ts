import { Schema } from 'mongoose'
export const WaitlistSchema = new Schema({
    name: String,
    email: String,
    booksId: [String]
})