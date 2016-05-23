import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@App({
  template: `
    <ion-menu [content]="content">
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item>
            Login
          </button>
          <button ion-item>
            Signup
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>`,
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
