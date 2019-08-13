import { HomeserviceService } from './homeservice.service';

import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading = false;
  place: any;

    constructor(private router: Router,
                private loadingControl: LoadingController,
                private http: HttpClient,
                private authservice: HomeserviceService) {}
    // tslint:disable-next-line: variable-name
    login(_form: NgForm) {
      const email = _form.value.email;
      const pass = _form.value.password;
      if (email.length <= 5 || pass.length <= 5) {
        return;
      } else { console.log(email, pass);
               this.authservice.login(email);

               this.loadingControl.create({keyboardClose: true, message: 'Logging in'})
  .then(loadingEl => {
    loadingEl.present();
    setTimeout(() => {
      this.isLoading = false;
      loadingEl.dismiss();

     // this.getData();


      this.router.navigateByUrl('/userhome/tabs/Explore');
    }, 2500);


  });
               this.isLoading = true;

              }

      }
      // getData() {
      //   console.log('function called');
      //   const payload = new HttpParams();
      //   payload.set('table', 'club');
      //   return this.http.post<any>('http://beautyclub.nyesteventuretech.com/android/getTable.php', payload.toString()).pipe(map(res => {
      //     console.log(res);
      //   }));

      // }

}
