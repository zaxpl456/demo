import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoolsComponent } from './spools.component';

describe('SpoolsComponent', () => {
  let component: SpoolsComponent;
  let fixture: ComponentFixture<SpoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
