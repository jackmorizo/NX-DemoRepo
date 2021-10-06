import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDataTablesExampleComponent } from './custom-data-tables-example.component';

describe('CustomDataTablesExampleComponent', () => {
  let component: CustomDataTablesExampleComponent;
  let fixture: ComponentFixture<CustomDataTablesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDataTablesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDataTablesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
