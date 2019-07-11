import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrungComponent } from './trung.component';

describe('TrungComponent', () => {
  let component: TrungComponent;
  let fixture: ComponentFixture<TrungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
