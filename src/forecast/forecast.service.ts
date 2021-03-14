import { Injectable } from '@nestjs/common';
import { GeocodingService } from 'src/geocoding/geocoding.service';
import { GetForecastArgs } from './dto/args/get-forecast.args';
import { Forecast } from './models/forecast';

const axios = require('axios');
@Injectable()
export class ForecastService {
    private secretKey: string = "b2249755bfe293159760db3e8327ace4";
    private lat: string;
    private long: string;
    private placeName: string;

    constructor(private readonly geocodingServices: GeocodingService) { }

    async getForecast(getForecast: GetForecastArgs): Promise<Forecast> {
        return new Promise<Forecast>(async (resolve, reject) => {
            await this.geocodingServices.getGeocoding(getForecast).then(data => {
                this.lat = data.lat;
                this.long = data.long;
                this.placeName = data.placeName;
            }).catch((err) => {
                console.log(err);
            });

            let forecastUrl = `https://api.darksky.net/forecast/${this.secretKey}/${this.lat},${this.long}?units=si&lang=vi`;
            console.log(forecastUrl);

            await axios.get(forecastUrl).then(res => {
                const data = res.data.currently;

                const forecast: Forecast = {
                    placeName: this.placeName,
                    summary: data.summary,
                    temperature: data.temperature
                }
                console.log(forecast);
                return resolve(forecast);
            }).catch(err => {
                console.log(err);
            })
        });
    }
}

