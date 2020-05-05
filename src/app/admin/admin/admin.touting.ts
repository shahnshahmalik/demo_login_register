import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const AdminRoutingModule = RouterModule.forRoot(routes);