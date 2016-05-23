export class SpotifyConfig {
    public static get API_URL():string { return 'https://api.spotify.com'; }
    public static get CLIENT_ID():string { return 'd04a6e41abaf420a84403931704f93e0'; }
    public static get RESOURCE_TYPES():Array<string> {
      return [ 'album',  'artist', 'playlist', 'track'];
    }
}
