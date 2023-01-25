import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { TableComponent } from './components/dashboard/table/table.component';
import { ActivateGuard } from './guards/activate.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ActivateGuard]  },
  { path: 'table', component: TableComponent, canActivate: [ActivateGuard]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ActivateGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
