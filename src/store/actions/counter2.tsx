// ./src/store/actions/counter2.tsx
import * as types from "../action-types";
export interface Add{
  type:typeof types.ADD2
}
export interface Subtract{
  type:typeof types.SUBTRACT2
}

export type Action = Add | Subtract

export default {
  add():Add{
    return { type: types.ADD2}
  },
  subtract():Subtract{
    return { type: types.SUBTRACT2}
  },
  addAsync():any{
    return function (dispatch:any,getState:any) {
      setTimeout(function(){
        dispatch({type:types.ADD2})
      }, 1000);
    }
  }
}
