import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AddcatComponent } from './addcat/addcat.component';

import { ContentComponent } from './content.component';
import { OpenCatComponent } from './openCat/openCat.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'add',
    component: AddcatComponent,
  },
  {
    path: 'open',
    component: OpenCatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
