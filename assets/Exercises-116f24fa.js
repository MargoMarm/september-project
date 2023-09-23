import{n as a,m as r,c as n,P as p,r as h,j as e,u as f,b as x,h as E,i as w,k as q,o as y,p as B}from"./index-a1a82419.js";import{c as S}from"./capitalizeWord-85339af4.js";import{s as u}from"./styled-components.browser.esm-7136aedb.js";import{T as j}from"./Title-a6d3b891.js";import{S as T,P as F,a as z}from"./ProductsOrExercisesItem-483c2a87.js";const I=a.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 80px;
  }

  ${r.tablet} {
    flex-basis: calc((100% - 32px) / 3);
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${r.desktop} {
    flex-basis: calc((100% - 64px) / 5);
  }
`,R=a.a`
  display: block;

  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: ${n.background05};
`,L=a.img`
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  z-index: -1;
`,P=a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 137px;
  text-align: center;

  ${r.mobile} {
    top: 50%;
    left: 50%;
  }

  ${r.tablet} {
    top: 50%;
    left: 50%;
  }
`,W=a.span`
  color: ${n.white};
  font-size: 20px;
  line-height: 1.2;

  ${r.tablet} {
    font-size: 24px;
    line-height: 1.33;
  }
`,N=a.span`
  color: ${n.textWhite04};
  font-size: 12px;
  line-height: 1.5;
`,$=({filter:t,name:s,imgURL:c,handleGetExercises:l})=>{const[i,o]=h.useState(t);h.useEffect(()=>{switch(t){case"Body parts":return o("bodyPart");case"Muscles":return o("target");case"Equipment":return o("equipment");default:return}},[t]);const d=`${i}=${s.toLowerCase()}`;return e.jsx(I,{onClick:()=>l(d,s),children:e.jsxs(R,{children:[e.jsx(L,{src:c,alt:s}),e.jsxs(P,{children:[e.jsx(W,{children:s}),e.jsx(N,{children:t})]})]})})};$.propTypes={filter:p.string.isRequired,name:p.string.isRequired,imgURL:p.string.isRequired,handleGetExercises:p.func.isRequired};const G=a.ul`
  margin-top: 40px;

  ${r.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`,M=t=>t.filter.items,k=t=>t.filter.filter,O=t=>t.filter.currentTitle,v=()=>{const t=f(),s=(i,o)=>{t(E(i)),t(w(o))};let c=x(k),l=x(M);return e.jsx(G,{children:l.filter(i=>i.filter===c).map(({filter:i,name:o,imgURL:d,_id:g})=>e.jsx($,{handleGetExercises:s,imgURL:d,name:S(o),filter:i},g))})};v.propTypes={bodyParts:p.arrayOf(p.shape({name:p.string.isRequired}))};const A=t=>t.exercises.items,C=t=>t.exercises.getFilters,D=u.ul`
  display: flex;
  gap: 28px;

  margin-top: 20px;

  ${r.tablet} {
    gap: 32px;
  }
`,m=u.li``,b=u.button`
  position: relative;
  padding: 0;

  color: ${n.textWhite03};
  font-family: Roboto;
  font-size: 14px;

  line-height: 1.28;

  background-color: transparent;
  outline: none;
  border: none;

  &.active::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;

    bottom: -4px;
    left: 0;
    background-color: #ef8964;
    border-radius: 2px;
  }

  ${r.tablet} {
    font-size: 16px;

    line-height: 1.5;
  }
`,Q=()=>{let t=x(k);const[s,c]=h.useState(t),l=x(C),i=f();h.useEffect(()=>{i(q())},[i,l]);const o=d=>{const g=d.target.childNodes[0].textContent;i(y(!0)),c(g),i(B(g))};return e.jsx(e.Fragment,{children:e.jsxs(D,{children:[e.jsx(m,{children:e.jsx(b,{type:"button",onClick:o,className:s==="Body parts"?"active":"",children:"Body parts"})}),e.jsx(m,{children:e.jsx(b,{type:"button",onClick:o,className:s==="Muscles"?"active":"",children:"Muscles"})}),e.jsx(m,{children:e.jsx(b,{type:"button",onClick:o,className:s==="Equipment"?"active":"",children:"Equipment"})})]})})},U=a.div`
  ${r.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;a.div`
  padding: 40px 20px 80px 20px;
  ${r.tablet} {
    padding: 72px 32px 32px 32px;
  }
  ${r.desktop} {
    padding: 72px 96px 92px 96px;
  }
`;const _=u.button`
  display: flex;
  padding: 0px;
  align-items: center;
	font-size: 14px;
  line-height: 1.28; 



  background-color: transparent;
  color: ${n.textWhite04};
  border: none;
	scale: 1;

  transition:
  scale 250ms ease-in-out,
  color 250ms ease-in-out;
	fill 250ms ease-in-out;


		${r.tablet}{
 font-size: 16px;
line-height: 1.5; 
		}



  &:hover {
    color: ${n.orange};
    scale: 1.1;

  }
  &:focus {
    color: ${n.orange};
		scale: 1.1;
  }

  &:hover svg {
    fill: ${n.orange};
		scale: 1.1;
  }
  &:focus svg {
    fill: ${n.orange};
		scale: 1.1;
  }
`,H=u.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${n.textWhite04};
  scale: 1;

  transition:
    scale 250ms ease-in-out,
    fill 250ms ease-in-out;
`,J=()=>{const t=f(),s=()=>{t(y(!0))};return e.jsxs(_,{type:"button",onClick:s,children:[e.jsx(H,{children:e.jsx("use",{href:"/src/assets/sprite.svg#icon-arrow-left"})}),"Back"]})},ee=()=>{let t=x(C),s=x(A),c=x(O);return e.jsxs(e.Fragment,{children:[t?null:e.jsx(J,{}),e.jsxs(U,{children:[t?e.jsx(j,{text:"Exercises",margin:{top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}}}):e.jsx(j,{text:c,margin:{top:{desk:16,tab:16,mob:12},bt:{tab:32,mob:40}}}),e.jsx(Q,{})]}),t?e.jsx(v,{}):e.jsx(T,{width:{dt:"868"},children:e.jsx(F,{children:s.map((l,i)=>i<20?e.jsx(z,{page:"exercise",data:l},l._id):null)})}),";"]})};export{ee as default};
