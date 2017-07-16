import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchauthorComponent } from './searchauthor.component';

describe('SearchauthorComponent', () => {
  let component: SearchauthorComponent;
  let fixture: ComponentFixture<SearchauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
