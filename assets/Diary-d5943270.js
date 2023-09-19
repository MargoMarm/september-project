import{n as t,m as i,j as e,c as a,N as p,P as o,s as x}from"./index-54cfc5f9.js";import{D as s,a as m,m as u}from"./descriptionTextMargin-6ff29644.js";import{T as h}from"./Title-7e28c137.js";const b=t.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${i.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${i.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,y=()=>e.jsxs(b,{children:[e.jsx(s,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),e.jsx(s,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),e.jsx(s,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),e.jsx(s,{icon:"fire",label:"Сalories burned",keyValue:"0"}),e.jsx(s,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),e.jsx(s,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),g=t.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 335px;
  padding: 16px;
  align-items: flex-start;
  margin-bottom: ${r=>r.marginBottom}px;

  font-size: 14px;
  line-heigth: 1.29;

  border-radius: 12px;
  border: 1px solid ${a.textWhite02};
  background: rgba(239, 237, 232, 0.05);

  ${i.tablet} {
    width: auto;
    height: 234px;
  }

  ${i.desktop} {
    width: auto;
  }
`,f=t.div`
  display: flex;
  justify-content: space-between;
`,j=t.p`
  margin: 0;

  color: ${a.textWhite05};
`,D=t(p)`
  display: flex;
  align-items: center;

  color: ${a.orange};

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,k=t.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${a.textWhite05};
`,w=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,l=({products:r,to:d,isDayProducts:n,marginBottom:c})=>e.jsxs(g,{marginBottom:c,children:[e.jsxs(f,{children:[e.jsx(j,{children:n?"Products":"Exercises"}),e.jsxs(D,{to:d,children:["Add ",n?"product":"exercise",e.jsx(w,{children:e.jsx("use",{href:x+"#arrow-right"})})]})]}),r.length!==0?e.jsx(ProductsTable,{products:r}):e.jsxs(k,{children:["Not found ",n?"products":"exercises"]})]});l.propTypes={to:o.string,isDayProducts:o.bool,products:o.array,marginBottom:o.number};const $=t.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${i.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,v=t.div`
  width: auto;

  ${i.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${i.desktop} {
    margin-top: 0;
  }
`,T=t.div`
  width: auto;

  ${i.tablet} {
    width: 704px;
  }

  ${i.desktop} {
    width: 826px;
  }
`,S=()=>e.jsxs(e.Fragment,{children:[" ",e.jsx(h,{text:"Diary",margin:{top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}}}),e.jsxs($,{children:[e.jsxs(v,{children:[e.jsx(y,{}),e.jsx(m,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:u})]}),e.jsxs(T,{children:[e.jsx(l,{products:[],marginBottom:40,isDayProducts:!0}),e.jsx(l,{products:[]})]})," "]})]});export{S as default};
