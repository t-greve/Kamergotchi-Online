 //__________Kamergotchi is oorspronkelijk bedacht door Arjen Lubach van het VPRO-programma Zondag met Lubach.__________\\
 //__________https://www.vpro.nl/zondag-met-lubach.html__________\\
 //__________Webpagina en programma door Thomas Greve, met delen van het internet__________\\

 //----------Functie voor het laden van het spel----------\\

function opstartfunc() {
  lstest = lstestfunc()
  instellingen = getCookie("kgo_instellingen")
  if (instellingen ) {
   var versiedomlezen = instellingen.substring(0,6)
   if (versiedomlezen == "KGO213") {
    document.getElementById("instellingencookie-div").innerHTML=instellingen
    instellingen = instellingen.split(">")
    instellingensaveversie = instellingen[0]
    copyrightgezien = instellingen[1]
    spelmodule = instellingen [2]
    geluid = instellingen[3]
    donkeremodus = instellingen[4]
    gekleurdetekst = instellingen[5]
    shell = instellingen[6]
    protocol = instellingen[7]
   }
   else if (versiedomlezen == "KG212>") {
    document.getElementById("instellingencookie-div").innerHTML=instellingen
    instellingen = instellingen.split(">")
    instellingensaveversie = "KGO213"
    copyrightgezien = instellingen[1]
    spelmodule = instellingen [3]
    geluid = instellingen[4]
    donkeremodus = instellingen[5]
    gekleurdetekst = instellingen[6]
    shell = parseInt(instellingen[7]) * 3
    protocol = instellingen[8]
   }
   else if (versiedomlezen == "KG210>") {
    document.getElementById("instellingencookie-div").innerHTML=instellingen
    instellingen = instellingen.split(">")
    instellingensaveversie = "KGO213"
    copyrightgezien = instellingen[1]
    spelmodule = instellingen [3]
    geluid = instellingen[4]
    donkeremodus = instellingen[5]
    gekleurdetekst = instellingen[6]
    shell = parseInt(instellingen[7]) * 3
    protocol = "http"
   }
   else if (versiedomlezen == "KG209>") {
    document.getElementById("instellingencookie-div").innerHTML=instellingen
    instellingen = instellingen.split(">")
    instellingensaveversie = instellingen[0]
    copyrightgezien = instellingen[1]
    spelmodule = instellingen [3]
    geluid = instellingen[4]
    donkeremodus = instellingen[5]
    gekleurdetekst = instellingen[6]
    instellingensaveversie = "KGO213"
    if ((/Opera/i.test(navigator.userAgent) && /Nintendo/i.test(navigator.userAgent) && /DS/i.test(navigator.userAgent)) || (/MSIE 6.0; Nitro/i.test(navigator.userAgent) && /Opera 8./i.test(navigator.userAgent))) {
     shell = 6
    }
    else {
     shell = 0
    }
    protocol = "http"
    instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
    setCookie("kgo_instellingen", instellingen, 365)
    document.getElementById("instellingencookie-div").innerHTML=instellingen
   }
   else {
    instellingensaveversie = "KGO213"
    copyrightgezien = "leeg"
    spelmodule = "leeg"
    geluid = "leeg"
    donkeremodus = "leeg"
    gekleurdetekst = "leeg"
    if ((/Opera/i.test(navigator.userAgent) && /Nintendo/i.test(navigator.userAgent) && /DS/i.test(navigator.userAgent)) || (/MSIE 6.0; Nitro/i.test(navigator.userAgent) && /Opera 8./i.test(navigator.userAgent))) {
     shell = 6
    }
    else {
     shell = 0
    }
    protocol = "http"
    instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
    setCookie("kgo_instellingen", instellingen, 365)
    document.getElementById("instellingencookie-div").innerHTML=instellingen
   }
  }
  else {
   instellingensaveversie = "KGO213"
   copyrightgezien = "leeg"
   spelmodule = "leeg"
   geluid = "leeg"
   donkeremodus = "leeg"
   gekleurdetekst = "leeg"
   if ((/Opera/i.test(navigator.userAgent) && /Nintendo/i.test(navigator.userAgent) && /DS/i.test(navigator.userAgent)) || (/MSIE 6.0; Nitro/i.test(navigator.userAgent) && /Opera 8./i.test(navigator.userAgent))) {
    shell = 6
   }
   else {
    shell = 0
   }
   protocol = "http"
   instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
   setCookie("kgo_instellingen", instellingen, 365)
   document.getElementById("instellingencookie-div").innerHTML=instellingen
  }
  var browserinfoarray = browserbepaalfunc()
  browservar = browserinfoarray[0]
  knopsimpel = browserinfoarray [1]

  if (gekleurdetekst == "leeg") {
  // Opera 7.0 en 7.1 geven de gekleurde tekst alleen op de eerste regel weer, de rest is zwart.
   if (/Opera 7.0/i.test(navigator.userAgent) || /Opera 7.1/i.test(navigator.userAgent) || browservar == "mono") {
    gekleurdetekst = "uit"
   }
   else {
    gekleurdetekst = "aan"
   }
  }

 //----------Bepalen of de donkere modus aan of uit staat----------\\

  if (donkeremodus == "leeg") {
   if (browservar != "mono" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    donkeremodus = "aan"
   }
   else {
    donkeremodus = "uit"
   }
  }

  if (donkeraan == "uit") {
   donkeremodus = "uit"
  }

  if (donkeraan != "uit" && donkerstandaard == "aan") {
   donkeremodus = "aan"
  }

  var donker2var = getQueryString ("donker")
  if (donker2var && browservar == "vector" || donker2var && browservar == "transparent") {
   donkeremodus = donker2var
  }
 //----------Module en thema laden----------\\

  spelmodule = modulebepaalfunc(spelmodule)
  instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
  setCookie("kgo_instellingen", instellingen, 365)
  document.getElementById("instellingencookie-div").innerHTML=instellingen
  var spelmodulemap=moduletestfunc(spelmodule)
  document.getElementById("Module").src= "../Modules/" + spelmodulemap + "/Module.html"
  document.getElementById("Module").style.width = "1px"
}

 //----------Het tweede deel van de opstartfunctie wordt gestart als de module is geladen----------\\

