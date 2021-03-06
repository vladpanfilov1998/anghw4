import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentRoutingModule} from './comment-routing.module';
import {CommentResolveService, CommentService} from "./services";
import {CommentComponent} from './components/comment/comment.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentsComponent} from './components/comments/comments.component';


@NgModule({
  declarations: [
    CommentComponent,
    CommentDetailsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule
  ],
  providers: [
    CommentService,
    CommentResolveService
  ]
})
export class CommentModule {
}
