import { HomePage } from '../home/home.page';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserhomePage } from './userhome.page';
import { AuthGuard } from '../home/auth.guard';

const routes: Routes = [{
    path: 'tabs',
    component: UserhomePage,
    children: [
        {
            path: 'Explore',
            children: [{
                path: '',
                loadChildren: './explore/explore.module#ExplorePageModule', canLoad: [AuthGuard]
            }, {
                path: ':Id',
                loadChildren: './explore/details/details.module#DetailsPageModule', canLoad: [AuthGuard]
            }]

        },
        {
            path: 'discover',
            children: [{
                path:  '',
               loadChildren: './discover/discover.module#DiscoverPageModule', canLoad: [AuthGuard]
            },
        {
        path: 'subcategory/:id',

        loadChildren: './discover/subcategory/subcategory.module#SubcategoryPageModule', canLoad: [AuthGuard]
    },{
        path: 'itemdetails/:id',
        loadChildren: './discover/subcategory/items/itemdetails/itemdetails.module#ItemdetailsPageModule', canLoad: [AuthGuard]
    },
    {
        path: 'items/:id',
        loadChildren: './discover/subcategory/items/items.module#ItemsPageModule', canLoad: [AuthGuard]
    }
    ]},
        {
            path: 'account',
            children: [{
                path:  '',
               loadChildren: './myaccount/myaccount.module#MyaccountPageModule', canLoad: [AuthGuard]
            }]
        }]
},
{
    path: '',
    redirectTo: './user-login/tabs/explore',
    pathMatch: 'full'
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserHomeRoutingModule {

}
