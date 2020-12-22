(this.webpackJsonpyrityshaku=this.webpackJsonpyrityshaku||[]).push([[0],{25:function(e,t){},32:function(e,t,a){e.exports=a(64)},59:function(e,t){},60:function(e,t){},64:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(6),l=a.n(r),o=(a(37),a(12)),i=a.n(o),c=a(26),m=a(27),u=a(28),d=a(31),h=a(30),f=a(13),p=a.n(f),g=a(67),v=a(7),k=a.n(v),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={baseUrl:"http://avoindata.prh.fi/bis/v1",payload:{totalResults:"true",maxResults:"1000",resultsFrom:"0",companyRegistrationFrom:"2014-02-28"},loadingData:!1,streetAddressPostCode:"",registeredOffice:"",businessLineCode:"",showModal:!1,totalResults:null,currentResults:null,fileFormat:"xlsx"},e.saveToCsv=function(t){var a="",s=t,n=Object.keys(s[0]).join();a+=n+"\n",s.forEach((function(e){a+=Object.values(e).join()+"\n"}));var r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(a)),r.setAttribute("download","Yritykset".concat(e.state.registeredOffice?"-".concat(e.state.registeredOffice):"").concat(e.state.streetAddressPostCode?"-".concat(e.state.streetAddressPostCode):"").concat(e.state.businessLineCode?"-".concat(e.state.businessLineCode):"",".csv")),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)},e.saveToXlsx=function(t){var a=k.a.utils.json_to_sheet(t),s=k.a.utils.book_new();k.a.utils.book_append_sheet(s,a,"Yritystiedot"),k.a.writeFile(s,"Yritykset".concat(e.state.registeredOffice?"-".concat(e.state.registeredOffice):"").concat(e.state.streetAddressPostCode?"-".concat(e.state.streetAddressPostCode):"").concat(e.state.businessLineCode?"-".concat(e.state.businessLineCode):"",".xlsx"))},e.loadData=function(){var t=e.state,a=t.baseUrl,s=t.streetAddressPostCode,n=t.registeredOffice,r=t.businessLineCode,l=Object.assign({},e.state.payload);""!==s&&(l.streetAddressPostCode=s),""!==n&&(l.registeredOffice=n),""!==r&&(l.businessLineCode=r),e.setState({loadingData:!0}),p.a.get(a,{params:l}).then(function(){var t=Object(c.a)(i.a.mark((function t(s){var n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s.data.totalResults,e.setState({totalResults:n}),r=s.data.results,console.log(n),!(n>1e3)){t.next=14;break}o=1e3;case 6:if(!(o<n)){t.next=14;break}return e.setState({currentResults:o}),l.resultsFrom=o,t.next=11,p.a.get(a,{params:l}).then((function(e){r=r.concat(e.data.results)}));case 11:o+=1e3,t.next=6;break;case 14:"csv"===e.state.fileFormat?e.saveToCsv(r):e.saveToXlsx(r);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then(e.resetParams).catch((function(t){e.setState({loadingData:!1},(function(){alert("Ei tuloksia n\xe4ill\xe4 parametreilla."),console.log(t)}))}))},e.resetParams=function(){e.setState({registeredOffice:"",streetAddressPostCode:"",businessLineCode:"",loadingData:!1,totalResults:null,currentResults:null,fileFormat:"xlsx"})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.streetAddressPostCode,s=t.registeredOffice,r=t.businessLineCode;return n.a.createElement("div",{className:"container"},n.a.createElement(g.a,{show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})},dialogClassName:"my-2"},n.a.createElement(g.a.Header,{closeButton:!0},n.a.createElement(g.a.Title,null,"Kuvaus")),n.a.createElement(g.a.Body,null,n.a.createElement("strong",null,"Mit\xe4 t\xe4m\xe4 ty\xf6kalu tekee?"),n.a.createElement("p",null,"Ty\xf6kalun tarkoituksena on hakea yrityksi\xe4 ja niiden tietoja toimialan ja maantieteellisen sijainnin perusteella. Hakutulos on ladattavissa CSV tai XLSX formaateissa. Sis\xe4lt\xf6 haetaan"," ",n.a.createElement("a",{href:"https://avoindata.prh.fi/index.html",target:"_blank",rel:"noopener noreferrer"},"PRH"),":n avoimen datan rajapinnasta."),n.a.createElement("strong",null,"K\xe4ytt\xf6ohjeet"),n.a.createElement("p",{className:"m-0"},"Haku voidaan suorittaa seuraavia parametreja hy\xf6dynt\xe4en:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Kotipaikka ",n.a.createElement("span",{className:"ml-2 small"},"Oltava tarkka vastine!")),n.a.createElement("li",null,"Toimiala",n.a.createElement("a",{className:"ml-2 small",href:"http://www.stat.fi/meta/luokitukset/toimiala/001-2008/index.html",target:"_blank",rel:"noopener noreferrer"},"lis\xe4tietoa")),n.a.createElement("li",null,"Postinumero",n.a.createElement("a",{className:"ml-2 small",href:"https://fi.wikipedia.org/wiki/Luettelo_Suomen_postinumeroista_kunnittain",target:"_blank",rel:"noopener noreferrer"},"lis\xe4tietoa"))),n.a.createElement("p",null,"V\xe4hint\xe4\xe4n yksi parametri on sy\xf6tett\xe4v\xe4, mutta useampaakin voi k\xe4ytt\xe4\xe4 samanaikaisesti. Jos parametri(t) on sy\xf6tetty puutteellisesti, sovellus ilmoittaa asiasta."),n.a.createElement("a",{href:"https://matvei.xyz",target:"_blank",rel:"noopener noreferrer"},"Suunnittelu ja toteutus"),n.a.createElement("span",null," | "),n.a.createElement("a",{href:"https://github.com/matikka96/yrityshaku",target:"_blank",rel:"noopener noreferrer"},"GitHub"))),n.a.createElement("div",{className:"d-flex align-items-center justify-content-center py-3 main-element"},n.a.createElement("div",{className:"card",style:{width:"30rem"}},n.a.createElement("h4",{className:"card-header"},"Yrityshaku",n.a.createElement("button",{className:"btn float-right p-0",onClick:function(){return e.setState({showModal:!0})}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.a.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),n.a.createElement("line",{x1:"12",y1:"17",x2:"12",y2:"17"})))),n.a.createElement("div",{className:"card-body"},n.a.createElement("fieldset",{disabled:!!this.state.loadingData},n.a.createElement("form",null,n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col"},n.a.createElement("label",{htmlFor:"registered-office"},"Kotipaikka"),n.a.createElement("input",{type:"text",className:"form-control",id:"registered-office",placeholder:"esim. Lappeenranta",value:this.state.registeredOffice,onChange:function(t){return e.setState({registeredOffice:t.target.value})}}))),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-sm-6"},n.a.createElement("label",{htmlFor:"registered-office"},"Toimialakoodi"),n.a.createElement("a",{className:"ml-2 small",href:"http://www.stat.fi/meta/luokitukset/toimiala/001-2008/index.html",target:"_blank",rel:"noopener noreferrer"},"lis\xe4tietoa"),n.a.createElement("input",{type:"text",className:"form-control",id:"registered-office",placeholder:"esim. 07",value:this.state.businessLineCode,onChange:function(t){return!isNaN(t.target.value)&&t.target.value.length<6?e.setState({businessLineCode:t.target.value}):null}})),n.a.createElement("div",{className:"form-group col-sm-6"},n.a.createElement("label",{htmlFor:"post-code"},"Postinumero"),n.a.createElement("a",{className:"ml-2 small",href:"https://fi.wikipedia.org/wiki/Luettelo_Suomen_postinumeroista_kunnittain",target:"_blank",rel:"noopener noreferrer"},"lis\xe4tietoa"),n.a.createElement("input",{type:"text",className:"form-control",id:"post-code",placeholder:"esim. 53850",value:this.state.streetAddressPostCode,min:"9999",max:"99999",onChange:function(t){return!isNaN(t.target.value)&&t.target.value.length<6?e.setState({streetAddressPostCode:t.target.value}):null}}))),n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"col"},"Tallennusmuoto"),n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"xlsx",value:"xlsx",onChange:function(t){return e.setState({fileFormat:t.target.value})},checked:"xlsx"===this.state.fileFormat}),n.a.createElement("label",{className:"form-check-label",htmlFor:"xlsx"},"xlsx")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"inlineRadioOptions",id:"csv",value:"csv",onChange:function(t){return e.setState({fileFormat:t.target.value})},checked:"csv"===this.state.fileFormat}),n.a.createElement("label",{className:"form-check-label",htmlFor:"csv"},"csv")))))),n.a.createElement("div",{className:"progress transition-duration",style:{transitionDuration:"0.2s",height:this.state.totalResults&&this.state.currentResults?null:"0px"}},n.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:"".concat(100*this.state.currentResults/this.state.totalResults,"%")}}))),n.a.createElement("div",{className:"card-footer"},n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",disabled:""===this.state.registeredOffice&&""===this.state.streetAddressPostCode&&""===this.state.businessLineCode,onClick:this.resetParams},"Tyhjenn\xe4"),n.a.createElement("button",{type:"button",className:"btn btn-dark float-right",disabled:s.length<3&&5!==a.length&&2!==r.length,onClick:this.loadData},this.state.loadingData?n.a.createElement("div",{className:"spinner-border spinner-border-sm mr-2",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")):null,this.state.loadingData?"Valmistellaan tiedostoa":"Lataa yritystiedot")))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.19f52f87.chunk.js.map