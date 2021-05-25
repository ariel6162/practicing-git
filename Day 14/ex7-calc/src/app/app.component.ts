import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // data
    a: string = '';
    b: string = '';
    results: string[] = [];


    // methods
    setA(value: string) {
        this.a = value;
    }
    setB(value: string) {
        this.b = value;
    }


    add() {
        let result = Number(this.a) + Number(this.b); 
        console.log(result);
    }
    sub() {
        let result = Number(this.a) - Number(this.b); 
        console.log(result);
    }
    mlt() {
        let result = Number(this.a) * Number(this.b); 
        console.log(result);
    }

    go() {
        this.add();
        this.sub();
        this.mlt();
    }
}

