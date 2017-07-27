import { Action } from '@ngrx/store';
import { type } from '../utils';

import { iCartCountChange } from '../_models/cart';

export const ActionTypes = {
	CART_CHANGE_ITEM_COUNT:     type('[Cart] change item count'),
};

export class ChangeItemCountAction implements Action {
	type = ActionTypes.CART_CHANGE_ITEM_COUNT;
	constructor(public payload: iCartCountChange) { }
}

export type Actions
    = ChangeItemCountAction
;
