import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindataComponent } from './logindata.component';

describe('LogindataComponent', () => {
  let component: LogindataComponent;
  let fixture: ComponentFixture<LogindataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
