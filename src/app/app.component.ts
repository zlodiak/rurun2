import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private closeSidenav(sidenav) {
    sidenav.close();
  }

  private openSidenav(sidenav) {
    sidenav.open();
  }

}
