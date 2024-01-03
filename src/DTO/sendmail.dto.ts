import { IsNotEmpty } from "class-validator";

export class SendMailDTO {
    readonly email: string;
}