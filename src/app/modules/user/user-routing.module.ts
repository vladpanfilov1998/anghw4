import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolveService} from "./services";

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: ':id', component: UserDetailsComponent, resolve:{data: UserResolveService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
