import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../storeConcept/state'
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor(private store:Store<AppState>) { }
messages=[];
  ngOnInit(): void {
this.store.subscribe((res:any)=>{
  if(res){
    debugger
this.messages=res.message
}
})

  }
  ngOndestroy(){
    //this.store.unsubscribe();
  }
}
