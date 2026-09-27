function parseCookie(cookietype, cookieinhoud) {
 var alleenarray = false
 if (cookietype == "kgo_instellingen") {
  document.getElementById("versieopslaan").value = "KGO213"
  if (cookieinhoud) {
   var versiedomlezen = cookieinhoud.substring(0,6)
   if (versiedomlezen == "KGO213") {
    var instellingen = cookieinhoud.split(">")
    var instellingensaveversie = instellingen[0]
    var copyrightgezien = instellingen[1]
    var spelmodule = instellingen [2]
    var geluid = instellingen[3]
    var donkeremodus = instellingen[4]
    var gekleurdetekst = instellingen[5]
    var shell = instellingen[6]
    var protocol = instellingen[7]
   }
   else {
    alleenarray = true
   }
  }
  else {
   var instellingensaveversie = "KGO213"
   var copyrightgezien = "leeg"
   var spelmodule = "leeg"
   var geluid = "leeg"
   var donkeremodus = "leeg"
   var gekleurdetekst = "leeg"
   if ((/Opera/i.test(navigator.userAgent) && /Nintendo/i.test(navigator.userAgent) && /DS/i.test(navigator.userAgent)) || (/MSIE 6.0; Nitro/i.test(navigator.userAgent) && /Opera 8./i.test(navigator.userAgent))) {
    var shell = 6
   }
   else {
    var shell = 0
   }
   var protocol = "http"
   cookieinhoud = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
  }
 }
 else if (cookietype == "kgl_instellingen") {
  document.getElementById("versieopslaan").value = "KGL213"
  if (cookieinhoud) {
   var versiedomlezen = cookieinhoud.substring(0,6)
   if (versiedomlezen == "KGL213") {
    var instellingen = cookieinhoud.split(">")
    var instellingensaveversie = instellingen[0]
    var weergavemodus = instellingen[1]
    var spelmodule = instellingen[2]
   }
   else {
    alleenarray = true
   }
  }
  else {
   var instellingensaveversie = "KGL213"
   var weergavemodus = "256kleur"
   var spelmodule = "NL_2017"
   cookieinhoud = instellingensaveversie + ">" + weergavemodus + ">" + spelmodule
  }
 }
 else if(cookietype.indexOf("kgo_speldata") !== -1 || cookietype.indexOf("kgl_speldata") !== -1 || cookietype.indexOf("kgb_speldata") !== -1) {
  var spelmodule_afbeelding = cookietype.replace("kgl_speldata_","")
  if (cookieinhoud){
   var versiedomlezen = cookieinhoud.substring(0,6)
   if (versiedomlezen == "KGS100") {
    var speldatatotaal = cookieinhoud.split("|")
    var speldatageneriek = speldatatotaal[0].split(">")
    var speldataversiespecifiek = speldatatotaal[1].split(">")
    var speldatamodulespecifiek = speldatatotaal[2]
    var saveversie = speldatageneriek[0]
    var honger = parseInt(speldatageneriek[1], 10)
    var hongerkeren = parseInt(speldatageneriek[2], 10)
    var hongertijd = parseInt(speldatageneriek[3], 10)
    var hongertijdslot = parseInt(speldatageneriek[4], 10)
    var aandacht = parseInt(speldatageneriek[5], 10)
    var aandachtkeren = parseInt(speldatageneriek[6], 10)
    var aandachttijd = parseInt(speldatageneriek[7], 10)
    var aandachttijdslot = parseInt(speldatageneriek[8], 10)
    var kennis = parseInt(speldatageneriek[9], 10)
    var kenniskeren = parseInt(speldatageneriek[10], 10)
    var kennistijd = parseInt(speldatageneriek[11], 10)
    var kennistijdslot = parseInt(speldatageneriek[12], 10)
    var keuzekeren = parseInt(speldatageneriek[13], 10)
    var ziekte = parseInt(speldatageneriek[14], 10)
    var lijsttrekker = speldatageneriek[15]
    var spelspecifiekesaveversie = speldataversiespecifiek[0]
    if (spelspecifiekesaveversie == "KGO213") {
     var begintijd = parseInt(speldataversiespecifiek[1], 10)
     var tijd = parseInt(speldataversiespecifiek[2], 10)
     var socialkeren = 6
    }
    else if (spelspecifiekesaveversie == "KGL213") {
     var begintijd = parseInt(speldataversiespecifiek[1], 10)
     var tijd = parseInt(speldataversiespecifiek[2], 10)
     var socialkeren = 6
    }
    else if (spelspecifiekesaveversie == "KGB110") {
     var socialkeren = parseInt(speldataversiespecifiek[1], 10)
     var tijd = Math.floor(new Date().getTime()/1000)
     var begintijd = tijd
    }
    else if (cookietype.indexOf("kgl_speldata") !== -1) {
     var spelspecifiekesaveversie = "KGL213"
     var tijd = Math.floor(new Date().getTime()/1000)
     var begintijd = tijd
     var socialkeren = 6
    }
    else if (cookietype.indexOf("kgb_speldata") !== -1) {
     var spelspecifiekesaveversie = "KGB110"
     var tijd = Math.floor(new Date().getTime()/1000)
     var begintijd = tijd
     var socialkeren = 6
    }
    else {
     var spelspecifiekesaveversie = "KGO213"
     var tijd = Math.floor(new Date().getTime()/1000)
     var begintijd = tijd
     var socialkeren = 6
    }
   }
   else {
    if (cookietype.indexOf("kgl_speldata") !== -1) {
     var spelspecifiekesaveversie = "KGL213"
    }
    else if (cookietype.indexOf("kgb_speldata") !== -1) {
     var spelspecifiekesaveversie = "KGB110"
    }
    else {
     var spelspecifiekesaveversie = "KGO213"
    }
    alleenarray = true
   }
   document.getElementById("versieopslaan").value = spelspecifiekesaveversie
  }
  else {
   var saveversie = "KGS100"
   var honger = 0
   var hongerkeren = 0
   var hongertijd = 0
   var hongertijdslot = 0
   var aandacht = 0
   var aandachtkeren = 0
   var aandachttijd = 0
   var aandachttijdslot = 0
   var kennis = 0
   var kenniskeren = 0
   var kennistijd = 0
   var kennistijdslot = 0
   var keuzekeren = 0
   var ziekte = 0
   var lijsttrekker = "leeg"
   var begintijd = 0
   var tijd = 0
   var socialkeren = 0
   var speldatamodulespecifiek = "leeg"
   if (cookietype.indexOf("kgl_speldata") !== -1) {
    var spelspecifiekesaveversie = "KGL213"
   }
   else if (cookietype.indexOf("kgb_speldata") !== -1) {
    var spelspecifiekesaveversie = "KGB110"
   }
   else {
    var spelspecifiekesaveversie = "KGO213"
   }
   document.getElementById("versieopslaan").value = spelspecifiekesaveversie
   cookieinhoud = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + spelspecifiekesaveversie + ">" + begintijd + ">" + tijd + "|" + speldatamodulespecifiek
  }
 }
 else {
  alleenarray = true
 }
 if (spelmodule_afbeelding && lijsttrekker && lijsttrekker != "leeg") {
  var afbeelding = "Personages/" + lijsttrekker + ".png"
 }
 else { 
  var afbeelding = "Personages/Leeg.png"
 }
 document.getElementById("afbeelding").innerHTML="<img src='" + afbeelding + "' style='max-width:100%' onerror='this.onerror=null;geenafbeelding()'>"
 invulfunc("instellingensaveversie", instellingensaveversie)
 invulfunc("copyrightgezien", copyrightgezien)
 invulfunc("spelmodule", spelmodule)
 invulfunc("geluid", geluid)
 invulfunc("donkeremodus", donkeremodus)
 invulfunc("gekleurdetekst", gekleurdetekst)
 invulfunc("shell", shell)
 invulfunc("protocol", protocol)
 invulfunc("weergavemodus", weergavemodus)
 invulfunc("saveversie", saveversie)
 invulfunc("honger", honger)
 invulfunc("hongerkeren", hongerkeren)
 invulfunc("hongertijd", hongertijd)
 invulfunc("hongertijdslot", hongertijdslot)
 invulfunc("aandacht", aandacht)
 invulfunc("aandachtkeren", aandachtkeren)
 invulfunc("aandachttijd", aandachttijd)
 invulfunc("aandachttijdslot", aandachttijdslot)
 invulfunc("kennis", kennis)
 invulfunc("kenniskeren", kenniskeren)
 invulfunc("kennistijd", kennistijd)
 invulfunc("kennistijdslot", kennistijdslot)
 invulfunc("keuzekeren", keuzekeren)
 invulfunc("ziekte", ziekte)
 invulfunc("lijsttrekker", lijsttrekker)
 invulfunc("spelspecifiekesaveversie", spelspecifiekesaveversie)
 invulfunc("tijd", tijd)
 invulfunc("begintijd", begintijd)
 invulfunc("socialkeren", socialkeren)
 invulfunc("speldatamodulespecifiek", speldatamodulespecifiek)
 var arrayvoorkeur = document.getElementById("weergave_string").checked
 if (arrayvoorkeur) {
  weergaveveranderen(arrayvoorkeur)
 }
 else {
  weergaveveranderen(alleenarray)
 }
 document.getElementById("weergave_los").disabled = alleenarray
 document.getElementById("cookieinhoud").value = cookieinhoud
 if(cookietype.indexOf("instellingen") !== -1) {
  document.getElementById("versieopslaan_div").style.display="none"
  document.getElementById("output_div").style.display="none"
  document.getElementById("resultaten_los_instellingen").style.display="inline-block"
  document.getElementById("resultaten_los_spel").style.display="none"
  document.getElementById("afbeelding").style.display="none"
 }
 else {
  document.getElementById("versieopslaan_div").style.display="inline-block"
  document.getElementById("output_div").style.display="inline-block"
  document.getElementById("resultaten_los_instellingen").style.display="none"
  document.getElementById("resultaten_los_spel").style.display="inline-block"
  document.getElementById("afbeelding").style.display="inline-block"
 }
 document.getElementById("resultaten").style.display = "block"
}

