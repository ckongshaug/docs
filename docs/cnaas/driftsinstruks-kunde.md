---
title: Driftsinstruks for kunder av "Lokalnett fra Uninett - CNaaS"
sidebars_label: Driftsinstruks - kunde
---

![](/img/uninett_logo.svg)

## Innledning

Dette dokumentet har som mål å beskrive grensesnittet mellom Uninett og kunder av tjenesten "Lokalnett fra Uninett - CNaaS". 

Med dette menes hvordan Uninetts kunde skal ta kontakt med Uninett både ved hendelser/problemer (incidents), spørsmål (support) og bestillinger/endringer. Det omhandler også krav til informasjon som kunden må ha med i sine henvendelser. Det beskrives også hvordan Uninett skal ta kontakt med kunden og krav til varslingstider ved planlagte og hasteendringer (change). 

I tillegg beskriver dokumentet hvordan Uninett skal ta kontakt med kunden ved hendelser/problemer og endringer (change). 

## Roller

### Kundens brukerstøtte/tekniske ressurspersoner

Kunden skal sørge for en brukerstøtte-funksjon for henvendelser fra sine brukere. Dette betyr at alle henvendelser fra kundens brukere skal gå til kundens brukerstøtte og ikke direkte til Uninett. 

Kunden skal også ha en eller flere tekniske ressurspersoner som skal utføre nødvendig lokalt arbeid for sine brukere og eventuelt Uninett ved behov. Noen kunder har ekstra avtale med Uninett hvor Uninett sørger for tilgang til tekniske ressurspersoner lokalt gjennom lokale universiteter/høgskoler. Disse kundene trenger da ikke egne tekniske ressurser lokalt. 

### Uninett Servicesenter (USC)

Uninetts Servicesenter er Uninetts single point of contact (SPOC) og 1.linje. Alle henvendelser som eskaleres fra kundens brukerstøtte skal gå til USC. Se kontaktinformasjon nedenfor.  

### Uninett 2. linje (Campustjenester)

Fageksperter i Uninett Campustjenester fungerer som 2. linje i Uninett. Alle henvendelser som eskaleres fra USC går hit. 

## Kontaktpunkter

### Kontaktpunkter hos kunden {#kontaktkunden}

Uninett registerer følgende kontaktpunkter i sine systemer som brukes ved behov:

*De tre første kan med fordel være samme kontaktpunkt, f.eks kundens brukerstøtte.*

- **Varslingspunkt Incidents**: Her sendes alle varsler om incidents som Uninett oppdager i kundens nett. Dette bør ikke være personlig epost-adresse og telefonnummer. 
- **Varslingspunkt Change**: Her sendes alle varsler om planlagte endringer i kundens nett. Dette bør ikke være personlig epost-adresse og telefonnummer.  
- **Lokalt supportpunkt**: Her registereres kontaktinformasjon for kundens brukerstøtte for å informere eventuelle brukere som kontakter Uninett direkte. Dette brukes også som kontaktpunkt dersom Uninett har behov for å få utført lokalt arbeid på en eller flere komponenter i lokalnettet. Dette bør ikke være personlig epost-adresse og telefonnummer. 
- **Teknisk ansvarlig**: En eller flere personer som er teknisk ansvarlig og/eller ressurser hos kunden. Brukes som kontaktpunkt ved alvorlige hendelser utenfor kundens normalåpningstid. Det er også kun disse personene som har mulighet til å bestille endringer i CNaaS-tjenesten. 
- **Juridisk/administrativ ansvarlig**: En eller flere personer som kan kontaktes ved merkantile henvendelser. 

### Kontaktpunkter hos Uninett {#kontaktuninett}

Uninetts single point of contact er alltid Uninett Servicesenter (USC).  

E-post: kontakt@uninett.no
Telefon: 73 55 79 00

