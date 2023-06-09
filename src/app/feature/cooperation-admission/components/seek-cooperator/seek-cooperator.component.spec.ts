import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekCooperatorComponent } from './seek-cooperator.component';

describe('SeekCooperatorComponent', () => {
  let component: SeekCooperatorComponent;
  let fixture: ComponentFixture<SeekCooperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekCooperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekCooperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
