import { Directive, ElementRef, Injector, Input, OnInit, SimpleChanges, OnChanges, DoCheck,
  OnDestroy } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'message-ng2'
})
export class MessageCmpDirective extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
  OnDestroy {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('message', elementRef, injector);
  }

  ngOnInit() { super.ngOnInit(); }

  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }
  ngDoCheck() { super.ngDoCheck(); }
  ngOnDestroy() { super.ngOnDestroy(); }
}
