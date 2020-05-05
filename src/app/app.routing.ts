import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './_helpers';
import { AdminComponent } from './admin/admin/admin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', component: AdminComponent, canActivate: [AuthGuard],
    children: [] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home   
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);