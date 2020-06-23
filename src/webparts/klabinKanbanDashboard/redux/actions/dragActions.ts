import {action} from 'typesafe-actions';
import { ICardData, IStore } from '../../models/interfaces/IStore';
import { loadCardMock } from '../../services/mock';

export enum ScorecardActions {
    SET_INIT_DATA = 'SET_INIT_DATA',
    MOVE_CARD = 'MOVE_CARD'
}
export type MoveCard = {fromList: number, from: number, to:number, toList:number};

//Action do tipo @SET_INIT_DATA que carrega os dados mock e passa eles para o reducer ouvir
export const setInitialData = () => {
    const lists = loadCardMock();
    return action(ScorecardActions.SET_INIT_DATA, {lists});
};

//Action do tipo @MOVE_CARD que recebe os valores de indice, para o reducer ouvir
export const moveCard = ({from, fromList, to, toList}:MoveCard) => {
    console.log(from, fromList, to, toList);
    return action(ScorecardActions.MOVE_CARD, {from, fromList, to, toList});
};

export type Actions = ReturnType<typeof setInitialData>|ReturnType<typeof moveCard>;