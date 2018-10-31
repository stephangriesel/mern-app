import uuid from "uuid";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: "Bread" },
    { id: uuid(), name: "Butter" },
    { id: uuid(), name: "Coffee" },
    { id: uuid(), name: "Banana" }
  ]
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
        return {
            ...state
        };
        default:
        return state;
        }
    }
