import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {name: "Superman", canFly: true, color: Color.blue},
    {name: "Batman", canFly: false, color: Color.black},
    {name: "Daredevil", canFly: false, color: Color.red},
    {name: "Robin", canFly: false, color: Color.red},
    {name: "Linterna Verde", canFly: true, color: Color.green},
  ];
  public orderBy?: keyof Hero = 'canFly';

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
