# Fiske i Solør 🎣

En liten frontend som viser et interaktivt kart over fiskeområder i Solør –
kommunene **Grue**, **Åsnes** og **Våler** i Innlandet.

## Funksjoner

- Interaktivt kart (Leaflet + OpenStreetMap) med markører for hvert fiskevann og elvestrekning
- Sidepanel med søk og filter på **kommune** og **type** (innsjø/elv)
- Klikk på et område i lista eller på kartet for detaljer: fiskearter, beskrivelse og fiskekortinfo
- Responsivt oppsett for mobil og desktop

## Kjøre lokalt

Alt er statiske filer. Åpne `index.html` direkte i nettleseren, eller start en
enkel webserver:

```bash
python3 -m http.server 8000
```

Gå deretter til <http://localhost:8000>. (Krever internett for kartfliser og Leaflet fra CDN.)

## Struktur

```
index.html      Markup og innlasting av Leaflet
css/style.css   Stiler (mørkt tema)
js/data.js      Datasett med fiskeområder
js/app.js       Kart-, filter- og listelogikk
```

## Data

Fiskeområdene i `js/data.js` er et kuratert utvalg med **omtrentlige posisjoner**
og typiske arter for distriktet. Dette er ment som oversikt – sjekk alltid gyldig
fiskekort og lokale regler før du fisker. Legg gjerne til flere vann ved å utvide
lista i `js/data.js`.
