---
title: DALI Lichtsteuerung
description: Umfassende Dokumentation zum Digital Addressable Lighting Interface (DALI, DALI-2 und D4i) inkl. Spezifikationen der DALI Alliance.
---

# DALI (Digital Addressable Lighting Interface)

DALI ist das international genormte Protokoll (IEC 62386) zur digitalen, störsicheren Datenübertragung in der Lichttechnik. Während die erste DALI-Generation die analoge 1-10V-Technik erfolgreich ablöste, legt der aktuelle Standard **DALI-2** den Fokus auf uneingeschränkte Interoperabilität zwischen verschiedenen Herstellern. Zudem standardisiert DALI-2 erstmals auch Steuer- und Eingabegeräte (wie Sensoren und Taster) vollständig im Protokoll. 

Dieser Bereich dient als tiefgehendes Nachschlagewerk basierend auf offiziellen Spezifikationen der DALI Alliance sowie führender DALI-Komponentenhersteller wie Tridonic und Lunatone.

## 1. Systemgrenzen und fundamentale Eigenschaften

Ein DALI-System basiert auf einer 2-Draht-Busleitung, die ohne Berücksichtigung der Polarität zusammen mit der Netzspannung (230V) verlegt werden kann. 

*   **Netzwerk-Parameter:** Ein einzelner DALI-Kreis erlaubt den Anschluss von bis zu 64 DALI-Betriebsgeräten. Zusätzlich können 16 logische Gruppen und 16 Szenen pro Gerät vergeben werden.
*   **Elektrische Spezifikationen:** Die DALI-Busspannung variiert zwischen 12 V und 22,5 V (typisch 16 V). Der maximale DALI-Systemstrom ist auf 250 mA limitiert. Da ein Betriebsgerät (EVG) typischerweise max. 2 mA zieht, ergeben 64 Teilnehmer maximal 128 mA. Die verbleibende Leistung kann zur Versorgung von busgespeisten Steuermodulen oder Sensoren genutzt werden.
*   **Datenübertragung & Dimmung:** Die Übertragungsrate ist auf 1200 Baud festgelegt (asynchrone Schnittstelle). Die Lichtauflösung bei der standardisierten logarithmischen Dimmkurve reicht bis zu 0,1 % hinab, was dem menschlichen Helligkeitsempfinden optimal angepasst ist.
*   **Wichtige DALI-Parameter (nach Lunatone):** In den Betriebsgeräten werden systemkritische Zustände lokal konfiguriert. Dazu zählen die *FadeTime* (Überblendzeit), *FadeRate* (Dimmgeschwindigkeit), das *PowerOn Level* (Einschaltverhalten bei Netzspannungsrückkehr) und das *System Failure Level* (vordefiniertes Sicherheitsverhalten bei Ausfall der DALI-Busspannung).

## 2. DALI-2 und Multimaster-Fähigkeit

Mit DALI-2 wurde das System vollumfänglich multimasterfähig. Das bedeutet, dass nicht nur ein zentrales Gehirn sendet, sondern mehrere Steuergeräte (Application Controller) und Eingabegeräte (Sensoren) im selben Netzwerk miteinander kommunizieren.
*   **Intelligente Lichtsensorik:** Moderne DALI-2 Sensoren (wie das kompakte Lunatone DALI-2 LS Modul oder der Tridonic MSensor) vereinen komplexe Umgebungslichtregelung (Konstantlichtregelung) und Anwesenheitserkennung. 
*   **Erweiterte Umwelt-Sensoren:** Über moderne DALI-Infrastruktur lassen sich inzwischen auch Werte wie Temperatur, Luftfeuchtigkeit, Luftdruck oder Luftqualität erfassen und in das Netzwerk einspeisen.

## 3. D4i: Die IoT-Ready Erweiterung (DALI Alliance)

