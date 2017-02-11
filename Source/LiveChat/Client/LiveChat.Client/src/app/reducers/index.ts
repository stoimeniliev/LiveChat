import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import { createSelector } from 'reselect';

import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../environments/environment';

// https://github.com/ngrx/example-app/blob/master/src/app/reducers/index.ts#L1-L85
export interface State {
	router: fromRouter.RouterState;
}

const reducers = {
	router: fromRouter.routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any): State {
	if (environment.production) {
		return productionReducer(state, action);
	}
	else {
		return developmentReducer(state, action);
	}
}
