import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SloganComponent,
    ItemMenuComponent,
    TitleSquareComponent,
    SubtitleSquareComponent,
    ButtonSquareComponent,
    CharRectanguleComponent,
    RemainingChartComponent,
    TitleComponent,
    ParagraphComponent,
    LabelFooterComponent,
    LabelsComponent
} from '.';
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
