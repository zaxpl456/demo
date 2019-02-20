import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoolsFormComponent } from './spools-form.component';

describe('SpoolsFormComponent', () => {
  let component: SpoolsFormComponent;
  let fixture: ComponentFixture<SpoolsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpoolsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoolsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
