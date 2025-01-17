import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienalComponent } from './bienal.component';

describe('BienalComponent', () => {
  let component: BienalComponent;
  let fixture: ComponentFixture<BienalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
