"use strict";(self.webpackChunkdocs_uninett_no=self.webpackChunkdocs_uninett_no||[]).push([[823],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=r,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||a;return t?i.createElement(h,s(s({ref:n},p),{},{components:t})):i.createElement(h,s({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9034:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],o={title:"REST API"},l=void 0,u={unversionedId:"iam/rest-api",id:"iam/rest-api",title:"REST API",description:"This defines the proposed SCIM interface to be provided by IGA",source:"@site/docs/iam/rest-api.md",sourceDirName:"iam",slug:"/iam/rest-api",permalink:"/docs/iam/rest-api",editUrl:"https://github.com/sikt-no/docs/tree/master/docs/iam/rest-api.md",tags:[],version:"current",lastUpdatedAt:1643809012,formattedLastUpdatedAt:"2/2/2022",frontMatter:{title:"REST API"},sidebar:"iam",previous:{title:"Rapportering",permalink:"/docs/iam/rapportering"},next:{title:"UiB Pilot",permalink:"/docs/iam/uib-pilot"}},p=[{value:"Persons vs Accounts",id:"persons-vs-accounts",children:[],level:2},{value:"Minimal implementation requirements",id:"minimal-implementation-requirements",children:[],level:2},{value:"Events",id:"events",children:[],level:2},{value:"Recommended features",id:"recommended-features",children:[],level:2},{value:"Field name specification",id:"field-name-specification",children:[{value:"User <code>.id</code>",id:"user-id",children:[],level:3},{value:"User <code>.meta</code>",id:"user-meta",children:[],level:3},{value:"User <code>.userName</code>",id:"user-username",children:[],level:3},{value:"User <code>.displayName</code>",id:"user-displayname",children:[],level:3},{value:"User <code>.name</code>",id:"user-name",children:[],level:3},{value:"User <code>.active</code>",id:"user-active",children:[],level:3},{value:"User <code>.externalId</code>",id:"user-externalid",children:[],level:3},{value:"User <code>.emails</code>",id:"user-emails",children:[],level:3},{value:"User <code>.phoneNumbers</code>",id:"user-phonenumbers",children:[],level:3},{value:"User <code>.profileUrl</code>",id:"user-profileurl",children:[],level:3},{value:"User <code>.entitlements</code>",id:"user-entitlements",children:[],level:3},{value:"User <code>.roles</code>",id:"user-roles",children:[],level:3},{value:"User <code>.no:edu:scim:user</code>",id:"user-noeduscimuser",children:[],level:3},{value:"User <code>.no:edu:scim:user.accountType</code>",id:"user-noeduscimuseraccounttype",children:[],level:3},{value:"User <code>.no:edu:scim:user.employeeNumber</code>",id:"user-noeduscimuseremployeenumber",children:[],level:3},{value:"User <code>.no:edu:scim:user.studentNumber</code>",id:"user-noeduscimuserstudentnumber",children:[],level:3},{value:"User <code>.no:edu:scim:user.fsPersonNumber</code>",id:"user-noeduscimuserfspersonnumber",children:[],level:3},{value:"User <code>.no:edu:scim:user.norEduPersonNIN</code>",id:"user-noeduscimusernoredupersonnin",children:[],level:3},{value:"User <code>.no:edu:scim:user.eduPersonPrincipalName</code>",id:"user-noeduscimuseredupersonprincipalname",children:[],level:3},{value:"User <code>.no:edu:scim:user.userPrincipalName</code>",id:"user-noeduscimuseruserprincipalname",children:[],level:3},{value:"User <code>.enterprise</code>",id:"user-enterprise",children:[],level:3},{value:"User <code>.enterprise.employeeNumber</code>",id:"user-enterpriseemployeenumber",children:[],level:3},{value:"User <code>.enterprise.costCenter</code>",id:"user-enterprisecostcenter",children:[],level:3},{value:"User <code>.enterprise.organization</code>",id:"user-enterpriseorganization",children:[],level:3},{value:"User <code>.enterprise.division</code>",id:"user-enterprisedivision",children:[],level:3},{value:"User <code>.enterprise.departement</code>",id:"user-enterprisedepartement",children:[],level:3},{value:"User <code>.enterprise.manager</code>",id:"user-enterprisemanager",children:[],level:3}],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This defines the proposed ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7643"},"SCIM")," interface to be provided by IGA\nimplementations in the Norwegian higher education sector. The main use case for this API is to provide\nfor IntArk-style provisioning of user accounts."),(0,a.kt)("p",null,"A functional mock-up of this API is available from\n",(0,a.kt)("a",{parentName:"p",href:"https://api-uib.intark.uh-it.no/#!/apis/91a73d99-d9b2-452a-a73d-99d9b2e52a9a/detail"},"UiBs API Gateway"),"."),(0,a.kt)("p",null,"The standard paths of SCIM are ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/{id}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/Groups")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/Groups/{id}"),". We only care for\nthe user endpoints for now."),(0,a.kt)("h2",{id:"persons-vs-accounts"},"Persons vs Accounts"),(0,a.kt)("p",null,"SCIM is basically designed as a REST-style replacement for LDAP.  As such it\nhas the same ambiguity on what the User objects represents \u2014 are they people or\nare they accounts that belong to people (and other entities)."),(0,a.kt)("p",null,"In this context we declare them to be ",(0,a.kt)("em",{parentName:"p"},"accounts")," and we suggest that we might extend our\nSCIM implementation with ",(0,a.kt)("em",{parentName:"p"},"Person")," objects later. In this model a person might be\nthe owner of multiple accounts.  We also consider one of these accounts as this\nperson's primary account.  The User objects of the primary account will have a\nmix of attributes describing the account and attributes describing the person."),(0,a.kt)("p",null,"We might also have accounts that don't belong to any person. This might\nbe accounts representing devices, applications or other systems."),(0,a.kt)("h2",{id:"minimal-implementation-requirements"},"Minimal implementation requirements"),(0,a.kt)("p",null,"This section defines what the lazy implementer might get away with."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users")," with ability to page through the available accounts. An implementation might choose to just expose the Feide-enabled accounts."),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users/{id}")," fetch data for the specified account."),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},'/Users?filter=userName eq "..."')," to make it possible to look up a specific account."),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users?userName=...")," as a more convenient non-standard version of the same."),(0,a.kt)("li",{parentName:"ul"},"Make ",(0,a.kt)("inlineCode",{parentName:"li"},"/Groups")," functional, but it's fine for it to just return the empty ",(0,a.kt)("inlineCode",{parentName:"li"},"ListResponse"),"."),(0,a.kt)("li",{parentName:"ul"},"Post MQ message when a user object is created, modified or deleted.")),(0,a.kt)("p",null,"The following fields should minimally be provided on user objects."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".meta")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".userName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".active")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".displayName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".name.formatted")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".name.givenName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".name.familyName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'.emails[].type == "work"')," with a corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},".value")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".no:edu:scim:user.accountType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".no:edu:scim:user.employeeNumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".no:edu:scim:user.eduPersonPrincipalName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".no:edu:scim:user.userPrincipalName"))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"Updates to the objects exposed in this API is signaled by events to the IntArk MQ\nand follows the proposed\n",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/draft-hunt-scim-notify-00"},"SCIM Event Extension")," structure.\nSince IntArk prefers shallow messages, we don't include the ",(0,a.kt)("inlineCode",{parentName:"p"},".values")," attribute."),(0,a.kt)("p",null,"These events are encoded in JSON and looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schemas": ["urn:ietf:params:scim:schemas:notify:2.0:Event"],\n  "resourceUris": [\n     "https://gw-uib.intark.uh-it.no/iga/scim/v2/Users/362ff2749bfb11eabbd5600308a4105a"\n  ],\n  "type":"MODIFY",\n  "attributes": ["emails", "name.givenName", "no:edu:scim:user:userPrincipalName"]\n}\n')),(0,a.kt)("p",null,'Example topic for the message is "no.uib.iga.scim.user.modify".'),(0,a.kt)("h2",{id:"recommended-features"},"Recommended features"),(0,a.kt)("p",null,"This section expands on the minimal requirements and define some features that\nmight be useful and that we prefer all implementations to consider."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users?employeeNumber=...")),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users?studentNumber=...")),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users?fsPersonNumber=...")),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"/Users?norEduPersonNIN=...")),(0,a.kt)("li",{parentName:"ul"},"Implement functional ",(0,a.kt)("inlineCode",{parentName:"li"},"/Groups")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/Groups/{id}")," that expose the same groups available from LDAP/AD."),(0,a.kt)("li",{parentName:"ul"},"More attributes on user objects, especially ",(0,a.kt)("inlineCode",{parentName:"li"},".phoneNumbers")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".enterprise.manager"),"."),(0,a.kt)("li",{parentName:"ul"},"Search for users by name and other attributes."),(0,a.kt)("li",{parentName:"ul"},"Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"/Persons")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/Persons/{id}")," endpoints. A schema for person objects is yet to be defined.")),(0,a.kt)("h2",{id:"field-name-specification"},"Field name specification"),(0,a.kt)("h3",{id:"user-id"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".id")),(0,a.kt)("p",null,"This should preferably be UUID-style string, but the service is free to\nuse other formats, like letting the ",(0,a.kt)("inlineCode",{parentName:"p"},".userName")," be the ",(0,a.kt)("inlineCode",{parentName:"p"},".id"),".  It should be possible\nto request the JSON object representing this user with an URL-path of ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/{id}"),"\nwhere the ",(0,a.kt)("inlineCode",{parentName:"p"},"{id}")," is replaced by the value of this field."),(0,a.kt)("h3",{id:"user-meta"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".meta")),(0,a.kt)("p",null,"Standard SCIM meta information on this object."),(0,a.kt)("h3",{id:"user-username"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".userName")),(0,a.kt)("p",null,"The format of the username value should be ",(0,a.kt)("inlineCode",{parentName:"p"},"{local-username}@{fqdn}"),".  SCIM allows\nbare usernames, as well as usernames qualified with a domain. For consistency we always\nreturn fully qualified names."),(0,a.kt)("p",null,"This attribute is unique; no other User object will have the same ",(0,a.kt)("inlineCode",{parentName:"p"},".userName"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"{local-username}")," part must fully match the regexp pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"/[a-z][a-z0-9]{0,11}/"),"\nand the full name will only contain lower case letters."),(0,a.kt)("p",null,"Example value: ",(0,a.kt)("inlineCode",{parentName:"p"},"gaa041@uib.no")),(0,a.kt)("h3",{id:"user-displayname"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".displayName")),(0,a.kt)("p",null,"For the primary account this is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},".name.formatted"),".\nFor other accounts this can be any string that is suitable for\nexplaining the purpose of this account."),(0,a.kt)("h3",{id:"user-name"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".name")),(0,a.kt)("p",null,"This is the name of the owner of this account.  This attribute is\nmandatory for primary accounts.  Example value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "formatted": "Gisle Aas",\n    "familyName": "Aas",\n    "givenName": "Gisle"\n}\n')),(0,a.kt)("p",null,"These attributes should be latinified versions of the name of the person.\nIf different, the original native name of the person can be represented by the\nnon-standard attributes ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeFormatted"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeFamilyName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeGivenName"),"."),(0,a.kt)("h3",{id:"user-active"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".active")),(0,a.kt)("p",null,"Boolean value which is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," for accounts that should be disabled.\nUsers should not be able to login using this account. Any active session\nusing this account should also be terminated."),(0,a.kt)("h3",{id:"user-externalid"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".externalId")),(0,a.kt)("p",null,"The identifier of the person that owns this account. It is preferable that\n",(0,a.kt)("inlineCode",{parentName:"p"},"/Persons/{externalId}")," fetches information on the person.  For UH-IAM this\nfield will be the UH-ID (a person oriented UUID value)."),(0,a.kt)("h3",{id:"user-emails"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".emails")),(0,a.kt)("p",null,'The email addresses associated with this account. The email addresses are\ntagged with a type field.  The tag "work" is used for the main email address,\neven for students.'),(0,a.kt)("p",null,"Example value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    { "type": "work",     "value": "Gisle.Aas@uib.no" },\n    { "type": "internal", "value": "gaa041@uib.no" },\n    { "type": "vanity",   "value": "gisle@uib.no" }\n]\n')),(0,a.kt)("h3",{id:"user-phonenumbers"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".phoneNumbers")),(0,a.kt)("p",null,'The public phone numbers associated with this account.  The phone numbers are\ntagged with a type field. The tag "work" used for preferred contact option.  The\ntag "mobile" can be used when the mobile phone is not the preferred option.\nThe tag "secure" is a phone suitable for use as 2nd-factor verification (via SMS).'),(0,a.kt)("p",null,'The phone numbers themselves are represented in the full international format\nprefixed with "+" and without internal spaces or dashes.'),(0,a.kt)("p",null,"Example value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    { "type": "work",    "value": "+4793241450" },\n    { "type": "secure",  "value": "+4793241450" },\n    { "type": "mobile",  "value": "+4793241450" }\n]\n')),(0,a.kt)("h3",{id:"user-profileurl"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".profileUrl")),(0,a.kt)("p",null,"URL of the university home page for the owner of this account."),(0,a.kt)("h3",{id:"user-entitlements"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".entitlements")),(0,a.kt)("p",null,"List of strings representing entitlements for this account. Not sure if we\nshould use this for anything."),(0,a.kt)("h3",{id:"user-roles"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".roles")),(0,a.kt)("p",null,'List of business roles associated with this user.\nApply the tags "staff", "guest" or "student" when appropriate. This\nlist of roles might be extended later.\nUniversities can introduce private roles by prefixing them with\ntheir reverse domain name, e.g. "no.uib.breiflabb".'),(0,a.kt)("h3",{id:"user-noeduscimuser"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".no:edu:scim:user")),(0,a.kt)("p",null,"This attribute contains the object where we extend the user object with\nfields specific to Norwegian UH domain. The string is also the name\nof a schema and should be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},".schemas")," attribute as well."),(0,a.kt)("h3",{id:"user-noeduscimuseraccounttype"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".no:edu:scim:user.accountType")),(0,a.kt)("p",null,'Describe what kind of account this is.\nThe value is "primary" for the primary account of a person.\nEach person can only have a single primary account.'),(0,a.kt)("p",null,'The value is "admin" for accounts to be used for privileged access and other\nadministrative puposes.'),(0,a.kt)("p",null,'The value is "test" for accounts that is used for testing only.'),(0,a.kt)("p",null,'The value is "rpa" for accounts used by automation scripts.'),(0,a.kt)("h3",{id:"user-noeduscimuseremployeenumber"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".no:edu:scim:user.employeeNumber")),(0,a.kt)("p",null,"This is the DF\xd8 ID for the employee that owns this account.\nOnly present for primary accounts."),(0,a.kt)("h3",{id:"user-noeduscimuserstudentnumber"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".no:edu:scim:user.studentNumber")),(0,a.kt)("p",null,"This is the student number for the person that owns this account.\nOnly present for primary accounts."),(0,a.kt)("h3",{id:"user-noeduscimuserfspersonnumber"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".no:edu:scim:user.fsPersonNumber")),(0,a.kt)("p",null,"This is the FS ID (personl\xf8penummer) for the person that owns this account.\nThis field can only be present for primary accounts."),(0,a.kt)("h3",{id:"user-noeduscimusernoredupersonnin"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".no:edu:scim:user.norEduPersonNIN")),(0,a.kt)("p",null,'This is the Norwegian "f\xf8dselsnummer" for the person that owns this account.\nThe identifier can be a real NIN, a D-number og S-number.\nThis field can only be present for primary accounts.'),(0,a.kt)("p",null,"This attribute value is somewhat confidential and should only be passed to clients with\nspecial reasons to require this."),(0,a.kt)("h3",{id:"user-noeduscimuseredupersonprincipalname"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".no:edu:scim:user.eduPersonPrincipalName")),(0,a.kt)("p",null,"The Feide-ID of this user account is specified in this field.\nThis field is absent for accounts not available through Feide."),(0,a.kt)("p",null,"It will have the same value as the ",(0,a.kt)("inlineCode",{parentName:"p"},"eduPersonPrincipalName")," attribute\nin LDAP and specified ",(0,a.kt)("a",{parentName:"p",href:"https://docs.feide.no/reference/schema/attributes/edupersonprincipalname.html#saml-attribute-edupersonprincipalname"},"norEdu","*"),"."),(0,a.kt)("p",null,"Example value: ",(0,a.kt)("inlineCode",{parentName:"p"},"gaa041@uib.no")),(0,a.kt)("h3",{id:"user-noeduscimuseruserprincipalname"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".no:edu:scim:user.userPrincipalName")),(0,a.kt)("p",null,"This is the login name for Microsoft login.\nThis is the same attribute as ",(0,a.kt)("inlineCode",{parentName:"p"},"userPrincipalName")," in AD and Azure AD."),(0,a.kt)("p",null,"It would be a good idea for this value to be the same as ",(0,a.kt)("inlineCode",{parentName:"p"},".eduPersonPrincipalName"),"\nbut UiB has unfortunately diverged."),(0,a.kt)("p",null,"Example value: ",(0,a.kt)("inlineCode",{parentName:"p"},"Gisle.Aas@uib.no")),(0,a.kt)("h3",{id:"user-enterprise"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".enterprise")),(0,a.kt)("p",null,"This is the standard SCIM enterprise extension object.\nThe real full name of this attribute is ",(0,a.kt)("inlineCode",{parentName:"p"},"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"),"\nbut we shortened references to it in this description to ",(0,a.kt)("inlineCode",{parentName:"p"},".enterprise"),". The wire protocol\nwill use the full name."),(0,a.kt)("p",null,"Implementations are not required to provide this extension."),(0,a.kt)("h3",{id:"user-enterpriseemployeenumber"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".enterprise.employeeNumber")),(0,a.kt)("p",null,"This is the DF\xd8 ID for the employee that owns this account.\nIf both are present, this should have the same value as ",(0,a.kt)("inlineCode",{parentName:"p"},".no:edu:scim:user.employeeNumber"),"."),(0,a.kt)("h3",{id:"user-enterprisecostcenter"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".enterprise.costCenter")),(0,a.kt)("p",null,"This is the account number used for expenses related to the owner of this account.\nNot sure if this is useful."),(0,a.kt)("h3",{id:"user-enterpriseorganization"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".enterprise.organization")),(0,a.kt)("p",null,"The Norwegian name of the organisation that the owner of this account belongs to.\nFor staff and students this will be the name of the school.  For guest this\nmight be the name of the organisation they come from."),(0,a.kt)("h3",{id:"user-enterprisedivision"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".enterprise.division")),(0,a.kt)("p",null,"The Norwegian name of primary faculty that the owner of this account belongs to."),(0,a.kt)("h3",{id:"user-enterprisedepartement"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".enterprise.departement")),(0,a.kt)("p",null,"The Norwegian name of primary institute that the owner of this account belongs to."),(0,a.kt)("h3",{id:"user-enterprisemanager"},"User ",(0,a.kt)("inlineCode",{parentName:"h3"},".enterprise.manager")),(0,a.kt)("p",null,"For primary accounts, this is set to reference the primary user account of the manager of the person that owns this account.\nAll non-primary accounts should set this to reference the primary account of their owner."),(0,a.kt)("p",null,"Additional information on the manager can be obtained from ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/{enterprise.manager.id}"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},".enterprise.manager.displayName")," is just a copy of the ",(0,a.kt)("inlineCode",{parentName:"p"},".displayName")," of the manager account itself."),(0,a.kt)("p",null,"Example value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "452ff2749bfb11eabbd5600308a4105a",\n    "displayName": "Nina Kaurel"\n}\n')))}m.isMDXComponent=!0}}]);