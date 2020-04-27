$ = function(i){
  return document.querySelector(i);
}

$$ = function(i){
  return document.querySelectorAll(i);
}

menus = {
  
  articles: {
    "webgl-guide": "WebGL guide",
    obfuscatweet: "Obfusc-a-tweet reloaded",
    js13k19: "JS13kGames 2019",
    projection: "3D projection",
    js1k19: "JS1K 2019",
    codegolfctober18: "Codegolfctober 2018",
    js13k18: "JS13kGames 2018",
    js1k18: "JS1k 2018",
    golfctober17: "Golfctober 2017",
    js13k17: "JS13kGames 2017",
    webgl_quest_2: "WebGL quest #2",
    js1k17: "JS1k 2017",
    gameoflife: "Golfing the Game of Life",
    webspeech: "Web Speech API golfing",
    css3dgames: "CSS3D game tutorial",
    jsgamesinputs: "JS games keyboard inputs",
    js13k16 :"JS13kGames 2016",
    eqcss: "EQCSS",
    fatigue: "Shitty systems fatigue",
    webgl_quest: "WebGL quest",
    js1k16: "JS1k 2016",
    js13k15: "JS13kGames 2015",
    js1k15: "JS1k 2015",
    js13k14: "JS13kGames 2014",
    domoddities: "DOM oddities",
    js1k14: "JS1k 2014",
    getelementbyid: "getElementById",
    textshadows: "Text-shadows",
    lists: "Lists", 
    contenteditable: "Contenteditable",
    doctype: "Doctype (FR)",
    hexadecimalweirdness: "Hexadecimal weirdness",
  },
  
  codegolf: {
    intro: "Intro",
    css3dframework: "CSS3D framework",
    miniphotobooth: "Mini Photo Booth",
    minicamrecording: "Mini Cam Recording",
    minisoundeditor: "Mini Sound Editor",
    minimandelbox: "Mini Mandelbox (JS1k19)",
    miniridinglight: "Mini Riding Light (JS1k19)",
    minitwo3d: "MiniTwo3D (JS1k19)",
    escape: "EscApe (JS1k19)",
    miniunicodetoys: "Mini Unicode Toys (JS1k19)",
    peach1kastle: "Peach1Kastle (JS1k19)",
    period1k: "PERIOD1K (JS1k16/17/19)",
    minisynth: "MiniSynth (JS1k19)",
    smb11k: "SMB1-1k (JS1k19)",
    emojysics: "Emojysics (JS1k19)",
    manonwire: "Man on Wire (JS13k19)",
    envelope: "envelope (JS13k19)",
    geoquiz2: "GEOQUIZ 2 (JS13k18)",
    mini2Dphysics: "mini2Dphysics",
    minifacedetection: "Mini Face Detection",
    minimusic: "Mini Music (JS1k18)",
    epiccycles: "Epic Cycles (JS1k18)",
    shaderandom: "ShaderRndom (JS1k18)",
    minifourier: "Mini Fourier (JS1k18)",
    sn1ke: "SN1KE (JS1k18)",
    miniworld: "Mini World",
    minidwitter: "Mini Dwitter",
    miniminifier: "Mini Minifier",
    minicodeeditor: "Mini Code Editor",
    miniasciiserpinski: "miniAsciiSerpinski",
    miniplot: "miniPlot",
    minigameoflife: "MiniGameOfLife",
    minipeterdejongattractor: "MiniPeterDeJongAttractor",
    minicliffordattractor: "MiniCliffordAttractor",
    attractorandom: "AttractoRandom",
    tetristheme: "TetrisTheme",
    audioviz: "MiniAudioViz",
    atree: "Atree reloaded",
    sheet: "Sheet",
    miniburrowswheeler: "MiniBurrowsWheeler",
    minitetris: "MiniTetris",
    miniunicode: "MiniUnicode",
    miniserpinskitriangle: "MiniSerpinskiTriangle",
    minipixelfont: "MiniPixelFont",
    minidragoncurve: "MiniDragonCurve",
    minikeycode: "MiniKeyCode",
    miniuri: "miniURI converter",
    minibookmarklet: "Mini Bookmarklet",
    outline: "Outline every element", // https://gist.github.com/addyosmani/fd3999ea7fce242756b1
    miniarecibo: "Mini Arecibo",
    lossst: "LOSSST (JS13k17)",
    minimandelbrot: "MiniMandelbrot",
    "1kindofmagic": "1Kind of magic (JS1k17)",
    canihaz1karrot: "Can I haz 1Karrot? (JS1k17)",
    moon1px: "If the moon was 1px (JS1k17)",
    minishadertoy: "MiniShadertoy (JS1k17)",
    minishadertoylite: "MiniShadertoyLite",
    miniproxy: "MiniProxy",
    minisplitscreen: "miniSplitScreen",
    miniconwayserpinski: "MiniConwaySerpinski",
    minispeechrecognitionandsynthesis: "MiniSpeechRecognition/Synth",
    minicodeshaper: "MiniCodeShaper",
    miniwebrtc: "MiniWebRTC",
    minicam: "MiniCam",
    "26gamesin1": "26 games in 1 (JS13k16)",
    scpm: "SCPM (JS13k16)",
    minipi: "MiniPi",
    minisnake: "MiniSnake",
    minicosmiccall: "MiniCosmicCall",
    miniasciiart: "MiniAsciiArt",
    minidoodle: "MiniDoodle",
    miniburningship: "MiniBurningShip",
    minilangtonloops: "MiniLangtonLoops",
    minilangtonant: "MiniLangtonAnt",
    miniregextester: "MiniRegexTester",
    jsotopes: "JSOTOPES (JS1k16)",
    un1kode: "UN1KODE (JS1k16)",
    minibeautifier: "MiniBeautifier (JS1k16)",
    obfuscatweet: "Obfusc-a-tweet",
    twittercounter: "Twitter character counter",
    geoquiz: "GeoQuiz (JS13k15)",
    hypercube: "hypeRcube (JS1k15)",
    minijsperf: "MiniJSPerf",
    minishadowart: "MiniShadowArt",
    alchemixer: "Alchemixer (JS13k14)",
    minicountdown: "MiniCountdown",
    innout: "In-n-out",
    minipoptiles: "MiniPopTiles",
    minisimon: "MiniSimon",
    golfer: "ASCII-art golfer",
    cssprite: "CSSprite",
    postit: "Post-it",
    prettycode: "Pretty code",
    floppydragon: "Floppy dragon (JS1k14)",
    helloworld: "Hello World",
    chip8: "Chip8 emulator",
    hex: "Hex editor",
    "32b": "32b",
    deletedlines: "Deleted lines",
    paste: "Paste",
    keypressed: "Keys pressed",
    minisweeper: "Mini Sweeper",
    asciinotused: "ASCII chars not used",
    snail: "Snail",
    heylisten: "HeyListen: custom events",
    lazy: "Lazy: JS shortcuts",
    binaryoperations: "Binary operations",

  },
  
  
  projects: {
    intro: "Intro",
    terseronline: "Terser-online",
    miniorchestra: "Mini Orchestra",
    inktober18: "inktober 2018",
    int2binary2html: "int2binary2html",
    scribblenauts: "Scribblenauts golf-play",
    twitterdigest: "Twitter-digest",
    gameaudiobundle: "Game Audio Bundle MP3",
    nes: "NES",
    lossst: "LOSSST",
    responsivetouchgameframework: "Mini Game Framework",
    shapecatcher: "MiniShapeCatcher",
    book: "MiniBook",
    leveleditor3d: "3D level editor",
    minix86: "minix86",
    ama: "Ask me anything",
    math: "Maths cheat sheet",
    points: "3D points",
    raycast: "Raycasting experiments",
    css3dcubes: "CSS3D cubes",
    css3dprototypes: "CSS3D prototypes",
    js13kgraphics: "JS13k graphics editor",
    js13kleveleditor: "JS13k level editor",
    cellularandom: "Random cellular automata",
    codegolfide: "Codegolf IDE",
    "3ddoodle": "3Ddoodle",
    zpng: "Zpng: Pure JS JsExe",
    eqcss: "EQCSS Element Queries",
    talks: "Talks",
    "3DShomebrew": "3DShomebrew",
    cssslider: "CSSslider",
    windowall: "Window.all",
    escape: "EscApe Unicode converter",
    wiiufps: "WiiU FPS",
    charsets: "Charsets experiments",
    strftime: "Strftime date formatter",
    braille_art: "Braille Art generator",
    text: "Text experiments",
    arrayduce: "Arrayduce",
    drawcircles: "DrawCircles",
    events: "JS Events monitoring",
    swipe: "Swipe, touchable slider",
    video: "HTML5 video experiments",
    gba: "GBA emulator",
    lol: "LOL",
    karoshids: "Karoshi DS",
    easy: "Easy classic flash game",
    scan: "Polytech-o-scan",
    lipdub: "Lipdub",
  },
  
  techwatch: {
    
    "intro": "intro",
    "techwatch2019": "2019",
    "techwatch2018": "2018",
    "techwatch2017": "2017", 
    "techwatch2016": "2016", 
    "techwatch2015": "2015", 
    "techwatch2014": "2014", 
    "techwatch2013": "2013", 
    "techwatch2012": "2012 (FR)", 
    "techwatch2011": "2011 (FR)", 
    
  }
}

