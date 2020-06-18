import { animate, animation, group, keyframes, query, stagger, state, style, transition, trigger, useAnimation} from '@angular/animations';

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
    state('open2', style({})),
    transition('* => open', [
      group([
        query('.button', animate('.5s ease-in-out', keyframes([
          style({display: 'none', opacity: 0, offset: 0}),
          style({display: 'block', opacity: 0, offset: .7}),
          style({opacity: 1, offset: 1})
        ]))),
        query('.img', animate('.5s ease-in-out', keyframes([
          style({width: '0%', offset: 0}),
          style({width: '100%', 'max-width': '95vw', offset: 1})
        ]))),
       ]),
    ]),
    transition('open => closed', [
      group([
        query('.button', animate('.5s ease-in-out', keyframes([
          style({opacity: 1, offset: 0}),
          style({display: 'block', opacity: 0, offset: .3}),
          style({display: 'none', opacity: 0, offset: 1})
        ]))),
        query('.img', animate('.5s ease-in-out', keyframes([
          style({width: '100%', 'max-width': '95vw', offset: 0}),
          style({width: '0vh', offset: 1})
        ]))),
      ]),
    ])
  ]);





const openAnimation = animation(
  group([
    query('.button',
      animate('.5s ease-in-out', keyframes([
        style({width: '0vh', offset: 0}),
        style({width: '95vw', 'max-width': '{{width}}', offset: 1})
      ])), {
        params: {
          width: '1024px'
        }
    }),
    query('.button', animate('.5s ease-in-out', keyframes([
      style({display: 'none', opacity: 0, offset: 0}),
      style({display: 'block', opacity: 0, offset: .7}),
      style({opacity: 1, offset: 1})
    ]))),
  ]),
);

const closeAnimation = animation(
  group([
    query('.button',
      animate('.5s ease-in-out', keyframes([
        style({width: '95vw', 'max-width': '{{width}}', offset: 0}),
        style({width: '0vh', offset: 1})
      ])), {
        params: {
          width: '1024px'
        }
    }),
    query('.button', animate('.5s ease-in-out', keyframes([
      style({opacity: 1, offset: 0}),
      style({display: 'block', opacity: 0, offset: .3}),
      style({display: 'none', opacity: 0, offset: 1})
    ]))),
  ]),
);

export const modalAnimation2 =
  trigger('modalAnimation', [
    transition('closed => open', group([
      query('.button', [
        style({
          width: '95vw',
          'max-width': '{{width}}'
        }),
        (stagger('0s', animate('.5s ease-in-out')))
      ], {
        params: {
          width: '1024px'
        }
      }),
      query('.button', animate('.5s ease-in-out', keyframes([
        style({display: 'none', opacity: 0, offset: 0}),
        style({display: 'block', opacity: 0, offset: .7}),
        style({opacity: 1, offset: 1})
      ]))),
    ]),
    ),
    transition('open => closed', group([
      query('.button', [
        style({
          width: '0vw',
          'max-width': '0vw'
        }),
        (stagger('0s', animate('.5s ease-in-out')))
      ], {
        params: {
          width: '1024px'
        }
      }),
      query('.button', animate('.5s ease-in-out', keyframes([
        style({opacity: 1, offset: 0}),
        style({display: 'block', opacity: 0, offset: .3}),
        style({display: 'none', opacity: 0, offset: 1})
      ]))),
    ]),
    ),
  ]);
