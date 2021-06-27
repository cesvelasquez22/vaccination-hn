import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CitationDetailComponent } from './components/citation-detail/citation-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchDniComponent } from './components/search-dni/search-dni.component';

const routes: Routes = [
    { path: '', redirectTo: 'search-dni', pathMatch: 'full' },
    { path: 'search-dni', component: SearchDniComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'citation/create', component: CitationDetailComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CitizensRoutingModule { }
