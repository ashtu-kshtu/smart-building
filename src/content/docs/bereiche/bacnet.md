---
title: BACnet Gebäudeautomation
description: Dokumentation zum Kommunikationsprotokoll BACnet für die Management- und Automationsebene.
---

# BACnet (Building Automation and Control Networks)

BACnet ist ein herstellerübergreifendes Kommunikationsprotokoll für die Gebäudeautomation, das speziell entwickelt wurde, um Produkte verschiedener Hersteller nahtlos miteinander zu vernetzen[cite: 1]. Die Entwicklung begann 1987 unter dem Dach der American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE)[cite: 1]. Seit 1995 ist BACnet ein ANSI-Standard und seit 2003 ein internationaler ISO-Standard, der durch einen offenen Konsultationsprozess kontinuierlich weiterentwickelt wird[cite: 1].

## Schwerpunkte

* **BACnet/IP vs. MS/TP:** Die verschiedenen Übertragungsmedien im Vergleich[cite: 4].
* **Objekte & Properties:** Aufbau der BACnet-Datenstruktur (Geräte, Objekte, Properties und Werte)[cite: 6].
* **Systemintegration:** Stufen der Integration von Device- bis zur Cloud-Ebene[cite: 3].
* **Spezifikation & Konformität:** BTL-Prüfzeichen, PICS, BIBBs und Device Profiles zur Qualitätssicherung[cite: 5].

---

## 1. Der geschäftliche Nutzen (The Business Case)

Vor der Einführung von BACnet waren Betreiber oft an einen einzigen Lieferanten gebunden (Vendor Lock-in), was den Wettbewerb einschränkte und den Integrationsaufwand verteuerte[cite: 1]. 

* **Wettbewerb & Kosten:** BACnet-Produkte ermöglichen die Auswahl aus einem breiten Anbieterfeld, fördern den Wettbewerb, vereinfachen den Angebotsvergleich und senken die Systemintegrationskosten[cite: 1, 3].
* **Vorteile für Facilities Manager:** Ermöglicht den Zugriff auf alle Daten über eine einzige Benutzeroberfläche (Front-End Application), was Berichte und Diagnosen optimiert[cite: 1]. Die Spezifikation entwickelt sich stetig weiter (inklusive Rückwärtskompatibilität und Vorbereitungen für das Internet of Things)[cite: 1].
* **Vorteile für Integratoren & Lieferanten:** Einheitliche Werkzeuge, verkürzte Einarbeitungszeiten (Ramp-up time) und die Möglichkeit, sich auf wertschöpfende Funktionen statt auf grundlegende Schnittstellenprobleme zu konzentrieren[cite: 3].

---

## 2. Netzwerktopologien und Übertragungsmedien

BACnet unterstützt diverse Netzwerke, um den Anforderungen an Performance und Kosten gerecht zu werden:

* **BACnet/IP:**
  * *Beschreibung:* Nutzt die bestehende IT-Infrastruktur (Enterprise LAN) und Ethernet-Switches oder Hubs[cite: 4].
  * *Einsatzbereich:* Für High-Performance-Geräte und datenintensive Anwendungen (z. B. drehzahlgeregelte Antriebe)[cite: 4].
  * *Vorteile:* Sehr hohe Geschwindigkeit, unbegrenzte Skalierbarkeit, Nutzung vorhandener IT-Netzwerke[cite: 4].
  * *Nachteile:* Höhere Kosten, erfordert enge Abstimmung und Einhaltung von IT-Sicherheitsregeln[cite: 4].
* **BACnet MS/TP (Master-Slave/Token-Passing):**
  * *Beschreibung:* Basiert auf einer EIA-485-Zweidrahtleitung mit einer Reichweite von bis zu 4.000 Fuß (ca. 1.200 Meter)[cite: 4].
  * *Einsatzbereich:* Für kleinere, lokale Controller und Sensoren (z. B. Pumpen, Raumregler)[cite: 4].
  * *Vorteile:* Äußerst kosteneffizient, unabhängig von der IT-Infrastruktur betreibbar[cite: 4].
  * *Nachteile:* Geringere Datenübertragungsrate und limitierte Teilnehmeranzahl pro Strang[cite: 4].
* **Weitere Optionen:** ISO 8802-3 (Ethernet), ARCNET, Point-to-Point, LonTalk Foreign und ZigBee (meist über Gateways)[cite: 4].

---

## 3. Architektur: Geräte, Objekte und Properties

Die innere Struktur eines BACnet-Geräts ist hierarchisch aufgebaut:

