import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerloginPage } from './sellerlogin.page';

describe('SellerloginPage', () => {
  let component: SellerloginPage;
  let fixture: ComponentFixture<SellerloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
