---
title: KNX Bussystem - Protokoll & Applikation
description: Umfassende Dokumentation zum KNX-Protokoll, den Übertragungsmedien, der Teilnehmerarchitektur und der Applikationsschicht.
---

# KNX Bussystem: Protokoll und Applikation

Die KNX Association entstand 1999 aus dem Zusammenschluss der EIB Association, der BCI (Batibus) und der European Home Systems Association (EHS)[cite: 1]. Das System ist ein offener Standard für die intelligente Gebäudeautomation und weltweit normiert, unter anderem durch CENELEC (EN 50090) und ISO/IEC (14543-3)[cite: 1]. 

## 1. Übertragungsmedien (Physical Layer)

Das KNX-Protokoll kann über verschiedene physikalische Medien übertragen werden, welche über Medienkoppler miteinander verbunden werden können[cite: 1].

*   **Twisted Pair (TP):** Die Übertragung erfolgt über eine getrennte Steuerleitung parallel zur 230 V Leitung[cite: 1]. Dieses Medium bietet die höchste Übertragungssicherheit und wird bevorzugt in Neuinstallationen eingesetzt[cite: 1].
*   **Powerline (PL110):** KNX-Meldungen werden direkt über das vorhandene 230 V Stromnetz übertragen, wofür ein Neutralleiter vorhanden sein muss[cite: 1].
*   **Radio Frequency (RF):** Die Signalübertragung erfolgt drahtlos über eine Funkstrecke, was sich besonders anbietet, wenn keine neuen Leitungen verlegt werden sollen[cite: 1].
*   **IP / Ethernet:** Wird in großen Installationen eingesetzt, in denen eine schnelle Bereichslinie benötigt wird, oder zur Kommunikation mit mobilen Geräten[cite: 1].

## 2. Buszugriff und Kollisionsvermeidung

Das KNX-System arbeitet dezentral, wodurch keine zentrale Steuereinheit (wie ein PC) für den regulären Betrieb notwendig ist[cite: 1]. 

*   Das KNX-Protokoll nutzt das CSMA/CA-Verfahren (Carrier Sense Multiple Access with Collision Avoidance) für den Buszugriff[cite: 1].
*   Die Konfliktlösung bei gleichzeitigem Senden erfolgt durch bitweise Arbitrierung[cite: 1].
*   Eine logische "0" ist auf dem Bus dominant, während eine logische "1" rezessiv ist[cite: 1].
*   Sendet ein Gerät eine "1" und erkennt eine dominante "0" auf dem Bus, bricht es die Sendung ab, sodass das priorisierte Telegramm ohne Datenverlust übertragen wird[cite: 1].

## 3. Architektur der Busteilnehmer

Ein funktionsfähiger KNX-Teilnehmer (z. B. ein Sensor oder Aktor) besteht prinzipiell aus drei ineinandergreifenden Bestandteilen[cite: 1].

*   **Busankoppler (BA):** Ist für die physikalische Koppelfunktion zuständig, empfängt Telegramme vom Bus, dekodiert diese und sendet kodierte Informationen auf den Bus[cite: 1].
*   **Anwendungsmodul (AM):** Verarbeitet die physikalischen Ein- und Ausgänge, gibt Informationen realer Eingänge an den Busankoppler weiter oder steuert reale Ausgänge an[cite: 1].
*   **Applikationsprogramm (AP):** Bestimmt die spezifische Funktion des Geräts und wird in den Programmspeicher geladen[cite: 1].

Die Intelligenz des Geräts wird in verschiedenen Speicherarten des Mikrocontrollers hinterlegt[cite: 1]:
*   **(Flash) ROM:** Speichert die unveränderliche Systemsoftware (System Stack), identifizierbar über die Maskenversion[cite: 1].
*   **RAM:** Speichert temporäre Werte, die bei einem Spannungseinbruch verloren gehen[cite: 1].
*   **EEPROM:** Speichert das überschreibbare Applikationsprogramm, physikalische Adressen, Gruppenadressen und Parameter[cite: 1].

## 4. Applikationsschicht und Konfiguration

Die Interoperabilität zwischen Geräten verschiedener Hersteller wird durch standardisierte Konfigurationsarten und Telegrammnutzdaten gewährleistet[cite: 1].

### 4.1 Konfigurierungsarten
*   **S-Mode (System Mode):** Die Planung und Konfiguration erfolgt über einen PC mit der herstellerneutralen ETS (Engineering Tool Software)[cite: 1]. Diese Methode ist für KNX-zertifizierte Planer und vor allem für Großanlagen bestimmt[cite: 1].
*   **E-Mode (Easy Mode):** Die Konfigurierung erfolgt nicht über einen PC, sondern mittels eines zentralen Kontrollers oder Tastern[cite: 1]. Diese Geräte haben meist eine beschränkte Funktionalität und sind für mittelgroße Anlagen konzipiert[cite: 1].

### 4.2 Systemprofile und Objekte
Die Systemsoftware eines Geräts basiert auf standardisierten Profilen, die den Speicherausbau und die unterstützten Funktionen definieren[cite: 1].
*   **System 1 & 2:** Ältere Generationen, wobei System 2 bis zu 254 Kommunikationsobjekte unterstützt[cite: 1].
*   **System 7 & B:** Entwickelt für komplexe Busteilnehmer (z. B. Applikationscontroller)[cite: 1]. System B hebt vorherige Begrenzungen auf und unterstützt bis zu 65.536 Kommunikationsobjekte[cite: 1].

### 4.3 Standardisierte Anwenderfunktionen (Beispiel Dimmen)
Damit Aktoren und Sensoren einheitlich kommunizieren, sind die Befehlsfolgen in der Applikationsschicht streng genormt[cite: 1].
*   **Start/Stopp-Dimmen:** Die Tastenbetätigungsdauer wird genutzt, um die Funktion zu unterscheiden[cite: 1]. Bei kurzer Betätigung sendet der Sensor ein Telegramm zum "Schalten", bei langer Betätigung ein Telegramm "Dimmen Start" und beim Loslassen "Dimmen Stopp"[cite: 1].
*   **Zyklisches Dimmen:** Bei drahtlosen Fernbedienungen werden Dimmbefehle (z. B. "Helligkeit um 12,5 % erhöhen") zyklisch gesendet, um sicherzustellen, dass Signalunterbrechungen nicht zum Verlust wichtiger Stopptelegramme führen[cite: 1].