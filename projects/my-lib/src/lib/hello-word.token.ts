import { InjectionToken } from "@angular/core";
import { MyLibService } from "./my-lib.service";


export const HELLO_WORD_TOKEN = new InjectionToken('HelloWorldToken', {
    providedIn: 'root',
    factory: () => new MyLibService
  });