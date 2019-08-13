import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './home/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'userhome', loadChildren: './userhome/userhome.module#UserhomePageModule', canLoad: [AuthGuard] },
  { path: 'explore', loadChildren: './userhome/explore/explore.module#ExplorePageModule', canLoad: [AuthGuard] },
  { path: 'sellerlogin', loadChildren: './sellerlogin/sellerlogin.module#SellerloginPageModule'},
  { path: 'userreg', loadChildren: './userreg/userreg.module#UserregPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
