!function(e){function t(i){if(r[i])return r[i].exports;var s=r[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){var i=r(7);i.start(document.getElementById("game"))},function(e,t,r){var i=r(4);e.exports={BEST_SCORE:"shi-zi-xiao-best-score",WIDTH:640,getWidth:function(){return this.WIDTH},getHeight:function(){return i.isPC()?document.documentElement.clientHeight:document.documentElement.clientHeight*this.WIDTH/document.documentElement.clientWidth},flagColor:"#555555",girdType0:"#bbbeb0",girdType1:"#bbbebf",round:5,gap:1,totalEl:7,dense:.8,helperNum:3,countTime:6e4,timerBarHeight:20,scoreBarHeight:30,scoreScale:2,timePunish:3e3,size:68,keepClickGap:1200}},function(e,t){e.exports={mainfest:[{id:"el0",src:"./images/el0.png",type:createjs.AbstractLoader.IMAGE},{id:"el1",src:"./images/el1.png",type:createjs.AbstractLoader.IMAGE},{id:"el2",src:"./images/el2.png",type:createjs.AbstractLoader.IMAGE},{id:"el3",src:"./images/el3.png",type:createjs.AbstractLoader.IMAGE},{id:"el4",src:"./images/el4.png",type:createjs.AbstractLoader.IMAGE},{id:"el5",src:"./images/el5.png",type:createjs.AbstractLoader.IMAGE},{id:"el6",src:"./images/el6.png",type:createjs.AbstractLoader.IMAGE},{id:"flag",src:"./images/flag.png",type:createjs.AbstractLoader.IMAGE},{id:"result",src:"./images/result.png",type:createjs.AbstractLoader.IMAGE},{id:"font3",src:"./images/font3.json",type:createjs.AbstractLoader.SPRITESHEET},{id:"font2",src:"./images/font2.json",type:createjs.AbstractLoader.SPRITESHEET},{id:"howtoplay",src:"./images/howtoplay.json",type:createjs.AbstractLoader.SPRITESHEET},{id:"start",src:"./images/start.png",type:createjs.AbstractLoader.IMAGE},{id:"share",src:"./images/share.png",type:createjs.AbstractLoader.IMAGE},{id:"restart",src:"./images/restart.png",type:createjs.AbstractLoader.IMAGE},{id:"text",src:"./images/text.png",type:createjs.AbstractLoader.IMAGE},{id:"bestscore",src:"./images/bestscore.png",type:createjs.AbstractLoader.IMAGE},{id:"nowscore",src:"./images/nowscore.png",type:createjs.AbstractLoader.IMAGE},{id:"mp3_start",src:"./audio/start.mp3",type:createjs.AbstractLoader.SOUND},{id:"mp3_end",src:"./audio/end.mp3",type:createjs.AbstractLoader.SOUND},{id:"mp3_fail",src:"./audio/fail.mp3",type:createjs.AbstractLoader.SOUND},{id:"mp3_work",src:"./audio/work.mp3",type:createjs.AbstractLoader.SOUND}],loader:null}},function(e,t,r){var i=r(2),s=function(e,t){createjs.Container.call(this);var r=i.loader.getResult(String(t)),s=new createjs.BitmapText(e+"",r);this.addChild(s)};s.prototype=Object.create(createjs.Container.prototype),s.prototype.constructor=s,e.exports=s},function(e,t){e.exports={randomize:function(e){for(var t=[];e.length>0;){var r=Math.floor(e.length*Math.random());t.push(e[r]),e.splice(r,1)}return t},isPC:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],r=!0,i=0;i<t.length;i++)if(e.indexOf(t[i])>0){r=!1;break}return r}}},function(e,t){/*! store2 - v2.3.2 - 2015-10-27
	* Copyright (c) 2015 Nathan Bubna; Licensed MIT, GPL */
!function(t,r){var i={version:"2.3.2",areas:{},apis:{},inherit:function(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r]);return t},stringify:function(e){return void 0===e||"function"==typeof e?e+"":JSON.stringify(e)},parse:function(e){try{return JSON.parse(e)}catch(t){return e}},fn:function(e,t){i.storeAPI[e]=t;for(var r in i.apis)i.apis[r][e]=t},get:function(e,t){return e.getItem(t)},set:function(e,t,r){e.setItem(t,r)},remove:function(e,t){e.removeItem(t)},key:function(e,t){return e.key(t)},length:function(e){return e.length},clear:function(e){e.clear()},Store:function(e,t,r){var s=i.inherit(i.storeAPI,function(e,t,r){return 0===arguments.length?s.getAll():void 0!==t?s.set(e,t,r):"string"==typeof e||"number"==typeof e?s.get(e):e?s.setAll(e,t):s.clear()});s._id=e;try{var a="_safariPrivate_";t.setItem(a,"sucks"),s._area=t,t.removeItem(a)}catch(n){}return s._area||(s._area=i.inherit(i.storageAPI,{items:{},name:"fake"})),s._ns=r||"",i.areas[e]||(i.areas[e]=s._area),i.apis[s._ns+s._id]||(i.apis[s._ns+s._id]=s),s},storeAPI:{area:function(e,t){var r=this[e];return r&&r.area||(r=i.Store(e,t,this._ns),this[e]||(this[e]=r)),r},namespace:function(e,t){if(!e)return this._ns?this._ns.substring(0,this._ns.length-1):"";var r=e,s=this[r];return s&&s.namespace||(s=i.Store(this._id,this._area,this._ns+r+"."),this[r]||(this[r]=s),t||s.area("session",i.areas.session)),s},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(e){return this._area.has?this._area.has(this._in(e)):!!(this._in(e)in this._area)},size:function(){return this.keys().length},each:function(e,t){for(var r=0,s=i.length(this._area);s>r;r++){var a=this._out(i.key(this._area,r));if(void 0!==a&&e.call(this,a,t||this.get(a))===!1)break;s>i.length(this._area)&&(s--,r--)}return t||this},keys:function(){return this.each(function(e,t){t.push(e)},[])},get:function(e,t){var r=i.get(this._area,this._in(e));return null!==r?i.parse(r):t||r},getAll:function(){return this.each(function(e,t){t[e]=this.get(e)},{})},set:function(e,t,r){var s=this.get(e);return null!=s&&r===!1?t:i.set(this._area,this._in(e),i.stringify(t),r)||s},setAll:function(e,t){var r,i;for(var s in e)i=e[s],this.set(s,i,t)!==i&&(r=!0);return r},remove:function(e){var t=this.get(e);return i.remove(this._area,this._in(e)),t},clear:function(){return this._ns?this.each(function(e){i.remove(this._area,this._in(e))},1):i.clear(this._area),this},clearAll:function(){var e=this._area;for(var t in i.areas)i.areas.hasOwnProperty(t)&&(this._area=i.areas[t],this.clear());return this._area=e,this},_in:function(e){return"string"!=typeof e&&(e=i.stringify(e)),this._ns?this._ns+e:e},_out:function(e){return this._ns?e&&0===e.indexOf(this._ns)?e.substring(this._ns.length):void 0:e}},storageAPI:{length:0,has:function(e){return this.items.hasOwnProperty(e)},key:function(e){var t=0;for(var r in this.items)if(this.has(r)&&e===t++)return r},setItem:function(e,t){this.has(e)||this.length++,this.items[e]=t},removeItem:function(e){this.has(e)&&(delete this.items[e],this.length--)},getItem:function(e){return this.has(e)?this.items[e]:null},clear:function(){for(var e in this.list)this.removeItem(e)},toString:function(){return this.length+" items in "+this.name+"Storage"}}};t.store&&(i.conflict=t.store);var s=i.Store("local",function(){try{return localStorage}catch(e){}}());s.local=s,s._=i,s.area("session",function(){try{return sessionStorage}catch(e){}}()),t.store=s,"function"==typeof r&&void 0!==r.amd?r(function(){return s}):"undefined"!=typeof e&&e.exports&&(e.exports=s)}(this,this.define)},function(e,t,r){var i=r(2),s=function(e){createjs.Container.call(this),this.color=e,this.el=new createjs.Bitmap(i.loader.getResult(this.color)),this.addChild(this.el),this.mouseEnabled=!1,this.mouseChildren=!1};s.prototype=Object.create(createjs.Container.prototype),s.prototype.constructor=s,s.prototype.id="",s.prototype.gird=null,s.prototype.dispelEffcet=function(){this.alpha=.95;var e=this.y+100,t=360*Math.random()-180,r=this.x+(50*Math.random()-25);createjs.Tween.get(this).to({alpha:0,rotation:t,x:r},500,createjs.Ease.linear),createjs.Tween.get(this).to({y:e},500,createjs.Ease.backIn)},s.prototype.reset=function(){this.alpha=1,this.rotation=0},e.exports=s},function(e,t,r){function i(e){a=e,document.getElementById("game").setAttribute("width",h.getWidth()+""),document.getElementById("game").setAttribute("height",h.getHeight()+""),s=new createjs.Stage(a),createjs.Ticker.timingMode=createjs.Ticker.RAF,createjs.Ticker.addEventListener("tick",function(e){s.update(e)}),n=new c,s.addChild(n),o=new createjs.LoadQueue,o.installPlugin(createjs.Sound),o.loadManifest(d.mainfest),o.on("progress",function(e){n.change(e.progress)}),o.on("complete",function(e){d.loader=o,createjs.Tween.get(n).to({alpha:0,y:"20"},500,createjs.Ease.backIn).call(function(){s.removeChild(n);var e=new l;s.addChild(e)})}),o.load()}var s,a,n,o,c=r(9),h=r(1),d=r(2),l=r(10);r(3);t.start=i},function(e,t,r){var i=r(1),s=function(e,t){createjs.Container.call(this),this.id=e,this.bg=new createjs.Shape;var r=i.round,s=i.size,a=i.girdType0,n=i.girdType1,o=i.gap;this.bg.graphics.append(new createjs.Graphics.RoundRect(o,o,s-o,s-o,r,r,r,r),!1),this.bg.graphics.append(new createjs.Graphics.Fill(t?a:n),!1),this.addChild(this.bg),this.bg.cache(0,0,s,s);var c=new createjs.Text;c.text=e,c.font="16px"};s.prototype=Object.create(createjs.Container.prototype),s.prototype.constructor=s,e.exports=s,s.prototype.id="",s.prototype.elem=null,s.prototype.flag=null,s.prototype.dispelEl=function(){}},function(e,t,r){function i(){c.Container.call(this),this.w=a/3,this.h=20,this._buildUI()}var s=r(1),a=s.getWidth(),n=s.getHeight();c=createjs,i.prototype=Object.create(c.Container.prototype),i.constructor=i,i.prototype._buildUI=function(){this.progressBG=new c.Shape,this.progressBG.graphics.beginFill("#a7a7a7").drawRect(0,0,this.w,this.h),this.progressBG.x=a/2-this.w/2,this.progressBG.y=n/2-this.h/2,this.addChild(this.progressBG);var e=2;this.progressPercent=new c.Shape,this.progressPercent.graphics.beginFill("#5b970b").drawRect(0,0,this.w-2*e,this.h-2*e),this.progressPercent.x=this.progressBG.x+e,this.progressPercent.y=this.progressBG.y+e,this.progressPercent.scaleX=.01,this.addChild(this.progressPercent)},i.prototype.change=function(e){this.progressPercent.scaleX=e},i.prototype.hide=function(){},e.exports=i},function(e,t,r){var i,s,a,n,o,c,h,d,l,p,g=r(1),u=(r(2),r(8)),f=r(4),m=r(6),y=r(12),v=r(3),w=r(11),b={},j=[],S=[],x=1,C=0,E=function(){createjs.Container.call(this),d=Math.floor(g.getWidth()/g.size),l=Math.floor((g.getHeight()-g.timerBarHeight-g.scoreBarHeight-30)/g.size),p=(g.getWidth()-d*g.size)/2,o=new w(d*g.size),o.x=p,a=new createjs.Container,this.createTimerBar(),n.x=p,n.y=o.y+o.getBounds().height,n.addEventListener("time-over",this._onTimeOver.bind(this)),this.createGrids(),i.x=p,i.y=n.y+n.getBounds().height,this.createElems(),this.resetElems(),c=r(13),c.addEventListener("game-start",function(e){this.removeChild(c),this.gameRestart()}.bind(this)),h=r(14),h.scores=o,h.addEventListener("game-restart",function(e){this.removeChild(h),this.addChild(c)}.bind(this)),this.addChild(n,i,s,o,a,c)};E.prototype=Object.create(createjs.Container.prototype),E.prototype.constructor=E,E.prototype.createGrids=function(){j=[],i=new createjs.Container;for(var e=0;d>e;e++)for(var t=0;l>t;t++){var r=(e+t)%2==0,s=new u(e+"-"+t,r);s.x=g.size*e,s.y=g.size*t,i.addChild(s),j.push(s),b[e+"-"+t]=s,s.on("click",function(e){this.response(e.currentTarget)}.bind(this))}i.cache(0,0,g.getWidth(),g.getHeight()),i.mouseChildren=!1},E.prototype._onTimeOver=function(e){this.gameOver()},E.prototype.createElems=function(){S=[],s=new createjs.Container;for(var e=0,t=Math.floor(d*l*g.dense);t>e;e++){var r=new m("el"+e%g.totalEl);r.regX=r.getBounds().width/2,r.regY=r.getBounds().height/2,S.push(r),s.addChild(r)}},E.prototype.createTimerBar=function(){n=new y(d*g.size)},E.prototype.gameOver=function(){n.timerPause(!0),i.mouseChildren=!1,o.setLocalScore(),this.addChild(h),createjs.Sound.play("mp3_end")},E.prototype.gameRestart=function(){this.resetElems(),n.timeRestart(),i.mouseChildren=!0,o.resetScore()},E.prototype.resetElems=function(){j=f.randomize(j);for(var e=0,t=j.length;t>e;e++)if(e<S.length){j[e].elem=S[e];var r=i.localToGlobal(j[e].x,j[e].y);S[e].x=r.x+g.size/2,S[e].y=r.y+g.size/2,S[e].id=j[e].id,S[e].reset()}else j[e].elem=null},E.prototype.find=function(e){var t,r,i=[],s=e.id,a=parseInt(s.split("-")[0]),n=parseInt(s.split("-")[1]);if(n>0)for(r=n-1;r>=0;r--)if(t=b[a+"-"+r],t.elem&&1==t.elem.alpha){i.push(t.elem);break}if(d-1>a)for(r=a+1;d>r;r++)if(t=b[r+"-"+n],t.elem&&1==t.elem.alpha){i.push(t.elem);break}if(l-1>n)for(r=n+1;l>r;r++)if(t=b[a+"-"+r],t.elem&&1==t.elem.alpha){i.push(t.elem);break}if(a>0)for(r=a-1;r>=0;r--)if(t=b[r+"-"+n],t.elem&&1==t.elem.alpha){i.push(t.elem);break}return i},E.prototype.check=function(){for(var e={grid:null,elems:null},t=0,r=j.length;r>t;t++){var i=j[t],s=null;if((!i.elem||i.elem.alpha<1)&&(s=this.getSameByColor(this.find(i)),s.length>0)){e.grid=i,e.elems=s;break}}e.grid||this.gameOver()},E.prototype.getSameByColor=function(e){for(var t=[],r=e.length,i=0;r>i;i++)for(var s=0;r>s;s++)i!=s&&e[i].color==e[s].color&&(t.indexOf(e[i])<0&&t.push(e[i]),t.indexOf(e[s])<0&&t.push(e[s]));return t},E.prototype.reject=function(e){for(var t=0,r=e.length;r>t;t++)s.setChildIndex(e[t],s.numChildren-1),e[t].dispelEffcet()},E.prototype.getBetween=function(e){},E.prototype.response=function(e){if(!e.elem||e.elem.alpha<1){var t=this.getSameByColor(this.find(e));t.length>0?(this.reject(t),this.addScores(t),createjs.Sound.play("mp3_work"),this.check()):(n.minusTime(),createjs.Sound.play("mp3_fail"))}},E.prototype.showPoint=function(e,t){for(var r=t*g.scoreScale,i=0,s=e.length;s>i;i++){var n=new v(r,"font2");n.x=e[i].x,n.y=e[i].y,a.addChild(n);var o=n.y-30,c=n.x+20*Math.random()-10;createjs.Tween.get(n).to({alpha:0,y:o,x:c},800,createjs.Ease.backIn).call(function(e){a.removeChild(e)},[n])}if(t>1){var h=new v(t+"连击!","font3");h.x=g.getWidth()/2-100,h.y=g.getHeight()/2,a.addChild(h),createjs.Tween.get(h).to({alpha:0,y:g.getHeight()/2-30},1500,createjs.Ease.backIn).call(function(e){a.removeChild(e)},[h])}},E.prototype.addScores=function(e){var t=new Date;t.getTime()-C<g.keepClickGap?x+=1:x=1,o.updateSessionScore(x*g.scoreScale*e.length),C=t.getTime(),this.showPoint(e,x)},E.prototype.removeScores=function(){},e.exports=E},function(e,t,r){function i(e){createjs.Container.call(this);var t=a.scoreBarHeight,r=new createjs.Shape;r.graphics.beginFill("#aaaa9a"),r.graphics.drawRect(0,0,0,t+o+c),r.graphics.drawRoundRect(0,o,e,t,0),r.graphics.endFill(),r.cache(0,0,e,t+o+c),this.addChild(r);var i=14,h=new createjs.Bitmap(n.loader.getResult("nowscore"));h.x=0,h.y=i,this.addChild(h);var d=new createjs.Bitmap(n.loader.getResult("bestscore"));d.x=300,d.y=i,this.addChild(d),this.sessionScore=0,this.sessionTxt=new createjs.BitmapText("0",n.loader.getResult("font2")),this.sessionTxt.x=h.x+110,this.sessionTxt.y=i,this.addChild(this.sessionTxt),this.bestTxt=new createjs.BitmapText("0",n.loader.getResult("font2")),this.bestTxt.x=d.x+110,this.bestTxt.y=i,this.addChild(this.bestTxt),s(a.BEST_SCORE)||s(a.BEST_SCORE,0),this.resetScore()}var s=r(5),a=r(1),n=r(2),o=10,c=0;i.prototype=Object.create(createjs.Container.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.updateSessionScore=function(e){this.sessionScore+=e,this.sessionTxt.text=String(this.sessionScore)},i.prototype.setLocalScore=function(){this.getLocalScore()<this.sessionScore&&s(a.BEST_SCORE,this.sessionScore)},i.prototype.getLocalScore=function(){return s(a.BEST_SCORE)},i.prototype.resetScore=function(){this.sessionScore=0,this.sessionTxt.text="0",this.bestTxt.text=String(this.getLocalScore())}},function(e,t,r){var i=r(1),s=10,a=function(e){this.w=e,createjs.Container.call(this),this.h=i.timerBarHeight,this.round=this.h/2;var t=new createjs.Shape;t.graphics.beginFill("#ffffff"),t.graphics.drawRect(0,0,0,this.h+2*s),t.graphics.beginFill("#9a9a9a"),t.graphics.drawRoundRect(0,s,this.w,this.h,this.round),t.graphics.endFill(),t.cache(0,0,this.w,this.h+2*s),this.addChild(t),this.bar=new createjs.Shape,this.addChild(this.bar)};a.prototype=Object.create(createjs.Container.prototype),a.prototype.constructor=a,Object.defineProperty(a.prototype,"progress",{set:function(e){if(!(e>=0&&e<=i.countTime))throw new Error("value between 0-1");this._progress=e/i.countTime,this.bar.graphics.clear(),this.bar.graphics.beginFill("#8fd632"),this.bar.graphics.drawRoundRect(0,s,this.w*this._progress,this.h,this.round),this.bar.graphics.endFill(),this.bar.cache(0,s,this.w,this.h)},get:function(){return i.countTime*this._progress}}),a.prototype.residualTime=function(){},a.prototype.timeRestart=function(e){this.progress=e||i.countTime;var t=e||i.countTime;this.tween&&createjs.Tween.removeTweens(this),this.tween=createjs.Tween.get(this,{override:!0}).to({progress:0},t).call(function(){this.dispatchEvent("time-over")}.bind(this))},a.prototype.minusTime=function(){var e=this.progress-i.timePunish;e>0?this.timeRestart(e,e):this.timeRestart(1,1)},a.prototype.timerPause=function(e){this.tween.setPaused(e)},e.exports=a},function(e,t,r){function i(){l.y=(a.getHeight()-h)/3;var e=(a.getHeight()-h)/2;createjs.Tween.get(l).to({y:e},500,createjs.Ease.backOut)}var s=r(2),a=r(1),n=new createjs.Container,o=new createjs.Shape;o.graphics.beginFill("rgba(0,0,0,0.75)"),o.graphics.drawRect(0,0,a.getWidth(),a.getHeight()),o.graphics.endFill(),o.cache(0,0,a.getWidth(),a.getHeight()),n.addChild(o);var c=340,h=340,d=5,l=new createjs.Container;l.x=(a.getWidth()-c)/2,l.y=(a.getHeight()-h)/2;var p=new createjs.Shape;p.graphics.beginFill("rgba(210,210,210,1)"),p.graphics.beginStroke("#00a02d"),p.graphics.setStrokeStyle(d),p.graphics.drawRoundRect(0,0,c,h,10),p.graphics.endFill(),p.cache(0,0,c,h),l.addChild(p);var g=new createjs.Bitmap(s.loader.getResult("text"));l.addChild(g),g.x=(c-g.getBounds().width)/2,g.y=20;var u=new createjs.Sprite(s.loader.getResult("howtoplay"));u.play(),u.framerate=1,l.addChild(u),u.x=165,u.y=185;var f=new createjs.Bitmap(s.loader.getResult("start"));l.addChild(f),f.x=(c-f.getBounds().width)/2,f.y=250,n.addChild(l),n.addEventListener("added",function(){i()}),f.addEventListener("click",function(e){n.dispatchEvent("game-start")}),e.exports=n},function(e,t,r){function i(){l.y=(a.getHeight()-h)/3;var e=(a.getHeight()-h)/2;createjs.Tween.get(l).to({y:e},500,createjs.Ease.sineOut)}var s=r(2),a=r(1),n=new createjs.Container;n.scores=null;var o=new createjs.Shape;o.graphics.beginFill("rgba(0,0,0,0.75)"),o.graphics.drawRect(0,0,a.getWidth(),a.getHeight()),o.graphics.endFill(),o.cache(0,0,a.getWidth(),a.getHeight()),n.addChild(o);var c=340,h=340,d=5,l=new createjs.Container;l.x=(a.getWidth()-c)/2,l.y=(a.getHeight()-h)/2,n.addChild(l);var p=new createjs.Shape;p.graphics.beginFill("rgba(210,210,210,1)"),p.graphics.beginStroke("#00a02d"),p.graphics.setStrokeStyle(d),p.graphics.drawRoundRect(0,0,c,h,10),p.graphics.endFill(),p.cache(0,0,c,h),l.addChild(p);var g=new createjs.Bitmap(s.loader.getResult("result"));l.addChild(g),g.x=c/2-g.getBounds().width/2,g.y=30;var u=new createjs.Bitmap(s.loader.getResult("restart"));u.x=c/2-u.getBounds().width/2,u.y=150,l.addChild(u);var f=new createjs.Bitmap(s.loader.getResult("share"));f.x=c/2-f.getBounds().width/2,f.y=220,l.addChild(f);var m=new createjs.BitmapText("",s.loader.getResult("font2"));m.x=245,m.y=59;var y=new createjs.BitmapText("",s.loader.getResult("font2"));y.x=135,y.y=85,l.addChild(m,y),u.addEventListener("click",function(e){n.dispatchEvent("game-restart")}),f.addEventListener("click",function(){var e=function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)};e()?alert("请点击右上角选项，发送给朋友或分享到朋友圈！"):alert("请将此网址发送给朋友吧！")}),n.addEventListener("added",function(e){m.text=n.scores.sessionScore+"",y.text=n.scores.getLocalScore()+"",i()}),e.exports=n}]);