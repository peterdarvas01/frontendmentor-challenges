import { createAction, props } from '@ngrx/store';
import { SubscriptionInterface } from '../types/subscription.interface';

export const nextPage = createAction('[MultiForm] Next Page');
export const prevPage = createAction('[MultiForm] Prev Page');
export const updatePersonalInfo = createAction(
  '[MultiForm] Update Personal Info',
  props<{ name: string; email: string; phone: string }>()
);
