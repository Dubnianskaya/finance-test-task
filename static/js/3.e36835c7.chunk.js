(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"RegisterPage",(function(){return m}));var i=t(25),a=t(106),r=t.n(a),c=t(12),o=t(23),b=t(272),l=t(75),s=t(1);function m(){var e=Object(i.b)(),n=Object(c.h)();return Object(s.jsx)(l.a,{children:Object(s.jsx)(b.a,{onFormSubmit:function(t){e(o.a.register(t)).unwrap().then((function(){n("/login")})).catch((function(e){if(e)return r.a.error("Mail already in use")}))},title:"REGISTER",buttonText:"Register"})})}},272:function(e,n,t){"use strict";t.d(n,"a",(function(){return y}));var i,a,r,c=t(269),o=t(295),b=t(261),l=t(91),s=t(11),m=t(296),u=t(8),j=t(13),p=t(442),x=t(18),d=Object(j.a)(c.a)(i||(i=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),h=j.a.h1(a||(a=Object(u.a)(["\n  font-size: 26px;\n  line-height: 26px;\n  margin-bottom: 24px;\n  text-align: center;\n  ","\n"])),Object(x.b)(" font-size: 34px;\n      line-height: 41px;\n      margin-bottom: 32px;")),O=Object(j.a)(p.a)(r||(r=Object(u.a)(["\n  display: block;\n  margin-bottom: 16px;\n  ","\n  label {\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0.04em;\n  }\n  input {\n    width: 280px;\n    ","\n    position: relative;\n    // border-bottom: 1px solid #e0e0e0;\n    padding-bottom: 7px;\n  }\n  p {\n    position: absolute;\n    margin-top: 0;\n    color: #f0000f;\n  }\n"])),Object(x.b)(" \n  margin-bottom: 20px;\n "),Object(x.b)(" \n     width: 320px;\n ")),f=t(1),g=function(e){var n=e.label,t=Object(m.a)(e,["label"]),i=Object(c.c)(t),a=Object(s.a)(i,2),r=a[0],o=a[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(O,Object(l.a)(Object(l.a)(Object(l.a)({id:t.name},r),t),{},{label:n,variant:"standard",color:"primary",helperText:o.touched&&o.error?o.error:null}))})},w=t(60),v=t(32);function y(e){var n=e.onFormSubmit,t=e.title,i=e.buttonText;return Object(f.jsxs)(w.a,{children:[Object(f.jsx)(h,{children:t}),Object(f.jsx)(c.b,{initialValues:{email:"",password:""},validationSchema:o.a({email:o.b().email("Wrong email").required("Email is required").matches(v.b,"email must be like: name@mail.com"),password:o.b().min(6,"Password must be minimum 6 symbols")}),onSubmit:function(e){n(e)},children:function(){return Object(f.jsxs)(d,{children:[Object(f.jsx)(g,{label:"Email",name:"email",type:"text"}),Object(f.jsx)(g,{label:"Password",name:"password",type:"text"}),Object(f.jsx)(b.a,{type:"submit",variant:"contained",size:"large",children:i})]})}})]})}}}]);
//# sourceMappingURL=3.e36835c7.chunk.js.map