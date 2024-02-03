import{h as b,k as _,r as l,o as $,c as h,a as e,w as t,u as V,b1 as O,F as k,d as p,b as U,t as C}from"../app.c36015cf.js";const x=p("Begin Tour"),T=p("Upload"),j=p("Save"),P=U("img",{style:{width:"240px"},src:"https://element-plus.org/images/element-plus-logo.svg",alt:"tour.png"},null,-1),B=U("div",null,"Put you files here.",-1),F=b({__name:"basic",setup(S){const u=_(),s=_(),c=_(),a=_(!1);return(y,o)=>{const r=l("el-button"),d=l("el-divider"),f=l("el-space"),i=l("el-tour-step"),m=l("el-tour");return $(),h(k,null,[e(r,{type:"primary",onClick:o[0]||(o[0]=n=>a.value=!0)},{default:t(()=>[x]),_:1}),e(d),e(f,null,{default:t(()=>[e(r,{ref_key:"ref1",ref:u},{default:t(()=>[T]),_:1},512),e(r,{ref_key:"ref2",ref:s,type:"primary"},{default:t(()=>[j]),_:1},512),e(r,{ref_key:"ref3",ref:c,icon:V(O)},null,8,["icon"])]),_:1}),e(m,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=n=>a.value=n)},{default:t(()=>{var n,g,v;return[e(i,{target:(n=u.value)==null?void 0:n.$el,title:"Upload File"},{default:t(()=>[P,B]),_:1},8,["target"]),e(i,{target:(g=s.value)==null?void 0:g.$el,title:"Save",description:"Save your changes"},null,8,["target"]),e(i,{target:(v=c.value)==null?void 0:v.$el,title:"Other Actions",description:"Click to see other"},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const z=p("Begin Tour"),M=p("Upload"),w=p("Save"),A=b({__name:"indicator",setup(S){const u=_(),s=_(),c=_(),a=_(!1);return(y,o)=>{const r=l("el-button"),d=l("el-divider"),f=l("el-space"),i=l("el-tour-step"),m=l("el-tour");return $(),h(k,null,[e(r,{type:"primary",onClick:o[0]||(o[0]=n=>a.value=!0)},{default:t(()=>[z]),_:1}),e(d),e(f,null,{default:t(()=>[e(r,{ref_key:"ref1",ref:u},{default:t(()=>[M]),_:1},512),e(r,{ref_key:"ref2",ref:s,type:"primary"},{default:t(()=>[w]),_:1},512),e(r,{ref_key:"ref3",ref:c,icon:V(O)},null,8,["icon"])]),_:1}),e(m,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=n=>a.value=n)},{indicators:t(({current:n,total:g})=>[U("span",null,C(n+1)+" / "+C(g),1)]),default:t(()=>{var n,g,v;return[e(i,{target:(n=u.value)==null?void 0:n.$el,title:"Upload File",description:"Put you files here."},null,8,["target"]),e(i,{target:(g=s.value)==null?void 0:g.$el,title:"Save",description:"Save your changes"},null,8,["target"]),e(i,{target:(v=c.value)==null?void 0:v.$el,title:"Other Actions",description:"Click to see other"},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var oe=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const R=p("Begin Tour"),N=p("Upload"),D=p("Save"),q=U("img",{src:"https://element-plus.org/images/element-plus-logo.svg",alt:"tour.png"},null,-1),E=U("div",null,"Put you files here.",-1),G=b({__name:"mask",setup(S){const u=_(),s=_(),c=_(),a=_(!1);return(y,o)=>{const r=l("el-button"),d=l("el-divider"),f=l("el-space"),i=l("el-tour-step"),m=l("el-tour");return $(),h(k,null,[e(r,{type:"primary",onClick:o[0]||(o[0]=n=>a.value=!0)},{default:t(()=>[R]),_:1}),e(d),e(f,null,{default:t(()=>[e(r,{ref_key:"ref1",ref:u},{default:t(()=>[N]),_:1},512),e(r,{ref_key:"ref2",ref:s,type:"primary"},{default:t(()=>[D]),_:1},512),e(r,{ref_key:"ref3",ref:c,icon:V(O)},null,8,["icon"])]),_:1}),e(m,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=n=>a.value=n),mask:{style:{boxShadow:"inset 0 0 15px #333"},color:"rgba(80, 255, 255, .4)"}},{default:t(()=>{var n,g,v;return[e(i,{target:(n=u.value)==null?void 0:n.$el,title:"Upload File"},{default:t(()=>[q,E]),_:1},8,["target"]),e(i,{target:(g=s.value)==null?void 0:g.$el,title:"Save",description:"Save your changes",mask:{style:{boxShadow:"inset 0 0 15px #fff"},color:"rgba(40, 0, 255, .4)"}},null,8,["target","mask"]),e(i,{target:(v=c.value)==null?void 0:v.$el,title:"Other Actions",description:"Click to see other",mask:!1},null,8,["target"])]}),_:1},8,["modelValue","mask"])],64)}}});var le=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const H=p("Begin Tour"),I=p("Upload"),J=p("Save"),K=b({__name:"non-modal",setup(S){const u=_(),s=_(),c=_(),a=_(!1);return(y,o)=>{const r=l("el-button"),d=l("el-divider"),f=l("el-space"),i=l("el-tour-step"),m=l("el-tour");return $(),h(k,null,[e(r,{type:"primary",onClick:o[0]||(o[0]=n=>a.value=!0)},{default:t(()=>[H]),_:1}),e(d),e(f,null,{default:t(()=>[e(r,{ref_key:"ref1",ref:u},{default:t(()=>[I]),_:1},512),e(r,{ref_key:"ref2",ref:s,type:"primary"},{default:t(()=>[J]),_:1},512),e(r,{ref_key:"ref3",ref:c,icon:V(O)},null,8,["icon"])]),_:1}),e(m,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=n=>a.value=n),type:"primary",mask:!1},{default:t(()=>{var n,g,v;return[e(i,{target:(n=u.value)==null?void 0:n.$el,title:"Upload File",description:"Put you files here."},null,8,["target"]),e(i,{target:(g=s.value)==null?void 0:g.$el,title:"Save",description:"Save your changes"},null,8,["target"]),e(i,{target:(v=c.value)==null?void 0:v.$el,title:"Other Actions",description:"Click to see other"},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const L=p(" Begin Tour "),Q=b({__name:"placement",setup(S){const u=_(),s=_(!1);return(c,a)=>{const y=l("el-button"),o=l("el-tour-step"),r=l("el-tour");return $(),h(k,null,[e(y,{ref_key:"btnRef",ref:u,type:"primary",onClick:a[0]||(a[0]=d=>s.value=!0)},{default:t(()=>[L]),_:1},512),e(r,{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=d=>s.value=d)},{default:t(()=>{var d,f;return[e(o,{title:"Center",description:"Displayed in the center of screen."}),e(o,{title:"Right",description:"On the right of target.",placement:"right",target:(d=u.value)==null?void 0:d.$el},null,8,["target"]),e(o,{title:"Top",description:"On the top of target.",placement:"top",target:(f=u.value)==null?void 0:f.$el},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var re=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));const W=p("Begin Tour"),X=p("Upload"),Y=p("Save"),Z=b({__name:"target",setup(S){const u=()=>document.querySelector("#btn2"),s=_(),c=_(!1);return(a,y)=>{const o=l("el-button"),r=l("el-divider"),d=l("el-space"),f=l("el-tour-step"),i=l("el-tour");return $(),h(k,null,[e(o,{type:"primary",onClick:y[0]||(y[0]=m=>c.value=!0)},{default:t(()=>[W]),_:1}),e(r),e(d,null,{default:t(()=>[e(o,{id:"btn1"},{default:t(()=>[X]),_:1}),e(o,{id:"btn2",type:"primary"},{default:t(()=>[Y]),_:1}),e(o,{ref_key:"btnRef",ref:s,icon:V(O)},null,8,["icon"])]),_:1}),e(i,{modelValue:c.value,"onUpdate:modelValue":y[1]||(y[1]=m=>c.value=m)},{default:t(()=>{var m;return[e(f,{target:"#btn1",title:"Upload File",description:"Put you files here."}),e(f,{target:u,title:"Save",description:"Save your changes"}),e(f,{target:(m=s.value)==null?void 0:m.$el,title:"Other Actions",description:"Click to see other"},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var ae=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{te as _,oe as a,le as b,ne as c,re as d,ae as e};
