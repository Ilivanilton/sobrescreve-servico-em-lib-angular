import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private text: any = "AppService aki";
  getText(){
    return this.text;
  }
}
