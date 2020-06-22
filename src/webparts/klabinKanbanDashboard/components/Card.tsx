import * as React from 'react';
import styles from "./KlabinKanbanDashboard.module.scss";
import {useCardDnd} from './hooks/useCardDnD';

type Props = {code: {codeIdea: string, codeUrl: string}, titleIdea: string, imgIdea: string, idx: number, listIdx: number};
export default function Card({code, titleIdea, imgIdea, idx, listIdx}:Props):JSX.Element {
    const {ref, isDragging} = useCardDnd(code.codeIdea, idx, listIdx);
    return(
        <div ref={ref} className={isDragging === false ? styles.klabCardDiv : styles.isDragging}>
            <img src={imgIdea} alt={titleIdea} />
            <a href={code.codeUrl}><span>{code.codeIdea}</span></a>
            <span>{titleIdea}</span>
        </div>);
}