import { ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';

import { ContentRoutingModule } from './content-routing.module';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AddcatComponent } from './addcat/addcat.component';
import { OpenCatComponent } from './openCat/openCat.component';

@NgModule({
  imports: [CommonModule, FormsModule, ContentRoutingModule, SharedModule],
  declarations: [ContentComponent, OpenCatComponent, AddcatComponent],
  providers: [],
})
export class ContentModule {}
