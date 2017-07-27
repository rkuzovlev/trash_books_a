import { Action } from '@ngrx/store';
import { type } from '../utils';

import { iCartCountChange } from '../_models/cart';

export const ActionTypes = {
	CART_CHANGE_ITEM_COUNT:     type('[Cart] change item count'),
	CART_DELETE_ITEM:           type('[Cart] delete item'),
};

export class ChangeItemCountAction implements Action {
	type = ActionTypes.CART_CHANGE_ITEM_COUNT;
	constructor(public payload: iCartCountChange) { }
}

export class DeleteItemAction implements Action {
	type = ActionTypes.CART_DELETE_ITEM;
	constructor(public payload: number) { }
}

export type Actions
    = ChangeItemCountAction
    | DeleteItemAction
;
