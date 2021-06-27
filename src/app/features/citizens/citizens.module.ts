import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchDniComponent } from './components/search-dni/search-dni.component';
import { CitationDetailComponent } from './components/citation-detail/citation-detail.component';
import { CitizensRoutingModule } from './citizens.routing';
import { CitizensService } from './services/citizens.service';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';


@NgModule({
  declarations: [
    SearchDniComponent,
    CitationDetailComponent,
    ShortcutsComponent
  ],
  imports: [
    CommonModule,
    CitizensRoutingModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,

  ],
  providers: [CitizensService],
})
export class CitizensModule { }