function opstart2func() {
  var speldatatotaal = getCookie("kgo_speldata_" + spelmodule)
  if (speldatatotaal) {
   var versiedomlezen = speldatatotaal.substring(0,6)
   speldatatotaal = speldatatotaal.split("|")
   speldatageneriek = speldatatotaal[0].split(">")
   speldataversiespecifiek = speldatatotaal[1].split(">")
   speldatamodulespecifiek = speldatatotaal[2]
   if (versiedomlezen == "KGS100") {
    saveversie = speldatageneriek[0]
    honger = parseInt(speldatageneriek[1], 10)
    hongerkeren = parseInt(speldatageneriek[2], 10)
    hongertijd = parseInt(speldatageneriek[3], 10)
    hongertijdslot = parseInt(speldatageneriek[4], 10)
    aandacht = parseInt(speldatageneriek[5], 10)
    aandachtkeren = parseInt(speldatageneriek[6], 10)
    aandachttijd = parseInt(speldatageneriek[7], 10)
    aandachttijdslot = parseInt(speldatageneriek[8], 10)
    kennis = parseInt(speldatageneriek[9], 10)
    kenniskeren = parseInt(speldatageneriek[10], 10)
    kennistijd = parseInt(speldatageneriek[11], 10)
    kennistijdslot = parseInt(speldatageneriek[12], 10)
    keuzekeren = parseInt(speldatageneriek[13], 10)
    ziekte = parseInt(speldatageneriek[14], 10)
    lijsttrekker = speldatageneriek[15]
    spelspecifiekesaveversie = speldataversiespecifiek[0]
    if (spelspecifiekesaveversie == "KGO213") {
     begintijd = parseInt(speldataversiespecifiek[1], 10)
     tijd = parseInt(speldataversiespecifiek[2], 10)
    }
    else {
     spelspecifiekesaveversie = "KGO213"
     tijd = Math.floor(new Date().getTime()/1000)
     begintijd = tijd
    }
   }
   else if (versiedomlezen == "KG212>") {
    speldatatotaal = speldatatotaal.join("|")
    speldatatotaal = speldatatotaal.split("<|>")
    speldatageneriek = speldatatotaal[0]
    speldatamodulespecifiek = speldatatotaal[1]
    speldatageneriek = speldatageneriek.split(">")
    saveversie = "KGS100"
    spelspecifiekesaveversie = "KGO213"
    honger = parseInt(speldatageneriek[1], 10)
    hongerkeren = parseInt(speldatageneriek[2], 10)
    hongertijd = parseInt(speldatageneriek[3], 10)
    hongertijdslot = parseInt(speldatageneriek[4], 10)
    aandacht = parseInt(speldatageneriek[5], 10)
    aandachtkeren = parseInt(speldatageneriek[6], 10)
    aandachttijd = parseInt(speldatageneriek[7], 10)
    aandachttijdslot = parseInt(speldatageneriek[8], 10)
    kennis = parseInt(speldatageneriek[9], 10)
    kenniskeren = parseInt(speldatageneriek[10], 10)
    kennistijd = parseInt(speldatageneriek[11], 10)
    kennistijdslot = parseInt(speldatageneriek[12], 10)
    keuzekeren = parseInt(speldatageneriek[13], 10)
    ziekte = parseInt(speldatageneriek[14], 10)
    lijsttrekker = speldatageneriek[15]
    tijd = parseInt(speldatageneriek[17], 10)
    begintijd = parseInt(speldatageneriek[18], 10)
    begintijd = begintijd * 1000
   }
   else if (versiedomlezen == "KG210>") {
    speldatatotaal = speldatatotaal.join("|")
    speldatatotaal = speldatatotaal.split("<|>")
    speldatageneriek = speldatatotaal[0]
    speldatamodulespecifiek = speldatatotaal[1]
    speldatageneriek = speldatageneriek.split(">")
    saveversie = "KGS100"
    spelspecifiekesaveversie = "KGO213"
    honger = parseInt(speldatageneriek[1], 10)
    hongerkeren = parseInt(speldatageneriek[2], 10)
    hongertijd = parseInt(speldatageneriek[3], 10)
    aandacht = parseInt(speldatageneriek[4], 10)
    aandachtkeren = parseInt(speldatageneriek[5], 10)
    aandachttijd = parseInt(speldatageneriek[6], 10)
    kennis = parseInt(speldatageneriek[7], 10)
    kenniskeren = parseInt(speldatageneriek[8], 10)
    kennistijd = parseInt(speldatageneriek[9], 10)
    kennistijdslot = parseInt(speldatageneriek[10], 10)
    keuzekeren = parseInt(speldatageneriek[11], 10)
    lijsttrekker = speldatageneriek[12]
    tijd = parseInt(speldatageneriek[14], 10)
    begintijd = parseInt(speldatageneriek[15], 10)
    begintijd = begintijd * 1000
    hongertijdslot = 0
    aandachttijdslot = 0
    ziekte = 0
   }
   else if (versiedomlezen == "KG209>") {
    speldatageneriek = speldatatotaal
    saveversie = "KGS100"
    spelspecifiekesaveversie = "KGO213"
    honger = parseInt(speldatageneriek[1], 10)
    hongerkeren = parseInt(speldatageneriek[2], 10)
    hongertijd = parseInt(speldatageneriek[3], 10)
    aandacht = parseInt(speldatageneriek[4], 10)
    aandachtkeren = parseInt(speldatageneriek[5], 10)
    aandachttijd = parseInt(speldatageneriek[6], 10)
    kennis = parseInt(speldatageneriek[7], 10)
    kenniskeren = parseInt(speldatageneriek[8], 10)
    kennistijd = parseInt(speldatageneriek[9], 10)
    kennistijdslot = parseInt(speldatageneriek[10], 10)
    keuzekeren = parseInt(speldatageneriek[11], 10)
    lijsttrekker = speldatageneriek[12]
    tijd = parseInt(speldatageneriek[14], 10)
    begintijd = parseInt(speldatageneriek[15], 10)
    begintijd = begintijd * 1000
    speldatamodulespecifiek = "leeg"
    hongertijdslot = 0
    aandachttijdslot = 0
    ziekte = 0
   }
   else {
    saveversie = "KGS100"
    spelspecifiekesaveversie = "KGO213"
    honger = 0
    hongerkeren = 0
    hongertijd = 0
    hongertijdslot = 0
    aandacht = 0
    aandachtkeren = 0
    aandachttijd = 0
    aandachttijdslot = 0
    kennis = 0
    kenniskeren = 0
    kennistijd = 0
    kennistijdslot = 0
    keuzekeren = 0
    ziekte = 0
    lijsttrekker = "leeg"
    tijd = 0
    begintijd = 0
    speldatamodulespecifiek = "leeg"
    speldatatotaal = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
    setCookie("kgo_speldata_" + spelmodule, speldatatotaal, 365)
    document.getElementById("speldatacookie-div").innerHTML=speldatatotaal
   }
  }
  else {
   saveversie = "KGS100"
   spelspecifiekesaveversie = "KGO213"
   honger = 0
   hongerkeren = 0
   hongertijd = 0
   hongertijdslot = 0
   aandacht = 0
   aandachtkeren = 0
   aandachttijd = 0
   aandachttijdslot = 0
   kennis = 0
   kenniskeren = 0
   kennistijd = 0
   kennistijdslot = 0
   keuzekeren = 0
   ziekte = 0
   lijsttrekker = "leeg"
   tijd = 0
   begintijd = 0
   speldatamodulespecifiek = "leeg"
   speldatatotaal = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
   setCookie("kgo_speldata_" + spelmodule, speldatatotaal, 365)
   document.getElementById("speldatacookie-div").innerHTML=speldatatotaal
  }

  var spelmodulefunctie = spelmodule + "_opstarten"
  var spelmoduledata = window.frames["Module"][spelmodulefunctie](browservar, donkeremodus, donkeraan, spelmodule)
  lijsttrekkerinstellingen = spelmoduledata[0]
  moduletaal = spelmoduledata[1]
  achtergrondkleur = spelmoduledata[2]

  if (eenapril == "aan") {
   if (browservar == "mono") {
    document.getElementById("balk1").innerHTML = document.getElementById("balk1").innerHTML +
    "<div id='Henktrol1div' style='margin:0;padding:0;border:0;display:none'><a href='http://www.youtube.com/watch?v=fKJlfgbUmCw' target='_blank' style='text-decoration:none'><img id='Henktrol1' src='../Kern/Personages/Henktrol/Henktrol-dansend-mono.gif' style='height:93px;margin:0;padding:0;border:0;margin-left:auto;margin-right:auto;vertical-align:bottom;display:block;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor'></a></div>" +
    "<div id='Henktrol2div' style='margin:0;padding:0;border:0;display:block'><a href='http://www.youtube.com/watch?v=fKJlfgbUmCw' target='_blank' style='text-decoration:none'><img id='Henktrol2' src='../Kern/Personages/Henktrol/Henktrol-staand-mono.gif' style='height:93px;margin:0;padding:0;border:0;margin-left:auto;margin-right:auto;vertical-align:bottom;display:block;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor'></div>"
   }
   else if (browservar == "vector") {
    document.getElementById("balk1").innerHTML = document.getElementById("balk1").innerHTML +
    "<div id='Henktrol1div' style='margin:0;padding:0;border:0;display:none'><a href='http://www.youtube.com/watch?v=fKJlfgbUmCw' target='_blank' style='text-decoration:none'><img id='Henktrol1' src='../Kern/Personages/Henktrol/Henktrol-dansend-kleur.gif' style='height:13vh;margin:0;padding:0;border:0;margin-left:auto;margin-right:auto;vertical-align:bottom;display:block;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor'></a></div>" +
    "<div id='Henktrol2div' style='margin:0;padding:0;border:0;display:block'><a href='http://www.youtube.com/watch?v=fKJlfgbUmCw' target='_blank' style='text-decoration:none'><img id='Henktrol2' src='../Kern/Personages/Henktrol/Henktrol-staand-kleur.gif' style='height:13vh;margin:0;padding:0;border:0;margin-left:auto;margin-right:auto;vertical-align:bottom;display:block;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor'></a></div>"
   }
   else {
    document.getElementById("balk1").innerHTML = document.getElementById("balk1").innerHTML +
    "<div id='Henktrol1div' style='margin:0;padding:0;border:0;display:none'><a href='http://www.youtube.com/watch?v=fKJlfgbUmCw' style='text-decoration:none'><img id='Henktrol1' src='../Kern/Personages/Henktrol/Henktrol-dansend-kleur.gif' style='height:93px;margin:0;padding:0;border:0;margin-left:auto;margin-right:auto;vertical-align:bottom;display:block;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor'></a></div>" +
    "<div id='Henktrol2div' style='margin:0;padding:0;border:0;display:block'><a href='http://www.youtube.com/watch?v=fKJlfgbUmCw' style='text-decoration:none'><img id='Henktrol2' src='../Kern/Personages/Henktrol/Henktrol-staand-kleur.gif' style='height:93px;margin:0;padding:0;border:0;margin-left:auto;margin-right:auto;vertical-align:bottom;display:block;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:pixelated;image-rendering:optimize-contrast;-ms-interpolation-mode:nearest-neighbor'></a></div>"
   }
  }
  
  var spelmodulefunctie = spelmodule + "_strings"
  var strings = window.frames["Module"][spelmodulefunctie]()
  themafunc()
  themafunc_logo()

 //----------Copyright weergeven----------\\
  if (copyrightgezien !== "gelezen") {
   var copyright = tekstfunc("copyright", "opstarten")
   alert (copyright)
   copyrightgezien = "gelezen"
  }

 //----------Cheats vanuit de querystring toepassen----------\\
  var honger2var = getQueryString ("honger")
  if (honger2var) {
   var honger2var = parseInt(honger2var, 10)
   var nantest=isNaN(honger2var)
   if (nantest  !== true) {
    honger = honger2var
   }
  }
  var aandacht2var = getQueryString ("aandacht")
  if (aandacht2var) {
   var aandacht2var = parseInt(aandacht2var, 10)
   var nantest=isNaN(aandacht2var)
   if (nantest  !== true) {
    aandacht = aandacht2var
   }
  }
  var kennis2var = getQueryString ("kennis")
  if (kennis2var) {
   kennis2var = parseInt(kennis2var, 10)
   var nantest=isNaN(kennis2var)
   if (nantest  !== true) {
    kennis = kennis2var
   }
  }

  var hongerkeer2var = getQueryString ("hongerkeer")
  if (hongerkeer2var) {
   var hongerkeer2var = parseInt(hongerkeer2var, 10)
   var nantest=isNaN(hongerkeer2var)
   if (nantest  !== true) {
    hongerkeren = hongerkeer2var
   }
  }
  var aandachtkeer2var = getQueryString ("aandachtkeer")
  if (aandachtkeer2var) {
   aandachtkeer2var = parseInt(aandachtkeer2var, 10)
   var nantest=isNaN(aandachtkeer2var)
   if (nantest  !== true) {
    aandachtkeren = aandachtkeer2var
   }
  }
  var kenniskeer2var = getQueryString ("kenniskeer")
  if (kenniskeer2var) {
   kenniskeer2var = parseInt(kenniskeer2var, 10)
   var nantest=isNaN(kenniskeer2var)
   if (nantest  !== true) {
    kenniskeren = kenniskeer2var
   }
  }
  var keuzekeer2var = getQueryString ("keuzekeer")
  if (keuzekeer2var) {
   keuzekeer2var = parseInt(keuzekeer2var, 10)
   var nantest=isNaN(keuzekeer2var)
   if (nantest  !== true) {
    keuzekeren = keuzekeer2var
   }
  }
  var cookiesweergeven = getQueryString ("cookiesweergeven")
  if (cookiesweergeven && cookiesweergeven == "aan") {
   document.getElementById("speldatageneriek").style.display = "block"
   document.getElementById("speldatacookie-div").style.display = "block"
  }

  grenzenvar = getQueryString ("grenzen")

  var tekstkleur2var = getQueryString ("tekstkleur")
  if (tekstkleur2var == "aan" || tekstkleur2var == "uit") {
   gekleurdetekst = tekstkleur2var
  }

  var lijsttrekkerspel2var = getQueryString ("lijsttrekkerspel")
  if (lijsttrekkerspel2var && lijsttrekker !== lijsttrekkerspel2var) {
   var personagetestfunctie = spelmodule + "_bestaat"
   if (typeof window.frames["Module"][personagetestfunctie] == "function") {
    var bestaatpersonage = window.frames["Module"][personagetestfunctie](lijsttrekkerspel2var)
   }
   else {
    var spelmodulefunctie = spelmodule + "_lijsttrekkers"
    var lijsttrekkers = window.frames["Module"][spelmodulefunctie]()
    var lijsttrekkersgrootte = lijsttrekkers.length
    var bestaatpersonage = false
    for (var i = 0; i < lijsttrekkersgrootte ; i++) {
     if (input == lijsttrekkers[i]) {
      bestaatpersonage = true
     }
    }
   }
   if (bestaatpersonage) {
    lijsttrekker = lijsttrekkerspel2var
   }
   if (lijsttrekkerspel2var && lijsttrekker !== lijsttrekker) {
    var personagetestfunctie = spelmodule + "_bestaat"
    if (typeof window.frames["Module"][personagetestfunctie] == "function") {
     var bestaatpersonage = window.frames["Module"][personagetestfunctie](lijsttrekkerspel2var)
    }
    else {
     var spelmodulefunctie = spelmodule + "_lijsttrekkers"
     var lijsttrekkers = window.frames["Module"][spelmodulefunctie]()
     var lijsttrekkersgrootte = lijsttrekkers.length
     var bestaatpersonage = false
     for(var i = 0; i < lijsttrekkersgrootte ; i++) {
      if (input == lijsttrekkers[i]) {
       bestaatpersonage = true
      }
     }
    }
   }
   if (!bestaatpersonage) {
    var spelmodulefunctie = spelmodule + "_nieuwelijsttrekker"
    if (typeof window.frames["Module"][spelmodulefunctie] == "function") {
     lijsttrekker = window.frames["Module"][spelmodulefunctie]()
    }
    else {
      var spelmodulefunctie = spelmodule + "_lijsttrekkers"
      var lijsttrekkers = window.frames["Module"][spelmodulefunctie]()
      var lengte = lijsttrekkers.length - 1
      var random = Math.floor(Math.random() * lengte)
      lijsttrekker = lijsttrekkers[random]
    }
   }
  }

 //----------Geluidsinstelling bepalen----------\\
  if (embedgeluid == "aan") {
   audiotest = true
  }
  else {
   audiotest = audiotestfunc()
   if (audiotest) {
    try {
     document.getElementById("bgmusic").volume = 0.07
     document.getElementById("eten1").volume = 0.07
     document.getElementById("eten2").volume = 0.07
     document.getElementById("aandacht1").volume = 0.07
     document.getElementById("aandacht2").volume = 0.07
     document.getElementById("kennis1").volume = 0.07
     document.getElementById("kennis2").volume = 0.07
     if (eenapril == "aan") {
      document.getElementById("Henktrol").volume = 0.04
     }
    }
    catch (error) {
    }
   }
  }
  if (geluid == "leeg") {
   if (audiotest) {
    //iPhoneOS 1, 2 en 3 gebruiken een fullscreen audiospeler die na sluiten weer opkomt bij de herhalende achtergrondmuziek en iedere keer als er een geluid wordt gespeeld. Geluid is hier niet gewenst.
    if (/iPhone OS 1_/i.test(navigator.userAgent) || /iPhone OS 2_/i.test(navigator.userAgent) || /iPhone OS 3_/i.test(navigator.userAgent)){
     geluid = "uit"
    }
    else {
     geluid = "aan"
    }
   }
   else {
    geluid = "uit"
   }
  }

  if (isNaN(honger) !== true && isNaN(aandacht) !== true && isNaN(kennis) !== true && isNaN(hongerkeren) !== true && isNaN(hongerkeren) !== true && isNaN(kenniskeren) !== true && isNaN(keuzekeren) !== true && lijsttrekker && lijsttrekker != "leeg") {
   tijdfunc()
  }

  tijdvar = getQueryString ("tijd")
  if (tijdvar) {
   tijdvar = parseInt(tijdvar, 10)
   var nantest=isNaN(tijdvar)
   if (nantest  !== true) {
    setInterval(naarbeneden,tijdvar)
   }
   else {
    setInterval(naarbeneden,interval)
   }
  }
  else {
   setInterval(naarbeneden,interval)
  }

  instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
  setCookie("kgo_instellingen", instellingen, 365)
  document.getElementById("instellingencookie-div").innerHTML=instellingen
  speldatatotaal = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
  setCookie("kgo_speldata_" + spelmodule, speldatatotaal, 365)
  document.getElementById("speldatacookie-div").innerHTML=speldatatotaal

  document.getElementById("balk2").style.height = "1px"
  document.getElementById("Module").style.width = "0px"
  document.getElementById("Module").style.height = "0px"
  document.getElementById("achtergrond").style.display = "block"

  // Internet Explorer voor Mac laadt niet alle afbeeldingen goed, de enige oplossing is deze als hij klaar is nog een keer laden.
  if (/MSIE 5./i.test(navigator.userAgent) && /Mac_PowerPC/i.test(navigator.userAgent)) {
   setTimeout('themafunc();themafunc_logo()', 1000)
  }
  if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
   try {
    document.getElementById("naar_spel").focus()
   }
   catch (error) {
    document.getElementById("naar_spel-knop2").focus()
   }
  }
 }

