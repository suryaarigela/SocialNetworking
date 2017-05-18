import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Posts } from './posts';
import { IonicImageViewerModule } from 'ionic-img-viewer';
@NgModule({
  declarations: [
    Posts,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(Posts),
  ],
  exports: [
    Posts
  ]
})
export class PostsModule {}
