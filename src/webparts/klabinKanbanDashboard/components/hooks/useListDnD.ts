import { useDispatch , useSelector } from 'react-redux';
import {useDrop} from 'react-dnd';
import {useRef, useCallback} from 'react';
import { MoveCard, moveCard } from '../../redux/actions/dragActions';
import { RootState } from '../../redux/store';

interface DragItem {
    idx: number;
    id: string;
    listIdx: number;
    type: string;
  }
export function useListDnd(listIdx: number) {
    const ref = useRef();
    const dispatch = useDispatch();
    const lists = useSelector((store:RootState) => store.scorecardReducer.data);
    const move = useCallback(({from, fromList, to, toList}:MoveCard) => dispatch(moveCard({from, to, toList, fromList})), [lists]);
    const [ , dropRef] = useDrop({
      accept: 'CARD',
      hover(item: DragItem, monitor) {
        const fromList = item.listIdx;
        const toList = listIdx;
        const targetList = lists.find((it,idx) => idx === toList);

        if (targetList.data.length === 0) {
  
          console.log("na lista: ", listIdx, "| id do card:", item.idx, "lista origem: ", item.listIdx);
  
          move({fromList, toList, from: item.idx, to: 0});
  
          item.listIdx = toList;
          item.idx = 0;
        } 
        else {  
          console.log("tá por baixo, ");
        }
  
      }
    });
    return{dropRef};
}