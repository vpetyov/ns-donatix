import { Observable } from 'tns-core-modules/data/observable';
import { NsDonatix } from 'nativescript-ns-donatix';

export class HelloWorldModel extends Observable {
  public message: string;
  private nsDonatix: NsDonatix;

  constructor() {
    super();

    this.nsDonatix = new NsDonatix();
    this.message = this.nsDonatix.message;
  }
}
