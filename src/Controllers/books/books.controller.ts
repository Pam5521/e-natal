import { Controller, Get, Post, Body } from '@nestjs/common';
import {BookDTO } from '../../DTO/books.dto'
import { BooksService } from 'src/Services/books/books.service';
@Controller('books')
export class BooksController {

constructor(
    private readonly bookService : BooksService
) {}

    @Get()
   async getAllBooks() :Promise<BookDTO[]> {
        return await this.bookService.getAllBooks();
    }

    @Post()
   async saveBook(@Body() newBook: BookDTO): Promise<BookDTO> {
      return await this.bookService.saveBook(newBook);
    }

}
