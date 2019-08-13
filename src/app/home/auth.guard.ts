import { HomeserviceService } from './homeservice.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private homeservice: HomeserviceService , private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> |boolean {
    if ( !this.homeservice.IsAuthenticated) {
      this.router.navigateByUrl('/home');
      return;
    }
    return this.homeservice.IsAuthenticated;
  }

  }


