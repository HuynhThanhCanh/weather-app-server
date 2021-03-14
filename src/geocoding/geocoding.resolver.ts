import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { GetGeocodingArgs } from './dto/args/get-geocoding.args';
import { GeocodingService } from './geocoding.service';
import { Geocoding } from './models/geocoding';

@Resolver(() => Geocoding)
export class GeocodingResolver {
    constructor(private readonly geocodingService: GeocodingService) { }

    // @Query(() => Geocoding, { name: "GetLocation", description: "Input lang and long loacation", nullable: false })
    // async getGeocoding(@Args() getGeocoding: GetGeocodingArgs): Promise<Geocoding> {
    //     return this.geocodingService.getGeocoding(getGeocoding);
    // }
}
