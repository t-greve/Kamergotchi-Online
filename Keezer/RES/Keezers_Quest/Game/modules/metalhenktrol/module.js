function scenefunctie(){
personagepad = "modules/standaard/characters"
objectenpad = "modules/standaard/objects"
scenepad = "modules/standaard/scenes"
logopad = "modules/standaard/logo"
audiopad = "modules/metalhenktrol/audio"

if (partijen == "standaard") {
 partijen = '[' + 
 '{"code":"vvd","shortName":"VVD","longName":"VVD","wing":"right"},' +
 '{"code":"cda","shortName":"CDA","longName":"CDA","wing":"right"},' + 
 '{"code":"fvd","shortName":"FvD","longName":"Forum voor Democratie","wing":"right"},' +
 '{"code":"ja21","shortName":"JA21","longName":"JA21","wing":"right"},' +
 '{"code":"pvv","shortName":"PVV","longName":"PVV","wing":"right"},' +
 '{"code":"sgp","shortName":"SGP","longName":"SGP","wing":"right"},' +
 '{"code":"50plus","shortName":"50PLUS","longName":"50PLUS","wing":"right"},' +
 '{"code":"henk-krol","shortName":"Henk Krol","longName":"Henk Krol","wing":"right"},' +
 '{"code":"d66","shortName":"D66","longName":"D66","wing":"left"},' +
 '{"code":"pvda","shortName":"PvdA","longName":"Partij van de Arbeid","wing":"left"},' +
 '{"code":"pvdd","shortName":"PvdD","longName":"Partij voor de Dieren","wing":"left"},' +
 '{"code":"denk","shortName":"DENK","longName":"DENK","wing":"left"},' +
 '{"code":"cu","shortName":"CU","longName":"ChristenUnie","wing":"left"},' +
 '{"code":"bij1","shortName":"BIJ1","longName":"BIJ1","wing":"left"},' +
 '{"code":"gl","shortName":"GL","longName":"GroenLinks","wing":"left"},' +
 '{"code":"sp","shortName":"SP","longName":"SP","wing":"left"},'
 partijen = partijen.slice(0, -1) + ']'
}

scenes = '[' +
'{"party1":"vvd","party2":"cda",' +
'"choice1":"De herenliefde is natuurlijk niet verboden, maar als iemand behoefte heeft aan zo\'n magier dan heeft die het recht om er eentje te bezoeken.",' +
'"choice2":"Wat een zieke praktijk! Die magier zouden ze moeten opsluiten!","choice1Party":"cda","choice2Party":"vvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Midden in het bos, bij een groot vuur staat een [magier] tegen een jonkheer te schreeuwen."}},{"line":{"character":"magier-schreeuwend","text":"Treedt uit dit schepsel, het verlangen naar andere jonkheren, treedt uit! U zult genezen van uw lusten en spoedig een edele jonkvrouw trouwen! Buuhuuu!"}}],' +
'"prepareSequence":[{"status":["magier","schreeuwend"]}],' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"magier","flipped":false},{"name":"jonkheer","flipped":false}],"background":"bosopenplek","objects":[]},' + 

'{"party1":"vvd","party2":"pvda",' +
'"choice1":"Haha, die Hummer, gaaf man! Mooie vent.",' +
'"choice2":"Mobiliteit is belangrijk, maar we kunnen beter streven naar stille en duurzame alternatieven.","choice1Party":"vvd","choice2Party":"pvda",' +
'"enterSequence":[{"line":{"character":null,"text":"Je wandelt op je gemak door het rustige bos. Ineens word je bijna omver gereden door [Hendrik Hummer], een bekende bosproleet. Hij en zijn paarden laten een vieze walm achter."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"hummerkoets","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"vvd","party2":"d66",' +
'"choice1":"Wat vervelend! Weet je wat we doen, zodra ik in het dorp ben, ga ik even kijken of het lukt om vlakbij jullie eigen bos opvang te regelen.",' +
'"choice2":"Tuurlijk, wees welkom! Huilende kinderen zijn huilende kinderen en ons bos is jullie bos!","choice1Party":"vvd","choice2Party":"d66",' +
'"enterSequence":[{"line":{"character":null,"text":"Middenin het bos komen er twee huilende kinderen uit de struiken gekropen."}},{"line":{"character":"twee-huilende-kindjes","text":"Wij komen van een ver bos en ons kamp is afgebrand. Mogen wij hier blijven?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","blij"]},{"status":["twee-huilende-kindjes","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"twee-huilende-kindjes","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"vvd","party2":"cu",' +
'"choice1":"Moet kunnen toch, het is een vrij bos.",' +
'"choice2":"Bah! Dit is uitbuiting! En onzedelijk bovendien!","choice1Party":"vvd","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Je loopt door een weelderig loofbos. Ah kijk, een bordeel. Allerlei wezens van alle rassen en geslachten bieden hun waar op enthousiaste wijze aan. Zelfs aan [naamhondje]!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[],"background":"bospad*","objects":[{"name":"bordeel"}]},' + 

'{"party1":"vvd","party2":"gl",' +
'"choice1":"Prima joh! Doe lekker!",' +
'"choice2":"Nee Hossel! Niet doen, ik ga zorgen voor een beter vestingsklimaat! Ik hou je op de hoogte!","choice1Party":"gl","choice2Party":"vvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Daar komt [Hossel] aangelopen, de reizende, verongelijkte marskramer met een breed assortiment worst en haar-elixers."}},{"line":{"character":"marskramer","text":"Als de dividendbelasting niet wordt afgeschaft, zet deze jongen zijn kasteel in een ander bos!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"marskramer","flipped":false}],"background":"bospad*","objects":[{"name":"karmetspullen","attachedTo":"marskramer"}]},' + 

'{"party1":"vvd","party2":"sp",' +
'"choice1":"Dat snap ik, zo houden we zorg betaalbaar en kwalitatief op een hoog niveau!",' +
'"choice2":"In zo\'n bos wil ik niet leven, dit moet en kan anders!","choice1Party":"vvd","choice2Party":"sp",' +
'"enterSequence":[{"line":{"character":null,"text":"Je bent vanmorgen gestruikeld over een steen. Het bloed gutst eruit. Met je laatste krachten heb je de hut van de [chirurgijn] weten te bereiken."}},{"line":{"character":"chirurgijn","text":"Sorry, je zit bij het verkeerde gilde, daar heb ik geen zorgafspraken mee. Ik moet je hier wel iets voor in rekening brengen."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","strompelen"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","strompelen"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"chirurgijn","flipped":false}],"background":"dokterinterieur","objects":[]},' + 

'{"party1":"vvd","party2":"pvv",' +
'"choice1":"Je hebt helemaal gelijk, vriend! Ik reken nog steeds om naar kippen!",' +
'"choice2":"We kunnen niet meer uit de dukaat stappen. We kunnen alleen met de omringende bossen zorgen dat het een stabiele munt blijft.","choice1Party":"pvv","choice2Party":"vvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Aangekomen op een gezellig marktplein word je aangesproken door een ietwat gefrustreerde [medeklant]."}},{"line":{"character":"man-1","text":"Is het jou ook opgevallen dat alles veel duurder is geworden sinds we geld als betaalmiddel gebruiken? Breng de ruilhandel terug!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"man-1","flipped":false}],"background":"village","objects":[{"name":"kraampjebroden","attachedTo":"man-1"}]},' + 

'{"party1":"vvd","party2":"fvd",' +
'"choice1":"Zulke kwesties moet je toch niet aan zoveel lieden tegelijk overlaten, daar komt alleen maar verwarring van. Laat gewoon een paar wijze stamhoofden het beslissen!",' +
'"choice2":"Heel goed dat iedereen z\'n zegje mag doen. Wel zo eerlijk!  Succes allemaal!","choice1Party":"vvd","choice2Party":"fvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Bij een kampvuur zit een grote groep [bosbewoners] bijeen. Ze hebben een meningsverschil over de wintervoorraad. Er wordt druk door elkaar geschreeuwd."}},{"line":{"character":"groep-verschillende-wezens","text":"Zeg, wat vind jij ervan?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"groep-verschillende-wezens","flipped":false}],"background":"bosopenplek","objects":[]},' + 

'{"party1":"vvd","party2":"sgp",' +
'"choice1":"Goed punt, dan doe ik vandaag toch gewoon een keertje geen boodschappen.",' +
'"choice2":"Je doet je aankopen dan maar bij de andere handelaar.","choice1Party":"sgp","choice2Party":"vvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Midden in het bos krijgen jij en [naamhondje] enorme honger. Gelukkig komen er twee [handelaren] aan."}},{"line":{"character":"keezer","text":"Heeft u wat te eten?"}},{"line":{"character":"handelaar1","text":"Excuus, beste avonturier, maar ik verkoop vandaag geen spullen. Het is zondag, vandaar."}},{"line":{"character":"handelaar2","text":"Ik ben gewoon open hoor!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"inventory":"spullen"},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"handelaar1","flipped":false},{"name":"handelaar2","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"vvd","party2":"pvdd",' +
'"choice1":"Zeg, laat dat! Er is geen bos B, he?",' +
'"choice2":"Ik waardeer uw arbeidsethos, zo hard aan het werk! Wat schuift dat nou, dat hout van zo\'n boom?","choice1Party":"pvdd","choice2Party":"vvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [houthakker] is bezig een enorme eik om te hakken, om brandhout voor de winter te verzamelen. Je spreekt de beste man aan."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"line":{"character":"houthakker-met-bijl","text":"Een stuk minder dan vroeger!"}},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"hout-hakker-met-bijl","flipped":false}],"background":"boshouthakker","objects":[]},' + 

'{"party1":"vvd","party2":"ja21",' +
'"choice1":"Wat stom, [naamhondje], ik vind dat ze je een flinke zak dukaten zouden moeten geven!",' +
'"choice2":"Wat stom [naamhondje], gelukkig mag je dukaten lenen van de koning. Dan kan je dat later terugbetalen als je gaat werken als tovenaar!","choice1Party":"ja21","choice2Party":"vvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Vlakbij de toverschool kom je een jonge [student] tegen."}},{"line":{"character":"harry-potterachtig-mannetje","text":"Hoe heet jij?"}},{"line":{"character":"keezer","text":"Ik heet Keezer, en jij?"}},{"line":{"character":"harry-potterachtig-mannetje","text":"Ik heet [naamhondje]."}},{"line":{"character":"keezer","text":"Wat grappig, zo heet mijn hondje ook! Waar ga je heen?"}},{"line":{"character":"harry-potterachtig-mannetje","text":"Ik ga naar de toverschool, maar het is nog maar de vraag of ik rond kan komen. Het is zo duur!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"line":{"character":"keezer","text":"Kom, [naamhondje]!"}},{"move":["student","offscreen"],"fast":false},{"line":{"character":"keezer","text":"Nee, niet jij [naamhondje], ik had het tegen [naamhondje]!"}}],' +
'"party2Sequence":[{"line":{"character":"keezer","text":"Kom, [naamhondje]!"}},{"line":{"character":"keezer","text":"Nee, niet jij [naamhondje], ik had het tegen [naamhondje]!"}}],"characters":[{"name":"harry-potterachtig-mannetje","flipped":false}],"background":"kasteel","objects":[]},' + 

'{"party1":"vvd","party2":"bij1",' +
'"choice1":"Dat weet ik niet vriend, niks mis met wat variatie, maar ik heb meer de neiging om voor kwaliteit te gaan: het juiste wezen op de juiste plek.",' +
'"choice2":"Tuurlijk! Iedereen krijgt een plek aan tafel! Voor de centaurs vinden we wel een aangepaste stoel ofzo. Komt goed!","choice1Party":"vvd","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"Je wandelt al uren door het bos. [naamhondje] heeft dorst. Bij de drinkplaats staat een cisgender [centaur] wat te mopperen."}},{"line":{"character":"centaur","text":"Er moet een commissie komen die ervoor zorgt dat er precies evenveel orks, elfen, en centaurs in de bosraad zitten!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"line":{"character":"keezer","text":"fijne dag!"}},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"keezer","text":"fijne dag!"}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"centaur","flipped":false}],"background":"meertje","objects":[]},' + 

'{"party1":"vvd","party2":"50plus",' +
'"choice1":"Nee Geriandalf, je moet doorwerken, anders wordt het onbetaalbaar. We kunnen niet heksen!",' +
'"choice2":"Mee eens, Geriandalf! 650 blijft 650!","choice1Party":"vvd","choice2Party":"50plus",' +
'"enterSequence":[{"line":{"character":null,"text":"Plots staat [Geriandalf de Magier] voor je neus."}},{"line":{"character":"magier","text":"Ik ben nu 650, maar eigenlijk zou ik nog moeten doorwerken tot ik 680 ben. Dat zou toch niet moeten mogen? Magier is een zwaar beroep!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"line":{"character":"keezer","text":"fijne dag!"}},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"keezer","text":"fijne dag!"}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"magier","flipped":false}],"background":"ruine","objects":[]},' + 

'{"party1":"vvd","party2":"henk-krol",' +
'"choice1":"Dat is inderdaad een hele mooie grafiek, Henk. Wat zie ik precies?",' +
'"choice2":"Laat me met rust, idioot.","choice1Party":"henk-krol","choice2Party":"vvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Wederom schalt de stem van [Henk Trol] door het bos. Het olijke monster staat pal voor je neus en haalt een verfomfaaid perkamentje uit zijn binnenzak."}},{"line":{"character":"henk-trol","text":"Daar ben ik weer! Kijk eens wat een mooie grafiek!"}}],' +
'"prepareSequence":[{"status":["henk-trol","perkamentje"]}],' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"henk-trol","text":"Blablablakoopkrachtblablabla."}},{"line":{"character":"henk-trol","text":"Blablabla."}},{"line":{"character":"henk-trol","text":"Blablabla."}},{"status":["keezer","blij"]}],"characters":[{"name":"henk-trol","flipped":false}],"background":"boszonsondergang","objects":[]},' + 

'{"party1":"vvd","party2":"denk",' +
'"choice1":"Pleur op!",' +
'"choice2":"Mooie banier heeft u daar mevrouw, ik heb \'m zelf ook.","choice1Party":"vvd","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Je steekt een rivier over. Op de brug staat een [bosnimf] met een banier."}},{"line":{"character":"bosnimf","text":"Leve de tovenaar van Erdokan! Ook al woon ik hier, hij blijft onze leider!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"keezer","text":"fijne dag!"}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"bosnimf","flipped":false}],"background":"brug","objects":[{"name":"banier","attachedTo":"bosnimf"}]},' + 

'{"party1":"cda","party2":"pvda",' +
'"choice1":"Doe zo voort landkabouters! Zonder jullie zou het bos maar saai zijn.",' +
'"choice2":"Met alle respect voor de yoghurt, we moeten van de giftige dampen af.","choice1Party":"cda","choice2Party":"pvda",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [landkabouter] heeft een melkfee-houderij. Iedere melkfee tovert yoghurt tevoorschijn. Hierdoor komen giftige dampen vrij, maar de yoghurt is heerlijk."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"line":{"character":"landkabouter","text":"Dankjewel, hier heb je wat yoghurt. Ook lekker met brandnetelsoep, want dat is het enige wat hier verder nog groeit."}},{"inventory":"yoghurt"},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"keezer","text":"Snel weg hier! De Farmers Defence Orks komen achter je aan!"}},{"move":["keezer","offscreen"],"fast":true}],"characters":[{"name":"landkabouter","flipped":false}],"background":"boerderij","objects":[]},' + 

'{"party1":"cda","party2":"d66",' +
'"choice1":"Je halveert de buurman, een boer mag zelf weten hoeveel koeien hij heeft.",' +
'"choice2":"Je pakt de bijl af en halveert de boer. Ook wel eens goed.","choice1Party":"cda","choice2Party":"d66",' +
'"enterSequence":[{"line":{"character":null,"text":"Jeetje, deze boerderij zorgt voor een hoop kabaal!"}},{"line":{"character":"boer","text":"Help! Mijn buurman wil mijn koe halveren!"}},{"line":{"character":"buurman-met-bijl","text":"Je hebt veel te veel koeien! Die lucht is niet te harden!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","buurman-met-bijl"],"fast":false},{"status":["buurman-met-bijl","zonderbijl"]},{"status":["keezer","haktmetbijl"]},{"status":["buurman-met-bijl","doormidden"]},{"status":["boer","blij"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","boer"],"fast":false},{"status":["buurman-met-bijl","zonderbijl"]},{"status":["keezer","haktmetbijl"]},{"status":["boer","doormidden"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"boer","flipped":false},{"name":"buurman-met-bijl","flipped":false}],"background":"boerderij","objects":[{"name":"koe"}]},' + 

'{"party1":"cda","party2":"cu",' +
'"choice1":"Fijn, ik pak even een moment om Barry te eren. Barry is de weg.",' +
'"choice2":"Ik loop lekker door. Barry is groot, ere zij Barry, maar ik ben nu even druk.","choice1Party":"cu","choice2Party":"cda",' +
'"enterSequence":[{"line":{"character":null,"text":"Op deze zonovergoten plek in het bos staat het beeld van [Barry], de zoon van een god."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","standbeeld"],"fast":false},{"status":["keezer","bidt"]},{"wait":true},{"status":["keezer","neutraal"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"standbeeld","flipped":false}],"background":"boshouthakker","objects":[]},' + 

'{"party1":"cda","party2":"gl",' +
'"choice1":"Welnee, stelletje bosdrammers! We moeten de boerderijen redden! Geen boer, geen voer! We branden het bos plat!",' +
'"choice2":"Goed punt, dwergenvrienden! Kom! We redden het bos, we branden de boerderijen plat!","choice1Party":"cda","choice2Party":"gl",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos staan enkele [Groene Dwergen]. Ze zijn ziedend!"}},{"line":{"character":"drie-groene-dwergen","text":"Dit stuk bos is helemaal dor en droog door de giftige damp van de boerderijen. We moeten het bos redden!"}}],' +
'"prepareSequence":[{"disappear":"vuuropgrond"}],' +
'"party1Sequence":[{"hold":"fakkel"},{"wait":true},{"hold":"-fakkel"},{"appear":"vuuropgrond"},{"wait":true},{"move":["keezer","offscreen"],"fast":true}],' +
'"party2Sequence":[{"hold":"fakkel"},{"move":["keezer","offscreen"],"fast":false},{"move":["drie-groene-dwergen","offscreen-rechts"],"fast":false}],"characters":[{"name":"drie-groene-dwergen","flipped":false}],"background":"bospad*","objects":[{"name":"vuuropgrond"}]},' + 

'{"party1":"cda","party2":"sp",' +
'"choice1":"Goed idee Frank de boer, jij weet zelf wat het beste is voor je bedrijf!",' +
'"choice2":"Voor wat het waard is Frank: ik ben een tegenstander van de doorgeschoten industrialisatie van de agrarische sector met eindeloze schaalvergroting en excessen als megastallen.","choice1Party":"cda","choice2Party":"sp",' +
'"enterSequence":[{"line":{"character":null,"text":"[naamhondje] begint te blaffen naar een man met een koe. [Boer Frank] is met zijn koe op weg naar de veemarkt."}},{"line":{"character":"boer","text":"Ik ga nog meer koeien kopen, hoe meer dieren hoe beter!"}}],' +
'"prepareSequence":[{"status":["hondje","blaft"]}],' +
'"party1Sequence":[{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"boer","flipped":false}],"background":"brug","objects":[{"name":"koe","attachedTo":"boer"}]},' + 

'{"party1":"cda","party2":"pvv",' +
'"choice1":"Je mag best het bos in, als je maar wel alle coupletten van het Boslied uit je hoofd kent.",' +
'"choice2":"Wegwezen! Het bos is van de bosbewoners!","choice1Party":"cda","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"Een groepje [bosnimfen] staat aan de bosrand en vraagt of ze jouw bos binnen mogen komen. Ze zijn duidelijk niet van hier."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","fluit"]},{"line":{"character":"keezer","text":"Papa, ik lijk steeds meer op jou!"}}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"flip":"keezer"},{"move":["keezer","offscreen-links"],"fast":false}],"characters":[{"name":"groepbosnimfen","flipped":false}],"background":"bosrand","objects":[]},' + 

'{"party1":"cda","party2":"fvd",' +
'"choice1":"Interessant, waar kan ik me abonneren?",' +
'"choice2":"Pffff... Ik luister liever naar Paulus de NOS-kabouter.","choice1Party":"fvd","choice2Party":"cda",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [prinsje] staat met een roeptoeter zijn eigen nieuws rond te schreeuwen."}},{"line":{"character":"baudetachtige-figuur-met-roeptoeter","text":"De partijkwartel heeft lang genoeg aan het roer gestaan!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"baudetachtige-figuur-met-roeptoeter","text":"Stuur maar een postduif, dan komt het allemaal goed."}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"baudetachtige-figuur-met-roeptoeter","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"cda","party2":"sgp",' +
'"choice1":"Uit voorzorg doe je een schietgebedje voor de aanwezigen en loop je met een grote boog, vol respect, om de kerk heen.",' +
'"choice2":"Juist nu is de kerk belangrijk als plek van hoop en troost. Je pakt nog even wat van de prachtige liederen mee.","choice1Party":"cda","choice2Party":"sgp",' +
'"enterSequence":[{"line":{"character":null,"text":"Na een prachtige zonsopgang kom je aan bij een kerkje, middenin het bos. Het verbaast je dat het kerkje zo vol zit, nu er ook een plaag in het land heerst."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","bidt"]},{"wait":true},{"status":["keezer","neutraal"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","kerkje"],"fast":false},{"status":["keezer","opderug"]},{"wait":true},{"status":["keezer","neutraal"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[],"background":"kerkjeinhetbos","objects":[]},' + 

'{"party1":"cda","party2":"pvdd",' +
'"choice1":"Wat heerlijk, beste kastelein, dat wordt smullen!",' +
'"choice2":"Haha, heel aardig, maar nee dank u. Heeft u ook iets van knolraap wellicht?","choice1Party":"cda","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Uitgeput van het vele wandelen kom je aan bij Herberg Den Gulden Draeck. De [herbergier] verwelkomt je met een vers bereid maal, namelijk een heerlijk everzwijn."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","blij"]}],' +
'"party2Sequence":[{"line":{"character":"herbergier","text":"Nee, sorry."}},{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"herbergier","flipped":false}],"background":"herberginterieur","objects":[]},' + 

'{"party1":"cda","party2":"ja21",' +
'"choice1":"Schande! De boswachter zou eerst de bewoners moeten raadplegen voor hij zo\'n ingrijpend besluit neemt.",' +
'"choice2":"Dat mag de boswachter doen. Hij wordt eens in de vier jaar gekozen.","choice1Party":"ja21","choice2Party":"cda",' +
'"enterSequence":[{"line":{"character":null,"text":"Je had je verheugd op die trotse oude knotwilg die hier al eeuwenlang stond, maar zo te zien is die onlangs door de boswachter omgehakt."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[],"background":"boshouthakkeromgehakt","objects":[]},' + 

'{"party1":"cda","party2":"bij1",' +
'"choice1":"Tja, zo werkt het... Als er vraag is, dan wordt het aanbod duurder en gaat de prijs omhoog. Doet u maar een nieuw zwaard!",' +
'"choice2":"Wat zit de wereld ook walgelijk in elkaar. Wie is er weer de dupe? De gewone avonturier!","choice1Party":"cda","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"Aangekomen in het dorp ga je meteen op zoek naar de [ijzersmid] voor een nieuw zwaard. Wat blijkt, zwaarden kosten ineens drie keer zoveel als een paar maanden geleden! Volgens de smid is dat omdat het avonturenseizoen is aangebroken."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","zwaard"],"fast":false},{"give":"dukaat"},{"wait":true},{"disappear":"zwaard"},{"hold":"zwaard"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"smid","flipped":false}],"background":"village","objects":[{"name":"zwaard","attachedTo":"smid"}]},' + 

'{"party1":"cda","party2":"50plus",' +
'"choice1":"Je betaalt het graag. Eigenlijk nog goedkoop als je bedenkt dat [naamhondje] alle sneeuwklokjes in het bos heeft opgegeten.",' +
'"choice2":"Waar slaat dit op?! Door [naamhondje] krijg ik tenminste nog een beetje beweging en ben ik minder eenzaam. Beetje raar om daarvoor te moeten betalen.","choice1Party":"cda","choice2Party":"50plus",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt bij een brug over de rivier. Van de [brugwachter] mag je gratis de brug over, maar voor [naamhondje] moet je 20 goudstukken betalen."}}],' +
'"prepareSequence":[{"disappear":"hondendrol"}],' +
'"party1Sequence":[{"move":["keezer","hondendrol"],"fast":false},{"status":["hondje","poepend"]},{"wait":true},{"appear":"hondendrol"},{"status":["hondje","staand"]},{"line":{"character":"keezer","text":"Is voor betaald!"}},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["brugwachtertrol","confused"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"brugwachtertrol","flipped":false}],"background":"brug","objects":[{"name":"hondendrol"}]},' + 

'{"party1":"cda","party2":"henk-krol",' +
'"choice1":"Interessant, vertel verder.",' +
'"choice2":"Wegwezen, ouwe gek!","choice1Party":"henk-krol","choice2Party":"cda",' +
'"enterSequence":[{"line":{"character":null,"text":"Midden op de brug kom je [Henk Trol] weer tegen."}},{"status":["henk-trol","neutraal"]},{"line":{"character":"henk-trol","text":"Daaaaaar ben ik weer! Henk Trol!"}},{"line":{"character":"keezer","text":"Zat jij niet bij Trollen voor de Toekomst, die afsplitsing van de Vijftig Plunderaars?"}},{"line":{"character":"henk-trol","text":"Nee, joh, dat was niks, ik ben voor mezelf begonnen."}}],' +
'"prepareSequence":[{"status":["henk-trol","danst"]}],' +
'"party1Sequence":[{"status":["henk-trol","boos"]},{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"henk-trol","text":"BlablablaAOWblablabla."}},{"line":{"character":"henk-trol","text":"Blablabla"}},{"status":["keezer","blij"]}],"characters":[{"name":"henk-trol","flipped":false}],"background":"brug","objects":[]},' + 

'{"party1":"cda","party2":"denk",' +
'"choice1":"Tja, niet fraai natuurlijk, maar hij heeft het bos wel op de kaart gezet.",' +
'"choice2":"Weg met dat beeld, de Koene Ridder was een moordenaar!","choice1Party":"cda","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt langs een gouden beeld van [Jan-Pieter de Koene Ridder]. Lang geleden heeft hij een hele kolonie elfjes neergestoken met een zwaard."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["jp-coenachtig-standbeeld","knipoog"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","jp-coenachtig-standbeeld"],"fast":false},{"status":["jp-coenachtig-standbeeld","omgevallen"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"jp-coenachtig-standbeeld","flipped":false}],"background":"boshouthakker","objects":[]},' + 

'{"party1":"pvda","party2":"d66",' +
'"choice1":"Slecht idee prins! Paddenstoelenmelkers moeten worden aangepakt!",' +
'"choice2":"Op zich moet dat kunnen, ondernemers zijn ondernemers. Maar als ik jou was zou ik geen heel hoge huren vragen.","choice1Party":"pvda","choice2Party":"d66",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos hoor je ineens luid geratel en gepiep. Kijk, daar heb je [prins Berenhart Junior]. De prins die erom bekend staat dat hij 600 paddenstoelen heeft. 600!"}},{"status":["hondje","blaft"]},{"line":{"character":"prins-berenhart-junior","text":"Keezer, er komen weer paddenstoelen vrij. Zal ik ze kopen? Wat denk jij?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"prins-berenhart-junior","flipped":false}],"background":"bospad*","objects":[{"name":"karmetbril","attachedTo":"prins-berenhart-junior"}]},' + 

'{"party1":"pvda","party2":"cu",' +
'"choice1":"Geen probleem, ik ga zorgen dat je wordt ondersteund met huisvesting, je opleiding en de opvoeding van het kind!",' +
'"choice2":"Geen probleem! Ga naar het Ab Ortushaus. Daar kunnen ze het kind wegtoveren.","choice1Party":"cu","choice2Party":"pvda",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [tienerdwerg] staat te huilen."}},{"line":{"character":"tienermoedertje","text":"Oh Keezer, ik ben zwanger, maar ik ben zelf nog maar zo klein!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["tienermoedertje","gestopt-huilen"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["tienermoedertje","gestopt-huilen"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"tienermoedertje","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"pvda","party2":"gl",' +
'"choice1":"Ik zie eigenlijk geen verschil, dan kies ik gewoon voor de vrouw. Ook wel weer eens leuk.",' +
'"choice2":"Ik zie eigenlijk geen verschil, maar die jongeman met z\'n krullen en opgestroopte malienkolder spreekt me gewoon wel aan.","choice1Party":"pvda","choice2Party":"gl",' +
'"enterSequence":[{"line":{"character":null,"text":"Twee tuinders zamelen geld in voor hun tuinencomplex. De [vrouw] zamelt geld in voor het Wouterbos, dat vol staat met rode rozen en prachtige leliebloempjes. In de tuin van de [man] vind je vooral besseklavertjes. De rozen hebben ze niet, die zijn gesloopt door de Rozenmoller. Maar verder zijn de twee tuinen vrijwel identiek."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","poppetje-dat-lijkt-op-lillianne-ploumen"],"fast":false},{"give":"dukaat"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","poppetje-dat-lijkt-op-jesse-klaver"],"fast":false},{"give":"dukaat"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"poppetje-dat-lijkt-op-jesse-klaver","flipped":false},{"name":"poppetje-dat-lijkt-op-lillianne-ploumen","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"pvda","party2":"sp",' +
'"choice1":"Hadden die lui maar wat meer dukaten te besteden!",' +
'"choice2":"Wat een geldverspillend gedoe, dat leger van de koning. Wat mij betreft geeft de koning zijn dukaten liever uit aan andere dingen!","choice1Party":"pvda","choice2Party":"sp",' +
'"enterSequence":[{"line":{"character":null,"text":"Een peleton [soldaten] van de koning komt door het bos gemarcheerd. Omdat ze te weinig harnassen hebben moeten de soldaten zelf een \'klingeltsjing\'-geluid maken bij het lopen."}}],' +
'"prepareSequence":[{"status":["soldaten","marcherend"]}],' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"soldaten","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"pvda","party2":"pvv",' +
'"choice1":"Waarom niet? Samenwerken is niet alleen krijgen, maar ook geven. Als die bossen er klaar voor zijn, dan verdienen ze een kans.",' +
'"choice2":"En dan nog meer geld van ons bos naar andere, arme bossen zeker? Heel slecht plan! Tijd voor een Heksit!","choice1Party":"pvda","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt aan in het dorp. De [Raad van Bosbewoners] staat druk te discussieren."}},{"line":{"character":"raadsleden","text":"Er willen nieuwe bossen bij onze Bosunie. Zowel het Noord-Macaronische Heksenbos als het Toverkollenbos van Albanaanie hebben aangegeven er wel bij te willen horen."}},{"line":{"character":"raadsleden","text":"Is dat wel slim?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"raadsleden","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"pvda","party2":"fvd",' +
'"choice1":"O bedankt voor de tip! Ik gruwel ook van die vreselijke nieuwbouw.",' +
'"choice2":"En wat dan nog! Er zijn veel te weinig woningen in het bos, en er moet snel bijgebouwd worden. Eikenhout of geen eikenhout!","choice1Party":"fvd","choice2Party":"pvda",' +
'"enterSequence":[{"line":{"character":null,"text":"Je bent onderweg naar het dorp. Midden in het bos ligt ineens een jonge [prins] naakt op de rand van een clavecimbel."}},{"line":{"character":"naakte-liggende-prins","text":"Hallo meneer. Als ik u was zou ik niet naar het dorp gaan. Ze hebben daar een paar vreselijk moderne gebouwen neergezet, van eikenhout!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"naakteliggendeprins","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"pvda","party2":"sgp",' +
'"choice1":"Goed idee! Samenwerking met andere bossen, ja. Maar een superbos? Nee.",' +
'"choice2":"Je mag van mij zoeken, maar wij gaan echt de dukaatzone niet meer uit.","choice1Party":"sgp","choice2Party":"pvda",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [goudzoeker] is een gat aan het graven."}},{"line":{"character":"goudzoeker-met-schep","text":"Ik zoek een alternatief voor de dukaat. Zo\'n gezamenlijke munt met alle bossen werkt volgens mij niet."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"goudzoeker-met-schep","flipped":false}],"background":"bospad3","objects":[]},' + 

