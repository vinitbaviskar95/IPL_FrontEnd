import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordhistorylogComponent } from './passwordhistorylog.component';

describe('PasswordhistorylogComponent', () => {
  let component: PasswordhistorylogComponent;
  let fixture: ComponentFixture<PasswordhistorylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordhistorylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordhistorylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
