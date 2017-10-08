import { Response } from '@angular/http';
import { Component } from '@angular/core';
import { ChuckNorrisService } from './chuck-norris.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   joke  = '';

   constructor( private chuckNorrisService: ChuckNorrisService ) {
    // on load
    this.chuckNorrisService.getChuckNorrisJokes()
      .subscribe((response: Response) => {
        this.joke = response.json().value;
      });
    // every 6 seconds
    setInterval(() =>
       this.chuckNorrisService.getChuckNorrisJokes()
        .subscribe((response: Response) => {
          this.joke = response.json().value;
        })
       , 6000);
       // It must exist a better way to execute the function on load and then every 6 seconds
    }
}
