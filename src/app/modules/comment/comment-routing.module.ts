import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentComponent} from "./components/comment/comment.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolveService} from "./services";

const routes: Routes = [
  {
    path: '', component: CommentComponent, children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {data: CommentResolveService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
