import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  currentInput: string = '';


  buttonInput(value: string): void {
    if (value === 'clear') {
      this.currentInput = '';
    } else if (value === '=') {
      try{
        this.currentInput = eval(this.currentInput)
      }catch(error){
        this.currentInput= 'error'
      }
    }else{
      this.currentInput += value
    }
  }
}
