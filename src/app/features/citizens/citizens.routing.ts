import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CitationDetailComponent } from './components/citation-detail/citation-detail.component';
import { SearchDniComponent } from './components/search-dni/search-dni.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';

const routes: Routes = [
    { path: 'search-dni', component: SearchDniComponent },
    { path: 'shortcuts', component: ShortcutsComponent },
    { path: 'citation/create', component: CitationDetailComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CitizensRoutingModule { }