//----------Afbeeldingen en het thema toevoegen----------\\

function herstartfunc() {
 var spelmodulefunctie = spelmodule + "_opstarten"
 var spelmodulefunctie = spelmodule + "_opstarten"
 var spelmoduledata = window.frames["Module"][spelmodulefunctie](browservar, donkeremodus, donkeraan, spelmodule)
 lijsttrekkerinstellingen = spelmoduledata[0]
 moduletaal = spelmoduledata[1]
 achtergrondkleur = spelmoduledata[2]
 themafunc()
 themafunc_logo()
}

function themafunc_logo() {
 switch(browservar) {
 case "vector":
  if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
   var fallback='"../Kern/Logo/" + branding + "/Logo-donker.svg"'
   document.getElementById("logodiv").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-donker.svg' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "' style='width:100%;height:auto;max-width:100%;max-height:40vh;object-position:center'>"
   document.getElementById("Logo2div").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-donker.svg' onerror='this.onerror=null;this.src=" + fallback + "' style='width:100%;height:auto;max-width:100%;max-height:30vh;object-position:center'>"
   document.getElementById("zmldiv").innerHTML="<a href='http://www.vpro.nl/zondag-met-lubach.html' target='_blank'><img src='../Kern/Logo/Zondag_met_Lubach/Zondag_met_Lubach-donker.svg' alt='Zondag met Lubach' style='border:0;width:100%;height:auto;max-width:100%;max-height:7.5vh;object-position:center'></a>"
   document.getElementById("vprodiv").innerHTML="<a href='http://www.vpro.nl/' target='_blank'><img src='../Kern/Logo/VPRO/VPRO-donker.svg' alt='VPRO' style='border:0;width:100%;max-width:100%;height:auto;max-height:7.5vh;object-position:center'></a>"
  }
  else {
   var fallback='"../Kern/Logo/" + branding + "/Logo-licht.svg"'
   document.getElementById("logodiv").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-licht.svg' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "' style='width:100%;height:auto;max-width:100%;max-height:40vh;object-position:center'>"
   document.getElementById("Logo2div").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-licht.svg' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "' style='width:100%;height:auto;max-width:100%;max-height:30vh;object-position:center'>"
   document.getElementById("zmldiv").innerHTML="<a href='http://www.vpro.nl/zondag-met-lubach.html' target='_blank'><img src='../Kern/Logo/Zondag_met_Lubach/Zondag_met_Lubach-licht.svg' alt='Zondag met Lubach' style='border:0;width:100%;height:auto;max-width:100%;max-height:7.5vh;object-position:center'></a>"
   document.getElementById("vprodiv").innerHTML="<a href='http://www.vpro.nl/' target='_blank'><img src='../Kern/Logo/VPRO/VPRO-licht.svg' alt='VPRO' style='border:0;width:100%;max-width:100%;height:auto;max-height:7.5vh;object-position:center'></a>"
  }
break

 case "transparent":
  if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
   var fallback='"../Kern/Logo/" + branding + "/Logo-donker.png"'
   document.getElementById("logodiv").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-donker.png' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "' style='border:0;width:100%;max-width:143px;max-height:201px'>"
   document.getElementById("Logo2div").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-donker.png' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "' style='border:0;width:100%;max-width:143px;max-height:201px'>"
   document.getElementById("zmldiv").innerHTML="<a href='http://www.vpro.nl/zondag-met-lubach.html' target='_blank'><img src='../Kern/Logo/Zondag_met_Lubach/Zondag_met_Lubach-donker.png' alt='Zondag met Lubach' style='border:0;width:100%;max-width:80px;max-height:41px'></a>"
   document.getElementById("vprodiv").innerHTML="<a href='http://www.vpro.nl/' target='_blank'><img src='../Kern/Logo/VPRO/VPRO-donker.png' alt='VPRO' style='border:0;width:100%;max-width:80px;max-height:41px'></a>"
  }
  else {
   var fallback='"../Kern/Logo/" + branding + "/Logo-licht.png"'
   document.getElementById("logodiv").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-licht.png' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "' style='border:0;width:100%;max-width:143px;max-height:201px'>"
   document.getElementById("Logo2div").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-licht.png' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "' style='border:0;width:100%;max-width:143px;max-height:201px'>"
   document.getElementById("zmldiv").innerHTML="<a href='http://www.vpro.nl/zondag-met-lubach.html' target='_blank'><img src='../Kern/Logo/Zondag_met_Lubach/Zondag_met_Lubach-licht.png' alt='Zondag met Lubach' style='border:0;width:100%;max-width:80px;max-height:41px'></a>"
   document.getElementById("vprodiv").innerHTML="<a href='http://www.vpro.nl/' target='_blank'><img src='../Kern/Logo/VPRO/VPRO-licht.png' alt='VPRO' style='border:0;width:100%;max-width:80px;max-height:41px'></a>"
  }
 break

 case "solid":
  if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
   var fallback='"../Kern/Logo/" + branding + "/Logo-donker.gif"'
   document.getElementById("logodiv").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-donker.gif' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "'>"
   document.getElementById("Logo2div").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-donker.gif' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "'>"
   document.getElementById("zmldiv").innerHTML="<a href='http://www.vpro.nl/zondag-met-lubach.html' target='_blank'><img src='../Kern/Logo/Zondag_met_Lubach/Zondag_met_Lubach-donker.gif' alt='Zondag met Lubach' style='border:0;width:80px;height:41px'></a>"
   document.getElementById("vprodiv").innerHTML="<a href='http://www.vpro.nl/' target='_blank'><img src='../Kern/Logo/VPRO/VPRO-donker.gif' alt='VPRO' style='border:0;width:80px;height:41px'></a>"
  }
  else {
   var fallback='"../Kern/Logo/" + branding + "/Logo-licht.gif"'
   document.getElementById("logodiv").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-licht.gif' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "'>"
   document.getElementById("Logo2div").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-licht.gif' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "'>"
   document.getElementById("zmldiv").innerHTML="<a href='http://www.vpro.nl/zondag-met-lubach.html' target='_blank'><img src='../Kern/Logo/Zondag_met_Lubach/Zondag_met_Lubach-licht.gif' alt='Zondag met Lubach' style='border:0;width:80px;height:41px'></a>"
   document.getElementById("vprodiv").innerHTML="<a href='http://www.vpro.nl/' target='_blank'><img src='../Kern/Logo/VPRO/VPRO-licht.gif' alt='VPRO' style='border:0;width:80px;height:41px'></a>"
  }
 break

 case "mono":
  var fallback='"../Kern/Logo/" + branding + "/Logo-mono.gif"'
  document.getElementById("logodiv").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-mono.gif' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "'>"
  document.getElementById("Logo2div").innerHTML="<img src='../Modules/" + spelmodule + "/Logo/" + branding + "/Logo-mono.gif' alt='Kamergotchi Online' onerror='this.onerror=null;this.src=" + fallback + "'>"
  document.getElementById("zmldiv").innerHTML="<a href='http://www.vpro.nl/zondag-met-lubach.html' target='_blank'><img src='../Kern/Logo/Zondag_met_Lubach/Zondag_met_Lubach-mono.gif' alt='Zondag met Lubach' style='border:0;width:80px;height:41px'></a>"
  document.getElementById("vprodiv").innerHTML="<a href='http://www.vpro.nl/' target='_blank'><img src='../Kern/Logo/VPRO/VPRO-mono.gif' alt='VPRO' style='border:0;width:80px;height:41px'></a>"
 break
 }
}

//----------tijd in minuten bepalen en de behoeften verlagen als het verschil met de vorige keer te groot is----------\\