header = function(){
  var section = "home";
  var page = "";
  location.pathname.replace(/(\/xem.github.io)?\/(.*)\/([^\/]*?)(\.html)?$/, (z,a,b,c) => { if(b) section = b; if(c) page = c; });
  if(section == "xem.github.io" && page == ""){
    section = "home";
  }
  $("header").innerHTML = 
  `
    <div class=logo>
    <h2>XEM</h2>
    <h3>game design <span>&</span> front-end hacking</h3>
    </div>
    <menu>
    <a href="${section == "home" ? "." : "../"}" class="home${section == "home" ? " active" : ""}">🏠</a>
    <a href="${section == "home" ? "" : "../"}articles"${section == "articles" ? ' class="active"' : ""}>Articles</a>
    <a href="${section == "home" ? "" : "../"}codegolf"${section == "codegolf" ? ' class="active"' : ""}>JS code golf</a>
    <br class="mobileonly">
    <a href="${section == "home" ? "" : "../"}projects"${section == "projects" ? ' class="active"' : ""}>Projects, games & experiments</a>
    <a href="${section == "home" ? "" : "../"}techwatch"${section == "techwatch" ? ' class="active"' : ""}>Tech watch</a>
    </menu>
  `;
}



footer = function(){

  $("footer").insertAdjacentHTML("beforeEnd", 
  ` 
    © ${new Date().getFullYear()} Maxime EUZIERE
    <br>
    <a href="//github.com/xem" target=_blank>Github</a> - 
    <a href="//twitter.com/maximeeuziere" target=_blank>Twitter</a> - 
    <a href="//www.dwitter.net/u/xem" target=_blank>Dwitter</a> - 
    <a href="//maximeeuziere.itch.io/" target=_blank>Itch</a> - 
    <a href="mailto:maxime.euziere(at)gmail.com">Mail</a> - 
    <a href="/cv" target=_blank>CV</a>
    <div class=backtotop onclick="document.body.scrollTop = document.documentElement.scrollTop = 0">⤊</div>
    <iframe src="https://visits.xem.workers.dev/" width=1 height=1 style="opacity:.1">
  `);
  
  var section = "home";
  var page = "";
  location.pathname.replace(/(\/xem.github.io)?\/(.*)\/([^\/]*?)(\.html)?$/, (z,a,b,c) => { if(b) section = b; if(c) page = c; });
  if(section == "xem.github.io" && page == ""){
    section = "home";
  }
  /*if(section != "home" && page != "" && page != "intro"){    
    s = document.createElement("SCRIPT");
    s.src = "https://utteranc.es/client.js";
    s.setAttribute("repo","xem/xem.github.io");
    s.setAttribute("issue-term","pathname");
    s.setAttribute("theme","github-light");
    s.setAttribute("crossorigin","anonymous");
    s.setAttribute("async","");
    if($("main .section:last-child"))
      $("main .section:last-child").appendChild(s);
  }*/
}


