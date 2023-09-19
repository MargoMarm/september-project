import{n as a,m as i,c as l,P as s,j as e,N as u}from"./index-fd774893.js";import{s as g}from"./styled-components.browser.esm-d79f9bc8.js";import{T as f}from"./Title-9945f219.js";const h=a.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 80px;
  }

  ${i.tablet} {
    flex-basis: calc((100% - 32px) / 3);
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${i.desktop} {
    flex-basis: calc((100% - 64px) / 5);
  }
`,y=a.a`
  display: block;

  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: ${l.background05};
`,b=a.img`
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  z-index: -1;
`,j=a.div`
  position: absolute;
  top: 115px;
  left: 78px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 137px;

  ${i.mobile} {
    top: 149px;
    left: 100px;
  }

  ${i.tablet} {
    top: 77px;
    left: 50px;
  }
`,_=a.span`
  color: ${l.white};
  font-size: 20px;
  line-height: 1.2;

  ${i.tablet} {
    font-size: 24px;
    line-height: 1.33;
  }
`,x=a.span`
  color: ${l.textWhite04};
  font-size: 12px;
  line-height: 1.5;
`,p=({filter:t,name:r,imgURL:o})=>e.jsx(h,{children:e.jsxs(y,{children:[e.jsx(b,{src:o,alt:r}),e.jsxs(j,{children:[e.jsx(_,{children:r}),e.jsx(x,{children:t})]})]})});p.propTypes={filter:s.string.isRequired,name:s.string.isRequired,imgURL:s.string.isRequired};const v=a.ul`
  margin-top: 40px;

  ${i.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`;function R(t){return t.substring(0,1).toUpperCase()+t.substring(1)}const n=({bodyParts:t})=>e.jsx(v,{children:t.filter(r=>r.filter==="Body parts").map(({filter:r,name:o,imgURL:d})=>e.jsx(p,{imgURL:d,name:R(o),filter:r},o))});n.propTypes={bodyParts:s.arrayOf(s.shape({name:s.string.isRequired})).isRequired};const L=g.ul`
  display: flex;
  gap: 28px;

  margin-top: 20px;

  ${i.tablet} {
    gap: 32px;
  }
`,c=g.li``,m=g(u)`
  color: ${l.textWhite03};
  font-family: Roboto;
  font-size: 14px;

  line-height: 1.28;

  ${i.tablet} {
    font-size: 16px;

    line-height: 1.5;
  }
`,U=()=>e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsx(c,{children:e.jsx(m,{to:"bodyparts",children:"Body parts"})}),e.jsx(c,{children:e.jsx(m,{to:"muscles",children:"Muscles"})}),e.jsx(c,{children:e.jsx(m,{to:"equipment",children:"Equipment"})})]})}),q=a.div`
  ${i.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,w=[{filter:"Body parts",name:"back",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/back_wzzphw.jpg"},{filter:"Body parts",name:"cardio",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469570/categories/cardio_pkkceg.jpg"},{filter:"Body parts",name:"chest",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469567/categories/chest_rqs6fw.jpg"},{filter:"Body parts",name:"lower arms",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469572/categories/lower_arms_hvwarx.jpg"},{filter:"Body parts",name:"lower legs",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469568/categories/lower_legs_thafch.jpg"},{filter:"Body parts",name:"neck",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469565/categories/neck_t0fc1k.jpg"},{filter:"Body parts",name:"shoulders",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/shoulders_deqz9d.jpg"},{filter:"Body parts",name:"upper arms",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/upper_arms_xsndlt.jpg"},{filter:"Body parts",name:"upper legs",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/upper_legs_dlkfwx.jpg"},{filter:"Body parts",name:"waist",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/waist_i7kqzq.jpg"},{filter:"Equipment",name:"assisted",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/assisted_gukduh.jpg"},{filter:"Equipment",name:"band",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469572/categories/band_ri4mww.jpg"},{filter:"Equipment",name:"barbell",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469569/categories/barbell_tw7rra.jpg"},{filter:"Equipment",name:"body weight",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469568/categories/body_weight_ofngta.jpg"},{filter:"Equipment",name:"bosu ball",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469567/categories/bosu_ball_t8sjw4.jpg"},{filter:"Equipment",name:"cable",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469571/categories/cable_awly7r.jpg"},{filter:"Equipment",name:"dumbbell",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/dumbbell_uakfyd.jpg"},{filter:"Equipment",name:"elliptical machine",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/elliptical_machine_wgwuxq.jpg"},{filter:"Equipment",name:"ez barbell",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/ez_barbell_vjkcrp.jpg"},{filter:"Equipment",name:"hammer",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/hammer_rkogqp.jpg"},{filter:"Equipment",name:"kettlebell",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553685/kettlebell_tnr2tr.jpg"},{filter:"Equipment",name:"leverage machine",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469572/categories/leverage_machine_rd01zw.jpg"},{filter:"Equipment",name:"medicine ball",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/medicine_ball_qx2iff.jpg"},{filter:"Equipment",name:"olympic barbell",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/olympic_barbell_dgwotc.jpg"},{filter:"Equipment",name:"resistance band",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/resistance_band_alzbui.jpg"},{filter:"Equipment",name:"roller",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469567/categories/roller_orqjiv.jpg"},{filter:"Equipment",name:"rope",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/rope_msaxz6.jpg"},{filter:"Equipment",name:"skierg machine",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469567/categories/skierg_machine_sfkvol.jpg"},{filter:"Equipment",name:"sled machine",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469565/categories/sled_machine_p5sld7.jpg"},{filter:"Equipment",name:"smith machine",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469566/categories/smith_machine_i6mzcj.jpg"},{filter:"Equipment",name:"stability ball",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/stability_ball_nylava.jpg"},{filter:"Equipment",name:"stationary bike",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/stationary_bike_fujliq.jpg"},{filter:"Equipment",name:"stepmill machine",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469565/categories/stepmill_machine_mcp0wg.jpg"},{filter:"Equipment",name:"tire",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469568/categories/tire_cphxqu.jpg"},{filter:"Equipment",name:"trap bar",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469570/categories/trap_bar_o6xdf7.jpg"},{filter:"Equipment",name:"upper body ergometer",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/upper_body_ergometer_nvd50h.jpg"},{filter:"Equipment",name:"weighted",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/weighted_w83gye.jpg"},{filter:"Equipment",name:"wheel roller",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/wheel_roller_qqxaoi.jpg"},{filter:"Muscles",name:"abductors",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469569/categories/abductors_ymfukx.jpg"},{filter:"Muscles",name:"abs",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469571/categories/abs_bdi0dw.jpg"},{filter:"Muscles",name:"adductors",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469569/categories/adductors_fmkryf.jpg"},{filter:"Muscles",name:"biceps",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469570/categories/biceps_rnrxog.jpg"},{filter:"Muscles",name:"calves",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469567/categories/calves_vzdk8o.jpg"},{filter:"Muscles",name:"cardiovascular system",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469565/categories/cardiovascular_system_ooip0r.jpg"},{filter:"Muscles",name:"delts",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469568/categories/delts_ui5hy5.jpg"},{filter:"Muscles",name:"forearms",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553684/forearms_bw15z9.jpg"},{filter:"Muscles",name:"glutes",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469571/categories/glutes_dtcdzf.jpg"},{filter:"Muscles",name:"hamstrings",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469568/categories/hamstrings_i5rz3w.jpg"},{filter:"Muscles",name:"lats",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469569/categories/lats_zolre8.jpg"},{filter:"Muscles",name:"levator scapulae",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469570/categories/levator_scapulae_v7bfsw.jpg"},{filter:"Muscles",name:"pectorals",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469565/categories/pectorals_ihwzsc.jpg"},{filter:"Muscles",name:"quads",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/quads_shix1m.jpg"},{filter:"Muscles",name:"serratus anterior",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/serratus_anterior_js6osa.jpg"},{filter:"Muscles",name:"spine",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/spine_cwjeuh.jpg"},{filter:"Muscles",name:"traps",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/traps_mshzl0.jpg"},{filter:"Muscles",name:"triceps",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694553684/triceps_koatge.jpg"},{filter:"Muscles",name:"upper back",imgURL:"https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469563/categories/upper_back_ph9qbd.jpg"}],M=()=>e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsx(f,{text:"Exercises",margin:{top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}}}),e.jsx(U,{})]}),e.jsx(n,{bodyParts:w}),";"]});export{M as default};
