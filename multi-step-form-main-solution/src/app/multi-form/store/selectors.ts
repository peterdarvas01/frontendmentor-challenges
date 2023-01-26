import { createSelector, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.multiForm;

export const currentPageSelector = createSelector(
  selectFeature,
  (state) => state.currentPage
);
