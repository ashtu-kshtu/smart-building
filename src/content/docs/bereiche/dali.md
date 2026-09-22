---
title: DALI Lichtsteuerung – Historie, Technik und Anwendungen
description: Von der Entstehung des Standards über die spezifischen DALI Device Types (DT0 bis DT8) bis hin zu konkreten Anwendungen in der professionellen Gebäudeautomation.
---

# Die Evolution der Lichtsteuerung: DALI im Detail

## 1. Geschichte und Entstehung: Warum DALI entwickelt wurde

In den späten 1990er Jahren stieß die analoge Beleuchtungssteuerung zunehmend an ihre Grenzen. Der bis dahin dominierende 1-10V-Standard war zwar etabliert, brachte jedoch erhebliche Nachteile mit sich: Die Kommunikation verlief nur in eine Richtung (unidirektional), der Verkabelungsaufwand für verschiedene Lichtgruppen war immens, und Spannungsabfälle auf der Leitung führten zu ungleichmäßigem Dimmverhalten. Zudem war keine Statusrückmeldung defekter Leuchtmittel möglich.

Um diese Probleme zu lösen, schlossen sich führende Hersteller der Lichtindustrie (wie Osram, Philips und Tridonic) zusammen. Das Ziel war ein herstellerübergreifender, digitaler Standard: Das **Digital Addressable Lighting Interface (DALI)** wurde geboren und in der Norm IEC 60929 (später IEC 62386) fixiert. DALI sollte die Einfachheit der analogen Installation beibehalten – etwa die gemeinsame Verlegung von Netz- und Steuerleitung[cite: 2] – aber die Intelligenz dezentralisieren und eine bidirektionale Kommunikation (Senden und Empfangen) ermöglichen.

## 2. Technische Möglichkeiten und Systemarchitektur

DALI bietet Architekten, Elektroplanern und Systemintegratoren eine enorme Flexibilität bei der Lichtgestaltung. Die Kernfunktionen umfassen:

*   **Bidirektionale Kommunikation:** Steuergeräte können Befehle senden und gleichzeitig Statusinformationen (z. B. "Leuchtmittel defekt" oder "Vorschaltgerät überhitzt") von den Leuchten abfragen.
*   **Dezentrale Intelligenz:** Alle wichtigen Parameter wie die Kurzadresse (0-63), Gruppenzugehörigkeiten (0-15) und bis zu 16 Lichtszenen werden direkt im jeweiligen elektronischen Vorschaltgerät (EVG) gespeichert.
*   **Logarithmische Dimmung:** Die Dimmkennlinie ist exakt an die Empfindlichkeit des menschlichen Auges angepasst, was für einen sehr weichen und natürlichen Helligkeitsverlauf sorgt.
*   **Synchronität:** Bei einem Szenenaufruf dimmen alle beteiligten Leuchten absolut synchron auf den Zielwert, unabhängig von ihrem vorherigen Zustand.

## 3. DALI Device Types (Gerätetypen): Von DT0 bis DT8

Um die enorme Vielfalt an Leuchtmitteln und Funktionen im Protokoll abzubilden, ist der DALI-Standard in verschiedene "Device Types" (DT) unterteilt. Jeder Typ definiert spezifische Befehlssätze für eine bestimmte Technologie:

