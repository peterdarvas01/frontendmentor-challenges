import { createReducer, on } from '@ngrx/store';
import { PaymentPeriodEnum, PlanEnum } from '../types/enums';
import { MultiFormStateInterface } from '../types/multiFormState.interface';
import * as MultiFormActions from './actions';

export const initialState: MultiFormStateInterface = {
  currentPage: 1,
  subscription: {
    name: '',
    email: '',
    phone: '',
    cost: 9,
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
  }))
);