'{"party1":"pvda","party2":"pvdd",' +
'"choice1":"Natuurlijk, rode ridder! Prachtige roos, dank u!",' +
'"choice2":"Nou, ik wil vooral graag weten of die roos niet bespoten is met ongedierte-elixers!","choice1Party":"pvda","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [ridder] in een rood windharnas staat rode rozen uit te delen."}},{"line":{"character":"rode-ridder-met-rode-roos","text":"Dag, ik ben van het arbeidersgilde! Wilt u een mooie roos?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","rode-ridder-met-rode-roos"],"fast":false},{"inventory":"roos"},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"rode-ridder-met-rode-roos","text":"Eh... ik heb geen idee, excuus!"}},{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"rode-ridder-met-rode-roos","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"pvda","party2":"ja21",' +
'"choice1":"Zo snel mogelijk sluiten! Vulkanenenergie is niet duurzaam en onveilig.",' +
'"choice2":"Meer vulkanen bijbouwen! Veel beter dan zo\'n ouderwetse kolenvulkaan.","choice1Party":"pvda","choice2Party":"ja21",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt bij de rokende vulkaan Foekoeshiema. De [vulkaanwachter] houdt je tegen."}},{"line":{"character":"vulkaanwachter","text":"Dag Keezer! Wat vind jij dat we met deze vulkaan moeten doen?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["vulkaan","stoptmetroken"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["vulkaan","barstuit"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"vulkaanwachter","flipped":false}],"background":"vulkaan","objects":[{"name":"vulkaan"}]},' + 

'{"party1":"pvda","party2":"bij1",' +
'"choice1":"Wat een mooie toespraak! Je blijft aandachtig luisteren.",' +
'"choice2":"Haar intententies zijn goed hoor, in principe met alles eens, maar eh... hoe lang gaat dit nog duren, joh! Op een gegeven moment moet ik ook weer aan het werk.","choice1Party":"bij1","choice2Party":"pvda",' +
'"enterSequence":[{"line":{"character":null,"text":"Een gepassioneerde [mevrouw] houdt een toespraak op een boomstronk."}},{"line":{"character":"vrouw-op-boomstronk","text":"Iedereen is gelijk! Donker en lichtgekleurd! Klein en groot! Arm en rijk! Dik en dun! Blauwe wezens en oranje wezens! Tovenaars met een lange baard en tovenaars met een korte baard! Centaurs en degenen die juist niet centaur zijn! Of je nou Kenderwald heet of Qenderwalt! Of je lievelingswapen nou een speer is of een hellebaard!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"vrouw-op-boomstronk","text":"Of je nou een ork bent, of een oger."}},{"line":{"character":"vrouw-op-boomstronk","text":"Of je nou van kervel houdt, of dille."}},{"line":{"character":"vrouw-op-boomstronk","text":"Of je nou wandelt, of kuiert. Of je nou..."}},{"status":["keezer","blij"]}],"characters":[{"name":"vrouw-op-boomstronk","flipped":false}],"background":"meertjezonsondergang","objects":[]},' + 

'{"party1":"pvda","party2":"50plus",' +
'"choice1":"Slecht plan. Ik kies eens in de 4 jaar een raad van elven en die kiest de boswachter. Dat moet zo blijven.",' +
'"choice2":"Ik heb een gekozen boswachter altijd al een goed idee gevonden. Mijn stem heb je!","choice1Party":"pvda","choice2Party":"50plus",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos staat de [boswachter] flyers uit te delen."}},{"line":{"character":"boswachter","text":"Stem op mij als boswachter!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"boswachter","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"pvda","party2":"henk-krol",' +
'"choice1":"Dat mag zeker, daar wil ik alles over horen!",' +
'"choice2":"Ik draag de ouderen een warm hart toe, maar ik vind je gewoon een beetje een rare trol, Henk.","choice1Party":"henk-krol","choice2Party":"pvda",' +
'"enterSequence":[{"line":{"character":null,"text":"Je ziet een oude trol een mal dansje doen. Het is [Henk Trol]."}},{"status":["henk-trol","neutraal"]},{"line":{"character":"henk-trol","text":"Dag, mag ik jou iets vertellen over het lot van de ouderen in het bos?"}}],' +
'"prepareSequence":[{"status":["henk-trol","danst"]}],' +
'"party1Sequence":[{"status":["henk-trol","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"henk-trol","text":"Blablablagrafiekjeblablabla."}},{"status":["keezer","blij"]}],"characters":[{"name":"henk-trol","flipped":false}],"background":"boszonsondergang","objects":[]},' + 

'{"party1":"pvda","party2":"denk",' +
'"choice1":"Mooie plek. En belangrijk de Feenocide te erkennen.",' +
'"choice2":"Schande! Er is nooit sprake geweest van een gemene feenocide. Hooguit een gemene kwestie.","choice1Party":"pvda","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Midden in het bos staat een [gedenksteen]. Ter herinnering aan de Gemene Feenocide, waarbij een groot nimfenrijk hun buurland heeft uitgemoord."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","gedenksteen"],"fast":false},{"status":["keezer","opderug"]},{"wait":true},{"status":["keezer","neutraal"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[],"background":"bospad*","objects":[{"name":"gedenksteen"}]},' + 

'{"party1":"d66","party2":"cu",' +
'"choice1":"Je accepteert haar wens en reikt haar de paddenstoel aan. Iedereen mag dat voor zichzelf bepalen.",' +
'"choice2":"Maar vrouw! Je kunt nog vanalles proberen om het leven te rekken. Ga bijvoorbeeld eens zeven jaar wonen in het Rijk der Piramides!","choice1Party":"d66","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Een oude [poetsvrouw] ligt midden op het pad te kermen bij haar emmer. Het leven is haar niet meer naar de zin."}},{"line":{"character":"oude-liggende-vrouw","text":"Geef mij die giftige paddenstoel daar eens aan, dan houd ik het voor gezien op deez\' aard. Het is mooi geweest."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","paddestoel"],"fast":false},{"hold":"paddestoel"},{"disappear":"paddestoel"},{"move":["keezer","oude-liggende-vrouw"],"fast":false},{"hold":"-paddestoel"},{"status":["oude-liggende-vrouw","dood"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["vrouw","boos (cu)"]},{"line":{"character":"oude-liggende-vrouw","text":"Harteloze klootzak!"}},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oude-liggende-vrouw","flipped":false}],"background":"bospad*","objects":[{"name":"emmer","attachedTo":"oude-liggende-vrouw"},{"name":"paddestoel"}]},' + 

'{"party1":"d66","party2":"gl",' +
'"choice1":"Fijn dat werknemers zo goed beschermd zijn!",' +
'"choice2":"Belachelijk! Een bedrijf moet iedereen gewoon kunnen ontslaan als ze hun werk niet goed doen!","choice1Party":"gl","choice2Party":"d66",' +
'"enterSequence":[{"line":{"character":null,"text":"Je zit in de herberg te wachten op je drankje."}},{"move":["cycloop","keezer"],"fast":false},{"line":{"character":"cycloop","text":"Hier is uw brandewijn!"}},{"status":["cycloop","brandewijngevallen"]},{"line":{"character":"cycloop","text":"Sorry!"}},{"line":{"character":"herbergier","text":"Sorry beste klant, die cycloop is niet zo goed in zijn werk, maar ik mag hem niet zomaar ontslaan."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["cycloop","woedend"]},{"move":["keezer","offscreen"],"fast":true}],' +
'"party2Sequence":[{"status":["cycloop","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"cycloop","flipped":false},{"name":"herbergier","flipped":false}],"background":"herberginterieur","objects":[]},' + 

'{"party1":"d66","party2":"sp",' +
'"choice1":"Niks daarvan Melvin, de bosunie is de enige mogelijkheid om een gezamelijke vuist te maken tegen bedreigingen als Bigteg, de dataverslindende vampier.",' +
'"choice2":"Ik heb hier niet per se om gevraagd Melvin, maar ik ben het er wel mee eens!","choice1Party":"d66","choice2Party":"sp",' +
'"enterSequence":[{"line":{"character":null,"text":"Je staat in de herberg een heerlijk drankje te nuttigen. Dan begint [Melvin, het Ongevraagde Meningenmonster] tegen je te praten."}},{"line":{"character":"melvin-het-meningenmonster","text":"De samenwerking in de bosunie is mislukt. We willen de grip op ons eigen bos terug."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["melvin-het-meningenmonster","duim"]}],"characters":[{"name":"melvin-het-meningenmonster","flipped":false},{"name":"bargasten","flipped":false}],"background":"herberginterieur","objects":[]},' + 

'{"party1":"d66","party2":"pvv",' +
'"choice1":"Hoe maakt u het chirurgijn? Waar het om gaat: mijn enkel doet pijn.",' +
'"choice2":"Wacht eens even, wie heeft deze bosnimf toestemming gegeven om hier chirurgijn te worden? Straks komen ze hier allemaal om chirurgijn te worden. En dan?","choice1Party":"d66","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"Je hebt al een tijd last van je enkel. Al dat lopen maakt het niet beter. In het dorp besluit je binnen te stappen bij een chirurgijn. De [chirurgijn] blijkt een bosnimf te zijn uit een ver, ver bos. Zo te horen is hij niet geboren onder de grote eik, zeg maar."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","chirurgijnbosnimf"],"fast":false},{"status":["keezer","healing"]},{"wait":true},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","strompelen"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"chirurgijnbosnimf","flipped":false}],"background":"dokterinterieur","objects":[]},' + 

'{"party1":"d66","party2":"fvd",' +
'"choice1":"Ze zouden al die mensen uit die carroussel moeten trappen zodat wij er een keertje in kunnen.",' +
'"choice2":"Ze hebben gewoon eerlijk kaartjes gekocht en zo werkt het nu eenmaal! Het staat iedereen vrij om een eigen attractie te beginnen, wat houdt je tegen?","choice1Party":"fvd","choice2Party":"d66",' +
'"enterSequence":[{"line":{"character":null,"text":"Op het marktplein is een kermis gaande. Er zitten vooral veel mensen in de baantjescarrousel. Vanaf de zijkant schreeuwen [dorpsbewoners] ze toe."}},{"line":{"character":"dorpsbewoners","text":"Wij willen ook een keertje!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"dorpsbewoners","flipped":false}],"background":"village","objects":[{"name":"carrousel"}]},' + 

'{"party1":"d66","party2":"sgp",' +
'"choice1":"De misdadiger!",' +
'"choice2":"De oudere natuurlijk.","choice1Party":"sgp","choice2Party":"d66",' +
'"enterSequence":[{"line":{"character":null,"text":"Het is een zonnige middag op het dorpsplein. Een [beul] heeft bijna weekend. Hij heeft nog maar tijd voor een enkele executie."}},{"line":{"character":"beul","text":"Zeg het maar, wie moet er dood? De [misdadiger], of de oude [kabouter] die het allemaal wel gezien heeft?"}},{"line":{"character":"kabouter","text":"Maak me dood, alstublieft! Ik ben zo oud, ik wil niet meer!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["beul","kabouter"],"fast":false},{"status":["kabouter","onthoofd"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["beul","misdadiger"],"fast":false},{"status":["misdadiger","onthoofd"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"beul","flipped":false},{"name":"kabouter","flipped":false},{"name":"misdadiger","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"d66","party2":"pvdd",' +
'"choice1":"Snel sluiten die tent! Dan regelen we wel iets dat jullie geen honger lijden!",' +
'"choice2":"Snel sluiten die tent! Wie hermelijnen houdt was sowieso al misdadig bezig!","choice1Party":"d66","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Je kuiert langs een hermelijnenboerderij. De [fokker] van dienst snelt naar buiten."}},{"line":{"character":"boer","text":"Help! Help! De builenpest is hier uitgebroken!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["boer","offscreen"],"fast":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["boer","offscreen"],"fast":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"boer","flipped":false}],"background":"boerderij","objects":[]},' + 

'{"party1":"d66","party2":"ja21",' +
'"choice1":"Natuurlijk, wat wilt u weten? En wanneer wordt dit omgeroepen?",' +
'"choice2":"Nou, mij niet gezien, meneer van Poppeldraak, ze zouden u allemaal moeten saneren.","choice1Party":"d66","choice2Party":"ja21",' +
'"enterSequence":[{"line":{"character":null,"text":"Een man spreekt je aan in het bos."}},{"line":{"character":"dorpsomroeper","text":"Dag meneer, ik ben [Joris van Poppeldraak], ik werk voor het BOS-journaal, mag ik u een vraag stellen?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"line":{"character":"dorpsomroeper","text":"Sorry, er komt net even een flarkbal-uitslag binnen. In het Pofferd Stadion is gescoord hoor ik. We schakelen over naar Reinsiert de Vos."}},{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"dorpsomroeper","text":"Tot zover Joris van Poppeldraak vanuit het bos. En dan gaan we naar het weer. Hobbit!"}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"dorpsomroeper","flipped":false}],"background":"brug","objects":[]},' + 

'{"party1":"d66","party2":"bij1",' +
'"choice1":"Ja dat is goed, het lelieveld kan ons niet zoveel schelen. Maar laten we dan wel een plan maken, want we willen ook weer niet al teveel pegasussen die lawaai komen maken in het bos.",' +
'"choice2":"Ben je gek! Alle Pegasussen landen al jaren gewoon in het Holle Schip vlakbij de hoofdstad. Het lelieveld blijft gewoon een lelieveld!","choice1Party":"d66","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt [Transavio de Pegasus] tegen. Hij wil net gaan opstijgen."}},{"line":{"character":"pegasus","text":"Zeg, ik ga mijn vleugels spreiden, vind je het goed als ik daar verderop in dat lelieveld ga landen?"}}],' +
'"prepareSequence":[{"flip":"pegasus"}],' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"pegasus","flipped":false}],"background":"boshouthakker","objects":[]},' + 

'{"party1":"d66","party2":"50plus",' +
'"choice1":"Een heel goed idee! Voor! Maar eh... staan jullie zelf niet een beetje te dicht bij elkaar?",' +
'"choice2":"De plaag is een groot probleem, maar dat idee van jullie bevalt me niks! En dat je dan je huis niet uit mag zeker. Ha!","choice1Party":"50plus","choice2Party":"d66",' +
'"enterSequence":[{"line":{"character":null,"text":"Je wordt aangesproken door een groepje [grijsaards]."}},{"line":{"character":"oud-mannetje-1","text":"Keezer! Wij houden een petitie, we vinden dat iedereen \'s avonds moet binnen blijven. Zo houden we de plaag onder controle."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oud-mannetje-1","flipped":false},{"name":"oud-mannetje-2","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"d66","party2":"henk-krol",' +
'"choice1":"Nou, beste Henk, ik maak me vooral druk om de jeugd, die oudjes redden zich wel hoor. Ik ga weer even verder als je het goed vindt.",' +
'"choice2":"Helemaal eens, Henk. Wat een geschikte vent ben je toch.","choice1Party":"d66","choice2Party":"henk-krol",' +
'"enterSequence":[{"line":{"character":null,"text":"Kijk, het is [Henk Trol], de bekendste trol van het bos."}},{"line":{"character":"henk-trol","text":"Hallo daar! Hier is Henk Trol! Zeg, wat een schattig hondje is dat. Hoe heet \'ie?"}},{"line":{"character":"keezer","text":"[naamhondje]"}},{"line":{"character":"henk-trol","text":"Ach, wat leuk! Trouwens, vindt u ook dat de ouderen in dit bos altijd weer de dupe zijn?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["henk-trol","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["henk-trol","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"henk-trol","flipped":false}],"background":"brug","objects":[]},' + 

'{"party1":"d66","party2":"denk",' +
'"choice1":"Wat een goed idee! Er wonen inmiddels zoveel bosnimfen in het bos, die hebben recht op hun eigen feestdagen.",' +
'"choice2":"Ik zou juist willen pleiten voor een extra feestdag voor alle bosbewoners: Vrijheidsdag! Dan vieren we dat we vrij zijn met gratis luitmuziek in het park, en dat woordkunstenaar Wervelstorm door het hele land wordt gevlogen op een pegasus.","choice1Party":"denk","choice2Party":"d66",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [bosnimf] loopt verdrietig door het bos."}},{"line":{"character":"keezer","text":"Wat scheelt eraan?"}},{"line":{"character":"bosnimf","text":"Ik moet naar mijn werk, maar mijn volk viert het suikerbietenfeest! Had ik maar een vrije dag!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","fluit"]},{"line":{"character":"keezer","text":"Vrijheid is belangrijk! Vrijjjjheeeid!"}},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"keezer","text":"Op een dag zal het zo zijn, voor nu: werkze!"}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"bosnimf","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"cu","party2":"gl",' +
'"choice1":"Dat klinkt redelijk. Ik ben hier nu eenmaal op eigen risico en hierdoor besef ik dat een chirurgijn niet gratis is.",' +
'"choice2":"Dat is veel te duur! Straks durven zieke dwergen niet meer naar de chirurgijn te gaan! Maak het gewoon gratis.","choice1Party":"cu","choice2Party":"gl",' +
'"enterSequence":[{"line":{"character":null,"text":"Je laat je even keuren bij de [chirurgijn] voor je op avontuur gaat."}},{"line":{"character":"chirurgijn","text":"Dag Keezer, ik ben de chirurgijn. Als je gewond raakt, zal ik je genezen. Voor amputaties vraag ik niets, maar voor eenvoudige aderlatingen vraag ik 385 dukaten."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["chirurgijn","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["chirurgijn","droevig"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"chirurgijn","flipped":false}],"background":"dokterinterieur","objects":[]},' + 

'{"party1":"cu","party2":"sp",' +
'"choice1":"Wat belachelijk! Scholen zijn voor alle kinderen!",' +
'"choice2":"Vervelend, maar er zijn genoeg scholen voor Barry-ontkenners zoals jij! Ik help je wel even zoeken.","choice1Party":"sp","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [kindje] staat te huilen bij een school."}},{"line":{"character":"kindje","text":"Ik mag de les niet in op deze Barry-school omdat ik niet in de god Barry geloof."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","kindje"],"fast":false},{"move":["kindje","offscreen-rechts"],"fast":false},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"kindje","flipped":false}],"background":"village","objects":[{"name":"schooltje"}]},' + 

'{"party1":"cu","party2":"pvv",' +
'"choice1":"Groot gelijk, Melvin! We zien door de bosnimfen het bos nimf meer.",' +
'"choice2":"Dank voor je bijdrage Melvin. Ik heb ook wel eens kritiek, maar je moet wel het gesprek aan blijven gaan, want bosnimfen zijn ook gewoon mensen. Of nouja, strikt genomen zijn het nimfen, maar je snapt wat ik bedoel.","choice1Party":"pvv","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Wat een heerlijke eikeltjesjenever schenken ze hier in de herberg. O, o, daar komt [Melvin] aan, [het Ongevraagde Meningenmonster]."}},{"line":{"character":"melvin-het-meningenmonster","text":"Dag, ik ben [Melvin het Ongevraagde Meningenmonster]. Unpopular opinion: bosnimfen hebben een achterlijke mythologie."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"melvin-het-meningenmonster","flipped":false}],"background":"herberginterieur","objects":[]},' + 

'{"party1":"cu","party2":"fvd",' +
'"choice1":"Ik zou er flink wat dukaten voor over hebben om ervoor te zorgen dat het niet nog warmer wordt.",' +
'"choice2":"Soms wordt het warmer, soms kouder. Dat is al eeuwen zo. Bene agere et nil timere.","choice1Party":"cu","choice2Party":"fvd",' +
'"enterSequence":[{"line":{"character":null,"text":"De voettocht is zwaarder dan je dacht. Het lijkt wel warmer dan vroeger in het bos."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[],"background":"bospad*","objects":[]},' + 

'{"party1":"cu","party2":"sgp",' +
'"choice1":"Heel goed dat je dit doet, beste man! Ons koninkrijk gelooft al sinds jaar en dag in onze eigen goden, geen plek voor de goden van de bosnimfen!",' +
'"choice2":"In dit bos is ruimte voor alle goden. De bosnimfgoden, de dwergenprofeten, het opperwezen van de centaurs... allemaal!","choice1Party":"sgp","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Een boze [bosbewoner] staat te demonstreren bij het kasteel van de koning."}},{"line":{"character":"man-1","text":"De koning zou samen met alle boswachters, burgemeesters en dorpsraadsmannen iets moeten doen tegen dat malle geloof van die bosnimfen! Bah!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["man-1","droevig"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"man-1","flipped":false}],"background":"kasteel","objects":[]},' + 

'{"party1":"cu","party2":"pvdd",' +
'"choice1":"Doe zo voort, eerwaarde! Het is nobel de traditie van uw voorvaderen in ere te houden.",' +
'"choice2":"Hela, wat moet dat? Geeft u het arme schaap alstublieft een bedwelmend anijs-elixer!","choice1Party":"cu","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Midden in het bos staat een [druide] op het punt om een [geitenbokje] te offeren."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["druide-mes","haktmetmes"]},{"status":["bokje","dood"]},{"wait":true},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]}],"characters":[{"name":"druide-mes","flipped":false},{"name":"bokje","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"cu","party2":"ja21",' +
'"choice1":"Sluiten die tent! Misschien leren ze hier wel hoe ze het bos van binnenuit kapot kunnen maken!",' +
'"choice2":"Tja, ook bosnimfen hebben recht op hun eigen tovenaarsschool.","choice1Party":"ja21","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt bij een tovenaarsschool voor bosnimfen. Je hebt geen idee wat ze daarbinnen precies leren."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["schooltje","ingestort"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[],"background":"bospad*","objects":[{"name":"schooltje"}]},' + 

'{"party1":"cu","party2":"bij1",' +
'"choice1":"Linksaf! Die piramides zijn gebouwd door slaven!",' +
'"choice2":"Rechtsaf! Ik heb toevallig ooit zeven jaren in het Rijk der Piramides gewoond, dus ik ken het daar een beetje.","choice1Party":"bij1","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt bij een tweesprong. De weg naar links leidt je naar de [IJzige Hoogvlakte van Cludenia]. De weg naar rechts leidt je naar het onlangs voltooide [Rijk der Piramides]."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"flip":"keezer"},{"move":["keezer","offscreen-links"],"fast":false}],"characters":[],"background":"boshouthakker","objects":[{"name":"wegwijsbordje"}]},' + 

'{"party1":"cu","party2":"50plus",' +
'"choice1":"Hij is oud genoeg om dat zelf te bepalen. Deze situatie is inderdaad uitzichtloos.",' +
'"choice2":"Hier zijn slaapelixers niet voor bedoeld. Laten we gewoon wat vaker bij hem op bezoek gaan, zodat-ie zich minder eenzaam voelt.","choice1Party":"50plus","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Je ontmoet een verschrompelde [druide] die al 327 jaar in een hut zit. Hij is er wel klaar mee en wil een elixer waarmee hij voor duizend jaar in slaap valt."}}],' +
'"prepareSequence":[{"move":["kaboutersbijdruide","offscreen-rechts"],"fast":false}],' +
'"party1Sequence":[{"move":["kaboutersbijdruide","druide-zondermes"],"fast":false},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"wait":true},{"disappear":"elixer"},{"status":["druide-zondermes","slaapt"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"druide-zondermes","flipped":false},{"name":"kaboutersbijdruide","flipped":false}],"background":"ruine","objects":[{"name":"elixer"}]},' + 

'{"party1":"cu","party2":"henk-krol",' +
'"choice1":"Ja, graag!",' +
'"choice2":"Je doet alsof je een gesprek hebt via je glazen bol en probeert Henk zo goed als dat kan te negeren.","choice1Party":"henk-krol","choice2Party":"cu",' +
'"enterSequence":[{"line":{"character":null,"text":"Je herkent hem al van ver, het is de illustere [Henk Trol]!"}},{"line":{"character":"henk-trol","text":"Hallootjes! Hier is Henk Trol! Wil je een perkamentje over de benarde situatie van grijsharige gnomen?"}}],' +
'"prepareSequence":[{"status":["henk-trol","perkamentje"]}],' +
'"party1Sequence":[{"hold":"glazenbol"},{"line":{"character":"keezer","text":"Hoi, met mij. Nee, ik ben onderweg..."}},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","blij"]},{"line":{"character":"henktrol","text":"Blablablachtergesteldblablabla."}},{"line":{"character":"henktrol","text":"Blablabla."}}],"characters":[{"name":"henk-trol","flipped":false}],"background":"brug","objects":[]},' + 

'{"party1":"cu","party2":"denk",' +
'"choice1":"Misschien niet erg respectvol, maar het moet toch kunnen, zo\'n schilderij.",' +
'"choice2":"Zeg, kabouter, een beetje respect! Haal dat eens heel gauw weg, die beledigende rommel!","choice1Party":"cu","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Op het marktplein staat een [kabouter] schilderijen te verkopen. Op eentje staat de profeet Gerben afgebeeld met een groot kanon op zijn hoofd. Een [bosnimf] is woedend en eist dat hij het schilderij weghaalt."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"hold":"fakkel"},{"move":["keezer","schilderwinkel"],"fast":false},{"status":["schilderwinkel","inbrand"]},{"hold":"-fakkel"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"kabouter","flipped":false},{"name":"bosnimf","flipped":false}],"background":"village","objects":[{"name":"schilderwinkel"}]},' + 

'{"party1":"gl","party2":"sp",' +
'"choice1":"Niks daarvan, je spuwt veel te veel vuur als je vliegt en dat is niet goed voor de bomen! Kom er maar af, bedelaar, vakantie in eigen bos is ook hartstikke leuk!",' +
'"choice2":"Wat mooi dat ook bedelaars er af en toe even tussenuit kunnen. Ik ben nu even druk met m\'n quest, maar ik ga een volgende keer graag mee.","choice1Party":"gl","choice2Party":"sp",' +
'"enterSequence":[{"line":{"character":null,"text":"Wat vliegt daar nou? [Een draak]! Wat een schitterend gezicht!"}},{"line":{"character":"bedelaar-op-rug-draak","text":"Dag Keezer, in ruil voor twee broodkruimels vlieg ik je naar de warmwaterbron! Deze bedelaar gaat ook mee."}},{"line":{"character":"bedelaar-op-rug-draak","text":"Discover your smile!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["bedelaar-op-rug-draak","afgestapt"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["bedelaar-op-rug-draak","offscreen"],"fast":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"bedelaar-op-rug-draak","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"gl","party2":"pvv",' +
'"choice1":"Schiet op, zeelui, help de bosnimfen, breng ze aan land en geef ze te eten!",' +
'"choice2":"Snel, zeelui, sleep ze terug naar de andere kant van de Grote Zee. Dit soort volk kunnen we hier niet gebruiken!","choice1Party":"gl","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt aan bij het strand. In de verte, op de Grote Zee komen kleine houten roeibootjes vol [bosnimfen] aan. Ze hebben duidelijk honger. Een schip met zeelui ligt klaar om naar ze toe te varen."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[],"background":"strand","objects":[{"name":"bootje"}]},' + 

'{"party1":"gl","party2":"fvd",' +
'"choice1":"Ben je mal, ook al staan we hier met tien man te scheppen, mijn inschatting is dat het misschien 0,000001 centimeter gaat schelen.",' +
'"choice2":"Tuurlijk, we doen wat we kunnen! Alle beetjes helpen. Geef hier die emmer!","choice1Party":"fvd","choice2Party":"gl",' +
'"enterSequence":[{"line":{"character":null,"text":"[Een kabouter] staat aan de rand van het meer met een emmer water te scheppen."}},{"line":{"character":"groene-dwerg","text":"Meneer, helpt u mee? De waterspiegel stijgt en mijn dorpje wordt bedreigd!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","emmer"],"fast":false},{"status":["keezer","blij"]}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"groene-dwerg","flipped":false}],"background":"strand","objects":[{"name":"emmer"}]},' + 

'{"party1":"gl","party2":"sgp",' +
'"choice1":"Ik zal u helpen. En ik wens u alvast een welgemeend eet smakelijk met het heerlijke vlees dat de goden u middels dit schepsel gods hebben gegund!",' +
'"choice2":"Ik zal u helpen, maar dan moet u mij beloven dat deze koe wordt gered van het slachthuis. Des te minder geslachte dieren, des te beter!","choice1Party":"sgp","choice2Party":"gl",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt aan bij een put in het bos. Een wanhopige [landkabouter] staat aan de rand van de put."}},{"line":{"character":"landkabouter","text":"Meneer, helpt u mij. Ik was op weg naar het slachthuis en een van mijn runderen is in deze put gevallen!"}}],' +
'"prepareSequence":[{"disappear":"koe"}],' +
'"party1Sequence":[{"move":["keezer","put"],"fast":false},{"status":["keezer","opderug"]},{"wait":true},{"status":["keezer","blij"]},{"appear":"koe"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","put"],"fast":false},{"status":["keezer","opderug"]},{"wait":true},{"status":["keezer","blij"]},{"appear":"koe"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"landkabouter","flipped":false}],"background":"bospad*","objects":[{"name":"put"},{"name":"koe","attachedTo":"landkabouter"}]},' + 

