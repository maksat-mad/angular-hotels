import {Component} from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
      <div class="container">
          <div class="d-flex flex-column justify-content-center align-items-center mt-5">
              <h3 class="text-secondary">{{'No such page' | translate}}</h3>
              <a routerLink="/"
                 class="text-decoration-none text-secondary-red-on-hover">{{'Go to home page' | translate}}</a>
          </div>
      </div>  `
})
export class NotFoundComponent {

}
