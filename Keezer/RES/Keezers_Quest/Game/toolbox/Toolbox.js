 //__________Kamergotchi is oorspronkelijk bedacht door Arjen Lubach van het VPRO-programma Zondag met Lubach.__________\\
 //__________https://www.vpro.nl/zondag-met-lubach.html__________\\
 //__________Script door Thomas Greve, met delen van het internet__________\\

//De Toolbox is een verzameling algemene functies in Kamergotchi Online.
//Het is een soort mini-Javascript-bibliotheek.

//Er zijn functies om de browser op wat deze weer kan geven in een categorie in te delen,
//voor het lezen van de querystring,
//voor het werken met cookies en LocalStorage
//en voor de detectie van LocalStorage, MaxHeight, VW en VH en HTML5-audio-ondersteuning.

//Ik raad wel aan dat andere gebruikers dit bestand downloaden en niet doorverwijzen naar de versie
//op deze website zodat de code niet afhankelijk is van deze site.

//Dit is toolbox versie 1.01.

//----------Cookies----------\\

function getCookie(cookie2name) {
 var cookiename = cookie2name
 if(lstestfunc()) {
  var value = localStorage.getItem(cookiename)
  return value
 }
 else {
  var search = cookiename + "=" 
  if (document.cookie.length > 0) {
   var offset = document.cookie.indexOf(search) 
   if (offset != -1) {
    offset += search.length 
    var end = document.cookie.indexOf(";", offset)  
    if (end == -1) end = document.cookie.length
    return unescape(document.cookie.substring(offset, end))
   }
  }
 }
}


//------------------------\\

function setCookie(cookie2name, cvalue, exdays) {
 var cookiename = cookie2name
 if (lstestfunc()) {
  localStorage.setItem(cookiename, cvalue)
 }
 else {
  var datum = new Date()
  var expires = "expires="+ datum.toUTCString(datum.setTime(datum.getTime() + (exdays*24*60*60*1000)))
  document.cookie = cookiename + "=" + cvalue + ";" + expires + ";path=/;samesite=lax"
 }
}

//------------------------\\

function deleteCookie(cookie2name) {
 var cookiename = cookie2name
 document.cookie = cookiename + "= ;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;samesite=lax"
}

//----------Variabele uit querystring----------\\

function getQueryString (field, url) {
 var href = url ? url : window.location.href
 var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' )
 var string = reg.exec(href)
 return string ? string[1] : null
}

//----------Tests----------\\

function lstestfunc(){
 var test = test
 try {
  localStorage.setItem(test, test)
  localStorage.removeItem(test)
  return true
 }
 catch(error) {
  return false
 }
}

//------------------------\\

function audiotestfunc() {
 try {
  var element = document.createElement('audio')
  if (element == "[object HTMLAudioElement]") {
   return true
  }
  else {
   return false
  }
 }
 catch (error) {
  return false
 }
}

//------------------------\\

function maxheighttest() {
 try {
  var test = document.createElement("div")
  test.id = "heighttestdiv"
  test.style.cssText = "max-height:100px"
 }
 catch (error) {
  return false
 }
 if (test.style.maxHeight == "100px") {
  return true
 }
 else {
  return false
 }
}

//------------------------\\

function vwvhtest() {
 try {
  var test = document.createElement("div")
  test.id = "vhvwtestdiv"
  test.style.cssText = "max-height:50vw;max-width:50vw;height:calc(10px + 10px);object-fit:contain"
  var test2 = document.createElement("img")
  test2.id = "vhvwtestimg"
  test2.style.cssText = "object-fit:contain"
 }
 catch (error) {
  return false
 }
 if (test.style.maxHeight == "50vw" && test.style.maxWidth == "50vw" && test2.style.objectFit == "contain") {
  if (test.style.height == "calc(20px)" || window.getComputedStyle(test).height == "20px") {
   return true
  }
  else {
   return false
  }
 }
 else {
  return false
 }
}

//------------------------\\

function toolboxversie() {
 return "1.01"
}

 //----------Browser bepalen en speciale situaties----------\\

