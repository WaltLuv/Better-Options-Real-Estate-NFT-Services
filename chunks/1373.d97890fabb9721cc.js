"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1373],{83287:function(e,t,n){n.d(t,{W:function(){return s}});var r=n(6475),i=n(65007);class s extends i.Z{constructor(e){let{chains:t=r.gL9,options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}},56856:function(e,t,n){n.d(t,{A:function(){return o},C:function(){return c},R:function(){return h},S:function(){return u},U:function(){return d},a:function(){return a}});var r=n(42009);class i extends Error{constructor(e,t){let{cause:n,code:r,data:i}=t;if(!Number.isInteger(r))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(n)}`),this.cause=n,this.code=r,this.data=i}}class s extends i{constructor(e,t){let{cause:n,code:r,data:i}=t;if(!(Number.isInteger(r)&&r>=1e3&&r<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:n,code:r,data:i})}}class o extends Error{constructor(){super(...arguments),(0,r._)(this,"name","AddChainError"),(0,r._)(this,"message","Error adding chain")}}class c extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super(`Chain "${t}" not configured for connector "${n}".`),(0,r._)(this,"name","ChainNotConfigured")}}class a extends Error{constructor(){super(...arguments),(0,r._)(this,"name","ConnectorNotFoundError"),(0,r._)(this,"message","Connector not found")}}class h extends i{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,r._)(this,"name","ResourceUnavailable")}}class u extends s{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,r._)(this,"name","SwitchChainError")}}class d extends s{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,r._)(this,"name","UserRejectedRequestError")}}},4646:function(e,t,n){n.d(t,{n:function(){return r}});function r(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},32252:function(e,t,n){n.d(t,{g:function(){return s},i:function(){return i}});var r=n(6475);function i(e){let t=new URL(e).hostname;return t.endsWith(".thirdweb.com")||"localhost"===t||"0.0.0.0"===t}function s(e){return(0,r.OZ$)(e).map(e=>{try{let t=new URL(e);return t.hostname.endsWith(".thirdweb.com")&&(t.pathname="",t.search=""),t.toString()}catch(t){return e}})}},91373:function(e,t,n){n.d(t,{FrameConnector:function(){return l}});var r=n(16074),i=n(42009),s=n(19485),o=n(241),c=n(16441),a=n(32252),h=n(83287),u=n(4646),d=n(56856);n(65007);var m=new WeakMap;class l extends h.W{constructor(e){let{chains:t,options:n,connectorStorage:o}=e,c={shimDisconnect:!0,...n};super({chains:t,options:c}),(0,i._)(this,"id","frame"),(0,i._)(this,"name","Frame"),(0,i._)(this,"ready",!0),(0,i._)(this,"shimDisconnectKey",`${this.id}.shimDisconnect`),(0,r._)(this,m,{writable:!0,value:void 0}),(0,i._)(this,"onAccountsChanged",e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:s.getAddress(e[0])})}),(0,i._)(this,"onChainChanged",e=>{let t=(0,u.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})}),(0,i._)(this,"onDisconnect",()=>{this.emit("disconnect"),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey)}),this.connectorStorage=o}async connect(e){try{let t=await this.getProvider();if(!t)throw new d.a;this.setupListeners(),this.emit("message",{type:"connecting"});let n=await t.request({method:"eth_requestAccounts"}),r=s.getAddress(n[0]),i=await this.getChainId(),o=this.isChainUnsupported(i);if(e?.chainId&&i!==e?.chainId){let t=await this.switchChain(e?.chainId);i=t.chainId,o=this.isChainUnsupported(i)}return this.options.shimDisconnect&&this.connectorStorage.setItem(this.shimDisconnectKey,"true"),{account:r,provider:t,chain:{id:i,unsupported:o}}}catch(e){if(this.isUserRejectedRequestError(e))throw new d.U(e);if(-32002===e.code)throw new d.R(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.isInjected()||e.close(),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new d.a;let t=await e.request({method:"eth_accounts"});return s.getAddress(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new d.a;let t=await e.request({method:"eth_chainId"});return(0,u.n)(t)}async getProvider(){return(0,r.a)(this,m,this.isInjected()?this.injectedProvider():await this.createProvider()),(0,r.b)(this,m)}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new o.Q(t,e).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new d.a;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new d.a;let n=c.hexValue(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(t=>this.on("change",n=>{let{chain:r}=n;r?.id===e&&t()}))]),this.chains.find(t=>t.chainId===e)??{chainId:e,name:`Chain ${n}`,slug:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(i){let r=this.chains.find(t=>t.chainId===e);if(!r)throw new d.C({chainId:e,connectorId:this.id});if(4902===i.code)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:(0,a.g)(r),blockExplorerUrls:this.getBlockExplorerUrls(r)}]});let i=await this.getChainId();if(i!==e)throw new d.U(Error("User rejected switch after adding network."));return r}catch(e){if(this.isUserRejectedRequestError(e))throw new d.U(e);throw new d.A(e.message)}if(this.isUserRejectedRequestError(i))throw new d.U(i);throw new d.S(i)}}async watchAsset(e){let{address:t,decimals:n=18,image:r,symbol:i}=e,s=await this.getProvider();if(!s)throw new d.a;return s.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:n,image:r,symbol:i}}})}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}injectedProvider(){return window?.ethereum}isInjected(){return!!this.injectedProvider()?.isFrame}async createProvider(){let e=(await n.e(215).then(n.t.bind(n,215,23))).default;return e("frame")}}}}]);