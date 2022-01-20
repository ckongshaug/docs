"use strict";(self.webpackChunkdocs_uninett_no=self.webpackChunkdocs_uninett_no||[]).push([[344],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return p}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=i,k=m["".concat(l,".").concat(p)]||m[p]||g[p]||a;return t?n.createElement(k,o(o({ref:r},u),{},{components:t})):n.createElement(k,o({ref:r},u))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6347:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],s={title:"Kildedata"},l=void 0,d={unversionedId:"iam/kildedata",id:"iam/kildedata",title:"Kildedata",description:"Krav til registrering av kildedata",source:"@site/docs/iam/kildedata.md",sourceDirName:"iam",slug:"/iam/kildedata",permalink:"/docs/iam/kildedata",editUrl:"https://github.com/sikt-no/docs/tree/master/docs/iam/kildedata.md",tags:[],version:"current",lastUpdatedAt:1642687592,formattedLastUpdatedAt:"1/20/2022",frontMatter:{title:"Kildedata"},sidebar:"iam",previous:{title:"Brukernavn og bruker-ID",permalink:"/docs/iam/brukernavn"},next:{title:"Virksomhetsroller",permalink:"/docs/iam/virksomhetsroller"}},u=[{value:"Krav til registrering av kildedata",id:"krav-til-registrering-av-kildedata",children:[],level:2},{value:"Organisasjonsstruktur",id:"organisasjonsstruktur",children:[{value:"Prosess for organisasjonsendring",id:"prosess-for-organisasjonsendring",children:[],level:3}],level:2}],g={toc:u};function m(e){var r=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},g,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"krav-til-registrering-av-kildedata"},"Krav til registrering av kildedata"),(0,a.kt)("p",null,"Studentregistreringen skjer automatisk eller manuelt hvor alle n\xf8dvendige kildedata registreres. Tildeling av tilganger initieres n\xe5r aktivStudent eller aktivKlasse er sant. For ansatte s\xe5 m\xe5 f\xf8lgende krav oppfylles for at tildeling av tilganger vil initieres:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I tillegg til verifiserbar personalia, m\xe5 f\xf8dselsnummer eller D-nummer registreres. I frav\xe6r av dette m\xe5 f\xf8dselsdato, passnummer og nasjonalitet registreres"),(0,a.kt)("li",{parentName:"ul"},"Organisasjonstilh\xf8righet"),(0,a.kt)("li",{parentName:"ul"},"Medarbeidergruppe (MG) og medarbeiderundergruppe (MUG)"),(0,a.kt)("li",{parentName:"ul"},"Stillingskode (SKO) og yrkeskode (YRK) for ansatte, oppdragstakere og langvarige gjester; for uhonorerte stillinger settes relevant YRK der det er hensiktmessig"),(0,a.kt)("li",{parentName:"ul"},"Startdato"),(0,a.kt)("li",{parentName:"ul"},"Sluttdato for oppdragstakere og langvarige gjester")),(0,a.kt)("h2",{id:"organisasjonsstruktur"},"Organisasjonsstruktur"),(0,a.kt)("p",null,"L\xf8sningen forutsetter at det finnes et organisasjonsregister som minimum inneholder organisasjonsenheter i SAP som har sin make i FS. Knytningen m\xe5 v\xe6re en-til-en, og minimum inneholde:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Informasjon om foreldreenhet"),(0,a.kt)("li",{parentName:"ul"},"Unik id for hver enhet, eksempelvis orgid for SAP og FS-id for FS"),(0,a.kt)("li",{parentName:"ul"},"Unikt kortnavn/akronym")),(0,a.kt)("p",null,"L\xf8sningen vil benytte kortnavn/akronym som felles identifikator i en del prosesseringer, eksempelvis i \xe5 kunne adressere samme m\xe5l bare skilt av engasjementstype, som MN-II_Ansatt og MN-II_Student."),(0,a.kt)("h3",{id:"prosess-for-organisasjonsendring"},"Prosess for organisasjonsendring"),(0,a.kt)("p",null,"Organisasjonsendringer forekommer, og det stilles krav til implementeringsrekkef\xf8lge slik at integriteten i tilgangsmodellene opprettholdes. Figuren viser rekkef\xf8lgen p\xe5 endringer som m\xe5 skje f\xf8r en registrerer ansatte/studenter p\xe5 en ny enhet:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Opprette organisasjonsenhet i SAP og/eller FS (antas v\xe6re maker)"),(0,a.kt)("li",{parentName:"ol"},"Opprette knytningen i OrgReg med n\xf8dvendig metadata"),(0,a.kt)("li",{parentName:"ol"},"Opprette organisasjonsenhet i de m\xe5lsystemer som er ber\xf8rt, og som ikke h\xe5ndterer endringen automatisk"),(0,a.kt)("li",{parentName:"ol"},"Oppdatere regelsettet i RI")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3269).Z})))}m.isMDXComponent=!0},3269:function(e,r,t){r.Z=t.p+"assets/images/orgendring-cfa52d744b5643e8b0640d91d3136507.png"}}]);