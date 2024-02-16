import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakersComponent } from './bakers.component';

describe('BakersComponent', () => {
  let component: BakersComponent;
  let fixture: ComponentFixture<BakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
