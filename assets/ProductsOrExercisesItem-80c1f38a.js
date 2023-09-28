var de=Object.defineProperty;var pe=(t,e,r)=>e in t?de(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var N=(t,e,r)=>(pe(t,typeof e!="symbol"?e+"":e,r),r);import{r as p,P as d,p as z,n,m as h,a as ee,j as o,c as i,G as he,H as ue,s as I,u as te,I as U,J as oe,K as xe,Q as ge,N as fe,v as me,M as be}from"./index-27b007ba.js";import{c as E,f as re}from"./formatDate-d1383d55.js";import{B as we}from"./BtnSubmit-b688f152.js";import{n as ye}from"./notiflix-aio-3.2.6.min-c99dae43.js";const $e=(t,e)=>t==="product"?{subtitle:"DIET",title:E(e.title),button:"Add",text1:"Calories:",text2:"Category:",text3:"Weight:",subText1:e.calories,subText2:E(e.category),subText3:e.weight}:{subtitle:"WORKOUT",title:E(e.name),button:"Start",text1:"Burned calories:",text2:"Body part:",text3:"Target:",subText1:e.burnedCalories,subText2:E(e.bodyPart),subText3:E(e.target)};class K extends p.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const r={get passive(){e=!0}};try{document.addEventListener("test",null,r),document.removeEventListener("test",null,r)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){const r=this.props.getScrollParent&&this.props.getScrollParent();return r??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let r=window;this.props.useWindow===!1&&(r=e),r.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),r.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),r.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,r=window,s=this.getParentElement(e);let l;if(this.props.useWindow){const a=document.documentElement||document.body.parentNode||document.body,c=r.pageYOffset!==void 0?r.pageYOffset:a.scrollTop;this.props.isReverse?l=c:l=this.calculateOffset(e,c)}else this.props.isReverse?l=s.scrollTop:l=e.scrollHeight-s.scrollTop-s.clientHeight;l<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=s.scrollHeight,this.beforeScrollTop=s.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,r){return e?this.calculateTopPosition(e)+(e.offsetHeight-r-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:r,element:s,hasMore:l,initialLoad:a,isReverse:c,loader:x,loadMore:u,pageStart:j,ref:y,threshold:m,useCapture:g,useWindow:k,getScrollParent:S,...$}=e;$.ref=w=>{this.scrollComponent=w,y&&y(w)};const b=[r];return l&&(x?c?b.unshift(x):b.push(x):this.defaultLoader&&(c?b.unshift(this.defaultLoader):b.push(this.defaultLoader))),z.createElement(s,$,b)}}N(K,"propTypes",{children:d.node.isRequired,element:d.node,hasMore:d.bool,initialLoad:d.bool,isReverse:d.bool,loader:d.node,loadMore:d.func.isRequired,pageStart:d.number,ref:d.func,getScrollParent:d.func,threshold:d.number,useCapture:d.bool,useWindow:d.bool}),N(K,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});const Pt=t=>t.products.products,Rt=t=>t.products.categories,Mt=t=>t.products.isLoading,ve=t=>t.products.searchParams,zt=t=>t.products.hasMore,je=n.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 20px;
  width: 100%;

  margin-top: ${t=>t.marginTop};
  ${h.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
  ${h.desktop} {
    width: 868px;
  }
`;function It({children:t,...e}){const r=p.useRef(),s=ee(ve);return p.useEffect(()=>{var l;(l=r.current.firstChild)==null||l.scrollIntoView()},[s]),o.jsx(je,{ref:r,...e,children:t})}const Ce=n.div`
  overflow: auto;
  height: calc(100vh - 48px);
  scrollbar-width: 0px;

  width: ${({width:t})=>(t==null?void 0:t.mob)+"px"||"100%"};

  ${h.tablet} {
    width: ${({width:t})=>(t==null?void 0:t.tab)+"px"||"100%"};
    scrollbar-color: ${i.orange} ${i.textWhite01};
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      width: 8px;
      background-color: ${i.textWhite01};
      border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${i.orange};
      border-radius: 12px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${i.orange};
    }
  }
  ${h.desktop} {
    width: ${({width:t})=>(t==null?void 0:t.dt)+"px"||"100%"};
    height: calc(100vh - 230px);
  }
`;function ke({width:t,children:e}){return o.jsx(Ce,{width:t,children:e})}ke.propTypes={width:d.object};const Te=n.li`
  display: grid;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 159px;
  padding: 16px;
  align-items: flex-start;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${i.textWhite02};
  background: ${i.textWhite005};

  ${h.mobile} {
    width: 335px;
  }

  ${h.tablet} {
    width: 335px;
    align-items: center;
  }

  ${h.desktop} {
    width: 405px;
  }
