(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"RegisterPage",(function(){return m}));var i=n(25),a=n(106),r=n.n(a),o=n(12),c=n(23),l=n(272),b=n(75),s=n(1);function m(){var e=Object(i.b)(),t=Object(o.h)();return Object(s.jsx)(b.a,{children:Object(s.jsx)(l.a,{"data-testid":"register-page",onFormSubmit:function(n){e(c.a.register(n)).unwrap().then((function(){t("/login")})).catch((function(e){if(e)return r.a.error("Mail already in use")}))},title:"REGISTER",buttonText:"Register"})})}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var i,a,r,o=n(269),c=n(295),l=n(261),b=n(91),s=n(11),m=n(296),u=n(8),j=n(13),p=n(442),d=n(18),x=Object(j.a)(o.a)(i||(i=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),h=j.a.h1(a||(a=Object(u.a)(["\n  font-size: 26px;\n  line-height: 26px;\n  margin-bottom: 24px;\n  text-align: center;\n  ","\n"])),Object(d.b)(" font-size: 34px;\n      line-height: 41px;\n      margin-bottom: 32px;")),O=Object(j.a)(p.a)(r||(r=Object(u.a)(["\n  display: block;\n  margin-bottom: 16px;\n  ","\n  label {\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  }\n  input {\n    width: 280px;\n    ","\n    position: relative;\n    // border-bottom: 1px solid #e0e0e0;\n    padding-bottom: 7px;\n  }\n  p {\n    position: absolute;\n    margin-top: 0;\n    color: #f0000f;\n  }\n"])),Object(d.b)(" \n  margin-bottom: 20px;\n "),Object(d.b)(" \n     width: 320px;\n ")),g=n(1),f=function(e){var t=e.label,n=Object(m.a)(e,["label"]),i=Object(o.c)(n),a=Object(s.a)(i,2),r=a[0],c=a[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(O,Object(b.a)(Object(b.a)(Object(b.a)({id:n.name},r),n),{},{label:t,variant:"standard",color:"primary",helperText:c.touched&&c.error?c.error:null}))})},v=n(60),w=n(32);function y(e){var t=e.onFormSubmit,n=e.title,i=void 0===n?"":n,a=e.buttonText,r=void 0===a?"":a;return Object(g.jsxs)(v.a,{children:[Object(g.jsx)(h,{children:i}),Object(g.jsx)(o.b,{initialValues:{email:"",password:""},validationSchema:c.a({email:c.b().email("Wrong email").required("Email is required").matches(w.b,"email must be like: name@mail.com"),password:c.b().min(6,"Password must be minimum 6 symbols")}),onSubmit:function(e){t(e)},children:Object(g.jsxs)(x,{children:[Object(g.jsx)(f,{label:"Email",name:"email",type:"email"}),Object(g.jsx)(f,{label:"Password",name:"password",type:"text"}),Object(g.jsx)(l.a,{type:"submit",variant:"contained",size:"large",children:r})]})})]})}}}]);
//# sourceMappingURL=3.e6216345.chunk.js.map