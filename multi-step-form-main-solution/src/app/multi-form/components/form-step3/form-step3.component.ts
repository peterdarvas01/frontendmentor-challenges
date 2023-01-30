import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { subscriptionSelector } from '../../store/selectors';
import * as MultiFormActions from '../../store/actions';
import { PaymentPeriodEnum, PlanEnum } from '../../types/enums';

@Component({
  selector: 'app-form-step3',
  templateUrl: './form-step3.component.html',
  styleUrls: ['./form-step3.component.scss'],
})
export class FormStep3Component implements OnInit {
  addonOnline: boolean = false;
  addonExtraStorage: boolean = false;
  addonCustomProfile: boolean = false;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    let s = this.store.pipe(select(subscriptionSelector)).subscribe((sub) => {
      this.addonOnline = sub.addonOnline;
      this.addonExtraStorage = sub.addonExtraStorage;
      this.addonCustomProfile = sub.addonCustomProfile;
    });
    s.unsubscribe();
  }

  updateStore(): void {
    this.store.dispatch(
      MultiFormActions.updateAddons({
        addonOnline: this.addonOnline,
        addonExtraStorage: this.addonExtraStorage,
        addonCustomProfile: this.addonCustomProfile,
      })
    );
  }

  toggleAddon(index: number): void {
    switch (index) {
      case 1: {
        this.addonOnline = !this.addonOnline;
        break;
      }
      case 2: {
        this.addonExtraStorage = !this.addonExtraStorage;
        break;
      }
      case 3: {
        this.addonCustomProfile = !this.addonCustomProfile;
        break;
      }
    }
    this.updateStore();
  }
}
