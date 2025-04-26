import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 AÑADE ESTO
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent], // 👈 IMPORTA RouterModule AQUÍ
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';
}