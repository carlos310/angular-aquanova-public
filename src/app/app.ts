import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { FontSize } from './components/font-size/font-size';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,FontSize, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aquanova');
}
