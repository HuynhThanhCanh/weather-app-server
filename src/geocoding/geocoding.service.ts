import { Injectable } from '@nestjs/common';
import { GetGeocodingArgs } from './dto/args/get-geocoding.args';
import { Geocoding } from './models/geocoding';

const axios = require('axios');
@Injectable()
export class GeocodingService {
    private token: string = "pk.eyJ1IjoiaHV5bmh0aGFuaGNhbmgiLCJhIjoiY2s2eWZpc3cxMHg4dTNlczR1Nm12eTZwMSJ9.dWssXWHkrXwvC3LQemDqkw";

    public async getGeocoding(getGeocoding: GetGeocodingArgs): Promise<Geocoding> {
        const limit = 1;
        const geocodingUrl: string = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(getGeocoding.keyWork)}.json?access_token=${this.token}&lang=vi&limit=${limit}`;
        //console.log(geocodingUrl);

        return new Promise<Geocoding>(async (resolve, reject) => {
            await axios.get(geocodingUrl).then((res) => {
                const geocoding: Geocoding = {
                    lat: res.data.features[0].geometry.coordinates[1],
                    long: res.data.features[0].geometry.coordinates[0],
                    placeName: res.data.features[0].place_name
                };

                return resolve(geocoding);
            }).catch((err) => {
                console.log(err);
            });
            //const res = await result.data.features;
        });
    }
}