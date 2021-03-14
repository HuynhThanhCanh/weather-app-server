import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Geocoding {
    @Field()
    lat: string;

    @Field()
    long: string;

    @Field()
    placeName: string;
}