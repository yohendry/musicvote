import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {SpotifyConfig} from '../../conf/spotify.config';

/*
  Generated class for the SpotifyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpotifyService {
  data: any = [];

  constructor(public http: Http) {}

  search(query:string, resourceType:string) {
    let key = `${query}_${resourceType}`;
    if (this.data[key]) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      let params: URLSearchParams = new URLSearchParams();
      params.set('q', query);
      params.set('type',resourceType);

      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(`${SpotifyConfig.API_URL}/v1/search`, {search: params})
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference

          this.data[key] = data;
          resolve(this.data[key]);
        });
    });
  }
}