function maakcookiestring(cookietype, saveversie) {
 if (document.getElementById("weergave_string").checked) {
  var cookieinhoud = document.getElementById("cookieinhoud").value
 }
 else {
  var versieopslaan = document.getElementById("versieopslaan").value
  if (cookietype == "kgo_instellingen") {
   var instellingensaveversie = document.getElementById("instellingensaveversie").value
   var copyrightgezien = document.getElementById("copyrightgezien").value
   var spelmodule = document.getElementById("spelmodule").value
   var geluid = document.getElementById("geluid").value
   var donkeremodus = document.getElementById("donkeremodus").value
   var gekleurdetekst = document.getElementById("gekleurdetekst").value
   var shell = document.getElementById("shell").value
   var protocol = document.getElementById("protocol").value
   var cookieinhoud = instellingensaveversie + ">" + copyrightgezien +  ">" + spelmodule + ">" + geluid + ">" + donkeremodus + ">" + gekleurdetekst + ">" + shell + ">" + protocol
  }
  else if (cookietype == "kgl_instellingen") {
   var instellingensaveversie = document.getElementById("instellingensaveversie").value
   var weergavemodus = document.getElementById("weergavemodus").value
   var spelmodule = document.getElementById("spelmodule").value
   var cookieinhoud = instellingensaveversie + ">" + weergavemodus + ">" + spelmodule
  }
  else {
   var saveversie = document.getElementById("saveversie").value
   var honger = document.getElementById("honger").value
   var hongerkeren = document.getElementById("hongerkeren").value
   var hongertijd = document.getElementById("hongertijd").value
   var hongertijdslot = document.getElementById("hongertijdslot").value
   var aandacht = document.getElementById("aandacht").value
   var aandachtkeren = document.getElementById("aandachtkeren").value
   var aandachttijd = document.getElementById("aandachttijd").value
   var aandachttijdslot = document.getElementById("aandachttijdslot").value
   var kennis = document.getElementById("kennis").value
   var kenniskeren = document.getElementById("kenniskeren").value
   var kennistijd = document.getElementById("kennistijd").value
   var kennistijdslot = document.getElementById("kennistijdslot").value
   var keuzekeren = document.getElementById("keuzekeren").value
   var ziekte = document.getElementById("ziekte").value
   var lijsttrekker = document.getElementById("lijsttrekker").value
   var speldatamodulespecifiek = document.getElementById("speldatamodulespecifiek").value
   var spelspecifiekesaveversie = document.getElementById("spelspecifiekesaveversie").value
   if (spelspecifiekesaveversie == "KGB110") {
    var socialkeren = document.getElementById("socialkeren").value
    var speldataspelspecifiek = spelspecifiekesaveversie + ">" + socialkeren
   }
   else {
    var begintijd = document.getElementById("begintijd").value
    var tijd = document.getElementById("tijd").value
    var speldataspelspecifiek = spelspecifiekesaveversie + ">" + begintijd + ">" + tijd
   }
   var cookieinhoud = saveversie + ">" + honger + ">" + hongerkeren + ">" + hongertijd + ">" + hongertijdslot + ">" + aandacht + ">" + aandachtkeren + ">" + aandachttijd + ">" + aandachttijdslot + ">" + kennis + ">" + kenniskeren + ">" + kennistijd + ">" + kennistijdslot + ">" + keuzekeren + ">" + ziekte + ">" + lijsttrekker + "|" + speldataspelspecifiek + "|" + speldatamodulespecifiek
  }
 }
 return cookieinhoud
}