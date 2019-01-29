import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newUser:any;
  newItem:any;
  allUsers:any;
  salesTax = {number: 0.00}
  tip = {number:0.00}
  subtotal = 0.00;
  showBreakdown = false;
  constructor(private _httpService:HttpService) {}
  ngOnInit(){
    this.newUser = {name:"", items:[]}
    this.newItem = {item:"", price:0.00}
    this.allUsers = [];
    this.getAllUsers();
  }
  getAllUsers(){
    let observable = this._httpService.getPrimaries();
    observable.subscribe(data=>{
      this.allUsers = data['data']
    })
  }
  createUser(){
    let observable = this._httpService.addNew(this.newUser);
    observable.subscribe(data=>{
      console.log(data);
      this.newUser = {name:"", items:[]}
      this.getAllUsers();
    })
  }
  addItem(userId,newItem,newPrice){
    this.newItem.price = newPrice.value;
    this.newItem.item = newItem.value;
    let observable = this._httpService.addSecondary(userId, this.newItem)
    observable.subscribe(data=>{
      console.log(data);
      this.newItem = {item:"", price:0.00}
      this.getAllUsers();
    })
  }
  calculate(){
    //grabs subtotal
    for(var i = 0; i < this.allUsers.length;i++){
      var userSum = 0;
      for(var j = 0; j < this.allUsers[i].items.length;j++){
        userSum += this.allUsers[i].items[j].price;
        this.subtotal += this.allUsers[i].items[j].price;
      }
      this.allUsers[i].userSum = (userSum * (1 + (this.salesTax.number / 100))) + (this.tip.number * (userSum/this.subtotal));
    }
    this.showBreakdown = true;
  }
  deleteUser(userId){
    let observable = this._httpService.deletePrimary(userId);
    observable.subscribe(data=>{
      console.log(data);
      this.getAllUsers();
    })
  }
}
