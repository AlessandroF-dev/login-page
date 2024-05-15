import { Routes } from '@angular/router';
import { LoginComponent } from './pagess/login/login.component';
import { SignupComponent } from './pagess/signup/signup.component';
import { UserComponent } from './pagess/user/user.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard]
    }
];