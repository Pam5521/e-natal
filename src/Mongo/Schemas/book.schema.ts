import { Schema } from 'mongoose'
export const BookSchema = new Schema({
    id: String,
    name: String,
    autor: String,
})