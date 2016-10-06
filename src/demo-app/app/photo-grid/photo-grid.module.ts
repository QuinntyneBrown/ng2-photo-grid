import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PhotoGridComponent } from './photo-grid.component';

const declarables = [PhotoGridComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class PhotoGridModule { }
