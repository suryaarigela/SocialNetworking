import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div  bgcolor="#536EE1" id="content">
              
       <router-outlet></router-outlet>
     
     </div>
`
})
export class AppComponent {
}