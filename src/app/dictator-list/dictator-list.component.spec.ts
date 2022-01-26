import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictatorListComponent } from './dictator-list.component';

describe('DictatorListComponent', () => {
  let component: DictatorListComponent;
  let fixture: ComponentFixture<DictatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictatorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
