import {action} from 'typesafe-actions';
import { ICardData, IStore } from '../../models/interfaces/IStore';
import { loadCardMock } from '../../services/mock';

export enum ScorecardActions {
    SET_INIT_DATA = 'SET_INIT_DATA',
    MOVE_CARD = 'MOVE_CARD'
}

export type MoveCard = {fromList: number, from: number, to:number, toList:number};
export const setInitialData = () => {
    const lists = loadCardMock();
    return action(ScorecardActions.SET_INIT_DATA, {lists});
};
export const moveCard = ({from, fromList, to, toList}:MoveCard) => {
    console.log(from, fromList, to, toList);
    return action(ScorecardActions.MOVE_CARD, {from, fromList, to, toList});
};

export type Actions = ReturnType<typeof setInitialData>|ReturnType<typeof moveCard>;