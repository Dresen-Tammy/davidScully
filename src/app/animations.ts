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



export const modalAnimation =
  trigger('modalAnimation', [
    state('closed', style({})),
    state('open', style({})),
    state('openlogo', style({})),
    transition('closed => open', [
      group([
        query('.button', animate('.5s', keyframes([
          style({display: 'none', opacity: 0, offset: 0}),
          style({display: 'block', opacity: 0, offset: .7}),
          style({opacity: 1, offset: 1})
        ]))),
        query('.img', animate('.5s', keyframes([
          style({width: '0%', offset: 0}),
          style({width: '100%', 'max-width': '64rem', offset: 1})
        ]))),
       ]),
    ]),
    transition('closed => openlogo', [
      group([
        query('.button', animate('.5s', keyframes([
          style({display: 'none', opacity: 0, offset: 0}),
          style({display: 'block', opacity: 0, offset: .7}),
          style({opacity: 1, offset: 1})
        ]))),
        query('.img', animate('.5s', keyframes([
          style({width: '0vh', offset: 0}),
          style({width: '95vh', 'max-width': '38.375rem', offset: 1})
        ]))),
       ]),
    ]),
    transition('open => closed', [
      group([
        query('.button', animate('.5s', keyframes([
          style({display: 'block', opacity: 1, offset: 0}),
          style({opacity: 0, display: 'none', offset: .1})
        ]))),
        query('.img', animate('.5s', keyframes([
          style({width: '100%', 'max-width': '64rem', offset: 0}),
          style({width: '0%', offset: 1}),
        ]))),
      ])
    ]),
    transition('openlogo => closed', [
      group([
        query('.button', animate('.5s', keyframes([
          style({display: 'block', opacity: 1, offset: 0}),
          style({opacity: 0, display: 'none', offset: .1})
        ]))),
        query('.img', animate('.5s', keyframes([
          style({width: '95vh', 'max-width': '38.375rem', offset: 0}),
          style({width: '0vh', offset: 1}),
        ]))),
      ])
    ])
  ]);

