import{d as g,j as s}from"./styled-components.browser.esm-3d6546d2.js";const b=g.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${e=>e.primary?"#fff":"#000"};
  background-color: ${e=>e.primary?"#FF5655":"#f4c4c4"};
  padding: ${e=>e.size==="small"?"7px 25px 8px":e.size==="medium"?"9px 30px 11px":"14px 30px 16px"};
`,i=({size:e,primary:l,disabled:n,text:r,onClick:o,...x})=>s.jsx(b,{type:"button",onClick:o,primary:l,disabled:n,size:e,...x,children:r});try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const u=({disabled:e=!1,onClick:l=()=>{},primary:n=!0,size:r="small",text:o="Button"})=>s.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:s.jsx(i,{size:r,text:o,disabled:e,onClick:l,primary:n})});try{u.displayName="Example",u.__docgenInfo={description:"",displayName:"Example",props:{text:{defaultValue:{value:"Button"},description:"",name:"text",required:!1,type:{name:"string"}},primary:{defaultValue:{value:"true"},description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const _={title:"Button",component:u},a={args:{text:"Button",primary:!0,disabled:!1,size:"small",onClick:()=>console.log("Button")}},t={args:{text:"Button",primary:!1,disabled:!1,size:"small",onClick:()=>console.log("Button")}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: "Button",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button")
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,f,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: "Button",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button")
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const B=["Primary","Secondary"],z=Object.freeze(Object.defineProperty({__proto__:null,Primary:a,Secondary:t,__namedExportsOrder:B,default:_},Symbol.toStringTag,{value:"Module"}));export{z as B,a as P};
