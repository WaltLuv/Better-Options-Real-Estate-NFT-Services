(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8621],{23716:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/artwork/[tokenId]",function(){return r(18219)}])},18219:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eb}});var i,n,s,o,a,d,l,c,p,h,m=r(85893),u=r(11163),f=r(34871),y=r.n(f),g=r(68001),b=r(73934),w=Object.defineProperty,v=Object.defineProperties,k=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&O(e,r,t[r]);if(x)for(var r of x(t))E.call(t,r)&&O(e,r,t[r]);return e},S=(e,t)=>v(e,k(t)),N=(i=(e,t)=>{t.exports={name:"@paperxyz/js-client-sdk",description:"Paper JS SDK for Checkout Elements",version:"0.2.5",license:"Apache-2.0",main:"dist/index.js",module:"dist/index.mjs",types:"dist/index.d.ts",files:["dist/**"],bugs:{url:"https://github.com/paperxyz/js-sdk/issues"},homepage:"https://github.com/paperxyz/js-sdk",repository:{type:"git",url:"git+https://github.com/paperxyz/js-sdk.git"},author:"Paper <team@withpaper.com>",scripts:{build:"tsup src/index.ts --env.NODE_ENV production","build-package-checkout":"yarn build","dev-checkout":"tsup src/index.ts --env.NODE_ENV development --watch",lint:'eslint "src/**/*.ts*"',"lint:fix":"yarn lint --fix",clean:"rm -rf .turbo && rm -rf node_modules && rm -rf dist",prepare:"cd ../../ && node ./scripts/postInstall && cd ./packages/js-client-sdk"},keywords:[],devDependencies:{"@paperxyz/tsconfig":"*","eslint-config-paperxyz":"*",typescript:"^4.7.4"},dependencies:{"@paperxyz/sdk-common-utilities":"*",ethers:"^5.7.2"},publishConfig:{access:"public"}}},()=>(n||i((n={exports:{}}).exports,n),n.exports)),j=(0,b.OB)(),A=((s=A||{}).UserAbandonedCheckout="User abandoned the checkout",s.UserLoginFailed="User login failed",s.InvalidProps="The props you passed in to this component are not valid.",s.InvalidCard="The card information is invalid. Please double check that the Card, CVC, and Zip code are all correct.",s.EmailNotVerified="The email was unable to be verified.",s.NotEnoughSupply="There is not enough supply to claim.",s.AddressNotAllowed="This address is not on the allowlist.",s.NoActiveClaimPhase="There is no active claim phase at the moment.",s),I=((o=I||{}).ErrorConnectingToWallet="Error connecting to wallet",o.ErrorSendingTransaction="Something went wrong sending transaction",o.InsufficientBalance="Insufficient ETH",o.TransactionCancelled="Transaction Cancelled",o.WrongChain="Wrong Chain Detected",o.ChainSwitchUnderway="There is a network switch already underway",o.PendingSignature="Pending Signature",o),T=class{constructor(e){this.link=e}addStylingOptions(e){e.colorPrimary&&this.link.searchParams.set("colorPrimary",e.colorPrimary),e.colorBackground&&this.link.searchParams.set("colorBackground",e.colorBackground),e.colorText&&this.link.searchParams.set("colorText",e.colorText),void 0!==e.borderRadius&&this.link.searchParams.set("borderRadius",e.borderRadius.toString()),e.fontFamily&&this.link.searchParams.set("fontFamily",e.fontFamily),e.inputBackgroundColor&&this.link.searchParams.set("inputBackgroundColor",e.inputBackgroundColor),e.inputBorderColor&&this.link.searchParams.set("inputBorderColor",e.inputBorderColor)}addClientSecret(e){this.link.searchParams.set("sdkClientSecret",e)}addLocale(e){e&&this.link.searchParams.set("locale",e.toString())}addOTP(){this.link.searchParams.set("withOTP","true")}addAppName(e){e&&this.link.searchParams.set("appName",e)}addShowConnectWalletOptions(e){this.link.searchParams.append("showConnectWalletOptions",e.toString())}addReceivingWalletType(e){this.link.searchParams.append("walletType",e||"Preset")}addRecipientWalletAddress(e){this.link.searchParams.set("recipientWalletAddress",e)}addPayerWalletAddress(e){this.link.searchParams.append("payerWalletAddress",e)}addDate(e){this.link.searchParams.set("date",e?e.toString():Date.now().toString())}getLink(){return this.link}},_=({url:e,width:t=440,height:r=700})=>{if(!(null!=window&&window.top))return null;let i=window.top.outerHeight/2+window.top.screenY-r/2,n=window.top.outerWidth/2+window.top.screenX-t/2;return window.open(e,"_blank",`popup=true,width=${t},height=${r},top=${i},left=${n}`)};function R(e,t,r){var i;null==(i=e.contentWindow)||i.postMessage(C({eventType:t},r),"*")}var D=N(),B=class{constructor({elementOrId:e,onLoad:t}){this.elementOrId=e,this.onLoad=t}createPaymentElement({handler:e,link:t,iframeId:r}){let i=document.createElement("iframe");if(i.src=t.href,i.id=r,i.allow="payment",i.setAttribute("style","margin-left:auto; margin-right:auto; width:100%; height: 100%; min-height:375px; transition-property:all; transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1); transition-duration:150ms; color-scheme: light;"),i.onload=e=>{this.onLoad&&this.onLoad(e)},i.setAttribute("data-paper-sdk-version",`@paperxyz/js-client-sdk@${D.version}`),!this.elementOrId)return window.addEventListener("message",e(i)),i;let n=this.elementOrId;if("string"==typeof n){let e=document.getElementById(n);if(!e)throw Error("Invalid id given");n=e}let s=n.querySelector("#"+r);return s?(s.src===t.href||(s.src=t.href),s):(window.addEventListener("message",e(i)),n.appendChild(i))}},U={top:"0px",left:"0px",right:"0px",bottom:"0px"},W=()=>({main:S(C({},U),{position:"fixed",zIndex:"10000",display:"flex",alignItems:"center",justifyContent:"center"}),overlay:S(C({},U),{position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.33)"}),body:{background:"transparent",borderRadius:"12px",position:"relative",overflow:"hidden",width:"100%",maxWidth:"500px",height:"700px",maxHeight:"80%",animation:"pew-modal-slideIn 0.2s forwards"},spinner:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",margin:"auto",borderWidth:"3px",borderColor:"#2D3748 #2D3748 transparent transparent",borderRadius:"50%",width:"30px",height:"30px",animation:"spin 1s linear infinite"},iframe:{position:"relative",height:"100%",width:"100%",border:"none",background:"transparent"}}),M=`
  @keyframes pew-modal-slideIn {
    from {opacity: 0; transform: translate3d(0, 20px, 0);}
    to {opacity: 1; transform: translate3d(0, 0, 0);}
  }

  @keyframes pew-modal-slideOut {
    from {opacity: 1; transform: translate3d(0, 0, 0);}
    to {opacity: 0; transform: translate3d(0, 20px, 0);}
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,L="paper-js-sdk-modal",z=class{constructor(e,t){this.styles=W(),this.container=e||document.body,t&&this.mergeStyles(t),this.main=document.createElement("div"),this.main.id=L,this.overlay=document.createElement("div"),this.overlay.id=`${L}-overlay`,this.body=document.createElement("div"),this.body.id=`${L}-body`,this.spinner=document.createElement("div"),this.spinner.id=`${L}-spinner`,this.iframe=document.createElement("iframe"),this.iframe.id=`${L}-iframe`,this.iframe.allow="camera; microphone; payment",this.style=document.createElement("style"),this.style.innerHTML=M,this.assignStyles(this.main,this.styles.main),this.assignStyles(this.overlay,this.styles.overlay),this.assignStyles(this.body,this.styles.body),this.assignStyles(this.spinner,this.styles.spinner),this.assignStyles(this.iframe,this.styles.iframe)}open({iframeUrl:e}={}){e&&(this.body.appendChild(this.spinner),this.iframe.src=e,this.iframe.onload=()=>this.body.removeChild(this.spinner),this.body.appendChild(this.iframe)),this.addAccessibility(),this.main.appendChild(this.overlay),this.main.appendChild(this.style),this.main.appendChild(this.body),this.container.appendChild(this.main),document.body.style.overflow="hidden"}close(){this.body.style.animation="pew-modal-slideOut 0.2s forwards",window.setTimeout(()=>this.main.remove(),250)}mergeStyles(e){this.styles.body=C(C({},this.styles.body),e.body||{}),this.styles.spinner=C(C({},this.styles.spinner),e.spinner||{}),this.styles.overlay=C(C({},this.styles.overlay),e.overlay||{}),this.styles.main=C(C({},this.styles.main),e.main||{}),this.styles.iframe=C(C({},this.styles.iframe),e.iframe||{})}addAccessibility(){this.main.setAttribute("aria-hidden","true"),this.overlay.setAttribute("aria-hidden","true"),this.body.setAttribute("aria-modal","true"),this.body.setAttribute("role","dialog")}assignStyles(e,t){Object.assign(e.style,t)}};N();var H=r(67294),V=r(8417),F=r(48137),$=r(70444);function G(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function K(e,t,r){var i=[],n=(0,$.fp)(e,i,r);return i.length<2?r:n+t(i)}var Y=function e(t){for(var r="",i=0;i<t.length;i++){var n=t[i];if(null!=n){var s=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))s=e(n);else for(var o in s="",n)n[o]&&o&&(s&&(s+=" "),s+=o);break;default:s=n}s&&(r&&(r+=" "),r+=s)}}return r},q=((a=(0,V.Z)({key:"css"})).sheet.speedy=function(e){this.isSpeedy=e},a.compat=!0,{css:d=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=(0,F.O)(t,a.registered,void 0);return(0,$.My)(a,i,!1),a.key+"-"+i.name},cx:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return K(a.registered,d,Y(t))},injectGlobal:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=(0,F.O)(t,a.registered);G(a,i)},keyframes:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=(0,F.O)(t,a.registered),n="animation-"+i.name;return G(a,{name:i.name,styles:"@keyframes "+n+"{"+i.styles+"}"}),n},hydrate:function(e){e.forEach(function(e){a.inserted[e]=!0})},flush:function(){a.registered={},a.inserted={},a.sheet.flush()},sheet:a.sheet,cache:a,getRegisteredStyles:$.fp.bind(null,a.registered),merge:K.bind(null,a.registered,d)}),X=(q.flush,q.hydrate,q.cx),J=(q.merge,q.getRegisteredStyles,q.injectGlobal,q.keyframes),Z=q.css;q.sheet,q.cache,r(48764).Buffer;var Q=Object.defineProperty,ee=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,er=Object.prototype.propertyIsEnumerable,ei=(e,t,r)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,en=(e,t)=>{for(var r in t||(t={}))et.call(t,r)&&ei(e,r,t[r]);if(ee)for(var r of ee(t))er.call(t,r)&&ei(e,r,t[r]);return e},es=(l=(e,t)=>{t.exports={name:"@paperxyz/react-client-sdk",version:"1.1.3",description:"Paper React Client SDK for Checkout Elements",license:"Apache-2.0",main:"dist/index.js",types:"./dist/index.d.ts",type:"module",files:["dist/**"],exports:{".":{import:"./dist/index.js",types:"./dist/index.d.ts"}},bugs:{url:"https://github.com/paperxyz/js-sdk/issues"},homepage:"https://github.com/paperxyz/js-sdk",repository:{type:"git",url:"git+https://github.com/paperxyz/js-sdk.git"},author:"Paper <support@withpaper.com>",keywords:[],scripts:{build:"tsup-node src/index.ts --env.NODE_ENV production --env.ESM_ONLY true ","build-package-checkout":"yarn build","dev-checkout":"tsup-node src/index.ts --env.NODE_ENV development --watch --env.ESM_ONLY true",lint:'eslint "src/**/*.ts*"',"lint:fix":"yarn lint --fix",clean:"rm -rf .turbo && rm -rf node_modules && rm -rf dist",prepare:"cd ../../ && node ./scripts/postInstall && cd ./packages/react-client-sdk"},peerDependencies:{react:">=16.0.0","react-dom":">=16.0.0"},devDependencies:{"@paperxyz/tsconfig":"*","@types/react":"18.0.26","eslint-config-paperxyz":"*",react:"^18.2.0","react-dom":"^18.2.0",typescript:"^4.7.4"},dependencies:{"@emotion/css":"11.10.5","@headlessui/react":"1.7.6","@paperxyz/js-client-sdk":"*","@paperxyz/sdk-common-utilities":"*"}}},()=>(c||l((c={exports:{}}).exports,c),c.exports)),eo=(0,H.createContext)({chainName:"Polygon",setChainName:()=>{},clientId:"",appName:""}),ea=()=>(0,H.useContext)(eo);Z`
  opacity: 0;
`,Z`
  opacity: 1;
`;var ed=Z`
  position: relative;
  width: 100%;
  height: 100%;
`;Z`
  display: grid;
  position: relative;
  width: 100%;
`,Z`
  transition-delay: 150ms;
  transition-property: opacity;
  transition-duration: 75ms;
`,Z`
  transition-property: opacity;
  transition-duration: 150ms;
`,Z`
  background-color: transparent;
  grid-column-start: 1;
  grid-row-start: 1;
`;var el=({className:e})=>(0,m.jsx)("div",{id:"loader",className:X(ec,e)}),ec=Z`
  border: 0.15rem solid #f3f3f300;
  border-top: 0.15rem solid #000000;
  border-left: 0.15rem solid #000000;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${J`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,ep=()=>(0,m.jsx)("div",{className:eh,children:(0,m.jsx)(el,{className:em})}),eh=Z`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`,em=Z`
  color: #000000;
  width: 2rem;
  height: 2rem;
`,eu=es(),ef=({sdkClientSecret:e,appName:t,options:r=en({},b.gU),onPaymentSuccess:i,onReview:n,onError:s,onBeforeModalOpen:o,onPriceUpdate:a,locale:d,configs:l})=>{let{appName:c}=ea(),[p,h]=(0,H.useState)(!0),u=(0,H.useCallback)(()=>{h(!1)},[]),f=(0,H.useRef)(null),y=t||c;return(0,H.useEffect)(()=>{let e=setTimeout(()=>{h(!1)},1e3);return()=>{clearTimeout(e)}},[]),(0,H.useEffect)(()=>{f.current&&function({onCloseKycModal:e,onOpenKycModal:t,sdkClientSecret:r,appName:i,elementOrId:n,onLoad:s,onError:o,locale:a,options:d,onPaymentSuccess:l,onReview:c,onBeforeModalOpen:p,onPriceUpdate:h,useAltDomain:m=!0,configs:u}){let f=function({sdkClientSecret:e,appName:t,options:r=C({},b.gU),locale:i,configs:n}){let s=new URL("/sdk/2022-08-12/checkout-with-card",j),o=e;if(!o&&n&&(o=btoa(JSON.stringify(n))),!o){let e=(0,b.OB)();return new URL("/error?errorMessage=Must have either sdkClientSecret or configs field set. Received neither",e)}let a=new T(s);return a.addClientSecret(null!=o?o:""),a.addStylingOptions(r),a.addLocale(i),a.addAppName(t),a.getLink()}({sdkClientSecret:r,appName:i,locale:a,options:d,useAltDomain:m,configs:u});new B({onLoad:s,elementOrId:n}).createPaymentElement({handler:r=>(function({iframe:e,onError:t,onReview:r,onPaymentSuccess:i,onBeforeModalOpen:n,onPriceUpdate:s}){let o;return a=>{if(!a.origin.startsWith(j))return;let{data:d}=a;switch(d.eventType){case"checkoutWithCardError":t&&t({code:d.code,error:d.error});break;case"paymentSuccess":i&&i({transactionId:d.id,id:d.id}),d.postToIframe&&R(e,d.eventType,d);break;case"reviewComplete":r&&r({id:d.id,cardholderName:d.cardholderName});break;case"openModalWithUrl":n&&d.url&&d.url.includes("promptKYCModal")?n({url:d.url}):(o=new z(void 0,{body:{colorScheme:"light"}})).open({iframeUrl:d.url});break;case"completedSDKModal":o.close(),d.postToIframe&&R(e,d.eventType,d);break;case"requestedPopup":_({url:d.url,width:d.width,height:d.height})||console.error("CheckoutWithCard: Unable to open popup.");break;case"sizing":e.style.height=d.height+"px",e.style.maxHeight=d.height+"px";break;case"onPriceUpdate":null==s||s(d)}}})({iframe:r,onCloseKycModal:e,onOpenKycModal:t,onError:o,onPaymentSuccess:l,onReview:c,onBeforeModalOpen:p,onPriceUpdate:h,useAltDomain:m}),iframeId:"checkout-with-card-iframe",link:f})}({sdkClientSecret:e,appName:y,elementOrId:f.current,locale:d,onError:s,onLoad:u,onPaymentSuccess:i,onReview:n,onBeforeModalOpen:o,onPriceUpdate:a,options:r,configs:l})},[f.current]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:ed,ref:f,"data-paper-sdk-version":`@paperxyz/react-client-sdk@${eu.version}`,children:p&&(0,m.jsx)(ep,{})})})};Z`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #1f2937;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`,es(),es();var ey=((p=ey||{}).THIRDWEB_NFT_DROP_V2="THIRDWEB_NFT_DROP_V2",p.THIRDWEB_EDITION_DROP_V2="THIRDWEB_EDITION_DROP_V2",p.THIRDWEB_SIGNATURE="THIRDWEB_SIGNATURE",p.CANDY_MACHINE="CANDY_MACHINE",p.AUCTION_HOUSE="AUCTION_HOUSE",p),eg=((h=eg||{}).POPUP="POPUP",h.NEW_TAB="NEW_TAB",h.MODAL="MODAL",h.DRAWER="DRAWER",h.EMBED="EMBED",h);function eb(){let e=(0,u.useRouter)(),{tokenId:t}=e.query;console.log(t);let r=(0,g.SFn)(),i=(0,g.aHo)(),{contract:n}=(0,g.cqn)("0xf477131536c385c112A3A569d44015e51838cbE2","edition-drop"),{data:s,isLoading:o}=(0,g.elG)(n,t),[a,d]=(0,H.useState)(!1);return(0,m.jsx)("div",{className:y().container,children:!o&&s?(0,m.jsxs)("div",{className:y().artContainer,children:[(0,m.jsx)("div",{className:y().artImage,children:(0,m.jsx)(g.CHu,{metadata:s.metadata,height:"100%",width:"100%"})}),(0,m.jsx)("div",{className:y().artInfo,children:(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:s.metadata.name}),r&&i&&t?a?(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{children:"Payment succesful!"}),(0,m.jsx)("button",{onClick:()=>e.push("/profile/".concat(r)),children:"View collectibles"})]}):(0,m.jsx)("div",{children:(0,m.jsx)(ef,{configs:{contractId:"b4a76ecf-c2d3-49b2-a471-8022e11a079b",walletAddress:r,contractArgs:{tokenId:t},email:i.data},onPaymentSuccess:()=>{d(!0)},onReview:e=>console.log(e),options:{colorBackground:"#ffffff",colorPrimary:"#99e0ff",colorText:"#363636",borderRadius:6,inputBackgroundColor:"#ffffff",inputBorderColor:"#b0b0b0"}})}):(0,m.jsx)("p",{children:"Login to buy this artwork"})]})})]}):(0,m.jsx)("p",{children:"Loading..."})})}},11163:function(e,t,r){e.exports=r(38355)},73934:function(e,t,r){"use strict";r.d(t,{OB:function(){return o},g1:function(){return i},gU:function(){return a}});var i={Ethereum:"https://ethereum.rpc.thirdweb.com",Goerli:"https://goerli.rpc.thirdweb.com",Mumbai:"https://mumbai.rpc.thirdweb.com",Polygon:"https://polygon.rpc.thirdweb.com",Avalanche:"https://avalanche.rpc.thirdweb.com",Optimism:"https://optimism.rpc.thirdweb.com",OptimismGoerli:"https://optimism-goerli.rpc.thirdweb.com",BSC:"https://binance.rpc.thirdweb.com",BSCTestnet:"https://binance-testnet.rpc.thirdweb.com",ArbitrumOne:"https://arbitrum.rpc.thirdweb.com",ArbitrumGoerli:"https://arbitrum-goerli.rpc.thirdweb.com",Fantom:"https://fantom.rpc.thirdweb.com",FantomTestnet:"https://fantom-testnet.rpc.thirdweb.com",Sepolia:"https://sepolia.rpc.thirdweb.com",AvalancheFuji:"https://avalanche-fuji.rpc.thirdweb.com"},n=()=>"undefined"!=typeof window&&"true"===window.localStorage.getItem("IS_PAPER_DEV"),s=()=>"undefined"!=typeof window&&window.location.origin.includes("paper.xyz"),o=()=>{var e;return n()?null!=(e=window.localStorage.getItem("PAPER_DEV_URL"))?e:"http://localhost:3000":s()?window.location.origin:"https://withpaper.com"},a={colorPrimary:"#cf3781",colorBackground:"#ffffff",colorText:"#1a202c",borderRadius:12,fontFamily:"Open Sans"}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=23716)}),_N_E=e.O()}]);