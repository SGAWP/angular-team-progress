import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        SharedModule
    ]
})
export class LayoutModule { }