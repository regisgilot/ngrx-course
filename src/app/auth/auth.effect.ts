import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {AuthActions} from './action-type';


@Injectable()
export class AuthEffect {

  login$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.login),
          tap(action => localStorage.setItem('user',
            JSON.stringify(action.user))
          )
        )
    ,
    {dispatch: false});

  constructor(private actions$: Actions) {


  }

}
