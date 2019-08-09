import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGeneratorComponent } from './ngx-generator.component';

describe('NgxGeneratorComponent', () => {
  let component: NgxGeneratorComponent;
  let fixture: ComponentFixture<NgxGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
