import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../storeConcept/state'
import {Message} from '../storeConcept/model'
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  fullMessage='';
  sentBy='';
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  buttonClicked(){
this.store.dispatch({type:'ADD_MESSAGE',payload: <Message> {  message :this.fullMessage,
  byWhom: this.sentBy} })

  }
  

}