'{"party1":"gl","party2":"pvdd",' +
'"choice1":"Wat een prachtige droom! Samen kunnen we veel meer bereiken inderdaad! Succes ermee!",' +
'"choice2":"Samenwerken prima, maar ik vind wel dat een bos zelf moet kunnen bepalen wat het doet.","choice1Party":"gl","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos word je aangesproken door een [elf]."}},{"line":{"character":"elf","text":"Dag! Ik heb een droom: dat ons bos en alle omringende bossen een grote bosunie vormen en meer gaan samenwerken."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"elf","flipped":false}],"background":"brug","objects":[]},' + 

'{"party1":"gl","party2":"ja21",' +
'"choice1":"Je kijkt met tranen in je ogen uit naar de dag dat het hele koninkrijk zo zal zijn.",' +
'"choice2":"Wat een hysterie zeg, laat de mensen gewoon hun ding doen, zoals ze dat al jaren doen.","choice1Party":"gl","choice2Party":"ja21",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [reiziger] uit de Hoofdstad kruist je pad. Hij vertelt je hoe het daar gaat. Alle ossekarren moeten uit het centrum en wie zijn kacheltje stookt met kolen wordt uitgefoeterd door [een team van Groene Dwergen]."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"reiziger","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"gl","party2":"bij1",' +
'"choice1":"Nou, doe het toch maar, want het is belangrijk dat het volk heel precies weet wat de schutterij allemaal uitspookt.",' +
'"choice2":"Jeetje, in wezen goed dat de schutterij niet zomaar zijn gang kan gaan, maar zo hou je wel heel weinig tijd over voor patrouilles.","choice1Party":"bij1","choice2Party":"gl",' +
'"enterSequence":[{"line":{"character":null,"text":"Op het marktplein is zojuist een bosnimf gearresteerd door de lokale schutterij."}},{"line":{"character":"politie-agentachtige","text":"Pfff... Ik moet nu helemaal gaan opschrijven waar ik zo\'n crimineel opgepakt heb, waarom, hoe laat, wat voor weer het was, hoe het rook... Ik ben toch geen kantoorklerk!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"politie-agentachtige","flipped":false},{"name":"bosnimf","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"gl","party2":"50plus",' +
'"choice1":"Geef dat brood toch aan de jongeren! Zij moeten nog jaren mee en verdienen onze steun!",' +
'"choice2":"Geef dat brood toch aan de ouderen! Zij hebben er jaren hard voor gewerkt, nu mogen ze ervan profiteren!","choice1Party":"gl","choice2Party":"50plus",' +
'"enterSequence":[{"line":{"character":null,"text":"De oogst was verrassend goed dit jaar! Er is meer brood te verdelen dan men had verwacht. Op het marktplein staat een groep [oude dorpsbewoners] achter hun houten rollators te kibbelen met een groep [jongeren]."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","groep-jonge-mensen"],"fast":false},{"give":"brood"},{"status":["groep-jonge-mensen","blij"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","groep-oude-mensen"],"fast":false},{"give":"brood"},{"status":["groep-oude-mensen","blij"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"groep-oude-mensen","flipped":false},{"name":"groep-jonge-mensen","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"gl","party2":"henk-krol",' +
'"choice1":"Helemaal eens Henk! Hup ouderen!",' +
'"choice2":"Weet je wat een goed idee is, Henk, alle jongeren 10.000 dukaten geven!","choice1Party":"henk-krol","choice2Party":"gl",' +
'"enterSequence":[{"line":{"character":null,"text":"Lekker even een dagje naar het strand. En wie kom je daar tegen? [Henk Trol]!"}},{"status":["henk-trol","neutraal"]},{"line":{"character":"henk-trol","text":"Hoihoi! Het is tijd voor Henk Trol! Vind jij ook dat jongeren niet zo moeten zeuren? Ouderen, die hebben het pas zwaar!"}}],' +
'"prepareSequence":[{"status":["henk-trol","danst"]}],' +
'"party1Sequence":[{"status":["keezer","lachend"]},{"status":["henk-trol","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["henk-trol","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"henk-trol","flipped":false}],"background":"strand","objects":[]},' + 

'{"party1":"gl","party2":"denk",' +
'"choice1":"Wat bijzonder om u te ontmoeten, leider der bosnimfen! Fijne dag nog!",' +
'"choice2":"Je hebt helemaal niets tegen bosnimfen, integendeel zelfs, maar deze heeft wel echt absurd lange armen zeg. Een beetje zorgelijk!","choice1Party":"denk","choice2Party":"gl",' +
'"enterSequence":[{"line":{"character":null,"text":"Hoog bezoek! De leider van de bosnimfen uit een bos hier ver, ver vandaan heeft besloten om eens te kijken of de bosnimfen zich hier wel aan de bosnimfregels houden."}}],' +
'"prepareSequence":[{"status":["bosnimf","met-lange-armen"]}],' +
'"party1Sequence":[{"move":["keezer","offscreen-links"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen-links"],"fast":false}],"characters":[{"name":"bosnimf","flipped":false}],"background":"bosrand","objects":[]},' + 

'{"party1":"sp","party2":"pvv",' +
'"choice1":"Zeg, alchemist, zo behandel je je werknemer niet!",' +
'"choice2":"Je loopt hoofdschuddend door. Is er dan echt geen enkele plek in het bos zonder die verdraaide bosnimfen?","choice1Party":"sp","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt aan bij de hut van een [alchemist]. Onder zijn leiding staat een [bosnimf] allerlei vervaarlijk uitziende stofjes te mengen."}},{"line":{"character":"alchemist","text":"Doorwerken! Mengen jij! Sneller!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"alchemist","flipped":false},{"name":"bosnimf","flipped":false}],"background":"bospad*","objects":[{"name":"hutje","attachedTo":"alchemist"}]},' + 

'{"party1":"sp","party2":"fvd",' +
'"choice1":"Ik vind dit nog steeds behoorlijk snel hoor, wat mij betreft gaan we naar 80.",' +
'"choice2":"Je hebt ook gelijk, beste prins, hoe harder hoe beter!","choice1Party":"sp","choice2Party":"fvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [prins] op een paard rijdt je bijna van de sokken."}},{"line":{"character":"keezer","text":"Pas op joh!"}},{"line":{"character":"prins","text":"Stel je niet aan, ik mag hier maar 100, dat is onmenselijk traag!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["prins-op-een-paard","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["prins-op-een-paard","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"prins-op-een-paard","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"sp","party2":"sgp",' +
'"choice1":"Ach ja, dat is die landkabouter z\'n goed recht, toch. Het is en blijft zijn boerderij.",' +
'"choice2":"Beetje verdacht. Als de landkabouter even niet oplet kijk ik stiekem door zijn raam, want hier is vast iets niet in de haak!","choice1Party":"sgp","choice2Party":"sp",' +
'"enterSequence":[{"line":{"character":null,"text":"Ah, wat gezellig, een boerderij. Het lijkt je wel eens leuk om zo\'n stal van binnen te zien."}},{"line":{"character":"keezer","text":"Mag ik eens zien hoe dat nou in z\'n werk gaat op zo\'n boerderij?"}},{"line":{"character":"landkabouter","text":"Geen sprake van!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["landkabouter","offscreen"],"fast":false},{"move":["keezer","boerderij"],"fast":false},{"status":["keezer","opderug"]},{"wait":true},{"status":["keezer","neutraal"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"landkabouter","flipped":false}],"background":"boerderij","objects":[]},' + 

'{"party1":"sp","party2":"pvdd",' +
'"choice1":"Ach, natuurlijk, doe mij drie van die mutsjes!",' +
'"choice2":"Sympathiek idee, maar zijn die mutsjes niet een ontzettende verspilling van grondstoffen? Ik hoef geen mutsje, maar hier heeft u al mijn dukaten voor die arme hondjes.","choice1Party":"sp","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Op de markt staat een [Groene Dwerg] zelfgehaakte mutsjes te verkopen."}},{"line":{"character":"groene-dwerg","text":"Wilt u een mutsje kopen? Het geld gaat naar hele zielige hondjes met maar drie pootjes."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","groene-dwerg"],"fast":false},{"give":"dukaat"},{"wait":true},{"inventory":"mutsjes"},{"wait":true},{"status":["groene-dwerg","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","groene-dwerg"],"fast":false},{"give":"dukaat"},{"wait":true},{"status":["groene-dwerg","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"groene-dwerg","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"sp","party2":"ja21",' +
'"choice1":"Belachelijk, die erfbelasting moet omhoog! En eh, gecondoleerd trouwens.",' +
'"choice2":"Hoezo bijna al hun dukaten. Je zou ze allemaal moeten krijgen, daar heb je recht op! Oh, en sterkte trouwens.","choice1Party":"sp","choice2Party":"ja21",' +
'"enterSequence":[{"line":{"character":null,"text":"Je favoriete [marskramer] staat weer op de markt. Zo, die heeft een nieuwe kar zo te zien!"}},{"line":{"character":"marskramer","text":"Mooie kar, he? Mijn ouders zijn overleden dus ik heb bijna al hun dukaten gekregen als erfenis."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["marskramer","verdrietig"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["marskramer","verdrietig"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"marskramer","flipped":false}],"background":"village","objects":[{"name":"karmetspullen","attachedTo":"marskramer"}]},' + 

'{"party1":"sp","party2":"bij1",' +
'"choice1":"Dat klinkt als gevaarlijk spul. Even de lokale schutterij waarschuwen dat er hier in illegale middelen wordt gehandeld.",' +
'"choice2":"Dit soort elixers zouden helemaal niet illegaal moeten zijn! Mensen moeten zelf weten wat voor elixers ze drinken!","choice1Party":"sp","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"Een nogal schimmige [tovenaar] staat op een marktplein elixers te verkopen."}},{"line":{"character":"drugsdealer","text":"Psst! Bedwelmend elixertje kopen? Ik verkoop alleen het heftige spul, drie slokjes en je ligt een week te hallucineren!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"drugsdealer","flipped":false}],"background":"village","objects":[{"name":"elixer","attachedTo":"drugsdealer"}]},' + 

'{"party1":"sp","party2":"50plus",' +
'"choice1":"Je geeft de man een paar dukaten. We moeten goed voor onze ouderen zorgen, die hebben dit bos opgebouwd.",' +
'"choice2":"Wacht eens even, hij heeft een gouden stok! Die man heeft geld zat. Ouderen zijn belangrijk, maar de rijkdom moet eerlijk verdeeld worden.","choice1Party":"50plus","choice2Party":"sp",' +
'"enterSequence":[{"line":{"character":null,"text":"Op het marktplein word je aangesproken door een [oude man] met een stok. De stok is gemaakt van massief goud!"}},{"line":{"character":"oude-geezer-met-gouden-stok","text":"Blijf nog even en luister. Heeft u een aalmoes voor mij?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","oude-geezer-met-gouden-stok"],"fast":false},{"give":"dukaat"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oude-geezer-met-gouden-stok","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"sp","party2":"henk-krol",' +
'"choice1":"Deze grot is van iedereen! Je stuurt [naamhondje] op Henk af om hem weg te jagen.",' +
'"choice2":"Je besluit het toch maar eens aan te horen, het verhaal van die gekke trol. Het kost je een uur of veertien, maar het is het helemaal waard.","choice1Party":"sp","choice2Party":"henk-krol",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt aan bij een grot. Het begint net te regenen dus je snelt naar binnen. In de grot zit [Henk Trol]."}},{"line":{"character":"henk-trol","text":"Ik was hier eerst! Je mag alleen blijven als ik je mag vertellen over de benarde positie van onze ouderen."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["hondje","blaft"]},{"move":["keezer","grot"],"fast":false},{"wait":true},{"move":["henk-trol","offscreen-rechts"],"fast":true},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"henk-trol","text":"blablablablablabla"}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"henk-trol","flipped":false}],"background":"grotregen","objects":[]},' + 

'{"party1":"sp","party2":"denk",' +
'"choice1":"Wat goed dat de bode ook aan de centaurs denkt!",' +
'"choice2":"Is het niet beter voor centaurs als ze het normale nieuws kunnen volgen? Niks tegen centaurs, maar dit bevordert de integratie natuurlijk niet.","choice1Party":"denk","choice2Party":"sp",' +
'"enterSequence":[{"line":{"character":null,"text":"Op het marktplein staat een [dorpsomroeper] met de laatste nieuwtjes."}},{"line":{"character":"dorpsomroeper","text":"En dan gaan we nu naar het nieuws voor centaurs. Hurdijak boel, djarra quelnio. H\'umatzondimal zina."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"dorpsomroeper","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"pvv","party2":"fvd",' +
'"choice1":"Die plaag is niet meer dan een kriebeltje! Onze hele economie ligt op zijn gat! Open die herberg!",' +
'"choice2":"Ook al maak ik me grote zorgen over de plaag: ik vind dat we een manier moeten bedenken om je herberg zo snel mogelijk weer open te doen.","choice1Party":"fvd","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"Er heerst een plaag in het koninkrijk, waar vooral ouderen aan lijken te bezwijken. Bij de herberg staat de herbergier te razen en te tieren."}},{"line":{"character":"herbergier","text":"Ik hoor net dat mijn herberg alweer dicht moet vanwege de plaag!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"herbergier","flipped":false}],"background":"herberg","objects":[]},' + 

'{"party1":"pvv","party2":"sgp",' +
'"choice1":"Je weet wel waar het huisje is, maar je zegt lekker niks. Er zijn al zoveel oorspronkelijke bosbewoners op zoek naar een huis. Die bosnimfen sluiten maar achteraan!",' +
'"choice2":"Je wijst ze de juiste weg. Elk wezen verdient een dak boven zijn hoofd!","choice1Party":"pvv","choice2Party":"sgp",' +
'"enterSequence":[{"line":{"character":null,"text":"Een arm [bosnimfengezin] trekt voorbij met een kar."}},{"line":{"character":"kar-met-nimfengezin","text":"Wij zoeken een huisje dat te huur zou staan. Weet u waar dat is?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","fluit"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","wijst"]},{"wait":true},{"status":["keezer","neutraal"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"kar-met-nimfengezin","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"pvv","party2":"pvdd",' +
'"choice1":"Wat een leuke oude dametjes zeg!",' +
'"choice2":"Eh... wat was dat een-na-laatste dat je zei?","choice1Party":"pvv","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"[naamhondje] trekt veel bekijks! Twee [oude dametjes] vinden je hondje maar wat schattig."}},{"line":{"character":"oud-dametje-1","text":"O, wat een snoezig hondje!"}},{"line":{"character":"oud-dametje-2","text":"Kijk, nou toch, dat koppie!"}},{"line":{"character":"oud-dametje-1","text":"En dat staartje!"}},{"line":{"character":"oud-dametje-2","text":"Alle bosnimfen moeten het bos uit geschopt worden en dit is het liefste hondje dat ik ooit heb gezien!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","vraagteken"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oud-dametje-1","flipped":false},{"name":"oud-dametje-2","flipped":false}],"background":"brug","objects":[]},' + 

'{"party1":"pvv","party2":"ja21",' +
'"choice1":"Wat een geweldig plan! Jij durft tenminste groot te denken!",' +
'"choice2":"Een stad? Maar... Je bedoelt echt een volledig nieuwe stad? Wat? Wat kost dat wel niet?","choice1Party":"ja21","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos staat een [eerdmannetje] in totale concentratie naar een enorme bouwtekening te turen."}},{"line":{"character":"keezer","text":"Dag eerdmannetje. Mag ik vragen wat je aan het doen bent?"}},{"line":{"character":"eerdmannetje","text":"Ik ben van plan om hier, op deze plek, een volledig nieuwe stad te bouwen!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","vraagteken"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"eerdmannetje","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"pvv","party2":"bij1",' +
'"choice1":"Wat een heerlijk tafereel zeg. Je voelt jezelf weer even jong. Dit hoort helemaal bij onze boscultuur!",' +
'"choice2":"Niks tegen feesten, maar HALLO, geschminkt als nimfen?! Je beste vriend is zelf nimf en die heeft er elk jaar rond 5 barulember weer enorm veel last van.","choice1Party":"pvv","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"Er is een feest in het bos gaande. Tientallen mensen zijn verkleed en geschminkt als bosnimfen. De kinderen staan vrolijk \'Zie Ginds Komt De Postkoets\' te zingen."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","fluit"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"groep-feestvierders","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"pvv","party2":"50plus",' +
'"choice1":"Wat rot voor je. Hier heb je een dukaat om wat eten te kopen.",' +
'"choice2":"Wat rot voor je. Hier heb je een dukaat om wat eten te kopen. Wie schoot die pijl als ik vragen mag? Een bosnimf zeker. Dit bos gaat de verkeerde kant op.","choice1Party":"50plus","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"Een oude [ridder] zit wat verslagen tegen een boom."}},{"line":{"character":"ridder-verslagen-tegen-boom","text":"Ooit was ik een avonturier, net zoals jij. Maar toen kreeg ik een pijl in m\'n knie."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","ridder-verslagen-tegen-boom"],"fast":false},{"give":"dukaat"},{"wait":true},{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","ridder-verslagen-tegen-boom"],"fast":false},{"give":"dukaat"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"ridder-verslagen-tegen-boom","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"pvv","party2":"henk-krol",' +
'"choice1":"Dag Hans, wat kan ik voor je doen?",' +
'"choice2":"Ja, wacht eens even, dat is gewoon Henk Trol met een vermomming! Daar heb ik geen zin in!","choice1Party":"henk-krol","choice2Party":"pvv",' +
'"enterSequence":[{"line":{"character":null,"text":"Wat staat daar nou voor een malle trol? Een trol met een bril en een snor, dat heb je nog nooit gezien!"}},{"line":{"character":"hans-trol","text":"Hallo! Ik ben Hans Trol!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offsceen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"hans-trol","text":"Blablablaouderenblablabla."}},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"hans-trol","flipped":false}],"background":"boszonsondergang","objects":[]},' + 

'{"party1":"pvv","party2":"denk",' +
'"choice1":"Minder, minder!",' +
'"choice2":"Meer, meer!","choice1Party":"pvv","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Wat een tumult in de herberg! Een dronken [klant] houdt een voordracht op de bar."}},{"line":{"character":"dronken-man-bar","text":"Willen jullie meer, of minder bosnimfen?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"line":{"character":"dronken-man-bar","text":"Dan gaan we dat regelen!"}},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"dronken-man-bar","text":"wablief?"}},{"line":{"character":"keezer","text":"ik heb hier geen zin in."}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"dronken-man-bar","flipped":false},{"name":"bargasten","flipped":false}],"background":"herberginterieur","objects":[]},' + 

'{"party1":"fvd","party2":"sgp",' +
'"choice1":"Hij zegt dat er toen nog niet van die rare rassen in het bos woonden! Ben je doof ofzo?",' +
'"choice2":"Eh, ja, wat?","choice1Party":"fvd","choice2Party":"sgp",' +
'"enterSequence":[{"line":{"character":null,"text":"Twee oude [heertjes] staan te mijmeren over de dagen van weleer."}},{"line":{"character":"oud-mannetje-1","text":"Weet je nog, vroeger."}},{"line":{"character":"oud-mannetje-2","text":"Ja, toen was alles beter."}},{"line":{"character":"oud-mannetje-1","text":"Mooie tijden waren dat."}},{"line":{"character":"oud-mannetje-2","text":"Vrouw achter het aanrecht."}},{"line":{"character":"oud-mannetje-1","text":"Precies. Er woonden nog niet van die rare rassen in het bos."}},{"line":{"character":"oud-mannetje-2","text":"Wat?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","oud-mannetje-1"],"fast":false},{"status":["keezer","schreeuwt"]},{"wait":true},{"status":["keezer","neutraal"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","vraagteken"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oud-mannetje-1","flipped":false},{"name":"oud-mannetje-2","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"fvd","party2":"pvdd",' +
'"choice1":"Man, dit is toch meer dan genoeg! Die zee kan ook leeg, he?",' +
'"choice2":"Behouden vaart, vissersbaas! Moge je harde werken zich uitbetalen in een overdaad aan vis. Wat is het toch ook een prachtige traditie in ons koninkrijk. A mari usque ad mare!","choice1Party":"pvdd","choice2Party":"fvd",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt aan bij de haven. Meeuwen scheren over je hoofd. Een [visser] heeft net zijn vangst op de kade gedumpt. [naamhondje] krijgt een verse zeebaars van de visser."}},{"appear":"visje"},{"line":{"character":"visser-in-bootje","text":"De goden zij geprezen voor zoveel vis! Ik ga meteen nog een keer!"}}],' +
'"prepareSequence":[{"disappear":"visje"}],' +
'"party1Sequence":[{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"visser-in-bootje","flipped":false}],"background":"strand","objects":[{"name":"visje"}]},' + 

'{"party1":"fvd","party2":"ja21",' +
'"choice1":"Je schudt de hand van de prins. Ook al heeft iedereen in het bos het over de bosgriep, jij vindt dat allemaal zwaar overdreven.",' +
'"choice2":"Sorry, beste prins, maar ik schud even geen handen vanwege de bosgriep. Je weet wel, die griep waar het halve bos aan dood gaat.","choice1Party":"fvd","choice2Party":"ja21",' +
'"enterSequence":[{"line":{"character":null,"text":"De [prins] staat op de brug voor zich uit te mijmeren."}},{"line":{"character":"prins","text":"Het avondland, door de bosgriep gekooid, vergooit wat wij ooit wonnen. Een wijze uil vertelde mij: men heeft de bosgriep verzonnen."}},{"status":["prins1","hand"]},{"line":{"character":"prins","text":"Gegroet!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","prins1"],"fast":false},{"line":{"character":"keezer","text":"Mooi gesproken!"}},{"status":["keezer","steekthanduit"]},{"wait":true},{"status":["keezer","neutraal"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"prins1","flipped":false}],"background":"brug","objects":[]},' + 

'{"party1":"fvd","party2":"bij1",' +
'"choice1":"Ga weg trol, die hut is niet van jou! Eigendom is eigendom!",' +
'"choice2":"Blijf maar lekker zitten, trol. Dit soort dwergen maken de hutjesmarkt kapot!","choice1Party":"fvd","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt langs het hutje van Jeffrey de dwerg. Maar er zit een langharige [trol] in zijn hutje."}},{"line":{"character":"langharigetrol","text":"Die dwerg heeft dit hutje alleen nog omdat hij hoopt dat het meer waard wordt. Hij is er zelf nooit, dus ben ik er maar gaan wonen."}}],' +
'"prepareSequence":[{"disappear":"straalwaterkanon"}],' +
'"party1Sequence":[{"flip":"keezer"},{"move":["keezer","offscreen-links"],"fast":true},{"wait":true},{"appear":"straalwaterkanon"},{"status":["langharigetrol","rennend"]},{"move":["langharigetrol","offscreen-rechts"],"fast":true},{"wait":true}],' +
'"party2Sequence":[{"status":["keezer","hippiegebaar"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"langharigetrol","flipped":false}],"background":"bospad*","objects":[{"name":"hutje"},{"name":"straalwaterkanon"}]},' + 

