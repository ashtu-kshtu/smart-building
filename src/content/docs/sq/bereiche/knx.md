---
title: Sistemi i Bus-it KNX - Protokolli & Aplikacioni
description: Dokumentacion gjithëpërfshirës mbi protokollin KNX, mediat e transmetimit, arkitekturën e pajisjeve dhe shtresën e aplikacionit.
---

# Sistemi i Bus-it KNX: Protokolli dhe Aplikacioni

Shoqata KNX u krijua në vitin 1999 nga bashkimi i Shoqatës EIB, BCI (Batibus) dhe Shoqatës Evropiane të Sistemeve të Shtëpisë (EHS). Sistemi është një standard i hapur për automatizimin inteligjent të ndërtesave dhe është i standardizuar globalisht, ndër të tjera nga CENELEC (EN 50090) dhe ISO/IEC (14543-3). 

## 1. Mediat e Transmetimit (Shtresa Fizike)

Protokolli KNX mund të transmetohet përmes mediave të ndryshme fizike, të cilat mund të lidhen me njëra-tjetrën përmes bashkuesve të mediave (media couplers).

*   **Twisted Pair (TP / Kabllo me çifte të përdredhura):** Transmetimi bëhet përmes një kablloje kontrolli të veçantë, paralel me linjën 230 V. Ky medium ofron sigurinë më të lartë të transmetimit dhe preferohet në instalimet e reja.
*   **Powerline (PL110):** Mesazhet KNX transmetohen drejtpërdrejt përmes rrjetit ekzistues elektrik 230 V, për të cilin duhet të jetë i pranishëm një përcjellës neutral (nul).
*   **Radio Frequency (RF / Frekuencë Radio):** Transmetimi i sinjalit bëhet me valë përmes një lidhjeje radio, gjë që është veçanërisht e përshtatshme kur nuk dëshironi të shtroni kabllo të reja.
*   **IP / Ethernet:** Përdoret në instalime të mëdha ku kërkohet një linjë zone e shpejtë, ose për komunikim me pajisje celulare.

## 2. Qasja në Bus dhe Shmangia e Përplasjeve

Sistemi KNX funksionon në mënyrë të decentralizuar, prandaj nuk është e nevojshme një njësi qendrore kontrolli (si p.sh. një kompjuter) për funksionimin e rregullt. 

*   Protokolli KNX përdor metodën CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) për qasjen në bus.
*   Zgjidhja e konflikteve në rast të transmetimit të njëkohshëm bëhet përmes arbitrimit bit për bit.
*   Një "0" logjike është dominuese në bus, ndërsa një "1" logjike është recesive.
*   Nëse një pajisje dërgon një "1" dhe zbulon një "0" dominuese në bus, ajo e ndërpret transmetimin, në mënyrë që telegrami me prioritet të transmetohet pa humbje të dhënash.

## 3. Arkitektura e Pajisjeve të Bus-it

Një pajisje funksionale KNX (p.sh. një sensor ose aktuator) përbëhet kryesisht nga tre komponentë të ndërlidhur.

*   **Bashkuesi i Bus-it (Busankoppler - BA):** Është përgjegjës për funksionin e lidhjes fizike, merr telegrame nga bus-i, i dekodon ato dhe dërgon informacione të koduara në bus.
*   **Moduli i Aplikacionit (Anwendungsmodul - AM):** Përpunon hyrjet dhe daljet fizike, kalon informacionin e hyrjeve reale te bashkuesi i bus-it ose kontrollon daljet reale.
*   **Programi i Aplikacionit (Applikationsprogramm - AP):** Përcakton funksionin specifik të pajisjes dhe ngarkohet në memorien e programit.

Inteligjenca e pajisjes ruhet në lloje të ndryshme të memories së mikrokontrolluesit:
*   **(Flash) ROM:** Ruan softuerin e pandryshueshëm të sistemit (System Stack), i identifikueshëm përmes versionit të maskës.
*   **RAM:** Ruan vlera të përkohshme, të cilat humbasin në rast të rënies së tensionit.
*   **EEPROM:** Ruan programin e aplikacionit që mund të rishkruhet, adresat fizike, adresat e grupit dhe parametrat.

## 4. Shtresa e Aplikacionit dhe Konfigurimi

Ndërveprimi midis pajisjeve të prodhuesve të ndryshëm garantohet përmes llojeve të standardizuara të konfigurimit dhe të dhënave të përdoruesit në telegrame.

### 4.1 Llojet e Konfigurimit
*   **S-Mode (System Mode):** Planifikimi dhe konfigurimi bëhet përmes një kompjuteri me softuerin neutral ndaj prodhuesit ETS (Engineering Tool Software). Kjo metodë është e destinuar për planifikuesit e certifikuar KNX dhe kryesisht për instalime të mëdha.
*   **E-Mode (Easy Mode):** Konfigurimi nuk bëhet përmes një kompjuteri, por me anë të një kontrolluesi qendror ose butonave. Këto pajisje zakonisht kanë funksionalitet të kufizuar dhe janë të dizajnuara për instalime të mesme.

### 4.2 Profilet e Sistemit dhe Objektet
Softueri i sistemit i një pajisjeje bazohet në profile të standardizuara që përcaktojnë zgjerimin e memories dhe funksionet e mbështetura.
*   **Sistemi 1 & 2:** Gjenerata më të vjetra, ku Sistemi 2 mbështet deri në 254 objekte komunikimi.
*   **Sistemi 7 & B:** Zhvilluar për pajisje komplekse të bus-it (p.sh. kontrollues aplikacionesh). Sistemi B heq kufizimet e mëparshme dhe mbështet deri në 65,536 objekte komunikimi.

### 4.3 Funksionet e Standardizuara të Përdoruesit (Shembull: Dimming / Zbehja e Dritës)
Në mënyrë që aktuatorët dhe sensorët të komunikojnë në mënyrë të njëtrajtshme, sekuencat e komandave në shtresën e aplikacionit janë rreptësisht të standardizuara.
*   **Dimming Start/Stop (Fillimi/Ndalimi i Zbehjes):** Kohëzgjatja e shtypjes së butonit përdoret për të dalluar funksionin. Me një shtypje të shkurtër, sensori dërgon një telegram për "Ndezje/Fikje", me një shtypje të gjatë dërgon një telegram "Fillim i zbehjes", dhe gjatë lëshimit dërgon "Ndalim i zbehjes".
*   **Dimming Ciklik (Zbehje ciklike):** Në telekomandat me valë, komandat e zbehjes (p.sh. "Rrit ndriçimin me 12.5%") dërgohen në mënyrë ciklike për të siguruar që ndërprerjet e sinjalit të mos çojnë në humbjen e telegrameve të rëndësishme të ndalimit.