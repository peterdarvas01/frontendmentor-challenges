import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as MultiFormActions from '../../store/actions';
import {
  currentPageSelector,
  subscriptionSelector,
} from '../../store/selectors';
import { SubscriptionInterface } from '../../types/subscription.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  currentPage$: Observable<number>;
  subscription$: Observable<SubscriptionInterface>;
  _sub?: Subscription;
  valid: boolean = false;

  constructor(private store: Store<AppStateInterface>) {
    this.currentPage$ = this.store.pipe(select(currentPageSelector));
    this.subscription$ = this.store.pipe(select(subscriptionSelector));
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

  ngOnInit(): void {
    this._sub = this.subscription$.subscribe((subscription) => {
      this.valid =
        !!subscription.name && !!subscription.email && !!subscription.phone;
    });
  }

  ngOnDestroy(): void {
    if (this._sub) this._sub.unsubscribe();
  }
}
