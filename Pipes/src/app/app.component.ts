import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
     title = "Pipes"
     name:string = '';
     date:string = '';
     amount:number = 0;

     onNameChange(value:string){
       this.name = value;
     }

     onDateChange(value:string){
       this.date = value;
     }


     onAmountChange(value:number){
      this.amount = value;
    }

}
