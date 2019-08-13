import { NavController } from '@ionic/angular';
import { SubCategoryModel } from './../../subcategory.model';
import { UserHomeService } from './../../userHome.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
subCategory: SubCategoryModel[];
catId: string;
  constructor(private homeservice: UserHomeService,
              private activated: ActivatedRoute,
              private route: Router,
              private naCntrl: NavController
    ) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
      //  this.naCntrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.catId = paramMap.get('id');
      // this.isLoading = true;
      return this.subCategory = this.homeservice.getSubCategory(paramMap.get('id'));
      // console.log(this.subCategory)
  });
}
openDetailsList(id: string) {
  this.route.navigate(['/', 'userhome', 'tabs', 'discover', 'items', id]);
}
}