`,Le=n.div`
  display: flex;
  align-items: flex-start;
`,Se=n.p`
  display: inline-flex;
  width: auto;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  padding: 0 7.5px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${i.textWhite005};
  border-radius: 4px;
  color: #fff;
`,Ee=n.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${i.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${t=>t.reccomend?"#419b09":"#E9101D"};
    margin-right: 8px;
  }
`,We=n.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;

  color: ${i.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${i.orangeSecondary};

    svg {
      stroke: ${i.orangeSecondary};
    }
  }

  ${h.tablet} {
    font-size: 16px;
  }
`,Pe=n.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${i.orange};

  transition: stroke 250ms ease-in-out;
`,Re=n.div`
  display: inline-flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${i.white};

  ${h.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 21px;
  }
`,Me=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`,ze=n.svg`
  width: 16px;
  height: 16px;

  fill: ${i.white};
`,Ie=n.div`
  display: inline-block;
  align-items: center;
  margin-top: 8px;

  ${h.tablet} {
    margin-top: 12px;
  }
`,F=n.div`
  display: inline-flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${i.textWhite04};

  &:last-child {
    margin-right: 0;
  }
`,H=n.p`
  margin-left: 4px;

  color: ${i.white};
`,Be=n.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${i.backdrop};
`,De=n.div`
  border: 1px solid ${i.textWhite02};
  position: absolute;

  overflow: auto;
  height: ${t=>t.height[0]}px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${h.smallMobile} {
    width: 300px;
  }
  ${h.mobile} {
    width: 335px;
  }
  padding: 48px 20px;
  border-radius: 8px;
  background-color: ${i.modalBlack};
  z-index: 1;

  ${h.tablet} {
    width: ${t=>t.width}px;
    height: ${t=>t.height[1]}px;

    padding: 48px 32px;
  }
`,Ae=n.button`
  position: absolute;
  top: 14px;
  right: 14px;
  ${he}

  &:hover svg {
    stroke: ${i.orange};
    scale: 1.1;
  }
  &:focus svg {
    stroke: ${i.orange};
    scale: 1.1;
  }
`,Oe=n.svg`
  width: 24px;
  height: 24px;
  stroke: ${i.textWhite04};
  scale: 1;

  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 200ms cubic-bezier(0.4, 0, 0.2, 1);
`,qe=document.querySelector("#modal-root"),Y=({children:t,openModal:e,width:r,height:s})=>{p.useEffect(()=>{const a=c=>{c.code==="Escape"&&e()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e]);const l=a=>{a.currentTarget===a.target&&e()};return ue.createPortal(o.jsx(Be,{onClick:l,children:o.jsxs(De,{width:r,height:s,children:[o.jsx(Ae,{type:"button",onClick:()=>e(),children:o.jsx(Oe,{children:o.jsx("use",{href:I+"#close"})})}),t]})}),qe)};n.div`
  background-color: ${i.modalBlack};
  border-radius: 12px;
  padding: 48px 24px;
  ${h.tablet} {
    padding: 48px 32px;
  }
`;const Ne=n.div`
  position: relative;

  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${h.tablet} {
    flex-direction: row;
  }
`,Fe=n.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${i.orange};
  gap: 10px;
  background-color: inherit;
  color: ${i.textWhite03};

  ${h.tablet} {
    width: 244px;
    height: 40px;
  }
`,He=n.input`
  position: relative;
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${i.orange};
  gap: 10px;
  background-color: inherit;
  color: ${i.white};

  &::placeholder {
    color: ${i.textWhite03};
    text-align: right;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* &[type='number'] {
    -moz-appearance: textfield;
  } */

  ${h.tablet} {
    width: 155px;
    height: 40px;
    margin-top: 0;
  }

  :focus-visible {
	outline: 0;
    border: 2px solid ${i.orange};
  }

  &:focus + label {
    top: -10px;
  }
`,Ue=n.label`
  position: absolute;
  top: 10px;
  right: 18px;
  font-size: 14px;
  padding: 0 12px;
  background-color: ${i.modalBlack};
  color: ${i.textWhite03};

  transition: top 200ms cubic-bezier(0.4, 0, 0.2, 1);
`,Ge=n.div`
  position: relative;
`,Ke=n.p`
  font-size: 12px;
  align-items: end;
  color: ${i.white};
`,Ye=n.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: ${i.textWhite04};
`,_e=n.div`
  display: flex;
  margin-top: 24px;
  ${h.tablet} {
    margin-top: 64px;
  }
`,ie=n.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: ${i.orange};
  color: ${i.white};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid ${i.textWhite03};
  margin-right: 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${i.orangeSecondary};
  }

  ${h.tablet} {
    margin-right: 16px;
  }

  &:disabled {
    color: ${i.textWhite06};
    background: ${i.orangeSecondary};

  }
`,Qe=n.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: inherit;
  color: ${i.white};
  border-radius: 12px;
  border: 1px solid ${i.textWhite03};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  ${h.tablet} {
    padding: 12px 40px;
  }

  &:hover {
    border-color: ${i.orange};
    transition: border-color 0.3s ease-out;
  }
`;function se({data:t,closeModal:e,addProduct:r}){const[s,l]=p.useState(""),a=Math.round(s*t.calories/100),c=re(new Date);return o.jsxs("form",{children:[o.jsxs(Ne,{children:[o.jsx("label",{children:o.jsx(Fe,{type:"text",value:t.title,disabled:!0})}),o.jsxs(Ge,{children:[o.jsx(He,{id:"grams",type:"number",value:s,onChange:x=>l(x.target.value)}),o.jsx(Ue,{htmlFor:"grams",children:"grams "})]})]}),o.jsxs(Ke,{children:[o.jsx(Ye,{children:"Calories:"})," ",a]}),o.jsxs(_e,{children:[o.jsx(ie,{disabled:!(s>0),type:"button",onClick:()=>r({id:t.id,date:c,amount:s,calories:a}),children:"Add to diary"}),o.jsx(Qe,{type:"button",onClick:e,children:"Cancel"})]})]})}se.propTypes={data:d.object,closeModal:d.func,addProduct:d.func};var _=typeof window>"u"?p.useEffect:p.useLayoutEffect,Ve=({isPlaying:t,duration:e,startAt:r=0,updateInterval:s=0,onComplete:l,onUpdate:a})=>{let[c,x]=p.useState(r),u=p.useRef(0),j=p.useRef(r),y=p.useRef(r*-1e3),m=p.useRef(null),g=p.useRef(null),k=p.useRef(null),S=w=>{let v=w/1e3;if(g.current===null){g.current=v,m.current=requestAnimationFrame(S);return}let f=v-g.current,T=u.current+f;g.current=v,u.current=T;let W=j.current+(s===0?T:(T/s|0)*s),L=j.current+T,P=typeof e=="number"&&L>=e;x(P?e:W),P||(m.current=requestAnimationFrame(S))},$=()=>{m.current&&cancelAnimationFrame(m.current),k.current&&clearTimeout(k.current),g.current=null},b=p.useCallback(w=>{$(),u.current=0;let v=typeof w=="number"?w:r;j.current=v,x(v),t&&(m.current=requestAnimationFrame(S))},[t,r]);return _(()=>{if(a==null||a(c),e&&c>=e){y.current+=e*1e3;let{shouldRepeat:w=!1,delay:v=0,newStartAt:f}=(l==null?void 0:l(y.current/1e3))||{};w&&(k.current=setTimeout(()=>b(f),v*1e3))}},[c,e]),_(()=>(t&&(m.current=requestAnimationFrame(S)),$),[t,e,s]),{elapsedTime:c,reset:b}},Je=(t,e,r)=>{let s=t/2,l=e/2,a=s-l,c=2*a,x=r==="clockwise"?"1,0":"0,1",u=2*Math.PI*a;return{path:`m ${s},${l} a ${a},${a} 0 ${x} 0,${c} a ${a},${a} 0 ${x} 0,-${c}`,pathLength:u}},Q=(t,e)=>t===0||t===e?0:typeof e=="number"?t-e:0,Xe=t=>({position:"relative",width:t,height:t}),Ze={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ne=(t,e,r,s,l)=>{if(s===0)return e;let a=(l?s-t:t)/s;return e+r*a},V=t=>{var e,r;return(r=(e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,l,a,c)=>`#${l}${l}${a}${a}${c}${c}`).substring(1).match(/.{2}/g))==null?void 0:e.map(s=>parseInt(s,16)))!=null?r:[]},et=(t,e)=>{var r;let{colors:s,colorsTime:l,isSmoothColorTransition:a=!0}=t;if(typeof s=="string")return s;let c=(r=l==null?void 0:l.findIndex((g,k)=>g>=e&&e>=l[k+1]))!=null?r:-1;if(!l||c===-1)return s[0];if(!a)return s[c];let x=l[c]-e,u=l[c]-l[c+1],j=V(s[c]),y=V(s[c+1]),m=!!t.isGrowing;return`rgb(${j.map((g,k)=>ne(x,g,y[k]-g,u,m)|0).join(",")})`},tt=t=>{let{duration:e,initialRemainingTime:r,updateInterval:s,size:l=180,strokeWidth:a=12,trailStrokeWidth:c,isPlaying:x=!1,isGrowing:u=!1,rotation:j="clockwise",onComplete:y,onUpdate:m}=t,g=p.useRef(),k=Math.max(a,c??0),{path:S,pathLength:$}=Je(l,k,j),{elapsedTime:b}=Ve({isPlaying:x,duration:e,startAt:Q(e,r),updateInterval:s,onUpdate:typeof m=="function"?v=>{let f=Math.ceil(e-v);f!==g.current&&(g.current=f,m(f))}:void 0,onComplete:typeof y=="function"?v=>{var f;let{shouldRepeat:T,delay:W,newInitialRemainingTime:L}=(f=y(v))!=null?f:{};if(T)return{shouldRepeat:T,delay:W,newStartAt:Q(e,L)}}:void 0}),w=e-b;return{elapsedTime:b,path:S,pathLength:$,remainingTime:Math.ceil(w),rotation:j,size:l,stroke:et(t,w),strokeDashoffset:ne(b,0,$,e,u),strokeWidth:a}},le=t=>{let{children:e,strokeLinecap:r,trailColor:s,trailStrokeWidth:l}=t,{path:a,pathLength:c,stroke:x,strokeDashoffset:u,remainingTime:j,elapsedTime:y,size:m,strokeWidth:g}=tt(t);return z.createElement("div",{style:Xe(m)},z.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:a,fill:"none",stroke:s??"#d9d9d9",strokeWidth:l??g}),z.createElement("path",{d:a,fill:"none",stroke:x,strokeLinecap:r??"round",strokeWidth:g,strokeDasharray:c,strokeDashoffset:u})),typeof e=="function"&&z.createElement("div",{style:Ze},e({remainingTime:j,elapsedTime:y,color:x})))};le.displayName="CountdownCircleTimer";const J=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ot=n.div`
  margin-bottom: 4px;
  font-size: 10px;
  line-height: 140%;
  color: ${i.textWhite04};
`,X=n.button`
  margin-bottom: 8px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;

  &:hover svg {
    scale: 1.15;
  }

`,Z=n.svg`
  width: 32px;
  height: 32px;
  fill: ${i.orange};
  stroke: ${i.white};

  scale: 1;

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,rt=n.div`
  font-size: 14px;
  line-height: 128%;
  color: ${i.textWhite03};
