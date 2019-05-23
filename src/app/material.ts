import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,MatFormFieldModule,MatSelectModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,MatFormFieldModule,MatSelectModule],
})

export class MyOwnCustomMaterialModule{ }
