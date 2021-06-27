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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    SearchDniComponent,
    CitationDetailComponent,
    DashboardComponent
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
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,

  ],
  providers: [CitizensService],
})
export class CitizensModule { }
