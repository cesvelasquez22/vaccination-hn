import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    {
      path: '',
      redirectTo: 'search-dni',
      pathMatch: 'full'
    },
    {
      path: 'search-dni',
      loadChildren: () => import('./features/citizens/citizens.module').then((m) => m.CitizensModule),
    },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
