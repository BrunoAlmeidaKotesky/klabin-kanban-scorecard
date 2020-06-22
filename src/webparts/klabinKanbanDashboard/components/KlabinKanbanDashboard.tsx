import * as React from 'react';
import styles from './KlabinKanbanDashboard.module.scss';
import { IKlabinKanbanDashboardProps } from './IKlabinKanbanDashboardProps';
import {Board} from './Board';
import {Provider} from 'react-redux';
import store from '../redux/store';

export default function KlabinKanbanDashboardApp(props:IKlabinKanbanDashboardProps):JSX.Element {
    return (
      <Provider store={store()}>
      <div className={ styles.klabinKanbanDashboard }>
              <Board/>
      </div>
      </Provider>
      
    );
}
