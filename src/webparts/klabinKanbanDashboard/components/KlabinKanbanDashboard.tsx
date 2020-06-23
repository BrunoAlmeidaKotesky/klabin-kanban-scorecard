import * as React from 'react';
import styles from './KlabinKanbanDashboard.module.scss';
import { IKlabinKanbanDashboardProps } from './IKlabinKanbanDashboardProps';
import {Board} from './Board';
import {Provider} from 'react-redux';
import store from '../redux/store';

/**Componente principal para ser renderizado pelo ReactDom */
export default function KlabinKanbanDashboardApp(props:IKlabinKanbanDashboardProps):JSX.Element {
    return (
      <Provider store={store()}>
        <h4 style={{margin: 0}}>A ideia é que o board abaixo tenha como caber todas as colunas possíveis igual presente no vídeo aos 44:00m, talvez uma maneira de implementar um scroll horizontal</h4>
        <div className={ styles.klabinKanbanDashboard }>
            <Board/>
        </div>
      </Provider>
    );
}