function tijdfunc() {
 var tijdoudvar = tijd
 tijd = Math.floor(new Date().getTime()/1000)
 if (!isNaN(tijd) && !isNaN(tijdoudvar)) {
  var tijdverschilvar = tijd - tijdoudvar

  if (tijdverschilvar !== tijd && !isNaN(tijdverschilvar)) {

   if (tijdverschilvar < 0) {
    tijdverschilvar = tijdverschilvar * -1
   }
   tijdverschilvar = tijdverschilvar / 60

   if (tijdverschilvar < hongernaarbenedentijd) {
    var tijdhonger = 0
   }
   else {
    var tijdhonger = 0.8049 * Math.pow(tijdverschilvar, 0.3141)
    tijdhonger = Math.floor(tijdhonger)
   }
   tijdhonger = Math.round(tijdhonger / 5 * hongertijd)
   for (i = 1; i <= tijdhonger; i++) {
   if (ziekte > 0) {
    var random = Math.floor(Math.random() * 15) + 1
   }
   else {
    var random = Math.floor(Math.random() * 20) + 1
   }
    if (random > 10) {
     honger = honger - hongeromlaaglaag
    }
    else if (random < 10) {
     honger = honger - hongeromlaagmiddel
    }
    else {
     honger = honger - hongeromlaaghoog
    }
    hongerkeren = hongerkeuzes
    hongertijd = hongernaarbenedentijd
    keuzekeren = keuzekeren + keuzes
    hongertijdslot = 0
   }

   if (tijdverschilvar < aandachtnaarbenedentijd) {
    var tijdaandacht = 0
   }
   else {
    var tijdaandacht = 0.8049 * Math.pow(tijdverschilvar, 0.3141)
    tijdaandacht = Math.floor(tijdaandacht)
   }
   tijdaandacht = Math.round(tijdaandacht / 5 * aandachttijd)
   for (i = 1; i <= tijdaandacht; i++) {
    if (ziekte > 0) {
     ziekte = ziekte + 1
     if (ziekte == ziektetijd + 1) {
      tekstfunc ("gezond", "spel")
      ziekte = 0
     }
    }
    else {
     var random = Math.floor(Math.random() * 100) + 1
     if (random <= ziektekans) {
      ziekte = 1
      tekstfunc("ziekte", "spel")
     }
    }
    if (ziekte > 0) {
     var random = Math.floor(Math.random() * 35) + 1
    }
    else {
     var random = Math.floor(Math.random() * 50) + 1
    }
    if (random > 30) {
     aandacht = aandacht - aandachtomlaaglaag
    }
    else if (random < 30) {
     aandacht = aandacht - aandachtomlaagmiddel
    }
    else {
     aandacht = aandacht - aandachtomlaaghoog
    }
    aandachtkeren = aandachtkeuzes
    aandachttijd = aandachtnaarbenedentijd
    keuzekeren = keuzekeren + keuzes
    aandachttijdslot = 0
   }

   if (tijdverschilvar < kennisnaarbenedentijd) {
    var tijdkennis = 0
   }
   else {
    var tijdkennis = 0.8049 * Math.pow(tijdverschilvar, 0.3141)
    tijdkennis = Math.floor(tijdkennis)
   }
   tijdkennis = Math.round(tijdkennis / 5 * kennistijd)
   for (i = 1; i <= tijdkennis; i++) {
    var random = Math.floor(Math.random() * 40) + 1
    if (ziekte < 1) {
     if (random < 40) {
      kennis = kennis - kennisomlaaglaag
     }
     else {
      kennis = kennis - kennisomlaaghoog
     }
    }
    kenniskeren = kenniskeuzes
    kennistijd = kennisnaarbenedentijd
    keuzekeren = keuzekeren + keuzes
    kennistijdslot = 0
   }
  }
 }
 if (grenzenvar !== "uit") {
  if (kennis < 1) {
   kennis = 0
  }
  var keuzes2 = keuzes * 3
  if (keuzekeren > keuzes2) {
   keuzekeren = keuzes2
  }
 }
 var nantest=isNaN(honger)
 if (nantest  !== true) {
  if (grenzenvar !== "uit") {
   if (honger < hongerlaag && honger >= 1){
    tekstfunc ("hongertekort", "spel")
   }

   if (aandacht < aandachtlaag && aandacht >= 1){
    tekstfunc ("aandachttekort", "spel")
   }

   if (kennis < kennislaag && kennis >= 1){
    tekstfunc ("kennistekort1", "spel")
   }

   if (honger < 1){
    var bericht = tekstfunc ("hongerdood", "spel")
    lijsttrekker = "leeg"
    alert (bericht)
    naarmenufunc()
   }

   else if (aandacht < 1){
    var bericht = tekstfunc ("aandachtdood", "spel")
    lijsttrekker = "leeg"
    alert (bericht)
    naarmenufunc()
   }

   else if (kennis < 1){
    var random = Math.floor(Math.random() * 100) + 1
    if (random > 75) {
     tekstfunc ("kennistekort3", "spel")
    }

    else if (random < 75) {
     tekstfunc ("kennistekort2", "spel")
    }

    else {
    var bericht = tekstfunc ("kennisdood", "spel")
    lijsttrekker = "leeg"
    alert (bericht)
     naarmenufunc()
    }
   }
  }
 }
}

//----------Naar iets toegaan met alleen verbergen en verschijnen----------\\

function naarmenufunc() {
 afspeelfunc ("bgmusic","uit")
 document.getElementById("achtergrond").style.display = "none"
 document.getElementById("overzichtsdiv").style.display = "none"
 document.getElementById("menu-lijsttrekker").style.display = "block"
 document.getElementById("menu-knoppen").style.display = "block"
 document.getElementById("game-lijsttrekker").style.display = "none"
 document.getElementById("game-knoppen").style.display = "none"
 document.getElementById("instellingen-lijsttrekker").style.display = "none"
 document.getElementById("instellingen-knoppen").style.display = "none"
 document.getElementById("modules-knoppen").style.display = "none"
 document.getElementById("shells-knoppen").style.display = "none"
 document.getElementById("achtergrond").style.display = "block"
 if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
  try {
   document.getElementById("naar_spel").focus()
  }
  catch (error) {
   document.getElementById("naar_spel-knop2").focus()
  }
 }
}

//------------------------\\

function naarnieuwspelfunc() {
 if (isNaN(honger) == true || isNaN(aandacht) == true || isNaN(kennis) == true || isNaN(hongerkeren) == true || isNaN(aandachtkeren) == true || isNaN(kenniskeren) == true || isNaN(keuzekeren) == true || !lijsttrekker || lijsttrekker == "leeg") {
  resetfunc("automatisch")
 }
 else {
  document.getElementById("achtergrond").style.display = "none"
  document.getElementById("bevestigingspel-div").style.display = "block"
  if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
   try {
    document.getElementById("neespel").focus()
   }
   catch (error) {
    document.getElementById("neespel-knop2").focus()
   }
  }
 }
}

//------------------------\\

function naarverwijderenfunc() {
 document.getElementById("achtergrond").style.display = "none"
 document.getElementById("bevestigingverwijderen-div").style.display = "block"
 if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
  try {
   document.getElementById("neeverwijderen").focus()
  }
  catch (error) {
   document.getElementById("neeverwijderen-knop2").focus()
  }
 }
}

//------------------------\\

function teruguitbevestigingfunc() {
 document.getElementById("bevestigingspel-div").style.display = "none"
 document.getElementById("bevestigingverwijderen-div").style.display = "none"
 document.getElementById("achtergrond").style.display = "block"
 if (document.getElementById("game-knoppen").style.display == "block") {
  if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
   try {
    document.getElementById("hongerknop").focus()
   }
   catch (error) {
    document.getElementById("hongerknop-knop2").focus()
   }
  }
 }
 else {
  if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
   try {
    document.getElementById("naar_spel").focus()
   }
   catch (error) {
    document.getElementById("naar_spel-knop2").focus()
   }
  }
 }
}

//----------Spelgegevens verwijderen----------\\

function deletefunc() {
 clearListCookies()
 document.getElementById("achtergrond").style.display = "none"
 document.getElementById("overzichtsdiv").style.display = "none"
 document.getElementById("bevestigingverwijderen-div").style.display = "none"
 document.getElementById("herstarten-div").style.display = "block"
 if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
  try {
   document.getElementById("herstarten").focus()
  }
  catch (error) {
   document.getElementById("herstarten-knop2").focus()
  }
 }
}

//----------Spel----------\\

function naarspelfunc() {
 if (isNaN(honger) == true  || isNaN(aandacht) == true || isNaN(kennis) == true || isNaN(hongerkeren) == true || isNaN(aandachtkeren) == true || isNaN(kenniskeren) == true || isNaN(keuzekeren) == true || !lijsttrekker || lijsttrekker == "leeg") {
  resetfunc("automatisch")
 }
 else {
  if (lijsttrekker) {
   var humeurvar = honger + aandacht + kennis
   var totaal = hongergrens + aandachtgrens + kennisgrens
   var totaal2 = totaal / 3
   var totaal3 = totaal2 / 4
   var totaal4 = totaal3 * 3
   humeurvar = humeurvar / totaal
   humeurvar = humeurvar * totaal2
   if (ziekte > 0) {
    var humeur2var = 4
   }
   else if (humeurvar < totaal3) {
    var humeur2var = 1
   }
   else if (humeurvar > totaal4) {
    var humeur2var = 3
   }
   else {
    var humeur2var = 2
   }
   var geluk = humeurvar/totaal2*100
   geluk = Math.round(geluk)
   if (ziekte > 0) {
    geluk = Math.floor(geluk / 2)
   }
   lijsttrekkerweergeven(humeur2var)

   tijd = Math.floor(new Date().getTime()/1000)
   if (isNaN(tijd)) {
    tijd = 0
   }
   if (isNaN(begintijd)) {
    begintijd = Math.floor(new Date().getTime()/1000)
    if (isNaN(begintijd)) {
     begintijd=0
    }
   }
   if (begintijd < tijd) {
   var geleefdvar = Math.floor((tijd - begintijd)/86400)
   }
   else {
    var geleefdvar = 0
   }
   document.getElementById("hongerspan").innerHTML=honger
   document.getElementById("aandachtspan").innerHTML=aandacht
   document.getElementById("kennisspan").innerHTML=kennis
   document.getElementById("gelukspan").innerHTML=geluk
   document.getElementById("geleefdspan").innerHTML=geleefdvar

   var dag = new Date().getDate()
   var maand = new Date().getMonth()
   var jaar = new Date().getFullYear()
   var datumfunctie = spelmodule + "_datum"
   window.frames["Module"][datumfunctie](dag, maand, jaar)
   speldatatotaal = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
   setCookie("kgo_speldata_" + spelmodule, speldatatotaal, 365)
   tekstfunc ("terug", "spel")
   document.getElementById("speldatacookie-div").innerHTML=speldatatotaal
   document.getElementById("achtergrond").style.display = "none"
   document.getElementById("menu-lijsttrekker").style.display = "none"
   document.getElementById("menu-knoppen").style.display = "none"
   document.getElementById("game-lijsttrekker").style.display = "block"
   document.getElementById("game-knoppen").style.display = "block"
   document.getElementById("achtergrond").style.display = "block"
   if (/Gecko/i.test(navigator.userAgent) && /; M18\)/i.test(navigator.userAgent)) {
    document.getElementById("achtergrond").style.display = "none"
    document.getElementById("achtergrond").style.display = "block"
   }
   afspeelfunc ("bgmusic","aan")
   if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
    try {
     document.getElementById("hongerknop").focus()
    }
    catch (error) {
     document.getElementById("hongerknop-knop2").focus()
    }
   }
  }
  else {
   resetfunc("automatisch")
  }
 }
}
//------------------------\\

