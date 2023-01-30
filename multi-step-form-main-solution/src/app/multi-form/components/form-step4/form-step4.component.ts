import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { subscriptionSelector } from '../../store/selectors';
import * as MultiFormActions from '../../store/actions';
import { PaymentPeriodEnum, PlanEnum } from '../../types/enums';
import { SubscriptionInterface } from '../../types/subscription.interface';

@Component({
  selector: 'app-form-step4',
  templateUrl: './form-step4.component.html',
  styleUrls: ['./form-step4.component.scss'],
})
export class FormStep4Component {
  PaymentPeriodEnum = PaymentPeriodEnum;
  subscription$: Observable<SubscriptionInterface>;

  constructor(private store: Store<AppStateInterface>) {
    this.subscription$ = this.store.pipe(select(subscriptionSelector));
  }

  changePlan(): void {
    this.store.dispatch(MultiFormActions.prevPage());
    this.store.dispatch(MultiFormActions.prevPage());
  }
}
