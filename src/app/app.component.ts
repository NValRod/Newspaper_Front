import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Newspaper_Front';

  mostrarNavegacion = true;

  constructor(private location: Location) {
    this.location.onUrlChange((url: string) => {
      //Verify the current URL and update showNavigation accordingly.
      this.mostrarNavegacion = !url.endsWith('/suscription');
    });
  }
}
