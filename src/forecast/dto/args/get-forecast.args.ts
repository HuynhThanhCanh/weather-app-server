import { IsNotEmpty } from 'class-validator';
import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetForecastArgs {
    @Field()
    @IsNotEmpty()
    keyWork: string;
}