function resetfunc(controle) {
 honger = hongerbasis
 hongerkeren = hongerkeuzes
 hongertijd = hongernaarbenedentijd
 hongertijdslot = 0
 aandacht = aandachtbasis
 aandachtkeren = aandachtkeuzes
 aandachttijd = aandachtnaarbenedentijd
 aandachttijdslot = 0
 kennis = kennisbasis
 kenniskeren = kenniskeuzes
 kennistijd = kennisnaarbenedentijd
 kennistijdslot = 0
 keuzekeren = keuzes * 3
 ziekte = 0
 begintijd = Math.floor(new Date().getTime()/1000)

 var humeurvar = honger + aandacht + kennis
 var totaal = hongergrens + aandachtgrens + kennisgrens
 var totaal2 = totaal / 3
 var totaal3 = totaal2 / 4
 var totaal4 = totaal3 * 3
 humeurvar = humeurvar / totaal
 humeurvar = humeurvar * totaal2
 if (ziekte > 0) {
  var humeur2var = 4
 }
 else if (humeurvar < totaal3) {
  var humeur2var = 1
 }
 else if (humeurvar > totaal4) {
  var humeur2var = 3
 }
 else {
  var humeur2var = 2
 }
 var geluk = humeurvar/totaal2*100
 geluk = Math.round(geluk)
 if (ziekte > 0) {
  geluk = Math.floor(geluk / 2)
 }

 var lijsttrekkerspel2var = getQueryString ("lijsttrekkerspel")
 if (lijsttrekkerspel2var) {
  var personagetestfunctie = spelmodule + "_bestaat"
  var bestaatpersonage = window.frames["Module"][personagetestfunctie](lijsttrekkerspel2var)
  if (bestaatpersonage) {
   lijsttrekker = lijsttrekkerspel2var
  }
  else {
   var spelmodulefunctie = spelmodule + "_nieuwelijsttrekker"
   if (typeof window.frames["Module"][spelmodulefunctie] == "function") {
    lijsttrekker = window.frames["Module"][spelmodulefunctie]()
   }
   else {
     var spelmodulefunctie = spelmodule + "_lijsttrekkers"
     var lijsttrekkers = window.frames["Module"][spelmodulefunctie]()
     var lengte = lijsttrekkers.length - 1
     var random = Math.floor(Math.random() * lengte)
     lijsttrekker = lijsttrekkers[random]
   }
  }
 }
 else {
  var spelmodulefunctie = spelmodule + "_nieuwelijsttrekker"
  if (typeof window.frames["Module"][spelmodulefunctie] == "function") {
   lijsttrekker = window.frames["Module"][spelmodulefunctie]()
  }
  else {
    var spelmodulefunctie = spelmodule + "_lijsttrekkers"
    var lijsttrekkers = window.frames["Module"][spelmodulefunctie]()
    var lengte = lijsttrekkers.length - 1
    var random = Math.floor(Math.random() * lengte)
    lijsttrekker = lijsttrekkers[random]
  }
 }
 lijsttrekkerweergeven(humeur2var)

 document.getElementById("achtergrond").style.display = "none"
 document.getElementById("bevestigingspel-div").style.display = "none"
 document.getElementById("menu-lijsttrekker").style.display = "none"
 document.getElementById("menu-knoppen").style.display = "none"
 document.getElementById("game-lijsttrekker").style.display = "block"
 document.getElementById("game-knoppen").style.display = "block"
 document.getElementById("achtergrond").style.display = "block"
 afspeelfunc ("bgmusic","aan")
 save()
 tekstfunc ("eerstekeer", "spel")
 if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
  try {
   document.getElementById("hongerknop").focus()
  }
  catch (error) {
   document.getElementById("hongerknop-knop2").focus()
  }
 }
}

//------------------------\\

function save (){
 tijd = Math.floor(new Date().getTime()/1000)
 if (begintijd < tijd) {
 var geleefdvar = Math.floor((tijd - begintijd)/86400)
 }
 else {
  geleefdvar = 0
 }

 var humeurvar = honger + aandacht + kennis
 var totaal = hongergrens + aandachtgrens + kennisgrens
 var totaal2 = totaal / 3
 var totaal3 = totaal2 / 4
 var totaal4 = totaal3 * 3
 humeurvar = humeurvar / totaal
 humeurvar = humeurvar * totaal2
 if (ziekte > 0) {
  var humeur2var = 4
 }
 else if (humeurvar < totaal3) {
  var humeur2var = 1
 }
 else if (humeurvar > totaal4) {
  var humeur2var = 3
 }
 else {
  var humeur2var = 2
 }
 var geluk = humeurvar/totaal2*100
 geluk = Math.round(geluk)
 if (ziekte > 0) {
  geluk = Math.floor(geluk / 2)
 }

 var spelmodulefunctie = spelmodule + "_lijsttrekkerweergeven"
 if (typeof window.frames["Module"][spelmodulefunctie] == "function") {
  window.frames["Module"][spelmodulefunctie](lijsttrekker, humeur2var, browservar, spelmodule, "vernieuwen")
 }
 else if (humeur2var < 2) {
  document.getElementById("lijsttrekker1span").style.display = "block"
  document.getElementById("lijsttrekker2span").style.display = "none"
  document.getElementById("lijsttrekker3span").style.display = "none"
  document.getElementById("lijsttrekker4span").style.display = "none"
 }
 else if (humeur2var == 2) {
  document.getElementById("lijsttrekker1span").style.display = "none"
  document.getElementById("lijsttrekker2span").style.display = "block"
  document.getElementById("lijsttrekker3span").style.display = "none"
  document.getElementById("lijsttrekker4span").style.display = "none"
 }
 else if (humeur2var == 3) {
  document.getElementById("lijsttrekker1span").style.display = "none"
  document.getElementById("lijsttrekker2span").style.display = "none"
  document.getElementById("lijsttrekker3span").style.display = "block"
  document.getElementById("lijsttrekker4span").style.display = "none"
 }
 else {
  document.getElementById("lijsttrekker1span").style.display = "none"
  document.getElementById("lijsttrekker2span").style.display = "none"
  document.getElementById("lijsttrekker3span").style.display = "none"
  document.getElementById("lijsttrekker4span").style.display = "block"
 }

 document.getElementById("hongerspan").innerHTML=honger
 document.getElementById("aandachtspan").innerHTML=aandacht
 document.getElementById("kennisspan").innerHTML=kennis
 document.getElementById("gelukspan").innerHTML=geluk
 document.getElementById("geleefdspan").innerHTML=geleefdvar
 speldatatotaal = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
 setCookie("kgo_speldata_" + spelmodule, speldatatotaal, 365)
 document.getElementById("speldatacookie-div").innerHTML=speldatatotaal
}

//----------Behoeften----------\\

function naarbeneden() {
 if (lijsttrekker != "leeg") {

  if (hongertijd == 3) {
   var datumfunctie = spelmodule + "_datum"
   window.frames["Module"][datumfunctie](new Date().getDate(), new Date().getMonth(), new Date().getFullYear())
  }

  hongertijd = hongertijd - 1
  if (hongertijd < 1) {
   hongertijdslot = 0
   keuzekeren = keuzekeren + keuzes
   tekstfunc ("honger", "spel")

   if (ziekte > 0) {
    var random = Math.floor(Math.random() * 15) + 1
   }
   else {
    var random = Math.floor(Math.random() * 20) + 1
   }
   if (random > 10) {
    honger = honger - hongeromlaaglaag
   }
   else if (random < 10) {
    honger = honger - hongeromlaagmiddel
   }
   else {
    honger = honger - hongeromlaaghoog
   }

   hongertijd = hongernaarbenedentijd
   hongerkeren = hongerkeuzes
  }

  aandachttijd = aandachttijd - 1
  if (aandachttijd < 1) {
   aandachttijdslot = 0
   keuzekeren = keuzekeren + keuzes
   tekstfunc ("aandacht", "spel")

   if (ziekte > 0) {
    var random = Math.floor(Math.random() * 35) + 1
   }
   else {
    var random = Math.floor(Math.random() * 50) + 1
   }
   if (random > 30) {
    aandacht = aandacht - aandachtomlaaglaag
   }
   else if (random < 30) {
    aandacht = aandacht - aandachtomlaagmiddel
   }
   else {
    aandacht = aandacht - aandachtomlaaghoog
   }
   if (ziekte > 0) {
    ziekte = ziekte + 1
    if (ziekte == ziektetijd + 1) {
     tekstfunc ("gezond", "spel")
     ziekte = 0
    }
   }
   else {
    var random = Math.floor(Math.random() * 100) + 1
    if (random <= ziektekans) {
     ziekte = 1
     tekstfunc("ziekte", "spel")
    }
   }
   if (ziekte > 0) {
    var random = Math.floor(Math.random() * 30) + 1
    if (random > 20) {
     tekstfunc("niezen", "spel")
    }
    else if (random < 10) {
     tekstfunc("hoofdpijn", "spel")
    }
   }
   aandachttijd = aandachtnaarbenedentijd
   aandachtkeren = aandachtkeuzes
  }

  var random = Math.floor(Math.random() * 40) + 1
  kennistijd = kennistijd - 1
  if (kennistijd < 1) {
   kennistijdslot = 0
   keuzekeren = keuzekeren + keuzes
   tekstfunc ("kennis", "spel")

   if (ziekte < 1) {
    if (random < 40) {
     kennis = kennis - kennisomlaaglaag
    }

    else {
     kennis = kennis - kennisomlaaghoog
    }
   }
   kennistijd = kennisnaarbenedentijd
   kenniskeren = kenniskeuzes
  }

  if (grenzenvar !== "uit") {
   if (kennis < 1) {
    kennis = 0
   }
  }
  
  if (grenzenvar !== "uit") {
   if (keuzekeren > keuzegrens) {
    keuzekeren = keuzegrens
   }
  }
  save()

  if (grenzenvar !== "uit") {

   if (honger < 6 && honger >= 1 && hongertijd == 3){
    tekstfunc ("hongertekort", "spel")
   }

   if (aandacht < 6 && aandacht >= 1 && aandachttijd == 3){
    tekstfunc ("aandachttekort", "spel")
   }

   if (kennis < 6 && kennis >= 1 && aandachttijd == 3){
    tekstfunc ("kennistekort1", "spel")
   }

   if (honger < 1){
    var bericht = tekstfunc ("hongerdood", "spel")
    lijsttrekker="leeg"
    speldatatotaal = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
    setCookie("kgo_speldata_" + spelmodule, speldatatotaal, 365)
    document.getElementById("speldatacookie-div").innerHTML=speldatatotaal
    naarmenufunc()
    alert (bericht)
   }
   else if (aandacht < 1){
    var bericht = tekstfunc ("aandachtdood", "spel")
    lijsttrekker="leeg"
    speldatatotaal = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
    setCookie("kgo_speldata_" + spelmodule, speldatatotaal, 365)
    document.getElementById("speldatacookie-div").innerHTML=speldatatotaal
    naarmenufunc()
    alert (bericht)
   }
   else if (kennis < 1){
    var random = Math.floor(Math.random() * 100) + 1
    if (random > 75) {
     tekstfunc ("kennistekort3", "spel")
     kennis = 0
    }
    else if (random < 75) {
     tekstfunc ("kennistekort2", "spel")
     kennis = 0
    }
    else {
     var bericht = tekstfunc ("kennisdood", "spel")
     lijsttrekker="leeg"
     speldatatotaal = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
     setCookie("kgo_speldata_" + spelmodule, speldatatotaal, 365)
     document.getElementById("speldatacookie-div").innerHTML=speldatatotaal
     naarmenufunc()
     alert (bericht)
    }
   }
  } 
 }
}

//------------------------\\

function hongerfunc() {
 if ((keuzekeren <= 0 && hongerkeren == 0 && grenzenvar !== "uit") || (hongertijdslot == 1 && grenzenvar !== "uit")) {
  tekstfunc ("hongervol", "spel")
  hongertijdslot = 0
 }
 else {
  if (grenzenvar !== "uit") {
   if (hongerkeren == 0) {
    keuzekeren = keuzekeren - 1
   }
   else {
    hongerkeren = hongerkeren - 1
   }
  }
  var random = Math.floor(Math.random() * 10) + 1

  if (random > 6) {
   honger = honger + hongeromhooglaag
  }
  else {
   honger = honger + hongeromhooghoog
  }

  if (honger > hongergrens && grenzenvar !== "uit") {
   honger = hongergrens
  }

  var random = Math.floor(Math.random() * 2) + 1
  if (random == 1) {
   afspeelfunc ("eten1","aan")
  } 
  else {
   afspeelfunc ("eten2","aan")
  }
 }
 if (keuzekeren == 0) {
  hongertijdslot = 1
 }
 save()
}

