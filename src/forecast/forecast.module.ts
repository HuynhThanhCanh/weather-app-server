import { Module } from '@nestjs/common';
import { ForecastService } from './forecast.service';
import { ForecastResolver } from './forecast.resolver';
import { GeocodingService } from 'src/geocoding/geocoding.service';

@Module({
  providers: [ForecastService, ForecastResolver, GeocodingService]
})
export class ForecastModule { }
