import { Crop } from '@ionic-native/crop';
import { ImagePicker } from '@ionic-native/image-picker';
import { HomeserviceService } from './../../home/homeservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  email;
  photos: string[];
  constructor(private homeservice: HomeserviceService) { }

  ngOnInit() {
    this.email = this.homeservice.UserEmail();
  }
//   openImagePicker() {
//     const options = {
//       maximumImagesCount: 5,
//     };
//     this.photos = new Array<string>();
//     this.imagePicker.getPictures(options)
//     .then((results) => {
//       this.reduceImages(results).then(() => {
//         console.log('all images cropped!!');
//       });
//     }, (err) => { console.log(err); });
//   }

// reduceImages(selected_pictures: any): any {
//     return selected_pictures.reduce((promise: any, item: any) => {
//       return promise.then((result) => {
//         return this.cropService.crop(item, {quality: 75})
// 				.then(cropped_image => this.photos.push(cropped_image));
//       });
//     }, Promise.resolve());
//   }

logOut() {
  this.homeservice.logOut();
}
}
