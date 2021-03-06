import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbookComponent } from './listbook.component';

describe('ListbookComponent', () => {
  let component: ListbookComponent;
  let fixture: ComponentFixture<ListbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
