 //__________Kamergotchi is oorspronkelijk bedacht door Arjen Lubach van het VPRO-programma Zondag met Lubach.__________\\
 //__________https://www.vpro.nl/zondag-met-lubach.html__________\\
 //__________Webpagina en programma door Thomas Greve, met delen van het internet__________\\

//__________Configuratiebestand voor Kamergotchi Online__________\\

function configfunc() {
//----------Shell----------\\
//Een overzicht van alle shells. De eerste waarde is een numerieke ID.
//De tweede waarde is de tekst voor de knop in het modulemenu.
//De derde waarde is de naam van het HTML-bestand van de shell.
shellsarray=[
"0",
"Kamergotchi Online",
"Frames/Standaard.html",
"3",
"Windows 3.1",
"Frames/Windows_3.html",
"6",
"Speciale pagina voor de Nintendo DS",
"Frames/Nintendo_ds.html"
]

//Schakelt het van shell wisselen aan en uit
shellswisselen = "aan"

//----------Modules----------\\
//Een overzicht van alle modules met erna de tekst die op de knop in het modulemenu moet
//Electron vindt de module voor de aangepaste kamergotchi niet leuk vanwege de popup-vensters.
if ((/Electron/i.test(navigator.userAgent) && /Chrome/i.test(navigator.userAgent) && window.location.protocol == "file:")) {
 spelmodulesarray =[
 "NL_2017",
 "Tweede Kamer Nederland 2017"
 ]
}
else {
 spelmodulesarray =[
 "NL_2017",
 "Tweede Kamer Nederland 2017",
 "NL_KEUZE",
 "Aangepaste Kamergotchi"
 ]
}

//Schakelt het van module wisselen aan en uit
moduleswisselen = "aan"

//----------Overe opties----------\\

//Schakelt de balk met de links naar de andere pagina's aan of uit
balkzichtbaar = "aan"

//Laat KGEdit zien op de balk met andere pagina's
KGEdit = "uit"

//Het versienummer van Kamergotchi Online
versie = "2.13"

//Het aantal vastgezette keuzes voor de drie behoeften (minimaal 1)
hongerkeuzes = 1
aandachtkeuzes = 1
kenniskeuzes = 1

// Het aantal vrije keuzes dat er iedere keer dat een behoefte word verlaagd bij komt
keuzes = 2

//Het maximale aantal beschikbare vrije keuzes
keuzegrens = 7

//De tijd tussen het naar beneden gaan van de behoeftes (bij het standaardinterval in minuten)
hongernaarbenedentijd = 5
aandachtnaarbenedentijd = 5
kennisnaarbenedentijd = 10

//Het interval van de functie die de tijd voor het naar beneden laten gaan van de behoeften bepaalt (ms)
interval = 1 * 60 * 1000

//De getallen waarmee de honger omlaag gaat.
//De middelste en laagste waarde komen het meeste voor, de hoge waarde minder.
hongeromlaaglaag = 1
hongeromlaagmiddel = 2
hongeromlaaghoog = 3

hongeromhooglaag = 1
hongeromhooghoog = 2

//De getallen waarmee de aandacht omlaag gaat.
//De middelste waarde komt het meest voor, gevolgd door de lage en dan de hoge.
aandachtomlaaglaag = 1
aandachtomlaagmiddel = 2
aandachtomlaaghoog = 3

aandachtomhoog = 2

//De getallen waarmee de kennis omlaag gaat.
//De lage waarde komt veel meer voor dan de hoge.
kennisomlaaglaag = 1
kennisomlaaghoog = 2

kennisomhooglaag = 1
kennisomhooghoog = 2

//De grens waaronder de Kamergotchi over een behoefte gaat klagen.
hongerlaag = 6
aandachtlaag = 6
kennislaag = 6

//De maximimgrens voor de behoeften. De minimumgrens is 0.
hongergrens = 40
aandachtgrens = 40
kennisgrens = 40

//De beginwaardes voor de drie behoeften.
hongerbasis = 20
aandachtbasis = 20
kennisbasis = 20

//Bepaalt wanneer de 1-aprilfunctie wordt gebruikt
if (new Date().getDate() == 1 && new Date().getMonth() == 3) {
 eenapril = "aan"
}
else {
 eenapril = "uit"
}

//Bepaalt na hoeveel rondes aandacht verlagen de Kamergotchi weer gezond wordt.
ziektetijd = 3

//De kans in procent dat een Kamergotchi ziek wordt.
//Dit kan iedere keer dat de aandacht naar beneden gaat gebeuren.
ziektekans = 5

//Zet ondersteuning voor HTTPS aan of uit.
// Dit is nooit nodig als hij als lokaal bestand draait, bijvoorbeeld in Electron of de HTA.
if (window.location.protocol == "file:") {
 HTTPSaan = "uit"
}
else{
 HTTPSaan = "aan"
}

//In een Electron-app staat dit altijd uit.
if (/Electron/i.test(navigator.userAgent) && /Chrome/i.test(navigator.userAgent) && window.location.protocol == "file:") {
 HTTPSaan = "uit"
}

//Zet ondersteuning voor de donkere modus aan of uit.
donkeraan = "aan"

//Zet de donkere modus als standaard in plaats van de lichte.
//Deze werkt niet als de donkere modus uit staat.
donkerstandaard = "uit"

//Stel in welke naam er onder het logo komt.
//Als het als HTA draait, is het Kamergotchi in plaats van Kamergotchi Online.
branding = "Kamergotchi_Online"
branding_titel = "Kamergotchi Online"
if ((/MSIE /i.test(navigator.userAgent) || /Trident/i.test(navigator.userAgent)) && window.location.protocol == "file:" && !/Opera /i.test(navigator.userAgent)) {
 branding = "Kamergotchi"
 branding_titel = "Kamergotchi"
 balkzichtbaar = "uit"
}
// Idem als het via Electron draait.
if (/Electron/i.test(navigator.userAgent) && /Chrome/i.test(navigator.userAgent) && window.location.protocol == "file:") {
 branding = "Kamergotchi"
 branding_titel = "Kamergotchi"
 balkzichtbaar = "uit"
}
}

//----------Andere functies waar de modules in voorkomen----------\\

//Standaardmodule doorgeven, deze is afhankelijk van de taal
function modulebepaalfunc(input) {
 var output
 if (input == "leeg") {
  output = "NL_2017"
  var userLang = navigator.language || navigator.browserLanguage
  // Talen met een eigen module hier controleren
 }
 else {
 output = input
 }
 return output
}

//Geeft de map van een module aan als deze afwijkt van module
function moduletestfunc(input) {
var output = input
return output
}

function moduleuittaalfunc(input) {
 var output = "NL_2017"
 return output
}

