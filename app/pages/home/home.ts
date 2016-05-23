import {Page} from 'ionic-angular';
import {SpotifyService} from '../../providers/spotify-service/spotify.service';
import {SpotifyConfig} from '../../conf/spotify.config';

@Page({
    templateUrl: 'build/pages/home/home.html',
    providers: [SpotifyService]
})
export class HomePage {
    public resources;
    public query = 'backstreet boys';
    public resourceTypes = SpotifyConfig.RESOURCE_TYPES;
    public resourceType = this.resourceTypes[0];
    constructor(private spotify: SpotifyService) {
    }

    search() {
        this.spotify.search(this.query, this.resourceType).then(data => {
          console.log(data);
          this.resources = data[`${this.resourceType}s`].items;
        }, err => {
          console.error(err);
        });
    }
}
