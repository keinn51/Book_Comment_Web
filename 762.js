"use strict";(self.webpackChunkbookhelper_ts_sass=self.webpackChunkbookhelper_ts_sass||[]).push([[762],{3920:(e,t,n)=>{n.d(t,{z:()=>r});var a=n(2804),o=n(7784),l=n(7294),i=n(3639);function r(e){const[t,n]=(0,l.useState)(!1);return o.O.onAuthStateChanged((e=>{n(!!e)})),(0,a.cn)({key:`firebase/${e}/${(0,i.Z)()}`,default:t})}},9404:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const o=(0,n(8884).Z)("div",{target:"eon6qav0"})("position:fixed;top:0;left:0;margin:0;padding:0;background-color:#e5e9ea;color:#00000096;font-family:'Roboto',sans-serif;display:flex;justify-content:center;align-items:center;width:100%;height:100%;z-index:100;transition-duration:1.5s;",(e=>"doing"===e["data-mode"]?{opacity:"1"}:"done"===e["data-mode"]?{opacity:"0",visibility:"hidden"}:null)," .container{position:relative;& span{font-weight:800;font-size:40px;}.loadContainer{position:relative;left:96px;top:10;height:80px;& div{display:inline-block;position:absolute;top:10px;left:8px;width:16px;background:currentColor;animation:lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;}& div:nth-of-type(1){left:8px;animation-delay:0s;}& div:nth-of-type(2){left:32px;animation-delay:0.12s;}& div:nth-of-type(3){left:56px;animation-delay:0.24s;}@keyframes lds-facebook{0%{top:8px;height:64px;}50%,100%{top:24px;height:32px;}}}}"),l=function({loading:e}){return a.createElement(o,{"data-mode":e?"doing":"done"},a.createElement("div",{className:"container"},a.createElement("span",null,"Book Comment"),a.createElement("div",{className:"loadContainer"},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null))))}},3645:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=e=>{const[t,n]=(0,a.useState)(e),o=(0,a.useCallback)((e=>{n(e.target.value)}),[]);return[t,n,o]}},9762:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(7294),o=n(8884);const l=(0,o.Z)("div",{target:"e1jwre2w6"})({name:"1swbug2",styles:"background-color:#f2f2f2;position:relative;padding-bottom:70px;display:flex;justify-content:center;.container{position:relative;width:1400px;}"}),i=(0,o.Z)("div",{target:"e1jwre2w5"})("position:relative;margin:0 auto;width:",1e3,"px;height:",355.96,"px;overflow-x:hidden;"),r=(0,o.Z)("div",{target:"e1jwre2w4"})("position:absolute;left:0;top:0;display:flex;margin:0;height:",300.96,"px;width:",(e=>265*e["data-bookCount"]),";transform:",(e=>`translateX(${e["data-trans"]}px)`),";transition:0.5s;& div:nth-of-type(4n + 1){margin-left:0;}& div:nth-of-type(4n){margin-right:0;}"),s=(0,o.Z)("div",{target:"e1jwre2w3"})({name:"1f5b2gy",styles:".Left,.Right{position:absolute;bottom:-10px;background-color:transparent;border:none;outline:none;color:#00000050;opacity:0.8;font-size:30px;}.Left:hover,.Right:hover{cursor:pointer;transform:scale(1.1);}.Left{right:230px;}.Right{right:190px;}"}),c=(0,o.Z)("div",{target:"e1jwre2w2"})({name:"1cpx9n9",styles:"position:absolute;top:-60px;width:100%;text-align:center;background-color:#f2f2f2;color:#00000096;font-family:'Noto Sans KR',sans-serif;margin:0"}),m=(0,o.Z)("div",{target:"e1jwre2w1"})({name:"ijvwoq",styles:"height:440px;width:100%;text-align:center;background-color:#f2f2f2"}),d=(0,o.Z)("img",{target:"e1jwre2w0"})({name:"1dnr47g",styles:"height:420px;width:1000px;& hover{}"});var p=n(9711);const u="205px",g="300.96px",f="30px",h="30px",x=(0,o.Z)("div",{target:"e1wbwksg2"})("width:",u,";height:",g,";margin:0 ",f,";border:none;& a{width:",u,";height:0;}",(e=>"doing"===e["data-mode"]?{animation:"smoothShow 1s ease-in"}:null),";@keyframes smoothShow{from{position:relative;bottom:-50px;opacity:0;}to{position:relative;bottom:0px;opacity:1;}}"),b=(0,o.Z)("img",{target:"e1wbwksg1"})("width:",u,";height:",g,";z-index:100;"),y=(0,o.Z)("div",{target:"e1wbwksg0"})("width:",u,";height:",g,";padding:",h,";opacity:0;position:absolute;top:0;transition:all 0.3s;color:whitesmoke;background-color:rgba(179, 182, 183);&:hover{opacity:1;}.comment{line-height:300%;}.rating{font-family:'Roboto',serif;width:calc(",u," - (2 * ",h,"));position:absolute;bottom:",f,";& hr{opacity:0.8;}& p{font-family:'Noto Sans KR',sans-serif;text-align:center;}}"),v=function({coverImg:e,title:t,isbn:n,shortcomment:o,rating:l}){const[i,r]=(0,a.useState)("doing");return(0,a.useEffect)((()=>{r("doing"),setTimeout((()=>{r("done")}),1e3)}),[n]),a.createElement(x,{"data-mode":i},a.createElement(p.rU,{to:`/comment/${n}`},a.createElement(b,{src:e,alt:t}),a.createElement(y,null,a.createElement("p",{className:"comment"},o),a.createElement("div",{className:"rating"},a.createElement("hr",null),a.createElement("p",null,l?`Rating : ${l} / 5`:"Please Eval")))))};var E=n(7625),k=n(1436),w=n(7784),C=n(1591),S=n(9183),N=n(2804),Z=n(3920);function z(e){let t=[];return new Set(e).forEach((e=>t.push(e))),t}const D=(0,o.Z)("div",{target:"e17rc59k0"})({name:"1ds18l0",styles:"position:absolute;right:0;top:115px;background-color:#ececec;z-index:3;display:flex;font-family:'Noto Sans KR',sans-serif;color:#00000096;max-width:655px;min-height:80px;padding:0 10px 0 20px;.modal_grid{display:grid;grid-template-columns:repeat(5, 120px);max-width:600px;min-height:80px;.content{display:flex;flex-direction:row;justify-content:center;width:120px;font-size:14px;}.contentInner{display:flex;flex-direction:column;justify-content:center;& div:hover{cursor:pointer;color:wheat;}}}.closeBtn{border:none;background-color:none;margin-top:13px;& img{height:13px;width:13px;}& img:hover{cursor:pointer;}}.resetBtn{position:absolute;right:8px;bottom:10px;border:none;background-color:none;& img{height:15px;}& img:hover{cursor:pointer;}}"}),L=function({categoryList:e,editYearList:t,categoryListOpen:n,ratingListOpen:o,yearListOpen:l,onClickCateorySort:i,onClickRatingSort:r,onClickYearSort:s,onClickCloseBtn:c,onClickResetBtn:m}){return n||o||l?a.createElement(D,null,a.createElement("div",{className:"modal_grid"},e&&n?e.map((e=>a.createElement("div",{className:"content",onClick:i},a.createElement("div",{className:"contentInner"},a.createElement("div",null,e))))):null,o?["0~1","1~2","2~3","3~4","4~5"].map((e=>a.createElement("div",{className:"content",onClick:r},a.createElement("div",{className:"contentInner"},a.createElement("div",null,e))))):null,l&&t?z(t)?.sort(((e,t)=>t-e))?.map((e=>a.createElement("div",{className:"content",onClick:s},a.createElement("div",{className:"contentInner"},a.createElement("div",null,e))))):null),a.createElement("div",null,a.createElement("button",{className:"closeBtn",onClick:c},a.createElement("img",{src:"https://user-images.githubusercontent.com/79993356/154801650-d6a3e43d-4ba0-4107-a3c2-dfaeca5eb6af.png",alt:"null"})),a.createElement("button",{className:"resetBtn",onClick:m},a.createElement("img",{src:"https://user-images.githubusercontent.com/79993356/154805451-4852137e-f850-49f9-814e-6cfc937494ae.svg",alt:"null",id:n?"cg":o?"rt":l?"yr":null})))):null},j=(0,o.Z)("div",{target:"emthiei1"})({name:"tb5tj",styles:"background-color:#f2f2f2"}),R=(0,o.Z)("div",{target:"emthiei0"})({name:"dof03s",styles:"background-color:#f2f2f2;position:relative;width:1000px;margin:0 auto;padding-top:80px;padding-bottom:100px;font-family:'Noto Sans KR',sans-serif;animation:smoothShow 1s;@keyframes smoothShow{from{position:relative;bottom:-50px;opacity:0;}to{position:relative;bottom:0px;opacity:1;}}.upperContainer{display:flex;flex-direction:row;justify-content:space-between;.title{font-size:20px;}.classify>span{margin-left:20px;color:#0000007b;}.classify>span:hover{cursor:pointer;color:wheat;}}.selectedCgCon{position:absolute;left:0;top:50;color:#00000096;font-size:14px;display:flex;& div{margin-right:15px;padding-bottom:5;border-bottom:1px solid #00000030;}}"}),B=function({mybooks:e,getBookInfo:t,setTrans:n,categoryList:o}){const[l,i]=(0,a.useState)(""),[r,s]=(0,a.useState)(""),[c,m]=(0,a.useState)(""),[d,p]=(0,a.useState)(!1),[u,g]=(0,a.useState)(!1),[f,h]=(0,a.useState)(!1),[x,b]=(0,a.useState)([]),y=(0,a.useCallback)((async e=>{i(e.target.innerText),n(0)}),[i,n]),v=(0,a.useCallback)((async e=>{s(e.target.innerText),n(0)}),[s,n]),E=(0,a.useCallback)((async e=>{m(e.target.innerText),n(0)}),[n,m]),k=(0,a.useCallback)((()=>{p(!0),g(!1),h(!1)}),[p,g,h]),w=(0,a.useCallback)((()=>{g(!0),p(!1),h(!1)}),[p,g,h]),C=(0,a.useCallback)((()=>{h(!0),p(!1),g(!1)}),[p,g,h]),S=(0,a.useCallback)((()=>{h(!1),p(!1),g(!1)}),[p,g,h]),N=(0,a.useCallback)((e=>{"cg"===e.target.id?i(""):"rt"===e.target.id?s(""):"yr"===e.target.id&&m("")}),[i,s,m]);return(0,a.useEffect)((()=>{t(l,r,c)}),[l,t,r,c]),(0,a.useEffect)((()=>{e.length>0&&e.forEach((e=>{x.includes(new Date(e.editDate).getFullYear())||b((t=>[new Date(e.editDate).getFullYear(),...t]))}))}),[x,e]),a.createElement(j,null,a.createElement(R,null,a.createElement("div",{className:"upperContainer"},a.createElement("div",{className:"title"},"My books"),a.createElement("div",{className:"classify"},a.createElement("span",{onClick:k},"Category"),a.createElement("span",{onClick:w},"Rating"),a.createElement("span",{onClick:C},"Year"))),a.createElement("div",{className:"selectedCgCon"},""!==l?a.createElement("div",null,a.createElement("span",null,l)):null,""!==r?a.createElement("div",null,a.createElement("span",null,r)):null,""!==c?a.createElement("div",null,a.createElement("span",null,c)):null),a.createElement(L,{categoryList:o,editYearList:x,onClickCloseBtn:S,onClickResetBtn:N,categoryListOpen:d,ratingListOpen:u,yearListOpen:f,onClickCateorySort:y,onClickRatingSort:v,onClickYearSort:E})))},O=n.p+"6ec2f8ac599760c927524e30999f153b.gif",q=function({loading:e,setLoadNum:t}){const[n,o]=(0,a.useState)(0),[p,u]=(0,a.useState)([]),[g,f]=(0,a.useState)([]),h=(0,N.sJ)((0,Z.z)("slider")),x=(0,a.useCallback)((async()=>{if(h){let e=null;w.O.currentUser&&(e=(await(0,C.QT)((0,C.JU)(w.w,"UserEval",w.O.currentUser.uid))).data());const t=e?Object.values(e):[];f(z(t.map((e=>e.categoryId))).map((e=>(0,S.Z)(e))).filter((e=>""!==e)).sort(((e,t)=>e<t?-1:e===t?0:1)))}t((e=>e+1))}),[h,t]),b=(0,a.useCallback)((async(e,t,n)=>{if(h){let a=null;w.O.currentUser&&(a=(await(0,C.QT)((0,C.JU)(w.w,"UserEval",w.O.currentUser.uid))).data());const o=a?Object.values(a):[];u(o.filter((a=>{let o=[!0,!0,!0];if(""!==e&&(o[0]=(0,S.Z)(a.categoryId)===e),""!==t){let e=t.match(/(.+)~(.+)/);o[1]=a.rating>=Number(e[1])&&a.rating<=Number(e[2])}return""!==n&&(o[2]=new Date(a.editDate).getFullYear().toString()===n),o.every((e=>!0===e))})))}}),[h]);return(0,a.useEffect)((()=>{h?(b("","",""),x()):t((e=>e+1))}),[b,x,h,t]),e?null:a.createElement(a.Fragment,null,a.createElement(B,{mybooks:p,getBookInfo:b,setTrans:o,categoryList:g}),h?a.createElement(l,null,a.createElement("div",{className:"container"},a.createElement(i,null,a.createElement(r,{"data-trans":n,"data-bookCount":p.length},p?.map((e=>a.createElement(v,{key:e.isbn,title:e.title,coverImg:e.coverLargeUrl,isbn:e.isbn,shortcomment:e.shortComment,rating:e.rating}))))),a.createElement(s,null,a.createElement("button",{className:"Left",onClick:()=>{n>=0||o((e=>e+1e3))}},a.createElement(E.G,{icon:k.A35,style:{color:"#00000030"}})),a.createElement("button",{className:"Right",onClick:()=>{n<=-(p.length-4)/4*1e3||o((e=>e-1e3))}},a.createElement(E.G,{icon:k._tD,style:{color:"#00000030"}}))))):a.createElement("div",{style:{position:"relative"}},a.createElement(c,null,"로그인 하시면 사용 가능합니다"),a.createElement(m,null,a.createElement(d,{src:O,alt:"null"}))))},I=(0,o.Z)("div",{target:"e1qhtc034"})({name:"16l7zhk",styles:"position:relative;background:#e2e6e7;background:radial-gradient(circle, rgba(223, 227, 228, 1) 0%, rgba(227, 231, 232, 1) 100%);z-index:1;width:100%;height:760px;overflow-x:hidden;border:none;display:flex;justify-content:center;.positionDiv{position:relative;width:1000px;height:760px;}"}),T=(0,o.Z)("div",{target:"e1qhtc033"})({name:"dpgn3g",styles:"position:absolute;z-index:-3;width:1665px;height:760px;background:#e2e6e7;background:radial-gradient(circle, rgba(223, 227, 228, 1) 0%, rgba(227, 231, 232, 1) 100%);background-size:cover"}),U=(0,o.Z)("div",{target:"e1qhtc032"})({name:"105nwfj",styles:"position:absolute;z-index:-2;width:1665px;height:760px;background-image:url('https://user-images.githubusercontent.com/79993356/154531958-e0068ede-1ae9-4b44-8522-2676c4b8d3ef.png');background-size:cover"}),V=(0,o.Z)("div",{target:"e1qhtc031"})({name:"15k2yzu",styles:"position:absolute;left:0;bottom:53px;width:320px;font-family:'Roboto',sans-serif;.title{font-size:20px;color:#000000d3;font-weight:bold;}.hello{font-family:'Noto Sans KR',sans-serif;font-size:14px;color:#0000007b;margin:0;margin-bottom:8px;}.guide{font-family:'Noto Sans KR',sans-serif;font-size:14px;color:#0000007b;line-height:36px;margin:0;}"}),_=(0,o.Z)("div",{target:"e1qhtc030"})("position:absolute;right:0;bottom:40px;height:15%;font-family:'Noto Sans KR',sans-serif;display:grid;grid-template-columns:150px 120px;grid-template-rows:",100/3,"% ",100/3,"% ",100/3,"%;.title{font-size:16px;font-family:'Roboto',sans-serif;font-weight:800;color:#0000007b;}.info{font-size:14px;color:#3e4756;text-align:right;}");var F=n(3645),K=n(6974);const G=(0,o.Z)("div",{target:"e1oynh9m2"})({name:"1vf5062",styles:"position:absolute;top:110px;right:0;left:0;display:flex;flex-direction:row;justify-content:space-between;font-family:'Roboto',sans-serif;& a{text-decoration:none;}"}),M=(0,o.Z)("div",{target:"e1oynh9m1"})({name:"13t89z8",styles:"display:flex;flex-direction:row;& a{margin:auto 0;color:#050505d3;font-size:20px;}& a:hover{color:#aca7cb;}"}),$=(0,o.Z)("div",{target:"e1oynh9m0"})({name:"5ii97q",styles:"color:#050505d3;display:flex;flex-direction:row;& div{display:flex;flex-direction:column;justify-content:center;}& p{font-size:15px;}& input{background:none;height:24px;width:130px;margin:0px 5px 8px 20px;border:none;border-bottom:1px solid black;font-size:13px;text-align:center;}& input:focus{outline:none;}.searchBtn{background:none;margin:0 20px 5px 0;border:none;cursor:pointer;}.auth{& p:hover{cursor:pointer;color:#aca7cb;}}"}),P=function({setShowLoginModal:e}){const[t,,n]=(0,F.Z)(""),[o,l]=(0,N.FV)((0,Z.z)("header"));let i=(0,K.s0)();const r=(0,a.useCallback)((e=>{if("Enter"===e.key)return i(`/search/${t}/4`)}),[i,t]),s=(0,a.useCallback)((()=>{e(!0)}),[e]),c=(0,a.useCallback)((()=>i(`/search/${t}/4`)),[i,t]);return a.createElement(G,null,a.createElement(M,null,a.createElement(p.rU,{to:"/"},"Book Comment")),a.createElement($,null,a.createElement("div",null,a.createElement("input",{type:"text",placeholder:"Search",value:t,onChange:n,onKeyDown:r})),a.createElement("div",null,a.createElement("span",null,a.createElement("button",{className:"searchBtn"},a.createElement(E.G,{icon:k.wn1,style:{color:"grey",fontSize:"15px"},onClick:c})))),a.createElement("div",{className:"auth"},o?a.createElement("p",{onClick:()=>{l(!1),w.O.signOut(),alert("로그아웃 되셨습니다!")}},"Logout"):a.createElement("p",{onClick:s},"Login"))))},Y=function({loading:e,setLoadNum:t,setShowLoginModal:n}){const[o,l]=(0,a.useState)(0),[i,r]=(0,a.useState)("No book"),[s,c]=(0,a.useState)("No category"),m=(0,N.sJ)((0,Z.z)("myinfo")),[d,p]=(0,a.useState)(!0),u=(0,a.useCallback)((async()=>{const e=(await(0,C.QT)((0,C.JU)(w.w,"UserEval",w.O.currentUser.uid))).data();if(e){const t=Object.entries(e);t.sort(((e,t)=>t[1].rating-e[1].rating));const n={};t?.forEach((e=>{""!==(0,S.Z)(e[1].categoryId)&&(n[e[1].categoryId]?n[e[1].categoryId]+=1:n[e[1].categoryId]=1)})),r(t[0][1].title),l(t.length),c((0,S.Z)(Number(Object.entries(n).sort(((e,t)=>t[1]-e[1]))[0][0]))),p(!1)}d||t((e=>e+1))}),[d,t]);return(0,a.useEffect)((()=>{m?u():(l(0),r("No book"),c("No category"),t((e=>e+1)))}),[u,m,t]),e?null:a.createElement(a.Fragment,null,a.createElement(I,null,a.createElement(T,null),a.createElement(U,null),a.createElement("div",{className:"positionDiv"},a.createElement(P,{setShowLoginModal:n}),a.createElement(V,null,a.createElement("p",{className:"title",style:{}},"How to use"),a.createElement("p",{className:"hello"},"오늘도 Book Comment를 찾아주셔서 감사합니다."),a.createElement("p",{className:"guide"},"원하시는 책을 검색해 후기를 달아보세요. 내가 읽었던 책들도 보여준답니다. 책을 검색해보세요!")),a.createElement(_,null,a.createElement("div",{className:"title"},"Read"),a.createElement("div",{className:"info"},o,"개 읽으셨습니다"),a.createElement("div",{className:"title"},"Best Book"),a.createElement("div",{className:"info"},i),a.createElement("div",{className:"title"},"Best Category"),a.createElement("div",{className:"info"},s)))))},J=(0,o.Z)("div",{target:"enqpqdo4"})({name:"156e5tv",styles:"position:relative;font-family:'Roboto',serif;height:150px;width:1000px;margin:50px auto 150px auto;padding-bottom:200px"}),A=(0,o.Z)("div",{target:"enqpqdo3"})({name:"15ghe24",styles:"position:absolute;right:0;width:450px"}),H=(0,o.Z)("div",{target:"enqpqdo2"})({name:"t5oh59",styles:"margin:15px 0;& p{font-size:14px;color:grey;margin:0;text-align:right;}"}),Q=(0,o.Z)("div",{target:"enqpqdo1"})({name:"x91fgi",styles:"display:flex;justify-content:flex-end;.mysns_container{}& a{font-size:14px;color:grey;margin-left:50px;text-decoration:none;}"}),X=(0,o.Z)("div",{target:"enqpqdo0"})({name:"7k8ndt",styles:"margin:15px 0;& p{font-size:14px;color:#3e4756;margin:0;text-align:right;}"}),W=function({loading:e}){return e?null:a.createElement(J,null,a.createElement(A,null,a.createElement(H,null,a.createElement("p",null,"All designs and animations were made by the author himself."),a.createElement("p",null,"So unauthorized distribution is prohibited.")),a.createElement(Q,null,a.createElement("div",{className:"mysns_container"},a.createElement("a",{href:"https://github.com/keinn51",target:"_blank",rel:"noreferrer"},"GitHub"),a.createElement("a",{href:"https://basemenks.tistory.com/",target:"_blank",rel:"noreferrer"},"Blog"),a.createElement("a",{href:"https://www.instagram.com/keinn51/",target:"_blank",rel:"noreferrer"},"Insta"),a.createElement("a",{href:"https://www.facebook.com/sooks447/",target:"_blank",rel:"noreferrer"},"FaceBook"))),a.createElement(X,null,a.createElement("p",null,"@ 2022 BookComment from Kyungsle"))))};var ee=n(1236);const te=(0,o.Z)("div",{target:"e1k2ogam3"})({name:"1ks2xz5",styles:"position:fixed;top:0;left:0;right:0;bottom:0;z-index:10;font-family:'Roboto',sans-serif;background-color:rgba(0, 0, 0, 0.4)"}),ne=(0,o.Z)("div",{target:"e1k2ogam2"})({name:"uo0s8l",styles:"position:absolute;top:20%;left:34%;background-color:white;height:400px;width:500px;border:3px solid #979a9a;.inner{padding:0 80px;margin-top:60px;}.error{color:#ff0000c7;margin:0;margin-left:96px;margin-top:30px;}"}),ae=(0,o.Z)("div",{target:"e1k2ogam1"})({name:"1dl1w6z",styles:"position:relative;display:flex;justify-content:right;margin-right:23px;margin-top:20px;& input{height:25px;width:60px;border:none;}& input:hover{cursor:pointer;}"}),oe=(0,o.Z)("div",{target:"e1k2ogam0"})({name:"pld86h",styles:"margin:30px 0 0 97px;.signup{margin-left:10px;color:#2980b9;}"}),le=(0,o.Z)("div",{target:"ef6gsv30"})({name:"54s2q5",styles:"& div{height:30px;}& div:nth-child(2){margin-top:15px;}& input{width:200px;text-align:center;}& input:focus{outline:none;}.email{border:none;border-bottom:1px solid;}.inputTag{width:100px;display:inline-block;text-align:center;}.password{border:none;border-bottom:1px solid;}"}),ie=function({email:e,password:t,onChange:n}){return a.createElement(le,null,a.createElement("div",null,a.createElement("div",{className:"inputTag"},"Email"),a.createElement("input",{className:"email",name:"email",type:"text",required:!0,value:e,onChange:n})),a.createElement("div",null,a.createElement("div",{className:"inputTag"},"Password"),a.createElement("input",{className:"password",name:"password",type:"password",required:!0,value:t,onChange:n})))},re=(0,o.Z)("div",{target:"e62wvkq0"})({name:"nozctb",styles:"width:350px;margin:30px 0 0 67px;padding:0 30px;& img{height:20px;width:20px;margin:0 10px 3px 0;}.innerSocial{display:flex;justify-content:space-around;margin-top:30px;& img:hover{cursor:pointer;}}.forflex{display:flex;}#google,#github{display:flex;flex-direction:column;justify-content:center;}#google:hover,#github:hover{& div{cursor:pointer;}}"}),se=function({onSocialClick:e}){return a.createElement(re,null,a.createElement("div",null,"or Social Login"),a.createElement("div",{className:"innerSocial"},a.createElement("div",{className:"forflex"},a.createElement("div",null,a.createElement("img",{src:"https://user-images.githubusercontent.com/79993356/154572455-82bfef3f-431c-43ec-b2b8-136e4a287517.png",alt:"null"})),a.createElement("div",{id:"google",onClick:e},a.createElement("div",null,"Google"))),a.createElement("div",{className:"forflex"},a.createElement("div",null,a.createElement("img",{src:"https://user-images.githubusercontent.com/79993356/154572449-3850b95d-9b30-4ac5-a894-743c9d3d77f8.png",alt:"null"})),a.createElement("div",{id:"github",onClick:e},a.createElement("div",null,"Github")))))},ce=({setShowLoginModal:e,showLoginModal:t})=>{const[n,o]=(0,a.useState)(""),[l,i]=(0,a.useState)(""),[r,s]=(0,a.useState)(!1),[c,m]=(0,a.useState)(""),d=(0,N.Zl)((0,Z.z)("auth")),p=(0,a.useCallback)((()=>{e(!1)}),[e]),u=(0,a.useCallback)((e=>{e.stopPropagation()}),[]);return t?a.createElement(te,{onClick:p},a.createElement(ne,{onClick:u},a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{r?await(0,ee.Xb)(w.O,n,l):await(0,ee.e5)(w.O,n,l),d(!0),e(!1)}catch(e){m(e.code)}}},a.createElement("div",{className:"inner"},a.createElement(ie,{email:n,password:l,onChange:e=>{const{target:{name:t,value:n}}=e;"email"===t?o(n):"password"===t&&i(n)}}),a.createElement(ae,null,a.createElement("div",null,a.createElement("input",{type:"submit",value:r?"Sign up":"Log In"})))),a.createElement("p",{className:"error"},c)),a.createElement(oe,null,r?null:a.createElement(a.Fragment,null,a.createElement("span",null,"If you have no email?"),a.createElement("span",{onClick:()=>s((e=>!e)),className:"signup"},"Sing up"))),a.createElement(se,{onSocialClick:async t=>{const n=t.target.innerText;let a;"Google"===n?a=new ee.hJ:"Github"===n&&(a=new ee.GH),await(0,ee.rh)(w.O,a),d(!0),e(!1)}}))):null};var me=n(9404);const de=(0,o.Z)("div",{target:"enf44tv2"})({name:"1m2sri8",styles:"height:500px;display:flex;justify-content:center;align-content:center;font-family:'Roboto',sans-serif"}),pe=(0,o.Z)("div",{target:"enf44tv1"})({name:"13j9gq2",styles:"height:500px;width:800px;display:flex;flex-direction:column;justify-content:center;.search{font-size:22px;font-weight:bold;text-align:center;margin-bottom:80px;}"}),ue=(0,o.Z)("div",{target:"enf44tv0"})({name:"ez1wx7",styles:"color:#050505d3;display:flex;flex-direction:row;justify-content:center;& div{display:flex;flex-direction:column;justify-content:center;}& input{background:none;height:40px;width:400px;margin-left:43px;border:none;border-bottom:1px solid black;font-size:15px;text-align:center;}& input:focus{outline:none;}.searchBtn{background:none;margin-top:15px;margin-left:8;border:none;cursor:pointer;}"}),ge=function(){const[e,,t]=(0,F.Z)("");let n=(0,K.s0)();const o=(0,a.useCallback)((t=>{if("Enter"===t.key)return n(`/search/${e}/4`)}),[n,e]),l=(0,a.useCallback)((()=>n(`/search/${e}/4`)),[n,e]);return a.createElement(de,null,a.createElement(pe,null,a.createElement("div",{className:"search"},a.createElement("span",null,"Search Book")),a.createElement(ue,null,a.createElement("div",null,a.createElement("input",{type:"text",placeholder:"Free search book you want!",value:e,onChange:t,onKeyDown:o,autoComplete:!0})),a.createElement("div",null,a.createElement("span",null,a.createElement("button",{className:"searchBtn"},a.createElement(E.G,{icon:k.wn1,style:{color:"grey",fontSize:"20px"},onClick:l})))))))},fe=function(){const[e,t]=(0,a.useState)(0),[n,o]=(0,a.useState)(!0),[l,i]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{2===e&&o(!1)}),[e]),a.createElement("div",null,l?a.createElement(ce,{showLoginModal:l,setShowLoginModal:i}):null,a.createElement(me.Z,{loading:n}),a.createElement(Y,{loading:n,setLoadNum:t,setShowLoginModal:i}),a.createElement(ge,null),a.createElement(q,{loading:n,setLoadNum:t}),a.createElement(W,{loading:n}))}},9183:(e,t,n)=>{n.d(t,{Z:()=>o});const a={100:"국내도서",101:"국내도서>소설",102:"국내도서>시/에세이",103:"국내도서>예술/대중문화",104:"국내도서>사회과학",105:"국내도서>역사와 문화",107:"국내도서>잡지",108:"국내도서>만화",109:"국내도서>유아",110:"국내도서>아동",111:"국내도서>가정과 생활",112:"국내도서>청소년",113:"국내도서>초등학습서",114:"국내도서>고등학습서",115:"국내도서>국어/외국어/사전",116:"국내도서>자연과 과학",117:"국내도서>경제경영",118:"국내도서>자기계발",119:"국내도서>인문",120:"국내도서>종교/역학",122:"국내도서>컴퓨터/인터넷",123:"국내도서>자격서/수험서",124:"국내도서>취미/레저",125:"국내도서>전공도서/대학교재",126:"국내도서>건강/뷰티",128:"국내도서>여행",129:"국내도서>중등학습서",200:"외국도서",201:"외국도서>어린이",203:"외국도서>ELT/사전",205:"외국도서>문학",206:"외국도서>경영/인문",207:"외국도서>예술/디자인",208:"외국도서>실용",209:"외국도서>해외잡지",210:"외국도서>대학교재/전문서적",211:"외국도서>컴퓨터",214:"외국도서>일본도서",215:"외국도서>프랑스도서",216:"외국도서>중국도서",217:"외국도서>해외주문원서",300:"음반>",301:"음반>가요",302:"음반>Pop",303:"음반>Rock",304:"음반>일본음악",305:"음반>World Music",306:"음반>Jazz",307:"음반>클래식",308:"음반>국악",309:"음반>뉴에이지/명상",310:"음반>O.S.T",311:"음반>종교음악",312:"음반>유아/아동/태교",313:"음반>수입음반",314:"음반>액세서리/관련상품",315:"음반>뮤직 DVD",319:"음반>해외구매",320:"음반>LP",400:"DVD>",409:"DVD>애니메이션",411:"DVD>다큐멘터리",412:"DVD>TV시리즈",417:"DVD>건강/취미/스포츠",425:"DVD>영화",426:"DVD>해외구매",427:"DVD>기타",428:"DVD>블루레이",429:"DVD>유아동/교육DVD",430:"DVD>EBS 교육용"},o=function(e){let t=a[e]?a[e].match(/(.+)>(.+)/):[];return t.length>2?t[2]:""}},7784:(e,t,n)=>{n.d(t,{O:()=>r,w:()=>s});var a=n(5503),o=n(1236),l=n(1591);const i=(0,a.ZF)({apiKey:"AIzaSyDl3PNP0Paj7ngS7cDdl72bOc9F7mznc4k",authDomain:"bookcomment-857df.firebaseapp.com",databaseURL:"bookcomment-857df-default-rtdb",projectId:"bookcomment-857df",storageBucket:"bookcomment-857df.appspot.com",messagingSenderId:"975887228518",appId:"1:975887228518:web:ad15d471090fc6eefcd7a7"}),r=(0,o.v0)(i),s=(0,l.ad)()}}]);