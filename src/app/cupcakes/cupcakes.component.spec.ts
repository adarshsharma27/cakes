import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakesComponent } from './cupcakes.component';

describe('CupcakesComponent', () => {
  let component: CupcakesComponent;
  let fixture: ComponentFixture<CupcakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupcakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
