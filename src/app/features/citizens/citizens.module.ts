import { NgModule } from '@angular/core';
import { SearchDniComponent } from './components/search-dni/search-dni.component';
import { CitationDetailComponent } from './components/citation-detail/citation-detail.component';
import { CitizensRoutingModule } from './citizens.routing';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SearchDniComponent,
    CitationDetailComponent
  ],
  imports: [
    CommonModule,
    CitizensRoutingModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class CitizensModule { }
