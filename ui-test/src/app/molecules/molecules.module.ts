import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtomsModule} from '../atoms/atoms.module';
import {MenuComponent} from '.';
@NgModule({
    declarations: [MenuComponent],
    entryComponents: [],
    imports: [CommonModule, AtomsModule],
    exports: [MenuComponent],
    providers: []
})

export class MoleculesModule { }
