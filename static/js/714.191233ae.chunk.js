"use strict";(self.webpackChunkspacex=self.webpackChunkspacex||[]).push([[714],{3931:function(s,e,c){c.d(e,{Z:function(){return a}});c(2791);var i=c(7689),l=c(1087),n=c(5736),r=c.p+"static/media/logout_img.cbd5deaf5cfed7995954.png",o=c(184),a=function(s){var e=(0,i.s0)(),c=localStorage.getItem("user"),a=JSON.parse(c);console.log("loggeduser",a),a||e("/");return(0,o.jsxs)("div",{className:"hcontainer",children:[(0,o.jsx)("div",{className:"hlogo",children:(0,o.jsx)(l.rU,{to:"/home",children:(0,o.jsx)("img",{src:"https://www.spacexwiki.com/static/media/spacex-logo.9250222f.svg",alt:"SpaceX logo",width:"280px"})})}),(0,o.jsxs)("div",{className:"hmenu",children:[(0,o.jsx)(l.rU,{to:"/launches",children:"LAUNCHES"}),(0,o.jsx)(l.rU,{to:"/rockets",children:"ROCKETS"}),(0,o.jsx)(l.rU,{to:"/dragons",children:"DRAGONS"}),a&&"user"==a.role?(0,o.jsx)(n.Z,{variant:"secondary",className:"badge",children:a.role}):(0,o.jsxs)(n.Z,{variant:"warning",children:[" ",a.role]}),(0,o.jsx)("h5",{children:a&&a.user}),(0,o.jsx)(l.rU,{to:"/",onClick:function(){localStorage.removeItem("user")},children:(0,o.jsx)("img",{src:r,alt:"logout img",width:"20px",className:"logout"})})]})]})}},2175:function(s,e,c){c.r(e),c.d(e,{default:function(){return t}});var i=c(2791),l=c(3931),n=c(1243),r=c(9434),o=c(3259),a=c(184),t=function(){var s=(0,r.v9)((function(s){return s.info})),e=(0,r.I0)();return(0,i.useEffect)((function(){n.Z.get("https://api.spacexdata.com/v3/info").then((function(s){e((0,o.C5)(s.data))})).catch((function(s){console.log(s)}))}),[]),(0,a.jsxs)("div",{className:"home",children:[(0,a.jsx)(l.Z,{}),(0,a.jsxs)("div",{className:"homebox",children:[(0,a.jsxs)("div",{className:"about",children:[(0,a.jsx)("h2",{children:"ABOUT SPACEX"}),(0,a.jsx)("p",{children:s.summary})]}),(0,a.jsxs)("div",{className:"cinfo",children:[(0,a.jsx)("h2",{children:"COMPANY INFO"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Founded: ",s.founded]}),(0,a.jsxs)("li",{children:["Employees: ",s.employees]}),(0,a.jsxs)("li",{children:["Launch Sites: ",s.launch_sites]}),(0,a.jsxs)("li",{children:["Test Sites: ",s.test_sites]}),(0,a.jsxs)("li",{children:["Vehicles: ",s.vehicles]})]})]}),(0,a.jsxs)("div",{className:"cleaders",children:[(0,a.jsx)("h2",{children:"COMPANY LEADERSHIP"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["CEO: ",s.ceo]}),(0,a.jsxs)("li",{children:["COO: ",s.coo]}),(0,a.jsxs)("li",{children:["CTO: ",s.cto]}),(0,a.jsxs)("li",{children:["CTO of Propulsion: ",s.cto_propulsion]})]})]})]})]})}}}]);
//# sourceMappingURL=714.191233ae.chunk.js.map