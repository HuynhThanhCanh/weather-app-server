import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeocodingModule } from './geocoding/geocoding.module';
import { ForecastModule } from './forecast/forecast.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    GeocodingModule,
    ForecastModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
