import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the Placead page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-placead',
  templateUrl: 'placead.html',
})
export class Placead {

  constructor(public navCtrl: NavController, public navParams: NavParams,private imagePicker: ImagePicker,private camera: Camera) {
  }


  ionViewDidLoad() {
    var options = {
   maximumImagesCount: 10,
   width: 800,
   height: 800,
   quality: 80
  };
    console.log('ionViewDidLoad Placead');
    this.imagePicker.getPictures(options).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
  }
}, (err) => { });
  }

  accessGal(){
    console.log('HHHHHHHHHHHH');
      var options = {
   maximumImagesCount: 10,
   width: 800,
   height: 800,
   quality: 80
  };
    console.log('ionViewDidLoad Placead');
    this.imagePicker.getPictures(options).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
  }
}, (err) => { });
  }



accessGallery(){
  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}


this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 console.log('base64Image '+base64Image);
}, (err) => {
 // Handle error
});

}

}