`,it=n.span`
  margin-left: 8px;
  color: ${i.orange};
`;function ae({writeTime:t,isPlaying:e,calory:r,startExercise:s,stopExercise:l}){return o.jsxs(o.Fragment,{children:[o.jsxs(J,{children:[o.jsx(ot,{children:"Timer"}),o.jsx(le,{size:124,duration:180,colors:"#E6533C",strokeWidth:4,trailColor:"#EFEDE81A",isPlaying:e,children:t})]}),o.jsxs(J,{children:[e?o.jsx(X,{type:"button",onClick:l,children:o.jsx(Z,{children:o.jsx("use",{href:I+"#pause"})})}):o.jsx(X,{type:"button",onClick:s,children:o.jsx(Z,{children:o.jsx("use",{href:I+"#play"})})}),o.jsxs(rt,{children:["Burned calories:",o.jsx(it,{children:r})]})]})]})}ae.propTypes={calory:d.number.isRequired,writeTime:d.func.isRequired,startExercise:d.func.isRequired,stopExercise:d.func.isRequired,isPlaying:d.bool.isRequired};const st=n.div`
  position: relative;
  z-index: 100;
  width: 335px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border: transparent;

  background-color: ${i.modalBackground};
  ${h.tablet} {
    width: 694px;
    display: flex;
    gap: 15px;
  }