//------------------------\\

function aandachtfunc() {
 if ((keuzekeren <= 0 && aandachtkeren == 0 && grenzenvar !== "uit") || (aandachttijdslot == 1 && grenzenvar !== "uit")) {
  tekstfunc ("aandachtvol", "spel")
 }
 else {
  if (grenzenvar !== "uit") {
   if (aandachtkeren == 0) {
    keuzekeren = keuzekeren - 1
   }
   else {
    aandachtkeren = aandachtkeren - 1
   }
  }
  aandacht = aandacht + aandachtomhoog
  if (aandacht > aandachtgrens && grenzenvar !== "uit") {
   aandacht = aandachtgrens
  }

  var random = Math.floor(Math.random() * 2) + 1
  if (random == 1) {
   afspeelfunc ("aandacht1","aan")
  } 
  else {
   afspeelfunc ("aandacht2","aan")
  }
 }
 if (keuzekeren == 0) {
  aandachttijdslot = 1
 }
 save()
}

//------------------------\\

function kennisfunc() {
 if ((keuzekeren <= 0 && kenniskeren == 0 && grenzenvar !== "uit") || (kennistijdslot == 1 && grenzenvar !== "uit")) {
  tekstfunc ("kennisvol", "spel")
 }
 else {
  if (grenzenvar !== "uit") {
   if (kenniskeren == 0) {
    keuzekeren = keuzekeren - 1
   }
   else {
    kenniskeren = kenniskeren - 1
   }
  }
  var random = Math.floor(Math.random() * 20) + 1

  if (random > 15) {
   kennis = kennis + kennisomhooglaag
  }
  else {
   kennis = kennis + kennisomhooghoog
  }

  if (kennis > kennisgrens && grenzenvar !== "uit") {
   kennis = kennisgrens
  }

  var random = Math.floor(Math.random() * 2) + 1
  if (random == 1) {
   afspeelfunc ("kennis1","aan")
  } 
  else {
   afspeelfunc ("kennis2","aan")
  }
 }
 if (keuzekeren == 0) {
  kennistijdslot = 1
 }
 save()
}

//----------Overzicht bekijken----------\\

function bekijkenfunc () {
// Voeg alle afbeeldingen aan het overzicht toe. Het kost aan het begin veel tijd bij grote modules om dit te laden, dit wordt hier de eerste keer gedaan.
if(!document.getElementById("overzichtbestaat")) {
 var spelmodulefunctie = spelmodule + "_overzichtgenereren"
 window.frames["Module"][spelmodulefunctie](browservar,spelmodule, donkeremodus)
}

// Het overzicht wordt weergegeven en de rest wordt verborgen. De inhoud van het overzicht wordt er tijdens het opstarten door de module ingezet.
 document.getElementById("achtergrond").style.display = "none"
 document.getElementById("overzichtsdiv").style.display = "block"
 if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
  try {
   document.getElementById("naar_menu_4").focus()
  }
  catch (error) {
   document.getElementById("naar_menu_4-knop2").focus()
  }
 }
}

//----------Geluid afspelen----------\\

function afspeelfunc (nummer,stand){
 if (geluid != "uit") {
  if (geluid != "geenachtergrond" || nummer != "bgmusic") {
   if (eenapril == "aan" && nummer == "bgmusic") {
    nummer = "henktrol"
   }
   try {
    if (stand == "aan") {
     if (audiotest) {
      if (nummer == "henktrol") {
       document.getElementById("Henktrol1div").style.display = "block"
       document.getElementById("Henktrol2div").style.display = "none"
      }
      if (embedgeluid == "aan") {
       document.getElementById(nummer).controls.play()
      }
      else {
       document.getElementById(nummer).play()
      }
     }
    }
    else {
     if (audiotest) {
      if (nummer == "henktrol") {
       document.getElementById("Henktrol1div").style.display = "none"
       document.getElementById("Henktrol2div").style.display = "block"
      }
      if (embedgeluid == "aan") {
       document.getElementById(nummer).controls.pause()
      }
      else {
       document.getElementById(nummer).pause()
      }
     }
    }
   }
   catch (error) {
    geluid = "uit"
    audiotest = false
    instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
    setCookie("kgo_instellingen", instellingen, 365)
    document.getElementById("instellingencookie-div").innerHTML=instellingen
   }
  }
 }
}

//----------Instellingen----------\\

function instellingenfunc() {
 document.getElementById("achtergrond").style.display = "none"
 lijsttrekkerinstellingenweergeven(lijsttrekkerinstellingen)
 afspeelfunc ("bgmusic","aan")
 tekstfunc("instellingen", "instellingen")

 if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
  document.getElementById("donker_aan-div").style.display = "none"
  document.getElementById("donker_uit-div").style.display = "block"
 }
 else if (donkeraan != "uit") {
  document.getElementById("donker_uit-div").style.display = "none"
  document.getElementById("donker_aan-div").style.display = "block"
 }

 if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
  document.getElementById("tekstkleur_aan-div").style.display = "block"
  document.getElementById("tekstkleur_uit-div").style.display = "none"
 }
 else if (gekleurdetekst == "aan" && browservar != "mono") {
  document.getElementById("tekstkleur_aan-div").style.display = "none"
  document.getElementById("tekstkleur_uit-div").style.display = "block"
 }
 else {
  document.getElementById("tekstkleur_aan-div").style.display = "block"
  document.getElementById("tekstkleur_uit-div").style.display = "none"
 }

 if (geluid == "aan" && audiotest) {
  document.getElementById("geluid_uit-div").style.display = "none"
  document.getElementById("geluid_aan-div").style.display = "none"
  document.getElementById("geen_muziek-div").style.display = "block"
  document.getElementById("menu-lijsttrekker").style.display = "none"
  document.getElementById("menu-knoppen").style.display = "none"
  document.getElementById("instellingen-lijsttrekker").style.display = "block"
  document.getElementById("instellingen-knoppen").style.display = "block"
  document.getElementById("achtergrond").style.display = "block"
  if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
   try {
    document.getElementById("geen_muziek").focus()
   }
   catch (error) {
    document.getElementById("geen_muziek-knop2").focus()
   }
  }
 }
 else if (geluid == "geenachtergrond" && audiotest) {
  document.getElementById("geluid_aan-div").style.display = "none"
  document.getElementById("geen_muziek-div").style.display = "none"
  document.getElementById("geluid_uit-div").style.display = "block"
  document.getElementById("menu-lijsttrekker").style.display = "none"
  document.getElementById("menu-knoppen").style.display = "none"
  document.getElementById("instellingen-lijsttrekker").style.display = "block"
  document.getElementById("instellingen-knoppen").style.display = "block"
  document.getElementById("achtergrond").style.display = "block"
  if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
   try {
    document.getElementById("geluid_uit").focus()
   }
   catch (error) {
    document.getElementById("geluid_uit").focus()
   }
  }
 }
 else {
  document.getElementById("geluid_uit-div").style.display = "none"
  document.getElementById("geen_muziek-div").style.display = "none"
  document.getElementById("geluid_aan-div").style.display = "block"
  document.getElementById("menu-lijsttrekker").style.display = "none"
  document.getElementById("menu-knoppen").style.display = "none"
  document.getElementById("instellingen-lijsttrekker").style.display = "block"
  document.getElementById("instellingen-knoppen").style.display = "block"
  document.getElementById("achtergrond").style.display = "block"
  if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
   try {
    document.getElementById("geluid_aan").focus()
   }
   catch (error) {
    document.getElementById("geluid_aan").focus()
   }
  }
 }
}

//----------Zet het geluid aan of uit----------\\

function geluidfunc (stand) {
 if (audiotest) {
  afspeelfunc ("bgmusic","uit")
  geluid = stand
  instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
  setCookie("kgo_instellingen", instellingen, 365)
  document.getElementById("instellingencookie-div").innerHTML=instellingen
  afspeelfunc ("bgmusic","aan")

  if (stand == "aan") {
   tekstfunc("geluidaan", "instellingen")
   document.getElementById("instellingen-knoppen").style.display = "none"
   document.getElementById("geluid_uit-div").style.display = "none"
   document.getElementById("geluid_aan-div").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "block"
   document.getElementById("instellingen-knoppen").style.display = "block"
   if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
    try {
     document.getElementById("geen_muziek").focus()
    }
    catch (error) {
     document.getElementById("geen_muziek-knop2").focus()
    }
   }
  }
  else {
   tekstfunc("geluiduit", "instellingen")
   document.getElementById("instellingen-knoppen").style.display = "none"
   document.getElementById("geluid_uit-div").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "none"
   document.getElementById("geluid_aan-div").style.display = "block"
   document.getElementById("instellingen-knoppen").style.display = "block"
   if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
    try {
     document.getElementById("geluid_aan").focus()
    }
    catch (error) {
     document.getElementById("geluid_aan-knop2").focus()
    }
   }
  }

  if (stand == "geenachtergrond") {
   tekstfunc("geluidachtergrond", "instellingen")
   document.getElementById("instellingen-knoppen").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "none"
   document.getElementById("geluid_aan-div").style.display = "none"
   document.getElementById("geluid_uit-div").style.display = "block"
   document.getElementById("instellingen-knoppen").style.display = "block"
   try {
    document.getElementById("geluid_uit").focus()
   }
   catch (error) {
    document.getElementById("geluid_uit-knop2").focus()
   }
  }
 }
 else {
  tekstfunc("nietondersteund", "instellingen")
 }
}

//----------Zet de donkere modus aan of uit----------\\

function donkerfunc (stand) {

 if (browservar != "mono" && donkeraan != "uit") {
  donkeremodus = stand
  instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
  setCookie("kgo_instellingen", instellingen, 365)
  document.getElementById("instellingencookie-div").innerHTML=instellingen
  document.getElementById("achtergrond").style.display = "none"
  if (stand == "aan") {
   tekstfunc("donkeraan", "instellingen")
  }
  else {
  tekstfunc("donkeruit", "instellingen")
  }
  document.getElementById("achtergrond").style.display = "none"
  herstartfunc()
  document.getElementById("achtergrond").style.display = "block"

  if (geluid == "aan") {
   document.getElementById("geluid_uit-div").style.display = "none"
   document.getElementById("geluid_aan-div").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "block"
  }
  else if (geluid == "uit") {
   document.getElementById("geluid_uit-div").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "none"
   document.getElementById("geluid_aan-div").style.display = "block"
  }
  else {
   document.getElementById("geluid_aan-div").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "none"
   document.getElementById("geluid_uit-div").style.display = "block"
  }

  if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
   document.getElementById("tekstkleur_aan-div").style.display = "block"
   document.getElementById("tekstkleur_uit-div").style.display = "none"
  }
  else if (gekleurdetekst == "aan" && browservar != "mono") {
   document.getElementById("tekstkleur_aan-div").style.display = "none"
   document.getElementById("tekstkleur_uit-div").style.display = "block"
  }
  else {
   document.getElementById("tekstkleur_aan-div").style.display = "block"
   document.getElementById("tekstkleur_uit-div").style.display = "none"
  }

  if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
   document.getElementById("donker_aan-div").style.display = "none"
   document.getElementById("donker_uit-div").style.display = "block"
   document.getElementById("achtergrond").style.display = "none"
   document.getElementById("achtergrond").style.display = "block"
   if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
    try {
     document.getElementById("donker_uit").focus()
    }
    catch (error) {
     document.getElementById("donker_uit-knop2").focus()
    }
   }
  }
  else {
   document.getElementById("donker_uit-div").style.display = "none"
   document.getElementById("donker_aan-div").style.display = "block"
   document.getElementById("achtergrond").style.display = "none"
   document.getElementById("achtergrond").style.display = "block"
   if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
    try {
     document.getElementById("donker_aan").focus()
    }
    catch (error) {
     document.getElementById("donker_aan-knop2").focus()
    }
   }
  }
 }
 else {
  tekstfunc("beeldnietondersteund", "instellingen")
 }
}