Se [Uninetts nettside](https://www.uninett.no/uninetts-apningstider) for åpningstider. 

Kritiske henvendelser kan meldes 24/7. Utenfor ordinær arbeidstid, ring oppgitte telefonnummer og tast 1. 

## Ansvar

### Kundens brukerstøtte og tekniske ressurspersoner 

Kunden har ikke noe overvåkningsansvar av utstyret eller nettet. Dette er Uninetts ansvar. 

Kunden har som ansvar å utføre følgende oppgaver, enten av brukerstøttefunksjonen eller ved tekniske ressurspersoner:

#### Utføre lokalt arbeid 

- Utføre tilkoblinger i kommunikasjonsrom/etasjefordelere for å koble til brukerpunkter ute i kontorarealene til svitsjer. 
- Bytte komponenenter som er defekte etter ønske fra Uninett. 

#### Utføre godkjente endringer i lokalnettet

Virksomheten selv vil kunne gjøre enkelte endringer selv. F.eks vil kunden ha mulighet til å endre VLAN på et brukerpunkt/svitsjeport ved hjelp av NAV. 

#### Bestille endringer i lokalnettet

Endringer i nettet som kunden selv ikke kan utføre, må bestilles av kunden via [Kontaktpunkter hos Uninett](#kontaktuninett). Merk at kun personer som er satt som "Teknisk ansvarlig", som beskrevet i [Kontaktpunkter hos kunden](#kontaktkunden), vil kunne bestille endringer. Dersom en tredjepart trenger at det utføres endringer, skal dette gå via en av de kontaktpersonene som står nevnt som "Teknisk ansvarlige". 

#### Grunnleggende feilsøking

Når brukere opplever feil/hendelser så skal kundens brukerstøtte og/eller tekniske ressurspersoner gjøre grunnleggende feilsøking før eventuelt eskalering til Uninett. 

*Sjekke overvåkningssystemer*

Opplæring i overvåkningssystemer gis etter behov. 

- Sjekk status i NAV. Spesielt viktig ved henvendelse fra flere brukere.
  - Logg inn på lokal NAV-installasjon og sjekk om det er noen alarmer som kan være grunne til problemet. 
- Sjekk status i trådløst administrasjonssystem. Spesielt viktig ved henvendelse fra flere brukere.  
  - Gjelder kun dersom kunden har fått tilgang til det trådløse overvåkningssystemet.
  - Logg inn og sjekk om det er rapporterte feil i trådløsnettet.  

Dersom overvåkningssystemene ikke gir noe indikasjon på at det er noe feil så kommer "Uninetts guide med tips og triks for å utføre grunnleggende feilsøking i lokalnett" til nytte. Denne finner du på [Grunnleggende feilsøking ved problemer i lokalnett](grunnleggende-feilsok-lokalnett). Her får du også mye informasjon som du kan bruke ved eskalering til Uninett. 

#### Eskalering av incidenter til Uninett

Se [Nødvendig informasjon før eskalering av lokalnett-relaterte saker til Uninett](info-ved-eskalering) for å se hva som må være med av informasjon før sak eskaleres til Uninett. Kontaktpunkt for Uninett finnes lengre opp i denne artikkelen under [Kontaktpunkter hos Uninett](#kontaktuninett).

### Uninett Servicesenter (USC)

USC har som ansvar å bistå kundens brukerstøtte i grunnleggende feilsøking og eventuelt eskalere hendelser/problemer og support-saker til Uninetts 2. linje ved Uninett Campustjenester. 

USC har også som ansvar å varsle kundens brukerstøtte ved planlagte endringer eller hendelser som oppdages av Uninett. Vanligvis vil USC varsle kunden om planlagte endringer minst 8 virkedager før endringstidspunktet. Ved hasteendringer, vil det varsles så tidlig som mulig, men kunden kan bli kontaktet på kontaktpunkt "Teknisk ansvarlig" for å gi innspill til tidspunkt for endringen. 

### Uninett 2. linje (Campustjenester)

Uninetts 2. linje har som ansvar å utføre dypere feilsøking på hendelser/problemer og spørsmål fra kunden. 

Ressurser her har også som ansvar å sørge for kontinuerlig drift og overvåkning av kundens lokalnett. De vil, gjennom USC, sørge for å varsle kunden ved avvik/hendelser og planlagte endringer. Planlagte endringer kan f.eks være halvårlig programvareoppgradering av komponeneter i kundens lokalnett. 