menu = function(){
  
  var section = "home";
  var page = "";
  var scroll = 0;
  location.pathname.replace(/(\/xem.github.io)?\/(.*)\/([^\/]*?)(\.html)?$/, (z,a,b,c) => { if(b) section = b; if(c) page = c; });
  console.log(section, page);
  if(section == "codegolf" && location.hash == "#jstweet_en"){
    location = "./obfuscatweet.html";
    return;
  }
  if(section == "xem.github.io" && page == ""){
    section = "home";
  }
  if(menus[section] && !page && (section == "articles" || section == "projects" || section == "codegolf")){
    for(var i in menus[section]){
      location = i + ".html";
      break;
    }
  }
  
  if(menus[section]){
    
    var nb = 0;
    
    var html = `
    <input id=menusearch placeholder="Search..." oninput="filtermenu(value)">
    <ul>`;
    var counter = menus[section].length;
    for(i in menus[section]){
      if(section != "articles" && section != "projects" && section != "codegolf")
        html += `<li><a ${page == i ? 'class="active"' : ""}href='#${i}'>${menus[section][i]}</a>`;
      else
        html += `<li><a ${page == i ? 'class="active"' : ""}href='${i}.html'>${menus[section][i]}</a>`;
      
      if(page == i){
        scroll = nb * 22;
      }
      
      nb++;
    }
    
    $("#menu").innerHTML = html;
    $("#menu").insertAdjacentHTML("beforeBegin", "<div id=hamburger class=mobileonly onclick=showmenu()>≡</div>");
    $("#menu").insertAdjacentHTML("beforeBegin", "<div id=hidemenu class=mobileonly onclick=hidemenu()>≡</div>");
    $("#menu").className = section;
    if(scroll > 100) $("#menu").scrollTop = scroll;
  }
  
  // prev/next 
  //$(".section").insertAdjacentHTML("afterBegin","&larr; &rarr;")  
    
}

