import { Action } from '@ngrx/store';
import {Message} from './model'
export const ADD_MESSAGE = 'ADD_MESSAGE';


export function AddMessageReducer(state:Message[] =[],action){
    switch(action.type){
        case ADD_MESSAGE:
            return [...state,action.payload];


            
            default:
                return state;
    }
}