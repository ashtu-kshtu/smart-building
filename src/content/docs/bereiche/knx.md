---
title: KNX Bussystem - Technische Spezifikation
description: Umfassende, technische Dokumentation zur Architektur, dem Protokoll, der Topologie und der Applikationsschicht des KNX-Standards.
---

# KNX Bussystem: Technische Architektur & Protokoll

KNX ist der weltweit standardisierte (ISO/IEC 14543-3), offene Standard für die Haus- und Gebäudeautomation. Verwaltet von der [KNX Association](https://www.knx.org), garantiert das System die nahtlose Interoperabilität von über 8.000 zertifizierten Geräten von mehr als 500 Herstellern. Die Projektierung erfolgt zentral über die **ETS (Engineering Tool Software)**.

---

## 1. Topologie und Netzwerkstruktur

KNX ist dezentral aufgebaut (kein zentraler Server notwendig) und hierarchisch in Linien und Bereiche gegliedert.

### 1.1 Hierarchischer Aufbau
*   **Linie (Line):** Die kleinste physikalische Einheit. Eine Standard-TP-Linie kann bis zu 64 Teilnehmer aufnehmen. Mit modernen TP1-256 Spannungsversorgungen sind bis zu **256 Teilnehmer pro Linie** (ohne Linienverstärker) möglich.
*   **Bereich (Area):** Bis zu 15 Linien können über **Linienkoppler (LK)** an eine Hauptlinie (Main Line) angeschlossen werden und bilden so einen Bereich.
*   **Backbone (System):** Bis zu 15 Bereiche können über **Bereichskoppler (BK)** an die Bereichslinie (Backbone) gekoppelt werden. Oft wird hierfür heute das schnelle Ethernet (KNX IP Router) genutzt.
*   **Maximale Ausbaustufe:** Über 65.000 Teilnehmer in einem Gesamtsystem.

### 1.2 Physikalische Grenzen (KNX TP - Twisted Pair)
Zur Gewährleistung der Signalintegrität (Vermeidung von Signalreflexionen und Spannungsabfällen) gelten strikte Längenrestriktionen:
- **Max. Leitungslänge pro Linie:** 1.000 m
- **Max. Entfernung zwischen zwei Teilnehmern:** 700 m
- **Max. Entfernung Teilnehmer zur Spannungsversorgung:** 350 m
- **Min. Entfernung zwischen zwei Spannungsversorgungen:** 200 m (bei ungekoppelten Drosseln)

---

## 2. Übertragungsmedien (Physical Layer)

KNX unterstützt verschiedene Medien zur Signalübertragung, die über Medienkoppler miteinander verbunden werden können:

| Medium | Abk. | Spezifikation & Einsatzgebiet |
| :--- | :--- | :--- |
| **Twisted Pair** | KNX TP | Standard-Buskabel (YCYM 2x2x0,8, meist grün). Daten- und Energieübertragung (29V DC) auf derselben Doppelader. 9.600 Bit/s. |
| **IP / Ethernet** | KNX IP | Nutzung der LAN-Infrastruktur. Unterscheidung zwischen **KNX IP Routing** (Multicast für Backbone) und **KNX IP Tunneling** (Punkt-zu-Punkt, z.B. für ETS-Programmierung). |
| **Radio Frequency** | KNX RF | Funkübertragung (868 MHz). Ideal für Nachrüstungen. Unterstützt KNX RF Ready und das neuere KNX RF Multi (Frequenzsprungverfahren). |
| **Powerline** | KNX PL | Signalübertragung über das 230V-Stromnetz. (In Neuanlagen obsolet). |

---

## 3. Buszugriff und Telegrammaufbau (Data Link Layer)

### 3.1 Kollisionsvermeidung: CSMA/CA
KNX TP nutzt das **CSMA/CA-Verfahren (Carrier Sense Multiple Access with Collision Avoidance)**. 
- Das System nutzt bitweise Arbitrierung.
- Logisch "0" (ca. -5V bis -9V Spannungsabfall) ist **dominant**.
- Logisch "1" (Ruhespannung) ist **rezessiv**.
- Senden zwei Geräte gleichzeitig, überwachen beide den Bus. Sendet Gerät A eine "0" und Gerät B eine "1", überschreibt die "0" die "1". Gerät B erkennt die Kollision, stoppt sofort den Sendevorgang und wartet, bis der Bus wieder frei ist. *Ergebnis: 100% Durchsatz ohne Datenverlust beim Sieger-Telegramm.*

### 3.2 Struktur eines KNX-Telegramms (Standard Frame)
Ein Telegramm besteht aus Zeichen (Zeichenzeit = 1,04 ms) und dauert ca. 20-40 ms.

1. **Control Field (Kontrollfeld):** Beinhaltet die Priorität (System, Urgent, Normal, Low).
2. **Source Address (Quelladresse):** Die 16-Bit Physikalische Adresse des Senders (z.B. `1.1.45`).
3. **Destination Address (Zieladresse):** 16-Bit. Kann eine Physikalische Adresse (für ETS-Download) oder meist eine **Gruppenadresse** (z.B. `1/2/14`) sein. Das 17. Bit (Routing-Bit) entscheidet über die Art der Adresse.
4. **Routing Counter (TTL):** Startet bei 6. Wird von jedem Koppler um 1 dekrementiert. Bei 0 wird das Telegramm vernichtet (verhindert Zirkulieren).
5. **Length (Länge):** 4-Bit Feld, gibt die Länge der Nutzdaten an (max. 15 Bytes im Standard-Frame, bis 254 Bytes im Extended Frame).
6. **APCI/Data (Nutzdaten):** Application Layer Protocol Control Information. Enthält den eigentlichen Befehl (Read, Write, Response) und die Daten.
7. **FCS (Frame Check Sequence):** Prüfsumme (Paritätsprüfung) zur Fehlererkennung.
8. **Ack (Acknowledge):** Empfangsbestätigung der Zielgeräte (ACK, NAK, BUSY).

---

## 4. Applikationsschicht & Kommunikation (Application Layer)

Hier findet die eigentliche Logik statt, die in der ETS projektiert wird.

### 4.1 Kommunikationsobjekte und Flags
Ein KNX-Gerät besteht aus Kommunikationsobjekten (KOs), denen **Gruppenadressen (GA)** zugewiesen werden. Wie sich ein KO verhält, wird durch Flags definiert:

| Flag (DE / EN) | Bedeutung |
| :--- | :--- |
| **K / C (Kommunikation)** | Hauptschalter. Ist dies deaktiviert, reagiert das Objekt auf nichts. |
| **L / R (Lesen)** | Erlaubt es dem Bus, den aktuellen Wert dieses Objekts per *ValueRead*-Telegramm abzufragen. (Sollte meist nur bei einem Objekt pro GA gesetzt sein!). |
| **S / W (Schreiben)** | Das Objekt wertet eintreffende *ValueWrite*-Telegramme aus (z.B. Aktor schaltet Relais). |
| **Ü / T (Übertragen)** | Das Gerät sendet bei einer Wertänderung aktiv ein *ValueWrite*-Telegramm auf den Bus (z.B. Taster oder Temperaturfühler). |
| **A / U (Aktualisieren)** | Aktualisiert den Objektwert, wenn ein anderes Gerät auf eine Leseanforderung antwortet (ValueResponse). |
| **I (Initialisieren)** | Sendet nach einem Busspannungsausfall automatisch eine Leseanforderung, um den aktuellen Status abzufragen. |

### 4.2 Datenpunkttypen (DPT - Datapoint Types)
DPTs garantieren die Interoperabilität. Sie definieren Format, Länge und Bedeutung der Nutzdaten:

*   **DPT 1.xxx (1-Bit - B1):** 
    *   `1.001` (Schalten: 0=Aus, 1=Ein)
    *   `1.008` (Auf/Ab: 0=Auf, 1=Ab)
*   **DPT 3.xxx (4-Bit - B1U3):** 
    *   `3.007` (Dimmen relativ: 1 Bit für Richtung Heller/Dunkler, 3 Bit für Schrittweite).
*   **DPT 5.xxx (8-Bit / 1-Byte - U8):** 
    *   `5.001` (Skalierung: 0-100%, Auflösung 0,4%)
    *   `5.004` (Dezimalwert: 0-255).
*   **DPT 9.xxx (16-Bit / 2-Byte - F16):** 
    *   `9.001` (Temperatur in °C)
    *   `9.004` (Helligkeit in Lux).
*   **DPT 20.102 (1-Byte):** HVAC Modus (0=Auto, 1=Comfort, 2=Standby, 3=Economy, 4=Building Protection).
*   **DPT 232.600 (3-Byte):** RGB Farbsteuerung (3x 8-Bit für Rot, Grün, Blau).

---

## 5. Sicherheit: KNX Secure

Angesichts moderner Cyber-Bedrohungen (besonders in IP-Netzwerken) wurde der Standard um **KNX Secure** (ISO 22599) erweitert:

1.  **KNX IP Secure:** Verschlüsselt das gesamte KNX-Telegramm (Routing & Tunneling) auf der IP-Ebene (Ethernet/WLAN). Es schützt die Backbone-Kommunikation.
2.  **KNX Data Secure:** Verschlüsselt die Nutzdaten direkt auf der Twisted-Pair- oder RF-Leitung, unabhängig vom Medium.
    *   Nutzt **AES-128 CCM** zur Verschlüsselung.
    *   Integrierter **MAC (Message Authentication Code)** garantiert, dass das Telegramm nicht manipuliert wurde.
    *   **Sequenznummern** verhindern Replay-Angriffe (Aufzeichnen und späteres erneutes Abspielen eines Öffnen-Befehls).
    *   Die Einrichtung erfolgt über individuelle FDSK (Factory Default Setup Keys) per QR-Code in der ETS.

---
*Referenzquellen: Offizielle Spezifikationen der [KNX Association](https://www.knx.org), ISO/IEC 14543-3 Normierung, ETS6 Handbuch.*