`,nt=n.div`
  width: 270px;
  height: 226px;
  overflow: hidden;
  border: 1px solid ${i.textWhite02};
  border-radius: 12px;
`,lt=n.img`
  width: 270px;
  height: 226px;
`,at=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
  ${h.tablet} {
    margin-bottom: 0;
  }
`,ct=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  ${h.tablet} {
    height: 226px;
  }
`,D=n.div`
  flex-basis: calc((100% - 8px) / 2);

  min-height: 62px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${i.textWhite02};
  background-color: ${i.textWhite005};
  ${h.tablet} {
    min-height: 68px;
  }
`,A=n.div`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 133%;
  color: ${i.textWhite04};
`,O=n.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 128.571%;
  color: ${i.white};
  ${h.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`,dt=n.div`
  ${h.tablet} {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }
`,pt=n.span`
  font-size: 16px;
  line-height: 150%;
  color: ${i.white};
`;function ce({data:t,addExercise:e}){const{_id:r,burnedCalories:s,name:l,bodyPart:a,gifUrl:c,target:x,equipment:u,time:j}=t,[y,m]=p.useState(0),[g,k]=p.useState(0),[S,$]=p.useState(!1),[b,w]=p.useState(null),v=te(),f=(C,R,M)=>{const B=Math.floor(M*C/(R*60));m(B)};p.useEffect(()=>{f(s,j,g)},[s,j,g]);const T=()=>{k(C=>C+1)},W=()=>{const C=setInterval(T,1e3);w(C),$(!0),v(U(!0))},L=()=>{$(!1),clearInterval(b),w(null)},P=re(new Date),q=({remainingTime:C})=>{const R=Math.floor(C/60).toString().length>1?Math.floor(C/60):"0"+Math.floor(C/60),M=(C%60).toString().length>1?C%60:"0"+C%60;return o.jsxs(pt,{children:[R,":",M]})};return o.jsxs(st,{children:[o.jsxs(at,{children:[o.jsx(nt,{children:o.jsx(lt,{src:c,alt:"gif of exercise"})}),o.jsx(ae,{startExercise:W,stopExercise:L,countCalory:f,calory:y,writeTime:q,isPlaying:S})]}),o.jsxs(ct,{children:[o.jsxs(D,{children:[o.jsx(A,{children:"Name"}),o.jsx(O,{children:E(l)})]}),o.jsxs(D,{children:[o.jsx(A,{children:"Target"}),o.jsx(O,{children:E(x)})]}),o.jsxs(D,{children:[o.jsx(A,{children:"Body Part"}),o.jsx(O,{children:E(a)})]}),o.jsxs(D,{children:[o.jsx(A,{children:"Equipment"}),o.jsx(O,{children:E(u)})]}),o.jsxs(D,{children:[o.jsx(A,{children:"Time"}),o.jsxs(O,{children:[j," minutes"]})]})]}),o.jsx(dt,{children:o.jsx(ie,{disabled:!(y>10),type:"button",onClick:()=>{e({id:r,date:P,time:g,burnedCalories:y}),v(U(!1))},children:"Add to diary"})})]})}ce.propTypes={data:d.object.isRequired,addExercise:d.func};oe.defaults.baseURL="https://power-pulse-rest-api.onrender.com";const ht=xe("addProduct",async(t,{rejectWithValue:e})=>{try{await oe.post("/api/diary/add-product",t)}catch{return ge.error("Oops... Something went wrong! Try again!"),e("Oops... Something went wrong!")}}),ut=(t,e)=>{let r=24;return e<768?r=23:e<1440&&(r=19),t.length<=r?t:t.substring(0,r)+"..."},xt=n.div`
  display: flex;
  flex-direction: column;
  width: 190px;
`,gt=n.img`
  width: 120px;
  height: 97px;
  margin: 0 auto;
  margin-bottom: 19px;
`,ft=n.strong`
  margin: 0 auto;
  margin-bottom: 16px;

  color: ${i.white};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: ${32/24};
`,mt=n.ul`
  margin: 0 auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,bt=n.p`
  color: ${i.textWhite03};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${18/14};
  display: flex;
  align-items: center;
