import { Injectable } from '@nestjs/common';
import { WaitlistDTO } from 'src/DTO/waitlist.dto';
import {WaitlistRepository } from 'src/Mongo/Repository/waitlist.repository';

@Injectable()
export class WaitlistService {
    
    constructor(
        private readonly waitlistRepository : WaitlistRepository
    ){}

  async saveWaitlist(newWaitlist: WaitlistDTO): Promise<WaitlistDTO> {
       return await this.waitlistRepository.saveWaitlist(newWaitlist);      
    }

   async getAllWaitlist() : Promise<WaitlistDTO[]> {
    return await this.waitlistRepository.getAllWaitlist();
   } 
}
