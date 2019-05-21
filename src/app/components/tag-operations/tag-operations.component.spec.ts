import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagOperationsComponent } from './tag-operations.component';

describe('TagOperationsComponent', () => {
  let component: TagOperationsComponent;
  let fixture: ComponentFixture<TagOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
