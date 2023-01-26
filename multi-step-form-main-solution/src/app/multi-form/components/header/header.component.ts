import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { currentPageSelector } from '../../store/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentPage$: Observable<number>;

  constructor(private store: Store<AppStateInterface>) {
    this.currentPage$ = this.store.pipe(select(currentPageSelector));
  }
}