//----------Zet de gekleurde tekst aan of uit----------\\

function tekstkleurfunc (stand) {

 if (browservar == "mono") {
  tekstfunc("beeldnietondersteund", "instellingen")
 }
 else if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
  tekstfunc("tekstkleurdonkernietondersteund", "instellingen")
 }
 else if (/Opera 7.0/i.test(navigator.userAgent) || /Opera 7.1/i.test(navigator.userAgent)) {
  tekstfunc("nietondersteund", "instellingen")
 }
 else {
  gekleurdetekst = stand
  instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
  setCookie("kgo_instellingen", instellingen, 365)
  document.getElementById("instellingencookie-div").innerHTML=instellingen
  document.getElementById("achtergrond").style.display = "none"
  if (stand == "aan") {
   document.getElementById("chat").innerHTML= ""
   tekstfunc("tekstkleuraan", "instellingen")
  }
  else {
   document.getElementById("chat").innerHTML= ""
   tekstfunc("tekstkleuruit", "instellingen")
  }
  document.getElementById("achtergrond").style.display = "block"
  if (geluid == "aan") {
   document.getElementById("geluid_uit-div").style.display = "none"
   document.getElementById("geluid_aan-div").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "block"
  }
  else if (geluid == "uit") {
   document.getElementById("geluid_uit-div").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "none"
   document.getElementById("geluid_aan-div").style.display = "block"
  }
  else {
   document.getElementById("geluid_aan-div").style.display = "none"
   document.getElementById("geen_muziek-div").style.display = "none"
   document.getElementById("geluid_uit-div").style.display = "block"
  }

  if (donkeremodus == "aan" && donkeraan != "uit" && browservar != "mono" && donkeraan != "uit") {
   document.getElementById("donker_aan-div").style.display = "none"
   document.getElementById("donker_uit-div").style.display = "block"
  }
  else {
   document.getElementById("donker_uit-div").style.display = "none"
   document.getElementById("donker_aan-div").style.display = "block"
  }

  if (gekleurdetekst == "aan" && browservar != "mono") {
   document.getElementById("tekstkleur_aan-div").style.display = "none"
   document.getElementById("tekstkleur_uit-div").style.display = "block"
   document.getElementById("achtergrond").style.display = "none"
   document.getElementById("achtergrond").style.display = "block"
   if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
    try {
     document.getElementById("tekstkleur_uit").focus()
    }
    catch (error) {
     document.getElementById("tekstkleur_uit-knop2").focus()
    }
   }
  }
  else {
   document.getElementById("tekstkleur_uit-div").style.display = "none"
   document.getElementById("tekstkleur_aan-div").style.display = "block"
   document.getElementById("achtergrond").style.display = "none"
   document.getElementById("achtergrond").style.display = "block"
   if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
    try {
     document.getElementById("tekstkleur_aan").focus()
    }
    catch (error) {
     document.getElementById("tekstkleur_aan-knop2").focus()
    }
   }
  }
 }
}

//----------Modules----------\\

function naarmodulesfunc() {
 tekstfunc("modulekiezen", "instellingen")
 document.getElementById("achtergrond").style.display = "none"
 document.getElementById("instellingen-knoppen").style.display = "none"
 document.getElementById("modules-knoppen").style.display = "block"
 document.getElementById("shells-knoppen").style.display = "none"
 document.getElementById("achtergrond").style.display = "block"
 if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
  try {
   document.getElementById(spelmodulesarray[0]).focus()
  }
  catch (error) {
   document.getElementById(spelmodulesarray[0] + "-knop2").focus()
  }
 }
}

//------------------------\\

function modulefunc(moduleindex) {
 spelmodule = spelmodulesarray[moduleindex]
 document.getElementById("achtergrond").style.display = "none"
 document.getElementById("overzichtsdiv-inhoud").innerHTML= ""
 document.getElementById("chat").innerHTML= ""
 instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
 setCookie("kgo_instellingen", instellingen, 365)
 window.parent.location.href='../Kamergotchi_Online.html' + location.search
}

//----------Shells----------\\

function naarshellsfunc() {
 if (browservar == "vector") {
  tekstfunc("shellkiezen", "instellingen")
  document.getElementById("achtergrond").style.display = "none"
  document.getElementById("instellingen-knoppen").style.display = "none"
  document.getElementById("modules-knoppen").style.display = "none"
  document.getElementById("shells-knoppen").style.display = "block"
  document.getElementById("achtergrond").style.display = "block"
  if (!/AppleWebKit\/412 /i.test(navigator.userAgent) && !/AppleWebKit\/412./i.test(navigator.userAgent) && !/AppleWebKit\/413./i.test(navigator.userAgent) && !/AppleWebKit\/414./i.test(navigator.userAgent) && !/AppleWebKit\/415./i.test(navigator.userAgent) && !/AppleWebKit\/416./i.test(navigator.userAgent) && !/AppleWebKit\/417./i.test(navigator.userAgent) && !/AppleWebKit\/418./i.test(navigator.userAgent) && !/AppleWebKit\/419./i.test(navigator.userAgent)) {
   try {
    document.getElementById("shell0").focus()
   }
   catch (error) {
    document.getElementById("shell0-knop2").focus()
   }
  }
 }
 else {
  tekstfunc("nietondersteund", "instellingen")
 }
}

//------------------------\\

function shellfunc (shellindex) {
 shell = shellsarray[shellindex]
 document.getElementById("achtergrond").style.display = "none"
 document.getElementById("overzichtsdiv-inhoud").innerHTML= ""
 document.getElementById("chat").innerHTML= ""
 instellingen = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
 setCookie("kgo_instellingen", instellingen, 365)
 document.getElementById("instellingencookie-div").innerHTML=instellingen
 window.parent.location.href="../Kamergotchi_Online.html" + location.search
}

//----------Wanneer zijn de verkiezingen----------\\

function verkiezingenfunc () {
 var verkiezingenfunctie = spelmodule + "_verkiezingen"
 window.frames["Module"][verkiezingenfunctie](new Date().getDate(), new Date().getMonth(), new Date().getFullYear())
}

//----------Voeg een personage aan het overzicht toe----------\\

function overzichtgenereren(internenaam, naam, URL, browservar, spelmodule, donkeremodus) {
switch(browservar) {
case "vector":
var fallback='"../Kern/Personages/Arjen/Arjen-3.svg"'
document.getElementById("overzichtsdiv-inhoud").innerHTML= document.getElementById("overzichtsdiv-inhoud").innerHTML + "<span id='" + internenaam + "' style='display:-moz-inline-box;display:inline-block;zoom:1;text-align:center;*display:inline'><center><a href='" + URL + "' target='_blank' style='text-decoration:none'><img src='../Modules/" + spelmodule + "/Personages/" + internenaam + "/" + internenaam + "-3.svg' onerror='this.onerror=null;this.src=" + fallback + "' style='border:0 none;height:50vh;width:auto;max-height:60vh;max-width:100%;object-fit:contain;object-position:bottom'></a><br>" + naam + "<br><br></center></span>"
break

case "transparent":
var fallback = '"../Kern/Personages/Arjen/Arjen-3.png"'
document.getElementById("overzichtsdiv-inhoud").innerHTML= document.getElementById("overzichtsdiv-inhoud").innerHTML + "<span id='" + internenaam + "' style='display:-moz-inline-box;display:inline-block;zoom:1;text-align:center;*display:inline'><center><a href='" + URL + "' target='_blank' style='text-decoration:none'><img src='../Modules/" + spelmodule + "/Personages/" + internenaam + "/" + internenaam + "-3.png' onerror='this.onerror=null;this.src=" + fallback + "' style='border:0 none;width:100%;max-width:260px;max-height:430px'></a><br>" + naam + "<br><br></center></span>"
break

case "solid":
var fallback = '"../Kern/Personages/Arjen/Arjen-3-kleur.gif"'
document.getElementById("overzichtsdiv-inhoud").innerHTML= document.getElementById("overzichtsdiv-inhoud").innerHTML + "<span id='" + internenaam + "' style='display:-moz-inline-box;display:inline-block;zoom:1;text-align:center;*display:inline'><center><a href='" + URL + "' target='_blank' style='text-decoration:none'><img src='../Modules/" + spelmodule + "/Personages/" + internenaam + "/" + internenaam + "-3-kleur.gif' onerror='this.onerror=null;this.src=" + fallback + "' style='border:0 none'></a><br>" + naam + "<br><br></center></span>"
break

case "mono":
 var fallback = '"../Kern/Personages/Arjen/Arjen-3-mono.gif"'
 document.getElementById("overzichtsdiv-inhoud").innerHTML= document.getElementById("overzichtsdiv-inhoud").innerHTML + "<span id='" + internenaam + "' style='display:-moz-inline-box;display:inline-block;zoom:1;text-align:center;*display:inline'><center><a href='" + URL + "' target='_blank' style='text-decoration:none'><img src='../Modules/" + spelmodule + "/Personages/" + internenaam + "/" + internenaam + "-3-mono.gif' onerror='this.onerror=null;this.src=" + fallback + "' style='border:0 none'></a><br>" + naam + "<br><br></center></span>"
break
}
}

//----------Functie om de afbeelding van de Kamergotchi neer te zetten----------\\

