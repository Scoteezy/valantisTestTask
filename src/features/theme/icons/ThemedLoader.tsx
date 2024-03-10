/* eslint-disable max-len */

import { SVGProps } from 'react';

const LoaderBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='65' fill='#000000' r='15' stroke='#000000' strokeWidth='15'><animate attributeName='cy' begin='-.4' calcMode='spline' dur='2' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' values='65;135;65;'></animate></circle><circle cx='100' cy='65' fill='#000000' r='15' stroke='#000000' strokeWidth='15'><animate attributeName='cy' begin='-.2' calcMode='spline' dur='2' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' values='65;135;65;'></animate></circle><circle cx='160' cy='65' fill='#000000' r='15' stroke='#000000' strokeWidth='15'><animate attributeName='cy' begin='0' calcMode='spline' dur='2' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' values='65;135;65;'></animate></circle></svg>
);
const LoaderWhite = (props: SVGProps<SVGSVGElement>)=>(
  <svg{...props} viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='65' fill='#FFFFFF' r='15' stroke='#FFFFFF' strokeWidth='15'><animate attributeName='cy' begin='-.4' calcMode='spline' dur='2' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' values='65;135;65;'></animate></circle><circle cx='100' cy='65' fill='#FFFFFF' r='15' stroke='#FFFFFF' strokeWidth='15'><animate attributeName='cy' begin='-.2' calcMode='spline' dur='2' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' values='65;135;65;'></animate></circle><circle cx='160' cy='65' fill='#FFFFFF' r='15' stroke='#FFFFFF' strokeWidth='15'><animate attributeName='cy' begin='0' calcMode='spline' dur='2' keySplines='.5 0 .5 1;.5 0 .5 1' repeatCount='indefinite' values='65;135;65;'></animate></circle></svg>
);

export {LoaderBlack,LoaderWhite};