onscroll = function(){
  $(".logo h2").style.transform = "perspective(130px)rotateX(" + (-60 + scrollY/10) + "deg)";
}

showmenu = function(){
  $("#hidemenu").style.display = "block";
  $("#menu").style.left = 0;
}

hidemenu = function(){
  $("#hidemenu").style.display = "none";
  $("#menu").style.left = "-300px";
}

filtermenu = function(s){
  var items = $$("#menu li");
  for(var i in items){
    if(items[i].innerHTML && items[i].style && items[i].innerHTML.includes(s)){
      items[i].style.display = "list-item";
    }
    else if(items[i].style){
      items[i].style.display = "none";
    }
  }
}


/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+css-extras */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(g){var c=/\blang(?:uage)?-([\w-]+)\b/i,a=0,C={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof M?new M(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function n(e,t){var r,a,i=C.util.type(e);switch(t=t||{},i){case"Object":if(a=C.util.objId(e),t[a])return t[a];for(var l in r={},t[a]=r,e)e.hasOwnProperty(l)&&(r[l]=n(e[l],t));return r;case"Array":return a=C.util.objId(e),t[a]?t[a]:(r=[],t[a]=r,e.forEach(function(e,a){r[a]=n(e,t)}),r);default:return e}}},languages:{extend:function(e,a){var n=C.util.clone(C.languages[e]);for(var t in a)n[t]=a[t];return n},insertBefore:function(n,e,a,t){var r=(t=t||C.languages)[n],i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=r[l])}var s=t[n];return t[n]=i,C.languages.DFS(C.languages,function(e,a){a===s&&e!=n&&(this[e]=i)}),i},DFS:function e(a,n,t,r){r=r||{};var i=C.util.objId;for(var l in a)if(a.hasOwnProperty(l)){n.call(a,l,a[l],t||l);var o=a[l],s=C.util.type(o);"Object"!==s||r[i(o)]?"Array"!==s||r[i(o)]||(r[i(o)]=!0,e(o,n,l,r)):(r[i(o)]=!0,e(o,n,null,r))}}},plugins:{},highlightAll:function(e,a){C.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",t);for(var r,i=t.elements||e.querySelectorAll(t.selector),l=0;r=i[l++];)C.highlightElement(r,!0===a,t.callback)},highlightElement:function(e,a,n){for(var t,r="none",i=e;i&&!c.test(i.className);)i=i.parentNode;i&&(r=(i.className.match(c)||[,"none"])[1].toLowerCase(),t=C.languages[r]),e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r,e.parentNode&&(i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r));var l={element:e,language:r,grammar:t,code:e.textContent},o=function(e){l.highlightedCode=e,C.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,C.hooks.run("after-highlight",l),C.hooks.run("complete",l),n&&n.call(l.element)};if(C.hooks.run("before-sanity-check",l),l.code)if(C.hooks.run("before-highlight",l),l.grammar)if(a&&g.Worker){var s=new Worker(C.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(C.highlight(l.code,l.grammar,l.language));else o(C.util.encode(l.code));else C.hooks.run("complete",l)},highlight:function(e,a,n){var t={code:e,grammar:a,language:n};return C.hooks.run("before-tokenize",t),t.tokens=C.tokenize(t.code,t.grammar),C.hooks.run("after-tokenize",t),M.stringify(C.util.encode(t.tokens),t.language)},matchGrammar:function(e,a,n,t,r,i,l){for(var o in n)if(n.hasOwnProperty(o)&&n[o]){if(o==l)return;var s=n[o];s="Array"===C.util.type(s)?s:[s];for(var g=0;g<s.length;++g){var c=s[g],u=c.inside,h=!!c.lookbehind,f=!!c.greedy,d=0,m=c.alias;if(f&&!c.pattern.global){var p=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=t,v=r;y<a.length;v+=a[y].length,++y){var k=a[y];if(a.length>e.length)return;if(!(k instanceof M)){if(f&&y!=a.length-1){if(c.lastIndex=v,!(x=c.exec(e)))break;for(var b=x.index+(h?x[1].length:0),w=x.index+x[0].length,A=y,P=v,O=a.length;A<O&&(P<w||!a[A].type&&!a[A-1].greedy);++A)(P+=a[A].length)<=b&&(++y,v=P);if(a[y]instanceof M)continue;N=A-y,k=e.slice(v,P),x.index-=v}else{c.lastIndex=0;var x=c.exec(k),N=1}if(x){h&&(d=x[1]?x[1].length:0);w=(b=x.index+d)+(x=x[0].slice(d)).length;var j=k.slice(0,b),S=k.slice(w),E=[y,N];j&&(++y,v+=j.length,E.push(j));var _=new M(o,u?C.tokenize(x,u):x,m,x,f);if(E.push(_),S&&E.push(S),Array.prototype.splice.apply(a,E),1!=N&&C.matchGrammar(e,a,n,y,v,!0,o),i)break}else if(i)break}}}}},tokenize:function(e,a){var n=[e],t=a.rest;if(t){for(var r in t)a[r]=t[r];delete a.rest}return C.matchGrammar(e,n,a,0,0,!1),n},hooks:{all:{},add:function(e,a){var n=C.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=C.hooks.all[e];if(n&&n.length)for(var t,r=0;t=n[r++];)t(a)}},Token:M};function M(e,a,n,t,r){this.type=e,this.content=a,this.alias=n,this.length=0|(t||"").length,this.greedy=!!r}if(g.Prism=C,M.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return M.stringify(e,a)}).join("");var n={type:e.type,content:M.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var t=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,t)}C.hooks.run("wrap",n);var r=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(r?" "+r:"")+">"+n.content+"</"+n.tag+">"},!g.document)return g.addEventListener&&(C.disableWorkerMessageHandler||g.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,t=a.code,r=a.immediateClose;g.postMessage(C.highlight(t,C.languages[n],n)),r&&g.close()},!1)),C;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(C.filename=e.src,C.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(C.highlightAll):window.setTimeout(C.highlightAll,16):document.addEventListener("DOMContentLoaded",C.highlightAll))),C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
!function(s){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var e=s.languages.markup;e&&(e.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},e.tag))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
Prism.languages.css.selector={pattern:Prism.languages.css.selector,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-:.\w]+/,id:/#[-:.\w]+/,attribute:{pattern:/\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},attribute:{pattern:/^(\s*)[-\w\xA0-\uFFFF]+/,lookbehind:!0},value:[/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,{pattern:/(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],punctuation:/[()]/}},Prism.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,lookbehind:!0}}),Prism.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:/#[\da-f]{3,8}/i,entity:/\\[\da-f]{1,8}/i,unit:{pattern:/(\d)(?:%|[a-z]+)/,lookbehind:!0},number:/-?[\d.]+/});

