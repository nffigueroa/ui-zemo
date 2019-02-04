import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoleculesModule} from '../molecules/molecules.module';
import {HeaderComponent} from '.';
import { StarSquareComponent } from './star-square/star-square.component';
import { AdBlockComponent } from './ad-block/ad-block.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
    declarations: [HeaderComponent, StarSquareComponent, AdBlockComponent, FooterComponent],
    entryComponents: [],
    imports: [CommonModule, MoleculesModule],
    exports: [HeaderComponent, StarSquareComponent, AdBlockComponent, FooterComponent],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class OrganismsModule { }
