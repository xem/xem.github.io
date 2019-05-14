$ = function(i){
  return document.querySelector(i);
}

menus = {
  
  articles: {
    
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
    obfuscatweet: "Obfusc-a-tweet reloaded",
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
  },
  
  codegolf: {
    
    intro: "Intro",
    minisoundeditor: "Mini Sound Editor",

    period1k19: "PERIOD1k (JS1k16/17/19)",
    manonwire: "Man on Wire (JS13k19)",
    envelope: "envelope (JS13k19)",
    geoquiz2: "GEOQUIZ 2 (JS13k18)",
    
    js13kpath: "JS13k-path",
    minifacedetection: "Mini Face Detection",
    minimusic: "Mini Music",
    
    mus1k: "MUS1K (JS1k18)",
    epiccycles: "Epic Cycles (JS1k18)",
    shaderandom: "Shaderandom (JS1k18)",
    minifourier: "Mini Fourier (JS1k18)",
    sn1ke: "SN1KE (JS1k18)",
    
    minivideorecording: "Mini Video Recording",
    miniworld: "Mini World",
    minidwitter: "Mini Dwitter",
    miniminifier: "Mini Minifiers",
    minicodeeditor: "Mini Code Editor",
    miniasciiserpinski: "miniAsciiSerpinski",
    miniplot: "miniPlot",
    minigameoflife: "MiniGameOfLife",
    minipeterdejongattractor: "MiniPeterDeJongAttractor",
    minicliffordattractor: "MiniCliffordAttractor",
    tetristheme: "TetrisTheme",
    audioviz: "MiniAudioViz",
    atree: "Atree",
    attractorandom: "Random attractors",
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
    miniarecibo: "Mini Arecibo",
    
    lossst: "LOSSST (JS13k17)",
    
    minimandelbrot: "MiniMandelbrot",
    
    "1kindofmagic": "1Kind of magic (JS1k17)",
    canihaz1karrot: "Can I haz 1Karrot? (JS1k17)",
    
    moon1px: "If the moon was 1px (JS1k17)",
    
    minishadertoy: "MiniShadertoy (JS1k17)",
    
    miniproxy: "miniProxy",
    minisplitscreen: "miniSplitScreen",
    minirgbdoodle: "miniRGBdoodle",
    miniconwayserpinski: "miniConwaySerpinski",
    minispeechrecognitionandsynthesis: "miniSpeechRecoAndSynth",
    minicodeshaper: "miniCodeShaper",
    miniwebrtc: "miniWebRTC",
    minicam: "miniCam",
    
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
    minishadertoylite: "MiniShadertoy Lite",
    miniregextester: "MiniRegexTester",
    jsotopes: "JSOTOPES (JS1k16)",
    
    un1kode: "UN1KODE (JS1k16)",
    
    minibeautifier: "MiniBeautifier (JS1k16)",
    obfuscatweetreloaded: "Obfusc-a-tweet reloaded",
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
    obfuscatweet: "obfusc-a-tweet",
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
    binaryoperations: "Binary operations",
  },
  
  
  projects: {
    
    intro: "Intro",
    
    lol: "LOL",
    inktober18: "inktober 2018",

    twitterdigest: "Twitter-digest",

    gameaudiobundle: "Game Audio Bundle MP3",

    nes: "NES",
    losssst: "LOSSST",
    responsivetouchgameframework: "miniGameFramework",
    shapecatcher: "MiniShapeCatcher",
    book: "MiniBook",
    leveleditor3d: "3D level editor",
    minix86: "minix86",
    
    ama: "Ask me anything",
    
    math: "Maths cheat sheet",
    points: "3D points",
    raycast: "Raycasting experiments",
    css3dcubes: "CSS3D cubes",
    css3deditor: "CSS3D editor",
    css3dprototypes: "CSS3D prototypes",
    minipiano: "miniPiano",
    js13kgraphics: "JS13k graphics editor",
    js13kleveleditor: "JS13k level editor",
    cellularandom: "Random cellular automata",
    codegolfide: "Codegolf IDE",
    "3ddoodle": "3Ddoodle",
    zpng: "Zpng: Pure JS JsExe",
    eqcss: "Element Queries CSS",

    talks: "talks",
    "3DShomebrew": "3DShomebrew",

    cssslider: "CSSslider",

    windowall: "Window.all",
    escape: "EscApe, Unicode converter",

    fruitcarving: "Fruit carving",
    wiiufps: "WiiU FPS",

    charsets: "Charsets experiments",
    stfrtime: "Date formatter",
    ellipsis: "Simple multiline ellipsis",
    braille_art: "Braille Art generator",
    arrayduce: "Arrayduce",
    drawcircles: "DrawCircles",
    events: "JS Events monitoring",
    swipe: "Swipe, touchable slider",
    basis: "Basis, HTML5 boilerplate",
    text_alignment: "Text alignments with CSS",
    heylisten: "HeyListen!, MVC framework",
    lightml: "LigHTML, page compressor",
    video: "HTML5 video experiments",
    lazy: "Lazy, JS library",
    gba: "GBA emulator",
    
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
  location.pathname.replace(/.*xem.github.io\/(.*?)\/([^\/]*?)(\.html)?$/, (a,b,c) => { if(b) section = b; if(c) page = c; });
  
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
    <a href=//maximeeuziere.itch.io/" target=_blank>Itch</a> - 
    <a href="mailto:maxime.euziere(at)gmail.com">Mail</a> - 
    <a href="/cv" target=_blank>CV</a>
    <div class=backtotop onclick="document.body.scrollTop = document.documentElement.scrollTop = 0">🡅</div>
  `);
  
  var section = "home";
  var page = "";
  location.pathname.replace(/.*xem.github.io\/(.*?)\/([^\/]*?)(\.html)?$/, (a,b,c) => { if(b) section = b; if(c) page = c; });
  
  if(section != "home" && page != "" && page != "intro"){    
    s = document.createElement("SCRIPT");
    s.src = "https://utteranc.es/client.js";
    s.setAttribute("repo","xem/xem.github.io");
    s.setAttribute("issue-term","pathname");
    s.setAttribute("theme","github-light");
    s.setAttribute("crossorigin","anonymous");
    s.setAttribute("async","");
    if($("main .section:last-child"))
      $("main .section:last-child").appendChild(s);
  }
}


menu = function(){
  
  var section = "home";
  var page = "";
  location.pathname.replace(/.*\/(.*?)\/([^\/]*?)(\.html)?$/, (a,b,c) => { if(b) section = b; if(c) page = c; });
  
  if(menus[section] && !page && (section == "articles" || section == "codegolf")){
    for(var i in menus[section]){
      location = i + ".html";
      break;
    }
  }
  
  if(menus[section]){
    
    var html = `<ul>`;
    var counter = menus[section].length;
    for(i in menus[section]){
      if(section != "articles" && section != "codegolf")
        html += `<li><a ${page == i ? 'class="active"' : ""}href='#${i}'>${menus[section][i]}</a>`;
      else
        html += `<li><a ${page == i ? 'class="active"' : ""}href='${i}.html'>${menus[section][i]}</a>`;
    }
    
    $("#menu").innerHTML = html;
    $("#menu").className = section;
  }
    
}

onscroll = function(){
  $(".logo h2").style.transform = "perspective(130px)rotateX(" + (-60 + scrollY/10) + "deg)";
}