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

    period1k19: "PERIOD1k 2019 (JS1k19)",
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
    asciiserpinski: "miniAsciiSerpinski",
    plot: "miniPlot",
    minigameoflife2: "miniGameOfLife 2",
    minigameoflife: "MiniGameOfLife",
    minipeterdejongattractor: "MiniPeterDeJongAttractor",
    minicliffordattractor: "MiniCliffordAttractor",
    tetristheme: "TetrisTheme",
    audioviz: "MiniAudioViz",
    atree: "Atree",
    attractorandom: "Random attractors",
    sheet: "Sheet",
    burrowswheeler: "MiniBurrowsWheeler",
    tetris: "MiniTetris",
    miniunicode: "MiniUnicode",
    serpinskitriangle: "MiniSerpinskiTriangle",
    pixelfont: "MiniPixelFont",
    dragoncurve: "MiniDragonCurve",
    minikeycode: "MiniKeyCode",
    miniuri: "miniURI converter",
    bookmarklet: "Mini Bookmarklet",
    arecibo: "Mini Arecibo",
    
    lossst: "LOSSST (JS13k17)",
    
    minimandelbrot: "MiniMandelbrot",
    
    "1kindofmagic": "1Kind of magic (JS1k17)",
    canihaz1karrot: "Can I haz 1Karrot? (JS1k17)",
    
    moon1px: "If the moon was 1px (JS1k17)",
    
    minishadertoy: "PERIOD1K Reloaded (JS1k17)",
    minishadertoy: "MiniShadertoy (JS1k17)",
    
    miniproxy: "miniProxy",
    minisplitscreen: "miniSplitScreen",
    minirgbdoodle: "miniRGBdoodle",
    miniconwayserpinski: "miniConwaySerpinski",
    minispeechrecognitionsynthesis: "miniSpeechRecoAndSynth",
    minispeechrecognition: "miniSpeechRecognition",
    minispeechsynthesis: "miniSpeechSynthesis",
    minicodeshaper: "miniCodeShaper",
    miniwebrtc: "miniWebRTC",
    minicam: "miniCam",
    
    "26gamesin1": "26 games in 1 (JS13k16)",
    
    scpm: "SuperChronoPortalMaker (JS13k16)",
    minipi: "MiniPi",
    minisnake: "MiniSnake",
    minicosmiccall: "MiniCosmicCall",
    miniasciiart: "MiniAsciiArt",
    minidoodle: "MiniDoodle",
    miniburningship: "MiniBurningShip",
    minilangtonloops: "MiniLangtonLoops",
    minilangtonant: "MiniLangtonAnt",
    minishadertoylite: "MiniShadertoy Lite",
    minishadertoy: "MiniShadertoy",
    minibookmarklets: "MiniBookmarklets",
    miniregextester: "MiniRegexTester",
    period1k: "PERIOD1K (JS1k16)",
    jsotopes: "JSOTOPES (JS1k16)",
    
    un1kode: "UN1KODE (JS1k16)",
    
    minibeautifier: "MiniBeautifier (JS1k16)",
    obfuscatweet_url: "Obfusc-a-tweet reloaded",
    twitter_counter: "Twitter character counter",
    geoquiz: "GeoQuiz (JS13k15)",
    minigameofbraille: "MiniGameOfBraille",
    
    hypercube: "hypeRcube (JS1k15)",
    
    minijsperf: "MiniJSPerf",
    minishadowart: "MiniShadowArt",
    alchemixer: "Alchemixer (JS13k14)",
    minicountdown: "MiniCountdown",
    in_n_out: "In-n-out",
    minipoptiles: "MiniPopTiles",
    minisimon: "MiniSimon",
    golfer: "ASCII-art golfer",
    cssprite: "CSSprite",
    postit: "Post-it",
    prettycode: "Pretty code",
    jstweet: "obfusc-a-tweet",
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
    
    twitterdigest: "Twitter-digest",
    nes: "NES",
    losssst: "LOSSST",
    envelope: "Envelope",
    responsivetouchgameframework: "miniGameFramework",
    js13k17: "LOSSST (JS13k17)",
    shapecatcher: "MiniShapeCatcher",
    book: "MiniBook",
    leveleditor3d: "3D level editor",
    minix86: "minix86",
    math: "Maths cheat sheet",
    points: "3D points",
    raycast: "Raycasting experiments",
    css3dcubes: "CSS3D cubes",
    css3deditor: "CSS3D editor",
    css3dprototypes: "CSS3D prototypes",
    js13k16: "Super Chrono Portal Maker (JS13k16)",
    minipiano: "miniPiano",
    js13kgraphics: "JS13k graphics editor",
    js13kleveleditor: "JS13k level editor",
    cellularandom: "Random cellular automata",
    codegolfide: "Codegolf IDE",
    threeddoodle: "3Ddoodle",
    zpng: "Zpng: Pure JS JsExe",
    js13k15: "Geoquiz (JS13k15)",
    eqcss: "Element Queries CSS",
    cssslider: "CSSslider",
    windowall: "Window.all",
    escape: "EscApe, Unicode converter",
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
    gameaudiobundle: "Game Audio Bundle MP3",
    ama: "Ask me anything",
    lol: "LOL",
    "3DShomebrew": "3DShomebrew",
    wiiufps: "WiiU FPS",
    fruitcarving: "Fruit carving",
    karoshids: "Karoshi DS",
    easy: "Easy classic flash game",
    scan: "Polytech-o-scan",
    lipdub: "Lipdub",
  },
  
  techwatch: {
    
    "techwatch2018": "Tech watch 2018", 
    "techwatch2017": "Tech watch 2017", 
    "techwatch2016": "Tech watch 2016", 
    "techwatch2015": "Tech watch 2015", 
    "techwatch2014": "Tech watch 2014", 
    "techwatch2013": "Tech watch 2013", 
    "techwatch2012": "Tech watch 2012 (FR)", 
    "techwatch2011": "Tech watch 2011 (FR)", 
    
  }
}

