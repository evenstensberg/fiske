// Fiskeområder i Solør (Grue, Åsnes, Våler – Innlandet).
// Posisjoner er omtrentlige og ment for oversikt. Artsangivelser er typiske for
// distriktet. Sjekk alltid gyldig fiskekort og lokale regler før fiske.
window.FISKEOMRADER = [
  // ---------------------- GRUE ----------------------
  {
    id: "vermundsjoen",
    name: "Vermundsjøen",
    type: "innsjø",
    municipality: "Åsnes",
    lat: 60.70175,
    lng: 12.38124,
    species: ["Abbor", "Gjedde", "Sik", "Ørret", "Lake"],
    description:
      "Stor skogssjø på Grue Finnskog, populær for både sommer- og isfiske. Kjent for fin abbor og gjedde.",
    licence: "Fiskekort via Åsnes JFF",
  },
  {
    id: "rogden",
    name: "Røgden",
    type: "innsjø",
    municipality: "Grue",
    lat: 60.3560,
    lng: 12.5450,
    species: ["Abbor", "Gjedde", "Sik", "Ørret"],
    description:
      "Langstrakt finnskogsjø nær riksgrensen mot Sverige. Godt gjedde- og abborvann i naturskjønne omgivelser.",
    licence: "Fiskekort via lokal grunneierforening",
  },
  {
    id: "kjermundsjoen",
    name: "Kjermundsjøen",
    type: "innsjø",
    municipality: "Grue",
    lat: 60.3980,
    lng: 12.4990,
    species: ["Abbor", "Gjedde", "Ørret"],
    description:
      "Idyllisk vann på Finnskogen med gode muligheter for gjedde og abbor fra båt eller land.",
    licence: "Fiskekort via lokal grunneierforening",
  },
  {
    id: "hukusjoen",
    name: "Hukusjøen",
    type: "innsjø",
    municipality: "Grue",
    lat: 60.5203,
    lng: 11.9377,
    species: ["Abbor", "Gjedde", "Sik"],
    description:
      "Rolig skogssjø nær Kirkenær. Fint familievann for abbor og gjedde.",
    licence: "Fiskekort via Grue JFF",
  },
  {
    id: "glomma-grue",
    name: "Glomma ved Kirkenær",
    type: "elv",
    municipality: "Grue",
    lat: 60.4720,
    lng: 12.0350,
    species: ["Harr", "Ørret", "Gjedde", "Abbor", "Sik"],
    description:
      "Storelva Glomma renner gjennom hele Solør. Strekningen ved Kirkenær byr på harr og ørret i strømmen, gjedde i høler og bakevjer.",
    licence: "Fiskekort Glomma – sonevis",
  },

  // ---------------------- ÅSNES ----------------------
  {
    id: "gjesaassjoen",
    name: "Gjesåssjøen",
    type: "innsjø",
    municipality: "Åsnes",
    lat: 60.6750,
    lng: 12.1650,
    species: ["Gjedde", "Abbor", "Sik", "Lake"],
    description:
      "Grunn og næringsrik innsjø øst for Flisa, kjent som et av distriktets beste gjeddevann. Viktig fugleområde – vis hensyn i hekketiden.",
    licence: "Fiskekort via Åsnes JFF",
  },
  {
    id: "glomma-flisa",
    name: "Glomma ved Flisa",
    type: "elv",
    municipality: "Åsnes",
    lat: 60.6120,
    lng: 12.0200,
    species: ["Harr", "Ørret", "Gjedde", "Abbor"],
    description:
      "Bred og strømrik elvestrekning ved Flisa sentrum. Harr og ørret på flue og mark, gjedde langs kantene.",
    licence: "Fiskekort Glomma – sonevis",
  },
  {
    id: "flisa-elv",
    name: "Flisa (elv)",
    type: "elv",
    municipality: "Åsnes",
    lat: 60.6350,
    lng: 12.1400,
    species: ["Ørret", "Harr", "Abbor"],
    description:
      "Sideelv til Glomma som renner gjennom Åsnes. Fine ørret- og harrhøler oppover mot Finnskogen.",
    licence: "Fiskekort via lokal grunneierforening",
  },
  {
    id: "sletta",
    name: "Sønsterudtjern",
    type: "innsjø",
    municipality: "Åsnes",
    lat: 60.7050,
    lng: 12.3100,
    species: ["Abbor", "Gjedde", "Ørret"],
    description:
      "Lite skogstjern på Åsnes Finnskog, fint for et rolig fiske etter abbor og småørret.",
    licence: "Fiskekort via lokal grunneierforening",
  },

  // ---------------------- VÅLER ----------------------
  {
    id: "osensjoen-sor",
    name: "Osensjøen (søndre del)",
    type: "innsjø",
    municipality: "Våler",
    lat: 61.0000,
    lng: 11.7600,
    species: ["Ørret", "Røye", "Sik", "Harr", "Abbor"],
    description:
      "Stor og dyp fjellsjø hvor sørenden ligger i Våler kommune. Kjent for fin ørret, røye og sik – både trolling og garnfiske.",
    licence: "Fiskekort Osensjøen fiskeforening",
  },
  {
    id: "glomma-braskereidfoss",
    name: "Glomma ved Braskereidfoss",
    type: "elv",
    municipality: "Våler",
    lat: 60.6820,
    lng: 11.8050,
    species: ["Harr", "Ørret", "Gjedde", "Abbor", "Sik"],
    description:
      "Elvestrekning ved kraftverket i Braskereidfoss. Strømpartier med harr og ørret, roligere partier med gjedde og abbor.",
    licence: "Fiskekort Glomma – sonevis",
  },
  {
    id: "valsjoen",
    name: "Vålsjøen",
    type: "innsjø",
    municipality: "Våler",
    lat: 60.7250,
    lng: 11.9200,
    species: ["Abbor", "Gjedde", "Ørret"],
    description:
      "Skogssjø øst for Våler sentrum, lett tilgjengelig og populær for isfiske etter abbor om vinteren.",
    licence: "Fiskekort via Våler JFF",
  },
  {
    id: "hasjoen",
    name: "Hasjøen",
    type: "innsjø",
    municipality: "Våler",
    lat: 60.7600,
    lng: 11.9800,
    species: ["Abbor", "Gjedde", "Sik"],
    description:
      "Rolig skogssjø i Vålerskogen med gode muligheter for abbor og gjedde fra land og båt.",
    licence: "Fiskekort via lokal grunneierforening",
  },
];
