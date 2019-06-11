import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchComponent } from './research.component';
import { SidenavComponent } from './records/sidenav.component';

const routes: Routes = [
  { path: '', component: ResearchComponent, children: [    
    { path: 'records', loadChildren: () => import('./records/records.module').then(m => m.RecordsModule) },
    { path: 'gtree', loadChildren: () => import('./gtree/gtree.module').then(m => m.GtreeModule) }    
  ]} ,
  { path: '', outlet: 'side-nav', component: SidenavComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }