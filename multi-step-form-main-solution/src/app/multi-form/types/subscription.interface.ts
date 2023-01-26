import { PaymentPeriodEnum, PlanEnum } from './enums';

export interface SubscriptionInterface {
  name: string;
  email: string;
  phone: string;

  plan: PlanEnum;
  paymentPeriod: PaymentPeriodEnum;

  addonOnline: boolean;
  addonExtraStorage: boolean;
  addonCustomProfile: boolean;

  cost: number;
}
