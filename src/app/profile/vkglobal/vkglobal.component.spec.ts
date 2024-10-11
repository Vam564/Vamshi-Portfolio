import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkGlobalComponent } from './vkglobal.component';

describe('VkGlobalComponent', () => {
  let component: VkGlobalComponent;
  let fixture: ComponentFixture<VkGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
