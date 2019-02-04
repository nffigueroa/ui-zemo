import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SloganComponent, ItemMenuComponent} from '.';
import { TitleSquareComponent } from './title-square/title-square.component';
import { SubtitleSquareComponent } from './subtitle-square/subtitle-square.component';
import { ButtonSquareComponent } from './button-square/button-square.component';
import { CharRectanguleComponent } from './char-rectangule/char-rectangule.component';
import { RemainingChartComponent } from './remaining-chart/remaining-chart.component';
import { TitleComponent } from './ad/title/title.component';
import { ParagraphComponent } from './ad/paragraph/paragraph.component';
import { LabelFooterComponent } from './label-footer/label-footer.component';
import { LabelsComponent } from './square-main/labels/labels.component';
@NgModule({
    declarations: [SloganComponent,
                ItemMenuComponent,
                TitleSquareComponent,
                SubtitleSquareComponent,
                ButtonSquareComponent,
                CharRectanguleComponent,
                RemainingChartComponent,
                TitleComponent,
                ParagraphComponent,
                LabelFooterComponent,
                LabelsComponent],
    entryComponents: [],
    imports: [CommonModule],
    exports: [SloganComponent,
        ItemMenuComponent,
        TitleSquareComponent,
        SubtitleSquareComponent,
        ButtonSquareComponent,
        CharRectanguleComponent,
        RemainingChartComponent,
        TitleComponent,
        ParagraphComponent,
        LabelFooterComponent,
        LabelsComponent],
    providers: []
})

export class AtomsModule { }
