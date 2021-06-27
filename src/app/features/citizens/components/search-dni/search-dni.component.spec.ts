import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDniComponent } from './search-dni.component';

describe('SearchDniComponent', () => {
  let component: SearchDniComponent;
  let fixture: ComponentFixture<SearchDniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
