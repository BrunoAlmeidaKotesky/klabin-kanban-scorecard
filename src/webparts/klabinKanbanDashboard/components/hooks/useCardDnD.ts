import {useState, useRef, useCallback} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import { moveCard, MoveCard } from  '../../redux/actions/dragActions';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../redux/store';
import { IDragItem } from '../../models/interfaces/IDraggable';

/**Função do React DnD para definir uma area 'dropável', verificando os indices da lista e do card DE / PARA */
export function useCardDnd(id: string, idx: number, listIdx: number) {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const lists = useSelector((store:RootState) => store.scorecardReducer.data);
    /**Declarando a função dispatcher de move com @useCallback para apenas ser recriada quando os dados mudarem, evitando re-renders desnecessarios */
    const move = useCallback(({from, fromList, to, toList}:MoveCard) => dispatch(moveCard({from, to, toList, fromList})), [lists]);

    const [{isDragging}, dragRef] = useDrag({
           item: {type: 'CARD', id, idx, listIdx },
           collect: monitor => ({isDragging: monitor.isDragging()}),
           
    });
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item: IDragItem , monitor) {
            if(!ref.current) return;
            const draggedListIdx = item?.listIdx;
            const targetListIdx = listIdx;

            const draggedIdx = item?.idx;
            const targetIdx = idx;
            console.log(`Source: ${item.id}, Target: ${id}`);
            //Se estiver arrastando o card nele mesmo retorna
            if (draggedIdx === targetIdx && draggedListIdx === targetListIdx) {
                return;
            }
            const targetSize = ref.current?.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top)/2;
            const draggedOffSet = monitor.getClientOffset();
            const draggedTop = draggedOffSet.y - targetSize.top;
            // Dragging downwards
            if (draggedIdx < targetIdx && draggedTop < targetCenter) {
                return;
            }

            // Dragging upwards
            if (draggedIdx > targetIdx && draggedTop > targetCenter) {
                return;
            }
            //Executa a action do redux de mover o card, passando os indices do source/target da lista e card
            move({fromList: draggedListIdx, toList: targetListIdx, from: draggedIdx, to: targetIdx});
            item.idx = targetIdx;
            item.listIdx = targetListIdx;
        }
    });
    //Passando a referencia de drag e drop para o useRef
    dragRef(dropRef(ref));

    return {ref, isDragging};
}