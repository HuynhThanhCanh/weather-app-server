import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetForecastArgs } from './dto/args/get-forecast.args';
import { ForecastService } from './forecast.service';
import { Forecast } from './models/forecast';

@Resolver()
export class ForecastResolver {
    constructor(private readonly forecastService: ForecastService) { }

    @Query(() => Forecast, { name: "keyWork", nullable: true })
    getForecast(@Args() getForecastArgs: GetForecastArgs): Promise<Forecast> {
        return this.forecastService.getForecast(getForecastArgs);
    }
}
