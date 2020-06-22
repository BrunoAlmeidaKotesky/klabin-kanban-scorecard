import { initialState } from "../store";
import { Actions, ScorecardActions } from "../actions/dragActions";
import {produce} from 'immer';

export const scorecardReducer = (state = initialState, action:Actions) => {
    switch(action.type){
        case ScorecardActions.SET_INIT_DATA:
            return{...state, data: action.payload.lists};
            
        case ScorecardActions.MOVE_CARD:{
            const {from, fromList, to, toList} = action.payload;
            const data = state.data;
            return produce(data, draftState => {
                const draggedList = draftState[fromList];
                const draggedCard = draggedList.data[from];
                draftState[fromList].data.splice(from, 1);
                draftState[toList].data.splice(to, 0, draggedCard);
                console.log(draftState);
            });
        }
            
        default: return state;
    }
};