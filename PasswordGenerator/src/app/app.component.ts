import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordGenerator';
  length = 0;
  password = '';   // craete a property and bind it with a html tag.
  includeLetters = false;
  includeSymbols = false;
  includeNumeric = false;

  onChangeLenth(value:string){

    const parsedValue = parseInt(value);

    if(value.length == 0) this.length = 0;

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    //  alert(this.length);
    }

  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
    
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
   
  }

  onChangeUseNumeric(){
    this.includeNumeric = !this.includeNumeric;
  
  }

  onButtonClick(){
   
    // console.log(`
    // My password will contain the following:
    // Include letters = ${this.includeLetters}
    // Include Sysmbols = ${this.includeSymbols}
    // Include Numerics = ${this.includeNumeric}   `);

    let generatedPassword = '';

    const letters = 'abcdefgijklmnoqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+';

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumeric){
      validChars += numbers;
    }
    
    if(this.includeSymbols){
      validChars += symbols;
    }

    for(let i=0; i<this.length;i++){

      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword ;
  }

  // getPassword(){
  //   return this.password;
  // }

  // getName(){
  //   return "Bassha";
  // }


}
