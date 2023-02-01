import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe create', () => {
    expect(component).toBeTruthy();
  });

  // // component functions
  // it('Debe Sumar dos numeros', () => {
  //   component.firstNumber = 1;
  //   component.secondNumber = 2;
  //   expect(
  //     component.sumar(component.firstNumber, component.secondNumber)
  //   ).toEqual(3);
  // });

  // it('Debe Restar dos numeros', () => {
  //   component.firstNumber = 1;
  //   component.secondNumber = 2;
  //   expect(
  //     component.restar(component.firstNumber, component.secondNumber)
  //   ).toEqual(-1);
  // });

  // it('Debe Multiplicar dos numeros', () => {
  //   component.firstNumber = 1;
  //   component.secondNumber = 2;
  //   expect(
  //     component.multiplicar(component.firstNumber, component.secondNumber)
  //   ).toEqual(2);
  // });

  // it('Debe Dividir dos numeros', () => {
  //   component.firstNumber = 1;
  //   component.secondNumber = 2;
  //   expect(
  //     component.dividir(component.firstNumber, component.secondNumber)
  //   ).toEqual(0.5);
  // });

  // it('Debe calcular la suma', () => {
  //   component.firstNumber = 1;
  //   component.secondNumber = 2;
  //   component.operation = 'add';
  //   component.calculate();
  //   expect(component.result).toEqual('La suma es: 3');
  // });

  // it('Debe calcular la suma desde el boton', () => {
  //   component.firstNumber = 1;
  //   component.secondNumber = 2;
  //   component.operation = 'add';
  //   const btnCalcular = fixture.debugElement.query(By.css('#botonCalcular'));
  //   btnCalcular.nativeElement.click();
  //   expect(component.result).toEqual('La suma es: 3');
  // });
});
