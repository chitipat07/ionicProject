import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestcrudPage } from './testcrud.page';

describe('TestcrudPage', () => {
  let component: TestcrudPage;
  let fixture: ComponentFixture<TestcrudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
