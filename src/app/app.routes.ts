import { Routes } from '@angular/router';
import { SessionGuard } from './core/guards/session.guard';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';


export const appRoutes: Routes = [ //TODO: router-outlet (Padre)  
  {
    path: 'auth', //TODO (Public) Login, Register, Forgot...
    loadChildren: () => import(`./modules/auth/auth-routes`).then(m => m.authRoutes)
  },
  {
    path: '',//TODO (Private) 🔴🔴
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home-routes`).then(m => m.homeRoutes),
    canActivate: [SessionGuard]  
  },  
];