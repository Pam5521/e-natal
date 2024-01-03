import { IsNotEmpty } from "class-validator";

export class BookDTO {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly autor: [string];

}