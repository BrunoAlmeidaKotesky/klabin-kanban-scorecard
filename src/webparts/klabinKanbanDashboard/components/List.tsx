import * as React from 'react';
import Card from './Card';
import styles from "./KlabinKanbanDashboard.module.scss";
import { IMockData } from '../models/interfaces/IStore';
import { useListDnd } from './hooks/useListDnD';

interface ListProps {
  listName: string;
  itemsCount: number;
  cardData: IMockData[];
  listIdx: number;
}
export default function List({itemsCount, listName, cardData, listIdx}:ListProps):JSX.Element{
    const {dropRef} = useListDnd(listIdx);
    return (<>
          <div ref={dropRef} className={styles.klabListTop}>
            <h3>{listName}</h3>
            <h4>({itemsCount})</h4>
            <ul>
              {cardData.map((it,idx) => <Card code={{codeIdea: it.codeIdea, codeUrl: it.codeUrl}}
                                        imgIdea={it.imgIdea} titleIdea={it.titleIdea} key={it.codeIdea} 
                                        idx={idx} listIdx={listIdx}/>
              )}
          </ul>
          </div>
    </>);
}