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
    sum: number = 0;
    dif: number = 0;
    prd: number = 0;
    show: boolean = false;


    // methods
    setA(value: string) {
        this.a = value;
        this.show = false;
    }
    setB(value: string) {
        this.b = value;
        this.show = false;
    }


    add() {
        this.sum = Number(this.a) + Number(this.b);
    }
    sub() {
        this.dif = Number(this.a) - Number(this.b);

    }
    mlt() {
        this.prd = Number(this.a) * Number(this.b);

    }

    go() {
        this.add();
        this.sub();
        this.mlt();
        this.show = true;
    }
}