`,wt=n.span`
  color: ${i.orange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${14/18};
  margin-left: 5px;
`,yt=n(fe)`
  margin: 0 auto;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: baseline;

  gap: 8px;

  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: ${i.orange};
    scale: 1.1;
  }
`,$t=n.svg`
  stroke: currentColor;
  width: 16px;
  height: 16px;
  fill: ${i.textWhite04};
  scale: 1;


`,vt="/september-project/assets/foodIcon-f93b792c.png",jt="/september-project/assets/thumbUp-e8c8bf67.png";function G({modalType:t,data:e,btnNext:r}){const s=a=>{if(a==="time")return"Your  time:   ";if(a==="burnedCalories")return"Burned calories:    ";if(a==="calories")return"Calories: "},l=a=>Object.keys(a).map(u=>o.jsx("li",{children:o.jsxs(bt,{children:[`${s(u)} `,o.jsxs(wt,{children:[u==="time"&&`${a[u]} seconds`," ",u==="burnedCalories"&&`${a[u]}`," ",u==="calories"&&`${a[u]}`," "]})]})},me()));return o.jsxs(xt,{children:[o.jsx(gt,{src:t==="product"?vt:jt,alt:"it`s a placeholder image, but it`s avocado too"}),o.jsx(ft,{children:"Well Done"}),o.jsx(mt,{children:l(e)}),o.jsx(we,{title:t==="product"?"Next product":"Next exercise",btnNext:r}),o.jsxs(yt,{to:"/diary",children:["To the diary",o.jsx($t,{fill:"",children:o.jsx("use",{href:I+"#arrow-right"})})]})]})}G.propTypes={modalType:d.oneOf(["product","exercise"]),data:d.object.isRequired,btnNext:d.func};const Bt=t=>t.exercises.items,Dt=t=>t.exercises.getFilters,At=t=>t.exercises.isLoading,Ot=t=>t.exercises.hasMore,qt=t=>t.exercises.searchParams,Ct=t=>t.exercises.isTimerOn,kt=({page:t,data:e})=>{const[r,s]=p.useState(window.innerWidth),[l,a]=p.useState(!1),[c,x]=p.useState(!1),[u,j]=p.useState(0),[y,m]=p.useState(0),[g,k]=p.useState(0),S=ee(Ct),$=()=>{a(L=>!L),document.body.classList.toggle("body-scroll-lock")},b=()=>{x(L=>!L),document.body.classList.toggle("body-scroll-lock")},w=te();p.useEffect(()=>(window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}),[]);const v=()=>{s(window.innerWidth)},f=$e(t,e),T=({id:L,date:P,amount:q,calories:C,time:R,burnedCalories:M})=>{if(t==="product"){const B={productId:L,date:P,amount:q,calories:C};j(C),w(ht(B))}if(t==="exercise"){const B={exerciseId:L,date:P,time:R,burnedCalories:M};if(!R||!M)return;m(R),k(M),w(be(B))}$(),b()},W=()=>{S?ye.Confirm.show("Warning","Do you really want to exit? You will lost all of your progress.","Yes","No",()=>{w(U(!1)),$()},()=>{},{backgroundColor:`${i.black}`,titleColor:`${i.orange}`,messageColor:`${i.orangeSecondary}`,okButtonBackground:`${i.orange}`}):$()};return o.jsxs(Te,{children:[o.jsxs(Le,{children:[o.jsx(Se,{children:f.subtitle}),t==="product"&&o.jsx(Ee,{reccomend:e.recommended,children:e.recommended?"Recommended":"Not recommended"}),o.jsxs(We,{onClick:$,children:[f.button,o.jsx(Pe,{children:o.jsx("use",{href:I+"#arrow-right"})})]})]}),o.jsxs(Re,{children:[o.jsx(Me,{children:o.jsx(ze,{children:o.jsx("use",{href:I+"#runningMan"})})}),ut(f.title,r)]}),o.jsxs(Ie,{children:[o.jsxs(F,{children:[f.text1,o.jsx(H,{children:f.subText1})]}),o.jsxs(F,{children:[f.text2,o.jsx(H,{children:f.subText2})]}),o.jsxs(F,{children:[f.text3,o.jsx(H,{children:f.subText3})]})]}),l&&o.jsxs(Y,{openModal:t==="product"?$:W,width:t==="product"?481:696,height:t==="product"?[285,286]:[405,550],children:[t==="product"&&o.jsx(se,{closeModal:$,data:e,addProduct:T}),t==="exercise"&&o.jsx(ce,{data:e,addExercise:T})]}),c&&o.jsxs(Y,{openModal:b,width:430,height:t==="product"?[389,428]:[402,408],children:[t==="product"&&o.jsx(G,{modalType:"product",data:{calories:u},btnNext:b}),t==="exercise"&&o.jsx(G,{modalType:"exercise",data:{time:y,burnedCalories:g},btnNext:b})]})]})};kt.propTypes={page:d.string,data:d.object,openModal:d.func};export{K as I,It as P,ke as S,zt as a,Mt as b,Pt as c,ve as d,kt as e,Bt as f,Rt as g,At as h,qt as i,Ot as j,Dt as s};
