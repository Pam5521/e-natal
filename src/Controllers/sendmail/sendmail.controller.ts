import { Controller, Get, Post, Body } from '@nestjs/common';
import {SendMailDTO } from '../../DTO/sendmail.dto'
import { SendMailService } from 'src/Services/sendmail/sendmail.service';
@Controller('sendmail')
export class SendMailController {

constructor(
    private readonly sendMailService : SendMailService
) {}

    @Post()
   async saveBook(@Body() sendObject: SendMailDTO){
      return await this.sendMailService.sendEmailToAdress(sendObject);
    }

}
