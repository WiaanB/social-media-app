(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{222:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(81),r=n.n(a),o=n(4),s=n(0),c=n(42),i=n(20),l=n(251),u=(n(221),n(222),n(17)),j=n(43),d=n(199),b={user:null};if(localStorage.getItem("jwtToken")){var m=Object(d.a)(localStorage.getItem("jwtToken"));1e3*m.exp<Date.now()?localStorage.removeItem("jwtToken"):b.user=m}var O=Object(s.createContext)({user:null,login:function(e){},logout:function(){}});function h(e,t){switch(t.type){case"LOGIN":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(j.a)(Object(j.a)({},e),{},{user:null});default:return e}}function p(e){var t=Object(s.useReducer)(h,b),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(o.jsx)(O.Provider,Object(j.a)({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),r({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),r({type:"LOGOUT"})}}},e))}var x=n(200);var g=function(e){var t=e.component,n=Object(x.a)(e,["component"]),a=Object(s.useContext)(O).user;return Object(o.jsx)(i.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return a?Object(o.jsx)(i.a,{to:"/"}):Object(o.jsx)(t,Object(j.a)({},e))}}))},f=n(254);var v=function(){var e=Object(s.useContext)(O),t=e.user,n=e.logout,a=window.location.pathname,r="/"===a?"home":a.substr(1),i=Object(s.useState)(r),l=Object(u.a)(i,2),j=l[0],d=l[1],b=function(e,t){var n=t.name;return d(n)};return t?Object(o.jsxs)(f.a,{pointing:!0,secondary:!0,size:"massive",color:"teal",children:[Object(o.jsx)(f.a.Item,{name:t.username,active:!0,as:c.b,to:"/"}),Object(o.jsx)(f.a.Menu,{position:"right",children:Object(o.jsx)(f.a.Item,{name:"logout",onClick:n})})]}):Object(o.jsxs)(f.a,{pointing:!0,secondary:!0,size:"massive",color:"teal",children:[Object(o.jsx)(f.a.Item,{name:"home",active:"home"===j,onClick:b,as:c.b,to:"/"}),Object(o.jsxs)(f.a.Menu,{position:"right",children:[Object(o.jsx)(f.a.Item,{name:"login",active:"login"===j,onClick:b,as:c.b,to:"/login"}),Object(o.jsx)(f.a.Item,{name:"register",active:"register"===j,onClick:b,as:c.b,to:"/register"})]})]})},y=n(19),C=n(260),w=n(255),I=n(257),k=n(205),S=n(252),P=n(258),$=n(111),A=n(155),N=n(118),M=n.n(N),D=n(30),T=n(18),Q=n.n(T);function E(){var e=Object(D.a)(["\n    mutation likePost($postId: ID!) {\n        likePost(postId: $postId) {\n            id\n            likes {\n                id username\n            }\n            likeCount\n        }\n    }\n"]);return E=function(){return e},e}var L=Q()(E()),R=function(e){var t=e.user,n=e.post,a=n.id,r=n.likes,i=n.likeCount,l=Object(s.useState)(!1),j=Object(u.a)(l,2),d=j[0],b=j[1];Object(s.useEffect)((function(){t&&r.find((function(e){return e.username&&t.username}))?b(!0):b(!1)}),[t,r]);var m=Object(y.useMutation)(L,{variables:{postId:a}}),O=Object(u.a)(m,1)[0],h=t?d?Object(o.jsx)(P.a,{color:"teal",children:Object(o.jsx)($.a,{name:"heart"})}):Object(o.jsx)(P.a,{color:"teal",basic:!0,children:Object(o.jsx)($.a,{name:"heart"})}):Object(o.jsx)(P.a,{as:c.b,to:"/login",color:"teal",basic:!0,children:Object(o.jsx)($.a,{name:"heart"})});return Object(o.jsx)(S.a,{content:d?"i do not like this anymore":"like this shit",inverted:!0,trigger:Object(o.jsxs)(P.a,{as:"div",labelPosition:"right",onClick:t?O:function(){},children:[h,Object(o.jsx)(A.a,{basic:!0,color:"teal",pointing:"left",children:i})]})})},G=n(256);function q(){var e=Object(D.a)(["\n{\n    getPosts {\n        id body createdAt username likeCount\n        likes {\n            username\n        }\n        commentCount\n        comments {\n            id username createdAt body\n        }\n    }\n}\n"]);return q=function(){return e},e}var z=Q()(q());function B(){var e=Object(D.a)(["\n    mutation deleteComment($postId: ID!, $commentId: ID!){\n        deleteComment(postId: $postId, commentId: $commentId) {\n            id\n            comments {\n                id username createdAt body\n            }\n            commentCount\n        }\n    }\n"]);return B=function(){return e},e}function H(){var e=Object(D.a)(["\n    mutation deletePost($postId: ID!){\n        deletePost(postId: $postId)\n    }\n"]);return H=function(){return e},e}var F=Q()(H()),J=Q()(B()),U=function(e){var t=e.postId,n=e.callback,a=e.commentId,r=Object(y.useApolloClient)(),c=Object(s.useState)(!1),i=Object(u.a)(c,2),l=i[0],j=i[1],d=a?J:F,b=Object(y.useMutation)(d,{update:function(){if(j(!1),!a){var e=r.readQuery({query:z});r.writeQuery({query:z,data:{getPosts:e.getPosts.filter((function(e){return e.id!==t}))}})}n&&n()},variables:{postId:t,commentId:a}}),m=Object(u.a)(b,1)[0];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(S.a,{content:a?"delete comment":"delete post",inverted:!0,trigger:Object(o.jsx)(P.a,{as:"div",color:"red",onClick:function(){return j(!0)},floated:"right",children:Object(o.jsx)($.a,{name:"trash",style:{margin:0}})})}),Object(o.jsx)(G.a,{open:l,onCancel:function(){return j(!1)},onConfirm:m})]})};var V=function(e){var t=e.post,n=t.username,a=t.body,r=t.createdAt,i=t.id,l=t.likeCount,u=t.commentCount,j=t.likes,d=Object(s.useContext)(O).user;return Object(o.jsxs)(I.a,{fluid:!0,children:[Object(o.jsxs)(I.a.Content,{children:[Object(o.jsx)(k.a,{floated:"right",size:"mini",src:"https://www.flaticon.com/svg/static/icons/svg/565/565431.svg"}),Object(o.jsx)(I.a.Header,{children:n}),Object(o.jsx)(I.a.Meta,{as:c.b,to:"/posts/".concat(i),children:M()(r).fromNow()}),Object(o.jsx)(I.a.Description,{children:a})]}),Object(o.jsxs)(I.a.Content,{extra:!0,children:[Object(o.jsx)(R,{user:d,post:{id:i,likes:j,likeCount:l}}),Object(o.jsx)(S.a,{content:"comment on post",inverted:!0,trigger:Object(o.jsxs)(P.a,{labelPosition:"right",as:c.b,to:"/posts/".concat(i),children:[Object(o.jsx)(P.a,{color:"blue",basic:!0,children:Object(o.jsx)($.a,{name:"comments"})}),Object(o.jsx)(A.a,{basic:!0,color:"blue",pointing:"left",children:u})]})}),d&&d.username===n&&Object(o.jsx)(U,{postId:i})]})]})},K=n(206),W=n(253),X=n(130),Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(s.useState)(t),a=Object(u.a)(n,2),r=a[0],o=a[1],c=function(e){o(Object(j.a)(Object(j.a)({},r),{},Object(X.a)({},e.target.name,e.target.value)))},i=function(t){t.preventDefault(),e()};return{onChange:c,onSubmit:i,values:r}};function Z(){var e=Object(D.a)(["\n    mutation createPost($body: String!) {\n        createPost(body: $body) {\n            id body createdAt username\n            likes {\n                id username createdAt\n            }\n            likeCount\n            comments {\n                id body username createdAt\n            }\n            commentCount\n        }\n    }\n"]);return Z=function(){return e},e}var _=Q()(Z()),ee=function(){var e=Object(y.useApolloClient)(),t=Y((function(){i()}),{body:""}),n=t.values,a=t.onChange,r=t.onSubmit,s=Object(y.useMutation)(_,{variables:n,update:function(t,a){var r=e.readQuery({query:z});e.writeQuery({query:z,data:{getPosts:[a].concat(Object(K.a)(r.getPosts))}}),n.body=""},onError:function(e){}}),c=Object(u.a)(s,2),i=c[0],l=c[1].error;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(W.a,{onSubmit:r,autoComplete:"off",children:[Object(o.jsx)("h2",{children:"create a post:"}),Object(o.jsxs)(W.a.Field,{autoComplete:"off",children:[Object(o.jsx)(W.a.Input,{placeholder:"what is on your mind???",name:"body",onChange:a,value:n.body,error:!!l}),Object(o.jsx)(P.a,{type:"submit",color:"teal",disabled:""===n.body.trim(),children:"post"})]})]}),l&&Object(o.jsx)("div",{className:"ui error message",style:{marginBottom:20},children:Object(o.jsx)("ul",{className:"list",children:Object(o.jsx)("li",{children:l.graphQLErrors[0].message})})})]})};var te=function(){var e=Object(y.useQuery)(z),t=e.loading,n=e.data,a=Object(s.useContext)(O).user;return Object(o.jsxs)(C.a,{columns:3,children:[Object(o.jsx)(C.a.Row,{className:"page-title",children:Object(o.jsx)("h1",{className:"recent",children:"Recent Posts"})}),Object(o.jsxs)(C.a.Row,{children:[a&&Object(o.jsx)(C.a.Column,{children:Object(o.jsx)(ee,{})}),t?Object(o.jsx)("h1",{children:"loading posts..."}):Object(o.jsx)(w.a.Group,{children:n.getPosts&&n.getPosts.map((function(e){return Object(o.jsx)(C.a.Column,{style:{marginBottom:20},children:Object(o.jsx)(V,{post:e})},e.id)}))})]})]})};function ne(){var e=Object(D.a)(["\n    # Giving the variables into the mutation\n    mutation register(\n        $username: String!\n        $password: String!\n    ) {\n        # The actual mutation with the variables provided\n        login(\n            username: $username\n            password: $password\n        ){\n            # Response\n            id email username createdAt token\n        }\n    }\n"]);return ne=function(){return e},e}var ae=Q()(ne()),re=function(e){var t=Object(s.useContext)(O),n=Object(s.useState)({}),a=Object(u.a)(n,2),r=a[0],c=a[1],i=Y((function(){h()}),{username:"",password:""}),l=i.onChange,j=i.onSubmit,d=i.values,b=Object(y.useMutation)(ae,{update:function(n,a){var r=a.data.login;t.login(r),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),m=Object(u.a)(b,2),h=m[0],p=m[1].loading;return Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsxs)(W.a,{onSubmit:j,noValidate:!0,className:p?"loading":"",children:[Object(o.jsx)("h1",{children:"login"}),Object(o.jsx)(W.a.Input,{label:"username",type:"text",placeholder:"wait... who are you?",name:"username",value:d.username,error:!!r.username,onChange:l}),Object(o.jsx)(W.a.Input,{label:"password",type:"password",placeholder:"you should know this one",name:"password",value:d.password,error:!!r.password,onChange:l}),Object(o.jsx)(P.a,{type:"submit",primary:!0,children:"login"})]}),Object.keys(r).length>0&&Object(o.jsx)("div",{className:"ui error message",children:Object(o.jsx)("ul",{className:"list",children:Object.values(r).map((function(e){return Object(o.jsx)("li",{children:e},e)}))})})]})};function oe(){var e=Object(D.a)(["\n    # Giving the variables into the mutation\n    mutation register(\n        $username: String!\n        $email: String!\n        $password: String!\n        $confirmPassword: String!\n    ) {\n        # The actual mutation with the variables provided\n        register(\n            registerInput: {\n                username: $username\n                email: $email\n                password: $password\n                confirmPassword: $confirmPassword\n            }\n        ){\n            # Response\n            id email username createdAt token\n        }\n    }\n"]);return oe=function(){return e},e}var se=Q()(oe()),ce=function(e){var t=Object(s.useContext)(O),n=Object(s.useState)({}),a=Object(u.a)(n,2),r=a[0],c=a[1],i=Y((function(){h()}),{username:"",email:"",password:"",confirmPassword:""}),l=i.onChange,j=i.onSubmit,d=i.values,b=Object(y.useMutation)(se,{update:function(n,a){var r=a.data.register;t.login(r),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),m=Object(u.a)(b,2),h=m[0],p=m[1].loading;return Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsxs)(W.a,{onSubmit:j,noValidate:!0,className:p?"loading":"",children:[Object(o.jsx)("h1",{children:"register"}),Object(o.jsx)(W.a.Input,{label:"username",type:"text",placeholder:"make it cool",name:"username",value:d.username,error:!!r.username,onChange:l}),Object(o.jsx)(W.a.Input,{label:"email",type:"email",placeholder:"gimme that info",name:"email",value:d.email,error:!!r.email,onChange:l}),Object(o.jsx)(W.a.Input,{label:"password",type:"password",placeholder:"make it secure",name:"password",value:d.password,error:!!r.password,onChange:l}),Object(o.jsx)(W.a.Input,{label:"confirm your password",type:"password",placeholder:"make it the same",name:"confirmPassword",error:!!r.confirmPassword,value:d.confirmPassword,onChange:l}),Object(o.jsx)(P.a,{type:"submit",primary:!0,children:"register"})]}),Object.keys(r).length>0&&Object(o.jsx)("div",{className:"ui error message",children:Object(o.jsx)("ul",{className:"list",children:Object.values(r).map((function(e){return Object(o.jsx)("li",{children:e},e)}))})})]})};function ie(){var e=Object(D.a)(["\n    mutation($postId: String!, $body: String!){\n        createComment(postId: $postId, body: $body){\n            id\n            comments { id body createdAt username }\n            commentCount\n        }\n    }\n"]);return ie=function(){return e},e}function le(){var e=Object(D.a)(["\n    query($postId: ID!) {\n        getPost(postId: $postId) {\n            id\n            body\n            createdAt\n            username\n            likeCount\n            likes {\n                username\n            }\n            commentCount\n            comments {\n                id username createdAt body\n            }\n        }\n    }\n"]);return le=function(){return e},e}var ue=Q()(le()),je=Q()(ie()),de=function(e){var t,n=e.match.params.postId,a=Object(s.useContext)(O).user,r=Object(s.useRef)(null),c=Object(y.useQuery)(ue,{variables:{postId:n}}),i=c.loading,l=c.data,j=Object(s.useState)(""),d=Object(u.a)(j,2),b=d[0],m=d[1],h=Object(y.useMutation)(je,{update:function(){m(""),r.current.blur()},variables:{postId:n,body:b}}),p=Object(u.a)(h,1)[0];if(i&&(t=Object(o.jsx)("p",{children:"loading..."})),l){var x=l.getPost,g=x.id,f=x.body,v=x.createdAt,w=x.username,S=x.comments,N=x.likes,D=x.likeCount,T=x.commentCount;t=Object(o.jsx)(C.a,{children:Object(o.jsxs)(C.a.Row,{children:[Object(o.jsx)(C.a.Column,{width:2,children:Object(o.jsx)(k.a,{src:"https://www.flaticon.com/svg/static/icons/svg/565/565431.svg",size:"small",float:"right"})}),Object(o.jsxs)(C.a.Column,{width:10,children:[Object(o.jsxs)(I.a,{fluid:!0,style:{padding:20},children:[Object(o.jsx)(I.a.Header,{children:w}),Object(o.jsx)(I.a.Meta,{children:M()(v).fromNow()}),Object(o.jsx)(I.a.Description,{children:f}),Object(o.jsx)("hr",{}),Object(o.jsxs)(I.a.Content,{extra:!0,children:[Object(o.jsx)(R,{user:a,post:{id:g,likeCount:D,likes:N}}),Object(o.jsxs)(P.a,{as:"div",labelPosition:"right",onClick:function(){return console.log("Comment ",a)},children:[Object(o.jsx)(P.a,{basic:!0,color:"blue",children:Object(o.jsx)($.a,{name:"comments"})}),Object(o.jsx)(A.a,{basic:!0,color:"blue",pointing:"left",children:T})]}),a&&a.username===w&&Object(o.jsx)(U,{postId:g,callback:function(){e.history.push("/")}})]})]}),a&&Object(o.jsx)(I.a,{fluid:!0,children:Object(o.jsxs)(I.a.Content,{children:[Object(o.jsx)("p",{children:"comment here"}),Object(o.jsx)(W.a,{children:Object(o.jsxs)("div",{className:"ui action input fluid",children:[Object(o.jsx)("input",{type:"text",autoComplete:"off",placeholder:"what is on your mind???",name:"comment",value:b,onChange:function(e){return m(e.target.value)},ref:r}),Object(o.jsx)("button",{type:"submit",className:"ui button teal",disabled:""===b.trim(),onClick:p,children:"post it"})]})})]})}),S.map((function(e){return Object(o.jsx)(I.a,{fluid:!0,children:Object(o.jsxs)(I.a.Content,{children:[a&&a.username===e.username&&Object(o.jsx)(U,{postId:g,commentId:e.id}),Object(o.jsx)(I.a.Header,{children:e.username}),Object(o.jsx)(I.a.Meta,{children:M()(e.createdAt).fromNow()}),Object(o.jsx)(I.a.Description,{children:e.body})]})},e.id)}))]})]})})}return t};var be=function(){return Object(o.jsx)(p,{children:Object(o.jsx)(c.a,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(v,{}),Object(o.jsx)(i.b,{exact:!0,path:"/",component:te}),Object(o.jsx)(g,{exact:!0,path:"/login",component:re}),Object(o.jsx)(g,{exact:!0,path:"/register",component:ce}),Object(o.jsx)(i.b,{exact:!0,path:"/posts/:postId",component:de})]})})})},me=n(207),Oe=Object(y.createHttpLink)({uri:"http://localhost:5000/graphql"}),he=Object(me.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),pe=new y.ApolloClient({link:he.concat(Oe),cache:new y.InMemoryCache}),xe=Object(o.jsx)(y.ApolloProvider,{client:pe,children:Object(o.jsx)(be,{})});r.a.render(xe,document.getElementById("root"))}},[[234,1,2]]]);
//# sourceMappingURL=main.e5c5e350.chunk.js.map