import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MoveFocusService } from './move-focus.service';

@Component({
  selector: 'shared-test',
  template: `
    <div sharedMoveFocus>
      <div class="to-be-focused-on-non-focusable-element"></div>
      <div
        class="to-be-focused-on-non-focusable-element-that-has-tabIndex"
        tabindex="-1"
      ></div>
      <textarea></textarea> <a href="">click me</a> <button>click me</button>
      <input type="text" />
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <link href="#" />
    </div>
  `,
})
class TestComponent {
  constructor(private moveFocusService: MoveFocusService) {}
}

describe('move-focus.directive.ts', () => {
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let component: TestComponent;
  let moveFocusService: MoveFocusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [MoveFocusService],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    moveFocusService = TestBed.get(MoveFocusService);
  });
  it('should be defined', () => {
    fixture.detectChanges();

    expect(moveFocusService).toBeDefined();
  });

  it('should move focus to non focusable element that does not have a tabindex', () => {
    const selector = '.to-be-focused-on-non-focusable-element';
    moveFocusService.byQuerySelector(selector);
    fixture.detectChanges();
    const actualEl = de.query(By.css(':focus')).nativeElement;
    const expectedEl = de.query(By.css(selector)).nativeElement;
    expect(actualEl).toBe(expectedEl);
  });

  it('should move focus to non focusable element that has a tabindex', () => {
    const selector =
      '.to-be-focused-on-non-focusable-element-that-has-tabIndex';
    moveFocusService.byQuerySelector(selector);
    fixture.detectChanges();
    const actualEl = de.query(By.css(':focus')).nativeElement;
    const expectedEl = de.query(By.css(selector)).nativeElement;
    expect(actualEl).toBe(expectedEl);
  });

  it('should move focus to textarea', () => {
    const selector = 'textarea';
    moveFocusService.byQuerySelector(selector);
    fixture.detectChanges();
    const actualEl = de.query(By.css(':focus')).nativeElement;
    const expectedEl = de.query(By.css(selector)).nativeElement;
    expect(actualEl).toBe(expectedEl);
  });
  it('should move focus to a button', () => {
    const selector = 'button';
    moveFocusService.byQuerySelector(selector);
    fixture.detectChanges();
    const actualEl = de.query(By.css(':focus')).nativeElement;
    const expectedEl = de.query(By.css(selector)).nativeElement;
    expect(actualEl).toBe(expectedEl);
  });

  it('should move focus to a select', () => {
    const selector = 'select';
    moveFocusService.byQuerySelector(selector);
    fixture.detectChanges();
    const actualEl = de.query(By.css(':focus')).nativeElement;
    const expectedEl = de.query(By.css(selector)).nativeElement;
    expect(actualEl).toBe(expectedEl);
  });
});