function lijsttrekkerweergeven(humeur2var) {
 var spelmodulefunctie = spelmodule + "_lijsttrekkerweergeven"
 if (typeof window.frames["Module"][spelmodulefunctie] == "function") {
  window.frames["Module"][spelmodulefunctie](lijsttrekker, humeur2var, browservar, spelmodule, "begin")
 }
 else {
 var spelmodulemap = moduletestfunc(spelmodule)
 switch(browservar) {
  case "vector":
   var afbeelding1var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-1.svg"
   var afbeelding2var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-2.svg"
   var afbeelding3var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-3.svg"
   var afbeelding4var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-4.svg"
   document.getElementById("lijsttrekker1span").innerHTML="<img src='" + afbeelding1var + "' onerror='this.onerror=null;geenafbeelding()' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
   document.getElementById("lijsttrekker2span").innerHTML="<img src='" + afbeelding2var + "' onerror='this.onerror=null;geenafbeelding()' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
   document.getElementById("lijsttrekker3span").innerHTML="<img src='" + afbeelding3var + "' onerror='this.onerror=null;geenafbeelding()' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
   document.getElementById("lijsttrekker4span").innerHTML="<img src='" + afbeelding4var + "' onerror='this.onerror=null;geenafbeelding()' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
  break

  case "transparent":
   var afbeelding1var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-1.png"
   var afbeelding2var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-2.png"
   var afbeelding3var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-3.png"
   var afbeelding4var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-4.png"
   document.getElementById("lijsttrekker1span").innerHTML="<img src='" + afbeelding1var + "' onerror='this.onerror=null;geenafbeelding()' alt='' style='width:100%;max-width:260px;max-height:430px'>"
   document.getElementById("lijsttrekker2span").innerHTML="<img src='" + afbeelding2var + "' onerror='this.onerror=null;geenafbeelding()' alt='' style='width:100%;max-width:260px;max-height:430px'>"
   document.getElementById("lijsttrekker3span").innerHTML="<img src='" + afbeelding3var + "' onerror='this.onerror=null;geenafbeelding()' alt='' style='width:100%;max-width:260px;max-height:430px'>"
   document.getElementById("lijsttrekker4span").innerHTML="<img src='" + afbeelding4var + "' onerror='this.onerror=null;geenafbeelding()' alt='' style='width:100%;max-width:260px;max-height:430px'>"
  break

  case "solid":
   var afbeelding1var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-1-kleur.gif"
   var afbeelding2var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-2-kleur.gif"
   var afbeelding3var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-3-kleur.gif"
   var afbeelding4var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-4-kleur.gif"
   document.getElementById("lijsttrekker1span").innerHTML="<img src='" + afbeelding1var + "' onerror='this.onerror=null;geenafbeelding()' alt=''>"
   document.getElementById("lijsttrekker2span").innerHTML="<img src='" + afbeelding2var + "' onerror='this.onerror=null;geenafbeelding()' alt=''>"
   document.getElementById("lijsttrekker3span").innerHTML="<img src='" + afbeelding3var + "' onerror='this.onerror=null;geenafbeelding()' alt=''>"
   document.getElementById("lijsttrekker4span").innerHTML="<img src='" + afbeelding4var + "' onerror='this.onerror=null;geenafbeelding()' alt=''>"
  break

  case "mono":
   var afbeelding1var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-1-mono.gif"
   var afbeelding2var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-2-mono.gif"
   var afbeelding3var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-3-mono.gif"
   var afbeelding4var = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekker + "/" + lijsttrekker + "-4-mono.gif"
   document.getElementById("lijsttrekker1span").innerHTML="<img src='" + afbeelding1var + "' onerror='this.onerror=null;geenafbeelding()' alt=''>"
   document.getElementById("lijsttrekker2span").innerHTML="<img src='" + afbeelding2var + "' onerror='this.onerror=null;geenafbeelding()' alt=''>"
   document.getElementById("lijsttrekker3span").innerHTML="<img src='" + afbeelding3var + "' onerror='this.onerror=null;geenafbeelding()' alt=''>"
   document.getElementById("lijsttrekker4span").innerHTML="<img src='" + afbeelding4var + "' onerror='this.onerror=null;geenafbeelding()' alt=''>"
  break
  }
  if (humeur2var < 2) {
   document.getElementById("lijsttrekker1span").style.display = "block"
   document.getElementById("lijsttrekker2span").style.display = "none"
   document.getElementById("lijsttrekker3span").style.display = "none"
   document.getElementById("lijsttrekker4span").style.display = "none"
  }
  else if (humeur2var == 2) {
   document.getElementById("lijsttrekker1span").style.display = "none"
   document.getElementById("lijsttrekker2span").style.display = "block"
   document.getElementById("lijsttrekker3span").style.display = "none"
   document.getElementById("lijsttrekker4span").style.display = "none"
  }
  else if (humeur2var == 3) {
   document.getElementById("lijsttrekker1span").style.display = "none"
   document.getElementById("lijsttrekker2span").style.display = "none"
   document.getElementById("lijsttrekker3span").style.display = "block"
   document.getElementById("lijsttrekker4span").style.display = "none"
  }
  else {
   document.getElementById("lijsttrekker1span").style.display = "none"
   document.getElementById("lijsttrekker2span").style.display = "none"
   document.getElementById("lijsttrekker3span").style.display = "none"
   document.getElementById("lijsttrekker4span").style.display = "block"
  }
 }
}

function lijsttrekkerinstellingenweergeven(lijsttrekkerinstellingen) {
 var spelmodulefunctie = spelmodule + "_lijsttrekkerinstellingenweergeven"
 if (typeof window.frames["Module"][spelmodulefunctie] == "function") {
  window.frames["Module"][spelmodulefunctie](lijsttrekkerinstellingen)
 }
 else {
 var spelmodulemap = moduletestfunc(spelmodule)
 switch(browservar) {
  case "vector":
   var afbeeldingvar = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekkerinstellingen + "/" + lijsttrekkerinstellingen + "-2.svg"
   document.getElementById("lijsttrekkerinstellingenspan").innerHTML="<img src='" + afbeeldingvar + "' onerror='this.onerror=null;geenafbeeldinginstellingenfunc()' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
  break

  case "transparent":
   var afbeeldingvar = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekkerinstellingen + "/" + lijsttrekkerinstellingen + "-2.png"
   document.getElementById("lijsttrekkerinstellingenspan").innerHTML="<img src='" + afbeeldingvar + "' onerror='this.onerror=null;geenafbeeldinginstellingenfunc()' alt='' style='width:100%;max-width:260px;max-height:430px'>"
  break

  case "solid":
   var afbeeldingvar = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekkerinstellingen + "/" + lijsttrekkerinstellingen + "-2-kleur.gif"
   document.getElementById("lijsttrekkerinstellingenspan").innerHTML="<img src='" + afbeeldingvar + "' onerror='this.onerror=null;geenafbeeldinginstellingenfunc()' alt=''>"
  break

  case "mono":
   var afbeeldingvar = "../Modules/" + spelmodulemap + "/Personages/" + lijsttrekkerinstellingen + "/" + lijsttrekkerinstellingen + "-2-mono.gif"
   document.getElementById("lijsttrekkerinstellingenspan").innerHTML="<img src='" + afbeeldingvar + "' onerror='this.onerror=null;geenafbeeldinginstellingenfunc()' alt=''>"
  break
  }
 }
}

//----------Functie om de fallbackafbeelding van Arjen Lubach op de plek van de Kamergotchi neer te zetten----------\\

function geenafbeelding() {
 switch(browservar) {
 case "vector":
  var afbeelding1var = "../Kern/Personages/Arjen/Arjen-1.svg"
  var afbeelding2var = "../Kern/Personages/Arjen/Arjen-2.svg"
  var afbeelding3var = "../Kern/Personages/Arjen/Arjen-3.svg"
  var afbeelding4var = "../Kern/Personages/Arjen/Arjen-4.svg"
  document.getElementById("lijsttrekker1span").innerHTML="<img src='" + afbeelding1var + "' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
  document.getElementById("lijsttrekker2span").innerHTML="<img src='" + afbeelding2var + "' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
  document.getElementById("lijsttrekker3span").innerHTML="<img src='" + afbeelding3var + "' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
  document.getElementById("lijsttrekker4span").innerHTML="<img src='" + afbeelding4var + "' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
 break

 case "transparent":
  var afbeelding1var = "../Kern/Personages/Arjen/Arjen-1.png"
  var afbeelding2var = "../Kern/Personages/Arjen/Arjen-2.png"
  var afbeelding3var = "../Kern/Personages/Arjen/Arjen-3.png"
  var afbeelding4var = "../Kern/Personages/Arjen/Arjen-4.png"
  document.getElementById("lijsttrekker1span").innerHTML="<img src='" + afbeelding1var + "' alt='' style='width:100%;max-width:260px;max-height:430px'>"
  document.getElementById("lijsttrekker2span").innerHTML="<img src='" + afbeelding2var + "' alt='' style='width:100%;max-width:260px;max-height:430px'>"
  document.getElementById("lijsttrekker3span").innerHTML="<img src='" + afbeelding3var + "' alt='' style='width:100%;max-width:260px;max-height:430px'>"
  document.getElementById("lijsttrekker4span").innerHTML="<img src='" + afbeelding4var + "' alt='' style='width:100%;max-width:260px;max-height:430px'>"
 break

 case "solid":
  var afbeelding1var = "../Kern/Personages/Arjen/Arjen-1-kleur.gif"
  var afbeelding2var = "../Kern/Personages/Arjen/Arjen-2-kleur.gif"
  var afbeelding3var = "../Kern/Personages/Arjen/Arjen-3-kleur.gif"
  var afbeelding4var = "../Kern/Personages/Arjen/Arjen-4-kleur.gif"
  document.getElementById("lijsttrekker1span").innerHTML="<img src='" + afbeelding1var + "' alt=''>"
  document.getElementById("lijsttrekker2span").innerHTML="<img src='" + afbeelding2var + "' alt=''>"
  document.getElementById("lijsttrekker3span").innerHTML="<img src='" + afbeelding3var + "' alt=''>"
  document.getElementById("lijsttrekker4span").innerHTML="<img src='" + afbeelding3var + "' alt=''>"
 break

 case "mono":
  var afbeelding1var = "../Kern/Personages/Arjen/Arjen-1-mono.gif"
  var afbeelding2var = "../Kern/Personages/Arjen/Arjen-2-mono.gif"
  var afbeelding3var = "../Kern/Personages/Arjen/Arjen-3-mono.gif"
  var afbeelding4var = "../Kern/Personages/Arjen/Arjen-4-mono.gif"
  document.getElementById("lijsttrekker1span").innerHTML="<img src='" + afbeelding1var + "' alt=''>"
  document.getElementById("lijsttrekker2span").innerHTML="<img src='" + afbeelding2var + "' alt=''>"
  document.getElementById("lijsttrekker3span").innerHTML="<img src='" + afbeelding3var + "' alt=''>"
  document.getElementById("lijsttrekker4span").innerHTML="<img src='" + afbeelding4var + "' alt=''>"
 break
 }
}

function geenafbeeldinginstellingenfunc() {
 switch(browservar) {
 case "vector":
  var afbeeldingvar = "../Kern/Personages/Arjen/Arjen-2.svg"
  document.getElementById("lijsttrekkerinstellingenspan").innerHTML="<img src='" + afbeeldingvar + "' alt='' style='max-width:100%;max-height:60vh;object-position:top'>"
 break

 case "transparent":
  var afbeeldingvar = "../Kern/Personages/Arjen/Arjen-2.png"
  document.getElementById("lijsttrekkerinstellingenspan").innerHTML="<img src='" + afbeeldingvar + "' alt='' style='width:100%;max-width:260px;max-height:430px'>"
 break

 case "solid":
  var afbeeldingvar = "../Kern/Personages/Arjen/Arjen-2-kleur.gif"
  document.getElementById("lijsttrekkerinstellingenspan").innerHTML="<img src='" + afbeeldingvar + "' alt=''>"
 break

 case "mono":
  var afbeeldingvar = "../Kern/Personages/Arjen/Arjen-2-mono.gif"
  document.getElementById("lijsttrekkerinstellingenspan").innerHTML="<img src='" + afbeeldingvar + "' alt=''>"
 break
 }
}

//----------Functie om de fallbackafbeelding van Arjen Lubach op de plek van de Kamergotchi in het instellingenmenu neer te zetten----------\\

function geenafbeelding2() {
switch(browservar) {
case "vector":
 document.getElementById("afbeeldinginstellingen").src = "../Kern/Personages/Arjen/Arjen-2.svg"
break

case "transparent":
 document.getElementById("afbeeldinginstellingen").src = "../Kern/Personages/Arjen/Arjen-2.png"
break

case "solid":
 document.getElementById("afbeeldinginstellingen").src = "../Kern/Personages/Arjen/Arjen-2-kleur.gif"
break

case "mono":
 document.getElementById("afbeeldinginstellingen").src = "../Kern/Personages/Arjen/Arjen-2-mono.gif"
break
}
}

//----------Functies waarmee modules (die in een ander document draaien) het moduledeel kunnen wijzigen----------\\

function leesmoduledeel() {
 return speldatamodulespecifiek
}

function schrijfmoduledeel(input) {
 speldatamodulespecifiek = input
}
