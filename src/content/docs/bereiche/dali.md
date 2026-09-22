---
title: DALI Lichtsteuerung
description: Alles rund um das Digital Addressable Lighting Interface (DALI) und moderne Beleuchtungstechnik.
---

# DALI (Digital Addressable Lighting Interface)

DALI steht für "Digital Addressable Lighting Interface" und ist die Definition für die standardisierte digitale Betriebsgeräteschnittstelle in der Lichttechnik[cite: 2]. Dieser herstellerübergreifende Standard, fixiert in der Norm IEC 60929, garantiert die Austauschbarkeit und Interoperabilität von elektronischen Betriebsgeräten (EVGs) unterschiedlicher Hersteller[cite: 2]. DALI wurde entwickelt, um die ältere analoge 1-10V-Technik abzulösen und bietet maximale Flexibilität bei der Lichtgestaltung durch dezentrale Intelligenz[cite: 2].

Dieser Bereich dient als detailliertes Nachschlagewerk für die Planung, Elektroinstallation und Inbetriebnahme von DALI-Lichtsteueranlagen.

## 1. Systemgrenzen und Architektur

DALI ist auf Funktionalität und Einfachheit für die Beleuchtungsebene zugeschnitten und fungiert oft als Subsystem in einem übergeordneten Gebäudemanagement[cite: 2].

*   **Adressen:** Ein System (eine DALI-Linie) unterstützt maximal 64 Individualadressen (Einzelgeräte)[cite: 2].
*   **Gruppen:** Es können bis zu 16 Gruppenadressen vergeben werden[cite: 2].
*   **Lichtszenen:** Jedes Betriebsgerät kann bis zu 16 Lichtszenen speichern[cite: 2].
*   **Dezentrale Datenspeicherung:** Die Intelligenz ist nicht zentralisiert; Parameter wie die Individualadresse, Gruppenzugehörigkeiten, Lichtszenenwerte, Fadingzeiten (Dimmgeschwindigkeit) und Notstrom- bzw. Einschaltlichtwerte werden direkt im EVG gespeichert[cite: 2].

## 2. Planung und Topologie

Bei der Planung einer DALI-Anlage sind keine besonderen Einschränkungen bei der Netzwerktopologie zu beachten.

*   **Verdrahtungsarten:** DALI erlaubt Serienvernetzung, Sternvernetzung oder eine Mischung aus beidem[cite: 2]. Lediglich ringförmige Verbindungen sollten vermieden werden[cite: 2].
*   **Keine Abschlusswiderstände:** Im Gegensatz zu anderen Bussystemen müssen bei DALI am Ende der Datenleitung keine Abschlusswiderstände angebracht werden[cite: 2].
*   **Leitungslängen & Querschnitte:** Die maximale Leitungslänge zwischen den zwei am weitesten entfernten Systemteilnehmern darf 300 Meter nicht überschreiten[cite: 2]. Der Mindestquerschnitt der Leitung hängt von der Länge ab: 0,5 mm² bis 100 m, 0,75 mm² bis 150 m und 1,5 mm² bei über 150 m[cite: 2].

## 3. Elektroinstallation und Spannungsversorgung

Die DALI-Schnittstelle ist unempfindlich und stark für die einfache Baupraxis optimiert.

*   **Leitungsführung:** Für die DALI-Steuerleitung (Zweidrahtleitung) ist keine Beachtung der Polarität erforderlich[cite: 2].
*   **Zusammenverlegung:** Die Steuerleitung kann gemeinsam mit der Starkstrominstallation verlegt werden[cite: 2]. Oft wird ein 5-adriges Standard-Installationskabel verwendet (z.B. L, N, PE, DA, DA), da für die DALI-Adern nur die Anforderungen an die Basisisolierung (2 x Basisisolierung zwischen Netz und DALI) erfüllt sein müssen[cite: 2]. Besondere Daten- oder geschirmte Kabel sind nicht zwingend notwendig[cite: 2].
*   **Spannung und Strom:** Der High-Pegel der Kommunikation liegt bei 16 Volt (toleriert zwischen 9,5 V und 22,5 V)[cite: 2]. Der Low-Pegel liegt bei 0 Volt (toleriert zwischen -4,5 V und +4,5 V)[cite: 2].
*   **Stromaufnahme:** Eine zentrale Schnittstellenversorgung darf maximal 250 mA liefern[cite: 2]. Jedes angeschlossene elektronische Gerät (z.B. EVG) entnimmt der DALI-Leitung maximal 2 mA[cite: 2]. Auf der Leitung darf ein Spannungsabfall von maximal 2 V entstehen[cite: 2].

## 4. Signalübertragung und Dimmverhalten

*   **Übertragungsrate und Code:** DALI arbeitet mit einer Nutzdatenübertragungsrate von 1200 bit/Sek. und nutzt den Manchester-Code zur fehlererkennenden Datenübertragung[cite: 2].
*   **Dimmkennlinie:** Der Dimmbereich reicht typischerweise von 0,1% bis 100%[cite: 2]. Die Dimmkennlinie verläuft logarithmisch, was perfekt an die Empfindlichkeit des menschlichen Auges angepasst ist und für einen gleichmäßigen Helligkeitseindruck sorgt[cite: 2].
*   **Synchrones Dimmen:** Ein großer Vorteil ist das automatische, absolut synchrone Dimmen aller beteiligten Betriebsgeräte bei einem Szeneaufruf, ohne störende Zeitverzögerungen (Popcorn-Effekt)[cite: 2].

## 5. Inbetriebnahme und Adressierung

Die Inbetriebnahme ist stark abhängig vom gewählten Steuergerät.

*   **Teilnehmeridentifizierung:** Das Steuergerät sucht die Betriebsgeräte anhand einer im Werk hinterlegten 24-Bit langen Grundkennung (Langadresse)[cite: 2]. 
*   **Zuweisung:** Den gefundenen Geräten wird während der Adressierung eine logische "Individualadresse" (Kurzadresse 0-63) zugewiesen[cite: 2].
*   **Gruppenzuordnung:** Nach der Adressierung werden die Leuchten in sinnvolle Gruppen (0-15) zusammengefasst, was völlig per Software geschieht und bei Nutzungsänderungen keine Umverdrahtung der Anlage erfordert[cite: 2].

## 6. Gateways und Gebäudeleittechnik (BMS)

Da DALI primär die Kommunikation auf Raumebene übernimmt, wird es in größeren Gebäuden oft als Subsystem integriert[cite: 2].

*   Über Gateways (z. B. DALI-LON, DALI-EIB/KNX) fungiert das DALI-System als Ausführungsebene[cite: 2].
*   Das übergeordnete System (BMS) schickt nur Befehle wie Dimmwerte, Fehlerabfragen oder Szenenaufrufe an das Gateway, während der detaillierte Datenaustausch mit den Leuchten lokal auf dem DALI-Bus verbleibt[cite: 2].