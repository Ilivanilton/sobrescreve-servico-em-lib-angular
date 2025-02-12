import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { Component, Input, Type } from '@angular/core';

@Component({
  selector: 'lib-list',
  standalone: true,
  imports: [NgComponentOutlet, AsyncPipe],
  styleUrl: './list.component.css',
  template: `<ng-container *ngComponentOutlet="getMenuComponent()" />`
})
export class ListComponent {

  @Input() menuComponent!: Type<any>;


  getMenuComponent(){
    return this.menuComponent;
  }

}
