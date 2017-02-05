import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'message-ng2'
})
export class MessageCmpDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('message', elementRef, injector);
  }
}
