import { Routes } from '@angular/router';
import { LoginComponent } from './pagess/login/login.component';
import { SignupComponent } from './pagess/signup/signup.component';
export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];
