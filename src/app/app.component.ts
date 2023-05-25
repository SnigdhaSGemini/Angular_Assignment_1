import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 1';
 
show=false;
count=0;
toggleANDcount(){
  this.show=!this.show;
  this.count=this.count+1;
  console.log("No. of 'Display Details' button clicks = "+this.count);
}
check=0;

AddData(data:string){
  const p = document.createElement("p");
  p.innerText=data;
  const div = document.getElementById("paragraphdiv");
  div?.appendChild(p);
  this.check=this.check+1;
  if(this.check%5===0){
    p.style.backgroundColor="blue";
  }
}

}
