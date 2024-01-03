import { Injectable } from "@nestjs/common";
import { BookDTO } from "src/DTO/books.dto";
import {InjectModel} from "@nestjs/mongoose"
import {Book} from '../Interfaces/book.interface'
import {Model} from 'mongoose'

@Injectable()
export class BookRepository {

    constructor(
        @InjectModel('book') private readonly bookModel : Model<Book>
    )
    {}

    async saveBook(newBook : BookDTO) : Promise<BookDTO> {
        const savedBook = new this.bookModel(newBook);
        return await savedBook.save();
    }
    async getAllBooks(): Promise<BookDTO[]> {
        return await this.bookModel.find({}, {__v : false}).sort({name : +1}).exec()
    }

    async getBookById(bookId): Promise<BookDTO> {
        return await this.bookModel.findOne({_id:bookId}, {__v : false}).sort({name : +1}).exec()
    }
}