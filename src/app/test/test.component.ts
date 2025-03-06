import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  a = 20;
  b: string = '30';


  test(){
    console.log(this.a,' => ',typeof this.a);
    console.log(this.b,' => ',typeof this.b);
    console.log(true + 'pain');

    var randNum = Math.random()


    console.log(Math.round(randNum*1000));

  }
  
  k = 89;

  ngOnInit(){
    console.log(this.k)
  }
}