* **Geräte (Devices):** Repräsentieren die physische Hardware (z. B. einen programmierbaren Controller)[cite: 6].
* **Objekte (Objects):** Jedes Gerät enthält mehrere Objekte zur Abbildung seiner Funktionen[cite: 6] (z. B. `Analog Input` für Raumtemperaturen, `Binary Output` für Ventile, `Set Point`).
* **Properties (Eigenschaften):** Attribute innerhalb der Objekte, die spezifische Werte enthalten[cite: 6] (z. B. `Present_Value = 70` oder `Device_Manufacturer = ABC Company`)[cite: 6].
* *Hinweis:* Die Anzahl der Objekte spiegelt die Kapazität eines Geräts wider[cite: 6]. Zwei Geräte, die denselben Standard unterstützen, können intern dennoch unterschiedlich viele Datenpunkte oder Trend-Objekte besitzen[cite: 6].

---

## 4. Stufen der Systemintegration

BACnet strukturiert die Integration in vier aufeinander aufbauende Ebenen[cite: 3]:

1. **Device Integration (Geräteintegration):** Die physische und protokollbasierte Verbindung von Geräten innerhalb eines Gewerks (HLK, Beleuchtung, Zutritt) ohne proprietäre Hürden[cite: 3].
2. **Functional Integration (Funktionale Integration):** Verknüpfung unterschiedlicher Gewerke (z. B. Kopplung von Beleuchtung und Klimaanlage, um bei Präsenz die Kühlung anzupassen)[cite: 3].
3. **Application Integration (Applikationsintegration):** Zusammenführung aller Daten in einer übergeordneten Gebäudeleittechnik-Anwendung (Front-End) für zentrale Steuerung, Alarmierung und Berichte[cite: 3].
4. **Cloud Integration:** Übertragung von Daten an Cloud-Plattformen zur erweiterten Analyse, Ferndiagnose und Optimierung[cite: 3].

---

## 5. Produkt-Deskriptoren (BIBBs und Device Profiles)

Um die Fähigkeiten von Geräten transparent zu vergleichen, nutzt BACnet standardisierte Beschreibungen:

* **BIBBs (BACnet Interoperability Building Blocks):** Detaillierte Bausteine, die angeben, welche Funktionen ein Gerät unterstützt (gegliedert in Kategorien wie *Data Sharing [DS]*, *Alarm & Event Management [AE]*, *Schedule [SCHED]*, *Trend [T]*, *Device/Network Management [DM/NM]*)[cite: 5]. 
  * Der Buchstabe **A** bedeutet, dass das Gerät eine Interaktion initiieren kann; **B** steht für die Fähigkeit, auf Anforderungen zu reagieren[cite: 5].
* **Device Profiles (Geräteprofile):** Klassifizieren Geräte anhand ihres Mindest-BIBB-Umfangs[cite: 5]:
  * *Operator Interface Family:* B-AWS (Advanced Workstation), B-OWS (Workstation), B-OD (Displays)[cite: 5].
  * *Controller Family:* B-BC (Building Controller), B-AAC (Advanced Application Controller), B-ASC (Application Specific Controller), B-SA (Smart Actuator), B-SS (Smart Sensor)[cite: 5].
  * *Miscellaneous:* B-RTR (Router), B-GW (Gateway), B-BBMD (Broadcast Management Device)[cite: 5].

---

## 6. Konformität, Qualitätssicherung und Praxistipps

* **BTL-Prüfzeichen (BACnet Testing Laboratories):** Garantiert, dass ein Produkt strenge unabhängige Tests (300 bis 1.000 Testzyklen) bestanden hat[cite: 1, 6]. Der Einsatz unzertifizierter Geräte birgt Risiken wie verlängerte Inbetriebnahmen, unerwartetes Systemverhalten und Probleme bei zukünftigen Erweiterungen[cite: 6].
* **PICS (Protocol Implementation Conformance Statement):** Ein herstellerseitig bereitgestelltes Dokument, das alle implementierten BIBBs, unterstützten Netzwerke und technischen Leistungsmerkmale exakt auflistet[cite: 5].
* **Spezifikationstipps für die Praxis:** 
  * Bestimmen Sie eine verantwortliche Person für die geräteübergreifende Adressvergabe[cite: 7].
  * Berechnen Sie Datenpunkte und Nachrichtenraten (Polling Frequency) im Vorfeld, um die Netzwerkperformance nicht zu beeinträchtigen[cite: 7].
  * Klären Sie IT-Sicherheitsrichtlinien und die Verfügbarkeit von Konfigurations-Software-Tools für das Betriebspersonal im Voraus[cite: 7].