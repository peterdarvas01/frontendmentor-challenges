import { createAction, props } from '@ngrx/store';
import { PaymentPeriodEnum, PlanEnum } from '../types/enums';
import { SubscriptionInterface } from '../types/subscription.interface';

export const nextPage = createAction('[MultiForm] Next Page');
export const prevPage = createAction('[MultiForm] Prev Page');

export const updatePersonalInfo = createAction(
  '[MultiForm] Update Personal Info',
  props<{ name: string; email: string; phone: string }>()
);

export const updatePaymentInfo = createAction(
  '[MultiForm] Update Payment Info',
  props<{ plan: PlanEnum; paymentPeriod: PaymentPeriodEnum }>()
);

export const updateAddons = createAction(
  '[MultiForm] Update Add-ons Info',
  props<{
    addonOnline: boolean;
    addonExtraStorage: boolean;
    addonCustomProfile: boolean;
  }>()
);
