import * as React from 'react';
import {useEffect} from 'react';
import styles from "./KlabinKanbanDashboard.module.scss";
import List from './List';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {useDispatch, useSelector} from 'react-redux';
import { setInitialData } from '../redux/actions/dragActions';
import { RootState } from '../redux/store';
import { IStore } from '../models/interfaces/IStore';

export const Board = (): JSX.Element => {
    const dispatch = useDispatch();
    const {data} = useSelector((store:RootState) => store.scorecardReducer as IStore);
    useEffect(()=> {
        dispatch(setInitialData());
    },[]);
    useEffect(()=>{
        console.log(data);
    });
    
    return (
        <DndProvider backend={HTML5Backend}>
        <div className={styles.klabBoard}>
            
            {data.length > 0 ? data.map((item, idx) =>
             <List itemsCount={item.data.length} listName={item.category}
                   key={item.category} cardData={item.data} listIdx={idx}/>): 'Carregando...'}
        </div>
        </DndProvider>
    );
};