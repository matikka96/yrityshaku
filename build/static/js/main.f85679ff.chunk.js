(this.webpackJsonpyrityshaku=this.webpackJsonpyrityshaku||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(11),o=a.n(n),c=a(12),i=a(13),l=a(16),d=a(14),m=a(17),u=a(15),f=a.n(u),h=(a(40),function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={baseUrl:"http://avoindata.prh.fi/bis/v1",payload:{totalResults:"true",maxResults:"1000",resultsFrom:"0",companyRegistrationFrom:"2014-02-28"},streetAddressPostCode:"",registeredOffice:"",result:null,loadingData:!1},a.loadData=function(){var e=a.state,t=e.baseUrl,r=e.payload,s=e.streetAddressPostCode,n=e.registeredOffice;""!==s&&(r.streetAddressPostCode=s),""!==n&&(r.registeredOffice=n),a.setState({loadingData:!0}),f.a.get(t,{params:r}).then((function(e){var t="",a=e.data.results,r=Object.keys(a[0]).join();t+=r+"\n",a.forEach((function(e){t+=Object.values(e).join()+"\n"}));var o=document.createElement("a");o.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),o.setAttribute("download","yritykset".concat(n?"-".concat(n):"").concat(s?"-".concat(s):"",".csv")),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)})).then(a.resetParams).catch((function(e){a.setState({loadingData:!1},(function(){return alert("V\xe4\xe4rin sy\xf6tetyt parametrit. \n ".concat(e))}))}))},a.resetParams=function(){a.setState({registeredOffice:"",streetAddressPostCode:"",loadingData:!1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.streetAddressPostCode,r=t.registeredOffice;return s.a.createElement("div",{className:"bg-secondary"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"d-flex align-items-center justify-content-center min-vh-100"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Yrityshaku"),s.a.createElement("div",null,s.a.createElement("div",{className:"form-row"},s.a.createElement("div",{className:"form-group col-sm-6"},s.a.createElement("label",{htmlFor:"registered-office"},"Kotipaikka"),s.a.createElement("input",{type:"text",className:"form-control",id:"registered-office",placeholder:"esim. Lappeenranta",value:this.state.registeredOffice,onChange:function(t){return e.setState({registeredOffice:t.target.value})}})),s.a.createElement("div",{className:"form-group col-sm-6"},s.a.createElement("label",{htmlFor:"post-code"},"Postinumero"),s.a.createElement("input",{type:"text",className:"form-control",id:"post-code",placeholder:"esim. 53850",value:this.state.streetAddressPostCode,onChange:function(t){return e.setState({streetAddressPostCode:t.target.value})}}))),s.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",disabled:""===this.state.registeredOffice&&""===this.state.streetAddressPostCode,onClick:this.resetParams},"Tyhjenn\xe4"),s.a.createElement("button",{type:"button",className:"btn btn-primary float-right",disabled:r.length<3&&5!==a.length,onClick:this.loadData},this.state.loadingData?s.a.createElement("div",{className:"spinner-border spinner-border-sm mr-2",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")):null,"Lataa yritystiedot")))))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.f85679ff.chunk.js.map