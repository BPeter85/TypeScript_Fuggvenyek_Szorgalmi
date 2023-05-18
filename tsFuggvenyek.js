// Random szám generátor
function randomSzamGenerator(alsoHatar, felsoHatar) {
    return Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
}
// Random tömb szám generátor
function tombGenerator(also, felso, meret) {
    var tomb = [];
    for (var i = 0; i < meret; i++) {
        tomb.push(randomSzamGenerator(also, felso));
    }
    return tomb;
}
// Összegzés tétele függvény
function osszegzesTetele(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}
var hasznaltTomb = tombGenerator(1, 50, 5);
//Átlagszámítás tétele
function atlagSzamitasTetele(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg / vizsgaltTomb.length;
}
//Megszámlálás tétele
function megszamlalasTetele(vizsgaltTomb) {
    var darab = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 == 0) {
            darab++;
        }
    }
    return darab;
}
//Kiválogatás tétele
function kivalogatasTetele(vizsgaltTomb) {
    var eredmeny = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 == 0) {
            eredmeny.push(vizsgaltTomb[i]);
        }
    }
    return eredmeny;
}
// Maximumkiválogatás tétele
function maximumkivalogatasTetele(vizsgaltTomb) {
    var maxErtek = vizsgaltTomb[0];
    var maxIndex = 0;
    for (var i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] > maxErtek) {
            maxErtek = vizsgaltTomb[i];
            maxIndex = i;
        }
    }
    return console.log("A legnagyobb szám a tömben: " + maxErtek + " , és ennek az indexe:" + maxIndex);
}
// Maximumkiválogatás tétele
function minimumkivalogatasTetele(vizsgaltTomb) {
    var minErtek = vizsgaltTomb[0];
    var minIndex = 0;
    for (var i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] < minErtek) {
            minErtek = vizsgaltTomb[i];
            minIndex = i;
        }
    }
    return console.log("A legkisebb szám a tömben: " + minErtek + " , és ennek az indexe:" + minIndex);
}
function nagyBetusFuggveny(szoveg) {
    var nagyKezdoBetu = szoveg[0].toUpperCase();
    for (var i = 1; i < szoveg.length; i++) {
        nagyKezdoBetu += szoveg[i].toLowerCase();
    }
    return nagyKezdoBetu;
}
function hatvanyozoFuggveny(szam, hatvany) {
    var eredmeny = Math.pow(szam, hatvany);
    return eredmeny;
}
function parosLetrehozFuggveny(alsoErtek, felsoErtek) {
    var generaltParosSzam = Math.round(Math.random() * (felsoErtek - alsoErtek)) + alsoErtek;
    if (generaltParosSzam % 2 == 0) {
        return generaltParosSzam;
    }
    else if (generaltParosSzam != felsoErtek) {
        return generaltParosSzam + 1;
    }
    else {
        return generaltParosSzam - 1;
    }
}
function egeszOszto(szam, oszto) {
    if (szam % oszto == 0) {
        return true;
    }
    else {
        return false;
    }
}
function TTIFuggveny(suly, magassag) {
    var TTI = suly / (Math.pow(magassag, 2));
    if (TTI < 16) {
        return "sulyosSovanysag";
    }
    else if (TTI < 17) {
        return "mersekeltSovanysag";
    }
    else if (TTI < 18.5) {
        return "enyheSovanysag";
    }
    else if (TTI < 25) {
        return "normalisTestsuly";
    }
    else if (TTI < 30) {
        return "tulsulyos";
    }
    else if (TTI < 35) {
        return "IfokuElhizas";
    }
    else if (TTI < 40) {
        return "IIfokuElhizas";
    }
    else {
        return "IIIfokuSulyosElhizas";
    }
}
function ParatlanKarakterTorolFuggveny(szoveg) {
    var ujSzoveg = "";
    for (var i = 0; i < szoveg.length; i++) {
        if (i % 2 == 1) {
            ujSzoveg += szoveg[i];
        }
    }
    return ujSzoveg;
}
function KarakterTabusitoFuggveny(szoveg, tiltottKarakter) {
    var ujSzoveg = "";
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] == tiltottKarakter) {
            ujSzoveg += "";
        }
        else {
            ujSzoveg += szoveg[i];
        }
    }
    return ujSzoveg;
}
function MaganhangzoTabusitoFuggveny(szoveg) {
    var maganhangzok = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű', 'A', 'Á', 'E', 'É', 'I', 'Í', 'O', 'Ó', 'Ö', 'Ő', 'U', 'Ú', 'Ü', 'Ű'];
    for (var i = 0; i < szoveg.length; i++) {
        for (var j = 0; j < maganhangzok.length; j++) {
            if (szoveg[i] == maganhangzok[j]) {
                szoveg = szoveg.replace(szoveg[i], "");
            }
        }
    }
    return szoveg;
}
function szazalekFuggveny(ertek, szazalek) {
    var ujErtek = (ertek / 100) * szazalek;
    return ujErtek;
}
function szamokAtlagaFuggveny(hatarErtek) {
    var elemekOsszege = 0;
    for (var i = 1; i <= hatarErtek; i++) {
        elemekOsszege += i;
    }
    return elemekOsszege / hatarErtek;
}
function szovegHosszEllenorzes(szoveg) {
    if (szoveg.length < 8) {
        return false;
    }
    return true;
}
console.log(hasznaltTomb);
console.log("Összegzés tétele: " + osszegzesTetele(hasznaltTomb));
console.log("Átlag számítás tétele: " + atlagSzamitasTetele(hasznaltTomb));
console.log("Megszamlálás tétele,hány darab páros szám van a tömben: " + megszamlalasTetele(hasznaltTomb));
console.log("Kivalogatás tétele,páros számok a tömben: " + kivalogatasTetele(hasznaltTomb));
maximumkivalogatasTetele(hasznaltTomb);
minimumkivalogatasTetele(hasznaltTomb);
console.log(nagyBetusFuggveny("kIs"));
console.log("Az ötnek a harmadik hatványa: " + hatvanyozoFuggveny(5, 3));
console.log("Az 1 és 100 között egy véletlen páros szám: " + parosLetrehozFuggveny(1, 100));
console.log("Az 25 az 5 megvan maradéktalanul: " + egeszOszto(25, 5));
console.log("Az 2048 az 3 megvan maradéktalanul: " + egeszOszto(2048, 3));
console.log("Testsúly: 200kg, magasság: 2m, TTI eredménye: " + TTIFuggveny(200, 2));
console.log("Testsúly: 45kg, magasság: 1.5m, TTI eredménye: " + TTIFuggveny(45, 1.5));
console.log(ParatlanKarakterTorolFuggveny("Szeretem a programozast"));
console.log(KarakterTabusitoFuggveny("Szeretem a programozast", "e"));
console.log(MaganhangzoTabusitoFuggveny("Szeretem a programozast"));
console.log(MaganhangzoTabusitoFuggveny("Árvíztűrő tükörfúrógép"));
console.log("A 125-nek a 50%-a: " + szazalekFuggveny(125, 50));
console.log("Az első 10 természetes szám átlaga: " + szamokAtlagaFuggveny(10));
console.log("Az adott szöveg 8 karakternél hosszabb-e, teszt szöveg: Teszt.  Eredmény:" + szovegHosszEllenorzes("teszt"));
console.log("Az adott szöveg 8 karakternél hosszabb-e, teszt szöveg: Feladatteszt.  Eredmény:" + szovegHosszEllenorzes("feladatteszt"));
