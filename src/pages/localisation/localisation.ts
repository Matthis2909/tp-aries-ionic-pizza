import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {
    Environment,
    GoogleMap,
    GoogleMapOptions,
    GoogleMaps,
    GoogleMapsEvent,
    LatLng,
    Marker
} from "@ionic-native/google-maps";

/**
 * Generated class for the LocalisationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localisation',
  templateUrl: 'localisation.html',
})
export class LocalisationPage {
    map: GoogleMap;
    latitude : number;
    longitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalisationPage');
      this.getGeolocation().then((res) => {
          this.latitude = res.coords.latitude;
          this.longitude = res.coords.longitude;
          this.loadMap();
      }).catch((error) => {
          console.error('Error getting location', error);
      });
  }

    loadMap() {

        // This code is necessary for browser
        Environment.setEnv({
            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBP2EtUdE4HfTno-u7NoqK9tF18Z_llL48'
        });

        let latLng = new LatLng(this.latitude, this.longitude);
        console.error(latLng);

        let mapOptions: GoogleMapOptions = {
            camera: {
                target: latLng,
                zoom: 18,
                tilt: 30
            }
        };

        this.map = GoogleMaps.create('map', mapOptions);

        let marker: Marker = this.map.addMarkerSync({
            title: 'ARIES',
            icon: 'blue',
            animation: 'DROP',
            position: latLng
        });
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            alert('clicked');
        });
    }


    public getGeolocation(){
      return this.geolocation.getCurrentPosition();
    }

}
