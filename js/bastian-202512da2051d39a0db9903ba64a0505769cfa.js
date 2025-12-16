var Bastian=function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict"
n.r(t)
var r=n(1),i=n.n(r),o=n(5),s=n.n(o),a=(n(7),n(8),n(22),n(60),n(70)),c=n(23),l=n(71)
const u={"authoring-toolkit/misc":()=>n(72),"authoring-toolkit/ui":()=>n(221),"adapters/headless-adapter":()=>n(59),feed:()=>n(215),"feed/authoring/card":()=>n(218).exposable,"feed/items/register":()=>n(214).registerExternalItemFactory,renderer:()=>n(82),version:()=>n(189)},h=c.Globals.document
function d(e){try{n(217).launch(e)}catch(t){Object(l.triggerDomEvent)(a.LAUNCH_FAILED,h),n(20).error("Impossible to launch Bastian",t,t.stack)}}d.require=function(e){return i()(e)&&e in u?u[e]():n(e)},Object.defineProperty(d,"version",{get:u.version}),c.Globals.bstn&&Object.defineProperty(d,"lazy",{get:c.Globals.bstn.lazy}),Object(l.triggerDomEvent)(a.APP_LOADED,h),s()(c.Globals.globalWebdeps)&&!window.isNoLoadPlayerFeed&&c.Globals.globalWebdeps("player"),t.default=d},function(e,t,n){var r=n(2),i=n(3),o=n(4)
e.exports=function(e){return"string"==typeof e||!i(e)&&o(e)&&"[object String]"==r(e)}},function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},function(e,t){var n=Array.isArray
e.exports=n},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var r=n(2),i=n(6)
e.exports=function(e){if(!i(e))return!1
var t=r(e)
return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t){e.exports=function(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}},function(e,t,n){},function(e,t,n){"use strict"
n.r(t),n.d(t,"$OnDemandSource",(function(){return h}))
var r=n(9),i=n.n(r),o=n(5),s=n.n(o),a=n(10),c=n.n(a),l=n(15),u=n(21)
class h{constructor(e){this.buffer=[],this.loadLocked=!1,this.nextFetch=null,this.nextPage=null,this.isFetchNeeded=()=>this.whenToFetch(),this.unlock=e=>(this.loadLocked=!1,e),this.isEnded=()=>this.whenToComplete()
const t=this
this.stream=c.a.create({start(e){t.listener=e},stop(){t.listener=null}}),e&&this.store(e)}store(e){const t=Object(u.castArray)(e).map(l.PostIndex.filter).filter(e=>e)
return this.buffer.push(...t),t.length}isEmpty(){return 0===this.buffer.length}setNextFetch(e){this.nextFetch=i()(e)?e:null}setNextPage(e){this.nextPage=i()(e)?e:null}request(e){if(this.listener){const t=this.listener,n=this.isEmpty()
n&&this.isEnded()?t.complete():(e&&!0===e.preventFetch&&!n||!this.isFetchNeeded()||this.fetch(e),n||t.next(this.buffer.shift()))}}whenToFetch(){throw new Error("Not implemented")}fetch(e){if(!1===this.loadLocked)return this.loadLocked=!0,this.howToFetch(e)}howToFetch(e){throw new Error("Not implemented")}whenToComplete(){throw new Error("Not implemented")}saveAndResumeStream(e,t){const n=this.isEmpty()
this.store(e),s()(t)&&t(e),n&&setTimeout(()=>{this.request()},100)}}},function(e,t,n){var r=n(2),i=n(4)
e.exports=function(e){return"number"==typeof e||i(e)&&"[object Number]"==r(e)}},function(e,t,n){"use strict"
var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)}
return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(11),o={}
function s(){}function a(e){for(var t=e.length,n=Array(t),r=0;r<t;++r)n[r]=e[r]
return n}function c(e,t,n){try{return e.f(t)}catch(r){return n._e(r),o}}t.NO=o
var l={_n:s,_e:s,_c:s}
function u(e){e._start=function(e){e.next=e._n,e.error=e._e,e.complete=e._c,this.start(e)},e._stop=e.stop}t.NO_IL=l
var h=function(){function e(e,t){this._stream=e,this._listener=t}return e.prototype.unsubscribe=function(){this._stream._remove(this._listener)},e}(),d=function(){function e(e){this._listener=e}return e.prototype.next=function(e){this._listener._n(e)},e.prototype.error=function(e){this._listener._e(e)},e.prototype.complete=function(){this._listener._c()},e}(),p=function(){function e(e){this.type="fromObservable",this.ins=e,this.active=!1}return e.prototype._start=function(e){this.out=e,this.active=!0,this._sub=this.ins.subscribe(new d(e)),this.active||this._sub.unsubscribe()},e.prototype._stop=function(){this._sub&&this._sub.unsubscribe(),this.active=!1},e}(),f=function(){function e(e){this.type="merge",this.insArr=e,this.out=o,this.ac=0}return e.prototype._start=function(e){this.out=e
var t=this.insArr,n=t.length
this.ac=n
for(var r=0;r<n;r++)t[r]._add(this)},e.prototype._stop=function(){for(var e=this.insArr,t=e.length,n=0;n<t;n++)e[n]._remove(this)
this.out=o},e.prototype._n=function(e){var t=this.out
t!==o&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){if(--this.ac<=0){var e=this.out
if(e===o)return
e._c()}},e}(),m=function(){function e(e,t,n){this.i=e,this.out=t,this.p=n,n.ils.push(this)}return e.prototype._n=function(e){var t=this.p,n=this.out
if(n!==o&&t.up(e,this.i)){for(var r=t.vals,i=r.length,s=Array(i),a=0;a<i;++a)s[a]=r[a]
n._n(s)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.p
e.out!==o&&0==--e.Nc&&e.out._c()},e}(),g=function(){function e(e){this.type="combine",this.insArr=e,this.out=o,this.ils=[],this.Nc=this.Nn=0,this.vals=[]}return e.prototype.up=function(e,t){var n=this.vals[t],r=this.Nn?n===o?--this.Nn:this.Nn:0
return this.vals[t]=e,0===r},e.prototype._start=function(e){this.out=e
var t=this.insArr,n=this.Nc=this.Nn=t.length,r=this.vals=new Array(n)
if(0===n)e._n([]),e._c()
else for(var i=0;i<n;i++)r[i]=o,t[i]._add(new m(i,e,this))},e.prototype._stop=function(){for(var e=this.insArr,t=e.length,n=this.ils,r=0;r<t;r++)e[r]._remove(n[r])
this.out=o,this.ils=[],this.vals=[]},e}(),v=function(){function e(e){this.type="fromArray",this.a=e}return e.prototype._start=function(e){for(var t=this.a,n=0,r=t.length;n<r;n++)e._n(t[n])
e._c()},e.prototype._stop=function(){},e}(),b=function(){function e(e){this.type="fromPromise",this.on=!1,this.p=e}return e.prototype._start=function(e){var t=this
this.on=!0,this.p.then((function(n){t.on&&(e._n(n),e._c())}),(function(t){e._e(t)})).then(s,(function(e){setTimeout((function(){throw e}))}))},e.prototype._stop=function(){this.on=!1},e}(),y=function(){function e(e){this.type="periodic",this.period=e,this.intervalID=-1,this.i=0}return e.prototype._start=function(e){var t=this
this.intervalID=setInterval((function(){e._n(t.i++)}),this.period)},e.prototype._stop=function(){-1!==this.intervalID&&clearInterval(this.intervalID),this.intervalID=-1,this.i=0},e}(),E=function(){function e(e,t){this.type="debug",this.ins=e,this.out=o,this.s=s,this.l="","string"==typeof t?this.l=t:"function"==typeof t&&(this.s=t)}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=this.s,r=this.l
if(n!==s)try{n(e)}catch(i){t._e(i)}else r?console.log(r+":",e):console.log(e)
t._n(e)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),_=function(){function e(e,t){this.type="drop",this.ins=t,this.out=o,this.max=e,this.dropped=0}return e.prototype._start=function(e){this.out=e,this.dropped=0,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
t!==o&&this.dropped++>=this.max&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),O=function(){function e(e,t){this.out=e,this.op=t}return e.prototype._n=function(){this.op.end()},e.prototype._e=function(e){this.out._e(e)},e.prototype._c=function(){this.op.end()},e}(),S=function(){function e(e,t){this.type="endWhen",this.ins=t,this.out=o,this.o=e,this.oil=l}return e.prototype._start=function(e){this.out=e,this.o._add(this.oil=new O(e,this)),this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.o._remove(this.oil),this.out=o,this.oil=l},e.prototype.end=function(){var e=this.out
e!==o&&e._c()},e.prototype._n=function(e){var t=this.out
t!==o&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){this.end()},e}(),w=function(){function e(e,t){this.type="filter",this.ins=t,this.out=o,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=c(this,e,t)
n!==o&&n&&t._n(e)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),I=function(){function e(e,t){this.out=e,this.op=t}return e.prototype._n=function(e){this.out._n(e)},e.prototype._e=function(e){this.out._e(e)},e.prototype._c=function(){this.op.inner=o,this.op.less()},e}(),T=function(){function e(e){this.type="flatten",this.ins=e,this.out=o,this.open=!0,this.inner=o,this.il=l}return e.prototype._start=function(e){this.out=e,this.open=!0,this.inner=o,this.il=l,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.inner!==o&&this.inner._remove(this.il),this.out=o,this.open=!0,this.inner=o,this.il=l},e.prototype.less=function(){var e=this.out
e!==o&&(this.open||this.inner!==o||e._c())},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=this.inner,r=this.il
n!==o&&r!==l&&n._remove(r),(this.inner=e)._add(this.il=new I(t,this))}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){this.open=!1,this.less()},e}(),C=function(){function e(e,t,n){var r=this
this.type="fold",this.ins=n,this.out=o,this.f=function(t){return e(r.acc,t)},this.acc=this.seed=t}return e.prototype._start=function(e){this.out=e,this.acc=this.seed,e._n(this.acc),this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o,this.acc=this.seed},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=c(this,e,t)
n!==o&&t._n(this.acc=n)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),x=function(){function e(e){this.type="last",this.ins=e,this.out=o,this.has=!1,this.val=o}return e.prototype._start=function(e){this.out=e,this.has=!1,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o,this.val=o},e.prototype._n=function(e){this.has=!0,this.val=e},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&(this.has?(e._n(this.val),e._c()):e._e(new Error("last() failed because input stream completed")))},e}(),j=function(){function e(e,t){this.type="map",this.ins=t,this.out=o,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=c(this,e,t)
n!==o&&t._n(n)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),A=function(){function e(e){this.type="remember",this.ins=e,this.out=o}return e.prototype._start=function(e){this.out=e,this.ins._add(e)},e.prototype._stop=function(){this.ins._remove(this.out),this.out=o},e}(),P=function(){function e(e,t){this.type="replaceError",this.ins=t,this.out=o,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
t!==o&&t._n(e)},e.prototype._e=function(e){var t=this.out
if(t!==o)try{this.ins._remove(this),(this.ins=this.f(e))._add(this)}catch(n){t._e(n)}},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),N=function(){function e(e,t){this.type="startWith",this.ins=e,this.out=o,this.val=t}return e.prototype._start=function(e){this.out=e,this.out._n(this.val),this.ins._add(e)},e.prototype._stop=function(){this.ins._remove(this.out),this.out=o},e}(),R=function(){function e(e,t){this.type="take",this.ins=t,this.out=o,this.max=e,this.taken=0}return e.prototype._start=function(e){this.out=e,this.taken=0,this.max<=0?e._c():this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=++this.taken
n<this.max?t._n(e):n===this.max&&(t._n(e),t._c())}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),k=function(){function e(e){this._prod=e||o,this._ils=[],this._stopID=o,this._dl=o,this._d=!1,this._target=o,this._err=o}return e.prototype._n=function(e){var t=this._ils,n=t.length
if(this._d&&this._dl._n(e),1==n)t[0]._n(e)
else{if(0==n)return
for(var r=a(t),i=0;i<n;i++)r[i]._n(e)}},e.prototype._e=function(e){if(this._err===o){this._err=e
var t=this._ils,n=t.length
if(this._x(),this._d&&this._dl._e(e),1==n)t[0]._e(e)
else{if(0==n)return
for(var r=a(t),i=0;i<n;i++)r[i]._e(e)}if(!this._d&&0==n)throw this._err}},e.prototype._c=function(){var e=this._ils,t=e.length
if(this._x(),this._d&&this._dl._c(),1==t)e[0]._c()
else{if(0==t)return
for(var n=a(e),r=0;r<t;r++)n[r]._c()}},e.prototype._x=function(){0!==this._ils.length&&(this._prod!==o&&this._prod._stop(),this._err=o,this._ils=[])},e.prototype._stopNow=function(){this._prod._stop(),this._err=o,this._stopID=o},e.prototype._add=function(e){var t=this._target
if(t!==o)return t._add(e)
var n=this._ils
if(n.push(e),!(n.length>1))if(this._stopID!==o)clearTimeout(this._stopID),this._stopID=o
else{var r=this._prod
r!==o&&r._start(this)}},e.prototype._remove=function(e){var t=this,n=this._target
if(n!==o)return n._remove(e)
var r=this._ils,i=r.indexOf(e)
i>-1&&(r.splice(i,1),this._prod!==o&&r.length<=0?(this._err=o,this._stopID=setTimeout((function(){return t._stopNow()}))):1===r.length&&this._pruneCycles())},e.prototype._pruneCycles=function(){this._hasNoSinks(this,[])&&this._remove(this._ils[0])},e.prototype._hasNoSinks=function(e,t){if(-1!==t.indexOf(e))return!0
if(e.out===this)return!0
if(e.out&&e.out!==o)return this._hasNoSinks(e.out,t.concat(e))
if(e._ils){for(var n=0,r=e._ils.length;n<r;n++)if(!this._hasNoSinks(e._ils[n],t.concat(e)))return!1
return!0}return!1},e.prototype.ctor=function(){return this instanceof D?D:e},e.prototype.addListener=function(e){e._n=e.next||s,e._e=e.error||s,e._c=e.complete||s,this._add(e)},e.prototype.removeListener=function(e){this._remove(e)},e.prototype.subscribe=function(e){return this.addListener(e),new h(this,e)},e.prototype[i.default]=function(){return this},e.create=function(t){if(t){if("function"!=typeof t.start||"function"!=typeof t.stop)throw new Error("producer requires both start and stop functions")
u(t)}return new e(t)},e.createWithMemory=function(e){return e&&u(e),new D(e)},e.never=function(){return new e({_start:s,_stop:s})},e.empty=function(){return new e({_start:function(e){e._c()},_stop:s})},e.throw=function(t){return new e({_start:function(e){e._e(t)},_stop:s})},e.from=function(t){if("function"==typeof t[i.default])return e.fromObservable(t)
if("function"==typeof t.then)return e.fromPromise(t)
if(Array.isArray(t))return e.fromArray(t)
throw new TypeError("Type of input to from() must be an Array, Promise, or Observable")},e.of=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return e.fromArray(t)},e.fromArray=function(t){return new e(new v(t))},e.fromPromise=function(t){return new e(new b(t))},e.fromObservable=function(t){if(t.endWhen)return t
var n="function"==typeof t[i.default]?t[i.default]():t
return new e(new p(n))},e.periodic=function(t){return new e(new y(t))},e.prototype._map=function(e){return new(this.ctor())(new j(e,this))},e.prototype.map=function(e){return this._map(e)},e.prototype.mapTo=function(e){var t=this.map((function(){return e}))
return t._prod.type="mapTo",t},e.prototype.filter=function(t){var n,r,i=this._prod
return new e(i instanceof w?new w((n=i.f,r=t,function(e){return n(e)&&r(e)}),i.ins):new w(t,this))},e.prototype.take=function(e){return new(this.ctor())(new R(e,this))},e.prototype.drop=function(t){return new e(new _(t,this))},e.prototype.last=function(){return new e(new x(this))},e.prototype.startWith=function(e){return new D(new N(this,e))},e.prototype.endWhen=function(e){return new(this.ctor())(new S(e,this))},e.prototype.fold=function(e,t){return new D(new C(e,t,this))},e.prototype.replaceError=function(e){return new(this.ctor())(new P(e,this))},e.prototype.flatten=function(){return new e(new T(this))},e.prototype.compose=function(e){return e(this)},e.prototype.remember=function(){return new D(new A(this))},e.prototype.debug=function(e){return new(this.ctor())(new E(this,e))},e.prototype.imitate=function(e){if(e instanceof D)throw new Error("A MemoryStream was given to imitate(), but it only supports a Stream. Read more about this restriction here: https://github.com/staltz/xstream#faq")
this._target=e
for(var t=this._ils,n=t.length,r=0;r<n;r++)e._add(t[r])
this._ils=[]},e.prototype.shamefullySendNext=function(e){this._n(e)},e.prototype.shamefullySendError=function(e){this._e(e)},e.prototype.shamefullySendComplete=function(){this._c()},e.prototype.setDebugListener=function(e){e?(this._d=!0,e._n=e.next||s,e._e=e.error||s,e._c=e.complete||s,this._dl=e):(this._d=!1,this._dl=o)},e.merge=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new e(new f(t))},e.combine=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new e(new g(t))},e}()
t.Stream=k
var D=function(e){function t(t){var n=e.call(this,t)||this
return n._has=!1,n}return r(t,e),t.prototype._n=function(t){this._v=t,this._has=!0,e.prototype._n.call(this,t)},t.prototype._add=function(e){var t=this._target
if(t!==o)return t._add(e)
var n=this._ils
if(n.push(e),n.length>1)this._has&&e._n(this._v)
else if(this._stopID!==o)this._has&&e._n(this._v),clearTimeout(this._stopID),this._stopID=o
else if(this._has)e._n(this._v)
else{var r=this._prod
r!==o&&r._start(this)}},t.prototype._stopNow=function(){this._has=!1,e.prototype._stopNow.call(this)},t.prototype._x=function(){this._has=!1,e.prototype._x.call(this)},t.prototype.map=function(e){return this._map(e)},t.prototype.mapTo=function(t){return e.prototype.mapTo.call(this,t)},t.prototype.take=function(t){return e.prototype.take.call(this,t)},t.prototype.endWhen=function(t){return e.prototype.endWhen.call(this,t)},t.prototype.replaceError=function(t){return e.prototype.replaceError.call(this,t)},t.prototype.remember=function(){return this},t.prototype.debug=function(t){return e.prototype.debug.call(this,t)},t}(k)
t.MemoryStream=D
var M=k
t.default=M},function(e,t,n){"use strict"
n.r(t),function(e,r){var i,o=n(14)
i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r
var s=Object(o.default)(i)
t.default=s}.call(this,n(12),n(13)(e))},function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e)
t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict"
function r(e){var t,n=e.Symbol
return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"PostIndex",(function(){return g}))
var r=n(16),i=n.n(r),o=n(1),s=n.n(o),a=n(19),c=n.n(a)
n(20)
const l=[],u=/^[a-z0-9]+:\/\//,h=e=>e.replace(u,""),d=i()(e=>{c()([...new Set(e)]).filter(s.a).forEach(p)}),p=e=>{l.push(h(e))}
function f(e){if(!s()(e.key))throw new Error("Can't register post without a key (post: "+JSON.stringify(e)+")")
p(e.key)}function m(e){if(s()(e.key))return l.indexOf(h(e.key))>=0
throw new Error("Can't look for a post without a key (post: "+JSON.stringify(e)+")")}const g={loadInitialURLs:d,register:f,has:m,filter:function(e){if(!m(e))return f(e),e},destroy:function(){l.splice(0,l.length)}}},function(e,t,n){var r=n(17)
e.exports=function(e){return r(2,e)}},function(e,t,n){var r=n(18)
e.exports=function(e,t){var n
if("function"!=typeof t)throw new TypeError("Expected a function")
return e=r(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=void 0),n}}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t]
o&&(i[r++]=o)}return i}},function(e,t,n){"use strict"
n.r(t),n.d(t,"error",(function(){return s})),n.d(t,"warn",(function(){return a})),n.d(t,"info",(function(){return c})),n.d(t,"log",(function(){return l}))
var r=n(1),i=n.n(r)
function o(e){return i()(e[0])?["[bastian] "+e[0],...e.slice(1)]:["[bastian]",...e]}const s=(...e)=>console.error(...o(e)),a=(...e)=>{console.warn(...o(e))},c=(...e)=>{},l=(...e)=>{}},function(e,t,n){"use strict"
function r(e){return Array.isArray(e)?e:[e]}n.r(t),n.d(t,"castArray",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"setKey",(function(){return g})),n.d(t,"$Falkor",(function(){return v}))
var r=n(1),i=n.n(r),o=n(9),s=n.n(o),a=n(23),c=n(20),l=n(24),u=n(56),h=n(26),d=n(59),p=n(8)
let f
const m={},g=e=>{let t=e.key
i()(t)||s()(t)||(Object(h.get)(e,"content.url")?t=e.content.url:Object(h.get)(e,"content.video.id")?t=e.content.video.id:e.id&&(t=e.id)),t&&(e.key=String(t).trim())}
class v extends p.$OnDemandSource{static getInstance(e){if(e&&!f&&(f=new v(e,m)),f)return f
throw new Error("Couldn't return an $Falkor instance")}constructor(e,t){t!==m&&Object(c.warn)("Class $Falkor is a singleton and shouldn't be called directly."),super(e.items),this.minimun=20,this.feedId=l.Configs.get("feedId"),this.setNextFetch(e.nextFetch||e.nextPage),this.setNextPage(e.nextPage)}whenToFetch(){let e=!1
return e=this.buffer.length<=this.minimun&&!this.isEnded(),e}static buildRequestUrl(e,t,n){return e+"/page/"+t+(n?"/query_parameter/"+encodeURI(n):"")}store(e){let t=l.Configs.get("recLastPosition")
return Array.isArray(e)||(e=[e]),e.forEach(e=>{t+=1,g(e),e.position=e.position||t,e.source=v.staticName}),l.Configs.set("recLastPosition",t),super.store(e)}getResourceURI(){const e=u.Settings.get("RESOURCE_URI")
return e.match(/local.globoi.com/g)?e.replace("http://local.globoi.com:4000","http://falkor-cda.bastian.qa.globoi.com"):e}howToFetch(){const e=this.nextFetch,t=this.getResourceURI(),n=u.Settings.get("DEVICE_GROUP"),r={method:"GET",headers:new Headers({"X-Mobile-Group":n,Vary:"X-Mobile-Group"})},i=v.buildRequestUrl(t,e,u.Settings.get("QUERY_PARAMETER"))
if(s()(e))return fetch(i,r).then(e=>{if(!e.ok)throw new Error("[feed-fe:falkor] Network response was not ok: "+e.status+" "+e.statusText)
return e}).then(e=>e.json()).then(d.adaptHeadlessPayload).then(this.unlock).then(e=>{this.setNextPage(e.nextPage),this.setNextFetch(e.nextFetch||e.nextPage),this.saveAndResumeStream(e.items),a.Globals.bstn.hasSentImpression=!1}).catch(e=>{this.listener&&this.listener.error(e)})}whenToComplete(){let e
return e=null===this.nextPage,e}}v.staticName="$Falkor"},function(e,t,n){"use strict"
n.r(t),n.d(t,"Globals",(function(){return r}))
const r=function(){return this||(0,eval)("this")}()},function(e,t,n){"use strict"
n.r(t),n.d(t,"set",(function(){return p})),n.d(t,"get",(function(){return f})),n.d(t,"decr",(function(){return m})),n.d(t,"incr",(function(){return g})),n.d(t,"absorbConfigs",(function(){return b})),n.d(t,"Configs",(function(){return I}))
var r=n(25),i=n.n(r),o=n(9),s=n.n(o),a=n(26),c=n(29),l=n(55),u=n(23),h=n(56)
const d=new Map([["referer",""]])
function p(e,t){return d.set(e,t),t}const f=(e,t)=>{const n=d.get(e)
return i()(n)?t:n},m=(e,t=1)=>{const n=parseInt(f(e,null),10)
if(s()(n)&&t>0)return p(e,n-t)},g=(e,t=1)=>{const n=parseInt(f(e,null),10)
if(s()(n)&&t>0)return p(e,n+t)},v=[["forePosts","config.forePosts",0],["headlineVariation","config.headlineVariation"],["componentPosition","config.componentPosition",7],["cardsPosition","config.cardsPosition",[]],["feedType","config.feedType",h.Settings.get("FEED_TYPE")||"unknown-type"],["photoOverVideo","config.photoOverVideo",h.Settings.get("IS_PHOTO_PRIORIZED")||!1],["recommendationContentId","config.recommendation.contentId",h.Settings.get("RECOMMENDATION.CONTENT_ID")||"feed"],["disableDateTime","config.disableDateTime",!1],["isDebugModeClient","isDebugModeClient",!1],["renderContext","renderContext","csr"]],b=e=>{for(const[t,n,r]of v)p(t,Object(a.get)(e,n)||r)
p("feedId",e.id||Object(a.get)(e,"items.0.feedId")||"unknown-feedId"),p("referer",e.referer),p("recommendationCounter",0),_(e),O(e),w(e),S(e),E(e),y(e)},y=e=>{const t=Object(c.getHeadlinesType)(e)
p("headlinesSelected",t.name),p("headlinesMaxPosts",t.maxPosts),p("headlinesNrPosts",Object(c.getNrHeadlines)(e)),p("hasCustomHeadlines",t.name===c.HEADLINES_TYPES.CUSTOM.name),p("hasHeadlinesToRender",Object(c.hasHeadlines)(e))},E=e=>{Object.keys(e.atreyu||{}).forEach(t=>{p(t,e.atreyu[t])}),p("isHome","home-api"===f("api")),p("isHomeOrTopic","home-api"===f("api")||"topic-api"===f("api")),p("isMulticontent","multi-content"===f("api"))},_=e=>{const t="distributed-components",n="cards"
let r
const i=h.Settings.get("EXTENSION_MODEL"),o=Object(a.get)(e,"config.componentPosition")
r=[t,n].includes(i)?i:s()(o)?t:n,p("thirdPartyingModel",r)},O=e=>{var t
const n=Object(a.get)(e,"config.recommendation.start")||Object(a.get)(e,"config.cutRange")+1,r=h.Settings.get("HAS_HOMELIVE")||!1?0:f("forePosts"),i="home-api"===(null===(t=e.atreyu)||void 0===t?void 0:t.api)
p("recommendationStart",(!l.At.smallScreen||"uber"===f("headlineVariation"))&&n<=r&&i?r+1:n)},S=e=>{const t=Object(a.get)(e,"config.strategies")
t&&t.includes("channels")?p("isSegmentedByChannels",!0):p("isSegmentedByChannels",!1)},w=e=>{const t=Object(a.get)(e,"config.recommendation.active")
p("isRecommended",u.Globals.BASTIAN_FORCE_RECOMMENDED||(i()(t)?h.Settings.get("IS_RECOMMENDED",!1):t))},I={set:p,has:e=>d.has(e),get:f,unset:e=>d.delete(e),clear:()=>d.clear(),decr:m,incr:g,absorbConfigs:b}
t.default=I},function(e,t){e.exports=function(e){return void 0===e}},function(e,t,n){"use strict"
n.r(t)
var r=n(27),i=n.n(r)
n.d(t,"get",(function(){return i.a}))},function(e,t,n){n(28)
e.exports=function(e,t){for(var n=t.split("."),r=n.pop();t=n.shift();)if(null==(e=e[t]))return
return e[r]}},function(e,t){e.exports=function(e){switch(typeof e){case"string":case"number":case"boolean":return!0}return null==e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"treatPayload",(function(){return b})),n.d(t,"hasHeadlines",(function(){return f})),n.d(t,"getNrHeadlines",(function(){return g})),n.d(t,"getHeadlinesType",(function(){return p})),n.d(t,"flatAtreyuProps",(function(){return y})),n.d(t,"getFirstPostWithImageForLCP",(function(){return O})),n.d(t,"getFirstImage",(function(){return _})),n.d(t,"HEADLINES_TYPES",(function(){return c}))
var r=n(30),i=n(26)
function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const s="L",a="V",c={UBER:{name:"uberHeadline",maxPosts:1,isSelected:e=>d(e),conditionToRender:e=>u(e)},DEFAULT:{name:"defaultHeadlines",maxPosts:3,isSelected:e=>!d(e)&&!m(e).hasCustomHeadlines,conditionToRender:e=>"desktop"===h(e)&&u(e)},CUSTOM:{name:"customHeadlines",maxPosts:5,isSelected:e=>m(e).hasCustomHeadlines,conditionToRender:e=>u(e)}},l=(e={},t)=>{const n=e||{},r=n.sizes||{}
return(r[t]||((e={})=>Object.keys(e).length?e[Object.keys(e)[0]]:{})(r)).url||n.url},u=(e={},t)=>Math.min((e.config||{}).forePosts||0,t||c.DEFAULT.maxPosts),h=(e={})=>{const t=(e.atreyu||{}).channel
return(e.atreyu||{}).ffe_channel_ef||t},d=(e={})=>"uber"===(e.config||{}).headlineVariation,p=(e={})=>[c.CUSTOM,c.UBER,c.DEFAULT].find(t=>t.isSelected(e)),f=e=>{var t
return!((null===(t=e.atreyu)||void 0===t?void 0:t.has_homelive)||!1)&&p(e).conditionToRender(e)},m=(e={})=>({hasCustomHeadlines:(e.atreyu||{}).ffe_custom_headlines}),g=(e={})=>{const t=p(e)
return f(e)?u(e,t.maxPosts):0},v=e=>{const t=h(e),n=(e=>{const t=g(e),n=e.forePosts||[],r=e.items||[],i=r.length?r[0]:void 0,o=[]
let s=n
return i&&(o.push(i),s=n.filter(e=>e.id!==i.id)),o.push(...s),o.push(...r.slice(1)),o.slice(0,t)})(e),r={0:{checkVertical:()=>[2,3].includes(n.length)||"smart"===t},1:{checkVertical:()=>2===n.length},2:{checkVertical:()=>!1}}
return n.map(e=>{const i=n.indexOf(e),c=(e.content||{}).image,u=!!r[i]&&r[i].checkVertical(),h=c&&(c.url||c.sizes)
return o({},e,{elementClasses:"type-"+e.type+" "+(h&&"desktop"===t?"with-photo":""),imgUrl:l(c,u?a:s)})})},b=e=>{var t
const n=(null===(t=e.atreyu)||void 0===t?void 0:t.has_homelive)||!1,{hasCustomHeadlines:r}=m(e),i=d(e),o=(e.items||[]).length
let s=[],a="",c=""
if(!n&&f(e)&&o){s=v(e)
const t=s.map(e=>e.id)
e.items=e.items.filter(e=>!t.includes(e.id)),a="fore-posts-setted fore-posts-"+s.length+" bsl-has-items bsl-"+(i?"has":"no")+"-headline-variation bsl-has-fore-posts",c="model-"+s.length+" "+(i?"variation-uber":"")}return{headlines:s,hasCustomHeadlines:r,areaShowtimeClasses:a,headlinesClasses:c}},y=(e={})=>{const t=e.parameters||{}
Object.keys(t).forEach(n=>{const r=Array.isArray(t[n])&&t[n].length?t[n][0]:"",i=["true","false"].includes(r)?"true"===r:r
e[n]=i}),e.parameters=void 0},E=(e={})=>Object(i.get)(e,"content.video.id"),_=e=>{const{hasCustomHeadlines:t}=m(e)
let n
if(t)return n
if(f(e))n=v(e)[0].imgUrl
else{const t=O(e)
t&&(n=((e={})=>"video"===e.type)(t)&&E(t)?Object(r.buildUrlForPostVideo4x3)(E(t)):Object(r.choosePicture)(t.content.image))}return n},O=e=>{const{items:t=[]}=e
let n
if(!f(e)){const e=["materia","video","cobertura","tempo_real"],r=t.find(t=>t.content&&t.content.image&&e.includes(t.type))
r&&t.indexOf(r)<4&&(n=r)}return n}},function(e,t,n){"use strict"
n.r(t),n.d(t,"choosePicture",(function(){return O})),n.d(t,"buildUrlForPostVideo4x3",(function(){return S}))
var r=n(31),i=n.n(r),o=n(36),s=n.n(o),a=n(41),c=n.n(a),l=n(50),u=n.n(l),h=n(1),d=n.n(h),p=n(52),f=n.n(p),m=n(23),g=n(26)
const v={1:"S",1.5:"M",2:"L",3:"XL",4:"XXL"},b=Object.keys(v).map(Number),y=u()(b),E=s()(b),_=c()(e=>{const t=f()(e||m.Globals.devicePixelRatio,E,y)
let n=Math.floor(t)
for(;!b.includes(n)&&n<y;)n=Math.floor(n+.1)
return v[n]||v[E]})
function O(e,t,n,r){if(e.sizes){if(r)return e.sizes[r].url
const o=e.sizes,s=function(e=1,t){let n="S"
return t&&t.height>=t.width?n="V":e&&(n=_(e)),n}(t,n)
return Object(g.get)(o,s+".url")||i()(o)[0].url}if(d()(e.url))return e.url}const S=e=>"https://s03.video.glbimg.com/480x360/"+e+".jpg"},function(e,t,n){var r=n(32),i=n(34)
e.exports=function(e){return null==e?[]:r(e,i(e))}},function(e,t,n){var r=n(33)
e.exports=function(e,t){return r(t,(function(t){return e[t]}))}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e)
return i}},function(e,t,n){var r=n(35)(Object.keys,Object)
e.exports=r},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){var r=n(37),i=n(39),o=n(40)
e.exports=function(e){return e&&e.length?r(e,o,i):void 0}},function(e,t,n){var r=n(38)
e.exports=function(e,t,n){for(var i=-1,o=e.length;++i<o;){var s=e[i],a=t(s)
if(null!=a&&(void 0===c?a==a&&!r(a):n(a,c)))var c=a,l=s}return l}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(e,t){return e<t}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(42)
function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function")
var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache
if(o.has(i))return o.get(i)
var s=e.apply(this,r)
return n.cache=o.set(i,s)||o,s}
return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},function(e,t,n){var r=n(43),i=n(44),o=n(47),s=n(48),a=n(49)
function c(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,e.exports=c},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(45),i=Array.prototype.splice
e.exports=function(e){var t=this.__data__,n=r(t,e)
return!(n<0)&&(n==t.length-1?t.pop():i.call(t,n,1),--this.size,!0)}},function(e,t,n){var r=n(46)
e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n
return-1}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(45)
e.exports=function(e){var t=this.__data__,n=r(t,e)
return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(45)
e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(45)
e.exports=function(e,t){var n=this.__data__,i=r(n,e)
return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},function(e,t,n){var r=n(37),i=n(51),o=n(40)
e.exports=function(e){return e&&e.length?r(e,o,i):void 0}},function(e,t){e.exports=function(e,t){return e>t}},function(e,t,n){var r=n(53),i=n(54)
e.exports=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=i(n))==n?n:0),void 0!==t&&(t=(t=i(t))==t?t:0),r(i(e),t,n)}},function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"SMALL_SCREEN",(function(){return i})),n.d(t,"MEDIUM_SCREEN",(function(){return o})),n.d(t,"LARGE_SCREEN",(function(){return s})),n.d(t,"SCREEN_BREAKPOINT",(function(){return p})),n.d(t,"At",(function(){return g}))
var r=n(23)
const[i,o,s]=[1,2,4]
let a,c,l,u,h,d
const p={SMALL:0,MEDIUM:540,LARGE:1e3}
a=!0
const f=e=>Number(r.Globals.matchMedia("(min-width: "+e+"px)").matches),m=Number(!0)<<f(p.MEDIUM)<<f(p.LARGE)
u=e=>m===e,h=e=>m>e,d=u(i),l=u(o),c=u(s)
const g={server:!1,client:!0,largeScreen:c,mediumScreen:l,smallScreen:d,screen:u,screenGreatThan:h}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Settings",(function(){return p}))
var r=n(41),i=n.n(r),o=n(25),s=n.n(o),a=n(26),c=n(57),l=n(23)
let u,h
const d=e=>"SETTINGS.BASTIAN."+e
u=i()(e=>Object(c.has)(l.Globals,d(e)))
h=i()((e,t)=>{let n=Object(a.get)(l.Globals,d(e))
return s()(n)&&!s()(t)&&(n=t),n},(...e)=>e.map(String).join("|"))
const p={has:u,get:h}},function(e,t,n){"use strict"
n.r(t)
var r=n(58),i=n.n(r)
n.d(t,"has",(function(){return i.a}))},function(e,t,n){var r=n(27)
e.exports=function(e,t){return void 0!==r(e,t)}},function(e,t,n){"use strict"
function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.r(t),n.d(t,"isFalkorHeadlessPayload",(function(){return g})),n.d(t,"adaptHeadlessPayload",(function(){return v}))
const i="direita",o="destaque-uber",s={UBER:{isSelected:p,maxPosts:1,area:o,headlineVariation:"uber"},DEFAULT:{isSelected:e=>!p(e),maxPosts:3,area:"destaque",headlineVariation:null}},a="post-base"
function c(e,t,n=null){return e.reduce((e,r)=>(t(r)&&(null==n||e[1].length<n)?e[1].push(r):e[0].push(r),e),[[],[]])}function l(e){const t=new Map(e.items.filter(e=>e.parentId).map(e=>[e.id,e])),n=new Set,i=e.items.map(e=>{var i
if(null===(i=e.children)||void 0===i||!i.length)return e
const o=e.children.map(e=>(n.add(e),t.get(e))).filter(Boolean)
return o.length>0?r({},e,{aggregatedPosts:o}):e})
return r({},e,{items:i.filter(e=>!e.id||!n.has(e.id))})}function u(e){const t=e.items.map(e=>e.type!==a?e:r({},e,{type:e.content.type||a}))
return r({},e,{items:t})}function h(e){const t=e.items.map(e=>e.content.externalAPIConfig?r({},e,{config:e.content.externalAPIConfig}):e)
return r({},e,{items:t})}function d(e){if("specialItems"in e)return e
const[t,n]=c(e.items,e=>e.area===i)
return r({},e,{items:t,specialItems:n})}function p(e){return e.items.some(e=>e.area===o)}function f(e){if("forePosts"in e)return e
const{area:t,maxPosts:n,headlineVariation:i}=function(e){for(const t in s)if(s[t].isSelected(e))return s[t]
return s.DEFAULT}(e),[o,a]=c(e.items,e=>e.area===t,n),l=r({},e.config,{forePosts:a.length})
if(0===a.length)return r({},e,{config:l})
const u=[a[0],...o]
return i&&(l.headlineVariation=i),r({},e,{config:l,items:u,forePosts:a})}function m(e){return r({},e,{meta:r({},e.meta,{__headlessAdapted:!0})})}function g(e){const t=e.items.some(e=>Boolean(e.area)),n=e.items.some(e=>Array.isArray(e.children))
return t||n}function v(e){if(!e||!g(e))return r({},e,{meta:r({},null==e?void 0:e.meta,{__headlessAdapted:!1})})
return[u,h,l,d,f,m].reduce((e,t)=>t(e),e)}},function(e,t,n){"use strict"
n.r(t),n.d(t,"reportToRealtime",(function(){return m}))
var r=n(5),i=n.n(r),o=n(55),s=n(23),a=n(61),c=n(26)
let l
const u=[]
let h=!1
const d=()=>i()(Object(c.get)(s.Globals,"$.glbrealtime.gerar_clique")),p=()=>{for(const e of u)s.Globals.$.glbrealtime.gerar_clique(...e)};(async()=>{await Object(a.availabilityOf)("$.glbrealtime.gerar_clique",d,"30s"),d()&&(h=!0,p())})()
const f=o.At.smallScreen?"mobile":"desktop"
l=function(e,t){u.push([e,f,t]),h&&p()}
const m=l},function(e,t,n){"use strict"
n.r(t),n.d(t,"check",(function(){return E})),n.d(t,"availabilityOf",(function(){return _})),n.d(t,"MISSING_WARN",(function(){return O})),n.d(t,"missingWarn",(function(){return S}))
var r=n(41),i=n.n(r),o=n(1),s=n.n(o),a=n(62),c=n.n(a),l=n(24),u=n(68),h=n(69),d=n(20)
let p,f
let m=!1
const g={}
let v=0
const b=new Promise(()=>{}),y=()=>{m=!0
for(const e in g){const t=g[e]
!t.done&&Object(u.safeCall)(t.assertion,null)&&(v-=1,t.done=!0,c()(t.resolve))}v>0?setTimeout(y,500):m=!1}
p=(e,t={})=>{const{id:n="",timeout:r=1e4}=t,i=e.toString()+n
if(i in g)return g[i].promise
const o={assertion:e,done:!1,promise:b},a=new Promise((e,t)=>{o.resolve=e,setTimeout(()=>{o.done=!0,t(new Error("detector test timeout of "+i))},s()(r)?Object(h.timeToInt)(r):r)})
return o.promise=a,g[i]=o,v+=1,m||c()(y),a},f=async(e,t,n)=>{try{await E(t,{timeout:n})}catch(r){"esppub"!==l.Configs.get("feedType")&&S(e)}}
const E=p,_=f,O="seems to be missing on the page",S=i()(e=>Object(d.warn)(e,O))},function(e,t,n){var r=n(63),i=n(64)((function(e,t){return r(e,1,t)}))
e.exports=i},function(e,t){e.exports=function(e,t,n){if("function"!=typeof e)throw new TypeError("Expected a function")
return setTimeout((function(){e.apply(void 0,n)}),t)}},function(e,t,n){var r=n(40),i=n(65),o=n(67)
e.exports=function(e,t){return o(i(e,t,r),e+"")}},function(e,t,n){var r=n(66),i=Math.max
e.exports=function(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var o=arguments,s=-1,a=i(o.length-t,0),c=Array(a);++s<a;)c[s]=o[t+s]
s=-1
for(var l=Array(t+1);++s<t;)l[s]=o[s]
return l[t]=n(c),r(e,this,l)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t)
case 1:return e.call(t,n[0])
case 2:return e.call(t,n[0],n[1])
case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"safeCall",(function(){return s}))
var r=n(5),i=n.n(r),o=n(20)
const s=(e,t,...n)=>{try{if(i()(e))return e.apply(t,n)
throw new TypeError("Given value is not a function")}catch(r){Object(o.error)(r)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"timeToInt",(function(){return a}))
var r=n(41),i=n.n(r)
const o={ms:{value:1,extractor:/^(\d+)ms$/},seg:{value:1e3,extractor:/^(\d+|\d+\.\d+)s$/},min:{value:6e4,extractor:/^(\d+|\d+\.\d+)min$/},hr:{value:36e5,extractor:/^(\d+|\d+\.\d+)hr$/},d:{value:864e5,extractor:/^(\d+|\d+\.\d+)d$/}},s=i()(e=>{for(const t in o){const n=e.match(o[t].extractor)
if(n)return o[t].value*Number(n[1])}throw new Error("Could not find a resolver for translate "+e)}),a=i()(e=>e.split(" ").reduce((e,t)=>e+s(t),0))},function(e,t,n){"use strict"
n.r(t),n.d(t,"CARD_RENDERED",(function(){return r})),n.d(t,"PAGE_RENDERED",(function(){return i})),n.d(t,"APP_LOADED",(function(){return o})),n.d(t,"ELEMENT_VIEWED",(function(){return s})),n.d(t,"LAUNCH_FAILED",(function(){return a})),n.d(t,"ITEM_CLICK",(function(){return c})),n.d(t,"VIDEOPREVIEW_INTERSECT",(function(){return l}))
const r="bastian-feed-card_rendered",i="bastian-feed-page_rendered",o="bstn-app-loaded",s="element-view",a="bstn-launch-failed",c="bstn-item-click",l="bstn-videopreview-intersect"},function(e,t,n){"use strict"
n.r(t),n.d(t,"triggerDomEvent",(function(){return l}))
var r=n(5),i=n.n(r),o=n(62),s=n.n(o),a=n(68)
let c
c=function(e,t,n){const r=new CustomEvent(e,{bubbles:!0,cancelable:!0})
i()(n)&&Object(a.safeCall)(n,null,r),s()(()=>t.dispatchEvent(r))}
const l=c},function(e,t,n){"use strict"
n.r(t),n.d(t,"patch",(function(){return a}))
var r=n(222),i=n(55),o=n(15),s=n(30)
function a(e,t){Object.isFrozen(e)||(e.PostIndex={register:o.PostIndex.register,has:o.PostIndex.has,filter:o.PostIndex.filter},e.getItemPosition=function(e){return()=>e.source===r.$PushStream?0:e.itemIndex.getPosition(e.item)}(t),e.getAreaId=function(e){return()=>e.areaId}(t),e.implode=t.implode,e.isLargeScreen=i.At.largeScreen,e.choosePicture=s.choosePicture,delete e.patch),Object.freeze(e)}},function(e,t,n){var r=n(63),i=n(64),o=n(54),s=i((function(e,t,n){return r(e,o(t)||0,n)}))
e.exports=s},function(e,t,n){"use strict"
n.r(t),n.d(t,"DEVICES",(function(){return r}))
const r={feature:1,smart:2,tablet:3,desktop:4}},function(e,t,n){"use strict"
n.r(t),n.d(t,"EventEmitter",(function(){return i}))
var r=n(20)
class i{constructor(){this.subscribers=[]}on(e,t){this.subscribers.push({eventName:e,callback:t})}off(e,t){for(let n=0;n<this.subscribers.length;n++){const{eventName:r,callback:i}=this.subscribers[n]
r===e&&i===t&&(this.subscribers.splice(n,1),n--)}}trigger(e,t){this.subscribers.filter(({eventName:t})=>t===e).forEach(e=>{try{e.callback(t)}catch(n){Object(r.error)(n)}})}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"now",(function(){return l}))
var r=n(5),i=n.n(r),o=n(23),s=n(26)
const a=["now","webkitNow","msNow","mozNow"].map(e=>Object(s.get)(o.Globals,"performance."+e)).find(i.a)
let c
c=i()(a)?()=>parseInt(a.call(performance),10):()=>(new Date).getTime()
const l=c},function(e,t,n){var r=n(4),i=n(78)
e.exports=function(e){return r(e)&&1===e.nodeType&&!i(e)}},function(e,t,n){var r=n(2),i=n(79),o=n(4),s=Function.prototype,a=Object.prototype,c=s.toString,l=a.hasOwnProperty,u=c.call(Object)
e.exports=function(e){if(!o(e)||"[object Object]"!=r(e))return!1
var t=i(e)
if(null===t)return!0
var n=l.call(t,"constructor")&&t.constructor
return"function"==typeof n&&n instanceof n&&c.call(n)==u}},function(e,t,n){var r=n(35)(Object.getPrototypeOf,Object)
e.exports=r},function(e,t,n){"use strict"
n.r(t),n.d(t,"render",(function(){return g})),n.d(t,"renderToString",(function(){return g})),n.d(t,"shallowRender",(function(){return m}))
var r=n(81),i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,o=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},s=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},a=function(e,t,n){return String(e).length>(t||40)||!n&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},c={}
function l(e){var t=""
for(var n in e){var r=e[n]
null!=r&&(t&&(t+=" "),t+=c[n]||(c[n]=n.replace(/([A-Z])/g,"-$1").toLowerCase()),t+=": ",t+=r,"number"==typeof r&&!1===i.test(n)&&(t+="px"),t+=";")}return t||void 0}function u(e,t){for(var n in t)e[n]=t[n]
return e}function h(e,t){return Array.isArray(t)?t.reduce(h,e):null!=t&&!1!==t&&e.push(t),e}var d={shallow:!0},p=[],f=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/
g.render=g
var m=function(e,t){return g(e,t,d)}
function g(e,t,n,i,c,d){if(null==e||"boolean"==typeof e)return""
Array.isArray(e)&&(e=Object(r.createElement)(r.Fragment,null,e))
var m=e.type,v=e.props,b=!1
t=t||{}
var y,E=(n=n||{}).pretty,_=E&&"string"==typeof E?E:"\t"
if("object"!=typeof e&&!m)return o(e)
if("function"==typeof m){if(b=!0,!n.shallow||!i&&!1!==n.renderRootComponent){if(m===r.Fragment){var O="",S=[]
h(S,e.props.children)
for(var w=0;w<S.length;w++)O+=(w>0&&E?"\n":"")+g(S[w],t,n,!1!==n.shallowHighOrder,c,d)
return O}var I,T=e.__c={__v:e,context:t,props:e.props,__h:[]}
if(r.options.__r&&r.options.__r(e),m.prototype&&"function"==typeof m.prototype.render){var C=m.contextType,x=C&&t[C.__c],j=null!=C?x?x.props.value:C.__:t;(T=e.__c=new m(v,j)).__v=e,T._dirty=T.__d=!0,T.props=v,null==T.state&&(T.state={}),null==T._nextState&&null==T.__s&&(T._nextState=T.__s=T.state),T.context=j,m.getDerivedStateFromProps?T.state=u(u({},T.state),m.getDerivedStateFromProps(T.props,T.state)):T.componentWillMount&&T.componentWillMount(),T.state=T._nextState!==T.state?T._nextState:T.__s!==T.state?T.__s:T.state,I=T.render(T.props,T.state,T.context)}else{var A=m.contextType,P=A&&t[A.__c]
I=m.call(e.__c,v,null!=A?P?P.props.value:A.__:t)}return T.getChildContext&&(t=u(u({},t),T.getChildContext())),g(I,t,n,!1!==n.shallowHighOrder,c,d)}m=(y=m).displayName||y!==Function&&y.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1]
if(!t){for(var n=-1,r=p.length;r--;)if(p[r]===e){n=r
break}n<0&&(n=p.push(e)-1),t="UnnamedComponent"+n}return t}(y)}var N,R=""
if(v){var k=Object.keys(v)
n&&!0===n.sortAttributes&&k.sort()
for(var D=0;D<k.length;D++){var M=k[D],L=v[M]
if("children"!==M&&!M.match(/[\s\n\\/='"\0<>]/)&&(n&&n.allAttributes||"key"!==M&&"ref"!==M)){if("className"===M){if(v.class)continue
M="class"}else c&&M.match(/^xlink:?./)&&(M=M.toLowerCase().replace(/^xlink:?/,"xlink:"))
"style"===M&&L&&"object"==typeof L&&(L=l(L))
var H=n.attributeHook&&n.attributeHook(M,L,t,n,b)
if(H||""===H)R+=H
else if("dangerouslySetInnerHTML"===M)N=L&&L.__html
else if((L||0===L||""===L)&&"function"!=typeof L){if(!(!0!==L&&""!==L||(L=M,n&&n.xml))){R+=" "+M
continue}if("value"===M){if("select"===m){d=L
continue}"option"===m&&d==L&&(R+=" selected")}R+=" "+M+'="'+o(L)+'"'}}}}if(E){var V=R.replace(/^\n\s*/," ")
V===R||~V.indexOf("\n")?E&&~R.indexOf("\n")&&(R+="\n"):R=V}if(R="<"+m+R+">",String(m).match(/[\s\n\\/='"\0<>]/))throw new Error(m+" is not a valid HTML tag name in "+R)
var U=String(m).match(f)
U&&(R=R.replace(/>$/," />"))
var F,B=[]
if(N)E&&a(N)&&(N="\n"+_+s(N,_)),R+=N
else if(v&&h(F=[],v.children).length){for(var G=E&&~R.indexOf("\n"),z=!1,q=0;q<F.length;q++){var W=F[q]
if(null!=W&&!1!==W){var $=g(W,t,n,!0,"svg"===m||"foreignObject"!==m&&c,d)
if(E&&!G&&a($)&&(G=!0),$)if(E){var Z=$.length>0&&"<"!=$[0]
z&&Z?B[B.length-1]+=$:B.push($),z=Z}else B.push($)}}if(E&&G)for(var K=B.length;K--;)B[K]="\n"+_+s(B[K],_)}if(B.length)R+=B.join("")
else if(n&&n.xml)return R.substring(0,R.length-1)+" />"
return U||(E&&~R.indexOf("\n")&&(R+="\n"),R+="</"+m+">"),R}g.shallowRender=m,t.default=g},function(e,t,n){"use strict"
n.r(t),n.d(t,"render",(function(){return M})),n.d(t,"hydrate",(function(){return L})),n.d(t,"createElement",(function(){return g})),n.d(t,"h",(function(){return g})),n.d(t,"Fragment",(function(){return y})),n.d(t,"createRef",(function(){return b})),n.d(t,"isValidElement",(function(){return i})),n.d(t,"Component",(function(){return E})),n.d(t,"cloneElement",(function(){return H})),n.d(t,"createContext",(function(){return V})),n.d(t,"toChildArray",(function(){return T})),n.d(t,"_unmount",(function(){return k})),n.d(t,"options",(function(){return r}))
var r,i,o,s,a,c,l,u,h={},d=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i
function f(e,t){for(var n in t)e[n]=t[n]
return e}function m(e){var t=e.parentNode
t&&t.removeChild(e)}function g(e,t,n){var r,i=arguments,o={}
for(r in t)"key"!==r&&"ref"!==r&&(o[r]=t[r])
if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(i[r])
if(null!=n&&(o.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===o[r]&&(o[r]=e.defaultProps[r])
return v(e,o,t&&t.key,t&&t.ref)}function v(e,t,n,i){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0}
return r.vnode&&r.vnode(o),o}function b(){return{}}function y(e){return e.children}function E(e,t){this.props=e,this.context=t}function _(e,t){if(null==t)return e.__?_(e.__,e.__.__k.indexOf(e)+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?_(e):null}function O(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return O(e)}}function S(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!s++||c!==r.debounceRendering)&&((c=r.debounceRendering)||a)(w)}function w(){for(var e;s=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,i,o,s
e.__d&&(o=(i=(t=e).__v).__e,(s=t.__P)&&(n=[],r=A(s,i,f({},i),t.__n,void 0!==s.ownerSVGElement,null,n,null==o?_(i):o),P(n,i),r!=o&&O(i)))}))}function I(e,t,n,r,i,o,s,a,c){var l,u,p,f,g,v,b,y=n&&n.__k||d,E=y.length
if(a==h&&(a=null!=o?o[0]:E?_(n,0):null),l=0,t.__k=T(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(p=y[l])||p&&n.key==p.key&&n.type===p.type)y[l]=void 0
else for(u=0;u<E;u++){if((p=y[u])&&n.key==p.key&&n.type===p.type){y[u]=void 0
break}p=null}if(f=A(e,n,p=p||h,r,i,o,s,a,c),(u=n.ref)&&p.ref!=u&&(b||(b=[]),p.ref&&b.push(p.ref,null,n),b.push(u,n.__c||f,n)),null!=f){var d
if(null==v&&(v=f),void 0!==n.__d)d=n.__d,n.__d=void 0
else if(o==p||f!=a||null==f.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(f),d=null
else{for(g=a,u=0;(g=g.nextSibling)&&u<E;u+=2)if(g==f)break e
e.insertBefore(f,a),d=a}"option"==t.type&&(e.value="")}a=void 0!==d?d:f.nextSibling,"function"==typeof t.type&&(t.__d=a)}else a&&p.__e==a&&a.parentNode!=e&&(a=_(p))}return l++,n})),t.__e=v,null!=o&&"function"!=typeof t.type)for(l=o.length;l--;)null!=o[l]&&m(o[l])
for(l=E;l--;)null!=y[l]&&k(y[l],y[l])
if(b)for(l=0;l<b.length;l++)R(b[l],b[++l],b[++l])}function T(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null))
else if(Array.isArray(e))for(var r=0;r<e.length;r++)T(e[r],t,n)
else n.push(t?t("string"==typeof e||"number"==typeof e?v(null,e,null,null):null!=e.__e||null!=e.__c?v(e.type,e.props,e.key,null):e):e)
return n}function C(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function x(e,t,n,r,i){var o,s,a,c,l
if(i?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(o=e.style,"string"==typeof n)o.cssText=n
else{if("string"==typeof r&&(o.cssText="",r=null),r)for(s in r)n&&s in n||C(o,s,"")
if(n)for(a in n)r&&n[a]===r[a]||C(o,a,n[a])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,j,c),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,j,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!i&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function j(e){this.l[e.type](r.event?r.event(e):e)}function A(e,t,n,i,o,s,a,c,l){var u,h,d,p,m,g,v,b,_,O,S=t.type
if(void 0!==t.constructor)return null;(u=r.__b)&&u(t)
try{e:if("function"==typeof S){if(b=t.props,_=(u=S.contextType)&&i[u.__c],O=u?_?_.props.value:u.__:i,n.__c?v=(h=t.__c=n.__c).__=h.__E:("prototype"in S&&S.prototype.render?t.__c=h=new S(b,O):(t.__c=h=new E(b,O),h.constructor=S,h.render=D),_&&_.sub(h),h.props=b,h.state||(h.state={}),h.context=O,h.__n=i,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=S.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=f({},h.__s)),f(h.__s,S.getDerivedStateFromProps(b,h.__s))),p=h.props,m=h.state,d)null==S.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount)
else{if(null==S.getDerivedStateFromProps&&b!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,O),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,O)){for(h.props=b,h.state=h.__s,h.__d=!1,h.__v=t,t.__e=n.__e,t.__k=n.__k,h.__h.length&&a.push(h),u=0;u<t.__k.length;u++)t.__k[u]&&(t.__k[u].__=t)
break e}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,O),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(p,m,g)}))}h.context=O,h.props=b,h.state=h.__s,(u=r.__r)&&u(t),h.__d=!1,h.__v=t,h.__P=e,u=h.render(h.props,h.state,h.context),t.__k=null!=u&&u.type==y&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(i=f(f({},i),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(p,m)),I(e,t,n,i,o,s,a,c,l),h.base=t.__e,h.__h.length&&a.push(h),v&&(h.__E=h.__=null),h.__e=!1}else t.__e=N(n.__e,t,n,i,o,s,a,l);(u=r.diffed)&&u(t)}catch(e){r.__e(e,t,n)}return t.__e}function P(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function N(e,t,n,r,i,o,s,a){var c,l,u,p,f,m=n.props,g=t.props
if(i="svg"===t.type||i,null!=o)for(c=0;c<o.length;c++)if(null!=(l=o[c])&&((null===t.type?3===l.nodeType:l.localName===t.type)||e==l)){e=l,o[c]=null
break}if(null==e){if(null===t.type)return document.createTextNode(g)
e=i?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,g.is&&{is:g.is}),o=null}if(null===t.type)m!==g&&e.data!=g&&(e.data=g)
else if(t!==n){if(null!=o&&(o=d.slice.call(e.childNodes)),u=(m=n.props||h).dangerouslySetInnerHTML,p=g.dangerouslySetInnerHTML,!a){if(m===h)for(m={},f=0;f<e.attributes.length;f++)m[e.attributes[f].name]=e.attributes[f].value;(p||u)&&(p&&u&&p.__html==u.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,i){var o
for(o in n)o in t||x(e,o,null,n[o],r)
for(o in t)i&&"function"!=typeof t[o]||"value"===o||"checked"===o||n[o]===t[o]||x(e,o,t[o],n[o],r)})(e,g,m,i,a),t.__k=t.props.children,p||I(e,t,n,r,"foreignObject"!==t.type&&i,o,s,h,a),a||("value"in g&&void 0!==g.value&&g.value!==e.value&&(e.value=null==g.value?"":g.value),"checked"in g&&void 0!==g.checked&&g.checked!==e.checked&&(e.checked=g.checked))}return e}function R(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function k(e,t,n){var i,o,s
if(r.unmount&&r.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||R(i,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){r.__e(e,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&k(i[s],t,n)
null!=o&&m(o)}function D(e,t,n){return this.constructor(e,n)}function M(e,t,n){var i,o,s
r.__&&r.__(e,t),o=(i=n===l)?null:n&&n.__k||t.__k,e=g(y,null,[e]),s=[],A(t,(i?t:n||t).__k=e,o||h,h,void 0!==t.ownerSVGElement,n&&!i?[n]:o?null:d.slice.call(t.childNodes),s,n||h,i),P(s,e)}function L(e,t){M(e,t,l)}function H(e,t){return t=f(f({},e.props),t),arguments.length>2&&(t.children=d.slice.call(arguments,2)),v(e.type,t,t.key||e.key,t.ref||e.ref)}function V(e){var t={},n={__c:"__cC"+u++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,i=this
return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=i,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&r.some((function(e){e.context=t.value,S(e)}))},this.sub=function(e){r.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}}
return n.Consumer.contextType=n,n}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return S(n.__E=n)}catch(t){e=t}throw e}},i=function(e){return null!=e&&void 0===e.constructor},E.prototype.setState=function(e,t){var n
n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),S(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},E.prototype.render=y,o=[],s=0,a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=h,u=0},function(e,t,n){"use strict"
n.r(t),n.d(t,"Engine",(function(){return i})),n.d(t,"Renderer",(function(){return o})),n.d(t,"createElement",(function(){return s}))
var r=n(81)
const i={render:r.render,Component:r.Component,Fragment:r.Fragment,createElement:r.h,cloneElement:r.cloneElement},o=i,s=r.h},function(e,t,n){"use strict"
n.r(t),n.d(t,"Cover",(function(){return g}))
var r=n(5),i=n.n(r),o=n(84),s=n.n(o),a=n(82),c=n(87),l=n(93),u=n(30),h=n(26),d=n(68),p=n(24)
function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const m={S:1,M:1.5,L:2}
class g extends a.Engine.Component{constructor(e){super(e),this.immediateReveal=!1,this.getSrcSet=e=>{const t=[]
for(const n in m)if(n in e.sizes){const r=this.state.useSizeSrcSet?Object(h.get)(e,"sizes."+n+".url")+" "+Object(h.get)(e,"sizes."+n+".width")+"w":Object(h.get)(e,"sizes."+n+".url")+" "+m[n]+"x"
t.push(r)}return{srcSet:t.join(","),sizes:this.state.useSizeSrcSet?"(min-width: 540px) 50vw, (min-width: 900px) 30vw, 100vw":void 0}},this.reveal=e=>{this.immediateReveal||null!==this.state.cover?(e.className.indexOf("_preempt-visibility")>=0&&e.firstElementChild&&(e=e.firstElementChild),i()(this.props.onReveal)&&Object(d.safeCall)(this.props.onReveal,null,e)):this.setCoverUrl()},this.state={cover:null,renderContext:p.Configs.get("renderContext"),useSizeSrcSet:p.Configs.get("ff_cover_size",!1)}}render(){if(!this.props.images)return null
const e=!!this.props.images.fastRender,t=this.getImageProps({fastRenderEnabled:e}),n=a.Engine.createElement("div",f({ref:Object(l.as)(this),onMouseUp:this.props.onMouseUp},this.getCoverProps()),a.Engine.createElement("picture",{className:"bstn-fd-cover-picture"},a.Engine.createElement("img",f({className:"bstn-fd-picture-image"},t))),this.props.children)
return Object(h.get)(t,"srcSet")||e&&Object(h.get)(t,"src")?(this.immediateReveal=!0,n):a.Engine.createElement(c.PreemptVisibility,{onNearToBeVisible:this.reveal,threshold:this.props.threshold},n)}componentDidMount(){this.props.isEsppub&&this.setCoverUrl(),this.immediateReveal&&this.reveal(this._refs.node)}componentDidUpdate(){this.state.cover&&this.reveal(this._refs.node)}getCoverProps(){const e={className:"bstn-fd-item-cover "+(this.props.extraClasses||"")}
for(const t in this.props)t.startsWith("data-")&&(e[t]=this.props[t])
return e}getImageProps1x1(e={},t){let n=f({alt:this.props.alt,title:this.props.alt},e)
const r=this.props.images
if(r.sizes&&this.atFirstPage()&&p.Configs.get("isHomeOrTopic",!0)){n=f({},n,t?{}:this.getSrcSet(r),{src:this.chooseCoverUrl()})}return this.state.cover&&(n=f({},n,{src:this.state.cover,"data-ratio":"1:1"})),n}getImageProps4x3(e={}){return f({src:Object(u.buildUrlForPostVideo4x3)(Object(h.get)(this.props,"data-video-id")),"data-ratio":"4:3"},e)}getImageProps({fastRenderEnabled:e}){const t={loading:e?"eager":"lazy",elementtiming:"image-"+this.state.renderContext}
return"4:3"===this.props.ratio&&Object(h.get)(this.props,"data-video-id")?this.getImageProps4x3(t,e):this.getImageProps1x1(t,e)}atFirstPage(){let e
const t=this.context.item
return e=!t||t&&s()(this.context.itemIndex.getPosition(t),1,11),e}chooseCoverUrl(){return Object(u.choosePicture)(this.props.images,null,null,this.props.thumbOrientation)}setCoverUrl(){const e=this.chooseCoverUrl()
e&&this.setState({cover:e})}}},function(e,t,n){var r=n(85),i=n(86),o=n(54)
e.exports=function(e,t,n){return t=i(t),void 0===n?(n=t,t=0):n=i(n),e=o(e),r(e,t,n)}},function(e,t){var n=Math.max,r=Math.min
e.exports=function(e,t,i){return e>=r(t,i)&&e<n(t,i)}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"DEFAULT_THRESHOLD",(function(){return p})),n.d(t,"PreemptVisibility",(function(){return y}))
var r=n(88),i=n.n(r),o=n(62),s=n.n(o),a=n(82),c=n(23),l=n(93),u=n(98)
let h,d
const p="200%"
h=class extends a.Engine.Component{constructor(e){super(e),this.render=()=>a.Engine.createElement("div",{className:"_preempt-visibility",ref:Object(l.as)(this)},this.props.children),this.checkProximity=i()(()=>{const e=this._refs.node,t=e.getBoundingClientRect(),n=this.getThreshold(),r=t.top-d<n,i=t.top!==t.bottom,o=-t.bottom<n
if(!i&&r||r&&o){if(this.state.isNear&&!this.state.wasTriggered)return s()(()=>this.props.onNearToBeVisible(e)),this.tearDown(),void this.setState({wasTriggered:!0})
this.setState({isNear:!0}),this.reCheckProximity()}else this.setState({isNear:!1})},100,{leading:!0,trailing:!0}),this.reCheckProximity=()=>this.checkProximity(),this.state={isNear:!1,wasTriggered:!1}}async componentDidMount(){const e=await this.props.threshold||p
this.getThreshold=f(e),this.props.awaitScroll||s()(this.checkProximity),u.PassiveScrollListener.on(this.checkProximity)}componentWillUnmount(){this.tearDown()}tearDown(){u.PassiveScrollListener.off(this.checkProximity),this.checkProximity.cancel(),c.Globals.removeEventListener("resize",b)}}
const f=e=>{const[t,n]=g(e).slice(1,3),r=v[n]
return i()(r(Number(t)),1e3,{leading:!0,trailing:!1})},m=/(-?\d+)(%|px)/,g=e=>e.match(m)||["","px",e||"0"],v={"%":e=>()=>d*(e/100),px:e=>()=>e},b=()=>{d=c.Globals.innerHeight}
b(),c.Globals.addEventListener("resize",b,!1)
const y=h},function(e,t,n){var r=n(89),i=n(6)
e.exports=function(e,t,n){var o=!0,s=!0
if("function"!=typeof e)throw new TypeError("Expected a function")
return i(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),r(e,t,{leading:o,maxWait:t,trailing:s})}},function(e,t,n){var r=n(6),i=n(90),o=n(54),s=Math.max,a=Math.min
e.exports=function(e,t,n){var c,l,u,h,d,p,f=0,m=!1,g=!1,v=!0
if("function"!=typeof e)throw new TypeError("Expected a function")
function b(t){var n=c,r=l
return c=l=void 0,f=t,h=e.apply(r,n)}function y(e){return f=e,d=setTimeout(_,t),m?b(e):h}function E(e){var n=e-p
return void 0===p||n>=t||n<0||g&&e-f>=u}function _(){var e=i()
if(E(e))return O(e)
d=setTimeout(_,function(e){var n=t-(e-p)
return g?a(n,u-(e-f)):n}(e))}function O(e){return d=void 0,v&&c?b(e):(c=l=void 0,h)}function S(){var e=i(),n=E(e)
if(c=arguments,l=this,p=e,n){if(void 0===d)return y(p)
if(g)return clearTimeout(d),d=setTimeout(_,t),b(p)}return void 0===d&&(d=setTimeout(_,t)),h}return t=o(t)||0,r(n)&&(m=!!n.leading,u=(g="maxWait"in n)?s(o(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==d&&clearTimeout(d),f=0,c=p=l=d=void 0},S.flush=function(){return void 0===d?h:O(i())},S}},function(e,t,n){var r=n(91)
e.exports=function(){return r.Date.now()}},function(e,t,n){var r=n(92),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")()
e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t
e.exports=n}).call(this,n(12))},function(e,t,n){"use strict"
n.r(t),n.d(t,"as",(function(){return o}))
var r=n(94)
let i
i=function(e,t){return function(n){Object(r.set)(e,"_refs."+(t||"node"),n)}}
const o=i},function(e,t,n){"use strict"
n.r(t)
var r=n(95),i=n.n(r)
n.d(t,"set",(function(){return i.a}))},function(e,t,n){var r=n(96)
e.exports=function(e,t,n){var i=/^(.+)\.(.+)$/.exec(t)
i?r(e,i[1])[i[2]]=n:e[t]=n}},function(e,t,n){var r=n(97)
e.exports=function(e,t){return t?(r(t.split("."),(function(t){e[t]||(e[t]={}),e=e[t]})),e):e}},function(e,t){e.exports=function(e,t,n){if(null!=e)for(var r=-1,i=e.length;++r<i&&!1!==t.call(n,e[r],r,e););}},function(e,t,n){"use strict"
n.r(t),n.d(t,"PassiveScrollListener",(function(){return v}))
var r=n(88),i=n.n(r),o=n(5),s=n.n(o),a=n(99),c=n.n(a),l=n(20),u=n(23),h=n(76),d=n(100),p=n(101)
let f,m
f={subscribers:[],queue:[],paused:!1,flush:function(){if(!this.paused){const t=Object(h.now)()
let n,r=0
for(this.queue=this.subscribers.slice(0);(n=this.queue.shift())&&r<8;){try{n()}catch(e){Object(l.error)(e)}r=Object(h.now)()-t}}},on:function(e){this.subscribers.push(e)},off:function(e){Object(d.pull)(this.subscribers,e)},pause:function(){this.paused=!0},resume:function(){this.paused=!1,this.flush()}},m=e=>(m=p.rAF?e=>Object(p.rAF)(()=>Object(p.rAF)(e)):e=>setTimeout(e,1),m(e))
const g=i()(()=>m(f.flush.bind(f)),100,{leading:!0,trailing:!1})
u.Globals.addEventListener("scroll",g,!!function(){let e=!1
const t=u.Globals.Modernizr
if(t&&c()(t.passiveeventlisteners))return t.passiveeventlisteners
try{if(s()(Object.defineProperty)){const t=Object.defineProperty({},"passive",{get(){e=!0}})
u.Globals.addEventListener("test",null,t)}}catch(n){}return e}()&&{passive:!0})
const v=f},function(e,t,n){var r=n(2),i=n(4)
e.exports=function(e){return!0===e||!1===e||i(e)&&"[object Boolean]"==r(e)}},function(e,t,n){"use strict"
function r(e,t){let n
for(n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t,n)}n.r(t),n.d(t,"pull",(function(){return r}))},function(e,t,n){"use strict"
let r
n.r(t),n.d(t,"rAF",(function(){return i})),r=n(23).Globals.requestAnimationFrame
const i=r},function(e,t,n){var r

;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict"
var n={}.hasOwnProperty
function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t]
if(r){var o=typeof r
if("string"===o||"number"===o)e.push(r)
else if(Array.isArray(r)&&r.length){var s=i.apply(null,r)
s&&e.push(s)}else if("object"===o)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict"
n.r(t),n.d(t,"insertIf",(function(){return o}))
var r=n(5),i=n.n(r)
function o(e,t,n){let r=e
return i()(e)&&(r=e()),r?t(r):i()(n)?n(r):null}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Relateds",(function(){return h}))
var r=n(5),i=n.n(r),o=n(24),s=n(82),a=n(26),c=n(103)
function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function u(e,t){const{thumb:n,title:r,url:a,dateFactory:u,age:h,isRecommended:d}=e,p=n&&n.url,f={}
return n&&n.rightsholder&&(f.alt=""+n.title+n.rightsholder?"Foto: ("+n.rightsholder:"",f.title=n.rightsholder),s.Engine.createElement("li",{key:t,className:"bstn-relateditem"},Object(c.insertIf)(p,()=>s.Engine.createElement("div",{className:"bstn-fd-relatedimage"},s.Engine.createElement("img",l({className:"bstn-fd-relatedthumb",src:p},f,{loading:"lazy"})))),s.Engine.createElement("div",{className:"bstn-fd-relatedtext"},s.Engine.createElement("a",{className:"gui-color-primary gui-color-hover feed-post-body-title bstn-relatedtext",href:a},r),Object(c.insertIf)(!1===o.Configs.get("disableDateTime"),()=>s.Engine.createElement("div",{className:"feed-post-metadata"},i()(u)&&u({age:h,isRecommended:d})))))}const h=({showThumbs:e=!1,children:t,dateFactory:n,items:r})=>(t=Array.isArray(t)?t[0]:t,i()(t)||(t=e=>e),r&&r.length>0?s.Engine.createElement("div",{className:"bstn-related"},t(s.Engine.createElement("ul",{className:"bstn-relateditems"},r.map(((e,t)=>n=>{const{title:r,url:i}=n.content,{age:o,isRecommended:s}=n,c={age:o,dateFactory:t,isRecommended:s,title:r,url:i},u=Object(a.get)(n.content,"image.rightsHolder"),h=Object(a.get)(n.content,"image.sizes.S.url")
let d={}
return e&&h&&(d={thumb:{url:h,rightsholder:u}}),l({},c,d)})(e,n)).map(u)))):null)},function(e,t,n){"use strict"
n.r(t),n.d(t,"Section",(function(){return i}))
var r=n(82)
function i(e){return r.Engine.createElement("span",{className:"feed-post-metadata-section"}," ",e.text," ")}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Summary",(function(){return s}))
var r=n(82),i=n(226),o=n(24)
const s=({text:e})=>r.Engine.createElement(i.LabelEvent,{type:"click",label:"resumo"},r.Engine.createElement("div",{className:"feed-post-body-resumo"},r.Engine.createElement("p",{elementtiming:"text-"+o.Configs.get("renderContext")},e)))},function(e,t,n){"use strict"
n.r(t),n.d(t,"Title",(function(){return s}))
var r=n(108),i=n(82),o=n(226)
const s=e=>{const{text:t}=e
let n=""
return e.extraClasses&&(n=Array.isArray(e.extraClasses)?e.extraClasses.join(" "):String(e.extraClasses)),i.Engine.createElement(o.LabelEvent,{type:"click",label:"titulo"},i.Engine.createElement("div",{className:"feed-post-body-title gui-color-primary gui-color-hover "+n},i.Engine.createElement(r.ElementViewTrigger,{on:"fitInScreen"},e.innerWrapper?i.Engine.createElement(e.innerWrapper,null,t):t)))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"ElementViewTrigger",(function(){return E}))
var r,i=n(88),o=n.n(i),s=n(25),a=n.n(s),c=n(82),l=n(23),u=n(21),h=n(109),d=n(110),p=n(26),f=n(100),m=n(68),g=n(70),v=n(111),b=n(71)
let y;(r=class extends(Object(d.eventable)(Object(h.drawless)(c.Engine.Component))){constructor(e){super(e),this.childrenTriggers=[],this.verifyVisibility=function(){const e=this.props.on
if(this.props.redirectToChildTriggerIfExists&&this.childrenTriggers.length>0)return this.childrenTriggers.some(e=>e.verifyVisibility())
const t=Object(v.getVisibility)(this._refs.node)
return(!1!==t.isBoxed||!0===this.props.evenIfUnboxed)&&Object(u.castArray)(e).some(e=>this.testVisibility(t,e))},this.testVisibility=(e,t)=>{if(e.partial)return this.handleVisibleState(),!0},this.resume=()=>{this.isRoot()&&(Object(m.safeCall)(this.verifyVisibility,this),this.timerID=setTimeout(this.resume,250))},this.pause=()=>{clearTimeout(this.timerID)},this.syncWithVisibility=()=>{"visible"===l.Globals.document.visibilityState?this.resume():this.pause()},e.tagName&&(this.drawlessTag=e.tagName),this.verifyVisibility=o()(this.verifyVisibility.bind(this),this.props.checkInterval||1e3,{leading:!0,trailing:!1})}getChildContext(){return{parentTrigger:this,parentGroup:this.context.parentGroup}}isRoot(){return a()(this.context.parentTrigger)}handleVisibleState(){for(const e of Array.from(this._refs.node.children||[]))Object(b.triggerDomEvent)(g.ELEMENT_VIEWED,e)
this.trigger("visible",this.props.chain)}bindEvents(){this.isRoot()&&l.Globals.window.addEventListener("visibilitychange",this.syncWithVisibility)}registerChildTrigger(e){this.childrenTriggers.push(e)}unregisterChildTrigger(e){Object(f.pull)(this.childrenTriggers,e)}componentDidMount(){this.bindEvents(),this.isRoot()&&this.syncWithVisibility(),Object(p.get)(this,"context.parentTrigger.props.redirectToChildTriggerIfExists")?this.context.parentTrigger.registerChildTrigger(this):this.context.parentGroup&&this.context.parentGroup.registerChild(this)}componentWillUnmount(){this.isRoot()&&this.pause(),this.context.parentGroup&&this.context.parentGroup.unregisterChild(this),this.context.parentTrigger.props.redirectToChildTriggerIfExists&&this.context.parentTrigger.unregisterChildTrigger(this)}}).displayName="evt",y=r
const E=y},function(e,t,n){"use strict"
n.r(t),n.d(t,"drawless",(function(){return p}))
var r=n(41),i=n.n(r),o=n(1),s=n.n(o),a=n(5),c=n.n(a),l=n(82),u=n(93)
const h=/^function ([^(]+)/,d=i()(e=>(e.match(h)||["",""])[1])
function p(e){return class extends e{render(){c()(this.beforeRender)&&this.beforeRender(this.props.children)
let e=""
this.constructor&&(e="_"+(this.constructor.displayName||this.constructor.name||d(this.constructor.toString())).replace("_render","").toLowerCase())
let t="div"
return s()(this.drawlessTag)&&(t=this.drawlessTag),l.Engine.createElement(t,{className:e,ref:Object(u.as)(this)},this.props.children)}}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"eventable",(function(){return i}))
var r=n(75)
function i(e){return class extends e{constructor(e){super(e),this.emitter=new r.EventEmitter}on(e,t){this.emitter.on(e,t)}off(e,t){this.emitter.off(e,t)}trigger(e,t){this.emitter.trigger(e,t)}}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"getVisibility",(function(){return s}))
var r=n(23)
function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let o
o=function(e){const t=e.getBoundingClientRect(),n=r.Globals.document.documentElement.clientHeight,o=n/4,s=3*o,a=(t.top+t.bottom)/2,c=t.top>=0&&t.top<=n,l=a>=o&&a<=s,u=t.bottom>=0&&t.bottom<=n,h=c&&u,d=t.top<=0&&t.bottom>=n,p=c||u||l||d
return i({isVisible:p,rect:t,viewportHeight:n,isBoxed:t.top!==t.bottom},p?{top:c,middle:l,bottom:u,partial:p,fitInScreen:h,tookWholeScreen:d}:{})}
const s=o},function(e,t,n){"use strict"
n.r(t),n.d(t,"Video",(function(){return b}))
var r=n(9),i=n.n(r),o=n(82),s=n(113),a=n(114),c=n(103),l=n(115),u=n(23),h=n(116),d=n(83)
function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const f=e=>{e&&e.impression&&e.impression()},m=({hasContent:e,testABExperiment:t})=>{let n=!0,r=e=>((e,t)=>{f(t),Object(a.applyVideoLightbox)(e)})(e,t)
var i;(i=t)&&u.Globals.postMateriaVideoAB&&u.Globals.postMateriaVideoAB.experiment===i.experiment&&"redirect"===t.alternative&&(n=!1,r=()=>f(t))
return{showPlayAndDuration:n,component:{onMouseUp:()=>{var e;(e=t)&&e.conversion&&e.conversion()},onReveal:r,extraClasses:"bstn-fd-video-cover "+(e?"feed-post-video-full":"")}}}
var g=o.Engine.createElement(l.BadgeAoVivo,null)
var v=o.Engine.createElement(h.VideoPlay,null)
class b extends o.Engine.Component{render(){const{video:e,image:t,isEsppub:n=!1,title:r,url:a,testABExperiment:l}=this.props
let u
if(!e||!t)return null
e.duration
const h=e.trademark,f=m({testABExperiment:l,hasContent:this.hasContent()})
var b=o.Engine.createElement("img",{className:"feed-post-video-trademark",src:h,loading:"lazy"})
return u=o.Engine.createElement(d.Cover,p({images:t,alt:r},f.component,{isEsppub:n,"data-video-id":e.id,"data-short-url":a,"data-link":a,"data-program-title":e.programTitle,"data-title":r}),o.Engine.createElement("div",{className:"feed-cover-content"},this.Header(),o.Engine.createElement("div",{className:"bstn-fd-play-button"},Object(c.insertIf)(f.showPlayAndDuration,()=>v),((e,t)=>{const{isLive:n,video:r={}}=e
if(n)return g
const a=r.duration
return Object(c.insertIf)(t&&i()(a)&&a>0,()=>o.Engine.createElement("p",{className:"feed-post-video-duration"},Object(s.abbrTime)(a)))})(this.props,f.showPlayAndDuration)),this.Title(),this.Footer(),Object(c.insertIf)(h,()=>b))),u}Header(){return this.props.headerLabel?o.Engine.createElement("div",{className:"feed-post-video-full-header"},this.props.headerLabel):null}Title(){return this.props.titleLabel?o.Engine.createElement("div",{className:"feed-post-video-full-title"},this.props.titleLabel):null}Footer(){return this.props.footerComponent?this.props.footerComponent:null}hasContent(){return this.props.titleLabel||this.props.headerLabel||this.props.footerComponent}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"abbrTime",(function(){return c}))
var r=n(69)
const[i,o,s]=["1s","1min","1hr"].map(r.timeToInt),a=e=>Math.floor(e+.69)
function c(e){if(null===e)return""
const t=Math.floor(e/s)
e%=s
const n=Math.floor(e/o)
e%=o
const r=Math.floor(e/i)
return t>0?a(t+.01*n)+" hr":n>0?a(n+.01*r)+" min":r>0?a(r)+" seg":""}},function(e,t,n){"use strict"
n.r(t),n.d(t,"applyVideoLightbox",(function(){return E}))
var r=n(16),i=n.n(r),o=n(1),s=n.n(o),a=n(5),c=n.n(a),l=n(99),u=n.n(l),h=n(20),d=n(23),p=n(56),f=n(26),m=n(61)
function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const v=i()(()=>{const e=p.Settings.get("PUBLICIDADEPAGINA")
let t=p.Settings.get("VIDEO_SITEPAGE")
return u()(e)&&!u()(t)&&(Object(h.warn)("PUBLICIDADEPAGINA is deprecated. Use VIDEO_SITEPAGE instead."),t=e),!1!==t&&(t=!0),{publicidadePagina:t}}),b=i()(()=>{const e=Object(f.get)(d.Globals,"SETTINGS.FACEBOOK_APP_ID")
return s()(e)?{fbAppId:e}:{}}),y=()=>c()(Object(f.get)(d.Globals,"gui.lightbox.lightbox"))
async function E(e){if(c()(d.Globals.globalWebdeps)&&!window.isNoLoadPlayerFeed&&await d.Globals.globalWebdeps("player"),await Object(m.availabilityOf)("gui.lightbox.lightbox",y),e&&y()){const t=g({},b(),v())
d.Globals.gui.lightbox.lightbox(e,t)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"BadgeAoVivo",(function(){return i}))
var r=n(82).Engine.createElement("span",{className:"bstn-aovivo-label"},"ao vivo")
const i=()=>r},function(e,t,n){"use strict"
n.r(t),n.d(t,"VideoPlay",(function(){return o}))
var r=n(82),i=r.Engine.createElement("div",{className:"bstn-fd-video-play"},r.Engine.createElement("svg",{className:"bstn-fd-play-icon theme-color-primary",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.Engine.createElement("path",{d:"M8 5v14l11-7z"})))
function o(){return i}},function(e,t,n){"use strict"
n.r(t),n.d(t,"POST_SIZES",(function(){return r})),n.d(t,"DESKTOP_AREAS",(function(){return i}))
const r={SMALL:"p",MEDIUM:"m",LARGE:"g"},i={HEADLINE:"t",LEFT:"e",RIGHT:"d"}},function(e,t,n){"use strict"
n.r(t),n.d(t,"FeedReporter",(function(){return c}))
var r=n(119),i=n.n(r),o=n(55),s=n(24),a=n(122)
class c extends a.AbstractReporter{constructor({area:e}){super(),this.area=e}get areaDesktop(){if(o.At.largeScreen)return this.area}get feedId(){return s.Configs.get("feedId")}get feedType(){return s.Configs.get("feedType","").toLowerCase()}get feedViewTime(){return i()(s.Configs.get("feed_getSeenTime")()/1e3)}}},function(e,t,n){var r=n(120)("round")
e.exports=r},function(e,t,n){var r=n(91),i=n(18),o=n(54),s=n(121),a=r.isFinite,c=Math.min
e.exports=function(e){var t=Math[e]
return function(e,n){if(e=o(e),(n=null==n?0:c(i(n),292))&&a(e)){var r=(s(e)+"e").split("e"),l=t(r[0]+"e"+(+r[1]+n))
return+((r=(s(l)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"AbstractReporter",(function(){return a})),n.d(t,"BaseReporter",(function(){return c})),n.d(t,"createPostReporter",(function(){return h}))
var r=n(119),i=n.n(r),o=n(26)
function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}class a{debug(){return this}}class c extends a{constructor({data:e,telemetry:t}){super(),this.telemetry=t,this.data=s({},e),this.features=new Map}get attachment(){const e=[]
for(const[t,n]of this.features)n()&&e.push(t)
if(e.length>0)return e}get contentType(){return"esppub"===this.data.type?"especial-publicitario":this.data.type}get position(){return this.getPostPosition()}get postId(){return this.data.id}get source(){return String(this.data.source)}get viewTime(){return i()(this.telemetry.getSeenTime()/1e3)}addFeatureChecks(e){for(const t in e){const n=e[t]
this.features.set(t,n)}}setContent(e){this.data=s({},this.data.content,e)}static upgrade(e,t={}){const n=new this(s({},e.reporter),s({},t))
return e.reporter=n,n}}const l=/\s+/
function u(e){if(e)return e.split(l).length}function h(e){return class extends e{get contentId(){let e=Object(o.get)(this.data,"content.url")
return e||(e=Object(o.get)(this.data,"content.video.id"),e&&(e=e.toString())),e}get pinned(){if(Object(o.get)(this.data,"pinned"))return!0}get wordCountSummary(){const e=this.attachment
if(Array.isArray(e)&&e.includes("resumo"))return u(Object(o.get)(this.data,"content.summary"))}get wordCountTitle(){return u(Object(o.get)(this.data,"content.title"))}}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"SeenTimeTelemetry",(function(){return d}))
var r=n(9),i=n.n(r),o=n(89),s=n.n(o),a=n(70),c=(n(20),n(82)),l=n(76)
let u
class h extends c.Engine.Component{constructor(...e){super(...e),this.telemetry={seenTime:0,begin:null,lastSeenTimeReported:0},this.handleElementView=e=>{e.stopPropagation(),this.startCounting(),this.commitElapsedTime(),this.onView()}}cdmSeenTimeTelemetry(){this.startCounting=s()(this.startCounting,1100,{leading:!0,trailing:!1}),this.commitElapsedTime=s()(this.commitElapsedTime,1100,{leading:!1,trailing:!0}),this._refs.node.addEventListener(a.ELEMENT_VIEWED,this.handleElementView,!1)}cwuSeenTimeTelemetry(){this.startCounting.cancel(),this.commitElapsedTime.cancel(),this._refs.node.removeEventListener(a.ELEMENT_VIEWED,this.handleElementView)}startCounting(){this.telemetry.begin=Object(l.now)()}commitElapsedTime(){if(i()(this.telemetry.begin)){const e=this.telemetry.begin,t=parseInt(Object(l.now)()-e,10)
this.telemetry.seenTime+=t,this.telemetry.begin=null}}getSeenTime(){if(i()(this.telemetry.begin)){const e=this.telemetry.begin
return this.telemetry.seenTime+parseInt(Object(l.now)()-e,10)}return this.telemetry.seenTime||0}reportSeenTime(e){this.getSeenTime()!==this.telemetry.lastSeenTimeReported&&(this.telemetry.lastSeenTimeReported=this.getSeenTime(),e())}onView(){}}u=h
const d=u},function(e,t,n){var r=n(125),i=n(128),o=n(131)
e.exports=function(e,t){var n={}
return t=o(t,3),i(e,(function(e,i,o){r(n,i,t(e,i,o))})),n}},function(e,t,n){var r=n(126)
e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},function(e,t,n){var r=n(127),i=function(){try{var e=r(Object,"defineProperty")
return e({},"",{}),e}catch(t){}}()
e.exports=i},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(129),i=n(34)
e.exports=function(e,t){return e&&r(e,t,i)}},function(e,t,n){var r=n(130)()
e.exports=r},function(e,t){e.exports=function(e){return function(t,n,r){for(var i=-1,o=Object(t),s=r(t),a=s.length;a--;){var c=s[e?a:++i]
if(!1===n(o[c],c,o))break}return t}}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"$Advertises",(function(){return l}))
var r=n(10),i=n.n(r),o=n(20),s=n(55)
let a
const c={}
class l{static getInstance(){return a||(a=new l(c)),a}constructor(e){e!==c&&Object(o.warn)("Class $Advertise is a singleton and shouldn't be called directly.")
const t=this
this.getNextPosition=u(),this.stream=i.a.create({start(e){t.listener=e},stop(){t.listener=null}})}request(){this.listener&&this.listener.next({id:"banner_"+this.getNextPosition(),type:"advertise",source:l.staticName})}}l.staticName="$Advertises"
const u=()=>{var e
const t="Home"===(null===(e=window.utag_data)||void 0===e?void 0:e.content_type)&&s.At.smallScreen?["mobile1","feed_especial","rm2_feed","rm3_feed"]:["feed_especial","feed__0"],n=((...e)=>{let t=-1
const n=e.map(()=>{return e=(e=1)||0,()=>e++
var e})
return()=>(t=(t+1)%e.length,e[t]+"__"+n[t]())})("middle_feed","feed")
return()=>t.length>0?t.shift():""+n()}},function(e,t,n){"use strict"
n.r(t),n.d(t,"HEADLINES_PLACEHOLDER",(function(){return r})),n.d(t,"PLACEHOLDER",(function(){return i})),n.d(t,"ROOT",(function(){return o})),n.d(t,"FEED",(function(){return s})),n.d(t,"PAGE",(function(){return a})),n.d(t,"ITEM",(function(){return c})),n.d(t,"POST",(function(){return l})),n.d(t,"CARD",(function(){return u})),n.d(t,"LOAD_MORE",(function(){return h})),n.d(t,"LOAD_MORE_LINK",(function(){return d})),n.d(t,"BANNER_SLB_MEIO",(function(){return p})),n.d(t,"SHOWTIME_INITIALIZED",(function(){return f})),n.d(t,"AREATEMPLATE_ESQUERDA",(function(){return m})),n.d(t,"AREATEMPLATE_DIREITA",(function(){return g})),n.d(t,"BS_HOME",(function(){return v}))
const r=".areatemplate-showtime",i="#feed-placeholder",o=".feed-root",s=".bstn-feed",a=".bastian-page",c=".bastian-feed-item",l=".feed-post",u=".bastian-card-mobile, .bastian_card__mobile",h=".load-more",d=".load-more > a",p="#banner_slb_meio",f=".showtime--initialized",m=".areatemplate-esquerda",g=".areatemplate-direita",v=".bs-home"},function(e,t,n){"use strict"
n.r(t),n.d(t,"ItemReporter",(function(){return a})),n.d(t,"ItemPostReporter",(function(){return c}))
var r=n(222),i=n(26),o=n(122)
function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}class a extends o.BaseReporter{constructor(e,t={}){super(e),e.itemReference&&(this.itemReference=e.itemReference),e.positionIndex&&(this.positionIndex=e.positionIndex)
const n={}
for(const r of["face","size"])n[r]=Object(i.get)(e.itemReference.state.data,"klass."+r.toUpperCase())
this.itemProps=s({},n,t)}get format(){return this.itemProps.face}get size(){return this.itemProps.size}getPostPosition(){return this.data.source===r.$PushStream.staticName?0:this.positionIndex.getPosition(this.itemReference)}}const c=Object(o.createPostReporter)(a)},function(e,t,n){"use strict"
n.r(t),n.d(t,"$DistributedComponents",(function(){return d}))
var r=n(6),i=n.n(r),o=n(10),s=n.n(o),a=n(20),c=n(55)
function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let u
const h={}
class d{static getInstance(e){if(e&&!u&&(u=new d(e,h)),u)return u
throw new Error("Couldn't return an $DistributedComponents instance")}constructor(e,t){this.buffer=[],t!==h&&Object(a.warn)("Class $DistributedComponents is a singleton and shouldn't be called directly."),Array.isArray(e.specialItems)&&this.store([...e.specialItems])
const n=this
this.stream=s.a.create({start(e){n.listener=e},stop(){n.listener=null}})}store(e){this.buffer.push(...e)}isEmpty(){return 0===this.buffer.length}request(e){const t=i()(e)
if(!((c.At.smallScreen||!t)&&this.listener&&this.buffer.length>0))return!1
this.listener.next(l({},this.buffer.shift(),{key:Math.random().toString(),source:d.staticName}))}}d.staticName="$DistributedComponents"},function(e,t,n){"use strict"
n.r(t),n.d(t,"prepare",(function(){return E})),n.d(t,"$Recommendation",(function(){return I}))
var r=n(1),i=n.n(r),o=n(9),s=n.n(o),a=n(20),c=n(24),l=n(23),u=n(56),h=n(57),d=n(137),p=n(8),f=n(22)
function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let g
const v={},b=({tag:e})=>{i()(e)&&c.Configs.set("recommendationTag",e)},y=/#.*$/,E=e=>(Object(h.has)(e,"content.url")&&(e.key=e.content.url.replace(y,""),e.content.url=e.content.url.replace(y,"")),e.source="$Recommendation",e),_=async()=>await fetch(Object(d.isEnvQA)()?"https://horizon-track.qa.globoi.com/id":"https://horizon-track./id",{credentials:"include"}).then(e=>e.json()),O=e=>{const t=("; "+document.cookie).split("; "+e+"=")
if(2===t.length)return t.pop().split(";").shift()},S=(e,t)=>{const n=new RegExp("^(?!.*SMART).*?-FEED-(?:.*-)?(?:item|user)$"),r=new RegExp("^.*-FEED-(?:.*-)?(?:SMART-)(?:item|user)$"),i=new RegExp("(?:item|user)$"),o=(e=>{const t=u.Settings.get("PAGINABLE")
return t&&e.indexOf("item")>=0?"user":!t&&e.indexOf("user")>=0?"item":""})(e),s=o.length?e.replace(i,o):e
if(n.test(s)){if(!t){const e=s.search(i),t=s.slice(e)
return s.replace(i,"SMART-"+t)}return s}return r.test(e)&&t?s.replace("-SMART-","-"):s},w=(e,t)=>{const n=c.Configs.get("recommendationStart"),r=t.filter(e=>e._experiment_properties),i=t.filter(e=>!e._experiment_properties&&e.position>n)
if(c.Configs.set("experimentData",e),l.Globals.bstn.experimentData=e,i.length){const t=i.map((t,n)=>(n<10&&(t=((e,t)=>{var n
return{id:e.id,feedId:e.feedId,lastPublication:e.lastPublication,modified:e.modified,content:m({url:"video"===e.type?null===(n=e.content.video)||void 0===n?void 0:n.url:e.content.url},e.content),aggregatedPosts:e.aggregatedPosts||[],publication:e.publication,created:e.created,tenantId:e.tenantId,position:e.position,type:e.type,_experiment_properties:t._experiment_properties,_documentKey:""+t.tag}})(t,e)),t))
f.$Falkor.getInstance().buffer=[...r,...t],c.Configs.set("lastRecWasInserted",!0)}else c.Configs.set("lastRecWasInserted",!1)}
class I extends p.$OnDemandSource{static getInstance(e){if(e&&!g&&(g=new I(e,v)),g)return g
throw new Error("Couldn't return a $Recommendation instance")}constructor(e,t){t!==v&&Object(a.warn)("Class $Recommendation is a singleton and shouldn't be called directly."),super(e.items),this.receivedZeroItems=T(e.items),this.nextFetch=2,this.nextPage=2,b(e)}whenToFetch(){return 0===this.buffer.length}static async buildRequestUrl(e){const t=-1!==["tablet","desktop"].indexOf(u.Settings.get("DEVICE_GROUP","desktop")),n="home"===u.Settings.get("FULL_FEED_SSR_TYPE"),r=u.Settings.get("RECOMMENDATION.URL",u.Settings.get("RECOMMENDATION_URL"))||"",i=String(u.Settings.get("PORTAL")).toUpperCase(),o=n?"":"&anchors.item="+window.location.href.replace(/^(http|https):/,""),s=c.Configs.get("recommendationContentId")||i+"-FEED-user",a=S(s,t),h=l.Globals.location.hash.match(/(?:^#|&)alternative=([^&]+)/),d=h?"&forcedABAlternative="+h[1]:"",p=await(async()=>{try{const e=await _()
return Promise.resolve(e.glb_uid)}catch(e){return console.log(e),O("glb_uid")}})(),f=p?"&glb_uid="+p:"",m=await(async()=>{try{const e=await _()
return Promise.resolve(e.hsid)}catch(e){return console.log(e),O("hsid")}})()
return""+r+a+"?responseFormat=legacyPublishing&page="+e+"&perPage=10"+d+f+(m?"&hsid="+m:"")+o}async howToFetch(){const e=this.nextFetch
if(s()(e)&&(!this.receivedZeroItems||c.Configs.get("isRecEditorial"))){const t=await I.buildRequestUrl(e),n=c.Configs.get("recommendationStart"),r=f.$Falkor.getInstance().buffer,i=c.Configs.get("experimentData"),o=c.Configs.get("lastRecWasInserted")
l.Globals.bstn.hasSentImpression=!1,!o&&((e,t)=>t.filter(t=>!t._experiment_properties&&t.position>e).length>0)(n,r)?w(i,r):fetch(t,{credentials:"include",headers:{"x-canonical-uri":window.location.href}}).then(e=>{if(200!==e.status){console.error("[bastian] ERROR",e)
const t=()=>new Error("Network error: ")
return Promise.reject(t)}return e.json()}).then(this.unlock).then(e=>{this.setNextFetch(this.nextFetch+1),b(e),Array.isArray(e)?this.saveAndResumeStream(e.map(E),e=>{this.receivedZeroItems=T(e)}):c.Configs.get("isRecEditorial")&&e._experiment_properties?(w(e,r),this.setNextPage(this.nextPage+1)):this.receivedZeroItems=!0}).catch(e=>{c.Configs.unset("recommendationTag"),this.listener&&this.listener.error(e)})}}whenToComplete(){return this.receivedZeroItems}}I.staticName="$Recommendation"
const T=e=>0===e.length},function(e,t,n){"use strict"
function r(){return window.location.hostname.includes(".qa.globoi")||window.location.hostname.includes("localhost")}n.r(t),n.d(t,"isEnvQA",(function(){return r}))},function(e,t,n){var r
self,r=()=>(()=>{var e={31:(e,t)=>{!function(e){var t,n,r,i=String.fromCharCode
function o(e){for(var t,n,r=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t)
return r}function s(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function a(e,t){return i(e>>t&63|128)}function c(e){if(!(4294967168&e))return i(e)
var t=""
return 4294965248&e?4294901760&e?4292870144&e||(t=i(e>>18&7|240),t+=a(e,12),t+=a(e,6)):(s(e),t=i(e>>12&15|224),t+=a(e,6)):t=i(e>>6&31|192),t+i(63&e|128)}function l(){if(r>=n)throw Error("Invalid byte index")
var e=255&t[r]
if(r++,128==(192&e))return 63&e
throw Error("Invalid continuation byte")}function u(){var e,i
if(r>n)throw Error("Invalid byte index")
if(r==n)return!1
if(e=255&t[r],r++,!(128&e))return e
if(192==(224&e)){if((i=(31&e)<<6|l())>=128)return i
throw Error("Invalid continuation byte")}if(224==(240&e)){if((i=(15&e)<<12|l()<<6|l())>=2048)return s(i),i
throw Error("Invalid continuation byte")}if(240==(248&e)&&(i=(7&e)<<18|l()<<12|l()<<6|l())>=65536&&i<=1114111)return i
throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),n=t.length,r=-1,i="";++r<n;)i+=c(t[r])
return i},e.decode=function(e){t=o(e),n=t.length,r=0
for(var s,a=[];!1!==(s=u());)a.push(s)
return function(e){for(var t,n=e.length,r=-1,o="";++r<n;)(t=e[r])>65535&&(o+=i((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=i(t)
return o}(a)}}(t)},92:(e,t,n)=>{"use strict"
n(491).polyfill()},215:(e,t,n)=>{var r,i,o
void 0===(i="function"==typeof(r=o=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e]
for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function i(){}function o(t,n,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():""
try{var s=JSON.stringify(n);/^[\{\[]/.test(s)&&(n=s)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape)
var a=""
for(var c in o)o[c]&&(a+="; "+c,!0!==o[c]&&(a+="="+o[c].split(";")[0]))
return document.cookie=t+"="+n+a}}function s(e,n){if("undefined"!=typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],s=0;s<o.length;s++){var a=o[s].split("="),c=a.slice(1).join("=")
n||'"'!==c.charAt(0)||(c=c.slice(1,-1))
try{var l=t(a[0])
if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(i[l]=c,e===l)break}catch(e){}}return e?i[e]:i}}return i.set=o,i.get=function(e){return s(e,!1)},i.getJSON=function(e){return s(e,!0)},i.remove=function(t,n){o(t,"",e(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}((function(){}))})?r.call(t,n,t,e):r)||(e.exports=i),e.exports=o()},471:e=>{for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1)
e.exports=function(e,n){var r=n||0,i=t
return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},491:e=>{"use strict"
function t(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object")
for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r]
if(null!=i)for(var o=Object.keys(Object(i)),s=0,a=o.length;s<a;s++){var c=o[s],l=Object.getOwnPropertyDescriptor(i,c)
void 0!==l&&l.enumerable&&(n[c]=i[c])}}return n}e.exports={assign:t,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})}}},550:(e,t,n)=>{var r=n(814),i=n(471)
e.exports=function(e,t,n){var o=t&&n||0
"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null)
var s=(e=e||{}).random||(e.rng||r)()
if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[o+a]=s[a]
return t||i(s)}},814:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(t){var n=new Uint8Array(16)
e.exports=function(){return t(n),n}}else{var r=new Array(16)
e.exports=function(){for(var e,t=0;t<16;t++)3&t||(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255
return r}}},914:function(e,t,n){var r
e=n.nmd(e),function(){var i=(e&&e.exports,"object"==typeof n.g&&n.g)
i.global!==i&&i.window
var o=function(e){this.message=e};(o.prototype=new Error).name="InvalidCharacterError"
var s=function(e){throw new o(e)},a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=/[\t\n\f\r ]/g,l={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&s("The string to be encoded contains characters outside of the Latin1 range.")
for(var t,n,r,i,o=e.length%3,c="",l=-1,u=e.length-o;++l<u;)t=e.charCodeAt(l)<<16,n=e.charCodeAt(++l)<<8,r=e.charCodeAt(++l),c+=a.charAt((i=t+n+r)>>18&63)+a.charAt(i>>12&63)+a.charAt(i>>6&63)+a.charAt(63&i)
return 2==o?(t=e.charCodeAt(l)<<8,n=e.charCodeAt(++l),c+=a.charAt((i=t+n)>>10)+a.charAt(i>>4&63)+a.charAt(i<<2&63)+"="):1==o&&(i=e.charCodeAt(l),c+=a.charAt(i>>2)+a.charAt(i<<4&63)+"=="),c},decode:function(e){var t=(e=String(e).replace(c,"")).length
t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9/]/.test(e))&&s("Invalid character: the string to be decoded is not correctly encoded.")
for(var n,r,i=0,o="",l=-1;++l<t;)r=a.indexOf(e.charAt(l)),n=i%4?64*n+r:r,i++%4&&(o+=String.fromCharCode(255&n>>(-2*i&6)))
return o},version:"0.1.0"}
void 0===(r=function(){return l}.call(t,n,t,e))||(e.exports=r)}()},916:()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var n=this.event&&this.event.type,r="unload"===n||"beforeunload"===n,i="XMLHttpRequest"in this?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")
i.open("POST",e,!r),i.withCredentials=!0,i.setRequestHeader("Accept","*/*"),"string"==typeof t?(i.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),i.responseType="text/plain"):t instanceof Blob&&t.type&&i.setRequestHeader("Content-Type",t.type)
try{i.send(t)}catch(e){return!1}return!0}function n(){return"navigator"in this&&"sendBeacon"in this.navigator}(function(){n.call(this)||("navigator"in this||(this.navigator={}),this.navigator.sendBeacon=t.bind(this))}).call("object"===("undefined"==typeof window?"undefined":e(window))?window:{})},976:function(e,t){var n,r
void 0===(r="function"==typeof(n=function(){var e=function(){},t={},n={},r={}
function i(e,t){if(e){var i=r[e]
if(n[e]=t,i)for(;i.length;)i[0](e,t),i.splice(0,1)}}function o(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function s(t,n,r,i){var o,a,c=document,l=r.async,u=(r.numRetries||0)+1,h=r.before||e,d=t.replace(/^(css|img)!/,"")
i=i||0,/(^css!|\.css$)/.test(t)?((a=c.createElement("link")).rel="stylesheet",a.href=d,(o="hideFocus"in a)&&a.relList&&(o=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(a=c.createElement("img")).src=d:((a=c.createElement("script")).src=t,a.async=void 0===l||l),a.onload=a.onerror=a.onbeforeload=function(e){var c=e.type[0]
if(o)try{a.sheet.cssText.length||(c="e")}catch(e){18!=e.code&&(c="e")}if("e"==c){if((i+=1)<u)return s(t,n,r,i)}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet"
n(t,c,e.defaultPrevented)},!1!==h(t,a)&&c.head.appendChild(a)}function a(e,n,r){var a,c
if(n&&n.trim&&(a=n),c=(a?r:n)||{},a){if(a in t)throw"LoadJS"
t[a]=!0}function l(t,n){!function(e,t,n){var r,i,o=(e=e.push?e:[e]).length,a=o,c=[]
for(r=function(e,n,r){if("e"==n&&c.push(e),"b"==n){if(!r)return
c.push(e)}--o||t(c)},i=0;i<a;i++)s(e[i],r,n)}(e,(function(e){o(c,e),t&&o({success:t,error:n},e),i(a,e)}),c)}if(c.returnPromise)return new Promise(l)
l()}return a.ready=function(e,t){return function(e,t){e=e.push?e:[e]
var i,o,s,a=[],c=e.length,l=c
for(i=function(e,n){n.length&&a.push(e),--l||t(a)};c--;)o=e[c],(s=n[o])?i(o,s):(r[o]=r[o]||[]).push(i)}(e,(function(e){o(t,e)})),a},a.done=function(e){i(e,[])},a.reset=function(){t={},n={},r={}},a.isDefined=function(e){return e in t},a})?n.apply(t,[]):n)||(e.exports=r)}},t={}
function n(r){var i=t[r]
if(void 0!==i)return i.exports
var o=t[r]={id:r,loaded:!1,exports:{}}
return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis
try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)
var r={}
return(()=>{"use strict"
n.r(r),n.d(r,{HorizonClient:()=>At,IDManager:()=>Pt,Settings:()=>w}),n(92)
var e=n(550),t=n.n(e)
const i=function(e,t){var n=(window.horizonResources=window.horizonResources||{},window.horizonResources)
return n[e]=n[e]||t,n[e]},o={MINIMUM:50,MAXIMUM:1e3,DEFAULT:100},s={MINIMUM:1,MAXIMUM:100,DEFAULT:10},a={MINIMUM:5e3,MAXIMUM:2e4,DEFAULT:1e4}
var c="QUEUE_STATUS",l="SEND_STATUS",u="ID_STATUS",h="SCHEMAS_STATUS",d="REQUEUING_STATUS",p="VALIDATION_STATUS",f="DISCARDED_BY_OVERFLOW",m="DISCARDED_BY_EXPIRED",g="QUEUE_VALIDATED_CURRENT_SIZE",v="SEND_FAILURE",b="IO_EXCEPTION",y="SUCCESS",E="FAILED",_={AVOID_COOKIE_USAGE:!1,EVENTS_BUFFER_SIZE:100,EVENTS_SENDER_INTERVAL:1e4,EVENTS_SENDER_MIN_INTERVAL:5e3,EVENTS_SENDER_MAX_INTERVAL:3e4,EVENTS_DISCARD_AFTER_MSECS:36e5,EVENTS_BULK_SIZE:10,HORIZON_CALLBACK_STACK_LIMIT:1e3,HORIZON_CONFIGS_HOST:"https://horizon-config-api-gcp-us-prod.apps.tsuru.gcp.i.globo/",HORIZON_TRACK_IDENTIFICATION_RESOURCE:"id",HORIZON_TRACK_HOST:"horizon-track.",HORIZON_CLIENT_UUID:i("clientInstanceUUID",t()()),HORIZON_REQUEST_ENCODING:"base64",HORIZON_SCHEMAS_HOST:"horizon-schemas.",IDENTIFICATION_LOAD_RETRY_AFTER_MSECS:5e3,PACKAGE_VERSION:"3.8.2",SCHEMA_VALIDATOR_SCRIPT_URL:"s3.glbimg.com/cdn/libs/tv4/1.3.0/tv4.min.js",SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES:2,SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS:1e4,USE_HTTPS:!0,METRICS_SEND_INTERVAL:18e4},O=function(e,t,n,r){_[e]=t<=n?n:t>=r?r:t},S={avoidCookieUsage:function(){_.AVOID_COOKIE_USAGE=!0},useHTTPOnly:function(){_.USE_HTTPS=!1},useQAConfiguration:function(){_.HORIZON_TRACK_HOST="horizon-track.qa.globoi.com",_.HORIZON_SCHEMAS_HOST="horizon-schemas.qa.globoi.com",_.HORIZON_CONFIGS_HOST="horizon-config-api-gcp-qa.rpaasv2-be.tsuru.dev.gcp.i.globo",_.HORIZON_REQUEST_ENCODING="json"},useJSONEncoding:function(){_.HORIZON_REQUEST_ENCODING="json"},changeEventbusBufferSize:function(e){!e||!Number.isInteger(e)||e<=0||(O("EVENTS_BUFFER_SIZE",e,o.MINIMUM,o.MAXIMUM),console.log("changeEventbusBufferSize: ".concat(e)))},changeEventbusBulkSize:function(e){!e||!Number.isInteger(e)||e<=0||O("EVENTS_BULK_SIZE",e,s.MINIMUM,s.MAXIMUM)},changeEventbusSenderInterval:function(e){!e||!Number.isInteger(e)||e<=0||O("EVENTS_SENDER_INTERVAL",e,a.MINIMUM,a.MAXIMUM)}}
const w=Object.assign(_,S)
var I=n(976),T=n.n(I),C={COMPONENT_NOT_READY:"[Horizon] Component is not ready.",COMPONENT_UNAVAILABLE:"[Horizon] Class or function is required.",DUPLICATED_SCHEMA:"[Horizon] Duplicated schema.",ERROR_LOADING_RESOURCE:"[Horizon] Failed to load resource.",INVALID_AUTH_TOKEN:"[Horizon] Invalid authorization token.",INVALID_DATA:"[Horizon] Invalid data.",INVALID_DATE:"[Horizon] Invalid date-time RFC 3339 format.",INVALID_STRING_NUMERIC_STRING:"[Horizon] numericString should be string.",INVALID_EMPTY_NUMERIC_STRING:"[Horizon] numericString should be empty.",INVALID_NUMERIC_STRING:"[Horizon] Invalid number. Field with NumericString must to be number.",INVALID_ENVIRONMENT:"[Horizon] Invalid environment value.",INVALID_FORMAT:"[Horizon] Invalid event format.",INVALID_REQUEST:"[Horizon] Invalid request.",INVALID_TIMESTAMP:"[Horizon] Invalid timestamp.",INVALID_VERSION_FORMAT:"[Horizon] Invalid version format.",INVALID_RELATION_ID:"[Horizon] Invalid relation identification.",LIMIT_EXCEEDED:"[Horizon] Resource limit exceeded.",MUST_BE_DEFINED:"[Horizon] Parameter or argument must be defined",SCHEMA_VALIDATOR_ERROR_LOADING:"[Horizon] Could not load SchemaValidator.",UNSUPPORTED_TYPE:"[Horizon] Unsupported type.",UNSUPPORTED_TENANT:"[Horizon] Unsupported tenant.",UNSUPPORTED_ENCODER:"[Horizon] Unsupported encoder.",USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE:"[Horizon] Can not set or remove a logged user when AVOID_COOKIE_USAGE is not enabled."},x={mustBeDefined:function(e){throw new Error("".concat(C.MUST_BE_DEFINED,": ").concat(e,"."))}}
const j=Object.assign(C,x)
function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e){var t=function(e){if("object"!=A(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=A(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==A(t)?t:t+""}const N=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=new Map},(t=[{key:"addMetric",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])this.data.set(e,t)
else{var n=this.data.get(e)||0
this.data.set(e,n+t)}}},{key:"getMetrics",value:function(){return new Map(this.data)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t}()
function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t,n){return(t=D(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){var t=function(e){if("object"!=R(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=R(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==R(t)?t:t+""}var M=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.metricCollectors=k(k(k(k(k(k({},c,{}),l,{}),u,{}),h,{}),d,{}),p,{}),this.allTenants=[],this.initialQueueSizeValidated=0,this.initialQueueSizeUnvalidated=0,this.horizonClientUUID={}},(t=[{key:"addMetric",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"general"
null!==e&&(this.metricCollectors[e][r]||(this.metricCollectors[e][r]=new N,"general"===r||this.allTenants.includes(r)||this.allTenants.push(r)),e===c&&t===g?this.metricCollectors[e][r].addMetric(t,n,!0):this.metricCollectors[e][r].addMetric(t,n))}},{key:"getMetrics",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"general"
return this.metricCollectors[e]&&this.metricCollectors[e][t]?this.metricCollectors[e][t].getMetrics():null}},{key:"addHttpMetric",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"general"
null!==e&&(this.metricCollectors[e][r]||(this.metricCollectors[e][r]=new N,"general"===r||this.allTenants.includes(r)||this.allTenants.push(r)),this.metricCollectors[e][r].addMetric(t,n))}},{key:"getHttpMetrics",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"general"
return this.metricCollectors[e]&&this.metricCollectors[e][t]?this.metricCollectors[e][t].getMetrics():null}},{key:"setCurrentHorizonClientUUID",value:function(e,t){this.horizonClientUUID[e]=t}},{key:"getCurrentHorizonClientUUID",value:function(e){return this.horizonClientUUID[e]}},{key:"getAllTenants",value:function(){return this.allTenants}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t}()
const L=function(){var e=i("metrics",{})
return e.metricCollector||(e.metricCollector=new M),e.metricCollector}
function H(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e,t,n){return(t=function(e){var t=function(e){if("object"!=U(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=U(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==U(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var F={ready:[]},B=["url"],G=function(){return!!window.tv4},z=function(e){return null===e||isNaN(e)&&!isNaN(Date.parse(e))?null:j.INVALID_DATE},q=function(e){return"string"!=typeof e?j.INVALID_STRING_NUMERIC_STRING:""===e.trim()?j.INVALID_EMPTY_NUMERIC_STRING:Number.isFinite(Number(e))?null:j.INVALID_NUMERIC_STRING}
const W={validateFor:function(e,t,n){var r=L()
if(!G())throw new Error("".concat(j.ERROR_LOADING_RESOURCE," Validator is not ready."))
if(!t)throw r.addMetric(p,E,1,n),new Error("".concat(j.INVALID_DATA," Argument: schema."))
if(!/\d+\.\d+/.test(e.version))throw r.addMetric(p,E,1,n),new Error(j.INVALID_VERSION_FORMAT)
if(!tv4.validate(e.properties,t))throw r.addMetric(p,E,1,n),new Error("".concat(j.INVALID_DATA," ").concat(e.id," ").concat(e.version,". ").concat(tv4.error))},validateArgs:function(e,t){var n=L(),r=Object.prototype.hasOwnProperty
if(!(e&&r.call(e,"id")&&r.call(e,"version")&&r.call(e,"properties")))throw n.addMetric(p,E,1,t),new Error("".concat(j.INVALID_FORMAT," Missing properties: ").concat(JSON.stringify(e)))
if("string"!=typeof e.id||"string"!=typeof e.version||"object"!==U(e.properties))throw n.addMetric(p,E,1,t),new Error("".concat(j.INVALID_FORMAT," Wrong object type: ").concat(JSON.stringify(e)))
if(B.filter((function(t){return e[t]&&"string"!=typeof e[t]})).length>0)throw n.addMetric(p,E,1,t),new Error("".concat(j.INVALID_FORMAT," Wrong object type: ").concat(JSON.stringify(e)))
if(e.id.length<2||e.version.length<3)throw n.addMetric(p,E,1,t),new Error("".concat(j.INVALID_FORMAT," Invalid property size: ").concat(JSON.stringify(e)))
var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?H(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)
delete i.id,delete i.version,delete i.properties,delete i.contentType
var o=Object.keys(i)
if(o.length>0&&!o.every((function(e){return-1!==B.indexOf(e)})))throw n.addMetric(p,E,1,t),new Error("".concat(j.INVALID_FORMAT," Extra keys aren't allowed: ").concat(JSON.stringify(i)))},tv4IsValidData:z,tv4IsNumericString:q,isReady:G,onReady:function(e){if(G())return e()
if(F.ready.length>w.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(j.LIMIT_EXCEEDED," Validator callback stack."))
return F.ready.unshift(e)},load:function(){if(!T().isDefined("tv4")){var e=w.USE_HTTPS?"https://":"http://",t="".concat(e).concat(w.SCHEMA_VALIDATOR_SCRIPT_URL)
T()([t],"tv4",{async:!0,numRetries:w.SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES,success:function(){tv4.addFormat("date-time",z),tv4.addFormat("numericString",q),F.ready.forEach((function(e){return e()}))},error:function(e){throw new Error("".concat(j.SCHEMA_VALIDATOR_ERROR_LOADING," ").concat(e))}})}}}
function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,i,o,s,a=[],c=!0,l=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
c=!1}else for(;!(c=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return K(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function J(e){var t=function(e){if("object"!=$(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=$(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==$(t)?t:t+""}const Q=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.metricCollector=t},(t=[{key:"formatQueueMetric",value:function(e){return[{queueOverflow:e&&e.get("DISCARDED_BY_OVERFLOW")||0,expired:e&&e.get("DISCARDED_BY_EXPIRED")||0,validatedCurrentSize:e&&e.get("QUEUE_VALIDATED_CURRENT_SIZE")||0,unvalidatedCurrentSize:e&&e.get("QUEUE_UNVALIDATED_CURRENT_SIZE")||0}]}},{key:"formatSendStatusHttpCodeMetric",value:function(e){return e?Array.from(e.entries()).map((function(e){var t=Z(e,2)
return{sendStatusCode:t[0],sendStatusQuantity:t[1]}})):[]}},{key:"formatIdStatusHttpCodeMetric",value:function(e){return e?Array.from(e.entries()).map((function(e){var t=Z(e,2)
return{idStatusCode:t[0],idStatusQuantity:t[1]}})):[]}},{key:"formatSchemaStatusHttpCodeMetric",value:function(e){return e?Array.from(e.entries()).map((function(e){var t=Z(e,2)
return{schemaStatusCode:t[0],schemaStatusQuantity:t[1]}})):[]}},{key:"formatRequeuingMetric",value:function(e){var t=v,n=b
return[{requeuingStatusResponse:t.toLowerCase(),requeuingStatusQuantity:e&&e.get(t)||0},{requeuingStatusResponse:n.toLowerCase(),requeuingStatusQuantity:e&&e.get(n)||0}]}},{key:"formatValidationMetric",value:function(e){var t=y,n=E
return[{validationStatusResponse:t.toLowerCase(),validationStatusQuantity:e&&e.get(t)||0},{validationStatusResponse:n.toLowerCase(),validationStatusQuantity:e&&e.get(n)||0}]}},{key:"formatConfigurationStatusMetric",value:function(e){var t=w.USE_HTTPS,n=w.AVOID_COOKIE_USAGE,r=w.HORIZON_TRACK_HOST,i=w.HORIZON_SCHEMAS_HOST,o=w.HORIZON_REQUEST_ENCODING,s=w.EVENTS_BUFFER_SIZE,a=w.EVENTS_BULK_SIZE,c=w.EVENTS_SENDER_INTERVAL
return JSON.stringify({USE_HTTPS:t,AVOID_COOKIE_USAGE:n,HORIZON_TRACK_HOST:r,HORIZON_SCHEMAS_HOST:i,HORIZON_REQUEST_ENCODING:o,EVENTS_BUFFER_SIZE:s,EVENTS_BULK_SIZE:a,EVENTS_SENDER_INTERVAL:c,HORIZON_CLIENT_UUID:this.metricCollector.getCurrentHorizonClientUUID(e),TENANTS_IN_INSTANCE:this.metricCollector.getAllTenants()})}},{key:"reportAllMetrics",value:function(e){var t=this.metricCollector.getHttpMetrics(l,e),n=this.metricCollector.getHttpMetrics(u),r=this.metricCollector.getHttpMetrics(h),i=this.metricCollector.getMetrics(c,e),o=this.metricCollector.getMetrics(d,e),s=this.metricCollector.getMetrics(p,e)
return{id:"horizon-sdk-metrics",version:"1.1",contentType:"metrics",properties:{queueStatus:this.formatQueueMetric(i),sendStatus:this.formatSendStatusHttpCodeMetric(t),idStatus:this.formatIdStatusHttpCodeMetric(n),schemaStatus:this.formatSchemaStatusHttpCodeMetric(r),requeuingStatus:this.formatRequeuingMetric(o),validationStatus:this.formatValidationMetric(s),configurationStatus:this.formatConfigurationStatusMetric(e)}}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t}()
function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e){var t=function(e){if("object"!=X(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=X(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==X(t)?t:t+""}var ee=function(){return e=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lastMetricsSentTimestamp={},this.metricsSendInterval=t,this.initialDelaySet=n,this.wasFirstSend={}},(t=[{key:"shouldSendMetricsNow",value:function(e){var t=Date.now()
return t-(this.lastMetricsSentTimestamp[e]||0)+100>=(this.wasFirstSend[e]?this.metricsSendInterval:this.initialDelaySet)&&(this.lastMetricsSentTimestamp[e]=t,this.wasFirstSend[e]=!0,!0)}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Y(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t}()
function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e){var t=function(e){if("object"!=te(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=te(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==te(t)?t:t+""}const re=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.interval=0,this.tickIntervalId=0,this.callbacks=[]},(t=[{key:"isRunning",get:function(){return!!this.tickIntervalId}},{key:"tick",value:function(){var e=this
this.callbacks.forEach((function(t){return t(e)}))}},{key:"start",value:function(){return this.tickIntervalId=setInterval(this.tick.bind(this),this.interval),this}},{key:"stop",value:function(){return clearInterval(this.tickIntervalId),this.tickIntervalId=0,this}},{key:"reschedule",value:function(e){return this.stop().every(e).start()}},{key:"every",value:function(e){return this.interval=e,this}},{key:"call",value:function(e){return this.callbacks.push(e),this}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ne(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t}()
n(916)
var ie=n(215),oe=n.n(ie)
const se=function(e){var t=w.EVENTS_SENDER_MIN_INTERVAL,n=w.EVENTS_SENDER_MAX_INTERVAL,r=Number(oe().get("_hzt.interval"))||w.EVENTS_SENDER_INTERVAL
r<=n&&r>=t&&e.interval!==r&&e.reschedule(r)}
function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ue(r.key),r)}}function ue(e){var t=function(e){if("object"!=ae(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=ae(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==ae(t)?t:t+""}const he=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.MAXIMUM,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._queue=[],this.maxSize=n,this.metricCollector=r,this.queueName=t}return t=e,r=[{key:"fromArray",value:function(t,n){var r=new e(this.productName,n,this.metricCollector)
return t.forEach((function(e){return r.push(e)})),r}}],(n=[{key:"length",get:function(){return this._queue.length}},{key:"items",get:function(){return JSON.parse(JSON.stringify(this._queue))}},{key:"push",value:function(e){this.metricDiscardedEvents(),this._queue=[e].concat(function(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ce(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this.slice(0,this.maxSize-1)))}},{key:"metricDiscardedEvents",value:function(){if(this.metricCollector){var e=this._queue.length
this.slice(0,this.maxSize-1).length<e&&this.metricCollector.addMetric(c,f,this.queueName)}}},{key:"forEach",value:function(e){return this._queue.forEach(e)}},{key:"slice",value:function(e,t){return this._queue.slice(e,t)}},{key:"splice",value:function(e,t){return this._queue.splice(e,t)}},{key:"clear",value:function(){this._queue=[]}},{key:"filter",value:function(t){return e.fromArray(this._queue.filter(t),this.maxSize)}}])&&le(t.prototype,n),r&&le(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,n,r}()
var de=n(914),pe=n.n(de),fe=n(31),me=n.n(fe),ge={base64:function(e){var t=new FormData
return t.append("data",pe().encode(me().encode(JSON.stringify(e)))),t.append("encoding","base64"),t},json:function(e){return JSON.stringify(e)}}
function ve(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return be(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,a=0,c=e,d.n=n,s}}
function p(n,r){for(a=n,c=r,t=0;!h&&l&&!i&&t<u.length;t++){var i,o=u[t],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=e):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(t=a<2?e:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),t=o[i]){if(!(t=t.call(o,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,a<2&&(a=0)}else 1===a&&(t=o.return)&&t.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=e}else if((t=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(t){o=e,a=1,c=t}finally{l=1}}return{value:t,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}t=Object.getPrototypeOf
var u=[][r]?t(t([][r]())):(be(t={},r,(function(){return this})),t),h=l.prototype=a.prototype=Object.create(u)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,be(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e}return c.prototype=l,be(h,"constructor",l),be(l,"constructor",c),c.displayName="GeneratorFunction",be(l,i,"GeneratorFunction"),be(h),be(h,i,"Generator"),be(h,r,(function(){return this})),be(h,"toString",(function(){return"[object Generator]"})),(ve=function(){return{w:o,m:d}})()}function be(e,t,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}(be=function(e,t,n,r){function o(t,n){be(e,t,(function(e){return this._invoke(t,n,e)}))}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))})(e,t,n,r)}function ye(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}var Ee=function(e,t,n){var r=n.status,i=n.statusText,o=n.response
r>=200&&r<400?e({status:r,statusText:i,data:JSON.parse(o)}):t({status:r,statusText:i})}
const _e={request:function(e,t){return new Promise((function(n,r){var i=new XMLHttpRequest
i.open(e,t,!0),i.withCredentials=!0,i.onload=function(){return Ee(n,r,i)},i.onerror=function(e){return r(e)},i.send()}))},post:function(){var e,t=(e=ve().m((function e(t,n,r){return ve().w((function(e){for(;;)if(0===e.n)return e.a(2,new Promise((function(e,i){var o=new XMLHttpRequest
o.open("POST",t,!0),o.withCredentials=!0,Object.keys(n).forEach((function(e){o.setRequestHeader(e,n[e])})),o.onload=function(){return Ee(e,i,o)},o.onerror=function(e){return i(e)},o.send(JSON.stringify(r))})))}),e)})),function(){var t=this,n=arguments
return new Promise((function(r,i){var o=e.apply(t,n)
function s(e){ye(o,r,i,s,a,"next",e)}function a(e){ye(o,r,i,s,a,"throw",e)}s(void 0)}))})
return function(e,n,r){return t.apply(this,arguments)}}()}
function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return we(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,a=0,c=e,d.n=n,s}}
function p(n,r){for(a=n,c=r,t=0;!h&&l&&!i&&t<u.length;t++){var i,o=u[t],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=e):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(t=a<2?e:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),t=o[i]){if(!(t=t.call(o,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,a<2&&(a=0)}else 1===a&&(t=o.return)&&t.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=e}else if((t=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(t){o=e,a=1,c=t}finally{l=1}}return{value:t,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}t=Object.getPrototypeOf
var u=[][r]?t(t([][r]())):(we(t={},r,(function(){return this})),t),h=l.prototype=a.prototype=Object.create(u)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,we(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e}return c.prototype=l,we(h,"constructor",l),we(l,"constructor",c),c.displayName="GeneratorFunction",we(l,i,"GeneratorFunction"),we(h),we(h,i,"Generator"),we(h,r,(function(){return this})),we(h,"toString",(function(){return"[object Generator]"})),(Se=function(){return{w:o,m:d}})()}function we(e,t,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}(we=function(e,t,n,r){function o(t,n){we(e,t,(function(e){return this._invoke(t,n,e)}))}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))})(e,t,n,r)}function Ie(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function Te(e){return function(){var t=this,n=arguments
return new Promise((function(r,i){var o=e.apply(t,n)
function s(e){Ie(o,r,i,s,a,"next",e)}function a(e){Ie(o,r,i,s,a,"throw",e)}s(void 0)}))}}function Ce(e){var t=function(e){if("object"!=Oe(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=Oe(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==Oe(t)?t:t+""}var xe=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"send",value:(i=Te(Se().m((function e(t,n){var r,i,o,s=arguments
return Se().w((function(e){for(;;)switch(e.n){case 0:if(r=s.length>2&&void 0!==s[2]?s[2]:"json",n){e.n=1
break}return e.a(2,null)
case 1:return i=this.preparePayload(n,r),o={isSent:!1,status:0},o=this.sendBySendBeacon(t,i),e.n=2,this.sendByFetch(t,i,o)
case 2:return o=e.v,e.n=3,this.sendByXMLHttpRequest(t,i,r,o)
case 3:return o=e.v,e.a(2,o)}}),e,this)}))),function(e,t){return i.apply(this,arguments)})},{key:"preparePayload",value:function(e,t){return function(e){if(!(e in ge))throw new Error("".concat(j.UNSUPPORTED_ENCODER," Invalid ").concat(e," encoder."))
return ge[e]}(t)(e)}},{key:"sendBySendBeacon",value:function(e,t){var n=!1
try{n=navigator.sendBeacon(e,t)}catch(e){n=!1}return{isSent:n,status:200}}},{key:"sendByFetch",value:(r=Te(Se().m((function e(t,n,r){return Se().w((function(e){for(;;)switch(e.n){case 0:if(!r.isSent){e.n=1
break}return e.a(2,r)
case 1:return e.a(2,fetch(t,{method:"POST",credentials:"include",body:n}).then((function(e){return e.ok||console.error("Failed to send Horizon events using fetch. Status ".concat(e.status," - ").concat(e.statusText)),{isSent:e.ok,status:e.status}})).catch((function(e){return{isSent:!1,status:e.status||-1}})))}}),e)}))),function(e,t,n){return r.apply(this,arguments)})},{key:"sendByXMLHttpRequest",value:(n=Te(Se().m((function e(t,n,r,i){var o
return Se().w((function(e){for(;;)switch(e.n){case 0:if(!i.isSent){e.n=1
break}return e.a(2,i)
case 1:return o={},"json"===r&&(o={"Content-Type":"application/json"}),e.a(2,_e.post(t,o,n).then((function(e){return{isSent:!0,status:e.status}})).catch((function(e){return{isSent:!1,status:e.status||-1}})))}}),e)}))),function(e,t,r,i){return n.apply(this,arguments)})}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ce(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t,n,r,i}()
function je(e){return(je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ae(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return Pe(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,a=0,c=e,d.n=n,s}}
function p(n,r){for(a=n,c=r,t=0;!h&&l&&!i&&t<u.length;t++){var i,o=u[t],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=e):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(t=a<2?e:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),t=o[i]){if(!(t=t.call(o,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,a<2&&(a=0)}else 1===a&&(t=o.return)&&t.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=e}else if((t=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(t){o=e,a=1,c=t}finally{l=1}}return{value:t,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}t=Object.getPrototypeOf
var u=[][r]?t(t([][r]())):(Pe(t={},r,(function(){return this})),t),h=l.prototype=a.prototype=Object.create(u)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,Pe(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e}return c.prototype=l,Pe(h,"constructor",l),Pe(l,"constructor",c),c.displayName="GeneratorFunction",Pe(l,i,"GeneratorFunction"),Pe(h),Pe(h,i,"Generator"),Pe(h,r,(function(){return this})),Pe(h,"toString",(function(){return"[object Generator]"})),(Ae=function(){return{w:o,m:d}})()}function Pe(e,t,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}(Pe=function(e,t,n,r){function o(t,n){Pe(e,t,(function(e){return this._invoke(t,n,e)}))}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))})(e,t,n,r)}function Ne(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function Re(e){return function(){var t=this,n=arguments
return new Promise((function(r,i){var o=e.apply(t,n)
function s(e){Ne(o,r,i,s,a,"next",e)}function a(e){Ne(o,r,i,s,a,"throw",e)}s(void 0)}))}}function ke(e){var t=function(e){if("object"!=je(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=je(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==je(t)?t:t+""}var De=function(){return e=function e(t,n,r,i,o,s){var a=this
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentTenant=t||j.mustBeDefined("tenant"),this.instanceID=n||j.mustBeDefined("instanceID"),this.deviceGroup=r||j.mustBeDefined("deviceGroup"),this.environment=i||j.mustBeDefined("environment"),this.metricCollector=s,this.queue=new he(this.currentTenant,w.EVENTS_BUFFER_SIZE,this.metricCollector),this.idManager=o,this.dispatchNumber=1,this.actionCounter=0,this.dispatcher=new xe,this.metricCollector.setCurrentHorizonClientUUID(this.currentTenant,n),(new re).every(w.EVENTS_SENDER_INTERVAL).call(Re(Ae().m((function e(){var t
return Ae().w((function(e){for(;;)switch(e.n){case 0:return a.queue=a.filterQueue(),t=a.prepareRequest(),e.n=1,a.dispatch(t,w.HORIZON_REQUEST_ENCODING)
case 1:e.v||t.actions.forEach((function(e){return a.enqueue(e)}))
case 2:return e.a(2)}}),e)})))).call(se).start()},(t=[{key:"length",get:function(){return this.queue.length}},{key:"setMaxQueueSize",value:function(e){this.queue=he.fromArray(this.queue.items,e)}},{key:"filterQueue",value:function(){var e=+Date.now()-w.EVENTS_DISCARD_AFTER_MSECS,t=this.queue.length,n=this.queue.filter((function(t){return t.actionTs>e})),r=t-n.length
return this.metricCollector.addMetric(c,m,r,this.currentTenant),n}},{key:"prepareRequest",value:function(){var e=this.queue.splice(0,w.EVENTS_BULK_SIZE)
return this.metricCollector.addMetric(c,g,this.queue.length,this.currentTenant),this.actionCounter+=e.length,{horizonClientUUID:this.instanceID,horizonClientTenant:this.currentTenant,horizonClientTs:Date.now(),horizonClientType:"js",horizonClientDeviceGroup:this.deviceGroup,horizonDispatchNumber:this.dispatchNumber,horizonActionCounter:this.actionCounter,horizonEnvironment:this.environment,actions:e}}},{key:"isValidRequest",value:function(e){if(!e||e&&!e.actions)throw new Error(j.INVALID_REQUEST)
return e.actions.length>0}},{key:"prepareUrl",value:function(){var e=w.USE_HTTPS?"https://":"http://",t=this.idManager.getAsKeyValue(),n=t?"?".concat(t):""
return"".concat(e).concat(oe().get("_hzt.host")||w.HORIZON_TRACK_HOST,"/event/").concat(this.currentTenant).concat(n)}},{key:"dispatch",value:(n=Re(Ae().m((function e(t){var n,r,i,o,s=arguments
return Ae().w((function(e){for(;;)switch(e.n){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:"json",this.isValidRequest(t)){e.n=1
break}return e.a(2,!1)
case 1:return r=t.actions.length,i=this.prepareUrl(),this.dispatchNumber+=1,e.n=2,this.dispatcher.send(i,t,n)
case 2:return o=e.v,this.handleMetrics(o.isSent,o.status,r),e.a(2,o.isSent)}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"handleMetrics",value:function(e,t,n){if(this.metricCollector.addHttpMetric(l,t,n,this.currentTenant),!e){var r=-1===t?b:v
this.metricCollector.addHttpMetric(d,r,n,this.currentTenant)}}},{key:"enqueue",value:function(e){if(!e.actionTs)throw new Error(j.INVALID_TIMESTAMP)
this.queue.push(e),this.metricCollector.addMetric(c,g,this.queue.length,this.currentTenant)}},{key:"flush",value:function(){for(;this.queue.length>0;){this.queue=this.filterQueue()
var e=this.prepareRequest()
this.dispatch(e,w.HORIZON_REQUEST_ENCODING)}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ke(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t,n}()
const Me=function(e,t,n,r){var o=i("bus",{}),s="".concat(e,"-").concat(t)
return o[s]||(o[s]=new De(e,w.HORIZON_CLIENT_UUID,t,n,r,L())),o[s]},Le=function(e,t){setTimeout((function(){return e(t)}),1)}
function He(e){return(He="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ve(e){var t=function(e){if("object"!=He(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=He(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==He(t)?t:t+""}var Ue="statusReady",Fe="statusNotReady",Be="statusError",Ge=function(){return i("schemas",{data:{}})},ze=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t,this.state=Fe,this.metricCollector=L(),this.callbacks={onReady:[],onError:[],onRetry:[],onLoad:[]}},(t=[{key:"get",value:function(e,t){var n="".concat(e,"-").concat(t)
if(!this.isReady())throw new Error("".concat(j.COMPONENT_NOT_READY))
var r=Ge().data[n]
if(!r)throw new Error("".concat(j.UNSUPPORTED_TYPE,": ").concat(n))
return r}},{key:"isReady",value:function(){return this.state===Ue}},{key:"retry",value:function(){var e=this
this.state="statusScheduled",this.callbacks.onRetry.forEach((function(e){return e()})),setTimeout((function(){e.state=Fe,e.load()}),w.SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS)}},{key:"onLoad",value:function(e){this.callbacks.onLoad.push(e)}},{key:"onRetry",value:function(e){this.callbacks.onRetry.push(e)}},{key:"onReady",value:function(e){if(this.state===Ue)return e(Ge().data)
if(this.callbacks.onReady.length>w.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(j.LIMIT_EXCEEDED," Schemas callback stack."))
return this.callbacks.onReady.push(e)}},{key:"onError",value:function(e){this.state===Be?e():this.callbacks.onError.push(e)}},{key:"load",value:function(){var e=this,t=Ge()
if(this.state===Fe){this.state="statusLoading",this.callbacks.onLoad.forEach((function(e){return e()}))
var n=w.USE_HTTPS?"https://":"http://"
_e.request("GET","".concat(n).concat(this.url)).then((function(n){var r=n.status,i=n.data
t.data=Object.assign(t.data||{},i),e.metricCollector.addHttpMetric(h,r),e.state=Ue,e.callbacks.onReady.forEach((function(e){return Le(e,t.data)}))})).catch((function(t){var n=t.status
e.metricCollector.addHttpMetric(h,n),e.state=Be,e.callbacks.onError.forEach((function(e){return Le(e,t)})),e.retry()}))}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ve(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t}()
function qe(e){return(qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function We(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return $e(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,a=0,c=e,d.n=n,s}}
function p(n,r){for(a=n,c=r,t=0;!h&&l&&!i&&t<u.length;t++){var i,o=u[t],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=e):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(t=a<2?e:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),t=o[i]){if(!(t=t.call(o,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,a<2&&(a=0)}else 1===a&&(t=o.return)&&t.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=e}else if((t=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(t){o=e,a=1,c=t}finally{l=1}}return{value:t,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}t=Object.getPrototypeOf
var u=[][r]?t(t([][r]())):($e(t={},r,(function(){return this})),t),h=l.prototype=a.prototype=Object.create(u)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,$e(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e}return c.prototype=l,$e(h,"constructor",l),$e(l,"constructor",c),c.displayName="GeneratorFunction",$e(l,i,"GeneratorFunction"),$e(h),$e(h,i,"Generator"),$e(h,r,(function(){return this})),$e(h,"toString",(function(){return"[object Generator]"})),(We=function(){return{w:o,m:d}})()}function $e(e,t,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}($e=function(e,t,n,r){function o(t,n){$e(e,t,(function(e){return this._invoke(t,n,e)}))}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))})(e,t,n,r)}function Ze(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function Ke(e){var t=function(e){if("object"!=qe(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=qe(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==qe(t)?t:t+""}var Je=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.protocol=w.USE_HTTPS?"https://":"http://",this.url="".concat(w.HORIZON_TRACK_HOST,"/configs"),this._samplingCache={}},(t=[{key:"fetchConfigRemote",value:(n=We().m((function e(t){var n,r,i,o
return We().w((function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,_e.request("GET","".concat(this.protocol).concat(this.url,"?tenant=").concat(t,"&platform=js"))
case 1:return r=e.v,i=r.data,o=(null==i||null===(n=i.Config)||void 0===n?void 0:n.sample)||null,this._samplingCache[t]=o,e.a(2,i.Config)
case 2:return e.p=2,e.v,e.a(2,null)}}),e,this,[[0,2]])})),r=function(){var e=this,t=arguments
return new Promise((function(r,i){var o=n.apply(e,t)
function s(e){Ze(o,r,i,s,a,"next",e)}function a(e){Ze(o,r,i,s,a,"throw",e)}s(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"getConfig",value:function(e){return this._samplingCache[e]}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ke(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t,n,r}(),Qe=function(e){return window.cdaaas&&window.cdaaas.SETTINGS?window.cdaaas.SETTINGS[e]:null},Xe=function(e){return window.utag_data?window.utag_data[e]:null}
const Ye=function(e){try{var t=e.split(".")[1]
if(!t)return null
var n,r=t.replace(/-/g,"+").replace(/_/g,"/")
if("function"!=typeof atob)throw new Error("atob function not supported.")
return n=decodeURIComponent(atob(r).split("").map((function(e){var t=e.charCodeAt(0).toString(16).padStart(2,"0")
return"%".concat(t)})).join("")),JSON.parse(n)}catch(e){return null}}
function et(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?et(Object(n),!0).forEach((function(t){at(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):et(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function nt(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return rt(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,a=0,c=e,d.n=n,s}}
function p(n,r){for(a=n,c=r,t=0;!h&&l&&!i&&t<u.length;t++){var i,o=u[t],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=e):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(t=a<2?e:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),t=o[i]){if(!(t=t.call(o,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,a<2&&(a=0)}else 1===a&&(t=o.return)&&t.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=e}else if((t=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(t){o=e,a=1,c=t}finally{l=1}}return{value:t,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}t=Object.getPrototypeOf
var u=[][r]?t(t([][r]())):(rt(t={},r,(function(){return this})),t),h=l.prototype=a.prototype=Object.create(u)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,rt(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e}return c.prototype=l,rt(h,"constructor",l),rt(l,"constructor",c),c.displayName="GeneratorFunction",rt(l,i,"GeneratorFunction"),rt(h),rt(h,i,"Generator"),rt(h,r,(function(){return this})),rt(h,"toString",(function(){return"[object Generator]"})),(nt=function(){return{w:o,m:d}})()}function rt(e,t,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}(rt=function(e,t,n,r){function o(t,n){rt(e,t,(function(e){return this._invoke(t,n,e)}))}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))})(e,t,n,r)}function it(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function ot(e){return function(){var t=this,n=arguments
return new Promise((function(r,i){var o=e.apply(t,n)
function s(e){it(o,r,i,s,a,"next",e)}function a(e){it(o,r,i,s,a,"throw",e)}s(void 0)}))}}function st(e){return(st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function at(e,t,n){return(t=ct(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ct(e){var t=function(e){if("object"!=st(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=st(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==st(t)?t:t+""}var lt=function(){return i("idManager",{loggedIDs:null,anonymousIDs:null,sessionIDs:null})},ut=["GLBID","GST","EXT_ID","globoId"],ht="statusReady",dt="statusNotReady",pt="statusError",ft=function(){return e=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state=n?ht:dt,this.metricCollector=L(),this.url=t,this.bypass=n,this.callbacks={onReady:[],onError:[],onRetry:[],onLoad:[]}},(t=[{key:"onLoad",value:function(e){this.callbacks.onLoad.push(e)}},{key:"onRetry",value:function(e){this.callbacks.onRetry.push(e)}},{key:"onReady",value:function(e){if(this.state===ht)return e(this.getClientIDs())
if(this.callbacks.onReady.length>w.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(j.LIMIT_EXCEEDED," IDManager callback stack."))
return this.callbacks.onReady.push(e)}},{key:"onError",value:function(e){this.state===pt?e():this.callbacks.onError.push(e)}},{key:"getAsKeyValue",value:function(){if(!this.isReady())throw new Error("".concat(j.COMPONENT_NOT_READY))
if(this.bypass)return""
var e=this.getClientIDs()
return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}},{key:"getClientIDs",value:function(){var e=lt()
return Object.assign(e.loggedIDs||{},e.anonymousIDs||{},e.sessionIDs||{})}},{key:"isReady",value:function(){return this.state===ht}},{key:"retry",value:function(){var e=this
this.state="statusScheduled",this.callbacks.onRetry.forEach((function(e){return e()})),setTimeout((function(){e.state=dt,e.load()}),w.IDENTIFICATION_LOAD_RETRY_AFTER_MSECS)}},{key:"setLoggedUser",value:function(e,t){if(-1===ut.indexOf(e))throw Error(j.INVALID_AUTH_TOKEN)
var n=lt()
n.loggedIDs=Object.assign(n.loggedIDs||{},at({},e,t))}},{key:"setAnonymousUser",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=lt()
if(null==n.anonymousIDs||t){if(!("glb_uid"in e)||!("glb_uid_jwt"in e))throw j.mustBeDefined("glb_uid and glb_uid_jwt")
var r={glb_uid:e.glb_uid,glb_uid_jwt:e.glb_uid_jwt}
n.anonymousIDs=Object.assign(n.anonymousIDs||{},r)}}},{key:"getAnonymousUser",value:function(){return lt().anonymousIDs}},{key:"getHsid",value:function(){return lt().sessionIDs}},{key:"setSessionID",value:function(e){e.hsid&&(lt().sessionIDs={hsid:e.hsid})}},{key:"removeLoggedUser",value:function(){var e=lt()
ut.forEach((function(t){e.loggedIDs[t]&&delete e.loggedIDs[t]}))}},{key:"load",value:function(){var e=this
if(this.state===dt){this.state="statusLoading",this.callbacks.onLoad.forEach((function(e){return e()}))
var t=w.USE_HTTPS?"https://":"http://"
_e.request("GET","".concat(t).concat(this.url)).then((function(t){var n=t.status,r=t.data
e.metricCollector.addHttpMetric(u,n),e.setSessionID(r),e.setAnonymousUser(r,!1),e.state=ht,e.callbacks.onReady.forEach((function(t){return Le(t,e.getClientIDs())}))})).catch((function(t){var n=t.status
e.metricCollector.addHttpMetric(u,n),e.state=pt,e.callbacks.onError.forEach((function(e){return Le(e,t)})),e.retry()}))}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ct(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,t}(),mt=function(e,t){var n=lt(),r=e||"".concat(w.HORIZON_TRACK_HOST,"/").concat(w.HORIZON_TRACK_IDENTIFICATION_RESOURCE),i=t||!1
return n.instance=new ft(r,i),n.instance.load(),n.instance},gt=function(e){var t=lt()
if(!t.instance){var n=!1===w.AVOID_COOKIE_USAGE
mt(e,n)}return t.instance},vt=function(){var e=ot(nt().m((function e(){var t,n,r
return nt().w((function(e){for(;;)switch(e.n){case 0:if(t=function(e){return Boolean((null==e?void 0:e.glb_uid)&&(null==e?void 0:e.glb_uid_jwt)&&(null==e?void 0:e.hsid))},n={cookies:function(){if(!w.AVOID_COOKIE_USAGE)return{glb_uid:oe().get("glb_uid"),glb_uid_jwt:oe().get("glb_uid_jwt"),hsid:oe().get("hsid")}},idManager:function(){var e=ot(nt().m((function e(){var n,r,i,o
return nt().w((function(e){for(;;)switch(e.n){case 0:return n=function(){var e=ot(nt().m((function e(t){return nt().w((function(e){for(;;)switch(e.n){case 0:if(t.isReady()){e.n=1
break}return e.n=1,new Promise((function(e,n){t.onError((function(){n(new Error("Error loading IDManager"))})),t.onReady(e)}))
case 1:return e.a(2)}}),e)})))
return function(t){return e.apply(this,arguments)}}(),r=function(){return mt()},i=function(){var e=ot(nt().m((function e(){var t,i,o=arguments
return nt().w((function(e){for(;;)switch(e.n){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:void 0,i=gt(),t===i&&(i=r()),e.n=1,n(i)
case 1:return e.a(2,tt(tt({managerInstance:i},i.getAnonymousUser()),i.getHsid()))}}),e)})))
return function(){return e.apply(this,arguments)}}(),e.n=1,i(void 0)
case 1:if(o=e.v,t(o)){e.n=3
break}return e.n=2,i(o.managerInstance)
case 2:o=e.v
case 3:return delete o.managerInstance,e.a(2,o)}}),e)})))
return function(){return e.apply(this,arguments)}}()},r=n.cookies(),t(r)){e.n=2
break}return e.n=1,n.idManager()
case 1:r=e.v
case 2:return e.a(2,r)}}),e)})))
return function(){return e.apply(this,arguments)}}()
const bt={getInstance:gt,getContextManager:lt,setLoggedUser:function(e,t){if(!w.AVOID_COOKIE_USAGE)throw Error(j.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE)
e&&0!==e.length||j.mustBeDefined("tokenName"),t&&0!==t.length||j.mustBeDefined("tokenValue"),gt().setLoggedUser(e,t)},removeLoggedUser:function(){if(!w.AVOID_COOKIE_USAGE)throw Error(j.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE)
gt().removeLoggedUser()},setAnonymousUser:function(e){gt().setAnonymousUser(e)},getAnonymousUser:function(){var e=ot(nt().m((function e(){var t,n,r
return nt().w((function(e){for(;;)switch(e.n){case 0:return e.n=1,vt()
case 1:return n=e.v,r=n.glb_uid_jwt?null===(t=Ye(n.glb_uid_jwt))||void 0===t?void 0:t.glb_uid:void 0,e.a(2,{glb_uid:n.glb_uid,glb_uid_jwt:n.glb_uid_jwt,glb_uid_public:r})}}),e)})))
return function(){return e.apply(this,arguments)}}(),getHsid:function(){var e=ot(nt().m((function e(){var t
return nt().w((function(e){for(;;)switch(e.n){case 0:return e.n=1,vt()
case 1:return t=e.v,e.a(2,t.hsid)}}),e)})))
return function(){return e.apply(this,arguments)}}()}
function yt(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?yt(Object(n),!0).forEach((function(t){_t(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _t(e,t,n){return(t=Tt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ot(e){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function St(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return wt(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,a=0,c=e,d.n=n,s}}
function p(n,r){for(a=n,c=r,t=0;!h&&l&&!i&&t<u.length;t++){var i,o=u[t],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=e):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(t=a<2?e:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),t=o[i]){if(!(t=t.call(o,c)))throw TypeError("iterator result is not an object")
if(!t.done)return t
c=t.value,a<2&&(a=0)}else 1===a&&(t=o.return)&&t.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=e}else if((t=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(t){o=e,a=1,c=t}finally{l=1}}return{value:t,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}t=Object.getPrototypeOf
var u=[][r]?t(t([][r]())):(wt(t={},r,(function(){return this})),t),h=l.prototype=a.prototype=Object.create(u)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,wt(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e}return c.prototype=l,wt(h,"constructor",l),wt(l,"constructor",c),c.displayName="GeneratorFunction",wt(l,i,"GeneratorFunction"),wt(h),wt(h,i,"Generator"),wt(h,r,(function(){return this})),wt(h,"toString",(function(){return"[object Generator]"})),(St=function(){return{w:o,m:d}})()}function wt(e,t,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(e){i=0}(wt=function(e,t,n,r){function o(t,n){wt(e,t,(function(e){return this._invoke(t,n,e)}))}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))})(e,t,n,r)}function It(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function Tt(e){var t=function(e){if("object"!=Ot(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=Ot(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==Ot(t)?t:t+""}var Ct="stateNotReady",xt="stateLoading",jt=["web","instant-article","app"]
const At=function(){return e=function e(){var n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"web"
if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tenant=r||Qe("SITE_ID")||Xe("ut.profile")||"unknown",this.deviceGroup=o||Qe("MOBILE_GROUP")||Xe("platform")||"unknown",this.initialDelay=6e4,this.defaultContentType=s,-1===jt.indexOf(a))throw Error(j.INVALID_ENVIRONMENT)
this.environment=a,this.validator=W,this.clientVersion=w.PACKAGE_VERSION,this.state=Ct,this.referer=document.referrer
var c=null,l=null,u=null,h=null,d=null,p=null
this.targetHorizonClientUUID=0
var f=function(){return i("horizonActionInfo",{horizonActionSequence:0,horizonClientContextID:t()()})}
this.getHorizonActionSequence=function(){var e=f()
return 2147483647===e.horizonActionSequence&&(e.horizonActionSequence=0),e.horizonActionSequence+=1,e.horizonActionSequence},this.getHorizonClientContextID=function(){return f().horizonClientContextID},this.getHorizonActionExtraAttributes=function(){return""},this.updateHorizonClientContextID=function(){f().horizonClientContextID=t()()},this.setMetricsCollector=function(e){h=e},this.getMetricsCollector=function(){if(!h){var e=L()
n.setMetricsCollector(e)}return h},this.metricsReport=new Q(this.getMetricsCollector()),this.setSamplingManager=function(e){p=e},this.getSamplingManager=function(){if(!p){var e=((t=i("sampling",{})).manager||(t.manager=new Je),t.manager)
n.setSamplingManager(e)}var t
return p},this.loadConfig(this.tenant),this.setMetricsManager=function(e){d=e},this.getMetricsManager=function(){if(!d){var e=(t=w.METRICS_SEND_INTERVAL,r=n.initialDelay,(o=i("metrics",{})).metricManager||(o.metricManager=new ee(t,r)),o.metricManager)
n.setMetricsManager(e)}var t,r,o
return d},this.setSchemasProvider=function(e){c=e},this.getSchemasProvider=function(){if(!c){var e=((t=Ge()).provider||(t.provider=new ze("".concat(w.HORIZON_SCHEMAS_HOST,"/schemas"))),t.provider)
n.setSchemasProvider(e)}var t
return c},this.setEventBus=function(e){l=e},this.getEventBus=function(){if(!l){var e=Me(n.tenant,n.deviceGroup,n.environment,n.getIdManager())
n.setEventBus(e)}return l},this.setIdManager=function(e){u=e},this.getIdManager=function(){if(!u){var e=bt.getInstance()
n.setIdManager(e)}return u},this.isReady=function(){return!!c&&!!u&&n.validator.isReady()&&c.isReady()&&u.isReady()},this.startScheduler=function(e){setTimeout((function(){n.sendMetrics(),(new re).every(w.metricsInterval).call((function(){return n.sendMetrics()})).start()}),e)},this.startScheduler(this.initialDelay),this.normalizeUUID=function(e){for(var t=[],n=0;n<e.length;n+=2){var r=e.substr(n,2)
t.push(parseInt(r,16))}return((t[0]<<24|t[1]<<16|t[2]<<8|t[3])+Math.pow(2,31))/(Math.pow(2,32)-1)},this.targetHorizonClientUUID=this.normalizeUUID(w.HORIZON_CLIENT_UUID),window.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&n.unload()}))},(n=[{key:"loadConfig",value:(r=St().m((function e(t){var n
return St().w((function(e){for(;;)switch(e.n){case 0:return n=this.getSamplingManager(),e.n=1,n.fetchConfigRemote(t)
case 1:return e.a(2)}}),e,this)})),o=function(){var e=this,t=arguments
return new Promise((function(n,i){var o=r.apply(e,t)
function s(e){It(o,n,i,s,a,"next",e)}function a(e){It(o,n,i,s,a,"throw",e)}s(void 0)}))},function(e){return o.apply(this,arguments)})},{key:"useDefaultContentType",value:function(e){this.defaultContentType=e}},{key:"setValidator",value:function(e){this.validator=e}},{key:"setReferer",value:function(e){this.referer=e||document.referrer}},{key:"unload",value:function(){this.flush()}},{key:"getScopeInfo",value:function(e,n){var r={url:document.location.href,actionTs:+Date.now(),horizonClientVersion:this.clientVersion,horizonClientReferer:this.referer,horizonRelationId:e,horizonActionUUID:t()(),horizonActionSequence:this.getHorizonActionSequence(),horizonClientContextID:this.getHorizonClientContextID(),horizonActionExtraAttributes:this.getHorizonActionExtraAttributes()}
return n&&(r.horizonSampling={sampling:n.sampling}),r}},{key:"getSamplingConfig",value:function(e){var t=this.getSamplingManager().getConfig(this.tenant)
if(t){var n=t.find((function(t){return t.schema===e.id}))
if(n)return n}}},{key:"sendMetrics",value:function(){if(this.getMetricsManager().shouldSendMetricsNow(this.tenant)){var e=this.metricsReport.reportAllMetrics(this.tenant)
this.send([e])}}},{key:"validateBeforeEnqueue",value:function(e){var t=this.getSchemasProvider().get(e.id,e.version)
this.validator.validateFor(e,t,this.tenant),this.getMetricsCollector().addMetric(p,y,1,this.tenant)}},{key:"onReady",value:function(e){this.validator.isReady()?this.getSchemasProvider().isReady()?this.getIdManager().isReady()?(this.state="stateReady",e()):(this.state=xt,this.getIdManager().onReady(e),this.getIdManager().load()):(this.state=xt,this.getSchemasProvider().onReady(e),this.getSchemasProvider().load()):(this.state=xt,this.validator.onReady(e),this.validator.load())}},{key:"flush",value:function(){var e=this
this.isReady()?this.getEventBus().flush():this.onReady((function(){return e.flush()}))}},{key:"send",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(null!=n&&"string"!=typeof n)throw new Error("".concat(j.INVALID_RELATION_ID," Wrong relationId type. It should be a String: actual type is ").concat(Ot(n)));[].concat(e).forEach((function(e){var r=t.getSamplingConfig(e)
r&&t.targetHorizonClientUUID>r.sampling||(t.validator.validateArgs(e,t.tenant),t.sendWithInfo(e,t.getScopeInfo(n,r)))}))}},{key:"sendWithInfo",value:function(e,t){var n=this
if(!this.isReady())return this.state===Ct&&this.flush(),void this.onReady((function(){return n.sendWithInfo(e,t)}))
this.validateBeforeEnqueue(e)
var r=Et(Et({},t),e)
r.contentType||(this.defaultContentType||j.mustBeDefined("contentType"),r.contentType=this.defaultContentType),this.getEventBus().enqueue(r)}},{key:"newContextId",value:function(){this.updateHorizonClientContextID()}},{key:"getContextId",value:function(){return this.getHorizonClientContextID()}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Tt(r.key),r)}}(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,n,r,o}()
var Pt={setLoggedUser:bt.setLoggedUser,removeLoggedUser:bt.removeLoggedUser,setAnonymousUser:bt.setAnonymousUser,getAnonymousUser:bt.getAnonymousUser,getHsid:bt.getHsid}})(),r})(),e.exports=r()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(10),i=function(){function e(e,t){this.dt=e,this.ins=t,this.type="throttle",this.out=null,this.id=null}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=null,this.id=null},e.prototype.clearInterval=function(){var e=this.id
null!==e&&clearInterval(e),this.id=null},e.prototype._n=function(e){var t=this,n=this.out
n&&(this.id||(n._n(e),this.id=setInterval((function(){t.clearInterval()}),this.dt)))},e.prototype._e=function(e){var t=this.out
t&&(this.clearInterval(),t._e(e))},e.prototype._c=function(){var e=this.out
e&&(this.clearInterval(),e._c())},e}()
t.default=function(e){return function(t){return new r.Stream(new i(e,t))}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"ElementViewGroup",(function(){return h}))
var r,i=n(9),o=n.n(i),s=n(82),a=n(109),c=n(110),l=n(100)
let u;(r=class extends(Object(c.eventable)(Object(a.drawless)(s.Engine.Component))){constructor(e){super(e),this.children=[],this.pointer=0,this.handleParentVisibility=e=>{this.props.id||e?this.props.id===e&&this.activateChildren():this.activateChildren()},o()(e.radius)||(this.props.radius=1)}getChildContext(){return{parentTrigger:this.context.parentTrigger,parentGroup:this}}activateChildren(){const e=Math.max(this.pointer-this.props.radius,0),t=Math.min(this.pointer+this.props.radius+1,this.children.length)
let n,r=this.children.slice(e,t),i=!1
for(n=0;n<r.length;n+=1)r[n].verifyVisibility()&&(this.pointer=e+n,i=!0)
if(!i)for(r=[].concat(this.children.slice(0,e),this.children.slice(t,this.children.length)),n=0;n<r.length;n+=1)r[n].verifyVisibility()&&(this.pointer=this.children.indexOf(r[n]))}registerChild(e){this.children.push(e)}unregisterChild(e){Object(l.pull)(this.children,e)}componentDidMount(){this.context.parentTrigger.on("visible",this.handleParentVisibility)}componentWillUnmount(){this.context.parentTrigger.off("visible",this.handleParentVisibility)}}).displayName="evg",u=r
const h=u},function(e,t,n){"use strict"
n.r(t),n.d(t,"ReporterCascadeAggregator",(function(){return i}))
var r=n(122)
class i extends r.AbstractReporter{constructor(...e){return super(),this.whitelist=["reporters","debug"],this.reporters=e,new Proxy(this,{get:(e,t)=>{if(e.whitelist.includes(t))return e[t]
for(const n of e.reporters){const e=n[t]
if(void 0!==e)return e}}})}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Scoreboard",(function(){return p}))
var r=n(9),i=n.n(r),o=n(102),s=n.n(o),a=n(82),c=a.Engine.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.Engine.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.Engine.createElement("g",{id:"vs"},a.Engine.createElement("g",null,a.Engine.createElement("polygon",{className:"versus",points:"12.6666667 4.27333333 11.7266667 3.33333333 8 7.06 4.27333333 3.33333333 3.33333333 4.27333333 7.06 8 3.33333333 11.7266667 4.27333333 12.6666667 8 8.94 11.7266667 12.6666667 12.6666667 11.7266667 8.94 8"}),a.Engine.createElement("polygon",{points:"0 0 16 0 16 16 0 16"})))))
function l(){return c}var u=a.Engine.createElement(l,null),h=a.Engine.createElement(l,null)
function d(e){const{away:t,home:n}=e
return i()(t.penalties)&&i()(n.penalties)&&t.penalties+n.penalties>0?a.Engine.createElement("div",{className:"score"},a.Engine.createElement("span",{className:"score-number"},n.score),a.Engine.createElement("span",{className:"score-penalties"},"(",n.penalties),u,a.Engine.createElement("span",{className:"score-penalties"},t.penalties,")"),a.Engine.createElement("span",{className:"score-number"},t.score)):a.Engine.createElement("div",{className:"score"},a.Engine.createElement("span",{className:"score-number"},n.score),h,a.Engine.createElement("span",{className:"score-number"},t.score))}function p(e){const{away:t,home:n,headline:r}=e,i=s()("scoreboard-bastian-feed",{headline:r})
return a.Engine.createElement("div",{className:i},a.Engine.createElement("div",{className:"scoreboard-home-team",title:n.name},a.Engine.createElement("span",{className:"shortName"},n.shortName),a.Engine.createElement("img",{className:"crest",src:n.crest,loading:"lazy"})),a.Engine.createElement(d,{away:t,home:n}),a.Engine.createElement("div",{className:"scoreboard-away-team",title:t.name},a.Engine.createElement("img",{className:"crest",src:t.crest,loading:"lazy"}),a.Engine.createElement("span",{className:"shortName"},t.shortName)))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Horizon",(function(){return v}))
var r=n(1),i=n.n(r),o=n(138),s=n(139),a=n.n(s),c=n(10),l=n.n(c),u=n(20),h=n(75),d=n(23),p=(n(144),n(56)),f=n(24)
let m
class g extends h.EventEmitter{constructor(){super(),setTimeout(()=>{"esppub"!==f.Configs.get("feedType")&&(this.setupClient(),this.init())},0)}setupClient(){d.Globals.location.hostname.includes(".qa.")&&o.Settings.useQAConfiguration()
const e=p.Settings.get("PORTAL"),t=p.Settings.get("DEVICE_GROUP")
i()(e)&&i()(t)?this.client=new o.HorizonClient(e.toLowerCase(),t.toLowerCase(),"feed"):Object(u.warn)("Impossible to configure the Horizon client. PORTAL and/or DEVICE_GROUP are missing.")}init(){const e=l.a.periodic(1e4).filter(()=>"visible"===d.Globals.document.visibilityState),t=l.a.periodic(6e4)
l.a.merge(e,t).compose(a()(1e4)).addListener({next:()=>this.trigger("collect-metrics"),error:()=>{},complete:()=>{}})}report(e,t){const n=new e(t).toSend()
this.client&&this.client.send(n)}}m=new g
const v=m},function(e,t,n){"use strict"
n.r(t),n.d(t,"HorizonBase",(function(){return O})),n.d(t,"PostClick",(function(){return S})),n.d(t,"PostView",(function(){return w})),n.d(t,"PostViewHeadline",(function(){return I}))
var r=n(124),i=n.n(r),o=n(25),s=n.n(o),a=n(117),c=n(132),l=n(218),u=n(135),h=n(22),d=n(222),p=n(136),f=(n(122),n(20))
function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const g={destaque:"d",basico:"b",video:"v",tempo_real:"r",card:"a",cobertura:"u",placeholder:"h",especial_publicitario:"e",publicidade:"p",component:"c"},v={[c.$Advertises.staticName]:"a",[l.$Cards.staticName]:"d",[u.$DistributedComponents.staticName]:"c",[h.$Falkor.staticName]:"f",[d.$PushStream.staticName]:"p",[p.$Recommendation.staticName]:"r"},b=()=>1,y=(e,t)=>n=>{const r=e[n]
return s()(r)?t:r},E={feedType:y({automatico:"a",editorial:"e",elastic:"l",folder:"f",produto:"p",semantico:"s"},"ukn"),format:y(g,"ukn"),grouped:b,pinned:b,source:y(v,"ukn")},_=(e,t)=>t in E?E[t](e):e
class O{constructor(e){this.reporter=e}toSend(){const e={},t=new Set([...this.fields,...this.optionalFields])
for(const r of t){let t
try{t=this.reporter[r]}catch(n){Object(f.error)(n,this.reporter.debug())}if(s()(t)){if(this.fields.includes(r))throw new Error('Field "'+r+'" is required in action sending')}else e[r]=t}return{id:this.schema,version:this.version,properties:i()(e,_)}}}class S extends O{constructor(...e){super(...e),this.schema="bastian-post-click",this.version="1.1",this.fields=["feedId","position","postId"],this.optionalFields=["areaDesktop","contentId"]}}class w extends O{constructor(...e){super(...e),this.schema="bastian-post-view",this.version="2.0",this.fields=["feedId","postId","contentType","feedType","feedViewTime","format","position","size","source","viewTime"],this.optionalFields=["contentId","areaDesktop","attachment","contentStatus","grouped","pinned","wordCountSummary","wordCountTitle"]}}class I extends w{toSend(){const e=super.toSend()
return m({},e,{properties:m({},e.properties,{format:g.destaque,areaDesktop:a.DESKTOP_AREAS.HEADLINE,size:a.POST_SIZES.LARGE})})}}},function(e,t,n){"use strict"
function r(e){return JSON.parse(JSON.stringify(e))}n.r(t),n.d(t,"cloneJSON",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"getCategoryColor",(function(){return o}))
var r=n(147),i=n.n(r)
const o=()=>i()(window,"utag_data.cor_pagina",i()(window,"cdaaas.SETTINGS.COR","#000"))},function(e,t,n){var r=n(148)
e.exports=function(e,t,n){var i=null==e?void 0:r(e,t)
return void 0===i?n:i}},function(e,t,n){var r=n(149),i=n(153)
e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[i(t[n++])]
return n&&n==o?e:void 0}},function(e,t,n){var r=n(3),i=n(150),o=n(151),s=n(121)
e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(s(e))}},function(e,t,n){var r=n(3),i=n(38),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/
e.exports=function(e,t){if(r(e))return!1
var n=typeof e
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(s.test(e)||!o.test(e)||null!=t&&e in Object(t))}},function(e,t,n){var r=n(152),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=r((function(e){var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)})),t}))
e.exports=s},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(155),i=n(158)
e.exports=function(e){if(null==e)return!0
if("string"==typeof e||i(e))return!e.length
if("object"==typeof e){var t=!0
return r(e,(function(){return t=!1,!1})),t}return!0}},function(e,t,n){var r=n(156),i=n(157)
e.exports=function(e,t,n){i(e,(function(i,o){if(r(e,o))return t.call(n,e[o],o,e)}))}},function(e,t){e.exports=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},function(e,t,n){var r,i,o=n(156)
function s(e,t,n,r){return e.call(r,t[n],n,t)}e.exports=function(e,t,n){var a,c=0
for(a in null==r&&function(){for(var e in i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=!0,{toString:null})r=!1}(),e)if(!1===s(t,e,a,n))break
if(r)for(var l=e.constructor,u=!!l&&e===l.prototype;(a=i[c++])&&("constructor"===a&&(u||!o(e,a))||e[a]===Object.prototype[a]||!1!==s(t,e,a,n)););}},function(e,t,n){var r=n(159),i=Array.isArray||function(e){return r(e,"Array")}
e.exports=i},function(e,t,n){var r=n(160)
e.exports=function(e,t){return r(e)===t}},function(e,t){e.exports=function(e){return Object.prototype.toString.call(e).slice(8,-1)}},function(e,t,n){"use strict"
n.r(t),n.d(t,"isLiveVideo",(function(){return o}))
var r=n(1),i=n.n(r)
const o=e=>i()(e)&&"live"===String(e).toLowerCase()},function(e,t,n){"use strict"
n.r(t),n.d(t,"MAB",(function(){return o})),n.d(t,"Alternative",(function(){return s}))
var r=n(227),i=n(163)
class o{constructor(){const e=Object(i.getCanonicalUri)()
this.client=(new r.ABFactory).mab(),this.client.addHeader({"x-canonical-uri":e})}createExperiment(e,{generateIncrement:t=!1}={}){try{return this.client.createExperiment(e,t)}catch(n){return console.error(n.message),null}}async choose(e,{glbExpIdToken:t=null,headers:n=null}={}){try{const{userId:r,userIdType:o,hsId:a}=await Object(i.getTrackingData)(this.client),c=await this.client.choose(e,r,t,a,n,o)
return c.experiments.map(e=>new s(this.client,e,c.glbExpIdToken,r,o,a))}catch(r){return console.warn("[MAB][error]:",r),[]}}}class s{constructor(e,t,n,r,i,o){this.mab=e,this.alt=t,this.glbExpIdToken=n,this.userId=r,this.userIdType=i,this.hsId=o}get name(){return this.alt.name}get alternative(){return this.alt.abAlternative}get arm(){return this.alt.arm}increment({headers:e=[]}={}){const{name:t,arm:n,testId:r,abAlternative:i}=this.alt
this.mab.increment({experiment:t,arm:n,testId:r,abAlternative:i},this.userId,this.glbExpIdToken,this.hsId,e,this.userIdType)}reward({headers:e=[]}={}){const{name:t,arm:n,testId:r,abAlternative:i}=this.alt
this.mab.reward({experiment:t,arm:n,testId:r,abAlternative:i},this.userId,this.glbExpIdToken,this.hsId,e,this.userIdType)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"ABUtils",(function(){return a})),n.d(t,"getCookie",(function(){return c})),n.d(t,"getTrackingData",(function(){return l})),n.d(t,"getCanonicalUri",(function(){return u}))
var r=n(55),i=n(56)
let o={}
o=n(138).IDManager
const s=()=>({device:r.At.smallScreen?"mobile":"web",tenant:i.Settings.get("PORTAL")}),a={getEnv:()=>{const e={"qa-https":e=>e.includes(".qa."),local:e=>e.includes("localhost")}
for(const[t,n]of Object.entries(e))if(n(window.location.href))return t
return"prod-https"},getContext:s,buildName:e=>e(s()),canRun:({tenants:e=null,check:t=(()=>!0),devices:n=null}={})=>{const{device:r,tenant:i}=s(),o=null===n||n.includes(r),a=t(),c=null===e||e.includes(i)
return o&&a&&c}},c=e=>{var t
return(null===(t=document.cookie.split("; ").find(t=>t.startsWith(e+"=")))||void 0===t?void 0:t.split("=")[1])||null},l=async e=>{const t={globoid:e.UserIdType.GLOBOID,anonymous:e.UserIdType.GLB_UID},n={anonymous:async()=>{const{glb_uid:e}=await o.getAnonymousUser()||{glb_uid:null}
return e?{userId:e,userIdType:t.anonymous}:null},globoid:()=>{const e=localStorage.getItem("glb_ppid_data")
try{const{glbId:n}=JSON.parse(e)
return{userId:n,userIdType:t.globoid}}catch(n){return null}},horizonSession:async()=>{const e=await o.getHsid()
return e?{hsId:e}:null}},r={userId:null,userIdType:null,hsId:null}
for(const i of Object.values(n)){const e=await i()
e&&Object.assign(r,e)}return r},u=()=>window.location.href||""},function(e,t,n){"use strict"
function r(){const e=new Map
return{get size(){return e.size},has:t=>e.has(t),empty(e){return!this.has(e)},save({key:t=null,alt:n=null}={}){const r=null!==n&&n.alt
if(!r)return;(null!==t||r&&n.alt.name)&&e.set(t||n.alt.name,n)},alternative:t=>e.get(t)||null,remove(t){e.delete(t)}}}n.r(t),n.d(t,"createABStore",(function(){return r})),n.d(t,"ABStore",(function(){return i}))
const i=r()},function(e,t,n){var r=n(166),i=n(167)
e.exports=function(e,t,n,o){return e=r(e),n=n||"...",t=o?t+1:t,(e=i(e)).length<=t?e:(e=e.substr(0,t-n.length),(e=o?e.substr(0,e.lastIndexOf(" ")):i(e))+n)}},function(e,t){e.exports=function(e){return null==e?"":e.toString()}},function(e,t,n){var r=n(166),i=n(168),o=n(169),s=n(170)
e.exports=function(e,t){return e=r(e),o(s(e,t=t||i),t)}},function(e,t){e.exports=[" ","\n","\r","\t","\f","\v"," "," ","᠎"," "," "," "," "," "," "," "," "," "," "," ","\u2028","\u2029"," "," ","　"]},function(e,t,n){var r=n(166),i=n(168)
e.exports=function(e,t){e=r(e),t=t||i
for(var n,o,s=0,a=e.length,c=t.length,l=!0;l&&s<a;)for(l=!1,n=-1,o=e.charAt(s);++n<c;)if(o===t[n]){l=!0,s++
break}return s>=a?"":e.substr(s,a)}},function(e,t,n){var r=n(166),i=n(168)
e.exports=function(e,t){e=r(e),t=t||i
for(var n,o,s=e.length-1,a=t.length,c=!0;c&&s>=0;)for(c=!1,n=-1,o=e.charAt(s);++n<a;)if(o===t[n]){c=!0,s--
break}return s>=0?e.substring(0,s+1):""}},function(e,t,n){"use strict"
n.r(t)
var r=n(82),i=n(146)
const o={mobile:{width:36,height:36},desktop:{width:48,height:48}}
var s=r.Engine.createElement("g",null,r.Engine.createElement("rect",{fill:"#fff",height:"24",width:"24"})),a=r.Engine.createElement("rect",{height:"10",width:"7",x:"8.5",y:"7"}),c=r.Engine.createElement("rect",{height:"7",width:"1.5",x:"6",y:"8.5"}),l=r.Engine.createElement("rect",{height:"7",width:"1.5",x:"16.5",y:"8.5"})
t.default=e=>{const{device:t="mobile"}=e,n={width:o[t].width,height:o[t].height}
return r.Engine.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:n.height,width:n.width,viewBox:"0 0 24 24",style:{marginBottom:"mobile"===t?12:0,borderRadius:"50%"}},s,r.Engine.createElement("g",{fill:Object(i.getCategoryColor)()},a,c,l))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"ItemIndex",(function(){return s}))
var r=n(26)
const i=[],o=e=>{const t=Object(r.get)(e,"state.data.source")
return"$Advertises"!==t&&"$DistributedComponents"!==t||!0===Object(r.get)(e,"_refs.child.isBoxed")}
class s{constructor(){this.items=[],i.push(this)}register(e){this.items.push(e)}getPosition(e){let t,n=0
for(t of this.items)if(o(t)&&(n+=1),t===e)return n
return-1}clear(){this.items.splice(0,this.items.length)}static destroy(){i.forEach(e=>e.clear()),i.splice(0,i.length)}}s.HEADLINE_PLACEHOLDER="headline_placeholder"},function(e,t,n){var r=n(174),i=n(175),o=n(176),s=n(3),a=n(177),c=n(179),l=n(180),u=n(181),h=Object.prototype.hasOwnProperty
e.exports=function(e){if(null==e)return!0
if(a(e)&&(s(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||o(e)))return!e.length
var t=i(e)
if("[object Map]"==t||"[object Set]"==t)return!e.size
if(l(e))return!r(e).length
for(var n in e)if(h.call(e,n))return!1
return!0}},function(e,t,n){var r=n(35)(Object.keys,Object)
e.exports=r},function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(5),i=n(178)
e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict"
n.r(t),n.d(t,"isGooglePubadsAvailable",(function(){return d})),n.d(t,"getPubads",(function(){return p})),n.d(t,"isCustomLazyAvailable",(function(){return f})),n.d(t,"defineBanner",(function(){return m})),n.d(t,"canGetSlot",(function(){return g})),n.d(t,"filterEvents",(function(){return v}))
var r=n(5),i=n.n(r),o=n(62),s=n.n(o),a=n(23),c=n(26),l=n(57),u=n(20),h=n(61)
const d=async()=>{const e=()=>!!a.Globals.document.querySelector('script[src$="gpt.js"]')
if(await Object(h.availabilityOf)("gpt.js",e,500),!e())return!1
const t=()=>i()(Object(c.get)(a.Globals,"googletag.pubads"))
return await Object(h.availabilityOf)("googletag.pubads",t),t()},p=()=>a.Globals.googletag.pubads(),f=async()=>{const e=()=>i()(a.Globals.bannerLazyLoading)
return await Object(h.availabilityOf)("bannerLazyLoading",e),e()},m=(e,t,n)=>{e.setAttribute("id",t),s()(()=>a.Globals.bannerLazyLoading(t,n))},g=e=>!(!e||!Object(l.has)(e,"slot.u.o")&&!Object(l.has)(e,"slot.getSlotElementId"))||(Object(u.warn)("mab:vwblt path to creative name seems broken"),!1),v=(e,t)=>n=>{if(!g(n))return
return(e=>Object(c.get)(e,"slot.u.o")||Object(c.get)(e,"slot.getSlotElementId")())(n)===e.props.id?t(n):void 0}},function(e,t,n){"use strict"
n.r(t),n.d(t,"isPostVideoRedirectAvailableForPost",(function(){return y})),n.d(t,"isVideoPreviewAvailableForPost",(function(){return _})),n.d(t,"isVideoFullAvailableForPost",(function(){return E})),n.d(t,"canShowVideoPreviewInPost",(function(){return w})),n.d(t,"canPostVideoRedirectToVideoPage",(function(){return I})),n.d(t,"canShowTagInPost",(function(){return T})),n.d(t,"onPostView",(function(){return x})),n.d(t,"onPostClick",(function(){return j}))
var r=n(23),i=n(56),o=n(184),s=n(164),a=n(137),c=n(163)
function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const u="postVideoFull",h="postVideoRedirectAB",d="postTagAB",p=e=>s.ABStore.alternative(e),f=({contentType:e})=>"video"===e,m=()=>Object(a.isEnvQA)()?"https://ab.qa.globoi.com":"https://ab.g.globo"
let g,v,b
g=({tenantId:e})=>e===i.Settings.get("PORTAL"),v=({content:e,tenantId:t})=>{const n=[r.Globals.location.hostname],i=new URL(e.url)
return"ge"===t&&(n.push("globoesporte."),n.push("ge."),n.push("globoesporte.qa.globoi.com"),n.push("ge.qa.globoi.com")),i&&n.includes(i.hostname)},b=({content:e})=>e.url===r.Globals.location.href
const y=e=>Boolean(p(h))&&f(e)&&g(e)&&v(e)&&!b(e),E=e=>Boolean(p(u))&&f(e),_=e=>{if(!Object(o.hasExperimentFeatVideoPreviewSupport)())return!1
const{content:t,media:n,contentType:r}=e
if(!["basico","materia","materia_video"].includes(r))return!1
const i=(t.video||{}).previewUrl
return"video"===n&&Boolean(i)},O=(e={})=>{var t,n
return null==e||null===(t=e.content)||void 0===t||null===(n=t.chapeu)||void 0===n?void 0:n.tag},S=(e={})=>{const{contentType:t}=e
return["basico","materia","materia_video"].includes(t)&&Boolean(O(e))},w=e=>Object(o.isExperimentFeatVideoPreviewEnabled)()&&_(e),I=e=>{const t=(p(h)||{}).alternative
return y(e)&&"pagevideo"===t},T=e=>{const t=(p(d)||{}).alternative
return S(e)&&"new-labels"===t},C=[{name:"postVideoPreviewAB",isAvailableForPost:_,impressionOnPostView:!0,conversionOnPostClick:!0},{name:u,isAvailableForPost:E,impressionOnPostView:!0,conversionOnPostClick:!0},{name:h,isAvailableForPost:y,impressionOnPostView:!0,conversionOnPostClick:!0},{name:d,isAvailableForPost:S,impressionOnPostView:!0,conversionOnPostClick:!0,buildParams:(e={},t)=>{var n
const{content:r,position:i,isClickOnMedia:o}=e,s=null==r||null===(n=r.video)||void 0===n?void 0:n.id,a=s?"thumb-video":"thumb-imagem",c=null!=r&&r.image?a:null
let l=s||null
t&&(l=o?"click-thumb":"click-title")
return{context:[{name:O(e)+"|"+c,value:(i||null)+"|"+((null==r?void 0:r.url)||null)+"|"+l}]}}}],x=e=>{if(e.experiment){const{experiment:n,alternative:i,trackId:o,hsid:s,userId:a,userIdType:u,glbExpIdToken:h}=e.experiment,d={experiment:n,alternative:i,testId:o,hsIdToken:s,userId:a,userIdType:u,glbExpIdToken:h}
t=e.experiment.trackId,r.Globals.bstn.lastTestId!==t&&((e=>{const t=m(),n=l({},e,{event:"impression"}),i=Object(c.getCanonicalUri)()
fetch(t+"/event",{method:"POST",headers:{"Content-Type":"application/json","x-canonical-uri":i},body:JSON.stringify(n)}).finally(()=>r.Globals.bstn.hasSentImpression=!0)})(d),r.Globals.bstn.lastTestId=e.experiment.trackId)}var t
C.forEach(t=>{const n=p(t.name)
n&&n.impression&&t.impressionOnPostView&&t.isAvailableForPost(e)&&n.impression(t.buildParams?t.buildParams(e):null)})},j=(e,t={})=>{if(e.experiment){const{experiment:t,alternative:n,trackId:r,hsid:i,userId:o,userIdType:s,glbExpIdToken:a}=e.experiment;(e=>{const t=m(),n=l({},e,{event:"conversion"}),r=Object(c.getCanonicalUri)()
fetch(t+"/event",{method:"POST",headers:{"Content-Type":"application/json","x-canonical-uri":r},body:JSON.stringify(n)})})({experiment:t,alternative:n,testId:r,hsIdToken:i,userId:o,userIdType:s,glbExpIdToken:a})}C.forEach(n=>{const r=p(n.name)
if(r&&r.conversion&&n.conversionOnPostClick&&n.isAvailableForPost(e)){let i
t.target&&(i=Boolean(t.target.closest(".feed-media-wrapper"))),r.conversion(n.buildParams?n.buildParams(l({},e,{isClickOnMedia:i}),!0):null)}})}},function(e,t,n){"use strict"
n.r(t),n.d(t,"hasExperimentFeatVideoPreviewSupport",(function(){return s})),n.d(t,"isExperimentFeatVideoPreviewEnabled",(function(){return a}))
var r=n(225),i=n(164)
const o=()=>(i.ABStore.alternative("postVideoPreviewAB")||{}).alternative,s=()=>Object(r.hasVideoPreviewSupport)("preview-all"===o()),a=()=>!("control"===o())&&s()},function(e,t,n){"use strict"
n.r(t),n.d(t,"setViewportObserver",(function(){return i})),n.d(t,"observeElement",(function(){return o})),n.d(t,"unobserveElement",(function(){return s})),n.d(t,"hasIntersectionObserverSupport",(function(){return a}))
var r=n(20)
let i,o,s,a
i=({options:e,observerName:t,callback:n})=>{if(t&&n)return window[t]=new IntersectionObserver(n,e),window[t]
Object(r.warn)("ViewportObserver :: setViewportObserver - requires observerName and callback")},o=(e,t)=>t&&window[e]&&window[e].observe(t),s=(e,t)=>t&&window[e]&&window[e].unobserve(t),a=()=>"IntersectionObserver"in window},function(e,t,n){"use strict"
n.r(t)
var r=n(173),i=n.n(r)
t.default=e=>!e||i()(e)},function(e,t,n){"use strict"
n.r(t),n.d(t,"setupVideoPreviewViewportObserver",(function(){return m})),n.d(t,"observeElement",(function(){return p})),n.d(t,"unobserveElement",(function(){return f})),n.d(t,"mobileCallback",(function(){return h})),n.d(t,"shouldPlay",(function(){return d}))
var r=n(55),i=(n(82),n(23)),o=n(185),s=n(71),a=n(70),c=n(184)
const l="feed-post-video-viewport-observer",u={root:null,rootMargin:"-100px 0px -20px 0px",threshold:1},h=e=>{Object(s.triggerDomEvent)(a.VIDEOPREVIEW_INTERSECT,i.Globals.window,t=>{t.data=e})},d=(e,t)=>{const n=t.find(t=>t.target.isSameNode(e))
if(!n||!n.isIntersecting)return!1
return!(t.lastIndexOf(e=>e.isIntersecting)>t.indexOf(n))},p=(e,t)=>{Object(o.observeElement)(l,e),i.Globals.window.addEventListener(a.VIDEOPREVIEW_INTERSECT,t)},f=(e,t)=>{Object(o.unobserveElement)(l,e),i.Globals.window.removeEventListener(a.VIDEOPREVIEW_INTERSECT,t)},m=()=>{Object(c.isExperimentFeatVideoPreviewEnabled)()&&r.At.smallScreen&&Object(o.setViewportObserver)({observerName:l,options:u,callback:h})}},function(e,t,n){"use strict"
n.r(t),n.d(t,"whichMedia",(function(){return o}))
var r=n(186),i=n(24)
const o=({image:e,video:t})=>Object(r.default)(e)?null:Boolean(t)&&Boolean(t.id)&&!i.Configs.get("photoOverVideo")?"video":"photo"},function(e,t,n){e.exports="12.14.0",e.exports.default=e.exports},function(e,t,n){var r=n(191)
e.exports=function(e){return r(e,5)}},function(e,t,n){var r=n(192),i=n(193),o=n(194),s=n(195),a=n(197),c=n(199),l=n(201),u=n(202),h=n(204),d=n(206),p=n(207),f=n(175),m=n(208),g=n(209),v=n(210),b=n(3),y=n(179),E=n(212),_=n(6),O=n(213),S=n(34),w={}
w["[object Arguments]"]=w["[object Array]"]=w["[object ArrayBuffer]"]=w["[object DataView]"]=w["[object Boolean]"]=w["[object Date]"]=w["[object Float32Array]"]=w["[object Float64Array]"]=w["[object Int8Array]"]=w["[object Int16Array]"]=w["[object Int32Array]"]=w["[object Map]"]=w["[object Number]"]=w["[object Object]"]=w["[object RegExp]"]=w["[object Set]"]=w["[object String]"]=w["[object Symbol]"]=w["[object Uint8Array]"]=w["[object Uint8ClampedArray]"]=w["[object Uint16Array]"]=w["[object Uint32Array]"]=!0,w["[object Error]"]=w["[object Function]"]=w["[object WeakMap]"]=!1,e.exports=function e(t,n,I,T,C,x){var j,A=1&n,P=2&n,N=4&n
if(I&&(j=C?I(t,T,C,x):I(t)),void 0!==j)return j
if(!_(t))return t
var R=b(t)
if(R){if(j=m(t),!A)return l(t,j)}else{var k=f(t),D="[object Function]"==k||"[object GeneratorFunction]"==k
if(y(t))return c(t,A)
if("[object Object]"==k||"[object Arguments]"==k||D&&!C){if(j=P||D?{}:v(t),!A)return P?h(t,a(j,t)):u(t,s(j,t))}else{if(!w[k])return C?t:{}
j=g(t,k,A)}}x||(x=new r)
var M=x.get(t)
if(M)return M
x.set(t,j),O(t)?t.forEach((function(r){j.add(e(r,n,I,r,t,x))})):E(t)&&t.forEach((function(r,i){j.set(i,e(r,n,I,i,t,x))}))
var L=N?P?p:d:P?keysIn:S,H=R?void 0:L(t)
return i(H||t,(function(r,i){H&&(r=t[i=r]),o(j,i,e(r,n,I,i,t,x))})),j}},function(e,t,n){var r=n(43),i=n(44),o=n(47),s=n(48),a=n(49)
function c(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,e.exports=c},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},function(e,t,n){var r=n(125),i=n(46),o=Object.prototype.hasOwnProperty
e.exports=function(e,t,n){var s=e[t]
o.call(e,t)&&i(s,n)&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t,n){var r=n(196),i=n(34)
e.exports=function(e,t){return e&&r(t,i(t),e)}},function(e,t,n){var r=n(194),i=n(125)
e.exports=function(e,t,n,o){var s=!n
n||(n={})
for(var a=-1,c=t.length;++a<c;){var l=t[a],u=o?o(n[l],e[l],l,n,e):void 0
void 0===u&&(u=e[l]),s?i(n,l,u):r(n,l,u)}return n}},function(e,t,n){var r=n(196),i=n(198)
e.exports=function(e,t){return e&&r(t,i(t),e)}},function(e,t){e.exports=function(e){var t=[]
if(null!=e)for(var n in Object(e))t.push(n)
return t}},function(e,t,n){(function(e){var r=n(91),i=t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===i?r.Buffer:void 0,a=s?s.allocUnsafe:void 0
e.exports=function(e,t){if(t)return e.slice()
var n=e.length,r=a?a(n):new e.constructor(n)
return e.copy(r),r}}).call(this,n(200)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=function(e,t){var n=-1,r=e.length
for(t||(t=Array(r));++n<r;)t[n]=e[n]
return t}},function(e,t,n){var r=n(196),i=n(203)
e.exports=function(e,t){return r(e,i(e),t)}},function(e,t){e.exports=function(){return[]}},function(e,t,n){var r=n(196),i=n(205)
e.exports=function(e,t){return r(e,i(e),t)}},function(e,t){e.exports=function(){return[]}},function(e,t,n){var r=n(35)(Object.keys,Object)
e.exports=r},function(e,t){e.exports=function(e){var t=[]
if(null!=e)for(var n in Object(e))t.push(n)
return t}},function(e,t){var n=Object.prototype.hasOwnProperty
e.exports=function(e){var t=e.length,r=new e.constructor(t)
return t&&"string"==typeof e[0]&&n.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(211),i=n(79),o=n(180)
e.exports=function(e){return"function"!=typeof e.constructor||o(e)?{}:r(i(e))}},function(e,t,n){var r=n(6),i=Object.create,o=function(){function e(){}return function(t){if(!r(t))return{}
if(i)return i(t)
e.prototype=t
var n=new e
return e.prototype=void 0,n}}()
e.exports=o},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict"
n.r(t)
var r=n(20),i=n(219),o=n(83),s=n(82),a=n(226),c=n(26)
let l
l=function(e){const t=Object(c.get)(e,"pubeditorial.anunciante")||{url:null,logo_pequeno:null,nome:"Logo Anunciante"}
let n=null
return t.logo_pequeno&&(n=s.Engine.createElement(a.LabelEvent,{type:"click",label:"chapeu"},s.Engine.createElement("a",{href:Object(c.get)(t,"url")||"#"},s.Engine.createElement("span",{className:"feed-post-header-special-advertising-logo"},s.Engine.createElement("img",{className:"special-advertising-logo",alt:"Logo: "+t.nome,title:"Logo: "+t.nome,src:Object(c.get)(t,"logo_pequeno")}))))),s.Engine.createElement("div",{className:"feed-post-header post-header-special-advertising"},s.Engine.createElement("span",{className:"feed-post-header-chapeu gui-text-section-title gui-text-special-advertising"},decodeURI("Especial Publicit%C3%A1rio")),n)}
const u=l,h=e=>t=>s.Engine.createElement("h2",null,s.Engine.createElement("a",{href:e.url,className:"feed-post-link gui-color-primary gui-color-hover"},s.Engine.createElement("p",{elementtiming:e.elementtiming},t.children)))
var d=n(107),p=n(112),f=n(93),m=n(56),g=n(102),v=n.n(g),b=n(223),y=n(224),E=n(114),_=n(186),O=n(103),S=n(113),w=n(115),I=n(116)
const T=e=>{const{extraClasses:t,isEsppub:n,video:r,image:i,url:a,title:c,children:l,onReveal:u,onMouseUp:h,threshold:d,ratio:p="1:1"}=e,f="bstn-fd-video-cover "+(t||""),m=r.description?r.description+" - Programa: "+r.programTitle:r.title+" - Programa: "+r.programTitle+" "
let g
return g=s.Engine.createElement(o.Cover,{images:i,alt:m,extraClasses:f.trim(),isEsppub:n,"data-video-id":r.id,ratio:p,"data-short-url":a,"data-link":a,"data-program-title":r.programTitle,"data-title":c,onReveal:u,onMouseUp:h,threshold:d},l),g}
var C=n(30),x=n(55),j=n(87),A=n(187)
class P extends s.Engine.Component{constructor(...e){super(...e),this.onChangeView=e=>{Object(A.shouldPlay)(this.base,e.data)?this.doPlay():this.doPause()},this.onCanPlay=()=>{this.waitingToPlay&&this.doPlay()},this.doPlay=()=>{this.waitingToPlay=!1,this._refs.preview&&this._refs.preview.paused&&(4===this._refs.preview.readyState?this._refs.preview.play():this.waitingToPlay=!0)},this.doPause=()=>{this._refs.preview&&!this._refs.preview.paused&&this._refs.preview.load()},this.reveal=()=>{!this.revealed&&this._refs.container&&(this._refs.preview&&0===this._refs.preview.readyState&&this._refs.preview.load(),this.props.onReveal(this._refs.container),this.revealed=!0)}}componentDidMount(){x.At.smallScreen&&Object(A.observeElement)(this.base,this.onChangeView)}componentWillUnmount(){x.At.smallScreen&&Object(A.unobserveElement)(this.base,this.onChangeView)}render(){const{children:e,title:t,url:n,video:r,image:i}=this.props,o=Object(C.choosePicture)(i)
return s.Engine.createElement(j.PreemptVisibility,{onNearToBeVisible:this.reveal,threshold:Promise.resolve("50%")},s.Engine.createElement("div",{ref:Object(f.as)(this,"container"),className:"post-media-preview","data-video-id":r.id,"data-short-url":n,"data-link":n,"data-program-title":r.programTitle,"data-title":t,onMouseEnter:this.doPlay,onMouseLeave:this.doPause},s.Engine.createElement("video",{ref:Object(f.as)(this,"preview"),className:"post-media-preview__video",poster:o,preload:"none",loop:!0,muted:!0,src:r.previewUrl,oncanplay:this.onCanPlay}),s.Engine.createElement("div",{className:"post-media-preview__content"},e)))}}function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var R=s.Engine.createElement(w.BadgeAoVivo,null)
var k=s.Engine.createElement(I.VideoPlay,null)
const D=({children:e,isLive:t,video:n})=>s.Engine.createElement("div",{className:"feed-cover-content"},e,s.Engine.createElement("div",{className:"bstn-fd-play-button"},k,((e,t)=>e?R:Object(O.insertIf)(t>0,()=>s.Engine.createElement("p",{className:"feed-post-video-duration"},Object(S.abbrTime)(t))))(t,n.duration)),Object(O.insertIf)(n.trademark,()=>s.Engine.createElement("img",{className:"feed-post-video-trademark",src:n.trademark,loading:"lazy"}))),M=e=>{const{title:t,image:n,video:r,canShowVideoPreview:i,disableLightbox:o}=e
let a
const c=(r||{}).previewUrl
if(Object(_.default)(r)||Object(_.default)(n)||!r.id)return null
const l=e=>{e&&!o&&Object(E.applyVideoLightbox)(e)}
return a=i&&c?s.Engine.createElement(P,N({onReveal:l},e),D(e)):s.Engine.createElement(T,N({onReveal:l},N({},e,{video:N({},e.video,{title:t})})),D(e)),a}
var L=n(188)
const H={video:({image:e,video:t,title:n,url:r,isEsppub:i,canShowVideoPreview:o})=>s.Engine.createElement(M,{title:n,url:r,video:t,image:e,isEsppub:i,canShowVideoPreview:o}),photo:({image:e,title:t,isEsppub:n})=>{const r=e.rightsHolder?t+" - Foto: ("+e.rightsHolder+")":t||null
return s.Engine.createElement(o.Cover,{images:e,alt:r,isEsppub:n})}},V=e=>{const{image:t,video:n,url:r}=e,i=Object(L.whichMedia)({image:t,video:n})
return null===i?null:s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:r,className:"feed-post-figure-link gui-image-hover"},H[i](e))))}
var U=n(24),F=n(105)
const B=e=>{const{date:t,section:n}=e
return s.Engine.createElement("div",{className:"feed-post-metadata"},Object(O.insertIf)(!1===U.Configs.get("disableDateTime"),()=>s.Engine.createElement(b.Datetime,{isRecommended:t.isRecommended,ageInSeconds:t.age,publication:t.publication})),n&&s.Engine.createElement(F.Section,{text:n}))}
var G=n(104),z=n(106),q=n(183),W=n(134),$=n(117),Z=n(57),K=n(164),J=n(162)
class Q extends s.Engine.Component{constructor(e){super(e),this.getPostContentData=(e={})=>{const t=Object(c.get)(this,"props.content"),n=Object(c.get)(this,"props._experiment_properties")
return{content:t,media:Object(L.whichMedia)(t),contentType:this.getContentType(),tenantId:Object(c.get)(this,"props.tenantId"),experiment:n,position:null==e?void 0:e.position}},this.state={title:this.isMabEnabled()?"":Object(c.get)(e,"content.title"),renderContext:U.Configs.get("renderContext")}}render(){const e=v()("feed-post","bstn-item-shape",{["type-"+this.props.type]:this.props.type})
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:e,id:this.props.id},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Title(),this.Summary(),this.Media(),this.Metadata(),this.Relateds()))}componentWillMount(){this.reporter=W.ItemPostReporter.upgrade(this.context.sharedItemData),this.reporter.addFeatureChecks({resumo:()=>this.hasSummary(),foto:()=>"photo"===Object(L.whichMedia)(Object(c.get)(this,"props.content")),video:()=>"video"===Object(L.whichMedia)(Object(c.get)(this,"props.content"))})}componentDidMount(){this.isMabEnabled()&&this.installMab()}componentWillUnmount(){this.uninstallMab()}isMabEnabled(){if(x.At.server)return!1
const e=Object(c.get)(this,"props.content.mab.experiment")
return e&&K.ABStore.empty(e)}async installMab(){const e=Object(c.get)(this,"props.content.mab.experiment")
if(e)try{const t=new J.MAB,n=t.createExperiment(e),[r]=await t.choose([n])
if(!r)return
const i=this.props.content.mab.metadata[r.arm]
this.setState({title:i}),this.reporter.setContent({title:i}),this.mabRewardHandler=()=>r.reward(),this._refs.post.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(r.error)("title exp failed\n",t)}}uninstallMab(){this.mabRewardHandler&&this._refs.post.removeEventListener("click",this.mabRewardHandler)}getUrl(){return Object(c.get)(this,"props.content.url")||null}getContentType(){return this.props.type}hasMedia(){return Boolean(Object(L.whichMedia)(Object(c.get)(this,"props.content")))}Media(){const{title:e,url:t,video:n,image:r}=this.props.content
return s.Engine.createElement(V,{ref:Object(f.as)(this,Object(L.whichMedia)(Object(c.get)(this,"props.content"))),title:e,url:t,video:n,image:r,isEsppub:Object(Z.has)(this,"props.pubeditorial"),postContentType:this.getContentType(),canShowVideoPreview:Object(q.canShowVideoPreviewInPost)(this.getPostContentData())})}Metadata(){let e
const t=m.Settings.get("PORTAL")
return["valor","valor-investe"].indexOf(t)>=0&&(e=this.props.publication),s.Engine.createElement(B,{section:this.props.content.section,date:{age:this.props.age,publication:e,isRecommended:this.props.isRecommended}})}Header(e){return s.Engine.createElement(y.Header,{content:this.props.content,parent:this,canShowTag:Object(q.canShowTagInPost)(this.getPostContentData())},e)}Title(){return Object(Z.has)(this,"state.title")?s.Engine.createElement(d.Title,{text:this.state.title,innerWrapper:h({url:this.getUrl(),elementtiming:"text-"+this.state.renderContext})}):null}hasSummary(){const e=this.props.aggregatedPosts
return Boolean(this.props.content.summary)&&!(Array.isArray(e)&&e.length>0)}Summary(){const e=this.props.content.summary
return e&&this.hasSummary()?s.Engine.createElement(z.Summary,{text:e}):null}Relateds(){const e=this.props.aggregatedPosts
return Array.isArray(e)&&e.length>0?s.Engine.createElement(G.Relateds,{items:e,dateFactory:({age:e})=>s.Engine.createElement(b.Datetime,{ageInSeconds:e||this.props.age,isRecommended:this.props.isRecommended})},e=>s.Engine.createElement(a.LabelEvent,{type:"click",label:"agregados"},e)):null}onView(e){Object(q.onPostView)(this.getPostContentData(e))}onClick(e,t){this.clicked||(Object(q.onPostClick)(this.getPostContentData(e),t),this.clicked=!0)}reportToHorizon(){return{"post-id":this.props.id,"post-type":this.getContentType(),"post-url":this.getUrl(),"post-has-resumo":this.hasSummary(),"post-has-photo":this.hasMedia()}}}function X(){return(X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}Q.FACE="basico",Q.SIZE=$.POST_SIZES.MEDIUM
class Y extends Q{constructor(...e){super(...e),this.Header=()=>String(m.Settings.get("PORTAL")).startsWith("valor")?null:s.Engine.createElement(u,{pubeditorial:this.props.pubeditorial})}getContentType(){return"especial-publicitario"}Title(){return s.Engine.createElement(d.Title,{text:this.state.title||this.props.content.title,extraClasses:"feed-post-advertising-title",innerWrapper:h({url:this.getUrl()})})}renderVideo(){return Object(c.get)(this,"props.content.video.id")?s.Engine.createElement(p.Video,X({ref:Object(f.as)(this,"video")},this.props.content,{isEsppub:!0})):null}renderImage(){const e=this.props.content.image
if(e){let t=Object(c.get)(this,"props.content.image.rightsHolder")||null
return t&&(t="Foto: ("+t+")"),s.Engine.createElement(o.Cover,{ref:Object(f.as)(this,"photo"),images:e,alt:t,isEsppub:!0})}return null}}Y.FACE="especial_publicitario"
var ee=n(75),te=n(5),ne=n.n(te),re=n(62),ie=n.n(re),oe=n(72),se=n(221),ae=n(89),ce=n.n(ae),le=n(109)
let ue
ue=class extends(Object(le.drawless)(s.Engine.Component)){constructor(e){super(e),this.observe=()=>{this.observer&&(this.observer.observe(this._refs.node,{childList:!0,subtree:!0,attributes:!0,attributesFilter:["style","width","height"]}),this.checkMutation())},this.checkMutation=ce()(()=>{const{offsetHeight:e,offsetWidth:t}=this._refs.node,n=e>=this.minHeight&&t>=this.minWidth
if(n!==this.isBoxed&&(this.isBoxed=n,ne()(this.props.onChange)))try{this.props.onChange(n,{height:e,width:t})}catch(i){Object(r.error)(i)}this.disconnectObserver()},500,{leading:!0,trailing:!0}),this.disconnectObserver=ce()(()=>{this.observer&&(this.observer.disconnect(),this.observer=null)},1e4,{leading:!1,trailing:!0}),this.isBoxed=!1,this.minHeight=this.props.minHeight||1,this.minWidth=this.props.minWidth||1,this.observer=new MutationObserver(this.checkMutation)}componentDidMount(){ne()(this.props.manualStart)?this.props.manualStart(this.observe):this.observe()}}
const he=ue
function de(){return(de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const pe=de({},oe,{ui:de({},se)}),fe=e=>{var t
return(t=class extends s.Engine.Component{constructor(...e){super(...e),this.state={imploded:!1},this.syncBoxingState=e=>{this.isBoxed=e}}render(){return s.Engine.createElement(he,{onChange:this.syncBoxingState,minHeight:3},Object(O.insertIf)(!this.state.imploded,()=>s.Engine.createElement("div",{className:"post-item",onClick:Object(q.onPostClick)(this.props)},s.Engine.createElement("div",{ref:Object(f.as)(this),className:"bstn-item-shape"}))))}componentWillMount(){W.ItemPostReporter.upgrade(this.context.sharedItemData)}componentDidMount(){ie()(()=>{const t=this.context,n=de({},pe)
oe.patch(n,{areaId:t.areaId,item:t.item,itemIndex:t.itemIndex,source:this.props.source,implode:this.implode.bind(this)})
try{ne()(e)&&e(this.props,this._refs.node,n)}catch(i){Object(r.error)("[component] ["+this.props.type+"]\n",i)}})}shouldComponentUpdate(e,t){return t.imploded}implode(){this.setState({imploded:!0})
const{props:e}=this
Object(r.warn)("The item of type "+e.type+" self imploded.",e)}}).FACE="component",t.SIZE=$.POST_SIZES.MEDIUM,t}
class me extends W.ItemPostReporter{get contentStatus(){if(this.itemProps.isLive)return"ao_vivo"}}var ge=s.Engine.createElement(w.BadgeAoVivo,null)
class ve extends Q{constructor(...e){super(...e),this.isLive=()=>Object(c.get)(this.props,"cobertura.isLive"),this.Header=()=>{const{content:e}=this.props
return this.isLive()?s.Engine.createElement(y.Header,{content:e},ge):s.Engine.createElement(y.Header,{content:e})}}componentWillMount(){this.reporter=me.upgrade(this.context.sharedItemData,{isLive:this.isLive()})}}ve.FACE="cobertura"
var be=n(84),ye=n.n(be),Ee=n(228),_e=n(142)
function Oe(){return(Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const Se={criado:1,iniciado:2,INITIATED:2,"em andamento":3,IN_PROGRESS:3,encerrado:4,CLOSED:4}
var we=s.Engine.createElement("div",{className:"bstn-aovivo-label"},"tempo real")
class Ie extends Q{constructor(e){super(e),this.state.match=e.match}render(){return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape bstn-face-temporeal type-"+this.props.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Score(),this.Title(),this.Summary(),this.Media(),this.Metadata(),this.Relateds()))}componentWillMount(){this.reporter=Te.upgrade(this.context.sharedItemData,{status:this.getStatus()}),this.reporter.addFeatureChecks({placar:()=>this.hasScore(),label_tr:()=>this.hasLabelTempoReal(),destaques:()=>this.hasHighlights(),resumo:()=>this.hasSummary(),espectadores:()=>this.showSpectators()})}componentDidMount(){this.completeRecommended()}async completeRecommended(){const{match:e,isRecommended:t}=this.props
if(e&&e.resume&&t){const t=await fetch(e.resume),n=await t.json()
this.fillRecommended(n)}}fillRecommended(e){const t=Oe({},this.state.match)
t&&(t.homeTeam.score=e.equipe_mandante.placar||0,t.awayTeam.score=e.equipe_visitante.placar||0,t.homeTeam.penalties=e.equipe_mandante.penalti||0,t.awayTeam.penalties=e.equipe_visitante.penalti||0,t.status=e.status,this.setState({match:t}))}Header(){return super.Header(this.hasLabelTempoReal()?we:null)}Metadata(){let e=null
return this.showSpectators()&&(e=s.Engine.createElement("span",{className:"post-tr-spectators"},this.props.match.spectators.toLocaleString("pt-br")," assistindo")),s.Engine.createElement("div",{className:"feed-post-metadata"},s.Engine.createElement(b.Datetime,{isRecommended:this.props.isRecommended,ageInSeconds:this.props.age}),e)}Summary(){return this.hasHighlights()?s.Engine.createElement(Ee.Highlight,{content:this.state.match.highlights[0]}):this.hasSummary()?super.Summary():null}Score(){if(this.hasScore()){const{awayTeam:e,homeTeam:t}=this.state.match
return s.Engine.createElement(_e.Scoreboard,{away:e,home:t})}return null}isLive(){const e=((this.props.match||{}).status||"").toLowerCase()
return!!ye()(Se[e],Se.INITIATED,Se.CLOSED)&&(!!this.props.isRecommended||0===String(this.props.content.summary||"").trim().length)}hasScore(){return Boolean(this.state.match)}hasLabelTempoReal(){return this.isLive()}hasChapeu(){return!this.hasLabelTempoReal()&&Object(c.get)(this.props.content,"chapeu.label")}hasSummary(){return!this.hasHighlights()&&super.hasSummary()}hasHighlights(){return this.isLive()&&Object(c.get)(this.state,"match.highlights",[]).length>0}showSpectators(){return this.hasLabelTempoReal()&&Object(c.get)(this.props,"content.showSpectators")&&this.state.match.spectators>0}getStatus(){return(Object(c.get)(this.props,"match.status")||"encerrada").toLowerCase()}}Ie.FACE="tempo_real"
class Te extends W.ItemPostReporter{get contentStatus(){if(this.itemProps.status)return this.itemProps.status}}var Ce=n(146),xe=n(147),je=n.n(xe),Ae=n(171)
function Pe(){return(Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const Ne=e=>{const{extraClasses:t,image:n,description:r,thumbOrientation:i,url:a,title:c,children:l,ratio:u="1:1"}=e,h="bstn-fd-stories-cover "+(t||"")
let d
return d=s.Engine.createElement(o.Cover,{images:n,alt:r,thumbOrientation:i,extraClasses:h.trim(),ratio:u,"data-short-url":a,"data-link":a,"data-title":c},l),d}
var Re=s.Engine.createElement(Ae.default,{device:"mobile"})
const ke=e=>{return s.Engine.createElement(Ne,Pe({},e,{thumbOrientation:"V"}),s.Engine.createElement("div",{className:"stories__content"},s.Engine.createElement("div",{className:"stories__content--header"}," ",je()(e,"chapeu.label",e.section)," "),s.Engine.createElement("div",null,Re,s.Engine.createElement("p",{className:"stories__content--title"}," ",(t=e.title,n=70,t.length>n?t.substring(0,n)+"...":t)," "),s.Engine.createElement("div",{className:"stories__content--metadata"},e.children))))
var t,n}
var De=s.Engine.createElement("div",{className:"bstn-fd-play-button"},s.Engine.createElement(Ae.default,{device:"desktop"}))
const Me=e=>s.Engine.createElement(Ne,Pe({},e,{thumbOrientation:"H"}),De),Le=e=>e.desktop?s.Engine.createElement(Me,e):s.Engine.createElement(ke,e)
function He(){return(He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var Ve=n(23),Ue=n(161)
function Fe(){return(Fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var Be=s.Engine.createElement(w.BadgeAoVivo,null)
class Ge extends Q{constructor(...e){super(...e),this.renderHeader=()=>s.Engine.createElement("div",{className:"feed-post-video-full-header"},Object(c.get)(this.props,"content.chapeu.label")),this.renderTitle=()=>s.Engine.createElement("div",{className:"feed-post-video-full-title"},this.state.title)}renderVideo(e){const{content:t}=this.props
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(t),this.Title(),s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:e,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(M,Fe({ref:Object(f.as)(this,"video")},t,{isEsppub:Boolean(Object(c.get)(this,"props.pubeditorial")),disableLightbox:Object(q.canPostVideoRedirectToVideoPage)(this.getPostContentData())}))))),this.Metadata(),this.Relateds()))}renderVideoFull(e){const{content:t}=this.props
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.type+" feed-post-video-full-container"},s.Engine.createElement("div",{className:"feed-post-body"},s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:e,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(M,Fe({},t,{ratio:"4:3",extraClasses:"feed-post-video-full",isEsppub:Boolean(Object(c.get)(this,"props.pubeditorial")),isLive:this.isLive(),disableLightbox:Object(q.canPostVideoRedirectToVideoPage)(this.getPostContentData())}),this.renderHeader(),this.renderTitle(),this.Metadata())))),this.Relateds()))}render(){const e=this.props.content
e.url=e.url||Object(c.get)(e,"video.url")||Ve.Globals.location.href
const t=e.url||""
return x.At.smallScreen?this.renderVideoFull(t):this.renderVideo(t)}Header(e){return s.Engine.createElement(y.Header,{content:e},Object(O.insertIf)(this.isLive(),()=>Be))}titleApplyRef(e){if(!Object(q.canPostVideoRedirectToVideoPage)(this.getPostContentData()))return Object(E.applyVideoLightbox)(e)}Title(){if(Object(Z.has)(this,"state.title")){const e=this.getUrl(),t=Object(c.get)(this.props.content,"video.id")
return s.Engine.createElement(d.Title,{text:this.state.title,innerWrapper:n=>s.Engine.createElement("h2",null,s.Engine.createElement("a",{href:e,className:"feed-post-link gui-color-primary gui-color-hover","data-video-id":t,"data-short-url":e,"data-link":e,ref:e=>this.titleApplyRef(e)},n.children))})}return null}componentWillMount(){this.reporter=me.upgrade(this.context.sharedItemData,{isLive:this.isLive()}),this.reporter.addFeatureChecks({video:()=>!0})}isLive(){return Object(Ue.isLiveVideo)(Object(c.get)(this.props.content,"video.kind"))}}Ge.FACE="video",n.d(t,"emitter",(function(){return ze})),n.d(t,"NEW_POST_TYPE",(function(){return qe})),n.d(t,"registerExternalItemFactory",(function(){return $e})),n.d(t,"assignFactory",(function(){return Ze}))
const ze=new ee.EventEmitter,qe="NEW_POST_TYPE_",We={default:Q,basico:Q,materia:Q,materia_video:Q,advertise:i.default,cobertura:ve,stories:class extends Q{constructor(...e){super(...e),this.StoriesMobile=()=>s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.content.type+" stories",style:{borderBottom:"5px solid "+Object(Ce.getCategoryColor)()}},s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:this.props.content.url,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(Le,He({mobile:!0,extraClasses:"feed-post-stories-mobile",ref:Object(f.as)(this,"stories")},this.props.content),this.Metadata()))))),this.StoriesDesktop=()=>s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.content.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Title(),s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:this.props.content.url,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(Le,He({desktop:!0,extraClasses:"feed-post-stories-desktop",ref:Object(f.as)(this,"stories")},this.props.content))))),this.Summary(),this.Metadata()))}render(){return x.At.smallScreen?this.StoriesMobile():this.StoriesDesktop()}},"especial-publicitario":Y,video:Ge,"eventos-esportivos":Ie},$e=(e,t)=>{((e,t)=>{"advertise"!==e&&"especial-publicitario"!==e&&(We[e]=t,ze.trigger(qe+e))})(e,fe(t))},Ze=e=>{let t=e.type
return e.pubeditorial&&"cobertura"!==t&&(t="especial-publicitario"),!(t in We)&&(e=>Object(c.get)(e,"content.title")&&Object(c.get)(e,"content.url"))(e)&&(t="default"),t in We&&(e.klass=We[t]),e}},function(e,t,n){"use strict"
n.r(t)
var r=n(20),i=n(82),o=n(102),s=n.n(o),a=n(24),c=n(117),l=n(108),u=n(118),h=n(123),d=n(93),p=n(88),f=n.n(p),m=n(5),g=n.n(m),v=n(10),b=n.n(v),y=n(31),E=n.n(y),_=n(124),O=n.n(_),S=n(132),w=n(218),I=n(135),T=n(1),C=n.n(T),x=n(22),j=n(136)
let A
const P={}
function N(e){e.content&&C()(e.content.url)&&(e.content.url=e.content.url.trim()+a.Configs.get("recommendationTag"))}class R{static getInstance(){return A||(A=new R(P)),A}constructor(e){e!==P&&Object(r.warn)("Class $Posts is a singleton and shouldn't be called directly.")
const t=x.$Falkor.getInstance(),n=t.stream
let i
this.$falkor=t,this.source=t,this.stream=n
try{i=j.$Recommendation.getInstance()}catch(o){}if(i){this.source=i
const e=i.stream,o=()=>{this.source=t,this.request()}
e.addListener({next:()=>{},error:()=>{Object(r.error)("soft error: recommendation failed, activating fallback"),o()},complete:()=>{console.info("[bastian] Recommendation ended. Activating fallback..."),o()}}),this.stream=b.a.merge(e,n.map(e=>(a.Configs.get("isRecommended")&&a.Configs.get("recommendationCounter")<a.Configs.get("recommendationStart")?a.Configs.incr("recommendationCounter"):a.Configs.has("recommendationTag")&&(N(e),Array.isArray(e.aggregatedPosts)&&e.aggregatedPosts.forEach(N)),e)))}}request(){a.Configs.get("isRecommended")&&a.Configs.get("recommendationCounter")+1>=a.Configs.get("recommendationStart")?this.source.request():this.$falkor.request({preventFetch:!0})}isEmpty(){return this.source.isEmpty()}getNextPage(){return this.source.nextPage}}var k=n(55)
let D
const M={},L=(e,t)=>new Array(t).fill().map(()=>e),H=e=>({request:e}),V=(...e)=>H(t=>e.some(e=>!1!==e.request(t))),U=e=>{const t=H(n=>(t.request=()=>!1,e.request(n)))
return t}
class F{static getInstance(){return D||(D=new F(M)),D}constructor(e){var t
let n
e!==M&&Object(r.warn)("Class $Rhythmist is a singleton and shouldn't be called directly."),n={AD:S.$Advertises,CARD:w.$Cards,DISTRIBUTED_COMPONENTS:I.$DistributedComponents,POST:R}
const i=O()(n,e=>e.getInstance()),o="cards"===a.Configs.get("thirdPartyingModel")?i.CARD:i.DISTRIBUTED_COMPONENTS,s=V(i.AD,i.POST)
if("Home"===(null===(t=window.utag_data)||void 0===t?void 0:t.content_type)&&k.At.smallScreen?this.rhythm=[...L(i.POST,2),V(U(i.AD),i.POST),i.POST,s,i.POST,V(U(i.AD),i.POST),i.POST,s]:this.rhythm=[...L(i.POST,4),s,i.POST,...L(i.POST,2),s],!this.shouldIncludeCardsInRecommendationFeedByPosition()){const e=a.Configs.get("componentPosition")-1
this.rhythm.splice(e,0,V(o,i.POST))}const c=E()(i).map(e=>e.stream)
this.stream=b.a.merge(...c).endWhen(R.getInstance().stream.last())}rotateRhythm(){this.rhythm.push(this.rhythm.shift())}shouldIncludeCardsInRecommendationFeedByPosition(){return a.Configs.get("isSegmentedByChannels")&&a.Configs.get("isRecommended")}getSourceByPosition(e){let t
const n=a.Configs.get("cardsPosition")
return this.shouldIncludeCardsInRecommendationFeedByPosition()&&n.includes(e.position)&&k.At.smallScreen?t=I.$DistributedComponents.getInstance():(t=this.rhythm[0],this.rotateRhythm()),t}request(e){let t
t=this.getSourceByPosition(e)
!1===t.request(e)&&(Object(r.warn)("all choices failed, skipping position:",e),this.request(e))}}let B
const G={}
class z{static getInstance(){return B||(B=new z(G)),B}constructor(e){this.itemCounter=0,this.pageCounter=0,this.isBusy=!1,e!==G&&Object(r.warn)("Class $Pages is a singleton and shouldn't be called directly."),this.stream=b.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}})}request(){if(!this.isBusy&&this.listener){const e=this.listener,t=[],n=F.getInstance()
let i
const o=()=>{t.length>0&&(this.deliver=null,this.pageCounter++,this.itemCounter+=t.length,n.stream.removeListener(i),e.next(t),this.isBusy=!1)}
this.deliver=o
const s=()=>({pageNumber:this.pageCounter+1,position:this.itemCounter+t.length+1,positionOnPage:t.length+1})
i={next:e=>{t.push(e),t.length<10?n.request(s()):o()},error:t=>{Object(r.error)(t),o(),e.error(t)},complete:()=>{o(),e.complete()}},n.stream.addListener(i),this.isBusy=!0,n.request(s())}}flush(){g()(this.deliver)&&this.deliver()}}var q=n(23)
let W
const $=/(.*\/)([^?#]*)(\?[^#]*|)(#.*|)/
const Z=/(?:(.*\/)([^/]+)\/feed\/pagina-(\d+)(\.g?html|\/|)|(.*\/)([^.]*)(\.g?html|))/,K=/\..*/
function J(){const e=a.Configs.get("referer")||"",t=function(e){const t=e.match($)||["","","",""],[,n,r,i,o]=t
return{path:n,name:r,querystring:i,hash:o}}(e),n=(""+t.path+t.name).match(Z)||["","","","","",""],[,r,i,o,s,c,l,u]=n
return{path:c||r,name:l&&l.replace(K,"")||i||"index",page:o||"1",extension:u||s||"",querystring:t.querystring,hash:t.hash,decomposed:Boolean(e&&(c||r))}}const Q={getPageURL:function(e){return W=W||J(),W.decomposed?""+W.path+W.name+"/feed/pagina-"+e+W.extension+W.querystring+W.hash:null},destroy:function(){W=null}}
var X=n(98),Y=n(111),ee=n(57)
var te=n(220)
class ne extends i.Engine.Component{constructor(){super(),this.autoLoadActive=!1,this.handleLoadMore=e=>{e&&(e.stopPropagation(),e.preventDefault()),Object(te.default)({origin:"botao mais noticias",label:"interacao | carregamento "+String(this.state.pagesDelivered).padStart(3,"0")},["GA","CommonEvents"]),this.proceedLoadMore()},this.proceedLoadMore=f()(()=>{z.getInstance().request(),a.Configs.has("recommendationTag")&&j.$Recommendation.getInstance().fetch()},1e3,{leading:!0,trailing:!1}),this.scheduleAutoLoad=()=>{this.autoLoadActive&&(this.autoLoad(),this.timer=setTimeout(this.scheduleAutoLoad,1e3))},this.teardownAutoLoad=()=>{this.autoLoadActive&&(X.PassiveScrollListener.off(this.autoLoad),clearTimeout(this.timer),this.autoLoadActive=!1)}
const e=z.getInstance()
this.state={pagesDelivered:e.pageCounter,reachedEnd:!1},e.stream.addListener({next:()=>{this.setState({pagesDelivered:e.pageCounter})},error:()=>{},complete:()=>{this.setState({reachedEnd:!0})}})}render(){const e=R.getInstance(),t=e.getNextPage(),n=Math.max(t||0,this.state.pagesDelivered+1)
return(this.state.reachedEnd||null===t)&&e.isEmpty()?null:i.Engine.createElement("div",{className:"load-more gui-color-primary-bg"},i.Engine.createElement("a",{ref:Object(d.as)(this),href:Q.getPageURL(n)},"Veja mais"))}componentDidMount(){this.setupAutoLoad(),this._refs&&this._refs.node&&this._refs.node.addEventListener("click",this.handleLoadMore,!1)}componentWillUnmount(){this.teardownAutoLoad(),this._refs&&this._refs.node&&this._refs.node.removeEventListener("click",this.handleLoadMore)}setupAutoLoad(){const e=R.getInstance()
null===e.getNextPage()&&e.isEmpty()||Object(ee.has)(q.Globals,"campos.pubeditorial")||(this.autoLoad=this.pureAutoLoad.bind(this),this.autoLoad=function(e,t,n){let r=0
return function(){let i
r<e?(i=t(),i&&(r+=1)):i&&g()(n)&&n(i)}}(3,this.autoLoad,this.teardownAutoLoad),this.autoLoad=f()(this.autoLoad,1e3,{leading:!0,trailing:!1}),this.autoLoadActive=!0,setTimeout(this.scheduleAutoLoad,0),X.PassiveScrollListener.on(this.autoLoad))}pureAutoLoad(){const e=Object(Y.getVisibility)(this.context.root._refs.node)
return!!(e.isBoxed&&e.rect.bottom<e.viewportHeight+1e3)&&(this.handleLoadMore(),!0)}}var re=n(222),ie=n(140),oe=n(216),se=n(172),ae=n(26),ce=n(70),le=n(71),ue=n(229)
class he extends i.Engine.Component{render(){const{items:e,pageIndex:t}=this.props,n="page-"+t+"-items"
return i.Engine.createElement(l.ElementViewTrigger,{on:"partial",chain:n},i.Engine.createElement("div",{ref:Object(d.as)(this,"page"),className:"bastian-page","data-index":t},i.Engine.createElement(ie.ElementViewGroup,{id:n,radius:2},e.map((e,t)=>i.Engine.createElement(ue.Item,{key:t,data:e,index:t+1})))))}componentDidMount(){Object(le.triggerDomEvent)(ce.PAGE_RENDERED,this._refs.page)}}function de(e){let t=[]
return e.stream.take(1).addListener({next:e=>{t=e},error:r.error,complete:()=>{}}),e.request(),e.flush(),t}class pe extends i.Engine.Component{constructor(){super(),this.itemIndex=new se.ItemIndex,this.resetItemIndex()
const e=z.getInstance(),t=e.stream
this.state={updates:[],pages:[de(e)]},re.$PushStream.getInstance().stream.addListener({next:e=>this.setState({updates:[...this.state.updates,...e]}),error:r.error,complete:()=>{}}),t.addListener({next:e=>this.setState({pages:[...this.state.pages,e]}),error:r.error,complete:()=>{}})}getChildContext(){return{itemIndex:this.itemIndex}}render(){let e
return this.state.updates.length>0&&(e=i.Engine.createElement(he,{key:0,pageIndex:0,items:this.state.updates})),i.Engine.createElement(ie.ElementViewGroup,{id:"pages"},e,this.state.pages.map((e,t)=>i.Engine.createElement(he,{key:t+1,pageIndex:t+1,items:e})))}componentWillUpdate(){this.resetItemIndex()}shouldComponentUpdate(e,t){const n=Object(ae.get)(this.state,"updates.length")!==Object(ae.get)(t,"updates.length"),r=this.state.pages.length!==t.pages.length
return n||r}resetItemIndex(){this.itemIndex.clear(),new Array(oe.Headlines.getConsumed()).fill().forEach(()=>this.itemIndex.register(se.ItemIndex.HEADLINE_PLACEHOLDER))}}var fe=n(133),me=n(74),ge=n(56),ve=n(101)
function be(){return(be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const ye=()=>{},Ee={next:ye,error:ye,complete:ye}
function _e(e){setTimeout(()=>{X.PassiveScrollListener.pause()
const t=function(e){const t=Object(ae.get)(e,"content.url")
if(!t)return null
let n=q.Globals.document.querySelector('.bastian-page:nth-child(1) .feed-post-link[href="'+t+'"]')
if(n)for(;n.className&&-1===n.className.indexOf(fe.ITEM.slice(1))&&n.parentElement;)n=n.parentElement
return n}(e[0])
t&&function(e,t,n){const r=performance.now(),i=q.Globals.window.scrollY
if(i===e)return n()
Object(ve.rAF)((function o(){const s=performance.now(),a=Math.min(1,(s-r)/t),c=(l=a)<.5?2*l*l:(4-2*l)*l-1
var l
q.Globals.window.scrollTo(0,c*(e-i)+i),a<1?Object(ve.rAF)(o):n()}))}(function(e){let t=13
return me.DEVICES[ge.Settings.get("DEVICE_GROUP","desktop")]>me.DEVICES.smart&&(t+=100),e.getBoundingClientRect().top+q.Globals.window.scrollY-t}(t),1e3,()=>{X.PassiveScrollListener.resume()})},100)}class Oe extends i.Engine.Component{constructor(e){super(e),this.handleClick=()=>{Object(te.default)({origin:"botao pushstream click",label:"Quantidade: "+String(this.state.counter).padStart(2,"0")})
const e=re.$PushStream.getInstance()
e.stream.take(1).addListener(be({},Ee,{next:_e})),e.request()},this.state={counter:0,topIsVisible:!0},re.$PushStream.getInstance().counterStream.addListener({next:e=>{this.setState({counter:e})},error:r.error,complete:()=>{}})}render(){const e=this.state.counter,t=s()("post-notifier-pushstream gui-color-primary-bg",{"notify-pushstream":Boolean(1===e),"notify-pulse":Boolean(e>1),"bstn-fd-visible-top":this.state.topIsVisible})
return 0===e?i.Engine.createElement("div",{className:t,ref:Object(d.as)(this)}):i.Engine.createElement("div",{className:t,ref:Object(d.as)(this),onClick:this.handleClick},i.Engine.createElement("span",null,e)," ","atualizaç"+(e>1?"ões":"ão"))}componentDidMount(){if(me.DEVICES[ge.Settings.get("DEVICE_GROUP","desktop")]<=me.DEVICES.smart){const e=()=>{const e=this._refs.node.parentElement
e&&this.setState({topIsVisible:Object(Y.getVisibility)(e).top})}
e(),X.PassiveScrollListener.on(e)}}}var Se=i.Engine.createElement(Oe,null),we=i.Engine.createElement(pe,null),Ie=i.Engine.createElement(ne,null)
class Te extends h.SeenTimeTelemetry{constructor(e){super(e),this.sharedFeedData={reporter:new u.FeedReporter({area:c.DESKTOP_AREAS.LEFT})}}getChildContext(){return{root:this,areaId:"feed",sharedFeedData:this.sharedFeedData}}render(){const e=s()("bstn-fd","bstn-fd-csr",{"bstn-fd-recommended":a.Configs.get("isRecommended")})
return i.Engine.createElement(l.ElementViewTrigger,{on:"partial",chain:"pages",checkInterval:1e3},i.Engine.createElement("div",{ref:Object(d.as)(this),className:e},Se,we,Ie))}componentDidMount(){this.cdmSeenTimeTelemetry(),a.Configs.set("feed_getSeenTime",this.getSeenTime.bind(this))}componentWillUnmount(){this.cwuSeenTimeTelemetry()}}let Ce
n.d(t,"Feed",(function(){return je}))
const xe={}
class je{static getInstance(){return Ce||(Ce=new je(xe)),Ce}constructor(e){e!==xe&&Object(r.warn)("Class Feed is a singleton and shouldn't be called directly."),this.virtualElement=i.Engine.createElement(Te)}}},function(e,t,n){"use strict"
n.r(t)
var r=n(20),i=n(55),o=n(22),s=n(24),a=n(82),c=n(102),l=n.n(c),u=n(117),h=n(140),d=n(108),p=n(118),f=n(16),m=n.n(f),g=n(77),v=n.n(g),b=n(70),y=n(141),E=n(142),_=n(123),O=n(93),S=n(30),w=n(103),I=a.Engine.createElement("svg",{className:"icon",width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},a.Engine.createElement("g",{fill:"none"},a.Engine.createElement("path",{d:"M6 6c1 0 2-1 2-2S7 2 6 2 4 3 4 4s1 2 2 2zm0 1c-1.3 0-4 .7-4 2v1h8V9c0-1.3-2.7-2-4-2z",fill:"#FFF"}),a.Engine.createElement("path",{d:"M0 0h12v12H0"})))
var T=a.Engine.createElement("svg",{className:"icon",width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},a.Engine.createElement("g",{fill:"none"},a.Engine.createElement("path",{d:"M6 .2C2.8.2.2 2.8.2 6c0 3.2 2.6 5.8 5.8 5.8 3.2 0 5.8-2.6 5.8-5.8C11.8 2.8 9.2.2 6 .2zm0 10.5c-2.6 0-4.7-2-4.7-4.7 0-2.6 2-4.7 4.7-4.7 2.6 0 4.7 2 4.7 4.7 0 2.6-2 4.7-4.7 4.7z",fill:"#FFF"}),a.Engine.createElement("path",{d:"M-1-1h14v14H-1"}),a.Engine.createElement("path",{fill:"#FFF",d:"M6.3 3h-1v3.6l3.2 1.8.4-.7L6.2 6"})))
var C=a.Engine.createElement("div",{className:"text"},a.Engine.createElement(()=>T,null)," SIGA EM TEMPO REAL"),x=a.Engine.createElement(()=>I,null)
function j({spectators:e}){return a.Engine.createElement("div",{className:"label-tempo-real headline"},C,Object(w.insertIf)(e,()=>a.Engine.createElement("div",{className:"count"},x," ",e.toLocaleString("pt-br")," assistindo")))}var A=n(143),P=n(220),N=n(122)
class R extends N.BaseReporter{constructor(e){super(e),this.isLive=e.isLive,this.status=e.status}get contentStatus(){return this.status?this.status:this.isLive?"ao_vivo":void 0}get format(){return"destaque"}get size(){return u.POST_SIZES.LARGE}getPostPosition(){return this.data.index+1}}const k=Object(N.createPostReporter)(R)
var D=n(23),M=n(115),L=n(144),H=n(145),V=n(26),U=n(146),F=n(154),B=n.n(F),G=n(161),z=n(60),q=n(71),W=n(162),$=n(164),Z=n(228),K=n(114)
function J(){return(J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var Q=a.Engine.createElement("div",{className:"bastian-feed-show-temporeal-link"},"Siga em Tempo Real")
class X extends a.Engine.Component{render(){const{hasVideo:e,video:t,url:n,title:r,hasSummary:i,hasScoreFinished:o,summary:s,hasHighlights:c}=this.props,l=Object(V.get)(this.props,"match.highlights")||[],u={}
e&&t&&(u["data-video-id"]=t.id,u["data-short-url"]=n,u["data-link"]=n,u["data-title"]=r)
var h=a.Engine.createElement("span",{className:"bstn-hl-summary gui-color-primary gui-color-hover"},s)
return a.Engine.createElement("div",null,a.Engine.createElement(d.ElementViewTrigger,{on:"fitInScreen"},a.Engine.createElement("span",J({className:"bstn-hl-title gui-color-primary gui-color-hover gui-color-primary-bg-after",ref:Object(O.as)(this,"title")},u),r)),Object(w.insertIf)(i||o,()=>h,()=>Object(w.insertIf)(c,()=>a.Engine.createElement("div",{className:"highlights-bastian-feed"},l.slice(0,2).map((e,t)=>a.Engine.createElement(Z.Highlight,{key:t,content:e,headline:!0})),Q))))}componentDidMount(){this.props.hasVideo&&Object(K.applyVideoLightbox)(this._refs.title)}}function Y(){return(Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const ee=({allowThumb:e})=>(t,n)=>{const{title:r,url:i}=t.content,o=Object(V.get)(t.content,"image.sizes.S.url"),s={}
return e&&o&&(s.thumb={url:o,rightsholder:Object(V.get)(t.content,"image.rightsHolder")}),a.Engine.createElement("li",{key:n,className:"bstn-hl-itemlist bstn-hl-relateditem"},a.Engine.createElement(te,Y({title:r,url:i},s)))}
function te({url:e,title:t,thumb:n}){const r=n&&n.url,i={}
return n&&n.rightsholder&&(i.alt=""+n.title+n.rightsholder?"Foto: ("+n.rightsholder:"",i.title=n.rightsholder),a.Engine.createElement("a",{className:"bstn-hl-link bstn-related",href:e},Object(w.insertIf)(r,()=>a.Engine.createElement("img",Y({className:"bstn-hl-relatedthumb",src:r},i,{loading:"lazy"}))),a.Engine.createElement("span",{className:"bstn-hl-title gui-color-primary gui-color-hover bstn-related"},t))}var ne=n(147),re=n.n(ne),ie=n(9),oe=n.n(ie),se=n(116),ae=n(113),ce=a.Engine.createElement(se.VideoPlay,null)
class le extends a.Engine.Component{render(){const{props:e}=this
if(e.video&&e.image){const{id:t,duration:n}=e.video,r=e.image.url
return a.Engine.createElement("div",{ref:Object(O.as)(this,"video"),className:"bstn-hl-video",title:e.title,"data-video-id":t,"data-short-url":e.url,"data-link":e.url,"data-title":e.title,"data-img":r},ce,Object(w.insertIf)(oe()(n),()=>a.Engine.createElement("div",{className:"bstn-hl-duration"},Object(ae.abbrTime)(n))))}return null}componentDidMount(){re()(this._refs,"video")&&(Object(K.applyVideoLightbox)(this._refs.video),this._refs.video.addEventListener("click",e=>e.stopPropagation(),!1))}}var ue=n(171),he=a.Engine.createElement(ue.default,{device:"desktop"})
class de extends a.Engine.Component{render(){return a.Engine.createElement("div",{ref:Object(O.as)(this,"video"),className:"bstn-hl-video"},he)}}function pe(){return(pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const fe=e=>{let t,n
const r=Object(V.get)(e,"content.image")
if(r){const i={height:1,width:!e.headlineVariation&&!e.isHalfSize&&!e.isSingle?1:2},o=2
n=Object(S.choosePicture)(r,o,i),n&&(t='url("'+n+'")')}return t}
var me=a.Engine.createElement(M.BadgeAoVivo,null),ge=a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-spaceritem"}),ve=a.Engine.createElement(de,null)
class be extends _.SeenTimeTelemetry{constructor(e){super(e),this.reportView=()=>{const e=this.getSeenTime()
this.lastReportedSeenTime!==e&&(this.lastReportedSeenTime=e,A.Horizon.report(L.PostViewHeadline,this.reporter))},this.reportClick=e=>{const t=Object(H.cloneJSON)(this.props)
t.bstn$source="headline",Object(q.triggerDomEvent)(b.ITEM_CLICK,document,e=>{e.data=t}),A.Horizon.report(L.PostClick,this.reporter),this.reportEvent(e),this.reportToRealtime()},this.getFeatures=m()(()=>{const e=this.props,{summary:t,status:n,video:r,chapeuLabel:i,imageSizes:o,imageUrl:s,videoKind:a,highlights:c}=this.getProps(),l="uber"===e.headlineVariation,u=Boolean(o||s),h=Boolean(r&&!l),d=Boolean(i),p=Boolean(Object(V.get)(e,"cobertura.isLive")||Object(G.isLiveVideo)(a)),f=Boolean("eventos-esportivos"===e.type&&e.match&&!l),m=f&&(t.length>0||"Encerrada"===n),g=Boolean(!h&&!B()(e.aggregatedPosts)),v=Boolean(t&&(!d||!u||l)&&!h&&(!g||l)),b=Boolean(c&&c.length>0&&!l),y=Boolean(f&&!m),E=Boolean(y&&Object(V.get)(e,"content.showSpectators"))
return{hasPhoto:u,hasVideo:h,hasChapeu:d,isLive:p,hasRelated:g,hasScore:f,hasScoreFinished:m,hasSummary:v,isUber:l,isStories:Boolean("stories"===Object(V.get)(this.props,"type")),hasHighlights:b,hasLabelTempoReal:y,showSpectators:E}}),this.state={title:this.isMabEnabled()?"":Object(V.get)(e,"content.title"),backgroundImage:fe(e)}}render(){const e=this.props,t=this.getFeatures(),n=this.getClasses(t),r=Object(V.get)(e,"match")||{spectators:0},i=r.spectators,o=this.getRelateds(t),s=Object(V.get)(e,"content.chapeu.label")
let c=null,u=null,h=Object(V.get)(e,"content.url")
const d=Object(V.get)(e,"content.video.id")
t.hasVideo&&d&&(h="#v/"+d,h=""+D.Globals.location.origin+D.Globals.location.pathname+"#v/"+d),t.hasScore&&r.awayTeam&&r.homeTeam&&(c=r.awayTeam,u=r.homeTeam)
var p=a.Engine.createElement("span",{className:"bstn-hl-chapeu gui-subject gui-color-primary-bg-after"},s)
return a.Engine.createElement("div",{className:"bstn-hl-wrapper"},a.Engine.createElement("div",{ref:Object(O.as)(this),style:{"--bstn-hl-cover":this.state.backgroundImage},className:l()("bstn-hl type-"+e.type,n),onClick:this.reportClick},a.Engine.createElement("a",{className:"bstn-hl-link",href:h},Object(w.insertIf)(t.hasLabelTempoReal,()=>a.Engine.createElement(j,{spectators:t.showSpectators?i:0})),a.Engine.createElement("ul",{className:"bstn-hl-list"},Object(w.insertIf)(t.hasChapeu||t.isLive,()=>a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-chapeuitem"},Object(w.insertIf)(t.isLive,()=>me,()=>Object(w.insertIf)(t.hasChapeu,()=>p)))),ge,a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-playbutton "},Object(w.insertIf)(t.hasVideo,()=>a.Engine.createElement(le,this.props.content))),a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-playbutton bstn-hl-video"},Object(w.insertIf)(t.isStories,()=>ve)),a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-mainitem"},Object(w.insertIf)(c&&u,()=>a.Engine.createElement(E.Scoreboard,{headline:!0,away:c,home:u})),a.Engine.createElement(X,pe({},e.content,t,{title:this.state.title,match:r}))),Object(w.insertIf)(!t.isUber,()=>o.map(ee({allowThumb:!1})))))),Object(w.insertIf)(t.isUber&&t.hasRelated,()=>a.Engine.createElement("ul",{className:"bstn-hl-uberrelateds",onClick:this.reportClick},o.map(ee({allowThumb:!0})))))}componentWillMount(){const e=this.getFeatures(),t=new k({data:this.props,telemetry:this,isLive:e.isLive,status:e.hasScore&&String(this.getProps().status).toLowerCase()})
t.addFeatureChecks({foto:()=>e.hasPhoto&&!e.hasVideo,agregados:()=>e.hasRelated,resumo:()=>e.hasSummary,video:()=>e.hasVideo,placar:()=>e.hasScore,label_tr:()=>e.hasLabelTempoReal,espectadores:()=>e.showSpectators}),this.reporter=new y.ReporterCascadeAggregator(t,this.context.sharedHeadlineData.reporter)}componentDidMount(){const e=this.getFeatures()
this.cdmSeenTimeTelemetry(),A.Horizon.on("collect-metrics",this.reportView)
const t=this._refs.node
e.isStories&&(t.style.borderBottom="5px solid "+Object(U.getCategoryColor)()),this.isMabEnabled()&&this.installMab()}componentWillUnmount(){A.Horizon.off("collect-metrics",this.reportView),this.cwuSeenTimeTelemetry()}isMabEnabled(){if(i.At.server)return!1
const e=Object(V.get)(this,"props.content.mab.experiment")
return e&&$.ABStore.empty(e)}async installMab(){const e=Object(V.get)(this,"props.content.mab.experiment")
if(e)try{const t=new W.MAB,n=t.createExperiment(e),[r]=await t.choose([n])
if(!r)return
$.ABStore.save(e,r),this.setState({title:this.props.content.mab.metadata[r.arm]}),this.mabRewardHandler=()=>r.reward(),this._refs.node.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(r.error)(t)}}uninstallMab(){this.mabRewardHandler&&this._refs.node.removeEventListener("click",this.mabRewardHandler)}getClasses(e){return{"no-photo":!e.hasPhoto,"with-photo":e.hasPhoto,"with-video":e.hasVideo,"with-chapeu":e.hasChapeu,"with-summary":e.hasSummary,"with-related":e.hasRelated,"with-score":e.hasScore,"is-half-size":this.props.isHalfSize,"is-live":e.isLive}}getRelateds(e){return e.hasRelated?Object(V.get)(this.props,"aggregatedPosts"):[]}reportEvent(e){const t={origin:this.props.type,action:ye(e)?"play":"clique",label:"headline",hasVideo:this.getFeatures().hasVideo,hasPhoto:this.getFeatures().hasPhoto,hasSummary:this.getFeatures().hasSummary,position:"posicao "+String(this.getItemPosition()).padStart(4,"0")}
Object(P.default)(t,["GA","CommonEvents"],{generateLabel:!0})}reportToRealtime(){const e=this.props
let t='tipo desconhecido "'+Object(V.get)(e,"key")+'"'
const n=Object(V.get)(e,"content.url")
if(n)t=n
else{const n=Object(V.get)(e,"content.video.id")
n&&(t="video "+n)}Object(z.reportToRealtime)("headlines",t)}getProps(){const{content:e}=this.props
return{summary:String(Object(V.get)(e,"summary")||"").trim(),status:Object(V.get)(this.props,"match.status")||"Encerrada",video:Object(V.get)(e,"video"),chapeuLabel:Object(V.get)(e,"chapeu.label"),imageSizes:Object(V.get)(e,"images.sizes"),imageUrl:String(Object(V.get)(e,"image.url")||"").trim(),videoKind:Object(V.get)(e,"video.kind"),highlights:Object(V.get)(this.props,"match.highlights")}}getItemPosition(){return this.props.index+1}}const ye=e=>Boolean(Ee(e.srcElement,"bstn-hl-video")),Ee=(e,t)=>{for(const n of function*(e){yield e
for(;e&&(e=e.parentElement);)yield e}(e))if(_e(n,t))return n},_e=(e,t)=>v()(e)&&e.classList.contains(t)
function Oe(){return(Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}class Se extends a.Engine.Component{getChildContext(){return{sharedHeadlineData:{reporter:new p.FeedReporter({area:u.DESKTOP_AREAS.HEADLINE})}}}render(){const{items:e}=this.props,t=i.At.screen(i.LARGE_SCREEN)?s.Configs.get("headlineVariation"):""
return a.Engine.createElement(d.ElementViewTrigger,{on:"partial",chain:"headlines",checkInterval:1e3},a.Engine.createElement("div",{className:l()("bstn-hls","xlarge-22","xlarge-offset-1","theme","model-"+e.length,{["variation-"+t]:t}),ref:we},a.Engine.createElement(h.ElementViewGroup,{id:"headlines",radius:2},e.map((n,r)=>a.Engine.createElement(be,Oe({index:r,key:r,isSingle:1===e.length&&0===r,isHalfSize:3===e.length&&r>=1,headlineVariation:t},n))))))}}const we=e=>{const t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
if(e&&t){const t=e.offsetHeight
let n;(n=function(e,t){if(e instanceof t)return e}(e.firstElementChild,HTMLDivElement))&&t>400?n.style.height=t+"px":setTimeout(()=>we(e),100)}}
function Ie(){return(Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const Te=(e,t)=>{let n
if(t.hasPhoto){const t=Object(S.choosePicture)(Object(V.get)(e,"content.image"),1,{height:1,width:1})
t&&(n='url("'+t+'")')}return n},Ce=({items:e})=>a.Engine.createElement(d.ElementViewTrigger,{on:"partial",checkInterval:1e3},a.Engine.createElement("div",{className:"bstn-uhl xlarge-22 xlarge-offset-1 theme"},a.Engine.createElement(je,e[0])))
var xe=a.Engine.createElement(M.BadgeAoVivo,null)
class je extends _.SeenTimeTelemetry{constructor(e){super(e),this.handleClick=e=>{if(this.reportClick(),!e.defaultPrevented){const e=this._refs.node.querySelector(".bstn-uhl-picture .bstn-uhl-link")
e&&(e.addEventListener("click",e=>{e.stopPropagation()},!1),setTimeout(()=>{e.click()},0))}},this.features=Ae(e),this.state={title:this.isMabEnabled()?"":Object(V.get)(e,"content.title"),backgroundImage:Te(e,this.features)}}render(){const e=this.props,t=this.features
return a.Engine.createElement("div",{className:l()("bstn-uber-hl type-"+e.type,Pe(t))},a.Engine.createElement("div",{className:"bstn-uhl-picture",ref:Object(O.as)(this),onClick:this.handleClick,style:{"--bstn-uhl-cover":this.state.backgroundImage}},a.Engine.createElement("div",{className:"bstn-uhl-overlay"},Object(w.insertIf)(t.hasHat||t.isLive,()=>a.Engine.createElement("div",{className:"bstn-uhl-hatslot"},Object(w.insertIf)(t.isLive,()=>xe,()=>Object(w.insertIf)(t.hasHat,()=>a.Engine.createElement("span",{className:"bstn-uhl-hat"},Object(V.get)(e,"content.chapeu.label")))))),a.Engine.createElement("a",{className:"bstn-uhl-link",href:e.content.url},a.Engine.createElement(d.ElementViewTrigger,{on:"fitInScreen",tagName:"span"},a.Engine.createElement("span",{className:"bstn-uhl-title"},e.content.title))))),Object(w.insertIf)(t.hasSummary,()=>a.Engine.createElement("div",{className:"bstn-uhl-summary"},e.content.summary)),Object(w.insertIf)(t.hasRelated,()=>a.Engine.createElement("ul",{className:"bstn-uhl-relateds"},this.getRelateds().map((e,t)=>a.Engine.createElement(Ne,Ie({},e,{key:t}))))))}componentDidMount(){this.cdmSeenTimeTelemetry(),this.isMabEnabled()&&this.installMab()}componentWillUnmount(){this.cwuSeenTimeTelemetry()}isMabEnabled(){if(i.At.server)return!1
const e=Object(V.get)(this,"props.content.mab.experiment")
return Object(V.get)(this,"props.content.mab")&&$.ABStore.empty(e)}async installMab(){const e=Object(V.get)(this,"props.content.mab.experiment")
if(e)try{const t=new W.MAB,n=t.createExperiment(e),[r]=await t.choose([n])
if(!r)return
this.setState({title:this.props.content.mab.metadata[r.arm]}),this.mabRewardHandler=()=>r.reward(),this._refs.node.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(r.error)(t)}}uninstallMab(){this.mabRewardHandler&&this._refs.node.removeEventListener("click",this.mabRewardHandler)}getRelateds(){return this.features.hasRelated&&this.props.aggregatedPosts?this.props.aggregatedPosts:[]}reportClick(){const e=Object(H.cloneJSON)(this.props)
e.bstn$source="headline",Object(q.triggerDomEvent)(b.ITEM_CLICK,document,t=>{t.data=e}),this.reportEvent(),this.reportToRealtime()}reportEvent(){const e={origin:this.props.type,action:"clique",label:"headline",hasVideo:!1,hasPhoto:this.features.hasPhoto,hasSummary:this.features.hasSummary,position:"posicao 0001"}
Object(P.default)(e,["GA","CommonEvents"],{generateLabel:!0})}reportToRealtime(){const e=this.props
let t='tipo desconhecido "'+Object(V.get)(e,"key")+'"'
const n=Object(V.get)(e,"content.url")
if(n)t=n
else{const n=Object(V.get)(e,"content.video.id")
n&&(t="video "+n)}Object(z.reportToRealtime)("headlines",t)}}const Ae=e=>{const{content:t}=e
return{hasHat:Boolean(Object(V.get)(t,"chapeu.label")),hasPhoto:Boolean(Object(V.get)(t,"images.sizes")||String(Object(V.get)(t,"image.url")||"").trim()),hasRelated:!B()(e.aggregatedPosts),hasSummary:Boolean(String(Object(V.get)(t,"summary")||"").trim()),isLive:Object(V.get)(e,"cobertura.isLive")||Object(G.isLiveVideo)(Object(V.get)(t,"video.kind"))}},Pe=e=>({"with-hat":e.hasHat,"with-summary":e.hasSummary,"with-related":e.hasRelated,"is-live":e.isLive}),Ne=e=>{const t=Object(V.get)(e.content,"image.sizes.S.url"),n=Object(V.get)(e.content,"image.rightsHolder"),r={},i=Object(V.get)(e.content,"image")
return t&&n&&(r.alt=""+i.title+i.rightsholder?"Foto: ("+i.rightsholder:"",r.title=n),a.Engine.createElement("li",{className:"bstn-uhl-relateditem"},a.Engine.createElement("a",{className:"bstn-uhl-relatedlink",href:e.content.url},a.Engine.createElement("span",{className:"bstn-uhl-related gui-color-primary gui-color-hover"},e.content.title),Object(w.insertIf)(t,()=>a.Engine.createElement("span",{className:"bstn-uhl-relatedthumb",style:'background-image:url("'+String(t)+'")'},a.Engine.createElement("img",Ie({className:"bstn-uhl-relatedimage",src:t},r,{loading:"lazy"}))))))}
n.d(t,"Headlines",(function(){return Me})),n.d(t,"consumeHeadlinePosts",(function(){return Le})),n.d(t,"getHeadlinesQuantity",(function(){return He}))
let Re,ke=0
const De={}
class Me{static getInstance(){return Re||(Re=new Me(De)),Re}static getConsumed(){return ke}constructor(e){if(e!==De&&Object(r.warn)("Class Headlines is a singleton and shouldn't be called directly."),this.items=Le(),this.items.length>0){const e="uber"===s.Configs.get("headlineVariation")&&i.At.screen(i.SMALL_SCREEN)?Ce:Se
this.virtualElement=a.Engine.createElement(e,{items:this.items})}}}const Le=()=>{let e=He()
const t=[]
if(e>0){const n=o.$Falkor.getInstance(),i=n.stream.subscribe({next(e){t.push(e),ke+=1},error:r.error,complete(){}})
for(;e>0;)e--,n.request({preventFetch:!0})
i.unsubscribe(),s.Configs.decr("recommendationStart",ke)}return t},He=()=>{let e=0
return e=s.Configs.get("headlinesNrPosts"),e}},function(e,t,n){"use strict"
n.r(t)
var r=n(190),i=n.n(r),o=n(16),s=n.n(o),a=n(77),c=n.n(a),l=n(133),u=n(20),h=n(55),d=n(23),p=n(70),f=n(136),m=n(82),g=n(29),v=n(26),b=n(182),y=n(71),E=n(187),_=n(225),O=n(164),S=n(163),w=n(227)
class I{constructor(){this.client=(new w.ABFactory).ab()
const e=Object(S.getCanonicalUri)()
e&&this.client.addHeader({"x-canonical-uri":e})}createExperiment(e,{context:t={},generateImpression:n=!1}={}){try{return this.client.createExperiment(e,t,n)}catch(r){return console.warn("[AB][error]:",r),null}}async choose(e,{glbExpIdToken:t=null,headers:n=null}={}){try{const{userId:r,userIdType:i,hsId:o}=await Object(S.getTrackingData)(this.client),s=await this.client.choose(e,r,t,o,n,i)
return s.experiments.map(e=>new T(this.client,e,s.glbExpIdToken,r,i,o))}catch(r){return console.error(r.message),[]}}}class T{constructor(e,t,n,r,i,o){this.ab=e,this.alt=t,this.glbExpIdToken=n,this.userId=r,this.userIdType=i,this.hsId=o}get name(){return this.alt.name}get alternative(){return this.alt.alternative}impression({headers:e=[],context:t=null}={}){const{name:n,testId:r,alternative:i}=this.alt
this.ab.impression({experiment:n,testId:r,alternative:i,context:t},this.userId,this.glbExpIdToken,this.hsId,e,this.userIdType)}conversion({headers:e=[],context:t=null}={}){const{name:n,testId:r,alternative:i}=this.alt
this.ab.conversion({experiment:n,testId:r,alternative:i,context:t},this.userId,this.glbExpIdToken,this.hsId,e,this.userIdType)}}var C=n(215),x=n(216),j=n(135),A=n(117),P=n(140),N=n(108),R=n(118),k=n(56),D=n(229),M=n(172),L=n(123),H=n(93)
n(109)
let V
function U(e){const t=[...e],n=[[1,2],[Number.POSITIVE_INFINITY,3]],r=[[7,8],[13,14]]
if(d.Globals.document.querySelector(l.BS_HOME)){for(const[e,r]of n)t.splice(e,0,{id:"banner_rm"+r,type:"advertise"})
for(const[e,n]of r)t.length>e&&t.splice(e,0,{id:"banner_rm__"+n,type:"advertise"})}return t}V=class extends L.SeenTimeTelemetry{constructor(){super(),this.state={items:U(this.getItems())},this.itemIndex=new M.ItemIndex}getChildContext(){return{root:this,areaId:"right-column",itemIndex:this.itemIndex,sharedFeedData:{reporter:new R.FeedReporter({area:A.DESKTOP_AREAS.RIGHT})}}}render(){return this.itemIndex.clear(),m.Engine.createElement(N.ElementViewTrigger,{on:"partial",chain:"rightColumn",checkInterval:1e3},m.Engine.createElement("div",{ref:Object(H.as)(this),id:"bstn-rtcl"},m.Engine.createElement(P.ElementViewGroup,{id:"rightColumn",radius:2},this.state.items.map((e,t)=>m.Engine.createElement(D.Item,{key:t,data:e,index:t+1})))))}componentDidMount(){this._refs.node.addEventListener("element-view",e=>e.stopPropagation())}getItems(){const e=[],t=j.$DistributedComponents.getInstance(),n=t.stream.subscribe({next:t=>{e.push(t)},error:()=>{},complete:()=>{}})
for(;!t.isEmpty();)t.request()
return n.unsubscribe(),t.stream.addListener({next:e=>this.setState({items:[...this.state.items,e]}),error:u.error,complete:()=>{}}),e}}
const F=V
let B
const G={}
class z{static getInstance(){return B||(B=new z(G)),B}constructor(e){e!==G&&Object(u.warn)("Class RightColumn is a singleton and shouldn't be called directly."),this.virtualElement=m.Engine.createElement(F)}}var q=n(24)
var W=n(22),$=n(15)
function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const K=e=>{let t=Object(v.get)(e,"content.url")
return t||(Object(v.get)(e,"content.video.id")?t=e.content.video.id:e.id&&(t=e.id),t)},J=e=>{const{embedData:t,recommendationFirstFetch:n,displayedContentURLs:r}=e
r&&$.PostIndex.loadInitialURLs(r),q.Configs.absorbConfigs(t),t.items=(({items:e})=>e.filter((e,t,n)=>t===n.findIndex(t=>K(t)===K(e))))(t),(e=>{if(q.Configs.get("isHomeOrTopic")){const t=Object(g.getFirstPostWithImageForLCP)(e)
t&&(t.content.image.fastRender=!0)}})(t)
const{items:i,rest:o}=function(e){const t=q.Configs.get("recommendationStart")
let n=[],r=e.items
return t>0&&(n=e.items.slice(0,t-1),r=e.items.slice(t-1)),{items:n,rest:r}}(t),s=((e,t)=>()=>{Array.isArray(t)&&t.length>0&&e.store(t)})(W.$Falkor.getInstance(Z({},t,{items:i})),o)
if(j.$DistributedComponents.getInstance(t),n){q.Configs.set("recommendationTag",n.tag)
let e=!1
n.experimentData.experiment&&(d.Globals.bstn.experimentData=n.experimentData,e=n.experimentData.experiment.length>0),q.Configs.set("isRecEditorial",e),q.Configs.set("recLastPosition",30)
const t=f.$Recommendation.getInstance(n)
e?s():t.stream.addListener({next:()=>{},error:()=>{},complete:s})}else s()}
function Q(){return(Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,"moveForePostsUp",(function(){return ne})),n.d(t,"setupPostABs",(function(){return ue})),n.d(t,"launch",(function(){return he}))
const X=/[#?].*$/,Y=/^https?:\/\//,ee=d.Globals.location.href.replace(X,"").replace(Y,""),te=e=>{let t=e.items.length
for(;t--;){String(Object(v.get)(e.items[t],"content.url")).trim().replace(Y,"").replace(X,"")===ee&&e.items.splice(t,1)}},ne=e=>{const t=Object(g.getNrHeadlines)(e)
if(Object(g.hasHeadlines)(e)){let n=t-1,r=1
const i=Object(v.get)(e,"forePosts")
if(i)for(let t=0;t<i.length&&n>0;t++)e.items.splice(r,0,i[t]),r+=1,K(i[t])!==K(e.items[0])&&(n-=1)}},re=(e,t)=>{Object(y.triggerDomEvent)(p.LAUNCH_FAILED,d.Globals.document,t=>{t.component=e})
const n=['Impossible to initialize Bastian "'+e+'".',t]
t.stack&&n.push(t.stack),Object(u.error)(...n)},ie=()=>{const e='There is no such placeholder with selector "',t=[[l.HEADLINES_PLACEHOLDER,"headlines",()=>Object(u.info)(""+e+l.HEADLINES_PLACEHOLDER+'"')],[l.PLACEHOLDER,"feed",()=>re("Feed",""+e+l.PLACEHOLDER+'"')]]
h.At.largeScreen&&t.push([l.AREATEMPLATE_DIREITA,"rightColumn",()=>Object(u.info)(""+e+l.AREATEMPLATE_DIREITA+'"')])
const n={}
return t.forEach(([e,t,r])=>{const i=(e=>d.Globals.document.querySelector(e))(e)
i?n[t]=i:r()}),n},oe=e=>{var t,n,r,o
const{recommendationFirstFetch:s,embedData:a}=e,c=null===(t=a.config)||void 0===t||null===(n=t.recommendation)||void 0===n?void 0:n.active,l=null===(r=a.config)||void 0===r||null===(o=r.recommendation)||void 0===o?void 0:o.start
if(s){if(c&&(null==s||!s.items.length)&&a.items.length){const e=l-1,t=l+9,n=a.items.map((n,r)=>(n.position=r+1,r>=e&&r<t&&(n=((e,t)=>{var n
return{id:e.id,feedId:e.feedId,lastPublication:e.lastPublication,modified:e.modified,content:Q({url:"video"===e.type?null===(n=e.content.video)||void 0===n?void 0:n.url:e.content.url},i()(e.content)),aggregatedPosts:e.aggregatedPosts||[],publication:e.publication,created:e.created,position:e.position,tenantId:e.tenantId,type:e.type,_experiment_properties:t.experimentData,_documentKey:""+t.tag}})(n,s),q.default.set("lastRecWasInserted",!0)),n)).map(f.prepare)
a.items=n}s.items=s.items.map(f.prepare),te(s)}if(a){var u
k.Settings.get("HAS_HOMELIVE")||!1||"home-api"!==(null==a||null===(u=a.atreyu)||void 0===u?void 0:u.api)||ne(a),te(a)}},se=d.Globals.document,{showSLBMeio:ae=!1}=window,ce=e=>se.querySelector(e),le=async()=>{await Object(b.isCustomLazyAvailable)()&&d.Globals.bannerLazyLoading("banner_slb_meio")},ue=async e=>{if(!e)return
const t=[{name:({tenant:e})=>"feed-"+e+"-post-video-v1",tenants:[],globalsName:"postVideoAB"},{name:({tenant:e})=>"feed-"+e+"-video-preview-v2",tenants:["g1","dev-beta"],globalsName:"postVideoPreviewAB",check:()=>Object(_.hasVideoPreviewSupport)(!0)},{name:"feed-redeglobo-lazyload-gpt-v2",tenants:["redeglobo"],globalsName:"adsLazyLoad"},{name:({tenant:e})=>"feed-"+e+"-post-video-redirect-v1",tenants:["ge","g1","off","multishow"],globalsName:"postVideoRedirectAB"},{name:({tenant:e})=>e+"-layout-2025-feed-labels-v1",tenants:["g1"],globalsName:"postTagAB"}].filter(S.ABUtils.canRun).map(t=>{const n="string"!=typeof t.name?S.ABUtils.buildName(t.name):t.name
return{name:n,key:t.globalsName,instance:e.createExperiment(n)}})
if(0===t.length)return
return(await e.choose(t.map(({instance:e})=>e))).forEach(e=>{const n=t.find(({name:t})=>t===e.name)
n&&O.ABStore.save({key:n.key,alt:e})}),!0},he=s()(e=>{oe(e),J(e)
const t=(e=>{const t="bstn-rtcl-placeholder"
if("rightColumn"in e&&null===se.getElementById(t)){const n=se.createElement("div")
n.id=t
const r=e.rightColumn
c()(r)&&(r.firstElementChild?r.insertBefore(n,r.firstElementChild):r.appendChild(n)),e.rightColumn=n}return e})(ie()),n=function(e){const t={}
let n=[]
if(e&&e.headlines){const e=x.Headlines.getInstance()
x.Headlines.getConsumed()>0&&e.virtualElement&&(t.headlines=e.virtualElement,n=e.items)}else q.Configs.get("hasCustomHeadlines")&&q.Configs.get("hasHeadlinesToRender")&&(n=Object(x.consumeHeadlinePosts)())
return globalThis.feedClient&&globalThis.feedClient.setHeadlines(n),C.Feed.getInstance().virtualElement&&(t.feed=C.Feed.getInstance().virtualElement),z.getInstance().virtualElement&&(t.rightColumn=z.getInstance().virtualElement),t}(t),r=new I
ue(r).then(()=>{((e,t)=>{for(const r in e){const i=e[r],o=t[r]
if(i&&c()(o))try{o.innerHTML="",m.Engine.render(i,o)}catch(n){re(r,n)}}})(n,t)}),Object(E.setupVideoPreviewViewportObserver)(),(e=>{const t=ce(l.BANNER_SLB_MEIO),n=ce(l.SHOWTIME_INITIALIZED),r=k.Settings.get("HAS_HOMELIVE")||!1
if(h.At.largeScreen&&!t&&(e||r||n||ae)){const e=ce(l.AREATEMPLATE_ESQUERDA)
if(e){const t=e.parentNode,n=se.createElement("div")
n.setAttribute("class","row show-for-medium-up"),n.innerHTML='<div class="column medium-24 large-24 large-offset-0 xlarge-22 xlarge-offset-1"><div class="publicidade publicidade-banner_slb_meio"><glb-ad data-position="banner_slb_meio" data-width="1230" data-heigth="250"></glb-ad></div></div>',t.parentNode.insertBefore(n,t),le()}}else t&&le()})(n.headlines)})},function(e,t,n){"use strict"
n.r(t)
var r=n(10),i=n.n(r),o=n(5),s=n.n(o),a=n(82),c=n(117),l=a.Engine.createElement("div",null)
class u extends a.Engine.Component{componentDidMount(){s()(this.props.onPlaceholderMount)&&this.props.onPlaceholderMount(this.context.item)}render(){return l}}u.FACE="placeholder",u.SIZE=c.POST_SIZES.MEDIUM
var h=n(20),d=n(133),p=n(70),f=n(55),m=n(75),g=n(23),v=n(134),b=n(93)
let y
const E=()=>["interactive","complete"].includes(g.Globals.document.readyState),_=new Promise(e=>{E()?e():document.addEventListener("readystatechange",()=>{E()&&e()})})
y=()=>_
const O=y
var S=n(26),w=n(68),I=n(71)
n.d(t,"exposable",(function(){return P})),n.d(t,"$Cards",(function(){return k}))
class T extends a.Engine.Component{answerInvitation(){return!0}shouldComponentUpdate(){return!1}componentDidMount(){this.customComponentDidMount&&Object(w.safeCall)(this.customComponentDidMount,this)
const e=Object(S.get)(this,"_refs.node.firstElementChild.firstElementChild")
e&&Object(I.triggerDomEvent)(p.CARD_RENDERED,e),C.upgrade(this.context.sharedItemData,{face:"card",size:c.POST_SIZES.MEDIUM})}render(){return null}}class C extends v.ItemReporter{get postId(){return this.itemReference._refs.item.textContent.split("\n")[0].trim().toLowerCase()}}function x(e){e.componentDidMount&&(e.customComponentDidMount=e.componentDidMount,delete e.componentDidMount)
class t extends T{}return Object.assign(t.prototype,e),e.klass=t,e}function j(e){return function(){return a.Engine.createElement("div",{ref:Object(b.as)(this),dangerouslySetInnerHTML:{__html:e}})}}function A(e){return e.parentNode&&e.parentNode.removeChild&&e.parentNode.removeChild(e),x({rawHTML:e.outerHTML,render:j(e.outerHTML)})}const P={BaseCard:T,create:x,rawHTMLRender:j,embededHTMLCardFactory:A,defaultCardFactory:A}
let N
const R={}
class k{static getInstance(){return N||(N=new k(R)),N}constructor(e){this.buffer=[],this.placeholders=[],this.emitter=new m.EventEmitter,this.pageScanned=!1,e!==R&&Object(h.warn)("Class $Posts is a singleton and shouldn't be called directly."),this.stream=i.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}}),f.At.largeScreen||this.performCollect()}async performCollect(){await O(),this.collect()}collect(){const e=Array.from(g.Globals.document.querySelectorAll(d.CARD)).map(e=>Object(S.get)(e,"firstElementChild.cardComponent")||A(e))
e.slice().forEach(t=>{const n=this.placeholders.shift()
if(n&&n.placeInfo){const t=this.doInvitations(e,n.placeInfo)
if(t)return void this.assignCardToPlaceholder(n,t)}this.buffer.push(t)}),this.pageScanned=!0}doInvitations(e,t){let n,r=!1
const i=[]
for(;!1===r&&(n=e.shift());){try{r=Object(S.get)(n,"klass.prototype.answerInvitation")(t)}catch(o){Object(h.warn)("Soft error: failed to invite card",n),Object(h.error)(o)}!1===r&&i.push(n)}if(e.push(...i),!0===r)return n}assignCardToPlaceholder(e,t){e.card=t,e.klass=t.klass,null!==e.item&&e.item.forceUpdate()}request(e){if(!f.At.smallScreen||!this.listener)return!1
{const t=this.listener,n={id:"card-"+String(Math.random()).substr(2,6),type:"card",card:null,item:null,klass:u,placeInfo:e,onPlaceholderMount:e=>{n.item=e},source:k.staticName},r=this.doInvitations(this.buffer,e)
if(!r&&this.pageScanned)return!1
r?this.assignCardToPlaceholder(n,r):this.pageScanned||this.placeholders.push(n),t.next(n)}}}k.staticName="$Cards"},function(e,t,n){"use strict"
n.r(t)
var r=n(16),i=n.n(r),o=n(77),s=n.n(o),a=n(102),c=n.n(a),l=n(20),u=n(87),h=n(55),d=n(111),p=n(82),f=n(23),m=n(117),g=n(56),v=n(93),b=n(1),y=n.n(b),E=n(6),_=n.n(E),O=n(173),S=n.n(O)
const w={SSR_HEADLINES:!0,AB_SUMMARY_VISIBILITY:null,FORCE_STICKY:!1};(e=>{if(_()(e)&&!S()(e))for(const t of Object.keys(w))t in e&&(w[t]=e[t])})((e=>{if(y()(e)&&e.length>0)try{const t=decodeURIComponent(escape(atob(e)))
return JSON.parse(t)}catch(t){Object(l.error)(t)}})((()=>{const e=f.Globals.location.hash
if(e.includes("bstnflags=")){const t=e.indexOf("bstnflags=")+"bstnflags=".length,n=e.indexOf("&",t),r=[t]
n>=0&&r.push(n)
return e.slice(...r)}})()))
var I=n(164)
function T(){return(T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}const C=e=>{const t=I.ABStore.alternative(e.experimentName)
return e.render({convert:()=>{t&&t.conversion()},imprint:()=>{t&&t.impression()},getAlternative:()=>t})}
var x=n(182),j=n(162)
n.d(t,"isRelativeWidth",(function(){return M}))
class A extends p.Engine.Component{constructor(e){super(e),this.renderSkeleton=()=>{if(this.hasSmartAd){const{adHeightStr:e}=this.state,t={"--skeleton-width":"100%","--skeleton-height":e},n={"--smart-ad-height":e,"min-height":this.minHeightStr},r=c()("bstn-ad-rail",{"bstn-ad-rail--expanded":this.state.adServed,"bstn-ad-rail--collapsed":!this.state.adServed})
return p.Engine.createElement("div",{className:r,style:n},p.Engine.createElement("div",{ref:Object(v.as)(this)},this.state.isLoaded?null:p.Engine.createElement("div",{className:"content-ads__skeleton glb-skeleton-box",style:t})))}return p.Engine.createElement("div",{className:"bstn-ad-rail"},p.Engine.createElement("div",{ref:Object(v.as)(this)}))},this.renderAds=e=>this.lazyGPTNative?p.Engine.createElement("div",{className:e,ref:Object(v.as)(this,"placeholder")},this.renderSkeleton()):p.Engine.createElement(u.PreemptVisibility,{onNearToBeVisible:this.triggerBanner,threshold:this.state.threshold,awaitScroll:!0},p.Engine.createElement("div",{className:e,ref:Object(v.as)(this,"placeholder")},this.renderSkeleton())),this.sendABImpression=Object(x.filterEvents)(this,async()=>{this.props.convert()}),this.checkMABImpression=Object(x.filterEvents)(this,async()=>{G(this.props.id)&&this.mabAlternative&&this.mabAlternative.reward(),this.props.convert(),this.configureTimeoutBannerStick()}),this.configureTimeoutBannerStick=()=>{this.isBannerStickable()&&setTimeout(()=>{!1===Object(d.getVisibility)(this._refs.placeholder).isVisible&&this._refs.node.classList.remove("bstn-ad-visible"),setTimeout(()=>{this.setState({isSticky:!1})},1e3)},3e3)},this.triggerBanner=async()=>{if(this._refs.node){await Object(x.isCustomLazyAvailable)()&&this.initBanner()}},this.setAsLoaded=Object(x.filterEvents)(this,e=>{if("banner_mobile1"===this.props.id&&this._refs.node.classList.add("bstn-ad-visible"),this.isBannerStickable()){const e=50===this.adHeight?50:100
this.setState({isLoaded:!0,isSticky:!0,stickySize:"bstn-sticky-"+e+"px"})}else this.setState({isLoaded:!0})
this.props.imprint()}),this.adServerOnSlotRenderEnded=e=>{if(e.id_elemento!==this.props.id)return
const t=e.evento_original,n=t.size?t.size[1]:0,r=(!n||n<35)&&!t.isEmpty,i=r?this.state.adHeight:n,o=r?"auto":i+"px"
this.minHeightStr=r?this.minHeight+"px":"0px",k()||L(this._refs.container,M(this._refs.node)),this.setState({adHeight:i,adHeightStr:o,adServed:!t.isEmpty,isLoaded:!0})},this.isBannerStickable=()=>h.At.smallScreen&&"banner_mobile1"===this.props.id&&(w.FORCE_STICKY||this.adHeight>=50&&this.adHeight<=100),this.shouldAdHaveSkeleton=e=>!!ie(e),this.lazyGPTNative=this.props.getAlternative&&"lazyload-nativo-google"===this.props.getAlternative(),this.hasSmartAd=this.shouldAdHaveSkeleton(e.id)
const t=ie(e.id),n=(null==t?void 0:t.height)||0
this.minHeight=(null==t?void 0:t.minHeight)||0,this.minHeightStr=this.minHeight+"px",this.state={adPosition:t,adHeight:n,adHeightStr:n+"px",isLoaded:!1,isSticky:!1,stickySize:"",threshold:u.DEFAULT_THRESHOLD,adServed:!0}}render(){const e=c()(this.state.stickySize,{"bstn-ad-sticky":this.state.isSticky,"bstn-ad-smart":this.hasSmartAd})
return p.Engine.createElement("div",{className:"bstn-feed-ad",ref:Object(v.as)(this,"container")}," ",this.renderAds(e)," ")}async componentDidMount(){var e
window.document.addEventListener("adserver-ad-rendered",this.adServerOnSlotRenderEnded)
const t=V(this.props.id),n=new j.MAB,r=n.createExperiment(t)
if("right-column"!==this.context.areaId){const[e]=await n.choose([r])||[]
this.mabAlternative=e}this.setState({threshold:(null===(e=this.mabAlternative)||void 0===e?void 0:e.arm)||u.DEFAULT_THRESHOLD})
if(await Object(x.isGooglePubadsAvailable)()){const e=Object(x.getPubads)()
e.addEventListener("slotOnload",this.setAsLoaded),this.lazyGPTNative?(await this.triggerBanner(),e.addEventListener("impressionViewable",this.sendABImpression)):e.addEventListener("impressionViewable",this.checkMABImpression)}else this.setState({adServed:!1,isLoaded:!0})}componentDidUpdate(){if(this._refs&&this._refs.node&&this._refs.node.childElementCount>=2&&!this.state.isLoaded){const e=f.Globals.getComputedStyle(this._refs.node.querySelector("iframe"))
e&&("none"===e.display?this.setState({adServed:!1}):this.setState({isLoaded:!0}))}}async initBanner(){const e=this.props
try{let t={abAlternative:"control",feed:1,gptLazyload:!1}
this.mabAlternative&&this.mabAlternative.increment(),t.abAlternative=this.mabAlternative&&this.mabAlternative.alt||null,this.lazyGPTNative&&(t.gptLazyload=!0),Object(x.defineBanner)(this._refs.node,e.id,t)}catch(t){Object(l.warn)('Soft error: could not create banner "'+e.id+'"'),Object(l.error)(t)}}}A.FACE="publicidade",A.SIZE=m.POST_SIZES.MEDIUM
const P=(N="adsLazyLoad",R=A,e=>p.Engine.createElement(C,{experimentName:N,render:({convert:t,imprint:n,getAlternative:r})=>p.Engine.createElement(R,T({},e,{convert:t,imprint:n,getAlternative:r}))}))
var N,R
P.FACE=A.FACE,P.SIZE=A.SIZE
t.default=P
const k=i()(()=>f.Globals.document.getElementsByClassName("areatemplate-direita").length>0),D=/^([^0]\d*%|auto)$/,M=e=>{const t=e.querySelector("iframe"),n=e.parentElement,r=e=>D.test(e.width)||D.test(e.minWidth)
return!!t&&(s()(n)?r(t.style)||r(n.style):r(t.style))},L=(e,t)=>{e&&(t?e.classList.add("bstn-fd-elastic-banner"):e.classList.remove("bstn-fd-elastic-banner"))},H=h.At.smallScreen?"mobile":"desktop",V=e=>"bastian-advwblt-r5:"+g.Settings.get("PORTAL")+":"+H+":"+X+":"+(B(e)||""),U={banner_mobile1:"mobile1",banner_feed_especial:"ep",banner_rm2_feed:"banner2",banner_rm3_feed:"banner3"},F={banner_feed__:"dinamico",banner_middle_feed__:"middle"},B=e=>{const t=Object.keys(F).find(t=>e.startsWith(t))
return t?F[t]:U[e]},G=e=>Boolean(B(e)),z=e=>f.Globals.document.body.classList.contains(e),q=z("bs-home"),W=z("multicontent"),$=z("poll-container"),Z=z("cb-live"),K=z("bs-tabela"),J="/"===f.Globals.location.pathname,Q={homeprincipal:q&&J,home:q&&!J,multicontent:W,votacao:$,cobertura:Z,tabela:K},X=(Object.entries(Q).filter(([,e])=>e)[0]||[""])[0],Y={mobile:250,desktop:226},ee={mobile:250,desktop:454},te=Y[H],ne=ee[H],re=[{pattern:/banner_mobile1/,height:ne,minHeight:te},{pattern:/banner_rm2_feed/,height:ne,minHeight:te},{pattern:/banner_rm3_feed/,height:ne,minHeight:te},{pattern:/banner_feed__/,height:ne,minHeight:te},{pattern:/banner_middle_feed__/,height:ne,minHeight:te},{pattern:/banner_feed_especial/,height:h.At.smallScreen?368:ee.desktop,minHeight:h.At.smallScreen?157:Y.desktop},{pattern:/banner_feed_placarge__/,height:ne,minHeight:te}],ie=e=>re.find(({pattern:t})=>t.test(e))},function(e,t,n){"use strict"
n.r(t)
var r=n(5),i=n.n(r),o=n(20),s=n(23),a=n(61),c=n(26)
let l
const u=["_trackEvent","feed","feed"]
let h=[]
l=e=>{h.push(u.slice().concat(e))},(async()=>{if(await Object(a.availabilityOf)("trackerBuilder",()=>[s.Globals.trackerBuilder].every(d),"3s"),s.Globals.trackerBuilder){const e=s.Globals.trackerBuilder().addGA4().addUA({sender:"push"}).build()
h.forEach(t=>e.push(t)),h=e}})()
const d=e=>i()(Object(c.get)(s.Globals,String(e))),p=l
var f=n(1),m=n.n(f),g=n(138),v=n(139),b=n.n(v),y=n(10),E=n.n(y),_=n(75),O=n(56),S=n(24)
let w,I=null
class T extends _.EventEmitter{constructor(){super(),setTimeout(()=>{"esppub"!==S.Configs.get("feedType")&&(this.setupClient(),this.init())},0)}setupClient(){s.Globals.location.hostname.includes(".qa.")&&g.Settings.useQAConfiguration()
const e=O.Settings.get("PORTAL"),t=O.Settings.get("DEVICE_GROUP")
m()(e)&&m()(t)?I=new g.HorizonClient(e.toLowerCase(),t.toLowerCase(),"feed"):Object(o.warn)("Impossible to configure the Horizon client. PORTAL and/or DEVICE_GROUP are missing.")}init(){const e=E.a.periodic(1e4).filter(()=>"visible"===s.Globals.document.visibilityState),t=E.a.periodic(6e4)
E.a.merge(e,t).compose(b()(1e4)).addListener({next:()=>this.trigger("collect-metrics"),error:()=>{},complete:()=>{}})}report([e,t]){const n={id:"common-event",version:"0.1",contentType:"common",properties:{eventCategory:"feed",eventAction:e,eventLabel:t}}
I&&I.send(n)}}w=new T
const C=w,x=(e,t)=>t?"com video":e?"com foto":"sem midia"
t.default=(e,t,n)=>{const r={GA:p,CommonEvents:C.report}
let i
i=n&&n.generateLabel?(({action:e,label:t,hasVideo:n,hasPhoto:r,hasSummary:i,position:o})=>e&&t&&o?[e,t,x(r,n),(i?"com":"sem")+" resumo",o].join(" | "):null)(e):e.label
const{origin:o}=e
o&&null!==i&&t.forEach(e=>r[e]([o,i]))}},function(e,t,n){"use strict"
n.r(t)
var r=n(77),i=n.n(r),o=n(19),s=n.n(o),a=n(80),c=n(20),l=n(82),u=n(23),h=n(83),d=n(223),p=n(224),f=n(24),m=n(103)
const g=e=>l.Engine.createElement("div",{className:"feed-post-metadata"},Object(m.insertIf)(!1===f.Configs.get("disableDateTime"),()=>e.date),e.section)
var v=n(104),b=n(105),y=n(106),E=n(107),_=n(112),O=n(116)
function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let w
function I(e,t={}){const n=(w&&i()(w)||(w=u.Globals.document.createElement("div")),w.innerHTML="",w)
if(n.innerHTML=Object(a.default)(l.Engine.createElement(e,t)),i()(n.firstChild))return n.removeChild(n.firstChild)}n.d(t,"Relateds",(function(){return T})),n.d(t,"Relacionados",(function(){return C})),n.d(t,"Cover",(function(){return x})),n.d(t,"Foto",(function(){return j})),n.d(t,"Datetime",(function(){return A})),n.d(t,"Datahora",(function(){return P})),n.d(t,"Header",(function(){return N})),n.d(t,"Chapeu",(function(){return R})),n.d(t,"Metadata",(function(){return k})),n.d(t,"Metadados",(function(){return D})),n.d(t,"Section",(function(){return M})),n.d(t,"Secao",(function(){return L})),n.d(t,"Summary",(function(){return H})),n.d(t,"Sumario",(function(){return V})),n.d(t,"Title",(function(){return U})),n.d(t,"Titulo",(function(){return F})),n.d(t,"Video",(function(){return B})),n.d(t,"PlayIcon",(function(){return G})),n.d(t,"IconePlay",(function(){return z}))
const T=({showThumbs:e=!1,showDate:t=!0,items:n})=>{const r={}
return t&&(r.dateFactory=({age:e})=>e?l.Engine.createElement(d.Datetime,{ageInSeconds:e}):null),I(()=>l.Engine.createElement(v.Relateds,S({showThumbs:e,items:n},r)))},C=T,x=e=>{const{imagesCollection:t,alt:n}=e
return I(h.Cover,{alt:n,images:t})},j=x,A=({ageInSeconds:e,time:t})=>(!e&&t&&(e=t,Object(c.warn)('Use of "time" attribute is deprecated on "toolkit.ui.Datetime". Use "ageInSeconds" instead.')),I(d.Datetime,{ageInSeconds:e})),P=A,N=e=>I(p.Header,{content:{chapeu:{label:e.label}}}),R=N,k=(...e)=>{const t=I(g)
if(t)return s()(e).forEach(e=>t.appendChild(e)),t},D=k,M=({text:e})=>I(b.Section,{text:e}),L=M,H=({text:e})=>I(y.Summary,{text:e}),V=H,U=({text:e})=>I(E.Title,{text:e}),F=U,B=e=>{const{alt:t,image:n,url:r}=e,i=e.video
return I(_.Video,{title:t,image:n,video:i,url:r})},G=()=>I(O.VideoPlay),z=G},function(e,t,n){"use strict"
n.r(t)
var r=n(73),i=n.n(r),o=n(5),s=n.n(o),a=n(10),c=n.n(a),l=n(20),u=n(24),h=n(74),d=n(23),p=n(15),f=n(75)
let m
m=class extends f.EventEmitter{constructor(e,t){super()
try{const n=new d.Globals.PushStream({host:e,port:80,longPollingInterval:6e4,reconnectOnChannelUnavailableInterval:6e4,modes:"websocket|eventsource|stream|longpolling"})
n.onmessage=({method:e,resourceId:t,resource:n})=>{this.trigger(e,{resourceId:t,resource:n})},n.removeAllChannels(),n.addChannel(t),n.connect(),this.pushStream=n}catch(n){Object(l.error)(n)}}}
const g=m
var v=n(56),b=n(61),y=n(76)
function E(){return(E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let _
n.d(t,"$PushStream",(function(){return S}))
const O={}
class S{static getInstance(){return _||(_=new S(O)),_}constructor(e){this.buffer=[],this.initPushStreamClient=()=>{const e=new g(v.Settings.get("PUSHSTREAM_HOST"),"p.bastian-posts-"+u.Configs.get("feedId"))
e.on("create",e=>{if(e){const{resourceId:t,resource:n}=e
n.key=n.id||t,n.arrived=Object(y.now)(),n.source=S.staticName,p.PostIndex.has(n)||(p.PostIndex.register(n),this.buffer.push(n),this.counterListener&&this.counterListener.next(this.buffer.length))}}),e.on("error",()=>{Object(l.error)("Couldn't connect Bastian on PushStream channel")}),e.on("disconnect",()=>{Object(l.warn)("Disconnected from the PushStream channel")})},e!==O&&Object(l.warn)("Class $Posts is a singleton and shouldn't be called directly."),this.stream=c.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}}),this.counterStream=c.a.create({start:e=>{this.counterListener=e},stop:()=>{this.counterListener=null}})
const t=h.DEVICES[v.Settings.get("DEVICE_GROUP","desktop")]
v.Settings.has("PUSHSTREAM_HOST")&&t<=h.DEVICES.smart&&i()(async()=>{const e=()=>s()(d.Globals.PushStream)
await Object(b.availabilityOf)("PushStream client",e,"20s"),e()&&this.initPushStreamClient()},1e4)}request(){const e=this.buffer
if(this.listener&&e.length>0){const t=this.listener,n=Object(y.now)()
e.map(e=>e.arrived?E({},e,{age:parseInt((n-e.arrived)/1e3)}):e),t.next(e.splice(0,e.length)),this.counterListener&&this.counterListener.next(0)}}}S.staticName="$PushStream"},function(e,t,n){"use strict"
n.r(t)
var r=n(82)
const i=86400,o=365*i,s=[[60,"Agora",1],[90,"Há 1 minuto",1],[3600,"minutos",60],[5400,"Há 1 hora",1],[i,"horas",3600],[129600,"Ontem",1],[7*i,"dias",i],[907200,"Há 1 semana",1],[2628e3,"semanas",604800],[3942e3,"Há 1 mês",1],[o,"meses",2628e3],[1.5*o,"Há 1 ano",1],[Number.POSITIVE_INFINITY,"anos",o]]
function a(e){if(!e.publication&&!e.ageInSeconds)return null
if(e.isRecommended)return null
return r.Engine.createElement("span",{className:"feed-post-datetime"},(()=>{if(e.publication){const t={hour:"numeric",minute:"numeric"}
return new Date(e.publication).toLocaleDateString("pt-BR",t)}return function(e){if(void 0===e)return""
for(const[t,n,r]of s)if(e<t)return 1===r?n:"Há "+Math.round(e/r)+" "+n
return""}(e.ageInSeconds)})())}n.d(t,"Datetime",(function(){return a}))},function(e,t,n){"use strict"
n.r(t)
var r=n(102),i=n.n(r),o=n(82),s=n(26),a=n(103)
const c={urgente:{text:"Urgente",classes:"feed-post-header-chapeu-tag--urgente",classBefore:"icon-chapeu-tag icon-chapeu-tag-warning"},"conteudo-sensivel":{text:"Conteúdo sensível",classes:"feed-post-header-chapeu-tag--sensivel",classBefore:"icon-chapeu-tag icon-chapeu-tag-warning"},viralizou:{text:"Viralizou",classes:"feed-post-header-chapeu-tag--viralizou",classBefore:"icon-chapeu-tag icon-chapeu-tag-viral"},"mais-lida":{text:"Mais Lida",classes:"feed-post-header-chapeu-tag--mais-lida"},"em-alta":{text:"Em alta",classes:"feed-post-header-chapeu-tag--alta"}}
function l({tagId:e}){const t=c[e]
return t?o.Engine.createElement("div",{className:"feed-post-header-chapeu-tag "+t.classes},t.classBefore?o.Engine.createElement("span",{className:t.classBefore}):"",t.text):""}function u(e){const{canShowTag:t}=e,n=Object(s.get)(e,"content.chapeu.label")||"",r=Object(s.get)(e,"content.chapeu.image.url")||"",c=t?Object(s.get)(e,"content.chapeu.tag")||"":null,u=Boolean(n||c),h=i()("feed-post-header",{"with-post-chapeu":u})
var d=o.Engine.createElement("img",{loading:"lazy",src:r,alt:n,className:"feed-post-header-chapeu-favicon"}),p=o.Engine.createElement(l,{tagId:c})
return o.Engine.createElement("div",{className:h},e.children,Object(a.insertIf)(u,()=>o.Engine.createElement("span",{className:"feed-post-header-chapeu"},r&&d,c&&p,n&&!c?n:"")))}n.d(t,"Header",(function(){return u}))},function(e,t,n){"use strict"
n.r(t)
var r=n(55),i=n(185)
const o={CONNECTION:{RTT:201,TYPES:["slow-2g","2g","3g"]},HARDWARE:{MEMORY:2}}
let s,a,c
a=()=>Boolean(globalThis.navigator)&&Boolean(globalThis.navigator.connection),c=()=>Boolean(globalThis.navigator)&&Boolean(globalThis.navigator.deviceMemory),s=()=>{const e=globalThis.navigator
if(!a()||!c())return!1
const{connection:t,deviceMemory:n}=e,r=t.rtt<o.CONNECTION.RTT&&!t.saveData&&!o.CONNECTION.TYPES.includes(t.effectiveType),i=n>o.HARDWARE.MEMORY
return r&&i},n.d(t,"hasVideoPreviewSupport",(function(){return l}))
const l=(e=!1)=>(e||s())&&(Object(i.hasIntersectionObserverSupport)()||!r.At.smallScreen)},function(e,t,n){"use strict"
n.r(t)
var r,i,o,s=n(81),a=[],c=s.options.__r,l=s.options.diffed,u=s.options.__c,h=s.options.unmount
function d(e){s.options.__h&&s.options.__h(i)
var t=i.__H||(i.__H={__:[],__h:[]})
return e>=t.__.length&&t.__.push({}),t.__[e]}function p(e,t){var n=d(r++)
return v(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function f(){a.some((function(e){if(e.__P)try{e.__H.__h.forEach(m),e.__H.__h.forEach(g),e.__H.__h=[]}catch(t){return s.options.__e(t,e.__v),!0}})),a=[]}function m(e){e.t&&e.t()}function g(e){var t=e.__()
"function"==typeof t&&(e.t=t)}function v(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}s.options.__r=function(e){c&&c(e),r=0,(i=e.__c).__H&&(i.__H.__h.forEach(m),i.__H.__h.forEach(g),i.__H.__h=[])},s.options.diffed=function(e){l&&l(e)
var t=e.__c
if(t){var n=t.__H
n&&n.__h.length&&(1!==a.push(t)&&o===s.options.requestAnimationFrame||((o=s.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100)
"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(f))}},s.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(m),e.__h=e.__h.filter((function(e){return!e.__||g(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],s.options.__e(n,e.__v)}})),u&&u(e,t)},s.options.unmount=function(e){h&&h(e)
var t=e.__c
if(t){var n=t.__H
if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){s.options.__e(e,t.__v)}}}
var b=n(82)
n.d(t,"LabelEvent",(function(){return y}))
const y=e=>{let t
const n=(o=null,p((function(){return{current:o}}),[]))
var o
return function(e,t){var n=d(r++)
v(n.__H,t)&&(n.__=e,n.__H=t,i.__H.__h.push(n))}(()=>{n&&n.current&&n.current.addEventListener(e.type,t=>{t.label=e.label})},[]),t=b.Engine.cloneElement(e.children,{ref:n}),t}},function(e,t,n){"use strict"
function r(e){return"local"===e?"http://localhost:8888":"prod-https"===e?"https://sdk-metrics.g.globo":"prod-http"===e||"qa-http"===e?"http://sdk-metrics.g.globo":"https://sdk-metrics.g.globo"}n.r(t)
class i{constructor(e,t,n){this.platform=t,this.request=n,this.abHost=function(e){return"local"===e?"http://localhost:8888":"prod-https"===e?"https://ab.g.globo":"prod-http"===e?"http://ab.g.globo":"qa-http"===e?"http://ab.qa.globoi.com":"qa-https"===e?"https://ab.qa.globoi.com":"pre-prod-http"===e?"http://34.151.249.98":"https://ab.g.globo"}(e),this.metricsHost=r(e)}chooseWithContent(e,t,n,r,i=[],o,s,a,c,l){const u=this.platform.getExtraParams(),h=u["forced-experiment"],d=u["forced-alternative"]
for(const f in e)if(Object.prototype.hasOwnProperty.call(e,f)&&e[f].name===h&&d){e[f].forcedAlternative=d
break}e.forEach(e=>{Object.assign(e,s?{metadata:JSON.stringify(s)}:null)})
const p=Object.assign({},{experiments:e},t?{userId:t}:null,n?{glbExpIdToken:n}:null,r?{hsIdToken:r}:null,o?{userIdType:o}:null)
this.request.do(this.abHost,"/choose","POST",{},p,c,l,null!==i&&i.length?i:a.getHeaders(),a.getTimeout())}chooseWithoutContent(e,t,n,r,i=[],o,s,a,c){const l=this.platform.getExtraParams(),u=l["forced-experiment"],h=l["forced-alternative"],d=Object.assign({},{experiments:e},t?{userId:t}:null,n?{glbExpIdToken:n}:null,r?{hsIdToken:r}:null,o?{userIdType:o}:null,u?{forcedExperiment:u}:null,h?{forcedAlternative:h}:null)
this.request.do(this.abHost,"/choose","GET",d,null,a,c,null!==i&&i.length?i:s.getHeaders())}isolationChoose(e,t,n,r,i=[],o,s,a,c){const l=this.platform.getExtraParams(),u=l["forced-experiment"],h=l["forced-alternative"],d=Object.assign({},{isolationGroup:e.getName()},e.getGenerateImpression()?{generateImpression:e.getGenerateImpression()}:null,t?{userId:t}:null,n?{glbExpIdToken:n}:null,r?{hsIdToken:r}:null,o?{userIdType:o}:null,u?{forcedExperiment:u}:null,h?{forcedAlternative:h}:null)
this.request.do(this.abHost,"/isolation/choose","GET",d,null,a,c,null!==i&&i.length?i:s.getHeaders())}recordMetric(e,t=[],n){this.request.sendBeacon(this.abHost,"/event",e,null!==t&&t.length?t:n.getHeaders(),n.getTimeout())}sendPerformanceMetrics(e){this.request.sendBeacon(this.metricsHost,"/api/v1/performance",e)}}function o(){return"undefined"!=typeof performance&&"function"==typeof performance.now?performance.now():Date.now()}const s={GLOBO_ID:"GLOBO_ID",GLOBOID:"globoId",GLB_UID:"glb_uid"},a={AB:"ab",MAB:"mab",ISOLATION:"isolation"}
class c{constructor(e,t,n){this.platform=t,this.abEndpoint=new i(e,t,n),this.blocklist=[],this.ChooseType=a}choose(e,t,n,r,i,o,s,a){if(Array.isArray(e)&&e.length>0){return e.some(e=>{return null!==e.getContext()&&e.getContext().length>0||void 0!==(n=e.getGenerateImpression())&&!0===n||!(null==(t=s)||"string"==typeof t&&""===t.trim()||Array.isArray(t)&&0===t.length)
var t,n})?this._chooseWithContent(e,t,n,r,i,o,s,a):this._chooseWithoutContent(e,t,n,r,i,o,a)}return Promise.reject(new TypeError("The experiment parameter must be a list of Experiment objects."))}isolationChoose(e,t,n,r,i,o,s){return e?this._isolationChoose(e,t,n,r,i,o,s):Promise.reject(new TypeError("The isolationGroup parameter must be a IsolationGroup object."))}impression(e,t,n,r,i,o,s,a){if(this.blocklist&&this.blocklist.some(t=>t.name===e.experiment)){const t=this.blocklist.find(t=>t.name===e.experiment)
console.warn("Event "+e.event+" cannot be sent: "+t.status)}else e.event="impression",t&&(e.userId=t),n&&(e.glbExpIdToken=n),r&&(e.hsIdToken=r),o&&(e.userIdType=o),s&&(e.metadata=JSON.stringify(s)),this.abEndpoint.recordMetric(e,i,a)}conversion(e,t,n,r,i,o,s,a){if(this.blocklist&&this.blocklist.some(t=>t.name===e.experiment)){const t=this.blocklist.find(t=>t.name===e.experiment)
console.warn("Event "+e.event+" cannot be sent: "+t.status)}else e.event="conversion",t&&(e.userId=t),n&&(e.glbExpIdToken=n),r&&(e.hsIdToken=r),o&&(e.userIdType=o),s&&(e.metadata=JSON.stringify(s)),this.abEndpoint.recordMetric(e,i,a)}_chooseWithoutContent(e,t,n,r,i,s,a){const c=e.map(e=>e.name).join(",")
return new Promise((e,l)=>{this.abEndpoint.chooseWithoutContent(c,t,n,r,i,s,a,t=>{const n=o(),r=this._parseResponse(t,n)
e(r),setTimeout(()=>{const e=r.experiments.map(e=>({testId:e.testId,name:e.name})),t={latency:r.latency,experiments:e,platform:this.platform.getEnvironmentInfo(),sdk:"web",timestamp:Math.floor(Date.now()/1e3),version:"4.7.4",statusCode:r.statusCode,keys:JSON.stringify({chooseType:this.ChooseType.AB})}
this.abEndpoint.sendPerformanceMetrics(t)},250)},e=>{l(e)})})}_chooseWithContent(e,t,n,r,i,s,a,c){return new Promise((l,u)=>{this.abEndpoint.chooseWithContent(e,t,n,r,i,s,a,c,e=>{const t=o(),n=this._parseResponse(e,t)
l(n),setTimeout(()=>{const e=n.experiments.map(e=>({testId:e.testId,name:e.name})),t={latency:n.latency,experiments:e,platform:this.platform.getEnvironmentInfo(),sdk:"web",timestamp:Math.floor(Date.now()/1e3),version:"4.7.4",statusCode:n.statusCode,keys:JSON.stringify({chooseType:this.ChooseType.AB})}
this.abEndpoint.sendPerformanceMetrics(t)},250)},e=>{u(e)})})}_isolationChoose(e,t,n,r,i,s,a){return new Promise((c,l)=>{this.abEndpoint.isolationChoose(e,t,n,r,i,s,a,e=>{const t=o(),n=this._parseResponse(e,t)
c(n),setTimeout(()=>{const e=n.experiments.map(e=>({testId:e.testId,name:e.name})),t={latency:n.latency,experiments:e,platform:this.platform.getEnvironmentInfo(),sdk:"web",timestamp:Math.floor(Date.now()/1e3),version:"4.7.4",statusCode:n.statusCode,keys:JSON.stringify({chooseType:this.ChooseType.ISOLATION})}
this.abEndpoint.sendPerformanceMetrics(t)},250)},e=>{l(e)})})}_parseResponse(e,t){const n=e.response||e
n.latency=parseFloat((t-e.timeTriggerRequest).toFixed(1)),n.statusCode=e.status
const r=n.experiments
this.blocklist=[]
for(let i=0;i<r.length;i++){const e=r[i]
e["extra-info"]&&!1===e["extra-info"]["draw-rule"]["process-event"]&&this.blocklist.push({name:e.name,status:e["extra-info"]["draw-rule"].name})}return n}}class l{constructor(e="",t=[],n=!1){this.name=e,this.context=null!==t?t:[],this.generateImpression=n}_canProcessEvent(){return!(this.data&&this.data["extra-info"]&&this.data["extra-info"]["draw-rule"]&&void 0!==this.data["extra-info"]["draw-rule"]["process-event"])||this.data["extra-info"]["draw-rule"]["process-event"]}setName(e){return this.name=e,this}getName(){return this.name}setContext(e){return this.context=null!==e?e:[],this}getContext(){return this.context}setGenerateImpression(e){return this.generateImpression=e,this}getGenerateImpression(){return this.generateImpression}}class u{constructor(e={}){this.options=e}getHeaders(){return this.options.extraHeaders||[]}getHeader(e){let t=""
return this.getHeaders().forEach(n=>{Object.keys(n).forEach(r=>{e===r&&(t=n[r])})}),t}getTimeout(){let e=this.options.timeout
return void 0===e&&(e=1e3),e}setTimeout(e){return this.options.timeout=e,this}addHeader(e){let t=[]
Object.prototype.hasOwnProperty.call(this.options,"extraHeaders")&&(t=this.options.extraHeaders)
const n=t.findIndex(t=>Object.keys(t).some(t=>t===Object.keys(e)[0]))
return-1!==n?t[n]=e:t.push(e),this.options.extraHeaders=t,this}addHeaders(e){let t=[]
return Object.prototype.hasOwnProperty.call(this.options,"extraHeaders")&&(t=this.options.extraHeaders),e.forEach(e=>{const n=Object.keys(e)[0],r=t.findIndex(e=>Object.keys(e)[0]===n);-1!==r?t[r]=e:t.push(e)}),this.options.extraHeaders=t,this}withOriginURL(e){return new u(this.clone(this.options)).originURL(e)}originURL(e){return this.addHeader({"x-canonical-uri":e}),this}getOriginURL(){return this.getHeader("x-canonical-uri")}}class h{constructor(e="",t=!1){this.name=e,this.generateImpression=t}_canProcessEvent(){return!(this.data&&this.data["extra-info"]&&this.data["extra-info"]["draw-rule"]&&void 0!==this.data["extra-info"]["draw-rule"]["process-event"])||this.data["extra-info"]["draw-rule"]["process-event"]}setName(e){return this.name=e,this}getName(){return this.name}setGenerateImpression(e){return this.generateImpression=e,this}getGenerateImpression(){return this.generateImpression}}class d{constructor(e="prod-https",t,n){this.abMain=new c(e,t,n),this._options=new u,this.UserIdType=s}createExperiment(e,t,n){return new l(e,t,n)}createIsolationGroup(e,t){return new h(e,t)}choose(e,t,n,r,i,o,s){return console.log("AB - Choose requested by application"),this.abMain.choose(e,t,n,r,i,o,s,this._options)}isolationChoose(e,t,n,r,i,o){return console.log("AB - Isolation choose requested by application"),this.abMain.isolationChoose(e,t,n,r,i,o,this._options)}impression(e,t,n,r,i,o,s){console.log("AB - Impression requested by application"),this.abMain.impression(e,t,n,r,i,o,s,this._options)}conversion(e,t,n,r,i,o,s){console.log("AB - Conversion requested by application"),this.abMain.conversion(e,t,n,r,i,o,s,this._options)}addHeader(e){return this._options.addHeader(e),this}addHeaders(e){return this._options.addHeaders(e),this}getHeaders(){return this._options.getHeaders()}setTimeout(e){return this._options.setTimeout(e),this}}class p{constructor(e,t){this.request=t,this.mabHost=function(e){return"local"===e?"http://localhost:8888":"prod-https"===e?"https://mab.g.globo":"prod-http"===e?"http://mab.g.globo":"qa-http"===e?"http://mab.qa.globoi.com":"qa-https"===e?"https://mab.qa.globoi.com":"pre-prod-http"===e?"http://34.151.249.98":"https://mab.g.globo"}(e),this.metricsHost=r(e)}chooseWithoutContent(e,t,n,r,i=[],o,s,a,c){const l=Object.assign({},{experiments:e},t?{userId:t}:null,n?{glbExpIdToken:n}:null,r?{hsIdToken:r}:null,o?{userIdType:o}:null)
this.request.do(this.mabHost,"/choose","GET",l,null,a,c,null!==i&&i.length?i:s.getHeaders(),s.getTimeout())}recordMetric(e,t=[],n){this.request.do(this.mabHost,"/event","POST",{},e,null,null,null!==t&&t.length?t:n.getHeaders(),n.getTimeout())}sendPerformanceMetrics(e){this.request.sendBeacon(this.metricsHost,"/api/v1/performance",e)}}class f{constructor(e,t,n){this.platform=t,this.mabEndpoint=new p(e,n),this.blocklist=[],this.ChooseType=a}increment(e,t,n,r,i,o,s){if(this.blocklist&&this.blocklist.some(t=>t.name===e.experiment)){const t=this.blocklist.find(t=>t.name===e.experiment)
console.warn("Event "+e.event+" cannot be sent: "+t.status)}else e.event="increment",t&&(e.userId=t),n&&(e.glbExpIdToken=n),r&&(e.hsIdToken=r),o&&(e.userIdType=o),this.mabEndpoint.recordMetric(e,i,s)}reward(e,t,n,r,i,o,s){if(this.blocklist&&this.blocklist.some(t=>t.name===e.experiment)){const t=this.blocklist.find(t=>t.name===e.experiment)
console.warn("Event "+e.event+" cannot be sent: "+t.status)}else e.event="reward",t&&(e.userId=t),n&&(e.glbExpIdToken=n),r&&(e.hsIdToken=r),o&&(e.userIdType=o),this.mabEndpoint.recordMetric(e,i,s)}choose(e,t,n,r,i,o,s){return Array.isArray(e)&&e.length>0?this._chooseWithoutContent(e,t,n,r,i,o,s):Promise.reject(new TypeError("The experiment parameter must be a list of Experiment objects."))}_chooseWithoutContent(e,t,n,r,i,s,a){const c=e.map(e=>e.name).join(",")
return new Promise((e,l)=>{this.mabEndpoint.chooseWithoutContent(c,t,n,r,i,s,a,t=>{const n=o(),r=this._parseResponse(t,n)
e(r),setTimeout(()=>{const e=r.experiments.map(e=>({testId:e.testId,name:e.name})),t={latency:r.latency,experiments:e,platform:this.platform.getEnvironmentInfo(),sdk:"web",timestamp:Math.floor(Date.now()/1e3),version:"4.7.4",statusCode:r.statusCode,keys:JSON.stringify({chooseType:this.ChooseType.MAB})}
this.mabEndpoint.sendPerformanceMetrics(t)},250)},e=>{l(e)})})}_parseResponse(e,t){const n=e.response||e
n.latency=parseFloat((t-e.timeTriggerRequest).toFixed(1)),n.statusCode=e.status
const r=n.experiments
this.blocklist=[]
for(let i=0;i<r.length;i++){const e=r[i]
e["extra-info"]&&!1===e["extra-info"]["draw-rule"]["process-event"]&&this.blocklist.push({name:e.name,status:e["extra-info"]["draw-rule"].name})}return n}}class m{constructor(e="",t=!1){this.name=e,this.generateIncrement=t}increment(){let e=this.arms
0===e.length&&(e=[{slot:0,name:this.arm}]),this._sendMetric("increment",e)}reward(e=0,t=""){const n=[{slot:e,name:""===t?this.arm:t}]
this._sendMetric("reward",n)}_sendMetric(e,t){const n={experiment:this.experiment,arm:this.arm,testId:this.testId,abAlternative:this.abAlternative,arms:t}
this._recordMetric(e,n)}_recordMetric(e,t){this.context.mabEndpoint.recordMABMetric(e,t,this.options)}setGenerateIncrement(e){return this.generateIncrement=e,this}getGenerateIncrement(){return this.generateIncrement}}class g{constructor(e="prod-https",t,n){this.mabMain=new f(e,t,n),this._options=new u,this.UserIdType=s}createExperiment(e,t){return new m(e,t)}choose(e,t,n,r,i,o){return console.log("MAB - Choose requested by application"),this.mabMain.choose(e,t,n,r,i,o,this._options)}increment(e,t,n,r,i,o){console.log("MAB - Increment requested by application"),this.mabMain.increment(e,t,n,r,i,o,this._options)}reward(e,t,n,r,i,o){console.log("MAB - Reward requested by application"),this.mabMain.reward(e,t,n,r,i,o,this._options)}addHeader(e){return this._options.addHeader(e),this}addHeaders(e){return this._options.addHeaders(e),this}getHeaders(){return this._options.getHeaders()}setTimeout(e){return this._options.setTimeout(e),this}}class v{getExtraParams(){const e={},t=["forced-experiment","forced-alternative"],n=this.getDocumentLocationSearch().substr(1).split("&")
for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const i=n[r].split("=")
t.indexOf(i[0])>-1&&(e[i[0]]=i[1])}return e}getDocumentLocationSearch(){return document.location.search}getEnvironmentInfo(){const e=navigator.platform,t=navigator.userAgent
let n
return n=t.match(/Firefox\/([0-9]+\.[0-9]+)/)?"Firefox "+t.match(/Firefox\/([0-9]+\.[0-9]+)/)[1]+" ("+e+")":t.match(/Chrome\/([0-9]+\.[0-9]+)/)?"Chrome "+t.match(/Chrome\/([0-9]+\.[0-9]+)/)[1]+" ("+e+")":t.match(/MSIE ([0-9]+\.[0-9]+)/)?"Internet Explorer "+t.match(/MSIE ([0-9]+\.[0-9]+)/)[1]+" ("+e+")":t.match(/Safari\/([0-9]+\.[0-9]+)/)?"Safari "+t.match(/Safari\/([0-9]+\.[0-9]+)/)[1]+" ("+e+")":t.match(/Opera\/([0-9]+\.[0-9]+)/)?"Opera "+t.match(/Opera\/([0-9]+\.[0-9]+)/)[1]+" ("+e+")":t.match(/Edg\/([0-9]+\.[0-9]+)/)?"Edge "+t.match(/Edg\/([0-9]+\.[0-9]+)/)[1]+" ("+e+")":"Unknown",n}}class b{sendBeacon(e,t,n,r=[],i=1e3){const o=void 0!==globalThis.navigator&&"function"==typeof globalThis.navigator.sendBeacon,s=null!=r&&r.length>0
o&&!s?function(e,t,n){const r=new Blob([JSON.stringify(n)],{type:"application/json"})
window.navigator.sendBeacon(e+t,r)}(e,t,n):this.oneWaySend(e,t,n,r,i)}oneWaySend(e,t,n,r,i){this.do(e,t,"POST",null,n,null,null,r,i)}do(e,t,n,r,i,s,a,c=[],l=1e3){let u=""
for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&(u+="&"+o+"="+r[o])
u&&(u="?"+u.substring(1))
const h=e+t+u,d=this.createXHR()
d.open(n,h,!0),d.responseType="json",d.timeout=l,d.onload=()=>{d.status>=200&&d.status<400?this.callIfDefined(s,d):this.callIfDefined(a,this.handleError(d,h))},d.onerror=e=>{this.callIfDefined(a,this.handleError(e,h))},d.ontimeout=e=>{this.callIfDefined(a,this.handleError(e,h))},i&&(d.setRequestHeader("Content-Type","application/json;charset=utf-8"),i=JSON.stringify(i)),Array.from(c).forEach((function(e){Object.keys(e).forEach((function(t){d.setRequestHeader(t,e[t])}))})),d.timeTriggerRequest=o(),d.send(i)}handleError(e,t){const n={}
return n.type=e.type?e.type:"undefined",e.target instanceof XMLHttpRequest&&(e=e.target),e instanceof XMLHttpRequest?(n.status=e.status,n.url=t,n.timeout=e.timeout,n.msg=e.response):n.msg=e.toString(),n}createXHR(){const e=new XMLHttpRequest
return e.withCredentials=!1,e}callIfDefined(e,t){e&&e(t)}}class y{constructor(){this.platform=new v,this.request=new b}ab(e="prod"){return new d(e,this.platform,this.request)}mab(e="prod"){return new g(e,this.platform,this.request)}getVersion(){return"4.7.4"}}var E=n(163)
n.d(t,"ABFactory",(function(){return _}))
class _{constructor(){this.client=new y}mab(){try{const e=this.client.mab(E.ABUtils.getEnv())
return e.setTimeout(3e3),e}catch(e){return console.error("[Globo AB SDK] Não foi possível instanciar o MAB: "+e.message),null}}ab(){try{const e=this.client.ab(E.ABUtils.getEnv())
return e.setTimeout(3e3),e}catch(e){return console.error("[Globo AB SDK] Não foi possível instanciar o AB: "+e.message),null}}}},function(e,t,n){"use strict"
n.r(t)
var r=n(102),i=n.n(r),o=n(82),s=n(165),a=n.n(s)
n.d(t,"Highlight",(function(){return c}))
class c extends o.Engine.Component{render(){let e
const{content:t,headline:n}=this.props,r=i()("highlight-bastian-feed",{headline:n}),s=t.half
t.time>0&&"Pós Jogo"!==s&&(e=t.time+"’ -"+s),"1º tempo"!==s&&"2º tempo"!==s&&(e=s)
const c=a()(t.text,85,"...",!0),l=n?o.Engine.createElement("p",null,o.Engine.createElement("strong",null,t.title)):o.Engine.createElement("span",{className:"title"},t.title)
return o.Engine.createElement("div",{className:r},o.Engine.createElement("div",{className:"time"},e),o.Engine.createElement("div",{className:"text"},l,c))}}},function(e,t,n){"use strict"
n.r(t)
var r=n(5),i=n.n(r),o=n(70),s=n(144),a=n(222),c=n(219),l=n(108),u=n(183),h=n(82),d=n(143),p=n(220),f=n(134),m=n(141),g=n(123),v=n(93),b=n(145),y=n(26),E=n(57),_=n(60),O=n(94),S=n(71),w=n(80),I=n(55),T=n(20)
class C extends h.Engine.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return Object(T.error)("ErrorBoundary:",e),{hasError:!0}}getSSRElement(){let e,t
try{e=Object(w.default)(this.props.children),t="_evt"}catch(n){e=this.getFallbackElement(),t="bstn-error-boundary",Object(T.error)("ErrorBoundary:",n)}return h.Engine.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:e}})}getFallbackElement(){let e=this.props.fallback
return e=I.At.server?Object(w.default)(e):h.Engine.createElement("div",{className:"bstn-error-boundary"},e),e}render(){if(this.state.hasError)return this.getFallbackElement()
let e
return I.At.client?e=this.props.children:I.At.server&&(e=this.getSSRElement()),e}}var x=n(214)
n(188)
function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}let A
n.d(t,"ItemC",(function(){return P})),n.d(t,"Item",(function(){return N}))
class P extends g.SeenTimeTelemetry{constructor(e){super(e),this.reportPostView=()=>{this.reportSeenTime(()=>this.reportToHorizon(s.PostView))},this.getExtCompPostContent=()=>{const{props:e}=this
return j({},Object(y.get)(e,"data.content"),{experiment:Object(y.get)(e,"data._experiment_properties"),position:this.context.itemIndex.getPosition(this)})},this.onView=()=>{if(!this.viewed){this.viewed=!0
const e=this._refs.child
e&&e.onView&&e.onView(this.getExtCompPostContent()),e&&!e.onView&&Object(u.onPostView)(this.getExtCompPostContent())}},this.onClick=e=>{const t=this._refs.child
e.label&&t&&t.onClick&&t.onClick(this.getExtCompPostContent(),e),t&&!t.onClick&&Object(u.onPostClick)(this.getExtCompPostContent(),e),this.reportPostClick(e)},this.reportPostClick=e=>{if((e.label||e.target.classList.contains("bstn-trk-click"))&&this.reportToHorizon(s.PostClick),e.label){const t=Object(b.cloneJSON)(this.state.data)
Object(O.set)(t,"bstn$source","feed"),Object(S.triggerDomEvent)(o.ITEM_CLICK,document,e=>{e.data=t}),this.reportEvent(e),this.reportToRealtime()}},this.state={data:Object(x.assignFactory)(e.data)},this.sharedItemData={},this.viewed=!1}getChildContext(){return{item:this,sharedItemData:this.sharedItemData}}render(){const e=this.state.data.klass||(()=>null),t=String(this.state.data.type||e.name||e.displayName||"unamed").toLowerCase()
return this.state.data.source!==a.$PushStream.staticName&&this.context.itemIndex&&this.context.itemIndex.register(this),h.Engine.createElement(C,null,h.Engine.createElement(l.ElementViewTrigger,{on:"middle",redirectToChildTriggerIfExists:!0},h.Engine.createElement("div",{ref:Object(v.as)(this,"item"),className:"bastian-feed-item","data-type":t,"data-index":this.props.index},h.Engine.createElement(e,j({ref:Object(v.as)(this,"child")},this.state.data)))))}componentWillMount(){this.sharedItemData.reporter=new f.ItemReporter({telemetry:this,data:this.state.data,itemReference:this,positionIndex:this.context.itemIndex,areaId:this.context.areaId})}componentDidMount(){this._refs.node=this._refs.item,this.cdmSeenTimeTelemetry(),this.lastReportedSeenTime=this.telemetry.seenTime,d.Horizon.on("collect-metrics",this.reportPostView),this._refs.item.addEventListener("click",this.onClick),x.emitter.on(x.NEW_POST_TYPE+this.props.data.type,()=>{this.setState({data:Object(x.assignFactory)(this.props.data)})})}componentWillUnmount(){this.cwuSeenTimeTelemetry(),d.Horizon.off("collect-metrics",this.reportPostView),this._refs.item&&this._refs.item.removeEventListener("click",this.onClick)}reportToHorizon(e){this.sharedItemData.reporter&&d.Horizon.report(e,new m.ReporterCascadeAggregator(this.sharedItemData.reporter,this.context.sharedFeedData.reporter))}reportEvent(e){const t=this._refs.child||{},n=this.context.itemIndex.getPosition(this)
if(e.label){const r={origin:Object(y.get)(this.props,"data.type")||"post basico",action:e.action||"clique",label:e.label,hasVideo:Object(E.has)(t,"_refs.video"),hasPhoto:Object(E.has)(t,"_refs.photo"),hasSummary:i()(t.hasSummary)&&t.hasSummary(),position:"posicao "+String(n).padStart(4,"0")}
Object(p.default)(r,["GA","CommonEvents"],{generateLabel:!0})}else this.state.data.klass===c.default?Object(p.default)({origin:"publicidade"},["GA","CommonEvents"]):"card"===this.state.data.type&&Object(p.default)({origin:"card"},["GA","CommonEvents"])}reportToRealtime(){const e=this.state.data
let t='tipo desconhecido "'+Object(y.get)(e,"key")+'"'
const n=Object(y.get)(e,"content.url")
if(n)t=n
else{const n=Object(y.get)(e,"content.video.id")
n&&(t="video "+n)}Object(_.reportToRealtime)({feed:"feed","right-column":"coluna da direita"}[this.context.areaId],t)}}A=P
const N=A}]).default
