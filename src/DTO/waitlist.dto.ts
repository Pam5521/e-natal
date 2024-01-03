import { IsNotEmpty } from "class-validator";

export class WaitlistDTO {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly email: string;
    @IsNotEmpty()
    readonly booksId: [string];

}