import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  private text: any = "my-lib works!";
  getText(){
    return this.text;
  }
}
