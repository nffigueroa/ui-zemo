import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtomsModule} from '../atoms/atoms.module';
import {MenuComponent} from '.';
import { InfoStarSquareComponent } from './info-star-square/info-star-square.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RemainingChartComponent } from './remaining-chart/remaining-chart.component';
import { BlockComponent } from './ad/block/block.component';
import { FooterComponent } from './footer/footer.component';
import { SquareMainComponent } from './square-main/square-main.component';
@NgModule({
    declarations: [MenuComponent, InfoStarSquareComponent, RemainingChartComponent, BlockComponent, FooterComponent, SquareMainComponent],
    entryComponents: [],
    imports: [CommonModule, AtomsModule],
    exports: [MenuComponent, InfoStarSquareComponent, RemainingChartComponent, BlockComponent, FooterComponent, SquareMainComponent],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class MoleculesModule { }