function browserbepaalfunc() {
 var browservar
 var knopsimpel
 if (!maxheighttest() || screen.colorDepth <= 8 || screen.pixelDepth <= 8) {

  if (screen.colorDepth <= 4 || screen.pixelDepth <= 4) {
   browservar = "mono"
  }
  else {
   browservar = "solid"
  }
 }
 else if (typeof SVGRect == "undefined" || !vwvhtest()) {
   browservar = "transparent"
 }
 else {
  browservar = "vector"
 }

 //Electron-apps draaien altijd met moderne versie van Chromium die de vectormodus begrijpt, en om ruimte te besparen worden andere assets niet meegeleverd.
 //Dan moeten we wel zeker zijn dat die niet worden aangevraagd.
 if (/Electron/i.test(navigator.userAgent) && /Chrome/i.test(navigator.userAgent) && window.location.protocol == "file:") {
  browservar == "vector"
 }

 // In Internet Explorer worden SVG's niet goed weergegeven op andere groottes
 if (/MSIE/i.test(navigator.userAgent) || /Trident/i.test(navigator.userAgent)) {
  if (browservar == "vector") {
   browservar = "transparent"
  }
 }

 // Internet Explorer 5 voor Mac slaagt voor de maxheighttest, maar begrijpt MaxHeight niet.
 if (/MSIE /i.test(navigator.userAgent) && /Mac_PowerPC/i.test(navigator.userAgent)) {
  if (browservar == "transparent") {
   browservar = "solid"
  }
 }

 // Opera 8 slaagt niet voor de maxheighttest, maar begrijpt MaxHeight wel. Dit geldt ook voor Midori voor Windows.
 if (/Opera 8./i.test(navigator.userAgent) || /Midori/i.test(navigator.userAgent)) {
  if (browservar == "solid") {
   browservar = "transparent"
  }
 }

 var browser2var = getQueryString ("browser")
 if (browser2var) {
  if (browser2var == "vector" || browser2var == "transparent" || browser2var == "solid" || browser2var == "mono") {
   browservar = browser2var
  }
 }

 // In de vectormodus geeft knopsimpel een knop met CSS in plaats van een tabel voor de hoogte en het centreren, anders geeft het knoppen die de <button>-tag gebruiken.
 if (browservar == "vector") {
  knopsimpel = "aan"
 }
 else {
  knopsimpel = "uit"
 }

// Opera 7, Internet Explorer 5.0 en eerdere versies van Gecko werken alleen met de knoppen van de <button>-tag.
 if (/Opera 7/i.test(navigator.userAgent) || /MSIE 5.0/i.test(navigator.userAgent) && !/Mac_PowerPC/i.test(navigator.userAgent)) {
  knopsimpel = "aan"
 }
 if (/Gecko/i.test(navigator.userAgent) && !/like Gecko/i.test(navigator.userAgent)) {
  if (/; 0.8\)/i.test(navigator.userAgent) || /; 0.7\)/i.test(navigator.userAgent) ||  /; 0.6\)/i.test(navigator.userAgent) ||  /; M18\)/i.test(navigator.userAgent) ||  /; M17\)/i.test(navigator.userAgent) ||  /; M16\)/i.test(navigator.userAgent) ||  /; M15\)/i.test(navigator.userAgent) ||  /; M14\)/i.test(navigator.userAgent) ||  /; M13\)/i.test(navigator.userAgent) ||  /; M12\)/i.test(navigator.userAgent) || /; M11\)/i.test(navigator.userAgent) || /; M10\)/i.test(navigator.userAgent) || /; M9\)/i.test(navigator.userAgent) || /; M8\)/i.test(navigator.userAgent) || /; M7\)/i.test(navigator.userAgent) || /; M6\)/i.test(navigator.userAgent) || /; M5\)/i.test(navigator.userAgent) || /; M4\)/i.test(navigator.userAgent) || /; M13\)/i.test(navigator.userAgent) || /; M3\)/i.test(navigator.userAgent) || /; M2\)/i.test(navigator.userAgent) || /; M1\)/i.test(navigator.userAgent)) {
  knopsimpel = "aan"
  }
 }

 var knopsimpel2 = getQueryString ("knopsimpel")
 if (knopsimpel2) {
  if (knopsimpel2 == "aan" || knopsimpel2 == "uit") {
   knopsimpel = knopsimpel2
  }
 }
 return [browservar, knopsimpel]
}