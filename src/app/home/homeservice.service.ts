import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  constructor(private router: Router) { }
  private authenticated = true;
  private Username = 'Test User';
  private userId = '123456';

  private Email = 'abc';
  private logintime = 'abc';

  get IsAuthenticated() {
  return this.authenticated;
  }
  getUserId() {
    return this.userId;
  }
 UserEmail() {
    return this.Email;
  }
  login(useremail: string) {
    this.authenticated = true;
    this.Email = useremail;
  }

  logOut() {
    this.authenticated = false;
    this.Email = '';
    this.router.navigate(['/home']);
  }
}
