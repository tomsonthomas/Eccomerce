import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UserHomeService } from 'src/app/userhome/userHome.service';
import { AdsModel } from 'src/app/userhome/Ads.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  ads: AdsModel;
  comments: AdsModel[];
  newAds: AdsModel[];
  subID: string;

  constructor(private service: UserHomeService, private routr: ActivatedRoute,
              private navigatecntrl: NavController) { }
            ionViewWillEnter(){
              this.newAds = this.service.fetchAds();
              }
  ngOnInit() {
   this.routr.paramMap.subscribe(paraMap => {
      if (!paraMap.has('id')) {
       this.navigatecntrl.navigateBack('/userhome/tabs/discover');
       return ;
     }
      this.subID = paraMap.get('id');
      console.log(this.subID);
      this.ads = this.service.getAd(paraMap.get('id'));
    });
    // this.comments = this.service.fetchAds();
   this.newAds = this.service.fetchAds();
     }
     searchItems(event) {
const search  = event.target.value;
this.newAds = this.service.fetchAds();

    // if the value is an empty string don't filter the items
if (search && search.trim() !== '') {
      this.newAds = this.newAds.filter((newAds) => {
        return (newAds.title.toLowerCase().indexOf(search.toLowerCase()) > -1 || newAds.rate.toLowerCase().indexOf(search.toLowerCase()) > -1);
      });
    } else {
      this.newAds = this.service.fetchAds();
    }

     }
  }





