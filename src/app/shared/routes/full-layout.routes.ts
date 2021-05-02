import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'adduser',
    loadChildren: () =>
      import('../../pages/adduser/adduser.module').then((m) => m.AdduserModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'users',
    loadChildren: () =>
      import('../../users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
];
