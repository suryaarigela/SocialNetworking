import {Router,RouterModule} from '@angular/router';
import{HomeComponent} from './home.component';


import{NotFoundComponent} from './not-found.component';



export const appRouting=RouterModule.forRoot([
    {
        path:'',component:HomeComponent 
    },
    
    {
        path:'**',component:NotFoundComponent
    }
])