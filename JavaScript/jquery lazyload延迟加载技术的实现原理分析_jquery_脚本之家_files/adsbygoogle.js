(function(){var m=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return q.apply(null,arguments)};var t=(new Date).getTime();var da=function(){},u=function(a,b,c){switch(typeof b){case "string":ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var f="",h=0;h<d;h++)c.push(f),u(a,b[h],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(h=b[f],"function"!=typeof h&&(c.push(d),ea(f,c),c.push(":"),u(a,h,c),d=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},x={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ea=function(a,b){b.push('"');b.push(a.replace(fa,function(a){if(a in x)return x[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return x[a]=f+b.toString(16)}));b.push('"')};var ga=/&/g,ha=/</g,ia=/>/g,ja=/"/g,ka=/'/g,la=/\x00/g,A={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},B={"'":"\\'"};var D=function(a){D[" "](a);return a};D[" "]=function(){};var E=function(a){try{var b;if(b=!!a&&null!=a.location.href)t:{try{D(a.foo);b=!0;break t}catch(c){}b=!1}return b}catch(d){return!1}};var ma=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b};var na=document,F=window;var G=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},H=function(a){return!!a&&"function"==typeof a&&!!a.call},oa=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},I=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(f){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},pa=function(a){a.google_unique_id?
++a.google_unique_id:a.google_unique_id=1},J=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},qa=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},K=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},ra=/(^| )adsbygoogle($| )/;var sa={google_analytics_domain_name:!0,google_analytics_uacct:!0},ta=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];G(a,function(a,d){if(null!=a){var f;try{var h=[];u(new da,a,h);f=h.join("")}catch(g){}f&&oa(b,d,"=",f,";")}});return b.join("")};var L=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},M=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},ua=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,va=function(a,b){if(!a)return b;var c=a.match(ua);return c?c[0]:b};var wa=L("0.15"),xa=L("0.01"),ya=L("0.01"),za=L("0.001"),Aa=L("0.05"),Ba=L("0.01"),Ca=L("0.05"),Da=L("0.001"),Ea=L("0.001"),Fa=L("0.2"),Ga=M("true",
!0),Ha=L("0.01"),Ia=parseInt("100",10),Ja=isNaN(Ia)?100:Ia;var Ka=M("false",!1);var La=!!window.google_async_iframe_id,Ma=function(a,b,c){var d=["<iframe"],f;for(f in a)a.hasOwnProperty(f)&&oa(d,f+"="+a[f]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var N=!0,Na={},Qa=function(a,b,c,d){var f=Oa,h,g=N;try{h=b()}catch(e){try{var l=ma(e);b="";e.fileName&&(b=e.fileName);var k=-1;e.lineNumber&&(k=e.lineNumber);g=f(a,l,b,k,c)}catch(p){try{var C=ma(p);a="";p.fileName&&(a=p.fileName);c=-1;p.lineNumber&&(c=p.lineNumber);Oa("pAR",C,a,c,void 0,void 0)}catch(y){Pa({context:"mRE",msg:y.toString()+"\n"+(y.stack||"")},void 0)}}if(!g)throw e;}finally{if(d)try{d()}catch(z){}}return h},Oa=function(a,b,c,d,f,h){var g={};if(f)try{f(g)}catch(e){}g.context=a;g.msg=
b.substring(0,512);c&&(g.file=c);0<d&&(g.line=d.toString());g.url=na.URL.substring(0,512);g.ref=na.referrer.substring(0,512);Ra(g);Pa(g,h);return N},Pa=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+Sa(a),d="http"+("http:"==F.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,c=d=d.substring(0,2E3);F.google_image_requests||(F.google_image_requests=[]);var f=F.document.createElement("img");f.src=c;F.google_image_requests.push(f)}}catch(h){}},Ra=function(a){var b=
a||{};G(Na,function(a,d){b[d]=F[a]})},Ta=function(a,b){return function(){var c=arguments;return Qa(a,function(){return b.apply(void 0,c)},void 0,void 0)}},O=function(a,b){return Ta(a,b)},Sa=function(a){var b="";G(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var P=null,Ua=function(){if(!P){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,E(a))b=a;else break;P=b}return P};var Va=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body).clientHeight},Q=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body).clientWidth};var R={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var S=/^([0-9.]+)px$/,Wa=/^([0-9.]+)$/,Xa=function(a){return(a=S.exec(a))?Number(a[1]):null},Ya=function(a){return(a=Xa(a))?Math.round(a):null},T=function(a,b,c){for(var d=0;d<c.length;d++){var f="google_ad_"+c[d];if(!b.hasOwnProperty(f)){var h=Ya(a[c[d]]);null!=h&&(b[f]=h)}}};var Za={rectangle:1,horizontal:2,vertical:4},$a=[{width:970,height:90,format:2,i:9},{width:728,height:90,format:2,i:4},{width:468,height:60,format:2,i:7},{width:336,height:280,format:1,i:1},{width:320,height:50,format:2,i:3},{width:300,height:600,format:4,i:2},{width:300,height:250,format:1,i:5},{width:250,height:250,format:1,i:11},{width:234,height:60,format:2,i:8},{width:200,height:200,format:1,i:13},{width:180,height:150,format:1,i:10},{width:160,height:600,format:4,i:6},{width:125,height:125,
format:1,i:15},{width:120,height:600,format:4,i:12},{width:120,height:240,format:4,i:14}],ab=function(a,b){return a<=b},bb=function(a,b,c){if("auto"==c)return c=Q(a),c=Math.min(1200,c),.25>=b/c?4:3;b=0;for(var d in Za)-1!=c.indexOf(d)&&(b|=Za[d]);return b},eb=function(a,b,c,d,f,h,g){c=$a.sort(c);for(var e=0;e<c.length;e++){var l=c[e],k;if(k=b(c[e].width,a)&&l.format&d)if(k=l,h&&g){var p=h.google_responsive_optimization_experiment;k=("EMATF"==p||"EMATF100"==p||cb(p))&&488>Q(f)&&db(g,f)?250>k.height:
!0}else k=!0;if(k)return l}return null},fb=function(a,b){return b.width-a.width||b.height-a.height},gb=function(a,b,c,d,f){b=bb(c,a,b);d&&(d.google_responsive_formats=b);return eb(a,ab,fb,b,c,d,f)},hb=function(a,b){return a.i-b.i},ib=function(a,b){var c=a/b;return.66<=c&&1>=c},jb=function(a,b,c,d,f){b=bb(c,a,b);d&&(d.google_responsive_formats=b);var h=eb(a,ib,hb,b,c,d,f);return null==h?eb(a,ab,fb,b,c,d,f):h},db=function(a,b){var c=Math.min(Va(b),16*Q(b)/9),d=b.document.documentElement.getBoundingClientRect(),
f=a.getBoundingClientRect();return(d&&f?f.top-d.top:0)<c-100},cb=function(a){return"IC"==a||"IEA"==a||"IEB"==a};N=!M("false",!1);Na={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var kb=function(a,b,c){c||(c=Ka?"https":"http");return[c,"://",a,b].join("")};var U=null;var V=function(a){this.k=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:q(this.v,this)});this.s=a.google_iframe_oncopy},lb;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(W)&&(-1!=W.indexOf("&")&&(W=W.replace(ga,"&amp;")),-1!=W.indexOf("<")&&(W=W.replace(ha,"&lt;")),-1!=W.indexOf(">")&&(W=W.replace(ia,"&gt;")),-1!=W.indexOf('"')&&(W=W.replace(ja,"&quot;")),-1!=W.indexOf("'")&&(W=W.replace(ka,"&#39;")),-1!=W.indexOf("\x00")&&(W=W.replace(la,"&#0;")));lb=W;V.prototype.set=function(a,b){this.s.handlers[a]=b;this.k.addEventListener&&this.k.addEventListener("load",q(this.t,this,a),!1)};
V.prototype.t=function(a){a=this.k.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};V.prototype.v=function(a,b){var c=mb("rx",a),d;t:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break t}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var mb=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var X;t:{var nb=m.navigator;if(nb){var ob=nb.userAgent;if(ob){X=ob;break t}}X=""}var Y=function(a){return-1!=X.indexOf(a)};var pb=Y("Opera")||Y("OPR"),qb=Y("Trident")||Y("MSIE"),rb=Y("Gecko")&&-1==X.toLowerCase().indexOf("webkit")&&!(Y("Trident")||Y("MSIE")),sb=-1!=X.toLowerCase().indexOf("webkit");(function(){var a="",b;if(pb&&m.opera)return a=m.opera.version,"function"==aa(a)?a():a;rb?b=/rv\:([^\);]+)(\)|;)/:qb?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:sb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(X))?a[1]:"");return qb&&(b=(b=m.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Z,$=function(a){this.l=[];this.k=a||window;this.j=0;this.m=null;this.n=0},tb=function(a,b){this.u=a;this.r=b};$.prototype.A=function(a,b){0!=this.j||0!=this.l.length||b&&b!=window?this.q(a,b):(this.j=2,this.p(new tb(a,window)))};$.prototype.q=function(a,b){this.l.push(new tb(a,b||this.k));ub(this)};$.prototype.B=function(a){this.j=1;if(a){var b=O("sjr::timeout",q(this.o,this,!0));this.m=this.k.setTimeout(b,a)}};
$.prototype.o=function(a){a&&++this.n;1==this.j&&(null!=this.m&&(this.k.clearTimeout(this.m),this.m=null),this.j=0);ub(this)};$.prototype.C=function(){return!(!window||!Array)};$.prototype.D=function(){return this.n};$.prototype.nq=$.prototype.A;$.prototype.nqa=$.prototype.q;$.prototype.al=$.prototype.B;$.prototype.rl=$.prototype.o;$.prototype.sz=$.prototype.C;$.prototype.tc=$.prototype.D;var ub=function(a){var b=O("sjr::tryrun",q(a.w,a));a.k.setTimeout(b,0)};
$.prototype.w=function(){if(0==this.j&&this.l.length){var a=this.l.shift();this.j=2;var b=O("sjr::run",q(this.p,this,a));a.r.setTimeout(b,0);ub(this)}};$.prototype.p=function(a){this.j=0;a.u()};
var vb=function(a){try{return a.sz()}catch(b){return!1}},wb=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&vb(a)&&H(a.nq)&&H(a.nqa)&&H(a.al)&&H(a.rl)},xb=function(){if(Z&&vb(Z))return Z;var a=Ua(),b=a.google_jobrunner;return wb(b)?Z=b:a.google_jobrunner=Z=new $(a)},yb=function(a,b){xb().nq(a,b)},zb=function(a,b){xb().nqa(a,b)};var Ab=La?1==J(F):!J(F),Bb=function(){var a=D("script"),b;b=va("","pagead2.googlesyndication.com");return["<",a,' src="',kb(b,"/pagead/js/r20141014/r20140417/show_ads_impl.js",""),'"></',a,">"].join("")},Cb=function(a,b,c,d){return function(){var f=!1;d&&xb().al(3E4);var h=a.document.getElementById(b);h&&!E(h.contentWindow)&&3==
a.google_top_js_status&&(a.google_top_js_status=6);try{if(E(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,e=g.document;e.body&&e.body.firstChild||(e.open(),g.google_async_iframe_close=!0,e.write(c))}else{var l=a.document.getElementById(b).contentWindow,k;h=c;h=String(h);if(h.quote)k=h.quote();else{g=['"'];for(e=0;e<h.length;e++){var p=h.charAt(e),C=p.charCodeAt(0),y=e+1,z;if(!(z=A[p])){var n;if(31<C&&127>C)n=p;else{var s=p;if(s in B)n=B[s];else if(s in
A)n=B[s]=A[s];else{var v=s,r=s.charCodeAt(0);if(31<r&&127>r)v=s;else{if(256>r){if(v="\\x",16>r||256<r)v+="0"}else v="\\u",4096>r&&(v+="0");v+=r.toString(16).toUpperCase()}n=B[s]=v}}z=n}g[y]=z}g.push('"');k=g.join("")}l.location.replace("javascript:"+k)}f=!0}catch(w){l=Ua().google_jobrunner,wb(l)&&l.rl()}f&&(f=mb("google_async_rrc",c),(new V(a)).set(b,Cb(a,b,f,!1)))}},Db=function(a){var b=["<iframe"];G(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},Eb=function(a,
b,c,d){d=d?'"':"";var f=d+"0"+d;a.width=d+b+d;a.height=d+c+d;a.frameborder=f;a.marginwidth=f;a.marginheight=f;a.vspace=f;a.hspace=f;a.allowtransparency=d+"true"+d;a.scrolling=d+"no"+d;a.allowfullscreen=d+"true"+d},Gb=function(a,b,c){Fb(a,b,c,function(a,b,h){a=a.document;for(var g=b.id,e=0;!g||a.getElementById(g);)g="aswift_"+e++;b.id=g;b.name=g;g=Number(h.google_ad_width);e=Number(h.google_ad_height);16==h.google_reactive_ad_format?(h=a.createElement("div"),h.innerHTML=Ma(b,g,e),c.appendChild(h.firstChild)):
c.innerHTML=Ma(b,g,e);return b.id})},Fb=function(a,b,c,d){var f=D("script"),h={};Eb(h,b.google_ad_width,b.google_ad_height,!0);h.onload='"'+lb+'"';d=d(a,h,b);var h=b.google_override_format||!R[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used?I(["c","e"],Fa):null,g=b.google_ad_output,e=b.google_ad_format;e||"html"!=g&&null!=g||(e=b.google_ad_width+"x"+b.google_ad_height,"e"==h&&(e+="_as"));g=!b.google_ad_slot||b.google_override_format||!R[b.google_ad_width+"x"+b.google_ad_height]&&
"aa"==b.google_loader_used;e=e&&g?e.toLowerCase():"";b.google_ad_format=e;for(var e=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],g=[],l=0,k=c;k&&25>l;k=k.parentNode,++l)g.push(9!=k.nodeType&&k.id||"");(g=g.join())&&e.push(g);b.google_ad_unit_key=qa(e.join(":")).toString();e=a.google_adk2_experiment=a.google_adk2_experiment||I(["C","E"],Ea)||"N";if("E"==e){e=[];for(g=0;c&&25>g;++g){l=(l=9!=c.nodeType&&c.id)?"/"+l:"";t:{var p=c.parentElement,k=c.nodeName.toLowerCase();
if(p)for(var p=p.childNodes,C=0,y=0;y<p.length;++y){var z=p[y];if(z.nodeName&&z.nodeName.toLowerCase()==k){if(c==z){k="."+C;break t}++C}}k=""}e.push((c.nodeName&&c.nodeName.toLowerCase())+l+k);c=c.parentElement}c=e.join()+":";e=a;g=[];if(e)try{for(var n=e.parent,l=0;n&&n!=e&&25>l;++l){for(var s=n.frames,k=0;k<s.length;++k)if(e==s[k]){g.push(k);break}e=n;n=e.parent}}catch(v){}b.google_ad_unit_key_2=qa(c+g.join()).toString()}else"C"==e&&(b.google_ad_unit_key_2="ctrl");b=ta(b);var r;if(n=Ab){if(!U)i:{s=
[F.top];n=[];for(c=0;e=s[c++];){n.push(e);try{if(e.frames)for(var w=e.frames.length,g=0;g<w&&1024>s.length;++g)s.push(e.frames[g])}catch(Sb){}}for(w=0;w<n.length;w++)try{if(r=n[w].frames.google_esf){U=r;break i}}catch(Tb){}U=null}n=!U}n?(r={},Eb(r,0,0,!1),r.style="display:none",r.id="google_esf",r.name="google_esf",w=kb(va("","googleads.g.doubleclick.net"),"/pagead/html/r20141014/r20140417/zrt_lookup.html"),
r.src=w,r=Db(r)):r="";w=(new Date).getTime();n=a.google_top_experiment;if(s=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;c=a.google_always_use_delayed_impressions_experiment;e=a.google_auto_width_experiment;g=a.google_floating_ads_js_experiment;h=["<!doctype html><html><body>",r,"<",f,">",b,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',t,";",n?'google_top_experiment="'+n+'";':"",s?'google_async_for_oa_experiment="'+
s+'";':"",c?'google_always_use_delayed_impressions_experiment="'+c+'";':"",h?'google_append_as_for_format_override="'+h+'";':"",e?'google_auto_width_experiment="'+e+'";':"",g?'google_floating_ads_js_experiment="'+g+'";':"","google_bpp=",w>t?w-t:1,";google_async_rrc=0;</",f,">",Bb(),"</body></html>"].join("");(a.document.getElementById(d)?yb:zb)(Cb(a,d,h,!0))},Hb=function(){if(void 0===window.google_auto_width_experiment){var a=["C","E"],b=xa;window.google_auto_width_experiment=I(a,b);if(window.google_auto_width_experiment)return window.google_auto_width_experiment;
b=ya;a=["CI","EI"];window.google_auto_width_experiment=I(a,b);return window.google_auto_width_experiment}return""},Ib=Math.floor(1E6*Math.random()),Jb=function(a){for(var b=a.data.split("\n"),c={},d=0;d<b.length;d++){var f=b[d].indexOf("=");-1!=f&&(c[b[d].substr(0,f)]=b[d].substr(f+1))}b=c[3];if(c[1]==Ib&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();
window.google_top_js_callbacks.length=0}},Kb=function(a,b){var c=navigator;if(Ga&&a&&b&&c){var d=a.document,c=d.createElement("script"),f;(f=b)?(f=f.toLowerCase())&&"ca-"!=f.substring(0,3)&&(f="ca-"+f):f="";c.async=!0;c.type="text/javascript";c.src=kb("www.gstatic.com","/pub-config/"+f+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var Lb=function(a){return ra.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},Nb=function(a,b,c){pa(c);Mb(a,b,c);var d=K(a,c);if(!d||"none"!=d.display||"on"==b.google_adtest||0<b.google_reactive_ad_format){1==J(c)&&Kb(c,b.google_ad_client);G(sa,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";if((d=b.google_ad_output)&&"html"!=d)throw Error("No support for google_ad_output="+d);Qa("aa::main",function(){Gb(c,b,a)})}else c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag"))},
Mb=function(a,b,c){for(var d=a.attributes,f=d.length,h=0;h<f;h++){var g=d[h];if(/data-/.test(g.nodeName)){var e=g.nodeName.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(e)||(g=g.nodeValue,"google_reactive_ad_format"==e&&(g=+g,g=isNaN(g)?null:g),null===g||(b[e]=g))}}if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=Q(c),void 0===window.google_floating_ads_js_experiment&&(window.google_floating_ads_js_experiment=I(["4091000","4091001"],Ha)),"4091001"==
window.google_floating_ads_js_experiment?b.google_ad_height=Ja:b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=Q(c),b.google_ad_height=Va(c),a.style.display="none";else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)){void 0===b.google_responsive_optimization_experiment&&(f=488>Q(window),d=320==Q(window),
h=["C","E1"],(h=f?null:I(h,za))||(h=["C320","E320"],h=f?I(h,Aa):null),h||(h=I(["CMATF","EMATF","EMATF100"],Ca),e="horizontal"==b.google_ad_format,h=h&&!e&&f&&db(a,c)?h:null),(f=h)||(f=["IC","IEA","IEB"],h=a.offsetWidth,f=d&&300<=h&&320>h?I(f,Da):null),b.google_responsive_optimization_experiment=f||I(["SC","SE"],Ba)||"-");g=a.offsetWidth;d=b.google_ad_format;f=gb;"E1"==b.google_responsive_optimization_experiment&&(f=jb);e=f(g,d,c,b,a);if(!e)throw Error("Cannot find a responsive size for a container of width="+
g+"px and data-ad-format="+d);d=b.google_responsive_optimization_experiment;("C320"==d||"E320"==d?320==e.width&&50==e.height:!cb(d)||234==e.width&&60==e.height)||(b.google_responsive_optimization_experiment=void 0);d=b.google_responsive_optimization_experiment;f="SE"==d?e.width:300<g&&300<e.height?e.width:1200<g?1200:Math.round(g);h="E320"!=d&&"EMATF100"!=d||320!=e.width||50!=e.height?e.height:100;if(cb(d))if(234!=e.width||60!=e.height)b.google_responsive_optimization_experiment=null;else{if(e="IC"!=
d){e=Q(c);if(!(g=!(320==e&&300<=g&&320>g)))i:{for(var g=a,l=0;10>l&&g.parentElement;l++){var g=g.parentElement,k=K(g,c);if(!k)break;k=k.overflowX||k.overflow;if("hidden"==k||"scroll"==k||"auto"==k)break;if(g.clientWidth>=e){g=!1;break i}}g=!0}g?e=!1:(c=K(a,c),g=a.getBoundingClientRect(),c&&g?(g=g.left,0>=g?e=!1:(e-=g+a.offsetWidth,"rtl"!=c.direction?(c=Xa(c.marginLeft)||0,a.style.marginLeft=c-g+"px"):(c=Xa(c.marginRight)||0,a.style.marginRight=c-e+"px"),e=!0)):e=!1)}e&&(f=320,h="IEA"==d?50:100)}b.google_ad_width=
f;b.google_ad_height=h;a.style.height=b.google_ad_height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else!Wa.test(b.google_ad_width)&&!S.test(a.style.width)||!Wa.test(b.google_ad_height)&&!S.test(a.style.height)?(c=K(a,c),a.style.width=c.width,a.style.height=c.height,T(c,b,["width","height"]),b.google_loader_features_used=256):"E"==Hb()||Ob(c)?(d="CI"!=c.google_auto_width_experiment,f=a.style,T(f,b,["height"]),h=a.style.width,a.style.width="100%",e=a.offsetWidth,
a.style.width=h,h=e,e=Ya(f.width),g=Ya(f.height),!g||!e||50>g||120>h||R[e+"x"+g]?(T(f,b,["width"]),a=!1):(h=Math.min(1200,h),300<g&&(h=Math.min(300,h)),h<=e?(T(f,b,["width"]),a=!1):(d?(b.google_ad_width=h,b.google_original_width=e,a.style.width=h+"px"):(b.google_ad_width=e,b.google_available_width=h),a=!0)),!a&&Ob(c)&&(c.google_auto_width_experiment=null)):T(a.style,b,["width","height"])},Ob=function(a){a=a.google_auto_width_experiment;return"EI"==a||"CI"==a},Pb=function(a){for(var b=document.getElementsByTagName("ins"),
c=0,d=b[c];c<b.length;d=b[++c])if(Lb(d)&&(!a||d.id==a))return d;return null},Qb=function(a){var b=a.element;a=a.params||{};if(b){if(!Lb(b)&&(b=b.id&&Pb(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=Pb(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");var c=window;b.setAttribute("data-adsbygoogle-status",
"done");Nb(b,a,c)},Rb=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:E(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=F.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=I(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],wa),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",Jb,!1):a.attachEvent&&a.attachEvent("onmessage",
Jb);window.google_top_js_status=3;a={0:"google_loc_request",1:Ib};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{Qb(a)}catch(f){throw window.setTimeout(Rb,0),f;}window.adsbygoogle={push:Qb}};Rb();})();