D4i (DALI for IoT) ist eine signifikante Erweiterung der DALI-2 Zertifizierung, welche zukunftssichere, "IoT-ready" Leuchten definiert. D4i fokussiert sich stark auf sogenanntes **Intra-Luminaire DALI** – also ein autarkes DALI-Netzwerk *innerhalb* einer einzigen Leuchte.

*   **Integrierte Stromversorgung (Part 250):** Für eine D4i-Zertifizierung muss ein LED-Treiber über eine integrierte DALI-Busstromversorgung verfügen. Dadurch entfällt der Platzbedarf für externe Netzteile, um Sensoren oder Kommunikationsmodule in oder an der Leuchte zu betreiben.
*   **Plug-and-Play Stecksysteme:** D4i ist die technische Basis für drahtlose Smart-City- und Smart-Building-Stecksysteme wie Zhaga Book 18 oder ANSI C136.41 (Zhaga-D4i). Sensoren oder drahtlose Netzwerkknoten (NLCs) können hierüber einfach von außen auf die Leuchte aufgesteckt werden.

## 4. Datenmanagement: Leuchten-, Energie- und Diagnosedaten

Die DALI Alliance schreibt für D4i einen reichhaltigen standardisierten Datensatz vor (von Tridonic oft unter dem Begriff *lumDATA* zusammengefasst), der das Facility Management revolutioniert. 

*   **Part 251 (Leuchtendaten):** Speicherung von Herstellerinformationen, OEM-Identifikationsdaten und Nennleistungen direkt im LED-Treiber für ein einfaches, digitales Asset-Management.
*   **Part 252 (Energiedaten):** Übermittlung des aktuellen Stromverbrauchs und der Leistungsaufnahme in Echtzeit, um Gebäudeenergieausweise zu bedienen und Betriebskosten zu senken.
*   **Part 253 (Diagnosedaten):** Überwachung von Fehlern (wie Übertemperatur, Überspannung) sowie Betriebsstunden. Dies ermöglicht *Predictive Maintenance* (vorausschauende Wartung), da drohende Ausfälle erkannt werden, bevor die Komponente versagt.

## 5. Notbeleuchtung nach DALI-2 Part 202

Mit dem Update des Standards IEC 62386-202 im Jahr 2021 können nun auch "Self-contained emergency control gear" (einzelbatterieversorgte Notbeleuchtungskomponenten) nach DALI-2 zertifiziert werden.
*   **Kompromisslose Interoperabilität:** Treibermodule (wie Tridonic EM powerLED PRO für LiFePO4-Batterien) sprechen nun garantiert die gleiche Sprache und lassen sich mit DALI-2 Lichtmanagementsystemen beliebiger Hersteller kombinieren.
*   **Automatisiertes Prüfen:** Der Batteriezustand, Fehler sowie Systemtests können vollautomatisch über den DALI-Bus initiiert und protokolliert werden, wodurch gesetzliche Prüfaufwände stark sinken.

## 6. Gateways, Displays und Gebäudeleittechnik (BMS)

Um die detaillierte DALI-Feldebene mit dem Rest des Gebäudes zu verbinden, kommen Gateways und Visualisierungen zum Einsatz.
*   **DALI-2 Displays:** Lösungen wie das *Lunatone DALI-2 Display 7"* fungieren als zentrale Bediengeräte und Application Controller. Sie können mehrere DALI-Linien verwalten, WLAN-Schnittstellen bereitstellen und ermöglichen RGB- sowie Tunable-White-Steuerungen per Touch-Oberfläche.
*   **BMS Integration (BACnet/REST API):** Hochwertige Zentralsteuerungen (wie Tridonic sceneCOM evo) integrieren das DALI-2-Lichtnetzwerk über BACnet nahtlos in die Klima-, Lüftungs- und Heizungstechnik eines Gebäudes. Alternativ erlauben REST-API-Schnittstellen die individuelle Analyse von IoT-Daten (z.B. Heatmaps zur Raumnutzung) in externen Dashboards.