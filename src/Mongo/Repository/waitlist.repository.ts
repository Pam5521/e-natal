import { Injectable } from "@nestjs/common";
import { WaitlistDTO } from "src/DTO/waitlist.dto";
import {InjectModel} from "@nestjs/mongoose"
import {Waitlist} from '../Interfaces/waitlist.interface'
import {Model} from 'mongoose'

@Injectable()
export class WaitlistRepository {

    constructor(
        @InjectModel('waitlist') private readonly waitlistModel : Model<Waitlist>
    )
    {}

    async saveWaitlist(newWaitlist : WaitlistDTO) : Promise<WaitlistDTO> {
        const savedWaitlist = new this.waitlistModel(newWaitlist);
        return await savedWaitlist.save();
    }
    async getAllWaitlist(): Promise<WaitlistDTO[]> {
        return await this.waitlistModel.find({}, {__v : false}).sort({name : +1}).exec()
    }

    async getWaitListByEmail(email): Promise<WaitlistDTO[]> {
        return await this.waitlistModel.find({email: email}, {__v : false}).sort({name : +1}).exec()
    }
}