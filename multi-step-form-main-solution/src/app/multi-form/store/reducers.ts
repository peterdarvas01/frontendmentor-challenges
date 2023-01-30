import { createReducer, on } from '@ngrx/store';
import { PaymentPeriodEnum, PlanEnum } from '../types/enums';
import { MultiFormStateInterface } from '../types/multiFormState.interface';
import { SubscriptionInterface } from '../types/subscription.interface';
import * as MultiFormActions from './actions';

export const initialState: MultiFormStateInterface = {
  currentPage: 4,
  subscription: {
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    phone: '+3618524763',
    baseCost: '$9/mo',
    totalCost: '$9/mo',
    plan: PlanEnum.ARCADE,
    paymentPeriod: PaymentPeriodEnum.MONTH,
    addonOnline: false,
    addonExtraStorage: false,
    addonCustomProfile: false,
  },
};

export const reducers = createReducer(
  initialState,
  on(MultiFormActions.nextPage, (state) => ({
    ...state,
    currentPage: state.currentPage + 1,
  })),
  on(MultiFormActions.prevPage, (state) => ({
    ...state,
    currentPage: state.currentPage - 1,
  })),
  on(MultiFormActions.updatePersonalInfo, (state, action) => ({
    ...state,
    subscription: {
      ...state.subscription,
      name: action.name,
      email: action.email,
      phone: action.phone,
    },
  })),
  on(MultiFormActions.updatePaymentInfo, (state, action) => ({
    ...state,
    subscription: calculateCosts({
      ...state.subscription,
      plan: action.plan,
      paymentPeriod: action.paymentPeriod,
    }),
  })),
  on(MultiFormActions.updateAddons, (state, action) => ({
    ...state,
    subscription: calculateCosts({
      ...state.subscription,
      addonOnline: action.addonOnline,
      addonExtraStorage: action.addonExtraStorage,
      addonCustomProfile: action.addonCustomProfile,
    }),
  }))
);

function calculateCosts(sub: SubscriptionInterface): SubscriptionInterface {
  let baseCost: number =
    sub.plan === PlanEnum.ARCADE ? 9 : sub.plan === PlanEnum.ADVANCED ? 12 : 15;
  let period: string =
    sub.paymentPeriod === PaymentPeriodEnum.MONTH ? 'mo' : 'yr';
  let periodMultiplier: number =
    sub.paymentPeriod === PaymentPeriodEnum.MONTH ? 1 : 10;
  baseCost *= periodMultiplier;

  let totalCost: number = baseCost;
  totalCost += sub.addonOnline ? periodMultiplier : 0;
  totalCost += sub.addonExtraStorage ? 2 * periodMultiplier : 0;
  totalCost += sub.addonCustomProfile ? 2 * periodMultiplier : 0;

  return {
    ...sub,
    baseCost: `$${baseCost}/${period}`,
    totalCost: `$${totalCost}/${period}`,
  };
}
