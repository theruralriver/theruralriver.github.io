(self.webpackChunktypescript_project=self.webpackChunktypescript_project||[]).push([[798],{1176:(e,t,i)=>{var a={"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./ru":1793,"./ru.js":1793};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=1176},7687:(e,t,i)=>{"use strict";i.d(t,{x:()=>s});var a=i(5893);function n(e){if("number"==typeof e)return[e,e,e,e];if(!Array.isArray(e))return[0,0,0,0];switch(e.length){case 0:return[0,0,0,0];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return[e[0],e[1],e[2],e[3]];default:return console.error("makeCssArray: too big array"),[e[0],e[1],e[2],e[3]]}}function s(e){const{tagName:t="div",children:i,margin:s,padding:l,width:r,height:o,boxSizing:c,backgroundColor:d,display:m}=e,[u,h,f,p,x,j,g,Z]=[...n(s),...n(l)].map((e=>`${e}px`)),b={backgroundColor:d,boxSizing:c,display:m,height:o,marginBottom:f,marginLeft:p,marginRight:h,marginTop:u,paddingBottom:g,paddingLeft:Z,paddingRight:j,paddingTop:x,width:r};return(0,a.jsx)(t,{style:b,children:i})}},9845:(e,t,i)=>{"use strict";i.d(t,{d:()=>G});var a=i(5893),n=i(7294),s=i(6170),l=i(4312),r=i(2787),o=i(1257),c=i(3716),d=i(9487),m=i(4180),u=i(7049),h=i(9676),f=i(1577),p=i(661),x=i(381),j=i.n(x),g=i(9655),Z=i(1870),b=i(2138),L=(i(1131),i(6163)),I=i(874),y=i(3685),S=i(4154),v=i(6479),T=i(1230),k=i(5746),N=i(7687),D=i(6712);function V(e){const{mdInput:t,children:i}=e;return(0,a.jsxs)(T.Z,{className:"d6389f",gutter:[16,0],children:[(0,a.jsx)(k.Z,{span:12,children:i}),(0,a.jsx)(k.Z,{span:12,children:(0,a.jsx)(N.x,{backgroundColor:"#fff",height:"calc(100% - 54px)",margin:[32,0,16],padding:[8],children:(0,a.jsx)(D.U,{articleTitle:"",mdInput:t})})})]})}var A=i(1681),C=i(3624),w=i(4564),R=i(5643),$=i(1636),M=i(7178),O=i(2171),F=i(9101);const{Option:P}=l.Z,{Text:U}=s.Z;function z(e){const{name:t}=e;return{name:t,status:"done",uid:t,url:(0,O.D6)(t)?(0,O.sF)(t,{height:96,width:96}):(0,O.ah)(t)}}function E(e,t,i){const{name:n}=t,s=i.find((e=>e.name===n));return(0,a.jsxs)(N.x,{height:112,children:[e,s?(0,a.jsx)(r.Z,{value:(0,O.Bz)(s)}):(0,a.jsx)(r.Z,{status:"error",value:`[ERROR]: can not find file by name: ${n}`})]})}function K(e){const{title:t,id:i}=e;return(0,a.jsx)(P,{title:t,value:i,children:t},i)}function B(e,t){const{id:i}=e;return t.filter((e=>e.subDocumentIdList.includes(i)))}function W(e,t){const i=B(e,t).map(((e,t)=>{const{id:i,title:n,slug:s}=e;return(0,a.jsxs)(U,{children:[t>0?", ":null,(0,a.jsx)(g.Link,{to:(0,w._)(s),children:n})," | ",(0,a.jsx)(g.Link,{to:(0,O.j9)(i),children:s})]},i)}));return i.length>0?i:[(0,a.jsx)(U,{children:"no parents"},"no-parents")]}function _(){return(0,a.jsx)(f.Z,{icon:(0,a.jsx)(F.Z,{}),children:"Upload"})}var H=i(2780);const{Text:Q,Title:X}=s.Z,{Option:q}=l.Z,{TextArea:J}=r.Z;function G(e){const{article:t,onFinish:i,mode:s}=e,{articleType:x,content:T,createdDate:k,description:D,descriptionShort:F,fileList:P,hasMetaRobotsNoFollowSeo:U,hasMetaRobotsNoIndexSeo:G,id:Y,isActive:ee,isInSiteMapXmlSeo:te,metaDescriptionSeo:ie,metaKeyWordsSeo:ae,metaSeo:ne,publishDate:se,slug:le,staffArtistList:re,staffAuthorList:oe,staffCompositorList:ce,staffDirectorList:de,staffIllustratorList:me,staffReaderList:ue,subDocumentIdList:he,subDocumentListViewType:fe,tagList:pe,tagTitleSeo:xe,title:je,titleImage:ge,updatedDate:Ze}=t,[be]=o.Z.useForm(),[Le,Ie]=(0,n.useState)([...P]),[ye,Se]=(0,n.useState)(ge),[ve,Te]=(0,n.useState)(se||(new Date).toISOString()),[ke,Ne]=(0,n.useState)((0,y.Iu)(je)),[De,Ve]=(0,n.useState)(t),[Ae,Ce]=(0,n.useState)(!1);(0,R.K)([R.A.ctrl],"s",be.submit);const{execute:we}=(0,S.Od)(v.Qy),[Re,$e]=(0,n.useState)([]);(0,n.useEffect)((()=>{we({pageIndex:0,pageSize:0,query:{},sort:{title:1}},H.VJ).then((e=>$e(e.result))).catch((e=>{c.ZP.error("Can not fetch article list.")}))}),[we]);const Me=(0,O.v8)(he,Re),Oe=B(t,Re).length>0||Y===C.Z;return(0,a.jsxs)(o.Z,{autoComplete:"off",form:be,initialValues:{remember:!0},layout:"vertical",name:"article",onFieldsChange:function(e,t){},onFinish:function(e){const t={...e,fileList:Le,publishDate:ve,staffArtistList:(0,y.yk)(e.staffArtistList),staffAuthorList:(0,y.yk)(e.staffAuthorList),staffCompositorList:(0,y.yk)(e.staffCompositorList),staffDirectorList:(0,y.yk)(e.staffDirectorList),staffIllustratorList:(0,y.yk)(e.staffIllustratorList),staffReaderList:(0,y.yk)(e.staffReaderList),tagList:(0,y.yk)(e.tagList),title:(0,y.p9)(e.title),titleImage:ye},[a,n]=(0,I.NA)(t);console.info("validateFunction.errors"),console.info(n.errors),a?i(t):c.ZP.error(JSON.stringify(n.errors))},onFinishFailed:function(e){c.ZP.error(JSON.stringify(e.errorFields))},onValuesChange:function(e,t){Ne((0,y.Iu)(t.title)),Ve(t)},scrollToFirstError:!0,children:[(0,a.jsx)(M.$,{isShow:Ae,position:"fixed"}),(0,a.jsx)(A.K,{isRender:Me.length>0,children:(0,a.jsxs)(X,{level:4,type:"danger",children:["Document has missing children, children Id: ",Me.join(", ")]})}),(0,a.jsx)(N.x,{padding:[8,0],children:(0,a.jsxs)(Q,{children:["Article: ",(0,a.jsx)(g.Link,{to:(0,w._)(le),children:je})," | ",(0,a.jsx)(g.Link,{to:(0,O.j9)(Y),children:le})]})}),(0,a.jsx)(N.x,{padding:[8,0,16],children:(0,a.jsxs)(Q,{children:["Parents: ",W(t,Re)]})}),(0,a.jsx)(o.Z.Item,{hidden:!0,initialValue:Y,label:`Article id: ${Y}`,name:"id",children:(0,a.jsx)(r.Z,{disabled:!0})}),(0,a.jsx)(o.Z.Item,{label:`Title image (to 16MB): ${ye.name}`,children:(0,a.jsx)(d.Z,{accept:H.uN,action:async e=>{try{Ce(!0);const t=await(0,O.cT)(e,H.$t);Se(t)}catch(e){const t=e instanceof Error?e.message:"Too big file";c.ZP.error(t)}finally{Ce(!1)}return"https://dev.null/dev/null"},fileList:ye.size>0?[ye].map(z):[],itemRender:(e,t)=>E(e,t,[ye]),listType:"picture",maxCount:1,onChange:function(e){const{file:t}=e;"removed"===t.status&&Se((0,$.Q)())},children:ye.size>0?null:(0,a.jsx)(_,{})})}),(0,a.jsx)(o.Z.Item,{initialValue:je,label:"Title:",name:"title",rules:[{message:"Required!",required:!0}],children:(0,a.jsx)(r.Z,{placeholder:"Title"})}),(0,a.jsx)(o.Z.Item,{initialValue:le,label:`Slug, avoid spec symbols, slug from title: ${ke}`,name:"slug",normalize:y.Iu,rules:(0,O.o3)({id:Y,mode:s,savedArticleList:Re}),children:(0,a.jsx)(r.Z,{disabled:0===Re.length,placeholder:"slug-is-here"})}),(0,a.jsx)(o.Z.Item,{initialValue:x,label:"Article type:",name:"articleType",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(q,{value:L.UL.article,children:"Article"}),(0,a.jsx)(q,{value:L.UL.container,children:"Container"}),(0,a.jsx)(q,{value:L.UL.audioList,children:"Audio list"})]})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,y.sj)(pe),label:`Tag List, use comma "," to divide: ${(0,y.pi)(De.tagList)}`,name:"tagList",children:(0,a.jsx)(r.Z,{placeholder:"Tag1, Tag2, Tag3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:fe,label:"Sub Document List View Type:",name:"subDocumentListViewType",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(q,{value:L.lm.header,children:"Header"}),(0,a.jsx)(q,{value:L.lm.headerImage,children:"Header-Image"})]})}),(0,a.jsx)(o.Z.Item,{initialValue:he,label:"Sub Document List:",name:"subDocumentIdList",children:(0,a.jsx)(l.Z,{disabled:0===Re.length,filterOption:!0,loading:0===Re.length,mode:"multiple",optionFilterProp:"title",placeholder:"Sub Document Id...",children:Re.map(K)})}),(0,a.jsx)(V,{mdInput:De.content,children:(0,a.jsx)(o.Z.Item,{initialValue:T,label:"Content, use markdown:",name:"content",children:(0,a.jsx)(J,{placeholder:"# Markdown...",rows:10})})}),(0,a.jsx)(V,{mdInput:De.description,children:(0,a.jsx)(o.Z.Item,{initialValue:D,label:"Description, use markdown:",name:"description",children:(0,a.jsx)(J,{placeholder:"Some description is here...",rows:3})})}),(0,a.jsx)(o.Z.Item,{initialValue:F,label:"Short description, plain text only, used for Open Graph:",name:"descriptionShort",children:(0,a.jsx)(J,{placeholder:"Some short description is here...",rows:3})}),(0,a.jsx)(o.Z.Item,{label:`Files (image to 16MB, other to 75MB): ${Le.length}`,children:(0,a.jsx)(d.Z,{action:async e=>{try{Ce(!0);const t=(0,O.D6)(e.name)?H.$t:H.WY,i=await(0,O.cT)(e,t);Ie((e=>[...e,i]))}catch(e){const t=e instanceof Error?e.message:"Too big file";c.ZP.error(t)}finally{Ce(!1)}return"https://dev.null/dev/null"},fileList:Le.map(z),itemRender:(e,t)=>E(e,t,Le),listType:"picture",onChange:function(e){const{file:t}=e;"removed"===t.status&&Ie((e=>e.filter((e=>e.name!==t.name))))},children:(0,a.jsx)(_,{})})}),(0,a.jsx)(o.Z.Item,{initialValue:j()(ve),label:"Publish date UTC:",name:"publishDate",children:(0,a.jsx)(m.Z,{onOk:e=>Te(e.toISOString()),showTime:!0})}),(0,a.jsx)(o.Z.Item,{initialValue:k||H.hd,label:"Created date UTC:",name:"createdDate",children:(0,a.jsx)(r.Z,{disabled:!0})}),(0,a.jsx)(o.Z.Item,{initialValue:Ze||H.hd,label:"Updated date UTC:",name:"updatedDate",children:(0,a.jsx)(r.Z,{disabled:!0})}),(0,a.jsx)(u.Z,{orientation:"center",children:"SEO"}),(0,a.jsx)(o.Z.Item,{initialValue:xe,label:"Meta Title, tag <title>...</title>:",name:"tagTitleSeo",children:(0,a.jsx)(r.Z,{placeholder:"Title..."})}),(0,a.jsx)(o.Z.Item,{initialValue:U,label:"Has Meta Robots No Follow:",name:"hasMetaRobotsNoFollowSeo",valuePropName:"checked",children:(0,a.jsx)(h.Z,{children:'Add/combine <meta name="robots" content="nofollow" />'})}),(0,a.jsx)(o.Z.Item,{initialValue:G,label:"Has Meta Robots No Index:",name:"hasMetaRobotsNoIndexSeo",valuePropName:"checked",children:(0,a.jsx)(h.Z,{children:'Add/combine <meta name="robots" content="noindex"/> and add X-Robots-Tag: noindex'})}),(0,a.jsx)(o.Z.Item,{initialValue:ee,label:"Is Active:",name:"isActive",valuePropName:"checked",children:(0,a.jsx)(h.Z,{children:'Uncheck to temporary "remove" (also remove from sitemap.xml)'})}),(0,a.jsx)(o.Z.Item,{initialValue:te,label:"Is In Site Map Xml:",name:"isInSiteMapXmlSeo",valuePropName:"checked",children:(0,a.jsx)(h.Z,{children:"Does sitemap.xml has link to article or not"})}),(0,a.jsx)(o.Z.Item,{initialValue:ie,label:'Meta Description, tag <meta name="description" content="..." />:',name:"metaDescriptionSeo",children:(0,a.jsx)(r.Z,{placeholder:"Description..."})}),(0,a.jsx)(o.Z.Item,{initialValue:ae,label:'Meta KeyWords, tag <meta name="keywords" content="..." />:',name:"metaKeyWordsSeo",children:(0,a.jsx)(r.Z,{placeholder:"KeyWords..."})}),(0,a.jsx)(o.Z.Item,{initialValue:ne,label:"Meta, actually any valid html code:",name:"metaSeo",rules:(0,O.sB)(),children:(0,a.jsx)(J,{placeholder:"Additional meta tags...",rows:3})}),(0,a.jsx)(u.Z,{orientation:"center",children:"Staff"}),(0,a.jsx)(o.Z.Item,{initialValue:(0,y.sj)(re),label:`Staff Artists, use comma "," to divide: ${(0,y.pi)(De.staffArtistList)}`,name:"staffArtistList",children:(0,a.jsx)(r.Z,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,y.sj)(oe),label:`Staff Authors, use comma "," to divide: ${(0,y.pi)(De.staffAuthorList)}`,name:"staffAuthorList",children:(0,a.jsx)(r.Z,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,y.sj)(ce),label:`Staff Compositors, use comma "," to divide: ${(0,y.pi)(De.staffCompositorList)}`,name:"staffCompositorList",children:(0,a.jsx)(r.Z,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,y.sj)(de),label:`Staff Directors, use comma "," to divide: ${(0,y.pi)(De.staffDirectorList)}`,name:"staffDirectorList",children:(0,a.jsx)(r.Z,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,y.sj)(me),label:`Staff Illustrators, use comma "," to divide: ${(0,y.pi)(De.staffIllustratorList)}`,name:"staffIllustratorList",children:(0,a.jsx)(r.Z,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsx)(o.Z.Item,{initialValue:(0,y.sj)(ue),label:`Staff Readers, use comma "," to divide: ${(0,y.pi)(De.staffReaderList)}`,name:"staffReaderList",children:(0,a.jsx)(r.Z,{placeholder:"Name1, Name2, Name3..."})}),(0,a.jsxs)(o.Z.Item,{children:[(0,a.jsx)(f.Z,{htmlType:"submit",type:"primary",children:"Submit (ctrl+S)"}),(0,a.jsxs)(A.K,{isRender:s===H.dW.edit,children:[" ",(0,a.jsx)(p.Z,{cancelText:"No",disabled:Oe,icon:(0,a.jsx)(Z.Z,{style:{color:b.Q6.primary}}),okText:"Delete",onConfirm:()=>(0,O.kA)(Y),title:"Are you sure to delete the article？",children:(0,a.jsx)(f.Z,{disabled:Oe,htmlType:"button",type:"default",children:Oe?"Can NOT delete, article has parent":"Delete"})})]})]})]})}},2137:(e,t,i)=>{"use strict";i.d(t,{Q:()=>m});var a=i(5893),n=i(7183),s=i(8911),l=i(9250),r=i(9655),o=i(7687),c=i(4057);const{Content:d}=n.Z;function m(e){const{children:t}=e,i=(0,l.TH)();return(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(o.x,{padding:16,children:(0,a.jsx)(s.Z,{defaultSelectedKeys:[i.pathname],items:[{key:c.$.articleList.path,label:(0,a.jsx)(r.Link,{to:c.$.articleList.path,children:"List"})},{key:c.$.articleCreate.path,label:(0,a.jsx)(r.Link,{to:c.$.articleCreate.path,children:"Create"})},{key:c.$.articleTree.path,label:(0,a.jsx)(r.Link,{to:c.$.articleTree.path,children:"Tree"})}],mode:"horizontal"})}),(0,a.jsx)(o.x,{padding:16,children:(0,a.jsx)(d,{children:t})})]})}}}]);
//# sourceMappingURL=798.5cd3e3.chunk.js.map