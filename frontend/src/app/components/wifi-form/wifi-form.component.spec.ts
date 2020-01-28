import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiFormComponent } from './wifi-form.component';

describe('WifiFormComponent', () => {
  let component: WifiFormComponent;
  let fixture: ComponentFixture<WifiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
