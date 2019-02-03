import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SloganComponent, ItemMenuComponent} from '.';
import { TitleSquareComponent } from './title-square/title-square.component';
import { SubtitleSquareComponent } from './subtitle-square/subtitle-square.component';
import { ButtonSquareComponent } from './button-square/button-square.component';
@NgModule({
    declarations: [SloganComponent, ItemMenuComponent, TitleSquareComponent, SubtitleSquareComponent, ButtonSquareComponent],
    entryComponents: [],
    imports: [CommonModule],
    exports: [SloganComponent, ItemMenuComponent],
    providers: []
})

export class AtomsModule { }
