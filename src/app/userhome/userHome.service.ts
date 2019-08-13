import { AdsModel } from './Ads.model';
import { Injectable } from '@angular/core';
import { take, delay, tap } from 'rxjs/operators';
import { SubCategoryModel } from './subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {



ads = [ new AdsModel('1',
// tslint:disable-next-line: max-line-length
'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
'$2500',
'2500 Sqft,4 BHK,New for sale',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('2',
'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/07/external-1-1-920x520.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('3',
'https://s.hdnux.com/photos/01/04/34/75/17944399/5/920x920.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('4',
'https://www.prominentproperties.com/wp-content/uploads/2019/05/1921304.1-385x258.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('5',
'http://res.cloudinary.com/roundglass/image/upload/v1518083983/roundglass/magazine/DSC00762-Banner-Image_ehvuzs.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('6',
'https://i1.trekearth.com/photos/137448/royal_guest_house.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('7',
'https://lindasyogadotcom.files.wordpress.com/2007/08/dreamshala.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('8',
'https://media-cdn.tripadvisor.com/media/photo-s/0a/56/d8/36/the-pamba-heritage-villa.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('9',
'http://1.bp.blogspot.com/-W3XG0IgV4I4/UTdw8ptDMjI/AAAAAAAABBQ/sd8H7y8_fec/s1600/fare_house_B_01.gif',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('10',
'https://t-ec.bstatic.com/images/hotel/max1024x768/108/108504648.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('11',
'https://philipkuttysfarm.com/wp-content/uploads/2014/08/philipkuttys260814-0003.jpg',
'$2500',
'Discover ideas about House Front Design',
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904'),
new AdsModel('12',
'https://www.wildland.com/files/img/accommodations/Kutty%20farm%20villa.jpg',
'$2500',
'Discover ideas about House Front Design',
// tslint:disable-next-line: max-line-length
'kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea kerala house designs floor plans kerala home design floor isometric views small house plans kerala house design idea'
, 'Kowdiar,Trivandrum', '8301097904')];

subcategory = [new SubCategoryModel('1', '1', 'For Sale:House & Appartments '),
new SubCategoryModel('2', '1', 'For Rent:House & Appartments'),
new SubCategoryModel('3', '1', 'Land & Plots'),
new SubCategoryModel('4', '1', 'For Sale:Shops & Office'),
new SubCategoryModel('5', '1', 'For Rent:Shops & Office'),
new SubCategoryModel('6', '1', 'PG & Guests'),
new SubCategoryModel('7', '2', 'Cars'),
new SubCategoryModel('8', '2', 'Taxi'),
new SubCategoryModel('9', '2', 'Spare Parts'),
new SubCategoryModel('10', '3', 'Motorcycles'),
new SubCategoryModel('11', '3', 'Scooter'),
new SubCategoryModel('12', '3', 'Spare Parts'),
new SubCategoryModel('13', '3', 'Bycycles'),
new SubCategoryModel('14', '4', 'Sofa & Dining'),
new SubCategoryModel('15', '4', 'Home Decor & Garder'),
new SubCategoryModel('16', '4', 'Kids Items'),
new SubCategoryModel('17', '4', 'Other Items'),
new SubCategoryModel('18', '5', 'Tv'),
new SubCategoryModel('19', '5', 'Kitchen Items'),
new SubCategoryModel('20', '5', 'Computers & Laptops'),
new SubCategoryModel('21', '5', 'Camera & Lenses'),
new SubCategoryModel('22', '5', 'Games'),
new SubCategoryModel('23', '5', 'Fridges'),
new SubCategoryModel('24', '5', 'ACs'),
new SubCategoryModel('25', '5', 'Washing MAchines'),
new SubCategoryModel('26', '6', 'Mobile Phones'),
new SubCategoryModel('27', '6', 'Tablets'),
new SubCategoryModel('28', '6', 'Accessories')
];
fetchAds() {
  return this.ads;
}
  constructor() { }
  getAd(id: string) {
    return {...this.ads.find(p => p.id === id)};

  }
  getSubCategory(id: string) {
    return this.subcategory.filter(item => {
      return item.categoryId.toLowerCase().indexOf(id.toLowerCase()) > -1;
    });
         
  }
}
