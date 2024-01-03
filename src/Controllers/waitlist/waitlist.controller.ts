import { Controller, Get, Post, Body } from '@nestjs/common';
import {WaitlistDTO } from '../../DTO/waitlist.dto'
import { WaitlistService } from 'src/Services/waitlist/waitlist.service';
@Controller('waitlist')
export class WaitlistController {

constructor(
    private readonly waitlistService : WaitlistService
) {}

    @Get()
   async getAllBooks(){
    return await this.waitlistService.getAllWaitlist();
   }

    @Post()
   async saveWaitlist(@Body() newWaitlist: WaitlistDTO): Promise<WaitlistDTO> {
      return await this.waitlistService.saveWaitlist(newWaitlist);
    }

}
