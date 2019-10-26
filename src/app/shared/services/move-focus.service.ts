import { Injectable } from '@angular/core';

@Injectable()
export class MoveFocusService {
  byQuerySelector(querySelector: string) {
    const element = <HTMLElement>document.querySelector(querySelector);
    if (!element) {
      return;
    }
    if (!this.isElementFocusable(element)) {
      element.setAttribute('tabindex', '-1');
    }
    element.focus();
  }

  isElementFocusable(element: HTMLElement) {
    const nodeName = element.nodeName.toLowerCase();
    const focusableTagNames = [
      'input',
      'a',
      'link',
      'button',
      'select',
      'textarea',
    ];
    const inputTagName = focusableTagNames.shift();
    return (
      focusableTagNames.includes(nodeName) ||
      (nodeName === inputTagName &&
        element.getAttribute('type') !== 'hidden') ||
      Boolean(element.getAttribute('tabindex'))
    );
  }
}
