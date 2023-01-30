import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { subscriptionSelector } from '../../store/selectors';
import * as MultiFormActions from '../../store/actions';
import { PaymentPeriodEnum, PlanEnum } from '../../types/enums';

@Component({
  selector: 'app-form-step2',
  templateUrl: './form-step2.component.html',
  styleUrls: ['./form-step2.component.scss'],
})
export class FormStep2Component implements OnInit {
  PaymentPeriodEnum = PaymentPeriodEnum;
  PlanEnum = PlanEnum;

  plan: PlanEnum = PlanEnum.ARCADE;
  paymentPeriod: PaymentPeriodEnum = PaymentPeriodEnum.MONTH;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    let s = this.store.pipe(select(subscriptionSelector)).subscribe((sub) => {
      this.plan = sub.plan;
      this.paymentPeriod = sub.paymentPeriod;
    });
    s.unsubscribe();
  }

  updateStore(): void {
    this.store.dispatch(
      MultiFormActions.updatePaymentInfo({
        plan: this.plan,
        paymentPeriod: this.paymentPeriod,
      })
    );
  }

  togglePeriod() {
    this.paymentPeriod =
      this.paymentPeriod === PaymentPeriodEnum.MONTH
        ? PaymentPeriodEnum.YEAR
        : PaymentPeriodEnum.MONTH;
    this.updateStore();
  }

  togglePlan(plan: PlanEnum) {
    this.plan = plan;
    this.updateStore();
  }
}
