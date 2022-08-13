import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePersonalizadaComponent } from './pipe-personalizada.component';

describe('PipePersonalizadaComponent', () => {
  let component: PipePersonalizadaComponent;
  let fixture: ComponentFixture<PipePersonalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePersonalizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipePersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