*   **DT0 (Fluorescent Lamps):** Der ursprüngliche Standard für Leuchtstofflampen.
*   **DT1 (Emergency Lighting):** Einzelbatterieversorgte Notbeleuchtung. Ermöglicht automatisierte Funktions- und Betriebsdauertests.
*   **DT2 (HID Lamps):** Hochdruck-Entladungslampen.
*   **DT3 (Low-Voltage Halogen):** Niedervolt-Halogenlampen.
*   **DT4 (Incandescent Lamps):** Klassische Glühlampen (Phasenanschnitt/-abschnittdimmer).
*   **DT5 (DC Voltage):** Konverter zur Wandlung von DALI in ein analoges 1-10V-Signal.
*   **DT6 (LED Modules):** Der heutige Standard für LED-Treiber. Steuert einen einzelnen Kanal (meist Helligkeit). Für RGB-Leuchten mit DT6 werden pro Farbe eine eigene DALI-Kurzadresse und ein eigener Treiberkanal benötigt.
*   **DT7 (Switching Relays):** Schaltrelais zur Integration von nicht-dimmbaren Lasten in das DALI-System.
*   **DT8 (Colour Control):** Die modernste Erweiterung für Farbsteuerung (Tunable White, RGB, RGBW). Das Besondere an DT8: Ein LED-Treiber benötigt für mehrere Farbkanäle **nur eine einzige DALI-Kurzadresse**. Helligkeit und Farbtemperatur können unabhängig voneinander mit speziellen DT8-Befehlen gesteuert werden, was Adressen spart und die Programmierung massiv vereinfacht.

## 4. DALI in der professionellen Lichtsteuerung

In modernen Zweckbauten arbeitet DALI selten als komplett isoliertes System. Es bildet die hochspezialisierte Ausführungsebene (Feldebene), die über Gateways (z.B. KNX-DALI, BACnet-DALI oder Modbus-DALI) in die übergeordnete Gebäudeleittechnik (BMS) integriert wird. 

Dabei übernimmt DALI das schnelle, synchrone Dimmen und das lokale Sensormanagement (Tageslichtregelung, Präsenzerkennung). Das übergeordnete BMS nutzt diese Daten gewerkeübergreifend – beispielsweise, um bei erkannter Raumpräsenz nicht nur das Licht einzuschalten, sondern auch die Klimaanlage hochzufahren oder die Jalousien zu öffnen.

## 5. Konkrete Anwendungsbereiche

Die Skalierbarkeit und Flexibilität von DALI machen es zum idealen Standard für nahezu jede Gebäudegröße:

### Luxusvillen & Smart Homes
In gehobenen Wohnimmobilien steht der Komfort im Vordergrund. DALI (oft gekoppelt mit einem KNX-System) ermöglicht komplexe Lichtszenen für verschiedene Stimmungslagen (z.B. "Kochen", "Kino", "Gäste"). Durch DT8 (Tunable White) kann der Tageslichtverlauf simuliert werden (Human Centric Lighting), was das Wohlbefinden und den Biorhythmus der Bewohner unterstützt.

### Hotellerie
Hotels erfordern eine Mischung aus Repräsentation, Komfort und Energieeffizienz. In der Lobby schaffen RGBW-Lichtszenen (DT8) atmosphärische Akzente, die sich tageszeitabhängig ändern. Auf den Fluren senkt die Kombination aus DALI-Präsenzmeldern und einer Grundbeleuchtung (z.B. 10% Helligkeit im Standby, 80% bei Bewegung) die Energiekosten drastisch, ohne das Sicherheitsgefühl der Gäste zu beeinträchtigen.

### Gewerbe & Büro (Offices)
Im Büroumfeld liegt der Fokus auf Arbeitsstättenrichtlinien und Flexibilität. DALI-Lichtbänder passen sich über Tageslichtsensoren kontinuierlich dem einfallenden Sonnenlicht an (Konstantlichtregelung), was die Konzentration fördert und massiv Energie spart. Bei Umstrukturierungen (z.B. neue Schreibtischinseln) müssen keine Kabel neu gezogen werden; die DALI-Leuchten werden per Software einfach neuen Gruppen und Tastern zugeordnet.

### Industrie & Logistik
In Produktionshallen mit schwer zugänglichen Hallenstrahlern spielen Statusrückmeldungen und Wartung eine entscheidende Rolle. Das Facility Management erhält präzise Fehlermeldungen (z.B. Treiberausfall bei Leuchte 45 in Halle 3) direkt auf den Leitstand. Zusätzlich gewährleistet die automatisierte Prüfung der DALI-Notbeleuchtung (DT1) die gesetzliche Konformität ohne manuellen Kontrollaufwand.