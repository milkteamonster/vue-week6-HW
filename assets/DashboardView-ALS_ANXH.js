import{a as c}from"./axios-L6U4YIEh.js";import{_ as u,c as l,a as d,b as s,w as n,d as e,F as _,r,o as m}from"./index-4vq8JFo6.js";var p={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"milktea",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h}=p,f={methods:{checkAdmin(){const o=`${h}/v2/api/user/check`;c.post(o).then(t=>{console.log("驗證成功:",t.data.success)}).catch(t=>{alert(t.response.data.message),this.$router.push("/login")})}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=o,this.checkAdmin()}},k=d("h2",null,"這是後台",-1);function V(o,t,R,$,x,E){const a=r("RouterLink"),i=r("RouterView");return m(),l(_,null,[k,d("nav",null,[s(a,{to:"/admin/products"},{default:n(()=>[e("產品列表")]),_:1}),e(" | "),s(a,{to:"/admin/order"},{default:n(()=>[e("訂單列表")]),_:1}),e(" | "),s(a,{to:"/"},{default:n(()=>[e("回到前台")]),_:1})]),s(i)],64)}const w=u(f,[["render",V]]);export{w as default};
