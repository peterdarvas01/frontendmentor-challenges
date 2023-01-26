import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as MultiFormActions from '../../store/actions';
import { currentPageSelector } from '../../store/selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentPage$: Observable<number>;

  constructor(private store: Store<AppStateInterface>) {
    this.currentPage$ = this.store.pipe(select(currentPageSelector));
  }

  confirm() {
    this.store.dispatch(MultiFormActions.nextPage());
  }

  nextPage() {
    this.store.dispatch(MultiFormActions.nextPage());
  }

  prevPage() {
    this.store.dispatch(MultiFormActions.prevPage());
  }
}
