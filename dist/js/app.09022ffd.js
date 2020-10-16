(function(e){function t(t){for(var n,o,s=t[0],d=t[1],l=t[2],p=0,u=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);c&&c(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var d=a[s];0!==i[d]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},1449:function(e,t,a){},"1ec6":function(e,t,a){"use strict";var n=a("1449"),i=a.n(n);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",{staticClass:"ui header"},[e._v(" GeoNames Vue")]),e._m(0),a("h3",{staticClass:"ui header"},[e._v("<GeoNames-State>")]),a("state-table"),a("h3",{staticClass:"ui header"},[e._v("<GeoNames-City>")]),a("city-table")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Exemplo de exibição dos dados da "),a("a",{attrs:{href:"https://github.com/jeysonlr/laminas-mezzio-geoNames",target:"_blank"}},[e._v("Laminas-Mezzio API")]),a("span",{staticClass:"ui icon",attrs:{"data-tooltip":"Obs: token usado nesse exemplo é e0f66c28-f348-4304-9609-3169f0cd07cf"}},[a("i",{staticClass:"info icon"})])])}],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("vuetable",{ref:"vuetable",attrs:{"http-fetch":e.getData,fields:e.fields,"sort-order":e.sortOrder,"query-params":e.makeQueryParams,"data-path":"data","per-page":e.perPage,transform:e.transformData,"pagination-path":"pagination"},on:{"vuetable:pagination-data":e.onPaginationData}}),a("div",{staticClass:"pagination ui basic segment grid"},[a("vuetable-pagination-info",{ref:"paginationInfo",attrs:{"info-template":"Exibindo {from} a {to} do total de {total} itens","no-data-template":"Sem dados para exibir"}}),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)},s=[],d=(a("b0c0"),a("c3d0")),l=a("3568"),c=a("127e"),p={name:"StateTable",components:{Vuetable:d["a"],VuetablePagination:l["a"],VuetablePaginationInfo:c["a"]},data:function(){return{fields:[{name:"name",title:'<i class="grey address card outline icon"></i>Nome',width:"20%",sortField:"name"},{name:"shortName",title:'<i class="grey address book outline icon"></i>Abreviação',width:"20%"},{name:"createdAt",title:'<i class="grey clock outline icon"></i>Data de Criação',width:"20%"},{name:"updatedAt",title:'<i class="grey clock outline icon"></i>Data de Atualização',width:"20%"}],sortOrder:[{field:"Name",direction:"asc"}],perPage:10,apiKey:"e0f66c28-f348-4304-9609-3169f0cd07cf",apiUrl:"https://geonames-api.herokuapp.com"}},methods:{getData:function(e,t){return this.$http.defaults.baseURL=this.apiUrl+"/v1/state",this.$http.defaults.headers.common["X-Api-Key"]=this.apiKey,this.$http.get(e,t)},makeQueryParams:function(e,t,a){return{sort:e[0].field,order:"asc"===e[0].direction?1:-1,page:t,pageSize:a}},transformData:function(e){var t={};t.pagination={total:e._total_items,per_page:e._embedded.states.length,current_page:e._page,last_page:e._page_count,next_page_url:(e._links.next||{}).href||null,prev_page_url:(e._links.last||{}).href||null,from:1===e._page?1:(e._page-1)*this.perPage,to:1===e._page?e._embedded.states.length:(e._page-1)*this.perPage+e._embedded.states.length},t.data=[];for(var a=0;a<e._embedded.states.length;a++)t.data.push({id:e._embedded.states[a].id,name:e._embedded.states[a].name,shortName:e._embedded.states[a].shortName,createdAt:this.$moment(e._embedded.states[a].createdAt).format("HH:mm:ss DD/MM/YYYY"),updatedAt:this.$moment(e._embedded.states[a].updatedAt).format("HH:mm:ss DD/MM/YYYY")});return t},onPaginationData:function(e){this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage:function(e){this.$refs.vuetable.changePage(e)}}},u=p,f=(a("1ec6"),a("2877")),m=Object(f["a"])(u,o,s,!1,null,null,null),g=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("vuetable",{ref:"vuetable",attrs:{"http-fetch":e.getData,fields:e.fields,"sort-order":e.sortOrder,"query-params":e.makeQueryParams,"data-path":"data","per-page":e.perPage,transform:e.transformData,"pagination-path":"pagination"},on:{"vuetable:pagination-data":e.onPaginationData}}),a("div",{staticClass:"pagination ui basic segment grid"},[a("vuetable-pagination-info",{ref:"paginationInfo",attrs:{"info-template":"Exibindo {from} a {to} do total de {total} itens","no-data-template":"Sem dados para exibir"}}),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)},b=[],_=(a("d81d"),{name:"CityTable",components:{Vuetable:d["a"],VuetablePagination:l["a"],VuetablePaginationInfo:c["a"]},data:function(){return{fields:[{name:"name",title:'<i class="grey address card outline icon"></i>Nome',width:"20%",sortField:"name"},{name:"stateName",title:'<i class="grey address book outline icon"></i>Estado',width:"20%"},{name:"createdAt",title:'<i class="grey clock outline icon"></i>Data de Criação',width:"20%"},{name:"updatedAt",title:'<i class="grey clock outline icon"></i>Data de Atualização',width:"20%"}],sortOrder:[{field:"Name",direction:"asc"}],perPage:10,apiKey:"e0f66c28-f348-4304-9609-3169f0cd07cf",apiUrl:"https://geonames-api.herokuapp.com"}},methods:{getData:function(e,t){return this.$http.defaults.baseURL=this.apiUrl+"/v1/city",this.$http.defaults.headers.common["X-Api-Key"]=this.apiKey,this.$http.get(e,t)},makeQueryParams:function(e,t,a){return{sort:e[0].field,order:"asc"===e[0].direction?1:-1,page:t,pageSize:a}},transformData:function(e){var t={};t.pagination={total:e._total_items,per_page:e._embedded.cities.length,current_page:e._page,last_page:e._page_count,next_page_url:(e._links.next||{}).href||null,prev_page_url:(e._links.last||{}).href||null,from:1===e._page?1:(e._page-1)*this.perPage,to:1===e._page?e._embedded.cities.length:(e._page-1)*this.perPage+e._embedded.cities.length},t.data=[];for(var a=0;a<e._embedded.cities.length;a++)t.data.push({id:e._embedded.cities[a].id,name:e._embedded.cities[a].name,stateId:e._embedded.cities[a].stateId,stateName:e._embedded.cities[a].stateName||"",createdAt:this.$moment(e._embedded.cities[a].createdAt).format("HH:mm:ss DD/MM/YYYY"),updatedAt:this.$moment(e._embedded.cities[a].updatedAt).format("HH:mm:ss DD/MM/YYYY")});return t},onPaginationData:function(e){this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e);var t=this.$refs.vuetable.$data.tableData,a=this.$refs.vuetable,n=t.map((function(e){return e.stateId}));n.length>0&&(this.$http.defaults.baseURL=this.apiUrl,this.$http.defaults.headers.common["X-Api-Key"]=this.apiKey,this.$http.post("/v1/state/bulk",{ids:n}).then((function(e){for(var n=[],i=0;i<t.length;i++)n.push(Object.assign(t[i],{stateName:(e.data[t[i].stateId]||{}).name||""}));a.$data.tableData=n})).catch((function(e){console.log(e)})))},onChangePage:function(e){this.$refs.vuetable.changePage(e)}}}),v=_,y=(a("f6e7"),Object(f["a"])(v,h,b,!1,null,null,null)),P=y.exports,D={name:"App",components:{StateTable:g,CityTable:P}},$=D,k=(a("034f"),Object(f["a"])($,i,r,!1,null,null,null)),x=k.exports,A=a("bc3a"),O=a.n(A);n["a"].use(a("2ead")),n["a"].prototype.$http=O.a,n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,a){},a9c5:function(e,t,a){},f6e7:function(e,t,a){"use strict";var n=a("a9c5"),i=a.n(n);i.a}});
//# sourceMappingURL=app.09022ffd.js.map