import { ReplaySubject, Subject } from 'rxjs';
import { withLatestFrom, map, takeUntil, merge } from 'rxjs/operators';
import { OnDestroy } from '@angular/core';

export abstract class BaseNgComponent implements OnDestroy {
  loadingStatus$: ReplaySubject<number> = new ReplaySubject<number>(1);
  loadingChange$: Subject<number> = new Subject<number>();
  setLoadingStatusManually$: Subject<number> = new Subject<number>();

  componentIsLoading: boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(initialLoadingStatus: number = 0) {
    this.loadingStatus$.next(initialLoadingStatus);
    this.initLoadingChangeSubscription();
    this.initLoadingStatusSubscription();
  }

  ngOnDestroy() {
    this.destroy();
  }

  incrementLoading(amount: number = 1) {
    this.loadingChange$.next(amount);
  }
  decrementLoading(amount: number = 1) {
    this.loadingChange$.next(-amount);
  }
  setLoadingStatusManually(amount: number) {
    if (amount == null) return;
    this.setLoadingStatusManually$.next(amount);
  }
  stopLoading() {
    this.setLoadingStatusManually$.next(0);
  }
  destroy() {
    this.loadingStatus$.complete();
    this.loadingChange$.complete();
    this.setLoadingStatusManually$.complete();

    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private initLoadingChangeSubscription() {
    this.loadingChange$.pipe(
      withLatestFrom(this.loadingStatus$),
      map(([op, current]: [number, number]) => {
        return Math.max(current + op, 0)
      }),
      merge(this.setLoadingStatusManually$),
      takeUntil(this.destroy$)
    ).subscribe(this.loadingStatus$);
  }
  private initLoadingStatusSubscription() {
    this.loadingStatus$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(status => this.componentIsLoading = !!status);
  }
}