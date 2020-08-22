# Yrityshaku

![alt text](https://github.com/matikka96/yrityshaku/blob/master/public/screenshot.png?raw=true "Kuvankaappaus sovelluksesta")

Työkalun tarkoituksena on hakea yrityksiä ja niiden tietoja toimialan ja maantieteellisen sijainnin perusteella. Hakutulos on ladattavissa CSV tai XLSX formaateissa. Sisältö haetaan [PRH](https://avoindata.prh.fi/index.html):n avoimen datan rajapinnasta. Voit esimerkiksi hakea kaikki televiestinnän yritykset alueelta Helsinki (toimialakoodi = 61 ja
kotipaikka = Helsinki). [Tutustu demoon](https://matvei.xyz/app/yrityshaku).

## Käyttöohjeet

Haku voidaan suorittaa seuraavia parametreja hyödyntäen:

- Kotipaikka _Oltava tarkka vastine!_
- Toimiala _[lisätietoa](http://www.stat.fi/meta/luokitukset/toimiala/001-2008/index.html)_
- Postinumero _[lisätietoa](https://fi.wikipedia.org/wiki/Luettelo_Suomen_postinumeroista_kunnittain)_

Vähintään yksi parametri on syötettävä, mutta useampaakin voi käyttää samanaikaisesti. Jos parametri(t) on syötetty puutteellisesti, sovellus ilmoittaa asiasta.

## Asennus

Sovelluksen voi ajaa lokaalissa kehitysympäristössä. Toimiakseen se vaatii Node.js ympäristön, internet yhteyden sekä modernin verkkoselaimen Javascript tuella. Asennusvaiheet:

1. `git clone https://github.com/matikka96/yrityshaku.git`
2. `cd yrityshaku && npm install`
3. `npm start`
4. Sovellus on nyt saatavilla osoitteesta _http://localhost:3000/_
