(this["webpackJsonpflappy-bird"]=this["webpackJsonpflappy-bird"]||[]).push([[0],{50:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var c=r(7),a=r.n(c),s=r(32),i=r(0);const n=300,o=450,l=new Image;l.src="./images/clouds.png";const d=new Image;d.src="./images/bird.png";const b=new Image;b.src="./images/ground.png";const g=40,j=116;var h=r(74),u=r(72),p=r(76),f=r(73),x=r(75),y=r(6);var w=function(e){return Object(y.jsxs)(h.a,{open:e.showDialog,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(y.jsx)(u.a,{children:Object(y.jsxs)(p.a,{id:"alert-dialog-description",children:["Score: ",e.score," \xa0 Best: ",e.bestScore]})}),Object(y.jsx)(f.a,{children:Object(y.jsx)(x.a,{onClick:()=>window.location.reload(),color:"primary",children:"Restart"})})]})};let m=0,O=120,S=0,I=225,v=n,k=0,R=parseInt(localStorage.getItem("bestScore")||"0");const C=(e,t)=>e.x+e.radius>=t.x&&e.x-e.radius<=t.x+t.width&&e.y+e.radius>=t.y&&e.y-e.radius<=t.y+t.height;let D=!1,E=!1,B=!0;var J=function(){const[e,t]=Object(i.useState)(!1),r=Object(i.useRef)(null),c=()=>{E||(D||(D=!0),S=-200)};return Object(s.a)("keypress",(e=>{E||"Space"===e.code&&(D||(D=!0),c())})),Object(i.useEffect)((()=>{if(r.current){const e=r.current.getContext("2d");e&&setInterval((()=>{((()=>{const e={x:85,y:O+25+5,radius:20},t={x:v,y:I+j,width:g,height:391-(I+j)};return C(e,{x:v,y:0,width:g,height:I})||C(e,t)})()||O+50>391)&&(k>R&&(R=k,localStorage.setItem("bestScore",k.toString())),t(!0),D=!1,E=!0),B&&60>v+g&&(B=!1,k++),(e=>{e.fillStyle="#abfcff",e.fillRect(0,0,n,o),e.drawImage(l,0,0,300,280),e.drawImage(b,m,250,300,200),e.drawImage(b,m+n,250,300,200),e.drawImage(d,60,O,50,50),e.fillStyle="#a6a6a6",e.fillRect(v,0,g,I),e.fillRect(v,I+j,g,391-(I+j))})(e),D&&(v<-40&&(v=n,I=j*Math.random(),B=!0),m<=-300&&(m=0),e.fillStyle="black",e.font="26px Roboto",e.fillText(k.toString(),135,50),v-=2,m-=2,O+=.02*S,S-=-16)}),20)}}),[]),Object(y.jsxs)("div",{onClick:c,onKeyPress:c,children:[Object(y.jsx)("canvas",{ref:r,width:n,height:o}),Object(y.jsx)(w,{showDialog:e,score:k,bestScore:R})]})};var K=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:"Tap, click or space!"}),Object(y.jsx)(J,{})]})};r(50);a.a.render(Object(y.jsx)(K,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.cf51f995.chunk.js.map