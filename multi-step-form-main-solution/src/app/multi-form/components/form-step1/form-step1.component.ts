import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { subscriptionSelector } from '../../store/selectors';
import * as MultiFormActions from '../../store/actions';

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.scss'],
})
export class FormStep1Component implements OnInit {
  subscriptionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    let s = this.store.pipe(select(subscriptionSelector)).subscribe((sub) => {
      this.subscriptionForm.patchValue({
        name: sub.name,
        email: sub.email,
        phone: sub.phone,
      });
    });
    s.unsubscribe();
  }

  updateStore(): void {
    this.store.dispatch(
      MultiFormActions.updatePersonalInfo({
        name: this.subscriptionForm.value.name || '',
        email: this.subscriptionForm.value.email || '',
        phone: this.subscriptionForm.value.phone || '',
      })
    );
  }
}