header = function(){
  var section = "home";
  var page = "";
  location.pathname.replace(/.*xem.github.io\/(.*?)\/([^\/]*?)(\.html)?$/, (a,b,c) => { console.log(b,c); if(b) section = b; if(c) page = c; });
  console.log(section, page)
  
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
  $("footer").innerHTML = 
  `
    © ${new Date().getFullYear()} Maxime EUZIERE
    <br>
    <a href="//github.com/xem" target=_blank>Github</a> - 
    <a href="//twitter.com/maximeeuziere" target=_blank>Twitter</a> - 
    <a href="mailto:maxime.euziere(at)gmail.com">Mail</a> - 
    <a href="/cv" target=_blank>CV</a>
    <div class=backtotop onclick="document.body.scrollTop = document.documentElement.scrollTop = 0">🡅</div>
  `;
}


menu = function(){
  
  var section = "home";
  var page = "";
  location.pathname.replace(/.*\/(.*?)\/([^\/]*?)(\.html)?$/, (a,b,c) => { if(b) section = b; if(c) page = c; });
  
  if(menus[section] && !page && section == "articles"){
    for(var i in menus[section]){
      location = i + ".html";
      break;
    }
  }
  
  if(menus[section]){
    
    var html = `<ul>`;
    var counter = menus[section].length;
    for(i in menus[section]){
      if(section != "articles")
        html += `<li><a ${page == i ? 'class="active"' : ""}href='#${i}'>${menus[section][i]}</a>`;
      else
        html += `<li><a ${page == i ? 'class="active"' : ""}href='${i}.html'>${menus[section][i]}</a>`;
    }
    
    $("#menu").innerHTML = html;
  }
    
}

onscroll = function(){
  $(".logo h2").style.transform = "perspective(130px)rotateX(" + (-60 + scrollY/10) + "deg)";
}