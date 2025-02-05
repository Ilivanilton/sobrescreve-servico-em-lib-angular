import { Component, inject } from '@angular/core';
import { HELLO_WORD_TOKEN } from './hello-word.token';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  template: `
    <p>
      Component 'lib-my-lib': {{ message }}
    </p>
  `,
  styles: ``
})
export class MyLibComponent {

  private helloWorldService = inject(HELLO_WORD_TOKEN);
  message: string = this.helloWorldService.getText();

}
