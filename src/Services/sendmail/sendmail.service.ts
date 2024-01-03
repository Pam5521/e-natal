import { Injectable } from '@nestjs/common';
import { SendMailDTO } from 'src/DTO/sendmail.dto';
import {WaitlistRepository } from 'src/Mongo/Repository/waitlist.repository';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class SendMailService {
    
    constructor(
        private readonly waitlistRepository : WaitlistRepository,
        private readonly bookRepository : BookRepository,
        private readonly mailerService: MailerService
    ){}

  async sendEmailToAdress(sendObject: SendMailDTO) {
    const date = new Date();
    const limit = new Date('2023-12-25');
    console.log("DEBUG => date maior que limite? =>" + (date.getTime() > limit.getTime()))

    if( date >= limit) {
      console.log('DEBUG => INICIO DE ENVIO DO EMAIL');
      var waitlist = await this.waitlistRepository.getWaitListByEmail(
        sendObject.email,
      );
      console.log('DEBUG=> email to send  ' + JSON.stringify(sendObject));
      console.log('DEBUG => waitlist object: ' + JSON.stringify(waitlist));

      var booksId = [];
      waitlist.forEach((list) => {
        list.booksId.forEach((bookId) => {
          booksId.push(bookId);
        });
      });

      console.log('DEBUG => Ids de livros => ' + booksId);
      var booksNames = [];
      for (var i = 0; i < booksId.length; i++) {
        var book = await this.bookRepository.getBookById(booksId[i]);
        console.log('DEBUG=> Livro ' + i + ' ' + book);
        booksNames.push(book.name);
      }

      console.log('DEBUG => Nomes dos livros => ' + booksNames);

      this.mailerService.sendMail({
        to: sendObject.email,
        from: 'papainoel@malinator.com',
        subject: '[Envio E-natal] Livro(s) Enviados!',
        text:
          'Chegou seu livro e-natal! você receberá os seguintes livros: ' +
          booksNames,
        html: '<b>see plaintext</b>',
      });
    } else {
        throw new Error("invalid date")
    } 
  }
}
