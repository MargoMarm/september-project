import{n as t,m as i,j as e,c as a,N as c,P as r,s as x}from"./index-65333fbf.js";import{D as s,a as m}from"./DescriptionText-c1259457.js";import{T as u}from"./Title-c584d658.js";const b=t.ul`
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
`,h=()=>e.jsxs(b,{children:[e.jsx(s,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),e.jsx(s,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),e.jsx(s,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),e.jsx(s,{icon:"fire",label:"Сalories burned",keyValue:"0"}),e.jsx(s,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),e.jsx(s,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),y=t.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 335px;
  padding: 16px;
  align-items: flex-start;
  margin-bottom: ${o=>o.marginBottom}px;

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
`,g=t.div`
  display: flex;
  justify-content: space-between;
`,f=t.p`
  margin: 0;

  color: ${a.textWhite05};
`,j=t(c)`
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
`,D=t.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,l=({products:o,to:d,isDayProducts:n,marginBottom:p})=>e.jsxs(y,{marginBottom:p,children:[e.jsxs(g,{children:[e.jsx(f,{children:n?"Products":"Exercises"}),e.jsxs(j,{to:d,children:["Add ",n?"product":"exercise",e.jsx(D,{children:e.jsx("use",{href:x+"#arrow-right"})})]})]}),o.length!==0?e.jsx(ProductsTable,{products:o}):e.jsxs(k,{children:["Not found ",n?"products":"exercises"]})]});l.propTypes={to:r.string,isDayProducts:r.bool,products:r.array,marginBottom:r.number};const w=t.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${i.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,$=t.div`
  width: auto;

  ${i.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${i.desktop} {
    margin-top: 0;
  }
`,v=t.div`
  width: auto;

  ${i.tablet} {
    width: 704px;
  }

  ${i.desktop} {
    width: 826px;
  }
`,T={top:{mobile:20,tablet:32,desktop:48},bottom:{mobile:40,tablet:0,desktop:0}},S=()=>e.jsxs(e.Fragment,{children:[" ",e.jsx(u,{text:"Diary",margin:{top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}}}),e.jsxs(w,{children:[e.jsxs($,{children:[e.jsx(h,{}),e.jsx(m,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:T})]}),e.jsxs(v,{children:[e.jsx(l,{products:[],marginBottom:40,isDayProducts:!0}),e.jsx(l,{products:[]})]})," "]})]});export{S as default};
