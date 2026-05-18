import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  
  toggleMenu(button:HTMLButtonElement) {
    const navlinks=document.querySelector('#nav-links');
    navlinks?.classList.toggle('active'); // mostrar/ocultar menú
  }
}
