import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent, MyLibComponent } from 'my-lib';
import { MyMenuComponentComponent } from './my-menu-component/my-menu-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  myMenuComponent: any = MyMenuComponentComponent
}
