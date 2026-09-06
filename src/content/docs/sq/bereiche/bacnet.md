---
title: BACnet Automatizimi i Ndërtesave
description: Dokumentacioni për protokollin e komunikimit BACnet për nivelin e menaxhimit dhe automatizimit.
---

# BACnet (Building Automation and Control Networks)

BACnet është protokolli dominues i rrjetit në automatizimin komercial të ndërtesave, veçanërisht kur bëhet fjalë për ngrohjen, ventilimin dhe kondicionimin e ajrit (HVAC). Ai siguron ndërveprueshmërinë midis pajisjeve të prodhuesve të ndryshëm.

Zhvillimi i BACnet filloi në vitin 1987 nën kujdesin e Shoqatës Amerikane të Inxhinierëve të Ngrohjes, Ftohjes dhe Kondicionimit të Ajrit (ASHRAE). Ai ka qenë standard i ANSI-së që nga viti 1995 dhe standard ndërkombëtar ISO që nga viti 2003. Standardi zhvillohet vazhdimisht përmes një procesi të hapur konsensusi për t'u përshtatur me kërkesat moderne, si integrimi në IoT.

## Pikat kryesore

* **BACnet/IP vs. MS/TP:** Krahasimi i mediave të ndryshme të transmetimit dhe llojeve të rrjetit.
* **Objektet & Properties:** Struktura e të dhënave BACnet (pajisjet, objektet, vetitë dhe vlerat).
* **Integrimi i Sistemit:** Shkallët e integrimit nga niveli i pajisjes deri te niveli i resë kompjuterike (Cloud).
* **Specifikimi dhe Konformiteti:** Shenja BTL, PICS, BIBBs dhe profilet e pajisjeve për sigurimin e cilësisë.

---

## 1. Përfitimet e Biznesit (The Business Case)

Para futjes së BACnet, operatorët shpesh ishin të lidhur me një furnizues të vetëm (Vendor Lock-in), gjë që kufizonte konkurrencën dhe rriste kostot e integrimit.

* **Konkurrenca dhe Kostot:** Produktet BACnet lejojnë zgjedhjen nga një gamë e gjerë furnizuesish, nxisin konkurrencën dhe thjeshtojnë marrjen e ofertave të shumta.
* **Përfitimet për Menaxherët e Faciliteteve:** Siguron qasje në të gjitha të dhënat përmes një aplikacioni të vetëm të ndërfaqes, duke përmirësuar raportimin dhe diagnostikimin.
* **Përfitimet për Integruesit:** Mjete unike, kohë më e shkurtër trajnimi dhe mundësia për t'u fokusuar te funksionet me vlerë të shtuar në vend të problemeve bazë të ndërfaqes.

---

## 2. Topologjitë e Rrjetit dhe Mediat e Transmetimit

BACnet mbështet arkitektura të ndryshme rrjeti për të përmbushur kërkesat e performancës dhe kostos:

* **BACnet/IP:** Përdor infrastrukturën ekzistuese IT (Enterprise LAN) dhe çelësat (switches) Ethernet. Ofron performancë shumë të lartë për pajisjet intensive në të dhëna (p.sh., frekuencëndreqësit), por kërkon koordinim të ngushtë me departamentin e IT-së.
* **BACnet/MS/TP (Master-Slave/Token-Passing):** Bazohet në një kabllo me dy tela të përdredhur EIA-485 me një distancë deri në 1200 metra. Është shumë efektiv në kosto për kontrollorët lokalë, sensorët dhe aktuatorët.
* **Opsione të tjera:** Përfshijnë ISO 8802-3 (Ethernet), ARCNET, Point-to-Point, LonTalk Foreign dhe ZigBee (kryesisht përmes gateway-ve).

---

## 3. Arkitektura: Pajisjet, Objektet dhe Vetitë (Devices, Objects & Properties)

Struktura e brendshme e një pajisjeje BACnet organizohet në mënyrë hierarkike:
* **Pajisjet (Devices):** Përfaqësojnë hardware-in fizik (p.sh., një kontrollor i programueshëm).
* **Objektet (Objects):** Çdo pajisje përmban objekte specifike për të pasqyruar funksionet e saj (p.sh., *Analog Input* për temperaturën e dhomës, *Binary Output* për valvula).
* **Properties (Vetitë):** Atribute brenda objekteve që përmbajnë vlera specifike (p.sh., `Present_Value` për vlerën aktuale ose `Device_Manufacturer` për emrin e prodhuesit).

---

## 4. Shkallët e Integrimit të Sistemit

BACnet strukturon integrimin e sistemeve në katër nivele kryesore:
1. **Device Integration (Integrimi i Pajisjeve):** Lidhja fizike dhe e bazuar në protokoll e pajisjeve brenda një fushe (HLK, ndriçim, kontroll qasjeje).
2. **Functional Integration (Integrimi Funksional):** Lidhja e funksioneve të ndryshme (p.sh., lidhja e ndriçimit me klimatizimin për të rregulluar ftohjen kur ndizet drita).
3. **Application Integration (Integrimi i Aplikacioneve):** Bashkimi i të gjitha të dhënave në një softuer të vetëm drejtimi (Building Management System) për kontroll qendror dhe alarmim.
4. **Cloud Integration (Integrimi në Re):** Dërgimi i të dhënave në platforma Cloud për analiza të avancuara, diagnostikim në distancë dhe optimizim.

---

## 5. Përshkruesit e Produkteve (BIBBs dhe Profilet e Pajisjeve)

Për të krahasuar aftësitë e pajisjeve në mënyrë transparente, BACnet përdor elemente të standardizuara:

* **BIBBs (BACnet Interoperability Building Blocks):** Blloqe ndërtimi që tregojnë saktësisht se cilat funksione mbështet një pajisje (të ndara në kategori si *Data Sharing*, *Alarm & Event Management*, *Schedule*, *Trend* dhe *Device/Network Management*). Shkronja **A** tregon se pajisja mund të nisë një ndërveprim; **B** tregon aftësinë për t'u përgjigjur ndaj kërkesave.
* **Device Profiles (Profilet e Pajisjeve):** Klasifikojnë pajisjet bazuar në shtrirjen e tyre minimale të BIBB-ve (p.sh., familja e ndërfaqes së operatorit si B-AWS/B-OWS dhe familja e kontrollorëve si B-BC, B-AAC, B-ASC, B-SA, B-SS).

---

## 6. Konformiteti, Sigurimi i Cilësisë dhe Këshilla Praktike

* **Shenja BTL (BACnet Testing Laboratories):** Garanton se një produkt ka kaluar teste të rrepta të pavarura (300 deri në 1,000 cikle testimi). Përdorimi i pajisjeve të paverifikuara mbart rrezikun e vonesave në vënien në punë dhe gabimeve të integrimit.
* **PICS (Protocol Implementation Conformance Statement):** Një dokument i dhënë nga prodhuesi që liston saktësisht të gjitha BIBB-të e implementuara, llojet e rrjetit dhe detajet teknike.
* **Këshilla për Specifikimin:** Caktoni një person përgjegjës për adresimin e pajisjeve në të gjithë sistemin, llogaritni shkallën e mesazheve dhe numrin e pikëve të të dhënave paraprakisht, dhe sigurohuni që të respektoni protokollet e sigurisë së IT-së.