'{"party1":"fvd","party2":"50plus",' +
'"choice1":"Ook als deze kabouter doodgaat is er geen oversterfte dit jaar. Doorlopen!",' +
'"choice2":"Je geeft de oude kabouter een deken, gratis openbaar vervoer en heel veel geld.","choice1Party":"fvd","choice2Party":"50plus",' +
'"enterSequence":[{"line":{"character":null,"text":"Onder een boom ligt een doodzieke oude [kabouter]. Zijn kabouterfamilie staat snikkend om hem heen."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","oude-kabouter"],"fast":false},{"inventory":"-deken, -ovchipkaart"},{"give":"deken"},{"wait":true},{"give":"ovchipkaart"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"kaboutergezin","flipped":false},{"name":"oude-kabouter","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"fvd","party2":"henk-krol",' +
'"choice1":"Je loopt \'m heel stilletjes voorbij...",' +
'"choice2":"Zo Henk, vertel nog eens alles wat je van alle dingen vindt. Ik ben een en al oor!","choice1Party":"fvd","choice2Party":"henk-krol",' +
'"enterSequence":[{"line":{"character":null,"text":"Je zou toch denken dat je in zo\'n enorm bos iemand maar een enkele keer kan tegenkomen. Maar nee hoor, daar is [Henk Trol] weer!"}}],' +
'"prepareSequence":[{"status":["henk-trol","op-de-rug"]}],' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["henk-trol","perkamentje"]},{"line":{"character":"henk-trol","text":"Blablablalandopgebouwdblablabla."}},{"status":["keezer","blij"]}],"characters":[{"name":"henk-trol","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"fvd","party2":"denk",' +
'"choice1":"Vijf dukaten, alstublieft. Mag ik er een houten tasje bij?",' +
'"choice2":"Ik voel me hier toch wat ongemakkelijk bij, het zou prettiger zijn als ik uw gezicht kan zien in de openbare ruimte!","choice1Party":"denk","choice2Party":"fvd",' +
'"enterSequence":[{"line":{"character":null,"text":"In de elixergroothandel zit iemand achter de abacus in een allesbedekkende mantel."}},{"line":{"character":"iemand-in-een-burka","text":"Dat is dan vijf dukaten alstublieft."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","iemand-in-een-burka"],"fast":false},{"give":"dukaat"},{"wait":true},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"iemand-in-een-burka","flipped":false}],"background":"winkelinterieur","objects":[{"name":"abacus","attachedTo":"iemand-in-een-burka"}]},' + 

'{"party1":"sgp","party2":"pvdd",' +
'"choice1":"Aan de andere kant: wat weet je nou van paarden. Niet mee bemoeien dus. Die man is een professional.",' +
'"choice2":"Je neemt al zijn paarden in beslag. Al zijn beest behoort aan jou!","choice1Party":"sgp","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Op de markt staat een [paardenhandelaar] die zijn paarden veel te weinig te eten geeft. Je staat op het punt om er wat van te zeggen..."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","paarden"],"fast":false},{"flip":"paarden"},{"move":["paarden","offscreen-rechts"],"fast":false},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"paarden","flipped":false},{"name":"paardenhandelaar","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"sgp","party2":"ja21",' +
'"choice1":"Zijn vrouw heeft eigenlijk wel gelijk, het is al ver over sluitingstijd!",' +
'"choice2":"Waar bemoeit die vrouw zich mee? Bij een meningsverschil heeft de man het laatste woord.","choice1Party":"ja21","choice2Party":"sgp",' +
'"enterSequence":[{"line":{"character":null,"text":"Het is gezellig laat in de herberg. De [vrouw] van de [herbergier] vindt het mooi geweest, maar hij is het daar duidelijk niet mee eens."}},{"line":{"character":"vrouw-van-herbergier","text":"Laatste ronde!"}},{"line":{"character":"herbergier","text":"Niks laatste ronde, we gaan door tot de zon opkomt!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"bargasten","flipped":false},{"name":"herbergier","flipped":false},{"name":"vrouw-van-herbergier","flipped":false}],"background":"herberginterieur","objects":[]},' + 

'{"party1":"sgp","party2":"bij1",' +
'"choice1":"Ja, het is toch het een of het ander, mij hou je niet voor de gek!",' +
'"choice2":"Excuus, het is natuurlijk geheel aan u om te bepalen wat u wel of niet bent! Dan resteert mij slechts de \'goedemiddag\'!","choice1Party":"sgp","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"Je passeert een mysterieus [boswezen]."}},{"line":{"character":"keezer","text":"Goedemiddag mevrouw!"}},{"line":{"character":"androgyn-boswezen","text":"Wie zegt dat ik een vrouw ben?"}},{"line":{"character":"keezer","text":"Pardon, meneer!"}},{"line":{"character":"androgyn-boswezen","text":"Wie zegt dat ik een meneer ben?"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"line":{"character":"keezer","text":"Goedemiddag!"}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"androgyn-boswezen","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"sgp","party2":"50plus",' +
'"choice1":"Dat is handig! Eigenlijk zou dit gewoon gratis moeten zijn!",' +
'"choice2":"Dat is lief van je, maar de vrouw-kabouters kunnen toch prima op de baby-kabouters passen, zodat de man-kabouters hout kunnen sprokkelen?","choice1Party":"50plus","choice2Party":"sgp",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos staat een [fee] liedjes te zingen voor twee piepjonge kabouters."}},{"line":{"character":"fee","text":"Dag Keezer, ik ben Gratia, de kinderfee! In ruil voor twee dukaten pas ik overdag op de baby-kabouters, zodat de ouder-kabouters wat meer tijd hebben om hout te sprokkelen."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"fee","flipped":false},{"name":"babykabouters","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"sgp","party2":"henk-krol",' +
'"choice1":"Nou, vooruit dan maar. Je staat op en gaat bij Henk Trol aan tafel zitten. Zeg maar dag tegen je avond!",' +
'"choice2":"Je doet alsof je Henk niet hebt gezien en blijft lekker zitten.","choice1Party":"henk-krol","choice2Party":"sgp",' +
'"enterSequence":[{"line":{"character":null,"text":"Je zit heerlijk met een goed glas brandewijn in je favoriete herberg. Aan de andere kant van de ruimte zie je opeens dat [Henk Trol] enthousiast naar je zit zwaaien."}}],' +
'"prepareSequence":[{"status":["henk-trol","zwaait"]}],' +
'"party1Sequence":[{"status":["henk-trol","traan"]},{"wait":true}],' +
'"party2Sequence":[{"move":["keezer","henk-trol"],"fast":false},{"status":["henk-trol","perkamentje"]},{"line":{"character":"henk-trol","text":"blablablapensioenenblabla"}},{"status":["keezer","blij"]}],"characters":[{"name":"henk-trol","flipped":false}],"background":"herberginterieur","objects":[]},' + 

'{"party1":"sgp","party2":"denk",' +
'"choice1":"Reken maar van zekersteweten, beste jager. Dit bos is veel te klein voor dat soort roofdieren. En hun gedachtegoed staat me ook niet aan.",' +
'"choice2":"Dat ze op afvallige bosnimfen jagen is helemaal niet waar! En bovendien is de grijze wolf een beschermde diersoort!","choice1Party":"sgp","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos word je aangesproken door een [jager]."}},{"line":{"character":"jager","text":"Keezer, wil je mijn petitie ondertekenen? Er zijn grijze wolven in het bos gesignaleerd. Ze hebben al een paar schapen opgegeten en ze schijnen het ook op afvallige bosnimfen gemunt te hebben. We moeten ze afschieten!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","petitie"],"fast":false},{"status":["keezer","potloodinhand"]},{"wait":true},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"jager","flipped":false}],"background":"bospad*","objects":[{"name":"petitie"}]},' + 

'{"party1":"pvdd","party2":"ja21",' +
'"choice1":"Mooi hoor, zo\'n lokale volkstraditie moet je in ere houden. Vang ze allemaal!",' +
'"choice2":"Wacht eens even, is dat niet zielig? Je bevrijdt de dieren en gaat er snel vandoor.","choice1Party":"ja21","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos zijn twee [jongeren] bezig met een wonderlijk spel. Ze vangen [dieren] met een bal en laten ze tegen elkaar vechten."}},{"line":{"character":"poke-trainer-1","text":"Kom op, Krokomuis!"}},{"line":{"character":"poke-trainer-2","text":"Ten aanval,  Olihoorn!"}},{"line":{"character":"krokomuis","text":"Kroko! Kroko kroko!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","krokomuis"],"fast":false},{"flip":"olihoorn"},{"flip":"olihoorn"},{"status":["olihoorn","lopend"]},{"status":["krokomuis","lopend"]},{"move":["olihoorn","offscreen-rechts"],"fast":true},{"move":["krokomuis","offscreen-rechts"],"fast":true},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"poke-trainer-1","flipped":false},{"name":"krokomuis","flipped":false},{"name":"olihoorn","flipped":true},{"name":"poke-trainer-2","flipped":true}],"background":"bospad*","objects":[]},' + 

'{"party1":"pvdd","party2":"bij1",' +
'"choice1":"Wat een stomme herberg! Nou, daar ga ik mooi niet meer heen! Ik ga het openbaar maken en ervoor zorgen dat alle vogeltjes in het bos erover gaan kwetteren!",' +
'"choice2":"Wat een stomme herberg! Nou, daar ga ik mooi niet meer heen! Nu ik je toch spreek: waarom eet je eigenlijk nog schapenbout? Dat is toch zielig voor zo\'n schaap?","choice1Party":"bij1","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [bosnimf] staat te huilen bij de herberg."}},{"line":{"character":"bosnimf","text":"Ik mag de herberg niet in omdat ik een bosnimf ben. En ik had nou net zo\'n zin in een lekkere schapenbout!"}}],' +
'"prepareSequence":[{"status":["bosnimf","huilend"]}],' +
'"party1Sequence":[{"status":["keezer","vraagteken"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"bosnimf","flipped":false}],"background":"herberg","objects":[]},' + 

'{"party1":"pvdd","party2":"50plus",' +
'"choice1":"Die arme kabouter, waarom mag hij niet eens met pensioen? Je koopt snel een fles melk.",' +
'"choice2":"Je vraagt of hij ook eikeltjesmelk verkoopt, want die dierlijke rommel die blief je niet.","choice1Party":"50plus","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Op de markt staat een stokoude [landkabouter] koemelk te verkopen."}},{"line":{"character":"oude-landkabouter","text":"Melk, de witte molen!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"line":{"character":"oude-landkabouter","text":"Nee sorry."}},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","oude-landkabouter"],"fast":false},{"inventory":"flesmelk"},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oude-landkabouter","flipped":false}],"background":"village","objects":[{"name":"kraampjemelk","attachedTo":"oude-landkabouter"}]},' + 

'{"party1":"pvdd","party2":"henk-krol",' +
'"choice1":"Inderdaad, Henk. Ze is bejaard, dus sowieso heel erg zielig.",' +
'"choice2":"Je doet het riempje van haar hondje wat losser, dat zat wat strak en dat is pas zielig! Het hondje begint meteen vrolijk met [naamhondje] te spelen. Aaawww.","choice1Party":"henk-krol","choice2Party":"pvdd",' +
'"enterSequence":[{"line":{"character":null,"text":"Aangekomen op de markt zie je de breedsprakige [Henk Trol] staan. Hij heeft zich ontfermd over een [oud vrouwtje] dat met haar hondje aan het wandelen is."}},{"line":{"character":"henk-trol","text":"Moet je deze mevrouw zien, hoe zielig ze is. Kijk nou, wat een zielige bejaarde! Ze is helemaal oud joh!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","oud-vrouwtje-met-hondje"],"fast":false},{"status":["oud-vrouwtje-met-hondje","springend"]},{"status":["hondje","blaft"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oud-vrouwtje-met-hondje","flipped":true},{"name":"henk-trol","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"pvdd","party2":"denk",' +
'"choice1":"Dat is hartstikke zielig! Als de jager even niet oplet, red je de griffioen van een nare dood.",' +
'"choice2":"Goed bezig, jager! Die bosnimfen moeten ook eten.","choice1Party":"pvdd","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Een [jager] laat trots zijn buit aan je zien. Hij heeft een [griffioen] gevangen!"}},{"line":{"character":"jager","text":"Zo, nu alleen nog even slachten dat monster. Onverdoofd, anders mogen de bosnimfen \'m niet eten."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["jager","wegkijkend"]},{"move":["keezer","griffioen"],"fast":false},{"status":["griffioen","vrij"]},{"flip":"griffioen"},{"move":["griffioen","offscreen-rechts"],"fast":true},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"griffioen","flipped":false},{"name":"jager","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"ja21","party2":"bij1",' +
'"choice1":"Ten strijde! Nu maar hopen dat ze niet toch weer in een ander kasteel zit.",' +
'"choice2":"Hoezo \'mag met haar trouwen\'. Dat mag die prinses toch zelf weten. Je weet niet eens wat haar seksuele voorkeur is!","choice1Party":"ja21","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"Je komt aan bij een groot kasteel. Oe, je herinnert je ineens het nieuws dat je vorige week hoorde. Er is een prinses ontvoerd! Ze zit helemaal bovenin de hoogste toren. Wie de prinses redt mag met haar trouwen, zo heeft de koning beloofd."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"hold":"zwaard"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[],"background":"kasteel","objects":[]},' + 

'{"party1":"ja21","party2":"50plus",' +
'"choice1":"Eh... nou ja zeg, wat aardig. Die gaat zeker van pas komen! Zeker nu er allemaal rellen zijn uitgebroken met bosnimfen. Bah!",' +
'"choice2":"Je weigert het zwaard aan te nemen. Oude mensen hebben al zo hard gewerkt, om nu ook nog hun spullen aan te nemen vind je echt niet passend.","choice1Party":"ja21","choice2Party":"50plus",' +
'"enterSequence":[{"line":{"character":null,"text":"In een grot woont een [oude man]. Hij geeft je zomaar een zwaard."}},{"line":{"character":"oudeman-in-gewaad","text":"Alleen op avontuur gaan is gevaarlijk! Hier, neem mee!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","zwaard"],"fast":false},{"disappear":"zwaard"},{"hold":"zwaard"},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oudeman-in-gewaad","flipped":false}],"background":"grot","objects":[{"name":"zwaard"}]},' + 

'{"party1":"ja21","party2":"henk-krol",' +
'"choice1":"Je danst vrolijk met hem mee. Wat is het toch ook een interessante kerel",' +
'"choice2":"Stop er nou gewoon mee, Henk! Het wordt nu een beetje genant!","choice1Party":"henk-krol","choice2Party":"ja21",' +
'"enterSequence":[{"line":{"character":null,"text":"Kijk nou eens, daar is [Henk Trol] weer. Hij staat vrolijk te dansen en te zingen."}},{"line":{"character":"henk-trol","text":"Dompiedom, ik ben Henk, de guitige trol. Ga met me mee, dan hebben we lol, jaldieraldielal."}}],' +
'"prepareSequence":[{"status":["henk-trol","danst"]}],' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","danst"]},{"wait":true},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"henk-trol","flipped":false}],"background":"bosopenplek","objects":[]},' + 

'{"party1":"ja21","party2":"denk",' +
'"choice1":"Ja natuurlijk mag dat!",' +
'"choice2":"Die ork mag best wat vragen, maar je houdt je hand op je geldbuidel. Niet alle orken zijn boeven, maar ze zijn nou eenmaal oververtegenwoordigd in het criminele circuit.","choice1Party":"denk","choice2Party":"ja21",' +
'"enterSequence":[{"line":{"character":null,"text":"Bij een brug kom je een [ork] tegen. [naamhondje] begint meteen te blaffen. De [ork] spreekt je aan."}},{"line":{"character":"ork","text":"Dag! Mag ik wat vragen?"}}],' +
'"prepareSequence":[{"status":["hondje","blaft"]},{"status":["keezer","zweet"]}],' +
'"party1Sequence":[{"status":["keezer","neutraal"]},{"line":{"character":"ork","text":"Heeft u een vuurtje voor me?"}},{"move":["keezer","ork"],"fast":false},{"hold":"fakkel"},{"line":{"character":"ork","text":"Mooi vuurtje zeg."}},{"wait":true},{"hold":"-fakkel"},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","neutraal"]},{"line":{"character":"ork","text":"Heeft u een vuurtje voor me?"}},{"move":["keezer","ork"],"fast":false},{"hold":"fakkel"},{"line":{"character":"ork","text":"Mooi vuurtje zeg."}},{"wait":true},{"hold":"-fakkel"},{"status":["keezer","blij"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"ork","flipped":false}],"background":"brug","objects":[]},' + 

'{"party1":"bij1","party2":"50plus",' +
'"choice1":"Helemaal eens. Soms kun je elkaar niet eens verstaan!",' +
'"choice2":"Luitmuziek? Maar... Dat instrument komt oorspronkelijk van de bosnimfen, dat moeten wij bosbewoners ons niet zomaar toe-eigenen!","choice1Party":"50plus","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"In de herberg is het gezellig als altijd. Toch is niet iedereen even gelukkig, zo blijkt."}},{"line":{"character":"oud-mannetje-1","text":"Er moet meer luitmuziek voor oudere mensen gespeeld worden in de taveerne. Al die luitisten van tegenwoordig spelen zo hard."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"oud-mannetje-1","flipped":false},{"name":"bargasten","flipped":false}],"background":"herberginterieur","objects":[]},' + 

'{"party1":"bij1","party2":"henk-krol",' +
'"choice1":"Je gaat erbij staan en ook jij begint het rottende lijk enthousiast te feliciteren.",' +
'"choice2":"Je loopt stilletjes door. Wat een opmerkelijk tafereel.","choice1Party":"henk-krol","choice2Party":"bij1",' +
'"enterSequence":[{"line":{"character":null,"text":"In het bos \u2013 naast een boom \u2013 ligt een lijk in een redelijk ver gevorderd stadium van ontbinding. Bij het lijk staat de olijke trol [Henk Trol]. Dat is bijzonder, hij geeft het lijk een hand!"}},{"line":{"character":"henk-trol","text":"Zeg, mag ik jou van harte feliciteren met je verjaardag!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","oud-lijk-bij-boom"],"fast":false},{"line":{"character":"keezer","text":"van harte gefeliciteerd hoor!"}},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"henk-trol","flipped":false},{"name":"oud-lijk-bij-boom","flipped":false}],"background":"bospad*","objects":[]},' + 

'{"party1":"bij1","party2":"denk",' +
'"choice1":"Ach, de liefde, prachtig, wat blijft dat toch mooi om te zien.",' +
'"choice2":"Ehh, twee mannen... tja, eh, kan, natuurlijk ja, eh, waarom niet toch? Denk ik...","choice1Party":"bij1","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Aangekomen in het dorpje blijkt er een feestelijke bruiloft gaande. Je bent niet uitgenodigd, maar de liefde vieren is natuurlijk altijd een prachtig gezicht. Je gaat op je tenen staan om te zien wie de gelukkigen zijn. Het blijken [twee kabouters] met een lange baard."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","hartje"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","vraagteken"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"twee-trouwende-kabouters","flipped":false},{"name":"bruiloftgasten","flipped":false}],"background":"village","objects":[]},' + 

'{"party1":"50plus","party2":"henk-krol",' +
'"choice1":"Je helpt die oudere meneer en samen trappen jullie Henk het veldhospitaal in.",' +
'"choice2":"Je helpt Henk en jullie knokken tot er van de oude grijsaard weinig meer overblijft dan een hoopje bloed.","choice1Party":"50plus","choice2Party":"henk-krol",' +
'"enterSequence":[{"line":{"character":null,"text":"Och jeetje, wat een kabaal. Wat is dat nou? Het is [Henk Trol] weer. Dit keer is hij in gevecht met een [grijsaard]."}},{"line":{"character":"henk-trol","text":"Ik weet wat de ouderen echt willen!"}},{"line":{"character":"jan-nagel","text":"Je bent helemaal gestoord, Henk! Jij hebt je kans gehad. WIJ weten wat de ouderen willen!"}}],' +
'"prepareSequence":[{"disappear":"gevechtswolk"},{"status":["henk-trol","boos"]}],' +
'"party1Sequence":[{"move":["keezer","henk-trol"],"fast":false},{"disappear":"henk-trol"},{"disappear":"keezer"},{"disappear":"jan-nagel"},{"appear":"gevechtswolk"},{"wait":true},{"disappear":"gevechtswolk"},{"appear":"keezer"},{"appear":"jan-nagel"},{"status":["jan-nagel","blij"]},{"appear":"henk-trol"},{"status":["henk-trol","geslagen"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"move":["keezer","henk-trol"],"fast":false},{"disappear":"henk-trol"},{"disappear":"keezer"},{"disappear":"jan-nagel"},{"appear":"gevechtswolk"},{"wait":true},{"disappear":"gevechtswolk"},{"appear":"henk-trol"},{"status":["henk-trol","blij"]},{"appear":"keezer"},{"appear":"jan-nagel"},{"status":["jan-nagel","pulp"]},{"wait":true},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"henk-trol","flipped":false},{"name":"jan-nagel","flipped":true}],"background":"bospad*","objects":[{"name":"gevechtswolk"}]},' + 

'{"party1":"50plus","party2":"denk",' +
'"choice1":"Die nar is lekker bezig! Wat jou betreft doet deze paljas dit jaar de midwinter-conference!",' +
'"choice2":"Die potsemaker moet een beetje op zijn woorden letten. Niks tegen jokers an sich, maar met de goden spot je niet.","choice1Party":"50plus","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Aangekomen op het dorpsplein is er een voorstelling bezig van een vrolijke [harlekijn]. De dorpsbewoners moeten hard lachen, ook bij een paar keiharde grappen over de goden."}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","lachend"]},{"line":{"character":"keezer","text":"Hahahaha!"}},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"lachend-publiek","flipped":false}],"background":"village","objects":[{"name":"nar"}]},' + 

'{"party1":"henk-krol","party2":"denk",' +
'"choice1":"Henk, mij zul je dat soort dingen nooit horen zeggen, hoor. Ik ken niemand die zo betrouwbaar is als jij.",' +
'"choice2":"Maar Henk, dat gedoe met de redactie van de Herenliefde-bode, het griffioenschandaal, de fraudebeschuldigingen, je hebt kritische perkamentjes tegengehouden, erectie-elixers verkocht, illegaal in medische archieven gebladerd, je bent uit twee gildes gestapt... het houdt een keer op Henk!","choice1Party":"henk-krol","choice2Party":"denk",' +
'"enterSequence":[{"line":{"character":null,"text":"Bij een oude ruine staat de illustere [Henk Trol]. Zodra hij jou in de smiezen heeft begint ie tegen je te foeteren. Wat een energie heeft die man toch."}},{"line":{"character":"henk-trol","text":"Jij denkt zeker ook al dat ik een oplichter ben! Leugens zijn het, allemaal leugens!"}}],' +
'"prepareSequence":null,' +
'"party1Sequence":[{"status":["keezer","blij"]},{"status":["henk-trol","blij"]},{"move":["keezer","offscreen"],"fast":false}],' +
'"party2Sequence":[{"status":["keezer","boos"]},{"move":["keezer","offscreen"],"fast":false}],"characters":[{"name":"henk-trol","flipped":false}],"background":"ruine","objects":[]},'
scenes = scenes.slice(0, -1) + ']'

eindscenes = '[' +
'{"party":"fvd","dialogue":[{"character":"eindpoppetje-fvd","text":"Dag Keezer! Je tocht is volbracht. Als er iemand is die weet wat goed is voor dit bos, dan ben jij het. De plaag? Schromelijk overdreven! Bosnimfen? Weg ermee!"},' +
'{"character":"eindpoppetje-fvd","text":"En, wees nou eerlijk, zou jij willen dat je zus thuiskomt met een centaur? Hell no! Ik wil je uitnodigen om lid te worden van het Gilde voor Democratie."},' +
'{"character":"eindpoppetje-fvd","text":"Het is een beetje een nieuw gilde, maar we gaan een geweldige toekomst tegemoet. Welkom!"}]},' +
'{"party":"pvv","dialogue":[{"character":"eindpoppetje-pvv","text":"Keezer, mag ik jou van harte feliciteren? Je bent vanaf nu lid van het Gilde voor de Vrijheid! Weedu, ik vind het schitterend, wat jij allemaal gepresteerd hebt in dit bos."},' +
'{"character":"eindpoppetje-pvv","text":"Eindelijk iemand die net zoals ik wil stoppen met de massa-immigratie, die tsunami aan bosnimfen die dit bos al jarenlang teistert."},' +
'{"character":"eindpoppetje-pvv","text":"Het bos behoort aan ons, de oorspronkelijke bewoners!"}]},' +
'{"party":"ja21","dialogue":[{"character":"eindpoppetje-ja21","text":"Keezer! Ik heb goed nieuws! Je mag bij mijn gilde! Driemaal hoera! Wat zeg ik, wel twintig maal hoera. Ja, eenentwintig zelfs!"},' +
'{"character":"eindpoppetje-ja21","text":"Jij wil net zo graag als ik een beter bos, maar dat hoeft toch niet gepaard te gaan met racisme? Ik, het Eerdmannetje, wil gewoon een bos dat klaar is voor ondernemers. Voor harde werkers! En dus niet voor plaag-ontkenners en racisten, laat dat heel duidelijk zijn."},' +
'{"character":"eindpoppetje-ja21","text":"Dus welkom bij mijn gilde! Had ik al gezegd dat ik dus juist geen racist ben? Tuurlijk, ik heb heel lang samengewerkt met racisten, maar dat maakt mij JUIST geen racist."}]},' +
'{"party":"vvd","dialogue":[{"character":"eindpoppetje-vvd","text":"Keezer, ouwe gek. Wat geinig om je te zien. Ik weet het goed gemaakt: jij mag lid worden van ons gilde, het Volksgilde voor Vrijheid en Democratie. Jouw mening past zo ontzettend in ons straatje."},' +
'{"character":"eindpoppetje-vvd","text":"We hebben je niet per se nodig overigens, want we zijn toch de grootste. We kunnen het halve bos in de fik zetten en dan nog zijn we de grootste. Dus het maakt ons eigenlijk geen reet uit of je er bent. Maar echt leuk hoor."},' +
'{"character":"eindpoppetje-vvd","text":"Zeg, ik moet weer even verder. Ciao!"}]},' +
'{"party":"sp","dialogue":[{"character":"eindpoppetje-sp","text":"Dag Keezer, niet schrikken, maar ik heb een vraag. Wil je soms lid worden van mijn gilde? We heten de Socialistische Ploeg."},' +
'{"character":"eindpoppetje-sp","text":"Ik heb je een beetje in de gaten gehouden en jouw standpunten komen vrijwel overeen met die van ons! Wij streven naar een betere wereld voor iedereen. Minima bijvoorbeeld, of, ik zeg maar iets, pratende tomaten."},' +
'{"character":"eindpoppetje-sp","text":"Je moet wel bijna al je dukaten afstaan aan de gildekas overigens, maar dat vind je niet erg toch?"}]},' +
'{"party":"pvdd","dialogue":[{"character":"eindpoppetje-pvdd","text":"Keezer! Aaach wat een schattig hondje is dat. Hoe heet ie? [naamhondje]? Nou ja zeg wat een leuke naam! Ja nee, Keezer, ik vind het ook heel leuk dat jij er bent, maar van [naamhondje] word ik wel extra enthousiast!"},' +
'{"character":"eindpoppetje-pvdd","text":"Willen jullie je bij ons gilde aansluiten? Wij heten het Gilde voor de Dieren, we streven naar een fijn bos met ruimte voor mens en dier."},' +
'{"character":"eindpoppetje-pvdd","text":"Mag ik [naamhondje] even aaien? Wat. Een. Schatje!"}]},' +
'{"party":"gl","dialogue":[{"character":"eindpoppetje-groenlinks","text":"Dag Keezer! Ik ben een Groene Dwerg, en jij mag dan wel geen dwerg zijn, groen ben je zeker, dat heb je tijdens dit avontuur wel bewezen!"},' +
'{"character":"eindpoppetje-gl","text":"Wil je bij ons gilde? Iedereen is welkom, zeker mensen die zo groen zijn als jij."},' +
'{"character":"eindpoppetje-gl","text":"Ons gilde heet Groen Laat Ik Niet Kapot Slopen, maar jij mag GroenLinks zeggen hoor."}]},' +
'{"party":"denk","dialogue":[{"character":"eindpoppetje-denk","text":"Keezer, ik denk dat ik jou mag feliciteren! Ik denk dat ik genoeg heb gezien van jouw avontuur om te kunnen zeggen: jij mag lid worden van ons gilde!"},' +
'{"character":"eindpoppetje-denk","text":"Ik denk dat we in dit bos veel meer rekening moeten houden met wezens die hier niet vandaan komen. Iedereen mag zijn eigen geloof en cultuur behouden, aanpassen is helemaal niet nodig, denk ik. En dat denk jij volgens mij ook!"},' +
'{"character":"eindpoppetje-denk","text":"Ons gilde heeft nog geen naam, daar denken we nog over na. Maar welkom!"}]},' +
'{"party":"50plus","dialogue":[{"character":"eindpoppetje-50plus","text":"Dag\u2026\u2026 Keezer\u2026.. wat\u2026.. een\u2026. avontuur\u2026. he? Jij\u2026 geeft\u2026 tenminste\u2026. om\u2026. ouderen\u2026. UGH! UGH!"},' +
'{"character":"eindpoppetje-50plus","text":"Sluit\u2026.. je\u2026. je\u2026 aan\u2026 bij\u2026. ons\u2026. gilde? We\u2026. hebben\u2026. al\u2026. veel\u2026. leden\u2026. Namelijk\u2026. even\u2026. rekenen\u2026."},' +
'{"character":"eindpoppetje-50plus","text":"Vijftig\u2026.. plus\u2026. ehh\u2026. plus\u2026. nou goed\u2026. welkom\u2026.."}]},' +
'{"party":"cda","dialogue":[{"character":"eindpoppetje-cda","text":"Zo zeg, wat een reis heb jij afgelegd, Keezer. Ik zat dat allemaal zo een beetje in de gaten te houden en weet je wat volgens mij ontzettend iets voor jou is? Ons gilde!"},' +
'{"character":"eindpoppetje-cda","text":"Het gilde heet Check Deze Appel. Die naam betekent niks hoor, was een geintje van de oprichter geloof ik."},' +
'{"character":"eindpoppetje-cda","text":"Anyway: we zijn een gilde van rentmeesters en lopen niet weg voor verantwoordelijkheid! En jouw keuzes, daar kunnen we ons enorm in vinden! Dus welkom!"}]},' +
'{"party":"cu","dialogue":[{"character":"eindpoppetje-christenunie","text":"Dag Keezer, je reis is ten einde! Mijn naam is Chris ten Unie. Ik heb een gilde opgericht en volgens mij is dat helemaal jouw gilde."},' +
'{"character":"eindpoppetje-cu","text":"Voel je niet verplicht hoor! Och, daar ga ik weer, ik ben altijd zo bescheiden. Maar goed: mijn gilde dus."},' +
'{"character":"eindpoppetje-cu","text":"Wij staan voor familie en voor geborgenheid, maar wel met respect voor mens en natuur. En voor de god Barry natuurlijk, want Barry is groot. Amen!"}]},' +
'{"party":"d66","dialogue":[{"character":"eindpoppetje-d66","text":"Hoihoi! Ik heb een leuke verrassing voor je: je mag bij ons gilde! Het heet Dwerg 66! Ik ben klein maar ons gilde is hartstikke groot\u2026 soms\u2026"},' +
'{"character":"eindpoppetje-d66","text":"Wij zijn groen, maar we vinden de economie ook heel belangrijk. En we zijn democratisch\u2026 soms\u2026"},' +
'{"character":"eindpoppetje-d66","text":"Sluit je je bij ons aan? Echt wat voor jou!"}]},' +
'{"party":"sgp","dialogue":[{"character":"eindpoppetje-sgp","text":"Vrede zij met u! Welk een queeste hebt gij volbracht. Eender welke keuze u ook maakte, wij van de Sacrale Gemeenschaps Ploeg knikten met de voltallige gemeenschap."},' +
'{"character":"eindpoppetje-sgp","text":"Wij zouden u dan ook willen adviseren om uzelve aan te sluiten bij ons nederig gilde. Spijt is wat u er niet van zult krijgen. Neen!"},' +
'{"character":"eindpoppetje-sgp","text":"Kom, dan bidden we samen voor een betere, wijzere wereld."}]},' +
'{"party":"bij1","dialogue":[{"character":"eindpoppetje-bij1","text":"Zo zeg, dat heb je goed gedaan! Bij elk dilemma dat jij voorgeschoteld kreeg maakte je precies de juiste en wat ons betreft enige goede keuze."},' +
'{"character":"eindpoppetje-bij1","text":"Als je ook maar een enkele foute keus had gemaakt dan was het wat ons betreft ook meteen voorbij overigens. Jij presteerde wat bijna niemand nog presteerde: je mag bij BIJ1. Zo heten we, want bij ons mag iedereen bijeen komen!"},' +
'{"character":"eindpoppetje-bij1","text":"Althans, iedereen die het met ons eens is."}]},' +
'{"party":"pvda","dialogue":[{"character":"eindpoppetje-pvda","text":"Keezer, wat een avontuur was dat! Weet je wat jij krijgt als beloning? Een rode roos! En je mag ook nog lid worden van het Gilde van de Arbeid."},' +
'{"character":"eindpoppetje-pvda","text":"We kunnen je goed gebruiken, want de gloriedagen van Joop de wijze Uil en Wim Kokmeeuw zijn wel voorbij. Sluit je bij ons aan en kies voor een bos vol sociaal-economische rechtvaardigheid."},' +
'{"character":"eindpoppetje-pvda","text":"Wel echt doen hoor, anders bestaan we straks niet meer."}]},' +
'{"party":"henk-krol","dialogue":[{"character":"eindpoppetje-henk krol","text":"Dag Keezer, wat ben je toch lief voor me geweest op deze reis. Jij bent de enige die nog steeds in me gelooft!"},' +
'{"character":"eindpoppetje-henk krol","text":"Ik was zo alleen! Iedereen vond me stom!"},' +
'{"character":"eindpoppetje-henk krol","text":"Maar nu ben jij er en daar ben ik zo blij mee! Wil je lid worden van mijn gilde? Het gilde heet \u2018Leve Henk Trol\u2019!"},' +
'{"character":"eindpoppetje-henk krol","text":"Let trouwens niet op de spelfout op mijn vlag, die \u2018K\u2019 moet natuurlijk een \u2018T\u2019 zijn. Hahaha!"},' +
'{"character":"eindpoppetje-henk krol","text":"Je gaat niet meteen weg toch? Je blijft toch nog wel even? Ik heb je zoveel te vertellen nog."},' +
'{"character":"eindpoppetje-henk krol","text":"Wist je bijvoorbeeld dat de koopkracht\u2026"}]},'
eindscenes = eindscenes.slice(0, -1) + ']'

objecten = '[' +
'{"name":"abacus","status":null,"anim":[],"layer":"abacus"},' +
'{"name":"banier","status":null,"anim":[],"layer":"banier"},' +
'{"name":"boom","status":null,"anim":[],"layer":"boom"},' +
'{"name":"boomstronk","status":null,"anim":[],"layer":"boomstronk"},' +
'{"name":"bootje","status":null,"anim":["bootje-anim-f01","bootje-anim-f02","bootje-anim-f03","bootje-anim-f04"],"layer":null},' +
'{"name":"bordeel","status":null,"anim":["bordeel-anim-f01","bordeel-anim-f02"],"layer":null},' +
'{"name":"buttonleft","status":null,"anim":[],"layer":"buttonleft"},' +
'{"name":"buttonmid","status":null,"anim":[],"layer":"buttonmid"},' +
'{"name":"buttonright","status":null,"anim":[],"layer":"buttonright"},' +
'{"name":"carrousel","status":null,"anim":["carrousel-anim-f01","carrousel-anim-f02","carrousel-anim-f03","carrousel-anim-f04"],"layer":null},' +
'{"name":"elixer","status":null,"anim":[],"layer":"elixer"},' +
'{"name":"emmer","status":null,"anim":[],"layer":"emmer"},' +
'{"name":"flesmelk","status":null,"anim":[],"layer":"flesmelk"},' +
'{"name":"gedenksteen","status":null,"anim":[],"layer":"gedenksteen"},' +
'{"name":"gevechtswolk","status":null,"anim":["gevechtswolk-anim-f01","gevechtswolk-anim-f02","gevechtswolk-anim-f03","gevechtswolk-anim-f04"],"layer":null},' +
'{"name":"glasbrandewijn","status":null,"anim":[],"layer":"glasbrandewijn"},' +
'{"name":"groteboom","status":null,"anim":[],"layer":"groteboom"},' +
'{"name":"hartje","status":null,"anim":["hartje-anim-f01","hartje-anim-f02"],"layer":null},' +
'{"name":"healing","status":null,"anim":["healing-anim-f01","healing-anim-f02","healing-anim-f03"],"layer":null},' +
'{"name":"healing","status":"animref-uitlijningpoppetje","anim":[],"layer":"healing-animref-uitlijningpoppetje"},' +
'{"name":"herberg","status":null,"anim":["herberg-anim-f01","herberg-anim-f02"],"layer":null},' +
'{"name":"hondendrol","status":null,"anim":["hondendrol-anim-f01","hondendrol-anim-f02","hondendrol-anim-f03","hondendrol-anim-f04"],"layer":null},' +
'{"name":"hummerkoets","status":null,"anim":["hummerkoets-anim-f01","hummerkoets-anim-f02"],"layer":null},' +
'{"name":"hutje","status":null,"anim":["hutje-anim-f01","hutje-anim-f02"],"layer":null},' +
'{"name":"icon-inventory","status":null,"anim":[],"layer":"icon-inventory"},' +
'{"name":"iconaudio-aan","status":null,"anim":[],"layer":"iconaudio-aan"},' +
'{"name":"iconaudio-uit","status":null,"anim":[],"layer":"iconaudio-uit"},' +
'{"name":"iconfullscreen-enter","status":null,"anim":[],"layer":"iconfullscreen-enter"},' +
'{"name":"iconfullscreen-exit","status":null,"anim":[],"layer":"iconfullscreen-exit"},' +
'{"name":"inventory-bg","status":null,"anim":[],"layer":"inventory-bg"},' +
'{"name":"inventory-deken","status":null,"anim":[],"layer":"inventory-deken"},' +
'{"name":"inventory-fg","status":null,"anim":[],"layer":"inventory-fg"},' +
'{"name":"inventory-flesmelk","status":null,"anim":[],"layer":"inventory-flesmelk"},' +
'{"name":"inventory-geld","status":null,"anim":[],"layer":"inventory-geld"},' +
'{"name":"inventory-mutsjes","status":null,"anim":[],"layer":"inventory-mutsjes"},' +
'{"name":"inventory-ovchipkaart","status":null,"anim":[],"layer":"inventory-ovchipkaart"},' +
'{"name":"inventory-referentieafbeelding","status":null,"anim":[],"layer":"inventory-referentieafbeelding"},' +
'{"name":"inventory-roos","status":null,"anim":[],"layer":"inventory-roos"},' +
'{"name":"inventory-spullen","status":null,"anim":[],"layer":"inventory-spullen"},' +
'{"name":"inventory-yoghurt","status":null,"anim":[],"layer":"inventory-yoghurt"},' +
'{"name":"karmetbril","status":null,"anim":[],"layer":"karmetbril"},' +
'{"name":"karmetspullen","status":null,"anim":[],"layer":"karmetspullen"},' +
'{"name":"kerkje","status":null,"anim":["kerkje-anim-f01","kerkje-anim-f02"],"layer":null},' +
'{"name":"koe","status":null,"anim":["koe-anim-f01","koe-anim-f02"],"layer":null},' +
'{"name":"kraampjebroden","status":null,"anim":[],"layer":"kraampjebroden"},' +
'{"name":"kraampjemelk","status":null,"anim":[],"layer":"kraampjemelk"},' +
'{"name":"meerderedukaten","status":null,"anim":[],"layer":"meerderedukaten"},' +
'{"name":"mutsjes","status":null,"anim":[],"layer":"mutsjes"},' +
'{"name":"nar","status":null,"anim":[],"layer":"nar"},' +
'{"name":"nar","status":"zonderpodium","anim":[],"layer":"nar-zonderpodium"},' +
'{"name":"objectinhand-brood","status":null,"anim":[],"layer":"objectinhand-brood"},' +
'{"name":"objectinhand-deken","status":null,"anim":[],"layer":"objectinhand-deken"},' +
'{"name":"objectinhand-dukaat","status":null,"anim":[],"layer":"objectinhand-dukaat"},' +
'{"name":"objectinhand-fakkel","status":null,"anim":["objectinhand-fakkel-f01","objectinhand-fakkel-f02","objectinhand-fakkel-f03","objectinhand-fakkel-f04"],"layer":null},' +
'{"name":"objectinhand-glazenbol","status":null,"anim":[],"layer":"objectinhand-glazenbol"},' +
'{"name":"objectinhand-ovchipkaart","status":null,"anim":[],"layer":"objectinhand-ovchipkaart"},' +
'{"name":"objectinhand-paddestoel","status":null,"anim":[],"layer":"objectinhand-paddestoel"},' +
'{"name":"objectinhand-potlood","status":null,"anim":[],"layer":"objectinhand-potlood"},' +
'{"name":"objectinhand-roos","status":null,"anim":[],"layer":"objectinhand-roos"},' +
'{"name":"objectinhand-zwaard","status":null,"anim":[],"layer":"objectinhand-zwaard"},' +
'{"name":"paddestoel","status":null,"anim":[],"layer":"paddestoel"},' +
'{"name":"petitie","status":null,"anim":[],"layer":"petitie"},' +
'{"name":"pijltje","status":null,"anim":["pijltje-f01","pijltje-f02","pijltje-f03","pijltje-f04"],"layer":null},' +
'{"name":"podium","status":null,"anim":[],"layer":"podium"},' +
'{"name":"put","status":null,"anim":[],"layer":"put"},' +
'{"name":"schilderwinkel","status":null,"anim":[],"layer":"schilderwinkel"},' +
'{"name":"schilderwinkel","status":"inbrand","anim":["schilderwinkel-inbrand-anim-f01","schilderwinkel-inbrand-anim-f02","schilderwinkel-inbrand-anim-f03","schilderwinkel-inbrand-anim-f04"],"layer":null},' +
'{"name":"schooltje","status":null,"anim":[],"layer":"schooltje"},' +
'{"name":"schooltje","status":"ingestort","anim":[],"layer":"schooltje-ingestort"},' +
'{"name":"spullen","status":null,"anim":[],"layer":"spullen"},' +
'{"name":"straalwaterkanon","status":null,"anim":["straalwaterkanon-anim-f01","straalwaterkanon-anim-f02","straalwaterkanon-anim-f03","straalwaterkanon-anim-f04"],"layer":null},' +
'{"name":"tafel","status":null,"anim":[],"layer":"tafel"},' +
'{"name":"twitterbutton","status":null,"anim":["twitterbutton-f01","twitterbutton-f02"],"layer":null},' +
'{"name":"twitterbuttonvogeltjelos","status":null,"anim":["twitterbuttonvogeltjelos-f01","twitterbuttonvogeltjelos-f02"],"layer":null},' +
'{"name":"visje","status":null,"anim":[],"layer":"visje"},' +
'{"name":"vlag-50plus","status":null,"anim":[],"layer":"vlag-50plus"},' +
'{"name":"vlag-bij1","status":null,"anim":[],"layer":"vlag-bij1"},' +
'{"name":"vlag-cda","status":null,"anim":[],"layer":"vlag-cda"},' +
'{"name":"vlag-cu","status":null,"anim":[],"layer":"vlag-cu"},' +
'{"name":"vlag-d66","status":null,"anim":[],"layer":"vlag-d66"},' +
'{"name":"vlag-denk","status":null,"anim":[],"layer":"vlag-denk"},' +
'{"name":"vlag-fvd","status":null,"anim":[],"layer":"vlag-fvd"},' +
'{"name":"vlag-gl","status":null,"anim":[],"layer":"vlag-gl"},' +
'{"name":"vlag-henk-krol","status":null,"anim":[],"layer":"vlag-henk-krol"},' +
'{"name":"vlag-ja21","status":null,"anim":[],"layer":"vlag-ja21"},' +
'{"name":"vlag-pvda","status":null,"anim":[],"layer":"vlag-pvda"},' +
'{"name":"vlag-pvdd","status":null,"anim":[],"layer":"vlag-pvdd"},' +
'{"name":"vlag-pvv","status":null,"anim":[],"layer":"vlag-pvv"},' +
'{"name":"vlag-sgp","status":null,"anim":[],"layer":"vlag-sgp"},' +
'{"name":"vlag-sp","status":null,"anim":[],"layer":"vlag-sp"},' +
'{"name":"vlag-vvd","status":null,"anim":[],"layer":"vlag-vvd"},' +
'{"name":"vraagteken","status":null,"anim":["vraagteken-anim-f01","vraagteken-anim-f02"],"layer":null},' +
'{"name":"vulkaan","status":"barstuit","anim":["vulkaan-barstuit-f01","vulkaan-barstuit-f02","vulkaan-barstuit-f03","vulkaan-barstuit-f04"],"layer":null},' +
'{"name":"vulkaan","status":null,"anim":["vulkaan-f01","vulkaan-f02","vulkaan-f03","vulkaan-f04","vulkaan-f05"],"layer":null},' +
'{"name":"vulkaan","status":"stoptmetroken","anim":[],"layer":"vulkaan-stoptmetroken"},' +
'{"name":"vuuropgrond","status":null,"anim":["vuuropgrond-anim-f01","vuuropgrond-anim-f02","vuuropgrond-anim-f03","vuuropgrond-anim-f04"],"layer":null},' +
'{"name":"wegwijsbordje","status":null,"anim":[],"layer":"wegwijsbordje"},' +
'{"name":"yoghurt","status":null,"anim":[],"layer":"yoghurt"},' +
'{"name":"zwaard","status":null,"anim":[],"layer":"zwaard"},'
objecten = objecten.slice(0, -1) + ']'

personages = '[' +
'{"name":"alchemist","status":null,"anim":[],"layer":"alchemist"},' +
'{"name":"androgyn-boswezen","status":null,"anim":[],"layer":"androgyn-boswezen"},' +
'{"name":"arrestantnimf","status":null,"anim":[],"layer":"arrestantnimf"},' +
'{"name":"babykabouters","status":null,"anim":["babykabouters-f01","babykabouters-f02"],"layer":null},' +
'{"name":"bargasten","status":null,"anim":["bargasten-f01","bargasten-f02"],"layer":null},' +
'{"name":"baudetachtige-figuur-met-roeptoeter","status":null,"anim":["baudetachtige-figuur-met-roeptoeter-f01","baudetachtige-figuur-met-roeptoeter-f02"],"layer":null},' +
'{"name":"bedelaar-op-rug-draak","status":"afgestapt","anim":["bedelaar-op-rug-draak-afgestapt-f01","bedelaar-op-rug-draak-afgestapt-f02","bedelaar-op-rug-draak-afgestapt-f03","bedelaar-op-rug-draak-afgestapt-f04"],"layer":null},' +
'{"name":"bedelaar-op-rug-draak","status":null,"anim":["bedelaar-op-rug-draak-f01","bedelaar-op-rug-draak-f02","bedelaar-op-rug-draak-f03","bedelaar-op-rug-draak-f04"],"layer":null},' +
'{"name":"bedelaar-op-rug-draak","status":"geland","anim":["bedelaar-op-rug-draak-geland-f01","bedelaar-op-rug-draak-geland-f02","bedelaar-op-rug-draak-geland-f03","bedelaar-op-rug-draak-geland-f04"],"layer":null},' +
'{"name":"bedelaar-op-rug-draak","status":"vliegen","anim":["bedelaar-op-rug-draak-vliegen-f01","bedelaar-op-rug-draak-vliegen-f02","bedelaar-op-rug-draak-vliegen-f03","bedelaar-op-rug-draak-vliegen-f04"],"layer":null},' +
'{"name":"beul","status":null,"anim":["beul-f01","beul-f02","beul-f03"],"layer":null},' +
'{"name":"boer","status":null,"anim":[],"layer":"boer"},' +
'{"name":"boer","status":"blij","anim":[],"layer":"boer-blij"},' +
'{"name":"boer","status":"doormidden","anim":[],"layer":"boer-doormidden"},' +
'{"name":"bokje","status":"dood","anim":["bokje-dood-f01","bokje-dood-f02","bokje-dood-f03","bokje-dood-f04"],"layer":null},' +
'{"name":"bokje","status":null,"anim":["bokje-f01","bokje-f02"],"layer":null},' +
'{"name":"bosnimf","status":null,"anim":[],"layer":"bosnimf"},' +
'{"name":"bosnimf","status":"huilend","anim":["bosnimf-huilend-f01","bosnimf-huilend-f02"],"layer":null},' +
'{"name":"bosnimf","status":"met-lange-armen","anim":["bosnimf-met-lange-armen-f01","bosnimf-met-lange-armen-f02"],"layer":null},' +
'{"name":"bosnimf","status":"neutraal","anim":[],"layer":"bosnimf-neutraal"},' +
'{"name":"boswachter","status":null,"anim":["boswachter-f01","boswachter-f02"],"layer":null},' +
'{"name":"brugwachtertrol","status":null,"anim":[],"layer":"brugwachtertrol"},' +
'{"name":"brugwachtertrol","status":"confused","anim":[],"layer":"brugwachtertrol-confused"},' +
'{"name":"bruiloftgasten","status":null,"anim":["bruiloftgasten-f01","bruiloftgasten-f02"],"layer":null},' +
'{"name":"buurman-met-bijl","status":null,"anim":[],"layer":"buurman-met-bijl"},' +
'{"name":"buurman-met-bijl","status":"blij","anim":[],"layer":"buurman-met-bijl-blij"},' +
'{"name":"buurman-met-bijl","status":"doormidden","anim":[],"layer":"buurman-met-bijl-doormidden"},' +
'{"name":"buurman-met-bijl","status":"zonderbijl","anim":[],"layer":"buurman-met-bijl-zonderbijl"},' +
'{"name":"centaur","status":null,"anim":["centaur-f01","centaur-f02"],"layer":null},' +
'{"name":"chirurgijn","status":null,"anim":[],"layer":"chirurgijn"},' +
'{"name":"chirurgijn","status":"blij","anim":[],"layer":"chirurgijn-blij"},' +
'{"name":"chirurgijn","status":"bosnimf","anim":["chirurgijn-bosnimf-f01","chirurgijn-bosnimf-f02","chirurgijn-bosnimf-f03"],"layer":null},' +
'{"name":"chirurgijn","status":"droevig","anim":[],"layer":"chirurgijn-droevig"},' +
'{"name":"chirurgijnbosnimf","status":null,"anim":[],"layer":"chirurgijnbosnimf"},' +
'{"name":"cycloop","status":null,"anim":[],"layer":"cycloop"},' +
'{"name":"cycloop","status":"blij","anim":[],"layer":"cycloop-blij"},' +
'{"name":"cycloop","status":"brandewijn","anim":[],"layer":"cycloop-brandewijn"},' +
'{"name":"cycloop","status":"brandewijngevallen","anim":[],"layer":"cycloop-brandewijngevallen"},' +
'{"name":"cycloop","status":"woedend","anim":[],"layer":"cycloop-woedend"},' +
'{"name":"dokter","status":null,"anim":[],"layer":"dokter"},' +
'{"name":"dorpsbewoners","status":null,"anim":["dorpsbewoners-f01","dorpsbewoners-f02"],"layer":null},' +
'{"name":"dorpsomroeper","status":null,"anim":[],"layer":"dorpsomroeper"},' +
'{"name":"drie-groene-dwergen","status":null,"anim":["drie-groene-dwergen-f01","drie-groene-dwergen-f02"],"layer":null},' +
'{"name":"dronken-man-bar","status":null,"anim":["dronken-man-bar-f01","dronken-man-bar-f02","dronken-man-bar-f03","dronken-man-bar-f04"],"layer":null},' +
'{"name":"drugsdealer","status":null,"anim":[],"layer":"drugsdealer"},' +
'{"name":"druide-mes","status":null,"anim":[],"layer":"druide-mes"},' +
'{"name":"druide-mes","status":"haktmetmes","anim":["druide-mes-haktmetmes-f01","druide-mes-haktmetmes-f02"],"layer":null},' +
'{"name":"druide-zondermes","status":null,"anim":[],"layer":"druide-zondermes"},' +
'{"name":"druide-zondermes","status":"slaapt","anim":[],"layer":"druide-zondermes-slaapt"},' +
'{"name":"eerdmannetje","status":null,"anim":[],"layer":"eerdmannetje"},' +
'{"name":"eindpoppetje-50plus","status":null,"anim":[],"layer":"eindpoppetje-50plus"},' +
'{"name":"eindpoppetje-bij1","status":null,"anim":[],"layer":"eindpoppetje-bij1"},' +
'{"name":"eindpoppetje-cda","status":null,"anim":[],"layer":"eindpoppetje-cda"},' +
'{"name":"eindpoppetje-cu","status":null,"anim":[],"layer":"eindpoppetje-cu"},' +
'{"name":"eindpoppetje-d66","status":null,"anim":[],"layer":"eindpoppetje-d66"},' +
'{"name":"eindpoppetje-denk","status":null,"anim":[],"layer":"eindpoppetje-denk"},' +
'{"name":"eindpoppetje-fvd","status":null,"anim":[],"layer":"eindpoppetje-fvd"},' +
'{"name":"eindpoppetje-gl","status":null,"anim":[],"layer":"eindpoppetje-gl"},' +
'{"name":"eindpoppetje-ja21","status":null,"anim":[],"layer":"eindpoppetje-ja21"},' +
'{"name":"eindpoppetje-pvda","status":null,"anim":[],"layer":"eindpoppetje-pvda"},' +
'{"name":"eindpoppetje-pvdd","status":null,"anim":[],"layer":"eindpoppetje-pvdd"},' +
'{"name":"eindpoppetje-pvv","status":null,"anim":[],"layer":"eindpoppetje-pvv"},' +
'{"name":"eindpoppetje-sgp","status":null,"anim":[],"layer":"eindpoppetje-sgp"},' +
'{"name":"eindpoppetje-sp","status":null,"anim":[],"layer":"eindpoppetje-sp"},' +
'{"name":"eindpoppetje-vvd","status":null,"anim":[],"layer":"eindpoppetje-vvd"},' +
'{"name":"elf","status":null,"anim":[],"layer":"elf"},' +
'{"name":"fee","status":null,"anim":[],"layer":"fee"},' +
'{"name":"goudzoeker-met-schep","status":null,"anim":["goudzoeker-met-schep-f01","goudzoeker-met-schep-f02","goudzoeker-met-schep-f03"],"layer":null},' +
'{"name":"griffioen","status":null,"anim":[],"layer":"griffioen"},' +
'{"name":"griffioen","status":"gevangen","anim":[],"layer":"griffioen-gevangen"},' +
'{"name":"griffioen","status":"loopt","anim":["griffioen-loopt-f01","griffioen-loopt-f02"],"layer":null},' +
'{"name":"griffioen","status":"vrij","anim":["griffioen-vrij-f01","griffioen-vrij-f02"],"layer":null},' +
'{"name":"groene-dwerg","status":null,"anim":[],"layer":"groene-dwerg"},' +
'{"name":"groene-dwerg","status":"blij","anim":[],"layer":"groene-dwerg-blij"},' +
'{"name":"groep-feestvierders","status":null,"anim":["groep-feestvierders-f01","groep-feestvierders-f02"],"layer":null},' +
'{"name":"groep-jonge-mensen","status":"blij","anim":["groep-jonge-mensen-blij-f01","groep-jonge-mensen-blij-f02"],"layer":null},' +
'{"name":"groep-jonge-mensen","status":null,"anim":["groep-jonge-mensen-f01","groep-jonge-mensen-f02"],"layer":null},' +
'{"name":"groep-oude-mensen","status":null,"anim":[],"layer":"groep-oude-mensen"},' +
'{"name":"groep-oude-mensen","status":"blij","anim":[],"layer":"groep-oude-mensen-blij"},' +
'{"name":"groep-verschillende-wezens","status":null,"anim":["groep-verschillende-wezens-f01","groep-verschillende-wezens-f02"],"layer":null},' +
'{"name":"groepbosnimfen","status":null,"anim":["groepbosnimfen-f01","groepbosnimfen-f02","groepbosnimfen-f03","groepbosnimfen-f04"],"layer":null},' +
'{"name":"handelaar1","status":null,"anim":[],"layer":"handelaar1"},' +
'{"name":"handelaar2","status":null,"anim":[],"layer":"handelaar2"},' +
'{"name":"hans-trol","status":null,"anim":["hans-trol-f01","hans-trol-f02"],"layer":null},' +
'{"name":"harry-potterachtig-mannetje","status":null,"anim":[],"layer":"harry-potterachtig-mannetje"},' +
'{"name":"harry-potterachtig-mannetje","status":"lopend","anim":["harry-potterachtig-mannetje-lopend-f01","harry-potterachtig-mannetje-lopend-f02"],"layer":null},' +
'{"name":"henk-trol","status":"blij","anim":[],"layer":"henk-trol-blij"},' +
'{"name":"henk-trol","status":"boos","anim":[],"layer":"henk-trol-boos"},' +
'{"name":"henk-trol","status":"danst","anim":["henk-trol-danst-f01","henk-trol-danst-f02","henk-trol-danst-f03","henk-trol-danst-f04"],"layer":null},' +
'{"name":"henk-trol","status":null,"anim":["henk-trol-f01","henk-trol-f02"],"layer":null},' +
'{"name":"henk-trol","status":"geslagen","anim":[],"layer":"henk-trol-geslagen"},' +
'{"name":"henk-trol","status":"neutraal","anim":["henk-trol-neutraal-f01","henk-trol-neutraal-f02"],"layer":null},' +
'{"name":"henk-trol","status":"op-de-rug","anim":[],"layer":"henk-trol-op-de-rug"},' +
'{"name":"henk-trol","status":"perkamentje","anim":[],"layer":"henk-trol-perkamentje"},' +
'{"name":"henk-trol","status":"rent","anim":["henk-trol-rent-f01","henk-trol-rent-f02"],"layer":null},' +
'{"name":"henk-trol","status":"traan","anim":["henk-trol-traan-f01","henk-trol-traan-f02"],"layer":null},' +
'{"name":"henk-trol","status":"zwaait","anim":["henk-trol-zwaait-f01","henk-trol-zwaait-f02"],"layer":null},' +
'{"name":"herbergier","status":null,"anim":[],"layer":"herbergier"},' +
'{"name":"hondje","status":null,"anim":[],"layer":"hondje"},' +
'{"name":"hondje","status":"blaft","anim":["hondje-blaft-f01","hondje-blaft-f02"],"layer":null},' +
'{"name":"hondje","status":"lopend","anim":["hondje-lopend-f01","hondje-lopend-f02","hondje-lopend-f03","hondje-lopend-f04"],"layer":null},' +
'{"name":"hondje","status":"met-ander-hondje","anim":["hondje-met-ander-hondje-f01","hondje-met-ander-hondje-f02"],"layer":null},' +
'{"name":"hondje","status":"poepend","anim":["hondje-poepend-f01","hondje-poepend-f02","hondje-poepend-f03"],"layer":null},' +
'{"name":"hondje","status":"staand","anim":[],"layer":"hondje-staand"},' +
'{"name":"hout-hakker-met-bijl","status":null,"anim":[],"layer":"hout-hakker-met-bijl"},' +
'{"name":"huilende-bosnimf","status":null,"anim":["huilende-bosnimf-f01","huilende-bosnimf-f02"],"layer":null},' +
'{"name":"hummerkoets","status":null,"anim":["hummerkoets-anim-f01","hummerkoets-anim-f02"],"layer":null},' +
'{"name":"iemand-in-een-burka","status":null,"anim":[],"layer":"iemand-in-een-burka"},' +
'{"name":"jager","status":null,"anim":[],"layer":"jager"},' +
'{"name":"jager","status":"wegkijkend","anim":[],"layer":"jager-wegkijkend"},' +
'{"name":"jan-nagel","status":null,"anim":[],"layer":"jan-nagel"},' +
'{"name":"jan-nagel","status":"blij","anim":[],"layer":"jan-nagel-blij"},' +
'{"name":"jan-nagel","status":"boos","anim":[],"layer":"jan-nagel-boos"},' +
'{"name":"jan-nagel","status":"pulp","anim":[],"layer":"jan-nagel-pulp"},' +
'{"name":"jonkheer","status":null,"anim":[],"layer":"jonkheer"},' +
'{"name":"jp-coenachtig-standbeeld","status":null,"anim":[],"layer":"jp-coenachtig-standbeeld"},' +
'{"name":"jp-coenachtig-standbeeld","status":"knipoog","anim":["jp-coenachtig-standbeeld-knipoog-f01","jp-coenachtig-standbeeld-knipoog-f02"],"layer":null},' +
'{"name":"jp-coenachtig-standbeeld","status":"omgevallen","anim":[],"layer":"jp-coenachtig-standbeeld-omgevallen"},' +
'{"name":"kabouter","status":null,"anim":[],"layer":"kabouter"},' +
'{"name":"kabouter","status":"onthoofd","anim":[],"layer":"kabouter-onthoofd"},' +
'{"name":"kaboutergezin","status":null,"anim":["kaboutergezin-f01","kaboutergezin-f02"],"layer":null},' +
'{"name":"kaboutersbijdruide","status":null,"anim":["kaboutersbijdruide-f01","kaboutersbijdruide-f02"],"layer":null},' +
'{"name":"kaboutersbijdruide","status":"lopend","anim":["kaboutersbijdruide-lopend-f01","kaboutersbijdruide-lopend-f02"],"layer":null},' +
'{"name":"kaboutersbijdruide","status":"neutraal","anim":["kaboutersbijdruide-neutraal-f01","kaboutersbijdruide-neutraal-f02"],"layer":null},' +
'{"name":"kar-met-nimfengezin","status":null,"anim":[],"layer":"kar-met-nimfengezin"},' +
'{"name":"kindje","status":null,"anim":["kindje-f01","kindje-f02"],"layer":null},' +
'{"name":"kindje","status":"lopend","anim":["kindje-lopend-f01","kindje-lopend-f02"],"layer":null},' +
'{"name":"krokomuis","status":null,"anim":[],"layer":"krokomuis"},' +
'{"name":"krokomuis","status":"lopend","anim":["krokomuis-lopend-f01","krokomuis-lopend-f02","krokomuis-lopend-f03","krokomuis-lopend-f04"],"layer":null},' +
'{"name":"lachend-publiek","status":null,"anim":["lachend-publiek-f01","lachend-publiek-f02"],"layer":null},' +
'{"name":"landkabouter","status":null,"anim":[],"layer":"landkabouter"},' +
'{"name":"langharigetrol","status":null,"anim":[],"layer":"langharigetrol"},' +
'{"name":"langharigetrol","status":"rennend","anim":["langharigetrol-rennend-f01","langharigetrol-rennend-f02"],"layer":null},' +
'{"name":"langharigetrol","status":"zittend","anim":[],"layer":"langharigetrol-zittend"},' +
'{"name":"magier","status":null,"anim":[],"layer":"magier"},' +
'{"name":"magier","status":"gewoon","anim":[],"layer":"magier-gewoon"},' +
'{"name":"magier","status":"schreeuwend","anim":["magier-schreeuwend-f01","magier-schreeuwend-f02"],"layer":null},' +
'{"name":"man-1","status":null,"anim":[],"layer":"man-1"},' +
'{"name":"man-1","status":"boos","anim":[],"layer":"man-1-boos"},' +
'{"name":"man-1","status":"droevig","anim":[],"layer":"man-1-droevig"},' +
'{"name":"man-2","status":null,"anim":[],"layer":"man-2"},' +
'{"name":"marskramer","status":null,"anim":[],"layer":"marskramer"},' +
'{"name":"marskramer","status":"verdrietig","anim":[],"layer":"marskramer-verdrietig"},' +
'{"name":"melvin-het-meningenmonster","status":null,"anim":[],"layer":"melvin-het-meningenmonster"},' +
'{"name":"melvin-het-meningenmonster","status":"duim","anim":[],"layer":"melvin-het-meningenmonster-duim"},' +
'{"name":"misdadiger","status":null,"anim":[],"layer":"misdadiger"},' +
'{"name":"misdadiger","status":"onthoofd","anim":[],"layer":"misdadiger-onthoofd"},' +
'{"name":"naakteliggendeprins","status":null,"anim":["naakteliggendeprins-f01","naakteliggendeprins-f02"],"layer":null},' +
'{"name":"nimf","status":null,"anim":[],"layer":"nimf"},' +
'{"name":"olihoorn","status":null,"anim":[],"layer":"olihoorn"},' +
'{"name":"olihoorn","status":"lopend","anim":["olihoorn-lopend-f01","olihoorn-lopend-f02","olihoorn-lopend-f03","olihoorn-lopend-f04"],"layer":null},' +
'{"name":"ork","status":null,"anim":[],"layer":"ork"},' +
'{"name":"oud-dametje-1","status":null,"anim":[],"layer":"oud-dametje-1"},' +
'{"name":"oud-dametje-2","status":null,"anim":[],"layer":"oud-dametje-2"},' +
'{"name":"oud-lijk-bij-boom","status":null,"anim":["oud-lijk-bij-boom-f01","oud-lijk-bij-boom-f02","oud-lijk-bij-boom-f03","oud-lijk-bij-boom-f04"],"layer":null},' +
'{"name":"oud-mannetje-1","status":null,"anim":[],"layer":"oud-mannetje-1"},' +
'{"name":"oud-mannetje-2","status":null,"anim":[],"layer":"oud-mannetje-2"},' +
'{"name":"oud-vrouwtje-met-hondje","status":null,"anim":["oud-vrouwtje-met-hondje-f01","oud-vrouwtje-met-hondje-f02"],"layer":null},' +
'{"name":"oud-vrouwtje-met-hondje","status":"springend","anim":["oud-vrouwtje-met-hondje-springend-f01","oud-vrouwtje-met-hondje-springend-f02"],"layer":null},' +
'{"name":"oude-geezer-met-gouden-stok","status":null,"anim":[],"layer":"oude-geezer-met-gouden-stok"},' +
'{"name":"oude-kabouter","status":null,"anim":[],"layer":"oude-kabouter"},' +
'{"name":"oude-landkabouter","status":null,"anim":[],"layer":"oude-landkabouter"},' +
'{"name":"oude-liggende-vrouw","status":"boos","anim":["oude-liggende-vrouw-boos-f01","oude-liggende-vrouw-boos-f02"],"layer":null},' +
'{"name":"oude-liggende-vrouw","status":"dood","anim":[],"layer":"oude-liggende-vrouw-dood"},' +
'{"name":"oude-liggende-vrouw","status":null,"anim":["oude-liggende-vrouw-f01","oude-liggende-vrouw-f02"],"layer":null},' +
'{"name":"oudeman-in-gewaad","status":null,"anim":[],"layer":"oudeman-in-gewaad"},' +
'{"name":"paarden","status":null,"anim":["paarden-f01","paarden-f02"],"layer":null},' +
'{"name":"paarden","status":"lopend","anim":["paarden-lopend-f01","paarden-lopend-f02"],"layer":null},' +
'{"name":"paardenhandelaar","status":null,"anim":[],"layer":"paardenhandelaar"},' +
'{"name":"pegasus","status":null,"anim":["pegasus-f01","pegasus-f02"],"layer":null},' +
'{"name":"poke-trainer-1","status":null,"anim":[],"layer":"poke-trainer-1"},' +
'{"name":"poke-trainer-2","status":null,"anim":[],"layer":"poke-trainer-2"},' +
'{"name":"politie-agentachtige","status":null,"anim":[],"layer":"politie-agentachtige"},' +
'{"name":"poppetje-dat-lijkt-op-jesse-klaver","status":null,"anim":[],"layer":"poppetje-dat-lijkt-op-jesse-klaver"},' +
'{"name":"poppetje-dat-lijkt-op-jesse-klaver","status":"pak","anim":[],"layer":"poppetje-dat-lijkt-op-jesse-klaver-pak"},' +
'{"name":"poppetje-dat-lijkt-op-lillianne-ploumen","status":null,"anim":[],"layer":"poppetje-dat-lijkt-op-lillianne-ploumen"},' +
'{"name":"poppetje-dat-lijkt-op-lillianne-ploumen","status":"jurk","anim":[],"layer":"poppetje-dat-lijkt-op-lillianne-ploumen-jurk"},' +
'{"name":"prins-berenhart-junior","status":null,"anim":[],"layer":"prins-berenhart-junior"},' +
'{"name":"prins-op-een-paard","status":null,"anim":[],"layer":"prins-op-een-paard"},' +
'{"name":"prins-op-een-paard","status":"blij","anim":["prins-op-een-paard-blij-f01","prins-op-een-paard-blij-f02","prins-op-een-paard-blij-f03","prins-op-een-paard-blij-f04"],"layer":null},' +
'{"name":"prins-op-een-paard","status":"boos","anim":["prins-op-een-paard-boos-f01","prins-op-een-paard-boos-f02","prins-op-een-paard-boos-f03","prins-op-een-paard-boos-f04"],"layer":null},' +
'{"name":"prins-op-een-paard","status":"loopt","anim":["prins-op-een-paard-loopt-f01","prins-op-een-paard-loopt-f02","prins-op-een-paard-loopt-f03","prins-op-een-paard-loopt-f04"],"layer":null},' +
'{"name":"prins-op-een-paard","status":"stilstaand","anim":[],"layer":"prins-op-een-paard-stilstaand"},' +
'{"name":"prins1","status":null,"anim":[],"layer":"prins1"},' +
'{"name":"prins1","status":"hand","anim":[],"layer":"prins1-hand"},' +
'{"name":"prins1","status":"normaal","anim":[],"layer":"prins1-normaal"},' +
'{"name":"raadsleden","status":null,"anim":["raadsleden-f01","raadsleden-f02"],"layer":null},' +
'{"name":"reiziger","status":null,"anim":[],"layer":"reiziger"},' +
'{"name":"ridder-verslagen-tegen-boom","status":null,"anim":[],"layer":"ridder-verslagen-tegen-boom"},' +
'{"name":"rode-ridder-met-rode-roos","status":null,"anim":["rode-ridder-met-rode-roos-f01","rode-ridder-met-rode-roos-f02"],"layer":null},' +
'{"name":"smid","status":null,"anim":[],"layer":"smid"},' +
'{"name":"soldaten","status":null,"anim":[],"layer":"soldaten"},' +
'{"name":"soldaten","status":"marcherend","anim":["soldaten-marcherend-f01","soldaten-marcherend-f02","soldaten-marcherend-f03","soldaten-marcherend-f04"],"layer":null},' +
'{"name":"standbeeld","status":null,"anim":[],"layer":"standbeeld"},' +
'{"name":"tienermoedertje","status":null,"anim":["tienermoedertje-f01","tienermoedertje-f02"],"layer":null},' +
'{"name":"tienermoedertje","status":"gestopt-huilen","anim":[],"layer":"tienermoedertje-gestopt-huilen"},' +
'{"name":"twee-huilende-kindjes","status":"blij","anim":[],"layer":"twee-huilende-kindjes-blij"},' +
'{"name":"twee-huilende-kindjes","status":null,"anim":["twee-huilende-kindjes-f01","twee-huilende-kindjes-f02"],"layer":null},' +
'{"name":"twee-trouwende-kabouters","status":null,"anim":["twee-trouwende-kabouters-f01","twee-trouwende-kabouters-f02","twee-trouwende-kabouters-f03","twee-trouwende-kabouters-f04"],"layer":null},' +
'{"name":"visser-in-bootje","status":null,"anim":["visser-in-bootje-f01","visser-in-bootje-f02"],"layer":null},' +
'{"name":"vrouw-op-boomstronk","status":null,"anim":[],"layer":"vrouw-op-boomstronk"},' +
'{"name":"vrouw-van-herbergier","status":null,"anim":[],"layer":"vrouw-van-herbergier"},' +
'{"name":"vulkaanwachter","status":null,"anim":[],"layer":"vulkaanwachter"},'
personages = personages.slice(0, -1) + ']'

achtergronden = '[' +
'{"name":"boerderij","bg":"boerderij-bg","fg":"boerderij-fg","bganim":["boerderij-bganim-f01","boerderij-bganim-f02"],"fganim":[]},' +
'{"name":"boshouthakker","bg":"boshouthakker-bg","fg":"boshouthakker-fg","bganim":[],"fganim":[]},' +
'{"name":"boshouthakkeromgehakt","bg":"boshouthakkeromgehakt-bg","fg":"boshouthakkeromgehakt-fg","bganim":[],"fganim":[]},' +
'{"name":"bosopenplek","bg":"bosopenplek-bg","fg":"bosopenplek-fg","bganim":["bosopenplek-bganim-f01","bosopenplek-bganim-f02","bosopenplek-bganim-f03","bosopenplek-bganim-f04"],"fganim":[]},' +
'{"name":"bospad1","bg":"bospad1-bg","fg":"bospad1-fg","bganim":[],"fganim":[]},' +
'{"name":"bospad10","bg":"bospad10-bg","fg":null,"bganim":["bospad10-bganim-f01","bospad10-bganim-f02","bospad10-bganim-f03"],"fganim":[]},' +
'{"name":"bospad11","bg":"bospad11-bg","fg":null,"bganim":["bospad11-bganim-f01","bospad11-bganim-f02","bospad11-bganim-f03"],"fganim":[]},' +
'{"name":"bospad12","bg":"bospad12-bg","fg":null,"bganim":["bospad12-bganim-f01","bospad12-bganim-f02","bospad12-bganim-f03"],"fganim":[]},' +
'{"name":"bospad2","bg":"bospad2-bg","fg":"bospad2-fg","bganim":[],"fganim":[]},' +
'{"name":"bospad3","bg":"bospad3-bg","fg":"bospad3-fg","bganim":[],"fganim":[]},' +
'{"name":"bospad4","bg":"bospad4-bg","fg":"bospad4-fg","bganim":[],"fganim":[]},' +
'{"name":"bospad5","bg":"bospad5-bg","fg":"bospad5-fg","bganim":[],"fganim":[]},' +
'{"name":"bospad6","bg":"bospad6-bg","fg":"bospad6-fg","bganim":[],"fganim":[]},' +
'{"name":"bospad7","bg":"bospad7-bg","fg":null,"bganim":["bospad7-bganim-f01","bospad7-bganim-f02","bospad7-bganim-f03"],"fganim":[]},' +
'{"name":"bospad8","bg":"bospad8-bg","fg":null,"bganim":["bospad8-bganim-f01","bospad8-bganim-f02","bospad8-bganim-f03"],"fganim":[]},' +
'{"name":"bospad9","bg":"bospad9-bg","fg":null,"bganim":["bospad9-bganim-f01","bospad9-bganim-f02","bospad9-bganim-f03"],"fganim":[]},' +
'{"name":"bosrand","bg":"bosrand-bg","fg":"bosrand-fg","bganim":[],"fganim":[]},' +
'{"name":"boszonsondergang","bg":"boszonsondergang-bg","fg":"boszonsondergang-fg","bganim":["boszonsondergang-bganim-f01","boszonsondergang-bganim-f02","boszonsondergang-bganim-f03","boszonsondergang-bganim-f04","boszonsondergang-bganim-f05","boszonsondergang-bganim-f06","boszonsondergang-bganim-f07","boszonsondergang-bganim-f08","boszonsondergang-bganim-f09","boszonsondergang-bganim-f10","boszonsondergang-bganim-f11","boszonsondergang-bganim-f12","boszonsondergang-bganim-f13","boszonsondergang-bganim-f14","boszonsondergang-bganim-f15","boszonsondergang-bganim-f16","boszonsondergang-bganim-f17","boszonsondergang-bganim-f18","boszonsondergang-bganim-f19","boszonsondergang-bganim-f20"],"fganim":[]},' +
'{"name":"brug","bg":"brug-bg","fg":"brug-fg","bganim":["brug-bganim-f01","brug-bganim-f02"],"fganim":[]},' +
'{"name":"dokterinterieur","bg":"dokterinterieur-bg","fg":"dokterinterieur-fg","bganim":[],"fganim":[]},' +
'{"name":"eindscherm","bg":"eindscherm-bg","fg":"eindscherm-fg","bganim":["eindscherm-bganim-f01","eindscherm-bganim-f02","eindscherm-bganim-f03","eindscherm-bganim-f04"],"fganim":[]},' +
'{"name":"grot","bg":"grot-bg","fg":"grot-fg","bganim":[],"fganim":[]},' +
'{"name":"grotregen","bg":"grotregen-bg","fg":"grotregen-fg","bganim":["grotregen-bganim-f01","grotregen-bganim-f02","grotregen-bganim-f03","grotregen-bganim-f04","grotregen-bganim-f05","grotregen-bganim-f06","grotregen-bganim-f07","grotregen-bganim-f08","grotregen-bganim-f09","grotregen-bganim-f10","grotregen-bganim-f11","grotregen-bganim-f12","grotregen-bganim-f13","grotregen-bganim-f14","grotregen-bganim-f15","grotregen-bganim-f16","grotregen-bganim-f17","grotregen-bganim-f18","grotregen-bganim-f19","grotregen-bganim-f20"],"fganim":["grotregen-fganim-f01","grotregen-fganim-f02","grotregen-fganim-f03","grotregen-fganim-f04"]},' +
'{"name":"herberg","bg":"herberg-bg","fg":"herberg-fg","bganim":["herberg-bganim-f01","herberg-bganim-f02"],"fganim":[]},' +
'{"name":"herberginterieur","bg":"herberginterieur-bg","fg":"herberginterieur-fg","bganim":["herberginterieur-bganim-f01"],"fganim":[]},' +
'{"name":"kasteel","bg":"kasteel-bg","fg":"kasteel-fg","bganim":["kasteel-bganim-f01","kasteel-bganim-f02","kasteel-bganim-f03","kasteel-bganim-f04"],"fganim":[]},' +
'{"name":"kerkjeinhetbos","bg":"kerkjeinhetbos-bg","fg":"kerkjeinhetbos-fg","bganim":["kerkjeinhetbos-bganim-f01","kerkjeinhetbos-bganim-f02"],"fganim":[]},' +
'{"name":"meertje","bg":"meertje-bg","fg":"meertje-fg","bganim":["meertje-bganim-f01","meertje-bganim-f02"],"fganim":[]},' +
'{"name":"meertjezonsondergang","bg":"meertjezonsondergang-bg","fg":"meertjezonsondergang-fg","bganim":["meertjezonsondergang-bganim-f01","meertjezonsondergang-bganim-f02"],"fganim":[]},' +
'{"name":"ruine","bg":"ruine-bg","fg":"ruine-fg","bganim":[],"fganim":[]},' +
'{"name":"strand","bg":"strand-bg","fg":"strand-fg","bganim":["strand-bganim-f01","strand-bganim-f02","strand-bganim-f03","strand-bganim-f04"],"fganim":[]},' +
'{"name":"village","bg":"village-bg","fg":"village-fg","bganim":["village-bganim-f01","village-bganim-f02","village-bganim-f03","village-bganim-f04"],"fganim":[]},' +
'{"name":"villagedokter","bg":"villagedokter-bg","fg":"villagedokter-fg","bganim":["villagedokter-bganim-f01","villagedokter-bganim-f02","villagedokter-bganim-f03","villagedokter-bganim-f04"],"fganim":[]},' +
'{"name":"vulkaan","bg":"vulkaan-bg","fg":"vulkaan-fg","bganim":[],"fganim":[]},' +
'{"name":"winkelinterieur","bg":"winkelinterieur-bg","fg":"winkelinterieur-fg","bganim":[],"fganim":[]},'
achtergronden = achtergronden.slice(0, -1) + ']'


afbeeldingpaden = '[' +
'{"name":"boerderij-bg","path":"' + scenepad + '/boerderij-bg.png"},' +
'{"name":"boerderij-bganim-f01","path":"' + scenepad + '/boerderij-bganim-f01.png"},' +
'{"name":"boerderij-bganim-f02","path":"' + scenepad + '/boerderij-bganim-f02.png"},' +
'{"name":"boerderij-fg","path":"' + scenepad + '/boerderij-fg.png"},' +
'{"name":"boshouthakker-bg","path":"' + scenepad + '/boshouthakker-bg.png"},' +
'{"name":"boshouthakker-fg","path":"' + scenepad + '/boshouthakker-fg.png"},' +
'{"name":"boshouthakkeromgehakt-bg","path":"' + scenepad + '/boshouthakkeromgehakt-bg.png"},' +
'{"name":"boshouthakkeromgehakt-fg","path":"' + scenepad + '/boshouthakkeromgehakt-fg.png"},' +
'{"name":"bosopenplek-bg","path":"' + scenepad + '/bosopenplek-bg.png"},' +
'{"name":"bosopenplek-bganim-f01","path":"' + scenepad + '/bosopenplek-bganim-f01.png"},' +
'{"name":"bosopenplek-bganim-f02","path":"' + scenepad + '/bosopenplek-bganim-f02.png"},' +
'{"name":"bosopenplek-bganim-f03","path":"' + scenepad + '/bosopenplek-bganim-f03.png"},' +
'{"name":"bosopenplek-bganim-f04","path":"' + scenepad + '/bosopenplek-bganim-f04.png"},' +
'{"name":"bosopenplek-fg","path":"' + scenepad + '/bosopenplek-fg.png"},' +
'{"name":"bospad1-bg","path":"' + scenepad + '/bospad1-bg.png"},' +
'{"name":"bospad1-fg","path":"' + scenepad + '/bospad1-fg.png"},' +
'{"name":"bospad10-bg","path":"' + scenepad + '/bospad10-bg.png"},' +
'{"name":"bospad10-bganim-f01","path":"' + scenepad + '/bospad10-bganim-f01.png"},' +
'{"name":"bospad10-bganim-f02","path":"' + scenepad + '/bospad10-bganim-f02.png"},' +
'{"name":"bospad10-bganim-f03","path":"' + scenepad + '/bospad10-bganim-f03.png"},' +
'{"name":"bospad11-bg","path":"' + scenepad + '/bospad11-bg.png"},' +
'{"name":"bospad11-bganim-f01","path":"' + scenepad + '/bospad11-bganim-f01.png"},' +
'{"name":"bospad11-bganim-f02","path":"' + scenepad + '/bospad11-bganim-f02.png"},' +
'{"name":"bospad11-bganim-f03","path":"' + scenepad + '/bospad11-bganim-f03.png"},' +
'{"name":"bospad12-bg","path":"' + scenepad + '/bospad12-bg.png"},' +
'{"name":"bospad12-bganim-f01","path":"' + scenepad + '/bospad12-bganim-f01.png"},' +
'{"name":"bospad12-bganim-f02","path":"' + scenepad + '/bospad12-bganim-f02.png"},' +
'{"name":"bospad12-bganim-f03","path":"' + scenepad + '/bospad12-bganim-f03.png"},' +
'{"name":"bospad2-bg","path":"' + scenepad + '/bospad2-bg.png"},' +
'{"name":"bospad2-fg","path":"' + scenepad + '/bospad2-fg.png"},' +
'{"name":"bospad3-bg","path":"' + scenepad + '/bospad3-bg.png"},' +
'{"name":"bospad3-fg","path":"' + scenepad + '/bospad3-fg.png"},' +
'{"name":"bospad4-bg","path":"' + scenepad + '/bospad4-bg.png"},' +
'{"name":"bospad4-fg","path":"' + scenepad + '/bospad4-fg.png"},' +
'{"name":"bospad5-bg","path":"' + scenepad + '/bospad5-bg.png"},' +
'{"name":"bospad5-fg","path":"' + scenepad + '/bospad5-fg.png"},' +
'{"name":"bospad6-bg","path":"' + scenepad + '/bospad6-bg.png"},' +
'{"name":"bospad6-fg","path":"' + scenepad + '/bospad6-fg.png"},' +
'{"name":"bospad7-bg","path":"' + scenepad + '/bospad7-bg.png"},' +
'{"name":"bospad7-bganim-f01","path":"' + scenepad + '/bospad7-bganim-f01.png"},' +
'{"name":"bospad7-bganim-f02","path":"' + scenepad + '/bospad7-bganim-f02.png"},' +
'{"name":"bospad7-bganim-f03","path":"' + scenepad + '/bospad7-bganim-f03.png"},' +
'{"name":"bospad8-bg","path":"' + scenepad + '/bospad8-bg.png"},' +
'{"name":"bospad8-bganim-f01","path":"' + scenepad + '/bospad8-bganim-f01.png"},' +
'{"name":"bospad8-bganim-f02","path":"' + scenepad + '/bospad8-bganim-f02.png"},' +
'{"name":"bospad8-bganim-f03","path":"' + scenepad + '/bospad8-bganim-f03.png"},' +
'{"name":"bospad9-bg","path":"' + scenepad + '/bospad9-bg.png"},' +
'{"name":"bospad9-bganim-f01","path":"' + scenepad + '/bospad9-bganim-f01.png"},' +
'{"name":"bospad9-bganim-f02","path":"' + scenepad + '/bospad9-bganim-f02.png"},' +
'{"name":"bospad9-bganim-f03","path":"' + scenepad + '/bospad9-bganim-f03.png"},' +
'{"name":"bosrand-bg","path":"' + scenepad + '/bosrand-bg.png"},' +
'{"name":"bosrand-fg","path":"' + scenepad + '/bosrand-fg.png"},' +
'{"name":"boszonsondergang-bg","path":"' + scenepad + '/boszonsondergang-bg.png"},' +
'{"name":"boszonsondergang-bganim-f01","path":"' + scenepad + '/boszonsondergang-bganim-f01.png"},' +
'{"name":"boszonsondergang-bganim-f02","path":"' + scenepad + '/boszonsondergang-bganim-f02.png"},' +
'{"name":"boszonsondergang-bganim-f03","path":"' + scenepad + '/boszonsondergang-bganim-f03.png"},' +
'{"name":"boszonsondergang-bganim-f04","path":"' + scenepad + '/boszonsondergang-bganim-f04.png"},' +
'{"name":"boszonsondergang-bganim-f05","path":"' + scenepad + '/boszonsondergang-bganim-f05.png"},' +
'{"name":"boszonsondergang-bganim-f06","path":"' + scenepad + '/boszonsondergang-bganim-f06.png"},' +
'{"name":"boszonsondergang-bganim-f07","path":"' + scenepad + '/boszonsondergang-bganim-f07.png"},' +
'{"name":"boszonsondergang-bganim-f08","path":"' + scenepad + '/boszonsondergang-bganim-f08.png"},' +
'{"name":"boszonsondergang-bganim-f09","path":"' + scenepad + '/boszonsondergang-bganim-f09.png"},' +
'{"name":"boszonsondergang-bganim-f10","path":"' + scenepad + '/boszonsondergang-bganim-f10.png"},' +
'{"name":"boszonsondergang-bganim-f11","path":"' + scenepad + '/boszonsondergang-bganim-f11.png"},' +
'{"name":"boszonsondergang-bganim-f12","path":"' + scenepad + '/boszonsondergang-bganim-f12.png"},' +
'{"name":"boszonsondergang-bganim-f13","path":"' + scenepad + '/boszonsondergang-bganim-f13.png"},' +
'{"name":"boszonsondergang-bganim-f14","path":"' + scenepad + '/boszonsondergang-bganim-f14.png"},' +
'{"name":"boszonsondergang-bganim-f15","path":"' + scenepad + '/boszonsondergang-bganim-f15.png"},' +
'{"name":"boszonsondergang-bganim-f16","path":"' + scenepad + '/boszonsondergang-bganim-f16.png"},' +
'{"name":"boszonsondergang-bganim-f17","path":"' + scenepad + '/boszonsondergang-bganim-f17.png"},' +
'{"name":"boszonsondergang-bganim-f18","path":"' + scenepad + '/boszonsondergang-bganim-f18.png"},' +
'{"name":"boszonsondergang-bganim-f19","path":"' + scenepad + '/boszonsondergang-bganim-f19.png"},' +
'{"name":"boszonsondergang-bganim-f20","path":"' + scenepad + '/boszonsondergang-bganim-f20.png"},' +
'{"name":"boszonsondergang-fg","path":"' + scenepad + '/boszonsondergang-fg.png"},' +
'{"name":"brug-bg","path":"' + scenepad + '/brug-bg.png"},' +
'{"name":"brug-bganim-f01","path":"' + scenepad + '/brug-bganim-f01.png"},' +
'{"name":"brug-bganim-f02","path":"' + scenepad + '/brug-bganim-f02.png"},' +
'{"name":"brug-fg","path":"' + scenepad + '/brug-fg.png"},' +
'{"name":"dokterinterieur-bg","path":"' + scenepad + '/dokterinterieur-bg.png"},' +
'{"name":"dokterinterieur-fg","path":"' + scenepad + '/dokterinterieur-fg.png"},' +
'{"name":"eindscherm-bg","path":"' + scenepad + '/eindscherm-bg.png"},' +
'{"name":"eindscherm-bganim-f01","path":"' + scenepad + '/eindscherm-bganim-f01.png"},' +
'{"name":"eindscherm-bganim-f02","path":"' + scenepad + '/eindscherm-bganim-f02.png"},' +
'{"name":"eindscherm-bganim-f03","path":"' + scenepad + '/eindscherm-bganim-f03.png"},' +
'{"name":"eindscherm-bganim-f04","path":"' + scenepad + '/eindscherm-bganim-f04.png"},' +
'{"name":"eindscherm-fg","path":"' + scenepad + '/eindscherm-fg.png"},' +
'{"name":"grot-bg","path":"' + scenepad + '/grot-bg.png"},' +
'{"name":"grot-fg","path":"' + scenepad + '/grot-fg.png"},' +
'{"name":"grotregen-bg","path":"' + scenepad + '/grotregen-bg.png"},' +
'{"name":"grotregen-bganim-f01","path":"' + scenepad + '/grotregen-bganim-f01.png"},' +
'{"name":"grotregen-bganim-f02","path":"' + scenepad + '/grotregen-bganim-f02.png"},' +
'{"name":"grotregen-bganim-f03","path":"' + scenepad + '/grotregen-bganim-f03.png"},' +
'{"name":"grotregen-bganim-f04","path":"' + scenepad + '/grotregen-bganim-f04.png"},' +
'{"name":"grotregen-bganim-f05","path":"' + scenepad + '/grotregen-bganim-f05.png"},' +
'{"name":"grotregen-bganim-f06","path":"' + scenepad + '/grotregen-bganim-f06.png"},' +
'{"name":"grotregen-bganim-f07","path":"' + scenepad + '/grotregen-bganim-f07.png"},' +
'{"name":"grotregen-bganim-f08","path":"' + scenepad + '/grotregen-bganim-f08.png"},' +
'{"name":"grotregen-bganim-f09","path":"' + scenepad + '/grotregen-bganim-f09.png"},' +
'{"name":"grotregen-bganim-f10","path":"' + scenepad + '/grotregen-bganim-f10.png"},' +
'{"name":"grotregen-bganim-f11","path":"' + scenepad + '/grotregen-bganim-f11.png"},' +
'{"name":"grotregen-bganim-f12","path":"' + scenepad + '/grotregen-bganim-f12.png"},' +
'{"name":"grotregen-bganim-f13","path":"' + scenepad + '/grotregen-bganim-f13.png"},' +
'{"name":"grotregen-bganim-f14","path":"' + scenepad + '/grotregen-bganim-f14.png"},' +
'{"name":"grotregen-bganim-f15","path":"' + scenepad + '/grotregen-bganim-f15.png"},' +
'{"name":"grotregen-bganim-f16","path":"' + scenepad + '/grotregen-bganim-f16.png"},' +
'{"name":"grotregen-bganim-f17","path":"' + scenepad + '/grotregen-bganim-f17.png"},' +
'{"name":"grotregen-bganim-f18","path":"' + scenepad + '/grotregen-bganim-f18.png"},' +
'{"name":"grotregen-bganim-f19","path":"' + scenepad + '/grotregen-bganim-f19.png"},' +
'{"name":"grotregen-bganim-f20","path":"' + scenepad + '/grotregen-bganim-f20.png"},' +
'{"name":"grotregen-fg","path":"' + scenepad + '/grotregen-fg.png"},' +
'{"name":"grotregen-fganim-f01","path":"' + scenepad + '/grotregen-fganim-f01.png"},' +
'{"name":"grotregen-fganim-f02","path":"' + scenepad + '/grotregen-fganim-f02.png"},' +
'{"name":"grotregen-fganim-f03","path":"' + scenepad + '/grotregen-fganim-f03.png"},' +
'{"name":"grotregen-fganim-f04","path":"' + scenepad + '/grotregen-fganim-f04.png"},' +
'{"name":"herberg-bg","path":"' + scenepad + '/herberg-bg.png"},' +
'{"name":"herberg-bganim-f01","path":"' + scenepad + '/herberg-bganim-f01.png"},' +
'{"name":"herberg-bganim-f02","path":"' + scenepad + '/herberg-bganim-f02.png"},' +
'{"name":"herberg-fg","path":"' + scenepad + '/herberg-fg.png"},' +
'{"name":"herberginterieur-bg","path":"' + scenepad + '/herberginterieur-bg.png"},' +
'{"name":"herberginterieur-bganim-f01","path":"' + scenepad + '/herberginterieur-bganim-f01.png"},' +
'{"name":"herberginterieur-fg","path":"' + scenepad + '/herberginterieur-fg.png"},' +
'{"name":"kasteel-bg","path":"' + scenepad + '/kasteel-bg.png"},' +
'{"name":"kasteel-bganim-f01","path":"' + scenepad + '/kasteel-bganim-f01.png"},' +
'{"name":"kasteel-bganim-f02","path":"' + scenepad + '/kasteel-bganim-f02.png"},' +
'{"name":"kasteel-bganim-f03","path":"' + scenepad + '/kasteel-bganim-f03.png"},' +
'{"name":"kasteel-bganim-f04","path":"' + scenepad + '/kasteel-bganim-f04.png"},' +
'{"name":"kasteel-fg","path":"' + scenepad + '/kasteel-fg.png"},' +
'{"name":"kerkjeinhetbos-bg","path":"' + scenepad + '/kerkjeinhetbos-bg.png"},' +
'{"name":"kerkjeinhetbos-bganim-f01","path":"' + scenepad + '/kerkjeinhetbos-bganim-f01.png"},' +
'{"name":"kerkjeinhetbos-bganim-f02","path":"' + scenepad + '/kerkjeinhetbos-bganim-f02.png"},' +
'{"name":"kerkjeinhetbos-fg","path":"' + scenepad + '/kerkjeinhetbos-fg.png"},' +
'{"name":"meertje-bg","path":"' + scenepad + '/meertje-bg.png"},' +
'{"name":"meertje-bganim-f01","path":"' + scenepad + '/meertje-bganim-f01.png"},' +
'{"name":"meertje-bganim-f02","path":"' + scenepad + '/meertje-bganim-f02.png"},' +
'{"name":"meertje-fg","path":"' + scenepad + '/meertje-fg.png"},' +
'{"name":"meertjezonsondergang-bg","path":"' + scenepad + '/meertjezonsondergang-bg.png"},' +
'{"name":"meertjezonsondergang-bganim-f01","path":"' + scenepad + '/meertjezonsondergang-bganim-f01.png"},' +
'{"name":"meertjezonsondergang-bganim-f02","path":"' + scenepad + '/meertjezonsondergang-bganim-f02.png"},' +
'{"name":"meertjezonsondergang-fg","path":"' + scenepad + '/meertjezonsondergang-fg.png"},' +
'{"name":"ruine-bg","path":"' + scenepad + '/ruine-bg.png"},' +
'{"name":"ruine-fg","path":"' + scenepad + '/ruine-fg.png"},' +
'{"name":"strand-bg","path":"' + scenepad + '/strand-bg.png"},' +
'{"name":"strand-bganim-f01","path":"' + scenepad + '/strand-bganim-f01.png"},' +
'{"name":"strand-bganim-f02","path":"' + scenepad + '/strand-bganim-f02.png"},' +
'{"name":"strand-bganim-f03","path":"' + scenepad + '/strand-bganim-f03.png"},' +
'{"name":"strand-bganim-f04","path":"' + scenepad + '/strand-bganim-f04.png"},' +
'{"name":"strand-fg","path":"' + scenepad + '/strand-fg.png"},' +
'{"name":"village-bg","path":"' + scenepad + '/village-bg.png"},' +
'{"name":"village-bganim-f01","path":"' + scenepad + '/village-bganim-f01.png"},' +
'{"name":"village-bganim-f02","path":"' + scenepad + '/village-bganim-f02.png"},' +
'{"name":"village-bganim-f03","path":"' + scenepad + '/village-bganim-f03.png"},' +
'{"name":"village-bganim-f04","path":"' + scenepad + '/village-bganim-f04.png"},' +
'{"name":"village-fg","path":"' + scenepad + '/village-fg.png"},' +
'{"name":"villagedokter-bg","path":"' + scenepad + '/villagedokter-bg.png"},' +
'{"name":"villagedokter-bganim-f01","path":"' + scenepad + '/villagedokter-bganim-f01.png"},' +
'{"name":"villagedokter-bganim-f02","path":"' + scenepad + '/villagedokter-bganim-f02.png"},' +
'{"name":"villagedokter-bganim-f03","path":"' + scenepad + '/villagedokter-bganim-f03.png"},' +
'{"name":"villagedokter-bganim-f04","path":"' + scenepad + '/villagedokter-bganim-f04.png"},' +
'{"name":"villagedokter-fg","path":"' + scenepad + '/villagedokter-fg.png"},' +
'{"name":"vulkaan-bg","path":"' + scenepad + '/vulkaan-bg.png"},' +
'{"name":"vulkaan-fg","path":"' + scenepad + '/vulkaan-fg.png"},' +
'{"name":"winkelinterieur-bg","path":"' + scenepad + '/winkelinterieur-bg.png"},' +
'{"name":"winkelinterieur-fg","path":"' + scenepad + '/winkelinterieur-fg.png"},' +
'{"name":"alchemist","path":"' + personagepad + '/alchemist.png"},' +
'{"name":"androgyn-boswezen","path":"' + personagepad + '/androgyn-boswezen.png"},' +
'{"name":"arrestantnimf","path":"' + personagepad + '/arrestantnimf.png"},' +
'{"name":"babykabouters-f01","path":"' + personagepad + '/babykabouters-f01.png"},' +
'{"name":"babykabouters-f02","path":"' + personagepad + '/babykabouters-f02.png"},' +
'{"name":"bargasten-f01","path":"' + personagepad + '/bargasten-f01.png"},' +
'{"name":"bargasten-f02","path":"' + personagepad + '/bargasten-f02.png"},' +
'{"name":"baudetachtige-figuur-met-roeptoeter-f01","path":"' + personagepad + '/baudetachtige-figuur-met-roeptoeter-f01.png"},' +
'{"name":"baudetachtige-figuur-met-roeptoeter-f02","path":"' + personagepad + '/baudetachtige-figuur-met-roeptoeter-f02.png"},' +
'{"name":"bedelaar-op-rug-draak-afgestapt-f01","path":"' + personagepad + '/bedelaar-op-rug-draak-afgestapt-f01.png"},' +
'{"name":"bedelaar-op-rug-draak-afgestapt-f02","path":"' + personagepad + '/bedelaar-op-rug-draak-afgestapt-f02.png"},' +
'{"name":"bedelaar-op-rug-draak-afgestapt-f03","path":"' + personagepad + '/bedelaar-op-rug-draak-afgestapt-f03.png"},' +
'{"name":"bedelaar-op-rug-draak-afgestapt-f04","path":"' + personagepad + '/bedelaar-op-rug-draak-afgestapt-f04.png"},' +
'{"name":"bedelaar-op-rug-draak-f01","path":"' + personagepad + '/bedelaar-op-rug-draak-f01.png"},' +
'{"name":"bedelaar-op-rug-draak-f02","path":"' + personagepad + '/bedelaar-op-rug-draak-f02.png"},' +
'{"name":"bedelaar-op-rug-draak-f03","path":"' + personagepad + '/bedelaar-op-rug-draak-f03.png"},' +
'{"name":"bedelaar-op-rug-draak-f04","path":"' + personagepad + '/bedelaar-op-rug-draak-f04.png"},' +
'{"name":"bedelaar-op-rug-draak-geland-f01","path":"' + personagepad + '/bedelaar-op-rug-draak-geland-f01.png"},' +
'{"name":"bedelaar-op-rug-draak-geland-f02","path":"' + personagepad + '/bedelaar-op-rug-draak-geland-f02.png"},' +
'{"name":"bedelaar-op-rug-draak-geland-f03","path":"' + personagepad + '/bedelaar-op-rug-draak-geland-f03.png"},' +
'{"name":"bedelaar-op-rug-draak-geland-f04","path":"' + personagepad + '/bedelaar-op-rug-draak-geland-f04.png"},' +
'{"name":"bedelaar-op-rug-draak-vliegen-f01","path":"' + personagepad + '/bedelaar-op-rug-draak-vliegen-f01.png"},' +
'{"name":"bedelaar-op-rug-draak-vliegen-f02","path":"' + personagepad + '/bedelaar-op-rug-draak-vliegen-f02.png"},' +
'{"name":"bedelaar-op-rug-draak-vliegen-f03","path":"' + personagepad + '/bedelaar-op-rug-draak-vliegen-f03.png"},' +
'{"name":"bedelaar-op-rug-draak-vliegen-f04","path":"' + personagepad + '/bedelaar-op-rug-draak-vliegen-f04.png"},' +
'{"name":"beul-f01","path":"' + personagepad + '/beul-f01.png"},' +
'{"name":"beul-f02","path":"' + personagepad + '/beul-f02.png"},' +
'{"name":"beul-f03","path":"' + personagepad + '/beul-f03.png"},' +
'{"name":"boer","path":"' + personagepad + '/boer.png"},' +
'{"name":"boer-blij","path":"' + personagepad + '/boer-blij.png"},' +
'{"name":"boer-doormidden","path":"' + personagepad + '/boer-doormidden.png"},' +
'{"name":"bokje-dood-f01","path":"' + personagepad + '/bokje-dood-f01.png"},' +
'{"name":"bokje-dood-f02","path":"' + personagepad + '/bokje-dood-f02.png"},' +
'{"name":"bokje-dood-f03","path":"' + personagepad + '/bokje-dood-f03.png"},' +
'{"name":"bokje-dood-f04","path":"' + personagepad + '/bokje-dood-f04.png"},' +
'{"name":"bokje-f01","path":"' + personagepad + '/bokje-f01.png"},' +
'{"name":"bokje-f02","path":"' + personagepad + '/bokje-f02.png"},' +
'{"name":"bosnimf","path":"' + personagepad + '/bosnimf.png"},' +
'{"name":"bosnimf-huilend-f01","path":"' + personagepad + '/bosnimf-huilend-f01.png"},' +
'{"name":"bosnimf-huilend-f02","path":"' + personagepad + '/bosnimf-huilend-f02.png"},' +
'{"name":"bosnimf-met-lange-armen-f01","path":"' + personagepad + '/bosnimf-met-lange-armen-f01.png"},' +
'{"name":"bosnimf-met-lange-armen-f02","path":"' + personagepad + '/bosnimf-met-lange-armen-f02.png"},' +
'{"name":"bosnimf-neutraal","path":"' + personagepad + '/bosnimf-neutraal.png"},' +
'{"name":"boswachter-f01","path":"' + personagepad + '/boswachter-f01.png"},' +
'{"name":"boswachter-f02","path":"' + personagepad + '/boswachter-f02.png"},' +
'{"name":"brugwachtertrol","path":"' + personagepad + '/brugwachtertrol.png"},' +
'{"name":"brugwachtertrol-confused","path":"' + personagepad + '/brugwachtertrol-confused.png"},' +
'{"name":"bruiloftgasten-f01","path":"' + personagepad + '/bruiloftgasten-f01.png"},' +
'{"name":"bruiloftgasten-f02","path":"' + personagepad + '/bruiloftgasten-f02.png"},' +
'{"name":"buurman-met-bijl","path":"' + personagepad + '/buurman-met-bijl.png"},' +
'{"name":"buurman-met-bijl-blij","path":"' + personagepad + '/buurman-met-bijl-blij.png"},' +
'{"name":"buurman-met-bijl-doormidden","path":"' + personagepad + '/buurman-met-bijl-doormidden.png"},' +
'{"name":"buurman-met-bijl-zonderbijl","path":"' + personagepad + '/buurman-met-bijl-zonderbijl.png"},' +
'{"name":"centaur-f01","path":"' + personagepad + '/centaur-f01.png"},' +
'{"name":"centaur-f02","path":"' + personagepad + '/centaur-f02.png"},' +
'{"name":"chirurgijn","path":"' + personagepad + '/chirurgijn.png"},' +
'{"name":"chirurgijn-blij","path":"' + personagepad + '/chirurgijn-blij.png"},' +
'{"name":"chirurgijn-bosnimf-f01","path":"' + personagepad + '/chirurgijn-bosnimf-f01.png"},' +
'{"name":"chirurgijn-bosnimf-f02","path":"' + personagepad + '/chirurgijn-bosnimf-f02.png"},' +
'{"name":"chirurgijn-bosnimf-f03","path":"' + personagepad + '/chirurgijn-bosnimf-f03.png"},' +
'{"name":"chirurgijn-droevig","path":"' + personagepad + '/chirurgijn-droevig.png"},' +
'{"name":"chirurgijnbosnimf","path":"' + personagepad + '/chirurgijnbosnimf.png"},' +
'{"name":"cycloop","path":"' + personagepad + '/cycloop.png"},' +
'{"name":"cycloop-blij","path":"' + personagepad + '/cycloop-blij.png"},' +
'{"name":"cycloop-brandewijn","path":"' + personagepad + '/cycloop-brandewijn.png"},' +
'{"name":"cycloop-brandewijngevallen","path":"' + personagepad + '/cycloop-brandewijngevallen.png"},' +
'{"name":"cycloop-woedend","path":"' + personagepad + '/cycloop-woedend.png"},' +
'{"name":"dokter","path":"' + personagepad + '/dokter.png"},' +
'{"name":"dorpsbewoners-f01","path":"' + personagepad + '/dorpsbewoners-f01.png"},' +
'{"name":"dorpsbewoners-f02","path":"' + personagepad + '/dorpsbewoners-f02.png"},' +
'{"name":"dorpsomroeper","path":"' + personagepad + '/dorpsomroeper.png"},' +
'{"name":"drie-groene-dwergen-f01","path":"' + personagepad + '/drie-groene-dwergen-f01.png"},' +
'{"name":"drie-groene-dwergen-f02","path":"' + personagepad + '/drie-groene-dwergen-f02.png"},' +
'{"name":"dronken-man-bar-f01","path":"' + personagepad + '/dronken-man-bar-f01.png"},' +
'{"name":"dronken-man-bar-f02","path":"' + personagepad + '/dronken-man-bar-f02.png"},' +
'{"name":"dronken-man-bar-f03","path":"' + personagepad + '/dronken-man-bar-f03.png"},' +
'{"name":"dronken-man-bar-f04","path":"' + personagepad + '/dronken-man-bar-f04.png"},' +
'{"name":"drugsdealer","path":"' + personagepad + '/drugsdealer.png"},' +
'{"name":"druide-mes","path":"' + personagepad + '/druide-mes.png"},' +
'{"name":"druide-mes-haktmetmes-f01","path":"' + personagepad + '/druide-mes-haktmetmes-f01.png"},' +
'{"name":"druide-mes-haktmetmes-f02","path":"' + personagepad + '/druide-mes-haktmetmes-f02.png"},' +
'{"name":"druide-zondermes","path":"' + personagepad + '/druide-zondermes.png"},' +
'{"name":"druide-zondermes-slaapt","path":"' + personagepad + '/druide-zondermes-slaapt.png"},' +
'{"name":"eerdmannetje","path":"' + personagepad + '/eerdmannetje.png"},' +
'{"name":"eindpoppetje-50plus","path":"' + personagepad + '/eindpoppetje-50plus.png"},' +
'{"name":"eindpoppetje-bij1","path":"' + personagepad + '/eindpoppetje-bij1.png"},' +
'{"name":"eindpoppetje-cda","path":"' + personagepad + '/eindpoppetje-cda.png"},' +
'{"name":"eindpoppetje-cu","path":"' + personagepad + '/eindpoppetje-cu.png"},' +
'{"name":"eindpoppetje-d66","path":"' + personagepad + '/eindpoppetje-d66.png"},' +
'{"name":"eindpoppetje-denk","path":"' + personagepad + '/eindpoppetje-denk.png"},' +
'{"name":"eindpoppetje-fvd","path":"' + personagepad + '/eindpoppetje-fvd.png"},' +
'{"name":"eindpoppetje-gl","path":"' + personagepad + '/eindpoppetje-gl.png"},' +
'{"name":"eindpoppetje-ja21","path":"' + personagepad + '/eindpoppetje-ja21.png"},' +
'{"name":"eindpoppetje-pvda","path":"' + personagepad + '/eindpoppetje-pvda.png"},' +
'{"name":"eindpoppetje-pvdd","path":"' + personagepad + '/eindpoppetje-pvdd.png"},' +
'{"name":"eindpoppetje-pvv","path":"' + personagepad + '/eindpoppetje-pvv.png"},' +
'{"name":"eindpoppetje-sgp","path":"' + personagepad + '/eindpoppetje-sgp.png"},' +
'{"name":"eindpoppetje-sp","path":"' + personagepad + '/eindpoppetje-sp.png"},' +
'{"name":"eindpoppetje-vvd","path":"' + personagepad + '/eindpoppetje-vvd.png"},' +
'{"name":"elf","path":"' + personagepad + '/elf.png"},' +
'{"name":"fee","path":"' + personagepad + '/fee.png"},' +
'{"name":"goudzoeker-met-schep-f01","path":"' + personagepad + '/goudzoeker-met-schep-f01.png"},' +
'{"name":"goudzoeker-met-schep-f02","path":"' + personagepad + '/goudzoeker-met-schep-f02.png"},' +
'{"name":"goudzoeker-met-schep-f03","path":"' + personagepad + '/goudzoeker-met-schep-f03.png"},' +
'{"name":"griffioen","path":"' + personagepad + '/griffioen.png"},' +
'{"name":"griffioen-gevangen","path":"' + personagepad + '/griffioen-gevangen.png"},' +
'{"name":"griffioen-loopt-f01","path":"' + personagepad + '/griffioen-loopt-f01.png"},' +
'{"name":"griffioen-loopt-f02","path":"' + personagepad + '/griffioen-loopt-f02.png"},' +
'{"name":"griffioen-vrij","path":"' + personagepad + '/griffioen-vrij.png"},' +
'{"name":"griffioen-vrij-f01","path":"' + personagepad + '/griffioen-vrij-f01.png"},' +
'{"name":"griffioen-vrij-f02","path":"' + personagepad + '/griffioen-vrij-f02.png"},' +
'{"name":"groene-dwerg","path":"' + personagepad + '/groene-dwerg.png"},' +
'{"name":"groene-dwerg-blij","path":"' + personagepad + '/groene-dwerg-blij.png"},' +
'{"name":"groep-feestvierders-f01","path":"' + personagepad + '/groep-feestvierders-f01.png"},' +
'{"name":"groep-feestvierders-f02","path":"' + personagepad + '/groep-feestvierders-f02.png"},' +
'{"name":"groep-jonge-mensen-blij-f01","path":"' + personagepad + '/groep-jonge-mensen-blij-f01.png"},' +
'{"name":"groep-jonge-mensen-blij-f02","path":"' + personagepad + '/groep-jonge-mensen-blij-f02.png"},' +
'{"name":"groep-jonge-mensen-f01","path":"' + personagepad + '/groep-jonge-mensen-f01.png"},' +
'{"name":"groep-jonge-mensen-f02","path":"' + personagepad + '/groep-jonge-mensen-f02.png"},' +
'{"name":"groep-oude-mensen","path":"' + personagepad + '/groep-oude-mensen.png"},' +
'{"name":"groep-oude-mensen-blij","path":"' + personagepad + '/groep-oude-mensen-blij.png"},' +
'{"name":"groep-verschillende-wezens-f01","path":"' + personagepad + '/groep-verschillende-wezens-f01.png"},' +
'{"name":"groep-verschillende-wezens-f02","path":"' + personagepad + '/groep-verschillende-wezens-f02.png"},' +
'{"name":"groepbosnimfen-f01","path":"' + personagepad + '/groepbosnimfen-f01.png"},' +
'{"name":"groepbosnimfen-f02","path":"' + personagepad + '/groepbosnimfen-f02.png"},' +
'{"name":"groepbosnimfen-f03","path":"' + personagepad + '/groepbosnimfen-f03.png"},' +
'{"name":"groepbosnimfen-f04","path":"' + personagepad + '/groepbosnimfen-f04.png"},' +
'{"name":"handelaar1","path":"' + personagepad + '/handelaar1.png"},' +
'{"name":"handelaar2","path":"' + personagepad + '/handelaar2.png"},' +
'{"name":"hans-trol-f01","path":"' + personagepad + '/hans-trol-f01.png"},' +
'{"name":"hans-trol-f02","path":"' + personagepad + '/hans-trol-f02.png"},' +
'{"name":"harry-potterachtig-mannetje","path":"' + personagepad + '/harry-potterachtig-mannetje.png"},' +
'{"name":"harry-potterachtig-mannetje-lopend-f01","path":"' + personagepad + '/harry-potterachtig-mannetje-lopend-f01.png"},' +
'{"name":"harry-potterachtig-mannetje-lopend-f02","path":"' + personagepad + '/harry-potterachtig-mannetje-lopend-f02.png"},' +
'{"name":"henk-trol-blij","path":"' + personagepad + '/henk-trol-blij.png"},' +
'{"name":"henk-trol-boos","path":"' + personagepad + '/henk-trol-boos.png"},' +
'{"name":"henk-trol-danst-f01","path":"' + personagepad + '/henk-trol-danst-f01.png"},' +
'{"name":"henk-trol-danst-f02","path":"' + personagepad + '/henk-trol-danst-f02.png"},' +
'{"name":"henk-trol-danst-f03","path":"' + personagepad + '/henk-trol-danst-f03.png"},' +
'{"name":"henk-trol-danst-f04","path":"' + personagepad + '/henk-trol-danst-f04.png"},' +
'{"name":"henk-trol-f01","path":"' + personagepad + '/henk-trol-f01.png"},' +
'{"name":"henk-trol-f02","path":"' + personagepad + '/henk-trol-f02.png"},' +
'{"name":"henk-trol-geslagen","path":"' + personagepad + '/henk-trol-geslagen.png"},' +
'{"name":"henk-trol-neutraal-f01","path":"' + personagepad + '/henk-trol-neutraal-f01.png"},' +
'{"name":"henk-trol-neutraal-f02","path":"' + personagepad + '/henk-trol-neutraal-f02.png"},' +
'{"name":"henk-trol-op-de-rug","path":"' + personagepad + '/henk-trol-op-de-rug.png"},' +
'{"name":"henk-trol-perkamentje","path":"' + personagepad + '/henk-trol-perkamentje.png"},' +
'{"name":"henk-trol-rent-f01","path":"' + personagepad + '/henk-trol-rent-f01.png"},' +
'{"name":"henk-trol-rent-f02","path":"' + personagepad + '/henk-trol-rent-f02.png"},' +
'{"name":"henk-trol-traan","path":"' + personagepad + '/henk-trol-traan.png"},' +
'{"name":"henk-trol-traan-f01","path":"' + personagepad + '/henk-trol-traan-f01.png"},' +
'{"name":"henk-trol-traan-f02","path":"' + personagepad + '/henk-trol-traan-f02.png"},' +
'{"name":"henk-trol-zwaait-f01","path":"' + personagepad + '/henk-trol-zwaait-f01.png"},' +
'{"name":"henk-trol-zwaait-f02","path":"' + personagepad + '/henk-trol-zwaait-f02.png"},' +
'{"name":"herbergier","path":"' + personagepad + '/herbergier.png"},' +
'{"name":"hondje","path":"' + personagepad + '/hondje.png"},' +
'{"name":"hondje-blaft-f01","path":"' + personagepad + '/hondje-blaft-f01.png"},' +
'{"name":"hondje-blaft-f02","path":"' + personagepad + '/hondje-blaft-f02.png"},' +
'{"name":"hondje-lopend-f01","path":"' + personagepad + '/hondje-lopend-f01.png"},' +
'{"name":"hondje-lopend-f02","path":"' + personagepad + '/hondje-lopend-f02.png"},' +
'{"name":"hondje-lopend-f03","path":"' + personagepad + '/hondje-lopend-f03.png"},' +
'{"name":"hondje-lopend-f04","path":"' + personagepad + '/hondje-lopend-f04.png"},' +
'{"name":"hondje-met-ander-hondje-f01","path":"' + personagepad + '/hondje-met-ander-hondje-f01.png"},' +
'{"name":"hondje-met-ander-hondje-f02","path":"' + personagepad + '/hondje-met-ander-hondje-f02.png"},' +
'{"name":"hondje-poepend-f01","path":"' + personagepad + '/hondje-poepend-f01.png"},' +
'{"name":"hondje-poepend-f02","path":"' + personagepad + '/hondje-poepend-f02.png"},' +
'{"name":"hondje-poepend-f03","path":"' + personagepad + '/hondje-poepend-f03.png"},' +
'{"name":"hondje-staand","path":"' + personagepad + '/hondje-staand.png"},' +
'{"name":"hout-hakker-met-bijl","path":"' + personagepad + '/hout-hakker-met-bijl.png"},' +
'{"name":"huilende-bosnimf-f01","path":"' + personagepad + '/huilende-bosnimf-f01.png"},' +
'{"name":"huilende-bosnimf-f02","path":"' + personagepad + '/huilende-bosnimf-f02.png"},' +
'{"name":"hummerkoets-anim-f01","path":"' + personagepad + '/hummerkoets-anim-f01.png"},' +
'{"name":"hummerkoets-anim-f02","path":"' + personagepad + '/hummerkoets-anim-f02.png"},' +
'{"name":"iemand-in-een-burka","path":"' + personagepad + '/iemand-in-een-burka.png"},' +
'{"name":"jager","path":"' + personagepad + '/jager.png"},' +
'{"name":"jager-wegkijkend","path":"' + personagepad + '/jager-wegkijkend.png"},' +
'{"name":"jan-nagel","path":"' + personagepad + '/jan-nagel.png"},' +
'{"name":"jan-nagel-blij","path":"' + personagepad + '/jan-nagel-blij.png"},' +
'{"name":"jan-nagel-boos","path":"' + personagepad + '/jan-nagel-boos.png"},' +
'{"name":"jan-nagel-pulp","path":"' + personagepad + '/jan-nagel-pulp.png"},' +
'{"name":"jonkheer","path":"' + personagepad + '/jonkheer.png"},' +
'{"name":"jp-coenachtig-standbeeld","path":"' + personagepad + '/jp-coenachtig-standbeeld.png"},' +
'{"name":"jp-coenachtig-standbeeld-knipoog-f01","path":"' + personagepad + '/jp-coenachtig-standbeeld-knipoog-f01.png"},' +
'{"name":"jp-coenachtig-standbeeld-knipoog-f02","path":"' + personagepad + '/jp-coenachtig-standbeeld-knipoog-f02.png"},' +
'{"name":"jp-coenachtig-standbeeld-omgevallen","path":"' + personagepad + '/jp-coenachtig-standbeeld-omgevallen.png"},' +
'{"name":"kabouter","path":"' + personagepad + '/kabouter.png"},' +
'{"name":"kabouter-onthoofd","path":"' + personagepad + '/kabouter-onthoofd.png"},' +
'{"name":"kaboutergezin-f01","path":"' + personagepad + '/kaboutergezin-f01.png"},' +
'{"name":"kaboutergezin-f02","path":"' + personagepad + '/kaboutergezin-f02.png"},' +
'{"name":"kaboutersbijdruide-f01","path":"' + personagepad + '/kaboutersbijdruide-f01.png"},' +
'{"name":"kaboutersbijdruide-f02","path":"' + personagepad + '/kaboutersbijdruide-f02.png"},' +
'{"name":"kaboutersbijdruide-lopend-f01","path":"' + personagepad + '/kaboutersbijdruide-lopend-f01.png"},' +
'{"name":"kaboutersbijdruide-lopend-f02","path":"' + personagepad + '/kaboutersbijdruide-lopend-f02.png"},' +
'{"name":"kaboutersbijdruide-neutraal-f01","path":"' + personagepad + '/kaboutersbijdruide-neutraal-f01.png"},' +
'{"name":"kaboutersbijdruide-neutraal-f02","path":"' + personagepad + '/kaboutersbijdruide-neutraal-f02.png"},' +
'{"name":"kar-met-nimfengezin","path":"' + personagepad + '/kar-met-nimfengezin.png"},' +
'{"name":"kindje-f01","path":"' + personagepad + '/kindje-f01.png"},' +
'{"name":"kindje-f02","path":"' + personagepad + '/kindje-f02.png"},' +
'{"name":"kindje-lopend-f01","path":"' + personagepad + '/kindje-lopend-f01.png"},' +
'{"name":"kindje-lopend-f02","path":"' + personagepad + '/kindje-lopend-f02.png"},' +
'{"name":"krokomuis","path":"' + personagepad + '/krokomuis.png"},' +
'{"name":"krokomuis-lopend-f01","path":"' + personagepad + '/krokomuis-lopend-f01.png"},' +
'{"name":"krokomuis-lopend-f02","path":"' + personagepad + '/krokomuis-lopend-f02.png"},' +
'{"name":"krokomuis-lopend-f03","path":"' + personagepad + '/krokomuis-lopend-f03.png"},' +
'{"name":"krokomuis-lopend-f04","path":"' + personagepad + '/krokomuis-lopend-f04.png"},' +
'{"name":"lachend-publiek-f01","path":"' + personagepad + '/lachend-publiek-f01.png"},' +
'{"name":"lachend-publiek-f02","path":"' + personagepad + '/lachend-publiek-f02.png"},' +
'{"name":"landkabouter","path":"' + personagepad + '/landkabouter.png"},' +
'{"name":"langharigetrol","path":"' + personagepad + '/langharigetrol.png"},' +
'{"name":"langharigetrol-rennend-f01","path":"' + personagepad + '/langharigetrol-rennend-f01.png"},' +
'{"name":"langharigetrol-rennend-f02","path":"' + personagepad + '/langharigetrol-rennend-f02.png"},' +
'{"name":"langharigetrol-zittend","path":"' + personagepad + '/langharigetrol-zittend.png"},' +
'{"name":"magier","path":"' + personagepad + '/magier.png"},' +
'{"name":"magier-gewoon","path":"' + personagepad + '/magier-gewoon.png"},' +
'{"name":"magier-schreeuwend-f01","path":"' + personagepad + '/magier-schreeuwend-f01.png"},' +
'{"name":"magier-schreeuwend-f02","path":"' + personagepad + '/magier-schreeuwend-f02.png"},' +
'{"name":"man-1","path":"' + personagepad + '/man-1.png"},' +
'{"name":"man-1-boos","path":"' + personagepad + '/man-1-boos.png"},' +
'{"name":"man-1-droevig","path":"' + personagepad + '/man-1-droevig.png"},' +
'{"name":"man-2","path":"' + personagepad + '/man-2.png"},' +
'{"name":"marskramer","path":"' + personagepad + '/marskramer.png"},' +
'{"name":"marskramer-verdrietig","path":"' + personagepad + '/marskramer-verdrietig.png"},' +
'{"name":"melvin-het-meningenmonster","path":"' + personagepad + '/melvin-het-meningenmonster.png"},' +
'{"name":"melvin-het-meningenmonster-duim","path":"' + personagepad + '/melvin-het-meningenmonster-duim.png"},' +
'{"name":"misdadiger","path":"' + personagepad + '/misdadiger.png"},' +
'{"name":"misdadiger-onthoofd","path":"' + personagepad + '/misdadiger-onthoofd.png"},' +
'{"name":"naakteliggendeprins-f01","path":"' + personagepad + '/naakteliggendeprins-f01.png"},' +
'{"name":"naakteliggendeprins-f02","path":"' + personagepad + '/naakteliggendeprins-f02.png"},' +
'{"name":"nimf","path":"' + personagepad + '/nimf.png"},' +
'{"name":"olihoorn","path":"' + personagepad + '/olihoorn.png"},' +
'{"name":"olihoorn-lopend-f01","path":"' + personagepad + '/olihoorn-lopend-f01.png"},' +
'{"name":"olihoorn-lopend-f02","path":"' + personagepad + '/olihoorn-lopend-f02.png"},' +
'{"name":"olihoorn-lopend-f03","path":"' + personagepad + '/olihoorn-lopend-f03.png"},' +
'{"name":"olihoorn-lopend-f04","path":"' + personagepad + '/olihoorn-lopend-f04.png"},' +
'{"name":"ork","path":"' + personagepad + '/ork.png"},' +
'{"name":"oud-dametje-1","path":"' + personagepad + '/oud-dametje-1.png"},' +
'{"name":"oud-dametje-2","path":"' + personagepad + '/oud-dametje-2.png"},' +
'{"name":"oud-lijk-bij-boom-f01","path":"' + personagepad + '/oud-lijk-bij-boom-f01.png"},' +
'{"name":"oud-lijk-bij-boom-f02","path":"' + personagepad + '/oud-lijk-bij-boom-f02.png"},' +
'{"name":"oud-lijk-bij-boom-f03","path":"' + personagepad + '/oud-lijk-bij-boom-f03.png"},' +
'{"name":"oud-lijk-bij-boom-f04","path":"' + personagepad + '/oud-lijk-bij-boom-f04.png"},' +
'{"name":"oud-mannetje-1","path":"' + personagepad + '/oud-mannetje-1.png"},' +
'{"name":"oud-mannetje-2","path":"' + personagepad + '/oud-mannetje-2.png"},' +
'{"name":"oud-vrouwtje-met-hondje-f01","path":"' + personagepad + '/oud-vrouwtje-met-hondje-f01.png"},' +
'{"name":"oud-vrouwtje-met-hondje-f02","path":"' + personagepad + '/oud-vrouwtje-met-hondje-f02.png"},' +
'{"name":"oud-vrouwtje-met-hondje-springend-f01","path":"' + personagepad + '/oud-vrouwtje-met-hondje-springend-f01.png"},' +
'{"name":"oud-vrouwtje-met-hondje-springend-f02","path":"' + personagepad + '/oud-vrouwtje-met-hondje-springend-f02.png"},' +
'{"name":"oude-geezer-met-gouden-stok","path":"' + personagepad + '/oude-geezer-met-gouden-stok.png"},' +
'{"name":"oude-kabouter","path":"' + personagepad + '/oude-kabouter.png"},' +
'{"name":"oude-landkabouter","path":"' + personagepad + '/oude-landkabouter.png"},' +
'{"name":"oude-liggende-vrouw-boos-f01","path":"' + personagepad + '/oude-liggende-vrouw-boos-f01.png"},' +
'{"name":"oude-liggende-vrouw-boos-f02","path":"' + personagepad + '/oude-liggende-vrouw-boos-f02.png"},' +
'{"name":"oude-liggende-vrouw-dood","path":"' + personagepad + '/oude-liggende-vrouw-dood.png"},' +
'{"name":"oude-liggende-vrouw-f01","path":"' + personagepad + '/oude-liggende-vrouw-f01.png"},' +
'{"name":"oude-liggende-vrouw-f02","path":"' + personagepad + '/oude-liggende-vrouw-f02.png"},' +
'{"name":"oudeman-in-gewaad","path":"' + personagepad + '/oudeman-in-gewaad.png"},' +
'{"name":"paarden-f01","path":"' + personagepad + '/paarden-f01.png"},' +
'{"name":"paarden-f02","path":"' + personagepad + '/paarden-f02.png"},' +
'{"name":"paarden-lopend-f01","path":"' + personagepad + '/paarden-lopend-f01.png"},' +
'{"name":"paarden-lopend-f02","path":"' + personagepad + '/paarden-lopend-f02.png"},' +
'{"name":"paardenhandelaar","path":"' + personagepad + '/paardenhandelaar.png"},' +
'{"name":"pegasus-f01","path":"' + personagepad + '/pegasus-f01.png"},' +
'{"name":"pegasus-f02","path":"' + personagepad + '/pegasus-f02.png"},' +
'{"name":"poke-trainer-1","path":"' + personagepad + '/poke-trainer-1.png"},' +
'{"name":"poke-trainer-2","path":"' + personagepad + '/poke-trainer-2.png"},' +
'{"name":"politie-agentachtige","path":"' + personagepad + '/politie-agentachtige.png"},' +
'{"name":"poppetje-dat-lijkt-op-jesse-klaver","path":"' + personagepad + '/poppetje-dat-lijkt-op-jesse-klaver.png"},' +
'{"name":"poppetje-dat-lijkt-op-jesse-klaver-pak","path":"' + personagepad + '/poppetje-dat-lijkt-op-jesse-klaver-pak.png"},' +
'{"name":"poppetje-dat-lijkt-op-lillianne-ploumen","path":"' + personagepad + '/poppetje-dat-lijkt-op-lillianne-ploumen.png"},' +
'{"name":"poppetje-dat-lijkt-op-lillianne-ploumen-jurk","path":"' + personagepad + '/poppetje-dat-lijkt-op-lillianne-ploumen-jurk.png"},' +
'{"name":"prins-berenhart-junior","path":"' + personagepad + '/prins-berenhart-junior.png"},' +
'{"name":"prins-op-een-paard","path":"' + personagepad + '/prins-op-een-paard.png"},' +
'{"name":"prins-op-een-paard-blij","path":"' + personagepad + '/prins-op-een-paard-blij.png"},' +
'{"name":"prins-op-een-paard-blij-f01","path":"' + personagepad + '/prins-op-een-paard-blij-f01.png"},' +
'{"name":"prins-op-een-paard-blij-f02","path":"' + personagepad + '/prins-op-een-paard-blij-f02.png"},' +
'{"name":"prins-op-een-paard-blij-f03","path":"' + personagepad + '/prins-op-een-paard-blij-f03.png"},' +
'{"name":"prins-op-een-paard-blij-f04","path":"' + personagepad + '/prins-op-een-paard-blij-f04.png"},' +
'{"name":"prins-op-een-paard-boos-f01","path":"' + personagepad + '/prins-op-een-paard-boos-f01.png"},' +
'{"name":"prins-op-een-paard-boos-f02","path":"' + personagepad + '/prins-op-een-paard-boos-f02.png"},' +
'{"name":"prins-op-een-paard-boos-f03","path":"' + personagepad + '/prins-op-een-paard-boos-f03.png"},' +
'{"name":"prins-op-een-paard-boos-f04","path":"' + personagepad + '/prins-op-een-paard-boos-f04.png"},' +
'{"name":"prins-op-een-paard-loopt-f01","path":"' + personagepad + '/prins-op-een-paard-loopt-f01.png"},' +
'{"name":"prins-op-een-paard-loopt-f02","path":"' + personagepad + '/prins-op-een-paard-loopt-f02.png"},' +
'{"name":"prins-op-een-paard-loopt-f03","path":"' + personagepad + '/prins-op-een-paard-loopt-f03.png"},' +
'{"name":"prins-op-een-paard-loopt-f04","path":"' + personagepad + '/prins-op-een-paard-loopt-f04.png"},' +
'{"name":"prins-op-een-paard-stilstaand","path":"' + personagepad + '/prins-op-een-paard-stilstaand.png"},' +
'{"name":"prins1","path":"' + personagepad + '/prins1.png"},' +
'{"name":"prins1-hand","path":"' + personagepad + '/prins1-hand.png"},' +
'{"name":"prins1-normaal","path":"' + personagepad + '/prins1-normaal.png"},' +
'{"name":"raadsleden-f01","path":"' + personagepad + '/raadsleden-f01.png"},' +
'{"name":"raadsleden-f02","path":"' + personagepad + '/raadsleden-f02.png"},' +
'{"name":"reiziger","path":"' + personagepad + '/reiziger.png"},' +
'{"name":"ridder-verslagen-tegen-boom","path":"' + personagepad + '/ridder-verslagen-tegen-boom.png"},' +
'{"name":"rode-ridder-met-rode-roos-f01","path":"' + personagepad + '/rode-ridder-met-rode-roos-f01.png"},' +
'{"name":"rode-ridder-met-rode-roos-f02","path":"' + personagepad + '/rode-ridder-met-rode-roos-f02.png"},' +
'{"name":"smid","path":"' + personagepad + '/smid.png"},' +
'{"name":"soldaten","path":"' + personagepad + '/soldaten.png"},' +
'{"name":"soldaten-marcherend-f01","path":"' + personagepad + '/soldaten-marcherend-f01.png"},' +
'{"name":"soldaten-marcherend-f02","path":"' + personagepad + '/soldaten-marcherend-f02.png"},' +
'{"name":"soldaten-marcherend-f03","path":"' + personagepad + '/soldaten-marcherend-f03.png"},' +
'{"name":"soldaten-marcherend-f04","path":"' + personagepad + '/soldaten-marcherend-f04.png"},' +
'{"name":"standbeeld","path":"' + personagepad + '/standbeeld.png"},' +
'{"name":"tienermoedertje","path":"' + personagepad + '/tienermoedertje.png"},' +
'{"name":"tienermoedertje-f01","path":"' + personagepad + '/tienermoedertje-f01.png"},' +
'{"name":"tienermoedertje-f02","path":"' + personagepad + '/tienermoedertje-f02.png"},' +
'{"name":"tienermoedertje-gestopt-huilen","path":"' + personagepad + '/tienermoedertje-gestopt-huilen.png"},' +
'{"name":"twee-huilende-kindjes-blij","path":"' + personagepad + '/twee-huilende-kindjes-blij.png"},' +
'{"name":"twee-huilende-kindjes-f01","path":"' + personagepad + '/twee-huilende-kindjes-f01.png"},' +
'{"name":"twee-huilende-kindjes-f02","path":"' + personagepad + '/twee-huilende-kindjes-f02.png"},' +
'{"name":"twee-trouwende-kabouters-f01","path":"' + personagepad + '/twee-trouwende-kabouters-f01.png"},' +
'{"name":"twee-trouwende-kabouters-f02","path":"' + personagepad + '/twee-trouwende-kabouters-f02.png"},' +
'{"name":"twee-trouwende-kabouters-f03","path":"' + personagepad + '/twee-trouwende-kabouters-f03.png"},' +
'{"name":"twee-trouwende-kabouters-f04","path":"' + personagepad + '/twee-trouwende-kabouters-f04.png"},' +
'{"name":"visser-in-bootje-f01","path":"' + personagepad + '/visser-in-bootje-f01.png"},' +
'{"name":"visser-in-bootje-f02","path":"' + personagepad + '/visser-in-bootje-f02.png"},' +
'{"name":"vrouw-op-boomstronk","path":"' + personagepad + '/vrouw-op-boomstronk.png"},' +
'{"name":"vrouw-van-herbergier","path":"' + personagepad + '/vrouw-van-herbergier.png"},' +
'{"name":"vulkaanwachter","path":"' + personagepad + '/vulkaanwachter.png"},' +
'{"name":"abacus","path":"' + objectenpad + '/abacus.png"},' +
'{"name":"banier","path":"' + objectenpad + '/banier.png"},' +
'{"name":"boom","path":"' + objectenpad + '/boom.png"},' +
'{"name":"boomstronk","path":"' + objectenpad + '/boomstronk.png"},' +
'{"name":"bootje-anim-f01","path":"' + objectenpad + '/bootje-anim-f01.png"},' +
'{"name":"bootje-anim-f02","path":"' + objectenpad + '/bootje-anim-f02.png"},' +
'{"name":"bootje-anim-f03","path":"' + objectenpad + '/bootje-anim-f03.png"},' +
'{"name":"bootje-anim-f04","path":"' + objectenpad + '/bootje-anim-f04.png"},' +
'{"name":"bordeel-anim-f01","path":"' + objectenpad + '/bordeel-anim-f01.png"},' +
'{"name":"bordeel-anim-f02","path":"' + objectenpad + '/bordeel-anim-f02.png"},' +
'{"name":"buttonleft","path":"' + objectenpad + '/buttonleft.png"},' +
'{"name":"buttonmid","path":"' + objectenpad + '/buttonmid.png"},' +
'{"name":"buttonright","path":"' + objectenpad + '/buttonright.png"},' +
'{"name":"carrousel-anim-f01","path":"' + objectenpad + '/carrousel-anim-f01.png"},' +
'{"name":"carrousel-anim-f02","path":"' + objectenpad + '/carrousel-anim-f02.png"},' +
'{"name":"carrousel-anim-f03","path":"' + objectenpad + '/carrousel-anim-f03.png"},' +
'{"name":"carrousel-anim-f04","path":"' + objectenpad + '/carrousel-anim-f04.png"},' +
'{"name":"elixer","path":"' + objectenpad + '/elixer.png"},' +
'{"name":"emmer","path":"' + objectenpad + '/emmer.png"},' +
'{"name":"flesmelk","path":"' + objectenpad + '/flesmelk.png"},' +
'{"name":"gedenksteen","path":"' + objectenpad + '/gedenksteen.png"},' +
'{"name":"gevechtswolk-anim-f01","path":"' + objectenpad + '/gevechtswolk-anim-f01.png"},' +
'{"name":"gevechtswolk-anim-f02","path":"' + objectenpad + '/gevechtswolk-anim-f02.png"},' +
'{"name":"gevechtswolk-anim-f03","path":"' + objectenpad + '/gevechtswolk-anim-f03.png"},' +
'{"name":"gevechtswolk-anim-f04","path":"' + objectenpad + '/gevechtswolk-anim-f04.png"},' +
'{"name":"glasbrandewijn","path":"' + objectenpad + '/glasbrandewijn.png"},' +
'{"name":"groteboom","path":"' + objectenpad + '/groteboom.png"},' +
'{"name":"hartje-anim-f01","path":"' + objectenpad + '/hartje-anim-f01.png"},' +
'{"name":"hartje-anim-f02","path":"' + objectenpad + '/hartje-anim-f02.png"},' +
'{"name":"healing-anim-f01","path":"' + objectenpad + '/healing-anim-f01.png"},' +
'{"name":"healing-anim-f02","path":"' + objectenpad + '/healing-anim-f02.png"},' +
'{"name":"healing-anim-f03","path":"' + objectenpad + '/healing-anim-f03.png"},' +
'{"name":"healing-animref-uitlijningpoppetje","path":"' + objectenpad + '/healing-animref-uitlijningpoppetje.png"},' +
'{"name":"herberg-anim-f01","path":"' + objectenpad + '/herberg-anim-f01.png"},' +
'{"name":"herberg-anim-f02","path":"' + objectenpad + '/herberg-anim-f02.png"},' +
'{"name":"hondendrol-anim-f01","path":"' + objectenpad + '/hondendrol-anim-f01.png"},' +
'{"name":"hondendrol-anim-f02","path":"' + objectenpad + '/hondendrol-anim-f02.png"},' +
'{"name":"hondendrol-anim-f03","path":"' + objectenpad + '/hondendrol-anim-f03.png"},' +
'{"name":"hondendrol-anim-f04","path":"' + objectenpad + '/hondendrol-anim-f04.png"},' +
'{"name":"hummerkoets-anim-f01","path":"' + objectenpad + '/hummerkoets-anim-f01.png"},' +
'{"name":"hummerkoets-anim-f02","path":"' + objectenpad + '/hummerkoets-anim-f02.png"},' +
'{"name":"hutje-anim-f01","path":"' + objectenpad + '/hutje-anim-f01.png"},' +
'{"name":"hutje-anim-f02","path":"' + objectenpad + '/hutje-anim-f02.png"},' +
'{"name":"icon-inventory","path":"' + objectenpad + '/icon-inventory.png"},' +
'{"name":"iconaudio-aan","path":"' + objectenpad + '/iconaudio-aan.png"},' +
'{"name":"iconaudio-uit","path":"' + objectenpad + '/iconaudio-uit.png"},' +
'{"name":"iconfullscreen-enter","path":"' + objectenpad + '/iconfullscreen-enter.png"},' +
'{"name":"iconfullscreen-exit","path":"' + objectenpad + '/iconfullscreen-exit.png"},' +
'{"name":"inventory-bg","path":"' + objectenpad + '/inventory-bg.png"},' +
'{"name":"inventory-deken","path":"' + objectenpad + '/inventory-deken.png"},' +
'{"name":"inventory-fg","path":"' + objectenpad + '/inventory-fg.png"},' +
'{"name":"inventory-flesmelk","path":"' + objectenpad + '/inventory-flesmelk.png"},' +
'{"name":"inventory-geld","path":"' + objectenpad + '/inventory-geld.png"},' +
'{"name":"inventory-mutsjes","path":"' + objectenpad + '/inventory-mutsjes.png"},' +
'{"name":"inventory-ovchipkaart","path":"' + objectenpad + '/inventory-ovchipkaart.png"},' +
'{"name":"inventory-referentieafbeelding","path":"' + objectenpad + '/inventory-referentieafbeelding.png"},' +
'{"name":"inventory-roos","path":"' + objectenpad + '/inventory-roos.png"},' +
'{"name":"inventory-spullen","path":"' + objectenpad + '/inventory-spullen.png"},' +
'{"name":"inventory-yoghurt","path":"' + objectenpad + '/inventory-yoghurt.png"},' +
'{"name":"karmetbril","path":"' + objectenpad + '/karmetbril.png"},' +
'{"name":"karmetspullen","path":"' + objectenpad + '/karmetspullen.png"},' +
'{"name":"kerkje-anim-f01","path":"' + objectenpad + '/kerkje-anim-f01.png"},' +
'{"name":"kerkje-anim-f02","path":"' + objectenpad + '/kerkje-anim-f02.png"},' +
'{"name":"koe-anim-f01","path":"' + objectenpad + '/koe-anim-f01.png"},' +
'{"name":"koe-anim-f02","path":"' + objectenpad + '/koe-anim-f02.png"},' +
'{"name":"kraampjebroden","path":"' + objectenpad + '/kraampjebroden.png"},' +
'{"name":"kraampjemelk","path":"' + objectenpad + '/kraampjemelk.png"},' +
'{"name":"meerderedukaten","path":"' + objectenpad + '/meerderedukaten.png"},' +
'{"name":"mutsjes","path":"' + objectenpad + '/mutsjes.png"},' +
'{"name":"nar","path":"' + objectenpad + '/nar.png"},' +
'{"name":"nar-zonderpodium","path":"' + objectenpad + '/nar-zonderpodium.png"},' +
'{"name":"objectinhand-brood","path":"' + objectenpad + '/objectinhand-brood.png"},' +
'{"name":"objectinhand-deken","path":"' + objectenpad + '/objectinhand-deken.png"},' +
'{"name":"objectinhand-dukaat","path":"' + objectenpad + '/objectinhand-dukaat.png"},' +
'{"name":"objectinhand-fakkel-f01","path":"' + objectenpad + '/objectinhand-fakkel-f01.png"},' +
'{"name":"objectinhand-fakkel-f02","path":"' + objectenpad + '/objectinhand-fakkel-f02.png"},' +
'{"name":"objectinhand-fakkel-f03","path":"' + objectenpad + '/objectinhand-fakkel-f03.png"},' +
'{"name":"objectinhand-fakkel-f04","path":"' + objectenpad + '/objectinhand-fakkel-f04.png"},' +
'{"name":"objectinhand-glazenbol","path":"' + objectenpad + '/objectinhand-glazenbol.png"},' +
'{"name":"objectinhand-ovchipkaart","path":"' + objectenpad + '/objectinhand-ovchipkaart.png"},' +
'{"name":"objectinhand-paddestoel","path":"' + objectenpad + '/objectinhand-paddestoel.png"},' +
'{"name":"objectinhand-potlood","path":"' + objectenpad + '/objectinhand-potlood.png"},' +
'{"name":"objectinhand-roos","path":"' + objectenpad + '/objectinhand-roos.png"},' +
'{"name":"objectinhand-zwaard","path":"' + objectenpad + '/objectinhand-zwaard.png"},' +
'{"name":"paddestoel","path":"' + objectenpad + '/paddestoel.png"},' +
'{"name":"petitie","path":"' + objectenpad + '/petitie.png"},' +
'{"name":"pijltje-f01","path":"' + objectenpad + '/pijltje-f01.png"},' +
'{"name":"pijltje-f02","path":"' + objectenpad + '/pijltje-f02.png"},' +
'{"name":"pijltje-f03","path":"' + objectenpad + '/pijltje-f03.png"},' +
'{"name":"pijltje-f04","path":"' + objectenpad + '/pijltje-f04.png"},' +
'{"name":"podium","path":"' + objectenpad + '/podium.png"},' +
'{"name":"put","path":"' + objectenpad + '/put.png"},' +
'{"name":"schilderwinkel","path":"' + objectenpad + '/schilderwinkel.png"},' +
'{"name":"schilderwinkel-inbrand-anim-f01","path":"' + objectenpad + '/schilderwinkel-inbrand-anim-f01.png"},' +
'{"name":"schilderwinkel-inbrand-anim-f02","path":"' + objectenpad + '/schilderwinkel-inbrand-anim-f02.png"},' +
'{"name":"schilderwinkel-inbrand-anim-f03","path":"' + objectenpad + '/schilderwinkel-inbrand-anim-f03.png"},' +
'{"name":"schilderwinkel-inbrand-anim-f04","path":"' + objectenpad + '/schilderwinkel-inbrand-anim-f04.png"},' +
'{"name":"schooltje","path":"' + objectenpad + '/schooltje.png"},' +
'{"name":"schooltje-ingestort","path":"' + objectenpad + '/schooltje-ingestort.png"},' +
'{"name":"spullen","path":"' + objectenpad + '/spullen.png"},' +
'{"name":"straalwaterkanon-anim-f01","path":"' + objectenpad + '/straalwaterkanon-anim-f01.png"},' +
'{"name":"straalwaterkanon-anim-f02","path":"' + objectenpad + '/straalwaterkanon-anim-f02.png"},' +
'{"name":"straalwaterkanon-anim-f03","path":"' + objectenpad + '/straalwaterkanon-anim-f03.png"},' +
'{"name":"straalwaterkanon-anim-f04","path":"' + objectenpad + '/straalwaterkanon-anim-f04.png"},' +
'{"name":"tafel","path":"' + objectenpad + '/tafel.png"},' +
'{"name":"twitterbutton-f01","path":"' + objectenpad + '/twitterbutton-f01.png"},' +
'{"name":"twitterbutton-f02","path":"' + objectenpad + '/twitterbutton-f02.png"},' +
'{"name":"twitterbuttonvogeltjelos-f01","path":"' + objectenpad + '/twitterbuttonvogeltjelos-f01.png"},' +
'{"name":"twitterbuttonvogeltjelos-f02","path":"' + objectenpad + '/twitterbuttonvogeltjelos-f02.png"},' +
'{"name":"visje","path":"' + objectenpad + '/visje.png"},' +
'{"name":"vlag-50plus","path":"' + objectenpad + '/vlag-50plus.png"},' +
'{"name":"vlag-bij1","path":"' + objectenpad + '/vlag-bij1.png"},' +
'{"name":"vlag-cda","path":"' + objectenpad + '/vlag-cda.png"},' +
'{"name":"vlag-cu","path":"' + objectenpad + '/vlag-cu.png"},' +
'{"name":"vlag-d66","path":"' + objectenpad + '/vlag-d66.png"},' +
'{"name":"vlag-denk","path":"' + objectenpad + '/vlag-denk.png"},' +
'{"name":"vlag-fvd","path":"' + objectenpad + '/vlag-fvd.png"},' +
'{"name":"vlag-gl","path":"' + objectenpad + '/vlag-gl.png"},' +
'{"name":"vlag-henk-krol","path":"' + objectenpad + '/vlag-henk-krol.png"},' +
'{"name":"vlag-ja21","path":"' + objectenpad + '/vlag-ja21.png"},' +
'{"name":"vlag-pvda","path":"' + objectenpad + '/vlag-pvda.png"},' +
'{"name":"vlag-pvdd","path":"' + objectenpad + '/vlag-pvdd.png"},' +
'{"name":"vlag-pvv","path":"' + objectenpad + '/vlag-pvv.png"},' +
'{"name":"vlag-sgp","path":"' + objectenpad + '/vlag-sgp.png"},' +
'{"name":"vlag-sp","path":"' + objectenpad + '/vlag-sp.png"},' +
'{"name":"vlag-vvd","path":"' + objectenpad + '/vlag-vvd.png"},' +
'{"name":"vraagteken-anim-f01","path":"' + objectenpad + '/vraagteken-anim-f01.png"},' +
'{"name":"vraagteken-anim-f02","path":"' + objectenpad + '/vraagteken-anim-f02.png"},' +
'{"name":"vulkaan-barstuit-f01","path":"' + objectenpad + '/vulkaan-barstuit-f01.png"},' +
'{"name":"vulkaan-barstuit-f02","path":"' + objectenpad + '/vulkaan-barstuit-f02.png"},' +
'{"name":"vulkaan-barstuit-f03","path":"' + objectenpad + '/vulkaan-barstuit-f03.png"},' +
'{"name":"vulkaan-barstuit-f04","path":"' + objectenpad + '/vulkaan-barstuit-f04.png"},' +
'{"name":"vulkaan-f01","path":"' + objectenpad + '/vulkaan-f01.png"},' +
'{"name":"vulkaan-f02","path":"' + objectenpad + '/vulkaan-f02.png"},' +
'{"name":"vulkaan-f03","path":"' + objectenpad + '/vulkaan-f03.png"},' +
'{"name":"vulkaan-f04","path":"' + objectenpad + '/vulkaan-f04.png"},' +
'{"name":"vulkaan-f05","path":"' + objectenpad + '/vulkaan-f05.png"},' +
'{"name":"vulkaan-stoptmetroken","path":"' + objectenpad + '/vulkaan-stoptmetroken.png"},' +
'{"name":"vuuropgrond-anim-f01","path":"' + objectenpad + '/vuuropgrond-anim-f01.png"},' +
'{"name":"vuuropgrond-anim-f02","path":"' + objectenpad + '/vuuropgrond-anim-f02.png"},' +
'{"name":"vuuropgrond-anim-f03","path":"' + objectenpad + '/vuuropgrond-anim-f03.png"},' +
'{"name":"vuuropgrond-anim-f04","path":"' + objectenpad + '/vuuropgrond-anim-f04.png"},' +
'{"name":"wegwijsbordje","path":"' + objectenpad + '/wegwijsbordje.png"},' +
'{"name":"yoghurt","path":"' + objectenpad + '/yoghurt.png"},' +
'{"name":"zwaard","path":"' + objectenpad + '/zwaard.png"},'
afbeeldingpaden = afbeeldingpaden.slice(0, -1) + ']'

cuts = {start: [
                    "Welkom, Keezer. Er gaat iets moois gebeuren. Je staat aan de rand van het bos.",
                    "Klaar om dit grote avontuur te beginnen. Het belooft een bijzondere tocht te worden, want in het bos is veel gaande.",
                    "Er woedt een hevige strijd tussen de landkabouters, die vee willen houden, en de groene dwergen, die werkelijk geen koe meer kunnen zien!",
                    "Vanuit andere koninkrijken komen steeds meer bosnimfen naar het bos. Niet iedereen is even blij met hun komst.",
                    "En dan heerst er ook nog een allesverzengde plaag, waarbij vooral oude bosbewoners het loodje leggen!",
                    "Of... is die plaag maar een verzinsel? Ga op avontuur, Keezer, en ontdek door je keuzes waar jouw toekomst ligt.",
                    "Je aait [naamhondje] en je zet je eerste stap\u2026",
                ],
                cut: [
                    {
                        key: "cut1",
                        dialogue: [
                            "Och Keezer, je zult wel blij zijn om weer eens lekker naar buiten te kunnen. Vanwege de bosplaag hebben alle wezens natuurlijk veel thuis gezeten.",
                            "En dan kan je in een grot, een plaggenhut, of desnoods een kasteel wonen, op een gegeven moment komen de kasteelmuren toch op je af.",
                            "Eindelijk weer mensen ontmoeten, want dat communiceren met zo\u2019n glazen bol, daar ben je nu wel klaar mee. Tijd om verder te gaan!",
                            "Je bent al over de helft van je avontuur!",
                        ],
                    },
                    {
                        key: "cut2",
                        dialogue: [
                            "Wat een leuk avontuur, he? Je bent al over de helft! Of zou je soms liever naar een vulkaan reizen om daar bijvoorbeeld een magische ring in te gooien?",
                            "Nee, dat klinkt als een hoop gedoe, en zonde van zo\u2019n ring bovendien. Dit avontuur ga je je nog lang herinneren.",
                            "Je stapt vol goede moed verder, op naar de volgende ontmoeting!",
                        ],
                    },
                    {
                        key: "cut3",
                        dialogue: [
                            "Die trouwe viervoeter van je zal wel dolgelukkig zijn! Zo uitgebreid is [naamhondje] nog nooit uitgelaten!",
                            "Soms wilde je dat je zelf een hondje was, dan kon je heerlijk ravotten in het bos. En niet hoeven nadenken over de grote vragen des levens.",
                            "Maar ja, daar wacht alweer het volgende netelige dilemma.",
                            "Hou vol, je bent al over de helft!",
                        ],
                    },
                    {
                        key: "cut4",
                        dialogue: [
                            "Zo, even bijkomen van al die lastige vragen. Soms lijkt het alsof je werkelijk over alles wat er speelt in het bos een mening moet hebben!",
                            "Maar ja, dat is nou eenmaal je verantwoordelijkheid als bosbewoner. En ook al ben je maar een enkele Keezer, jouw mening doet er net zoveel",
                            "toe als die van een ander. Ga zo door!",
                            "Je bent al halverwege je avontuur!",
                        ],
                    },
                    {
                        key: "cut5",
                        dialogue: [
                            "Ja Keezer, deze dilemma\u2019s zijn zo makkelijk nog niet, he? Alsof het leven terug te brengen is tot maar twee keuzes.",
                            "Soms zou je willen dat er ook een derde, of een vierde keuze mogelijk was. Zoals 'wellicht', of 'goed punt, maar dat ligt genuanceerder'.",
                            "Helaas, niet in dit bos! Kijk, daar dient alweer het volgende dilemma zich aan.",
                            "Je bent al halverwege je avontuur!",
                        ],
                    },
                    {
                        key: "henk-trol",
                        dialogue: [
                            "Daar komt Henk Trol aangelopen.",
                            {
                                character: "henk-trol",
                                text: "Dag! Mag ik iets vertellen over de benarde situatie van ouderen in het b-",
                            },
                            {
                                character: "keezer",
                                text: "Ik heb even pauze, Henk!",
                            },
                            {
                                character: "henk-trol",
                                text: "Excuus! Je bent trouwens halverwege je reis!",
                            },
                            "Wat een malle trol is het toch. Tijd om je reis voort te zetten!",
                        ],
                    },
                ],
                pre_final: {
                    dialogue: [
                        "Je bent aan het eind gekomen van het avontuur. [naamhondje] is inmiddels maar wat moe geworden.",
                        "Nog even volhouden, kleine stinkerd, het zit er al bijna op!",
                        "Wat een meningen, he? De een vindt dit, de elf vindt dat. Gelukkig is het nu game over.",
                        "Morgen zul je precies weten waar het heen moet met dit bos en heb je je taak als Keezer volbracht.",
                        "Slaap nu maar lekker, in de verte zie je het kasteel van jouw gilde al liggen.",
                        "Als je er klaar voor bent, klik dan door en weet waar je hoort. Succes!",
                    ],
                },
                credits: {
                    story: "Beste Keezer,\n\nJe hebt gevaren getrotseerd: vulkanen, boze dorpsbewoners, eigengereide prinsen, Henk Trol. Maar je lange zoektocht is voorbij. Je bent verwelkomd bij [partij].\n\nEen goede keuze? We zullen zien. Je echte zoektocht begint misschien wel nu pas.\n\n\n\n\n\nHeel veel bedankt voor het spelen",
                    credits: [
                        ["CAST"],
                        [],
                        ["Keezer", "[naamhondje]"],
                        ["Magier", "Hendrik Hummer"],
                        ["Twee huilende kindjes", "Hossel"],
                        ["Chirurgijn", "Medeklant"],
                        ["Handelaar 1", "Handelaar 2"],
                        ["Houthakker", "Centaur"],
                        ["Geriandalf de magier", "Henk Trol"],
                        ["Bosnimf", "Landkabouter"],
                        ["Boer", "Buurman"],
                        ["Barry", "Drie groene dwergen"],
                        ["Boer Frank", "Landkabouter"],
                        ["Twee gezelschapskabouters", "Boer Frank"],
                        ["Prinsje", "Herbergier Den Gulden Draeck"],
                        ["IJzersmid", "Brugwachter"],
                        ["Jan-Pieter de Koene Ridder", "Tienerdwerg"],
                        ["Prins Berenhart-Junior", "Ridder"],
                        ["Tuinder Vrouw", "Tuinder Man"],
                        ["Goudzoeker", "Vulkaanwachter"],
                        ["Boswachter", "Oude Poetsvrouw"],
                        ["Cycloop", "Chirurgijn Bosnimf"],
                        ["Beul", "Melvin het ongevraagde meningenmonster"],
                        ["Fokker", "Joris van Poppeldraak"],
                        ["Transavio de Pegasus", "Grijsaards"],
                        ["Kindje", "[naamhondje]"],
                        ["Kabouter", "Draak"],
                        ["Bedelaar", "Elf"],
                        ["Reiziger", "Schutterij-lid"],
                        ["Leider van de bosnimfen", "Alchemist"],
                        ["Groene dwerg", "Marskramer"],
                        ["Schimmige Tovenaar", "Oude man"],
                        ["Dorpsomroeper", "Bosnimfengezin"],
                        ["Oud dametje 1", "Oud dametje 2"],
                        ["Geschminkte feestvierders", "Dronken klant"],
                        ["Oud mannetje 1", "Oud mannetje 2"],
                        ["Visser", "Jeffrey de dwerg"],
                        ["Oude kabouter", "Iemand in een gewaad"],
                        ["Paardenhandelaar", "Vrouw van de Herbergier"],
                        ["Boswezen", "Fee"],
                        ["Twee piepjonge kabouters", "Jager"],
                        ["Griffioen", "Ork"],
                        ["Twee trouwende kabouters", "Bruiloftsgasten"],
                        ["Grijsaard", "Harlekijn"],
                        ["Druide", "Hans Trol"],
                        [],
                        [],
                        ["IDEE EN ONTWIKKELING"],
                        ["TEAM ZONDAG MET LUBACH"],
                    ],
                    tweet: "Ik speelde samen met [naamhondje] #KeezersQuest en ik heb me aangesloten bij [partij]. Wil jij ook weten waar je bij hoort? Speel dan ook mee op www.keezersquest.nl! #zondagmetlubach",
                },
            };
 if (!partijen.includes("henk-krol")) {
    cuts.cut.pop()
 }
}