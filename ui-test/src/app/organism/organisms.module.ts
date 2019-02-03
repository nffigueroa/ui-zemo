import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoleculesModule} from '../molecules/molecules.module';
import {HeaderComponent} from '.';
@NgModule({
    declarations: [HeaderComponent],
    entryComponents: [],
    imports: [CommonModule, MoleculesModule],
    exports: [HeaderComponent],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class OrganismsModule { }
