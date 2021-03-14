import { IsNotEmpty } from 'class-validator';
import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetGeocodingArgs {
    @Field()
    @IsNotEmpty()
    keyWork: string;
}