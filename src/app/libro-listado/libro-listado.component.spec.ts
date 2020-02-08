/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LibroListadoComponent } from './libro-listado.component';

describe('LibroListadoComponent', () => {
  let component: LibroListadoComponent;
  let fixture: ComponentFixture<LibroListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
