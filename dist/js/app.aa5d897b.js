(function(){"use strict";var t={5747:function(t,e,n){var o=n(9242),a=n(3396);const s={class:"app"};function r(t,e){const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(n)])}var i=n(89);const c={},l=(0,i.Z)(c,[["render",r]]);var d=l,u=n(2483);const p=t=>((0,a.dD)("data-v-1b387c66"),t=t(),(0,a.Cn)(),t),m={class:"vanta",ref:"vantaRef"},k=p((()=>(0,a._)("div",{class:"header-main"},[(0,a._)("h1",null,"ToDo List"),(0,a._)("h2",null,"Добро пожаловать в тестовый список дел")],-1)));function f(t,e,n,o,s,r){const i=(0,a.up)("nav-bar");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(i),k],512)}var v=n(1114),h=n(4159),b=n.n(h),g=n(7139);function _(t,e,n,o,s,r){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",{class:(0,g.C_)(["navbar",{"navbar-todo":"black"===n.textColor}])},[(0,a.Wm)(i,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Главная")])),_:1}),(0,a._)("span",{class:(0,g.C_)(["devider",{"devider-todo":"black"===n.textColor}])}," | ",2),(0,a.Wm)(i,{to:"/todo-list"},{default:(0,a.w5)((()=>[(0,a.Uk)("ToDO list")])),_:1})],2)}var y={props:{textColor:{type:Boolean}}};const w=(0,i.Z)(y,[["render",_],["__scopeId","data-v-1b0d7bb9"]]);var D=w,T={components:{NavBar:D},mounted(){this.vantaEffect=b()({el:this.$refs.vantaRef,color:"white",backgroundColor:"#13132f",THREE:v,showDots:!1})},beforeUnmount(){this.vantaEffect&&this.vantaEffect.destroy()}};const I=(0,i.Z)(T,[["render",f],["__scopeId","data-v-1b387c66"]]);var S=I;const O={class:"todo-list"},C={class:"list"};function E(t,e,n,o,s,r){const i=(0,a.up)("nav-bar"),c=(0,a.up)("task-form"),l=(0,a.up)("task-desk");return(0,a.wg)(),(0,a.iD)("div",O,[(0,a.Wm)(i,{textColor:"black"}),(0,a._)("div",C,[(0,a.Wm)(c,{onCreate:r.createTask},null,8,["onCreate"]),(0,a.Wm)(l,{onRemove:r.removeTask,onEdit:t.editTask,onDone:r.completeTask,tasks:s.tasks},null,8,["onRemove","onEdit","onDone","tasks"])])])}n(7658);function N(t,e,n,s,r,i){const c=(0,a.up)("task-input"),l=(0,a.up)("main-button");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[1]||(e[1]=(0,o.iM)((()=>{}),["prevent"])),class:"form__content"},[(0,a.Wm)(c,{modelValue:r.task.body,"onUpdate:modelValue":e[0]||(e[0]=t=>r.task.body=t),placeholder:"Что нужно сделать?"},null,8,["modelValue"]),(0,a.Wm)(l,{onClick:i.createTask},{default:(0,a.w5)((()=>[(0,a.Uk)("Добавить")])),_:1},8,["onClick"])],32)}const W={class:"button"};function x(t,e,n,o,s,r){return(0,a.wg)(),(0,a.iD)("button",W,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])}var j={name:"main-button",props:{buttonProps:{type:Object,required:!0}}};const B=(0,i.Z)(j,[["render",x],["__scopeId","data-v-6b57053c"]]);var J=B;const M=["value"];function U(t,e,n,o,s,r){return(0,a.wg)(),(0,a.iD)("input",{value:n.modelValue,onInput:e[0]||(e[0]=(...t)=>r.updateInput&&r.updateInput(...t)),class:"input",type:"text"},null,40,M)}var Z={name:"task-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const $=(0,i.Z)(Z,[["render",U],["__scopeId","data-v-a3ae981c"]]);var V=$,R={components:{MainButton:J,TaskInput:V},name:"task-form",data(){return{task:{id:"",body:"",isDone:!1}}},methods:{createTask(){const t="plan";this.task.id=Date.now(),this.$emit("create",this.task);const e=localStorage.getItem(t),n=e?JSON.parse(e):[];n.push(this.task),localStorage.setItem(t,JSON.stringify(n)),this.task={id:"",body:"",isDone:!1}}}};const P=(0,i.Z)(R,[["render",N],["__scopeId","data-v-28e4bfb5"]]);var q=P;const z=t=>((0,a.dD)("data-v-60dd3374"),t=t(),(0,a.Cn)(),t),F={key:0,class:"task"},H=z((()=>(0,a._)("h3",null,"Список дел",-1))),L={key:1,class:"empty"};function A(t,e,n,s,r,i){const c=(0,a.up)("task-item");return n.tasks.length>0?((0,a.wg)(),(0,a.iD)("div",F,[H,(0,a.Wm)(o.W3,{name:"task-list",class:"task-list"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tasks,(e=>((0,a.wg)(),(0,a.j4)(c,{onRemove:n=>t.$emit("remove",e),onEdit:n=>t.$emit("edit",e),onDone:n=>t.$emit("done",e),key:e,task:e,class:(0,g.C_)({"task-completed":!0===e.isDone})},null,8,["onRemove","onEdit","onDone","task","class"])))),128))])),_:1})])):((0,a.wg)(),(0,a.iD)("h2",L,"Дел нет!"))}const K={class:"task-item"},Y={class:"task-content"},G={key:1},Q={class:"btns"};function X(t,e,n,s,r,i){const c=(0,a.up)("task-input"),l=(0,a.up)("main-button");return(0,a.wg)(),(0,a.iD)("div",K,[(0,a._)("div",Y,[(0,a._)("h4",null,(0,g.zw)(new Date(n.task.id).toLocaleDateString()),1),r.isEdit?((0,a.wg)(),(0,a.j4)(c,{key:0,"model-value":r.newBody,"onUpdate:modelValue":i.editNewTasks},null,8,["model-value","onUpdate:modelValue"])):((0,a.wg)(),(0,a.iD)("div",G,(0,g.zw)(""===r.newBody?n.task.body:r.newBody),1))]),(0,a._)("div",Q,[(0,a.Wm)(l,{class:(0,g.C_)({"btn-not-completed":!n.task.isDone}),onClick:(0,o.iM)(i.editTask,["stop"])},{default:(0,a.w5)((()=>[(0,a.Uk)((0,g.zw)(r.isEdit?"Готово":"Изменить"),1)])),_:1},8,["class","onClick"]),(0,a.Wm)(l,{class:(0,g.C_)({"btn-not-completed":!n.task.isDone}),onClick:e[0]||(e[0]=(0,o.iM)((e=>t.$emit("remove",n.task)),["stop"]))},{default:(0,a.w5)((()=>[(0,a.Uk)("Удалить")])),_:1},8,["class"]),(0,a.Wm)(l,{class:(0,g.C_)({"btn-not-completed":!n.task.isDone}),onClick:e[1]||(e[1]=(0,o.iM)((e=>t.$emit("done",n.task)),["stop"]))},{default:(0,a.w5)((()=>[(0,a.Uk)("Сделано!")])),_:1},8,["class"])])])}var tt=n(65),et={components:{MainButton:J,TaskInput:V},props:{task:{type:Object,required:!0}},data(){return{isEdit:!1,newBody:this.task.body}},methods:{...(0,tt.nv)({getTasks:"task/getTasks"}),editTask(){this.isEdit=!this.isEdit},editNewTasks(t){const e=JSON.parse(localStorage.getItem("plan"));if(0===e.length)return;const n=e.findIndex((t=>t.id===this.task.id));e[n].body=t,this.newBody=e[n].body,localStorage.setItem("plan",JSON.stringify(e))}},mounted(){this.getTasks()}};const nt=(0,i.Z)(et,[["render",X],["__scopeId","data-v-60d90c10"]]);var ot=nt,at={components:{TaskItem:ot},props:{tasks:{type:Array,required:!0}}};const st=(0,i.Z)(at,[["render",A],["__scopeId","data-v-60dd3374"]]);var rt=st,it={components:{NavBar:D,TaskForm:q,TaskDesk:rt},data(){return{color:"black",tasks:this.checkTasks()??[]}},methods:{createTask(t){this.tasks.push(t)},removeTask(t){this.tasks=this.tasks.filter((e=>e.id!==t.id));const e=JSON.parse(localStorage.getItem("plan")),n=e.findIndex((e=>e.id===t.id));e.splice(n,1),localStorage.setItem("plan",JSON.stringify(e))},completeTask(t){t.isDone=!t.isDone;const e=JSON.parse(localStorage.getItem("plan")),n=e.findIndex((e=>e.id===t.id));e[n].isDone=!e[n].isDone,localStorage.setItem("plan",JSON.stringify(e))},checkTasks(){const t=localStorage.getItem("plan");if(!t)return;const e=JSON.parse(t);return e}}};const ct=(0,i.Z)(it,[["render",E],["__scopeId","data-v-57040461"]]);var lt=ct;const dt=[{path:"/",name:"home",component:S},{path:"/todo-list",name:"todo",component:lt}],ut=(0,u.p7)({history:(0,u.PO)("/"),routes:dt});var pt=ut;const mt={state:()=>({edittedTasks:[]}),actions:{getTasks({commit:t}){const e=JSON.parse(localStorage.getItem("plan"));0!==e.length&&t("setEdittedTask",e)}},namespaced:!0};var kt=(0,tt.MT)({modules:{task:mt}}),ft=[D];const vt=(0,o.ri)(d);ft.forEach((t=>{vt.component(t.name,t)})),(0,o.ri)(d).use(kt).use(pt).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,s){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],a=t[d][1],s=t[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,s<r&&(r=s));if(i){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,r=o[0],i=o[1],c=o[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var d=c(n)}for(e&&e(o);l<r.length;l++)s=r[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},o=self["webpackChunktodo_list_test"]=self["webpackChunktodo_list_test"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5747)}));o=n.O(o)})();
//# sourceMappingURL=app.aa5d897b.js.map