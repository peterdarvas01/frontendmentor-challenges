import { createReducer, on } from '@ngrx/store';
import { MultiFormStateInterface } from '../types/multiFormState.interface';
import * as MultiFormActions from './actions';

export const initialState: MultiFormStateInterface = {
  currentPage: 1,
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
  }))
);
