import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablesExampleComponent } from './data-tables-example.component';

describe('DataTablesExampleComponent', () => {
  let component: DataTablesExampleComponent;
  let fixture: ComponentFixture<DataTablesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTablesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
