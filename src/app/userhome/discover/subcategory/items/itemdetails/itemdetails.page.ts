import { Component, OnInit } from '@angular/core';
import { AdsModel } from 'src/app/userhome/Ads.model';
import { UserHomeService } from 'src/app/userhome/userHome.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.page.html',
  styleUrls: ['./itemdetails.page.scss'],
})
export class ItemdetailsPage implements OnInit {
itemId: string;

  ads: AdsModel;
comments: AdsModel[];
  constructor(private userService: UserHomeService,  private routr: ActivatedRoute,
              private navigatecntrl: NavController, private callNumber: CallNumber) { }

  ngOnInit() {
    this.routr.paramMap.subscribe(paraMap => {
      if (!paraMap.has('id')) {
      this.navigatecntrl.navigateBack('/userhome/tabs/discover');
      return ;
      }
      this.itemId = paraMap.get('id');
      this.ads = this.userService.getAd(paraMap.get('id'));
      });
    this.comments = this.userService.fetchAds();
    }

    callNow(number) {
      this.callNumber.callNumber(number, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    }
}
