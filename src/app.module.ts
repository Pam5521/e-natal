import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Services/books/books.service'
import { BookRepository } from './Mongo/Repository/book.repository';
import { BookSchema } from './Mongo/Schemas/book.schema';
import { WaitlistSchema } from './Mongo/Schemas/waitlist.schema'
import { WaitlistController } from './Controllers/waitlist/waitlist.controller';
import { WaitlistService } from './Services/waitlist/waitlist.service';
import { WaitlistRepository } from './Mongo/Repository/waitlist.repository';
import { SendMailController } from './Controllers/sendmail/sendmail.controller';
import { SendMailService } from './Services/sendmail/sendmail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/e-natal?directConnection=true'),
    MongooseModule.forFeature([
    {name: 'book', schema: BookSchema},
    {name: 'waitlist', schema: WaitlistSchema}
    ]),

    MailerModule.forRoot({
      transport: {
        host:'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'kurt.oberbrunner@ethereal.email',
          pass: '2ydGpxh3UkBZTuQZX2'
        }
      }
    })
  ],

  controllers: [BooksController, WaitlistController, SendMailController],
  providers: [BooksService, BookRepository , WaitlistService, WaitlistRepository, SendMailService],
})
export class AppModule {}
