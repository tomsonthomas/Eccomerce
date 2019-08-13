import { UserHomeService } from './../userHome.service';
import { Component, OnInit } from '@angular/core';
import { AdsModel } from '../Ads.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  newAds: AdsModel[];

  constructor(private service: UserHomeService) { }
  ionViewWillEnter() {
    this.newAds = this.service.fetchAds();
    }
  ngOnInit() {
    this.newAds = this.service.fetchAds();
  }
  searchItem(ev) {
    const val = ev.target.value;
    this.newAds = this.service.fetchAds();
    // console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.newAds = this.newAds.filter((newAds) => {
        return (newAds.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || newAds.rate.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.newAds = this.service.fetchAds();
    }

  }

}
