import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Forecast {
    @Field()
    placeName: string;

    @Field()
    summary: string;

    @Field()
    temperature: string;
}