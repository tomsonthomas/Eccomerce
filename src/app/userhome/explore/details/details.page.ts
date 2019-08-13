import { CallNumber } from '@ionic-native/call-number/ngx';
import { AdsModel } from './../../Ads.model';
import { UserHomeService } from './../../userHome.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
ads: AdsModel;
comments: AdsModel[];
  constructor(private userService: UserHomeService,  private routr: ActivatedRoute,
              private navigatecntrl: NavController, private callNumber: CallNumber
    ) { }

  ngOnInit() {
    this.routr.paramMap.subscribe(paraMap => {
      if (!paraMap.has('Id')) {
      this.navigatecntrl.navigateBack('/places/tabs/discover');
      return ;
      }
      this.ads = this.userService.getAd(paraMap.get('Id'));
      });
    this.comments = this.userService.fetchAds();
    }
    callNow(number: string) {
      this.callNumber.callNumber(number, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    }
  }


