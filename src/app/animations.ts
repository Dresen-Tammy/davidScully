import { animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';

export const menuAnimation =
  trigger('menuAnimation', [
    state('open', style({})),
    state('close', style({})),
    transition('open => close', [
      group([
      query('.icon1', animate('.5s', keyframes([
        style({ width: '1.48rem', transform: 'translate(-1.125rem, -.4rem) rotate(-0.1turn)', offset: 0}),
        style({ width: '1.48rem', transform: 'translate(-1.125rem, 0rem) rotate(0turn)', offset: .33}),
        style({ width: '1.48rem', transform: 'translate(-1.125rem, -.8rem) rotate(0turn)', offset: .67}),
        style({ width: '1.875rem', transform: 'translate(-1.125rem, -.8rem) rotate(0turn)', offset: 1})
      ]))),
      query('.icon2', animate('.5s', keyframes([
        style({width: '1.48rem', transform: 'translate(-1.125rem, -.4rem) rotate(-.1turn)', offset: 0}, ),
        style({width: '1.48rem', transform: 'translate(-1.125rem, 0rem) rotate(0turn)', offset: .33}, ),
        style({width: '2.5rem', transform: 'translate(-1.125rem, 0rem) rotate(0turn)', offset: 1}, )
      ]))),
      query('.icon3', animate('.5s', keyframes([
        style({ width: '1.48rem', transform: 'translate(-1.125rem, .47rem) rotate(.1turn)', offset: 0}),
        style({ width: '1.48rem', transform: 'translate(-1.125rem, 0rem) rotate(0turn)', offset: .33}),
        style({ width: '1.48rem', transform: 'translate(-1.125rem, .8rem) rotate(0turn)', offset: .67}),
        style({ width: '1.25rem', transform: 'translate(-1.125rem, .8rem) rotate(0turn)', offset: 1})
      ]))),
    ]),
  ]),
    transition('close => open', [
      group([
        query('.icon1', animate('.5s', keyframes([
          style({ width: '1.875rem', transform: 'translate(-1.125rem, -.4rem) rotate(0turn)', offset: 0}),
          style({ width: '1.48rem', transform: 'translate(-1.125rem, -.4rem) rotate(0turn)', offset: .33}),
          style({ width: '1.48rem', transform: 'translate(-1.125rem, 0rem) rotate(0turn)', offset: .67}),
          style({ width: '1.48rem', transform: 'translate(-1.125rem, -.4rem) rotate(-0.1turn)', offset: 1})
        ]))),
        query('.icon2', animate('.5s', keyframes([
          style({width: '2.5rem', transform: 'translate(-1.125rem, 0rem) rotate(0turn)', offset: 0}, ),
          style({width: '1.48rem', transform: 'translate(-1.125rem, 0rem) rotate(0turn)', offset: .67}, ),
          style({width: '1.48rem', transform: 'translate(-1.125rem, -.4rem) rotate(-.1turn)', offset: 1}, )
        ]))),
        query('.icon3', animate('.5s', keyframes([
          style({ width: '1.25rem', transform: 'translate(-1.125rem, .8rem) rotate(0turn)', offset: 0}),
          style({ width: '1.48rem', transform: 'translate(-1.125rem, .8rem) rotate(0turn)', offset: .33}),
          style({ width: '1.48rem', transform: 'translate(-1.125rem, 0rem) rotate(0turn)', offset: .67}),
          style({ width: '1.48rem', transform: 'translate(-1.125rem, .47rem) rotate(.1turn)', offset: 1})
        ]))),
      ])
  ])
]);
