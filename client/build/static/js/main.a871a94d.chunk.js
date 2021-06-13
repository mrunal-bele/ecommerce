(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(18),s=r.n(n),a=(r(26),r(4)),i=r(6),d=r(0),l=function(e){var t=e.rating,r=[];if(0===t)r.push("No reviews");else for(var c=1;c<=5;c++)c<=t?r.push(Object(d.jsx)("i",{className:"fas fa-star text-warning"},c)):c!==Math.ceil(t)||Number.isInteger(t)?r.push(Object(d.jsx)("i",{className:"far fa-star text-warning"},c)):r.push(Object(d.jsx)("i",{className:"fas fa-star-half-alt text-warning"},c));return Object(d.jsx)(d.Fragment,{children:r})},o=r(2),j=r(3),u=r.n(j),h=r(8),b=r(9),p=r.n(b),O="PRODUCT_LIST_REQUEST",x="PRODUCT_LIST_SUCCCESS",m="PRODUCT_LIST_FAIL",g="PRODUCT_DETAILS_REQUEST",v="PRODUCT_DETAILS_SUCCCESS",f="PRODUCT_DETAILS_FAIL",y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.productList})),r=t.loading,n=t.error,s=t.products;return Object(c.useEffect)((function(){e(function(){var e=Object(h.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:O}),e.prev=1,e.next=4,p.a.get("/api/products");case 4:r=e.sent,t({type:x,payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:m,payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(d.jsx)("div",{children:r?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"...Loading"}):n?Object(d.jsx)("h1",{children:n}):Object(d.jsx)("div",{className:"row center",children:s.map((function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)(a.b,{to:"/product/".concat(e._id),children:Object(d.jsx)("img",{className:"medium",src:e.image,alt:"product"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)(a.b,{to:"/product/".concat(e._id),children:Object(d.jsx)("h2",{children:e.name})}),Object(d.jsxs)("div",{className:"rating",children:[Object(d.jsx)("span",{children:Object(d.jsx)(l,{rating:e.rating})}),Object(d.jsxs)("p",{children:[e.numReviews," Reviews"]})]}),Object(d.jsxs)("div",{className:"price",children:["$",e.price]})]})]},e._id)}))})})},S=r(17),E=r(7),N=function(e){var t=Object(o.c)((function(e){return e.productDetails})),r=t.product,n=t.error,s=t.loading,j=Object(c.useState)(1),b=Object(E.a)(j,2),O=b[0],x=b[1],m=Object(o.b)(),y=Object(i.e)().id;Object(c.useEffect)((function(){var e;m((e=y,function(){var t=Object(h.a)(u.a.mark((function t(r){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:g}),t.prev=1,t.next=4,p.a.get("/api/products/".concat(e));case 4:c=t.sent,r({type:v,payload:c.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:f,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[m,y]);return Object(d.jsx)(d.Fragment,{children:s?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"...Loading"}):n?Object(d.jsx)("h1",{children:n}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(a.b,{to:"/",children:"Back"}),Object(d.jsxs)("div",{className:"row top",children:[Object(d.jsx)("div",{className:"col-2",children:Object(d.jsx)("img",{className:"large",src:r.image,alt:r.name})}),Object(d.jsx)("div",{className:"col-1",style:{marginLeft:"10px"},children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("h1",{children:r.name})}),Object(d.jsx)("li",{className:"rating",children:Object(d.jsx)("span",{children:Object(d.jsx)(l,{rating:r.rating})})}),Object(d.jsxs)("li",{children:["Price: $",r.price]}),Object(d.jsxs)("li",{children:["Description: ",r.description]})]})}),Object(d.jsx)("div",{className:"col-1",style:{marginRight:"5px"},children:Object(d.jsx)("div",{className:"card card-body",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Price"}),Object(d.jsxs)("div",{className:"price",children:["$",r.price]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Status"}),Object(d.jsx)("div",{className:"price",children:r.countInStock>0?Object(d.jsx)("span",{className:"success",children:"In stock"}):Object(d.jsx)("span",{className:"danger",children:"Out of stock"})})]})}),r.countInStock>0&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Qty"}),Object(d.jsx)("div",{children:Object(d.jsx)("select",{value:O,onChange:function(e){return x(e.target.value)},children:Object(S.a)(Array(r.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){e.history.push("/cart/".concat(y,"?qty=").concat(O))},className:"primary block",children:"Add to Cart"})})]})]})})})]})]})})},I="ADD_CART_ITEM",w="REMOVE_CART_ITEM",R="SHIPPING_ADDRESS",_="CART_EMPTY",C=function(e,t){return function(){var r=Object(h.a)(u.a.mark((function r(c,n){var s;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.get("/api/products/".concat(e));case 2:s=r.sent,c({type:I,payload:{name:s.data.name,image:s.data.image,price:s.data.price,countInStock:s.data.countInStock,product:s.data._id,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},P=function(e){var t=Object(i.e)().id,r=e.location.search?Number(e.location.search.split("=")[1]):1,n=Object(o.b)(),s=Object(o.c)((function(e){return e.cart})).cartItems;Object(c.useEffect)((function(){t&&n(C(t,r))}),[n,t,r]);var l=function(e){n(function(e){return function(){var t=Object(h.a)(u.a.mark((function t(r,c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:w,payload:e}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}(e))};return Object(d.jsxs)("div",{className:"row top",children:[Object(d.jsxs)("div",{className:"col-2",style:{marginRight:"2%"},children:[Object(d.jsx)("h1",{children:"Shopping Cart"}),0===s.length?Object(d.jsxs)("h2",{children:["Cart is Empty. ",Object(d.jsx)(a.b,{to:"/",children:"Go Shopping"})]}):Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.image,alt:e.name,className:"small"})}),Object(d.jsx)("div",{className:"marginright-2",children:Object(d.jsx)(a.b,{to:"/product/".concat(e.product),children:e.name})}),Object(d.jsx)("div",{children:Object(d.jsx)("select",{value:e.qty,onChange:function(t){return n(C(e.product,Number(t.target.value)))},children:Object(S.a)(Array(e.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(d.jsxs)("div",{children:["$",e.price]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return l(e.product)},children:"Delete"})})]})},e.product)}))})]}),Object(d.jsx)("div",{className:"col-1",children:Object(d.jsx)("div",{className:"card card-body",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("h2",{children:["Subtotal (",s.reduce((function(e,t){return e+t.qty}),0)," items) : $",s.reduce((function(e,t){return e+t.qty*t.price}),0)]})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",onClick:function(){e.history.push("/signin?redirect=shipping")},className:"primary block",disabled:0===s.length,children:"Proceed to Checkout"})})]})})})]})},A="SIGN_IN_REQUEST",D="SIGN_IN_SUCCESS",T="SIGN_IN_FAILURE",k="REGISTER_REQUEST",U="REGISTER_SUCCESS",L="REGISTER_FAILURE",F="USER_SIGNOUT",q="DETAILS_REQUEST",$="DETAILS_SUCCESS",G="DETAILS_FAILURE",J="PROFILE_UPDATE_REQUEST",Q="PROFILE_UPDATE_SUCCESS",M="PROFILE_UPDATE_FAILURE",B="PROFILE_UPDATE_RESET",z=function(e){var t=Object(c.useState)(""),r=Object(E.a)(t,2),n=r[0],s=r[1],i=Object(c.useState)(""),l=Object(E.a)(i,2),j=l[0],b=l[1],O=Object(o.b)(),x=e.location.search?e.location.search.split("=")[1]:"/",m=Object(o.c)((function(e){return e.userSignin})),g=m.userInfo,v=m.loading,f=m.error;Object(c.useEffect)((function(){g&&e.history.push(x)}),[e.history,g,x]);return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var r=Object(h.a)(u.a.mark((function r(c){var n,s;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:A,payload:{email:e,password:t}}),r.prev=1,r.next=4,p.a.post("api/users/signin",{email:e,password:t});case 4:n=r.sent,s=n.data,c({type:D,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),c({type:T,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()}(n,j))},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{style:{textAlign:"center"},children:"SIGN IN"})}),v&&Object(d.jsx)("h2",{children:"...Loading"}),f&&Object(d.jsx)("h2",{className:"signin-error",children:f}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{id:"email",type:"email",onChange:function(e){return s(e.target.value)},value:n,placeholder:"Enter Email",required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{id:"password",type:"password",onChange:function(e){return b(e.target.value)},value:j,placeholder:"Enter password",required:!0})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",className:"primary",children:"Sign In"})}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:["New Customer? ",Object(d.jsx)(a.b,{to:"/register?redirect=".concat(x),children:"Register Now"})]})})]})})},Y=function(e){var t=Object(c.useState)(""),r=Object(E.a)(t,2),n=r[0],s=r[1],i=Object(c.useState)(""),l=Object(E.a)(i,2),j=l[0],b=l[1],O=Object(c.useState)(""),x=Object(E.a)(O,2),m=x[0],g=x[1],v=Object(c.useState)(""),f=Object(E.a)(v,2),y=f[0],S=f[1],N=Object(o.b)(),I=e.location.search?e.location.search.split("=")[1]:"/",w=Object(o.c)((function(e){return e.userRegister})),R=w.userInfo,_=w.loading,C=w.error;Object(c.useEffect)((function(){R&&e.history.push(I)}),[e.history,R,I]);return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),m!==y?alert("password didn't match"):N(function(e,t,r){return function(){var c=Object(h.a)(u.a.mark((function c(n){var s,a;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n({type:k,payload:{email:t,password:r}}),c.prev=1,c.next=4,p.a.post("api/users/register",{name:e,email:t,password:r});case 4:s=c.sent,a=s.data,n({type:U,payload:a}),n({type:D,payload:a}),localStorage.setItem("userInfo",JSON.stringify(a)),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(1),n({type:L,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 14:case"end":return c.stop()}}),c,null,[[1,11]])})));return function(e){return c.apply(this,arguments)}}()}(n,j,m))},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{style:{textAlign:"center"},children:"REGISTER"})}),_&&Object(d.jsx)("h2",{children:"...Loading"}),C&&Object(d.jsx)("h2",{className:"signin-error ",children:C}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(d.jsx)("input",{id:"Name",type:"text",onChange:function(e){return s(e.target.value)},value:n,placeholder:"Enter Name",required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{id:"email",type:"email",onChange:function(e){return b(e.target.value)},value:j,placeholder:"Enter Email",required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{id:"password",type:"password",onChange:function(e){return g(e.target.value)},value:m,placeholder:"Enter password",required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"Confirm password",children:"Confirm Password"}),Object(d.jsx)("input",{id:"Confirm password",type:"password",onChange:function(e){return S(e.target.value)},value:y,placeholder:"Confirm password",required:!0})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",className:"primary",children:"Register"})}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:["Already Registered? "," ",Object(d.jsx)(a.b,{to:"/signin?redirect=".concat(I),children:"Sign In"})]})})]})})};function H(e){Object(o.c)((function(e){return e.userSignin})).userInfo||e.history.push("/signin");var t=Object(o.c)((function(e){return e.cart})).shippingDetails,r=Object(c.useState)(t.fullName),n=Object(E.a)(r,2),s=n[0],a=n[1],i=Object(c.useState)(t.address),l=Object(E.a)(i,2),j=l[0],u=l[1],h=Object(c.useState)(t.city),b=Object(E.a)(h,2),p=b[0],O=b[1],x=Object(c.useState)(t.postalCode),m=Object(E.a)(x,2),g=m[0],v=m[1],f=Object(c.useState)(t.country),y=Object(E.a)(f,2),S=y[0],N=y[1],I=Object(o.b)();return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"form",onSubmit:function(t){var r;t.preventDefault(),I((r={fullName:s,address:j,city:p,postalCode:g,country:S},function(e){e({type:R,payload:r}),localStorage.setItem("shippingAddress",JSON.stringify(r))})),e.history.push("/placeorder")},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Shipping Address"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"fullName",children:"Full Name"}),Object(d.jsx)("input",{type:"text",id:"fullName",placeholder:"Enter full name",value:s,onChange:function(e){return a(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"address",children:"Address"}),Object(d.jsx)("input",{type:"text",id:"address",placeholder:"Enter address",value:j,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{type:"text",id:"city",placeholder:"Enter city",value:p,onChange:function(e){return O(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"postalCode",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",id:"postalCode",placeholder:"Enter postal code",value:g,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"country",children:"Country"}),Object(d.jsx)("input",{type:"text",id:"country",placeholder:"Enter country",value:S,onChange:function(e){return N(e.target.value)},required:!0})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{}),Object(d.jsx)("button",{className:"primary",type:"submit",children:"Continue"})]})]})})}var V=r(11),X="CREATE_ORDER_REQUEST",K="CREATE_ORDER_SUCCESS",W="CREATE_ORDER_FAILURE",Z="CREATE_ORDER_RESET",ee="DETAIL_ORDER_REQUEST",te="DETAIL_ORDER_SUCCESS",re="DETAIL_ORDER_FAILURE",ce="ORDER_PAY_REQUEST",ne="ORDER_PAY_SUCCESS",se="ORDER_PAY_FAILURE",ae="ORDER_PAY_RESET",ie="ORDER_LIST_REQUEST",de="ORDER_LIST_SUCCESS",le="ORDER_LIST_FAILURE",oe=function(e){var t=Object(o.c)((function(e){return e.orderCreate})),r=t.loading,n=t.success,s=t.error,i=t.order,l=Object(o.c)((function(e){return e.cart})),j=function(e){return Number(e.toFixed(2))};l.itemsPrice=j(l.cartItems.reduce((function(e,t){return e+t.qty*t.price}),0)),l.shippingPrice=l.itemsPrice>100?j(0):j(10),l.taxPrice=j(.15*l.itemsPrice),l.totalPrice=l.itemsPrice+l.shippingPrice+l.taxPrice;var b=Object(o.b)();return Object(c.useEffect)((function(){n&&(e.history.push("/order/".concat(i._id)),b({type:Z}))}),[b,e.history,i,n]),Object(d.jsxs)("div",{className:"row top",children:[Object(d.jsx)("div",{className:"col-2",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"card card-body",children:[Object(d.jsx)("h2",{children:"Shipping"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Name: "}),l.shippingDetails.fullName,Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"Address: "}),l.shippingDetails.address,",",l.shippingDetails.city,",",l.shippingDetails.postalCode,",",l.shippingDetails.country]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"card card-body",children:[Object(d.jsx)("h2",{children:"Payment Method"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Method: "}),"PayPal"]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"card card-body",children:[Object(d.jsx)("h2",{children:"Order Items"}),0===l.cartItems.length?Object(d.jsxs)("h2",{children:["Cart is Empty. ",Object(d.jsx)(a.b,{to:"/",children:"Go Shopping"})]}):Object(d.jsx)("ul",{children:l.cartItems.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.image,alt:e.name,className:"small"})}),Object(d.jsx)("div",{className:"marginright-2",children:Object(d.jsx)(a.b,{to:"/product/".concat(e.product),children:e.name})}),Object(d.jsxs)("div",{children:[e.qty," x $",e.price," = ",e.qty*e.price]})]})},e.product)}))})]})})]})}),Object(d.jsx)("div",{className:"col-1",children:Object(d.jsx)("div",{className:"card card-body",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("h2",{children:"Order Summary"})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Items"}),Object(d.jsxs)("div",{children:["$",l.itemsPrice.toFixed(2)]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Shipping"}),Object(d.jsxs)("div",{children:["$",l.shippingPrice.toFixed(2)]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Tax"}),Object(d.jsxs)("div",{children:["$",l.taxPrice.toFixed(2)]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:Object(d.jsx)("strong",{children:" Order Total"})}),Object(d.jsx)("div",{children:Object(d.jsxs)("strong",{children:["$",l.totalPrice.toFixed(2)]})})]})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",onClick:function(){b(function(e){return function(){var t=Object(h.a)(u.a.mark((function t(r,c){var n,s,a,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:X,payload:e}),t.prev=1,n=c(),s=n.userSignin.userInfo,t.next=5,p.a.post("/api/orders",e,{headers:{authorization:"Bearer ".concat(s.token)}});case 5:a=t.sent,i=a.data,r({type:K,payload:i.order}),r({type:_}),localStorage.removeItem("cartItems"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),r({type:W,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,r){return t.apply(this,arguments)}}()}(Object(V.a)(Object(V.a)({},l),{},{orderItems:l.cartItems})))},className:"primary block",disabled:0===l.cartItems.length,children:"Place Order"})}),r&&Object(d.jsx)("h1",{children:r}),s&&Object(d.jsx)("h1",{children:s})]})})})]})},je=r(37),ue=function(e){var t=Object(i.e)().id,r=Object(c.useState)(!1),n=Object(E.a)(r,2),s=n[0],l=n[1],j=Object(o.c)((function(e){return e.orderDetail})),b=j.order,O=j.loading,x=j.error,m=Object(o.c)((function(e){return e.orderPay})),g=m.loading,v=m.error,f=m.success,y=Object(o.b)();Object(c.useEffect)((function(){var e=function(){var e=Object(h.a)(u.a.mark((function e(){var t,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/config/paypal");case 2:t=e.sent,r=t.data,(c=document.createElement("script")).type="text/javascript",c.src="https://www.paypal.com/sdk/js?client-id=".concat(r),c.async=!0,c.onload=function(){l(!0)},document.body.appendChild(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!b||f||b&&b._id!==t?y(function(e){return function(){var t=Object(h.a)(u.a.mark((function t(r,c){var n,s,a,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:ee,payload:e}),t.prev=1,n=c(),s=n.userSignin.userInfo,t.next=5,p.a.get("/api/orders/".concat(e),{headers:{authorization:"Bearer ".concat(s.token)}});case 5:a=t.sent,i=a.data,r({type:te,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r({type:re,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,r){return t.apply(this,arguments)}}()}(t)):b.isPaid||(window.paypal?l(!0):e())}),[y,t,b,s,f]);return O?Object(d.jsx)("h1",{children:"...Loading"}):x?Object(d.jsx)("h1",{children:x}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:["Order ",b._id]}),Object(d.jsxs)("div",{className:"row top",children:[Object(d.jsx)("div",{className:"col-2",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"card card-body",children:[Object(d.jsx)("h2",{children:"Shipping"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Name: "}),b.shippingAddress.fullName,Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"Address: "}),b.shippingAddress.address,",",b.shippingAddress.city,",",b.shippingAddress.postalCode,",",b.shippingAddress.country]}),b.isDelivered?Object(d.jsxs)("h2",{className:"signin-success",children:["Delivered to ",b.shippingAddress.fullName]}):Object(d.jsx)("h2",{className:"signin-error",children:"Not Delivered"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"card card-body",children:[Object(d.jsx)("h2",{children:"Payment Method"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Method: "}),"PayPal"]}),b.isPaid?Object(d.jsxs)("h2",{className:"signin-success",children:["Paid at ",b.paidAt.slice(0,10)]}):Object(d.jsx)("h2",{className:"signin-error",children:"Not Paid"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"card card-body",children:[Object(d.jsx)("h2",{children:"Order Items"}),0===b.orderItems.length?Object(d.jsxs)("h2",{children:["Cart is Empty. ",Object(d.jsx)(a.b,{to:"/",children:"Go Shopping"})]}):Object(d.jsx)("ul",{children:b.orderItems.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.image,alt:e.name,className:"small"})}),Object(d.jsx)("div",{className:"marginright-2",children:Object(d.jsx)(a.b,{to:"/product/".concat(e.product),children:e.name})}),Object(d.jsxs)("div",{children:[e.qty," x $",e.price," = ",e.qty*e.price]})]})},e.product)}))})]})})]})}),Object(d.jsx)("div",{className:"col-1",children:Object(d.jsx)("div",{className:"card card-body",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("h2",{children:"Order Summary"})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Items"}),Object(d.jsxs)("div",{children:["$",b.itemsPrice.toFixed(2)]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Shipping"}),Object(d.jsxs)("div",{children:["$",b.shippingPrice.toFixed(2)]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:"Tax"}),Object(d.jsxs)("div",{children:["$",b.taxPrice.toFixed(2)]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{children:Object(d.jsx)("strong",{children:" Order Total"})}),Object(d.jsx)("div",{children:Object(d.jsxs)("strong",{children:["$",b.totalPrice.toFixed(2)]})})]})}),!b.isPaid&&Object(d.jsx)("li",{children:s?Object(d.jsxs)(d.Fragment,{children:[v&&Object(d.jsx)("h1",{children:v}),g&&Object(d.jsx)("h1",{children:"...Loading"}),Object(d.jsx)(je.PayPalButton,{amount:b.totalPrice,onSuccess:function(e){y(function(e,t){return function(){var r=Object(h.a)(u.a.mark((function r(c,n){var s,a,i,d;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:ce,payload:{order:e,paymentResult:t}}),s=n(),a=s.userSignin.userInfo,r.prev=2,r.next=5,p.a.put("/api/orders/".concat(e._id,"/pay"),t,{headers:{authorization:"Bearer ".concat(a.token)}});case 5:i=r.sent,d=i.data,c({type:ne,payload:d}),c({type:ae}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(2),c({type:se,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(b,e))}})]}):Object(d.jsx)("h1",{children:"...Loading paypal"})})]})})})]})]})},he=function(e){var t=Object(o.c)((function(e){return e.orderList})),r=t.error,n=t.orders,s=t.loading,a=Object(o.b)();return Object(c.useEffect)((function(){a(function(){var e=Object(h.a)(u.a.mark((function e(t,r){var c,n,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:ie}),c=r(),n=c.userSignin.userInfo,e.prev=2,e.next=5,p.a.get("/api/orders/mine",{headers:{authorization:"Bearer ".concat(n.token)}});case 5:s=e.sent,a=s.data,t({type:de,payload:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:le,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,r){return e.apply(this,arguments)}}())}),[a]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Order History"}),s?Object(d.jsx)("h1",{children:"...Loading"}):r?Object(d.jsx)("h1",{children:r}):Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"DATE"}),Object(d.jsx)("th",{children:"TOTAL"}),Object(d.jsx)("th",{children:"PAID"}),Object(d.jsx)("th",{children:"DELIVERED"}),Object(d.jsx)("th",{children:"ACTIONS"})]})}),Object(d.jsx)("tbody",{children:n.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t._id}),Object(d.jsx)("td",{children:t.createdAt.substring(0,10)}),Object(d.jsx)("td",{children:t.totalPrice}),Object(d.jsx)("td",{children:t.isPaid?t.paidAt.substring(0,10):"No"}),Object(d.jsx)("td",{children:t.isDelivered?t.deliveredAt.substring(0,10):"No"}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{type:"button",className:"small",onClick:function(){return e.history.push("/order/".concat(t._id))},children:"Details"})})]},t._id)}))})]})]})},be=function(){var e=Object(c.useState)(""),t=Object(E.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)(""),a=Object(E.a)(s,2),i=a[0],l=a[1],j=Object(c.useState)(""),b=Object(E.a)(j,2),O=b[0],x=b[1],m=Object(c.useState)(""),g=Object(E.a)(m,2),v=g[0],f=g[1],y=Object(o.b)(),S=Object(o.c)((function(e){return e.userSignin})).userInfo,N=Object(o.c)((function(e){return e.userDetails})),I=N.loading,w=N.error,R=N.user,_=Object(o.c)((function(e){return e.userUpdateProfile})),C=_.loading,P=_.success,A=_.error;Object(c.useEffect)((function(){var e;R?(n(R.name),l(R.email)):(y({type:B}),y((e=S._id,function(){var t=Object(h.a)(u.a.mark((function t(r,c){var n,s,a,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:q,payload:e}),n=c(),s=n.userSignin.userInfo,t.prev=2,t.next=5,p.a.get("/api/users/".concat(e),{headers:{authorization:"Bearer ".concat(s.token)}});case 5:a=t.sent,i=a.data,r({type:$,payload:i}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),r({type:G,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,r){return t.apply(this,arguments)}}())))}),[y,S._id,R]);return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O!==v?alert("passwords didn't match"):y(function(e){return function(){var t=Object(h.a)(u.a.mark((function t(r,c){var n,s,a,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:J,payload:e}),n=c(),s=n.userSignin.userInfo,t.prev=2,t.next=5,p.a.put("/api/users/profile",e,{headers:{authorization:"Bearer ".concat(s.token)}});case 5:a=t.sent,i=a.data,r({type:Q,payload:i}),r({type:D,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),r({type:M,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,r){return t.apply(this,arguments)}}()}({id:R._id,name:r,email:i,password:O}))},className:"form",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"User Profile"})}),I?Object(d.jsx)("h1",{children:"...loading"}):w?Object(d.jsx)("h1",{children:w}):Object(d.jsxs)(d.Fragment,{children:[C&&Object(d.jsx)("h1",{children:"...Loading"}),A&&Object(d.jsx)("h2",{className:"signin-error",children:"Error..Please try again"}),P&&Object(d.jsx)("h2",{className:"signin-success",children:"Profile Updated Successfully"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{id:"name",type:"text",placeholder:"Enter name",value:r,onChange:function(e){return n(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{id:"email",type:"email",placeholder:"Enter email",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{id:"password",type:"password",placeholder:"Enter password",value:O,onChange:function(e){return x(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"confirm password",children:"Confirm Password"}),Object(d.jsx)("input",{id:"confirm password",type:"password",placeholder:"Enter confirm password",value:v,onChange:function(e){return f(e.target.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"primary",type:"submit",children:"Update"})})]})]})})},pe=function(){return Object(d.jsxs)("h1",{style:{textAlign:"center"},children:["You have been logged out. ",Object(d.jsx)(a.b,{to:"/",children:"Click here"})," for homescreen"]})};var Oe=function(){var e=Object(o.c)((function(e){return e.cart})).cartItems,t=Object(o.c)((function(e){return e.userSignin})).userInfo,r=Object(o.b)();return Object(d.jsx)(a.a,{children:Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsxs)("header",{className:"row",children:[Object(d.jsx)("div",{children:Object(d.jsx)(a.b,{className:"brand",to:"/",children:"E-Store"})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)(a.b,{to:"/cart",children:["Cart",e.length>0&&Object(d.jsx)("span",{className:"badge",children:e.length})]}),t?Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsxs)(a.b,{to:"#",children:[t.name," ",Object(d.jsx)("i",{className:"fa fa-caret-down"})," "]}),Object(d.jsxs)("ul",{className:"dropdown-content",children:[Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/profile",children:"User Profile"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/orderHistory",children:"Order History"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/signout",onClick:function(){r((function(e){localStorage.removeItem("userInfo"),localStorage.removeItem("cartItems"),e({type:F})}))},children:"Sign Out"})})]})]}):Object(d.jsx)(a.b,{to:"/signin",children:"Sign In"})]})]}),Object(d.jsxs)("main",{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",component:y}),Object(d.jsx)(i.a,{exact:!0,path:"/product/:id",component:N}),Object(d.jsx)(i.a,{exact:!0,path:"/cart/:id?",component:P}),Object(d.jsx)(i.a,{exact:!0,path:"/signin",component:z}),Object(d.jsx)(i.a,{exact:!0,path:"/register",component:Y}),Object(d.jsx)(i.a,{exact:!0,path:"/shipping",component:H}),Object(d.jsx)(i.a,{exact:!0,path:"/placeorder",component:oe}),Object(d.jsx)(i.a,{exact:!0,path:"/order/:id",component:ue}),Object(d.jsx)(i.a,{exact:!0,path:"/orderHistory",component:he}),Object(d.jsx)(i.a,{exact:!0,path:"/profile",component:be}),Object(d.jsx)(i.a,{exact:!0,path:"/signout",component:pe})]}),Object(d.jsx)("footer",{className:"row center",children:"All rights reserved"})]})})},xe=r(21),me=r(38),ge={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],shippingDetails:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{}},userSignin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ve=Object(xe.b)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[],loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0};case x:return{loading:!1,products:t.payload};case m:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:[],loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{loading:!0};case v:return{loading:!1,product:t.payload};case f:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var r=t.payload,c=e.cartItems.find((function(e){return e.product===r.product}));return c?Object(V.a)(Object(V.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===c.product?r:e}))}):Object(V.a)(Object(V.a)({},e),{},{cartItems:[].concat(Object(S.a)(e.cartItems),[r])});case w:var n=t.payload;return Object(V.a)(Object(V.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==n}))});case R:return Object(V.a)(Object(V.a)({},e),{},{shippingAddress:t.payload});case _:return Object(V.a)(Object(V.a)({},e),{},{cartItems:[]});default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case D:return{loading:!1,userInfo:t.payload};case T:return{loading:!1,error:t.payload};case F:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{loading:!0};case U:return{loading:!1,userInfo:t.payload};case L:return{loading:!1,error:t.payload};default:return e}},orderCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{loading:!0};case K:return{loading:!0,success:!0,order:t.payload};case W:return{loading:!1,error:t.payload};case Z:return{};default:return e}},orderDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return{loading:!0};case te:return{loading:!1,order:t.payload};case re:return{loading:!1,error:t.payload};default:return e}},orderPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return{loading:!0};case ne:return{loading:!1,success:!0};case se:return{loading:!1,error:t.payload};case ae:return{};default:return e}},orderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return{loading:!0};case de:return{loading:!1,orders:t.payload};case le:return{loading:!1,error:t.payload};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{loading:!0};case $:return{loading:!1,user:t.payload};case G:return{loading:!1,error:t.payload};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return{loading:!0};case Q:return{loading:!1,success:!0};case M:return{loading:!1,error:t.payload};case B:return{};default:return e}}}),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.c,ye=Object(xe.d)(ve,ge,fe(Object(xe.a)(me.a)));s.a.render(Object(d.jsx)(o.a,{store:ye,children:Object(d.jsx)(Oe,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.a871a94d.chunk.js.map