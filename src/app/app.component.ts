
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu: boolean | undefined;
  showOutlet: boolean | undefined;
  constructor(router:Router) {
    router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
          this.showMenu = true;
          if(event.url == "/msag"){
            this.showMenu = event.url !== "/msag";
            this.showOutlet = event.url == "/msag";
          } else if (event.url == "/igvg"){
            this.showMenu = event.url !== "/igvg";
            this.showOutlet = event.url == "/igvg";
          }

        }
      });
    }

  title = 'bcs-tui';
}
