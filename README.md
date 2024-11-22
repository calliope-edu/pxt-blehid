# blehid

```package
blehid=github:calliope-edu/pxt-blehid/
```

Diese Erweiterung ermöglicht es dem Calliope mini 3, wie ein Human Interface Device (HID) über Bluetooth zu agieren. Derzeit unterstützt sie die folgenden Dienste: Tastatur, Maus, Medientasten (Play, Pause, Lautstärke erhöhen usw.), ein Gamepad und eine Absolute Maus (setzt den Mauszeiger an eine bestimmte Position auf dem Bildschirm).

Dies ist ein Fork der Original-Erweiterung von BSiever (github:bsiever/microbit-pxt-blehid)

Nicht alle Dienste werden auf allen Geräten oder Betriebssystemen unterstützt. Betriebssysteme mit einer gewissen Unterstützung sind:

Android 11 und höher (kann auf einigen Android 9+ Geräten funktionieren)
Getestet auf einem Galaxy Tab A (8", 2019)
Windows 10 Pro und höher
Getestet auf einem Microsoft Surface Pro (5. Generation)
iOS: Getestet auf Version 15.1
Laut Apple Support wird das HID-Profil auf "iPhone 5s und später, iPad Air und später sowie iPod touch (6. Generation) und später" unterstützt.
Getestet auf einem iPhone 11 Pro
macOS: Getestet auf Version 11.4 (Big Sur)
Getestet auf einem M1 Air, sollte aber auf jedem Mac ab Baujahr 2014 funktionieren, der Big Sur oder höher verwendet.

Nicht alle Funktionen werden von jedem Betriebssystem unterstützt: <br />

| Service         | Windows  | macOS  | Android | iOS      |
|:---------------|:--------:|:------:|:--------:|:--------:|
| Keyboard       | X        | X      | X       | X         |
| Medien         | X        | X      | X       |           |
| Mouse          | X        | X      | X       | Hinweis 1 |
| Gamepad        | X        | X      | X       |           |
| Absolute Maus  | X        | X      |         | &nbsp;    |
Hinweis 1: iOS kann Maussteuerung unterstützen, wenn AssistiveTouch aktiviert ist.

Koppeln und Programmier-Eigenheiten

Sicherheit ist für drahtlose Human Interface Devices, wie Tastaturen, wichtig. Die Bluetooth-Kommunikation des Calliope mini durchläuft einen Prozess namens "Kopplung", um sicherzustellen, dass die ausgetauschten Daten sicher sind. Der Kopplungsprozess funktioniert wie folgt:

1. Programmieren des Calliope mini

Hier ist ein Beispielprogramm:

```blocks
input.onButtonPressed(Button.A, function () {
    keyboard.sendString("Hi Bluetooth HID!")
})
keyboard.startKeyboardService()
```
Beachte, dass ein Dienst per ```start``` gestartet wird.

2. Koppeln des Geräts mit dem Calliope mini

Öffne die Bluetooth-Einstellungen auf dem Gerät, mit dem du interagieren möchtest (Computer, Telefon oder Tablet),
wähle den Calliope mini, mit dem du dich verbinden möchtest (er wird etwas wie "Calliope mini [XXXXX]" genannt), und
dein Telefon/Computer/Tablet wird möglicherweise fragen, ob du "Koppeln" möchtest (einige Geräte, wie Macs und PCs, gehen davon aus, dass du "Koppeln" möchtest, weil du den Calliope mini ausgewählt hast).
Jedes Mal, wenn eine Kopplung stattfindet, wird ein neuer "Schlüssel" erstellt, um alle zukünftigen Kommunikationen zu verschlüsseln. Der Calliope mini und das andere Gerät speichern den Schlüssel, sodass sie in Zukunft sofort kommunizieren können, ohne diesen Kopplungsprozess erneut durchlaufen zu müssen. Wenn der Calliope mini jedoch neu programmiert wird, kann es sein, dass sein Schlüssel gelöscht wird!

Hier sind Beispiele für alle drei Schritte in den jeweiligen Betriebssystemen:

### iOS Kopplung
<video width="320" height="240" controls> <source src="https://user-images.githubusercontent.com/1421446/149055788-594206e2-3ec7-477f-8c7f-28380c855a23.mp4" type="video/mp4"> </video>
Der Calliope mini wird wahrscheinlich einen ähnlichen Namen haben wie "Calliope mini [XXXXX]", wobei "XXXXX" der eindeutige Name deines Calliope mini ist.

### macOS Kopplung
<video width="320" height="240" controls> <source src="https://user-images.githubusercontent.com/1421446/149054357-aed2a475-ddfb-4786-8f2d-72e843a1811f.mp4" type="video/mp4"> </video>
Der Calliope mini wird wahrscheinlich einen ähnlichen Namen haben wie "Calliope mini [XXXXX]", wobei "XXXXX" der eindeutige Name deines Calliope mini ist.

### Android Kopplung
<video width="320" height="240" controls> <source src="https://user-images.githubusercontent.com/1421446/149252209-67c847b2-aa58-4785-869f-91105304ef8f.mp4" type="video/mp4"> </video>
Der Calliope mini wird wahrscheinlich einen ähnlichen Namen haben wie "Calliope mini [XXXXX]", wobei "XXXXX" der eindeutige Name deines Calliope mini ist.

### Windows Kopplung
<video width="320" height="240" controls> <source src="https://user-images.githubusercontent.com/1421446/149252173-0dd6ebf0-fa2b-4070-8c2c-92288513195c.mp4" type="video/mp4"> </video>
Der Calliope mini wird wahrscheinlich einen ähnlichen Namen haben wie "Calliope mini [XXXXX]", wobei "XXXXX" der eindeutige Name deines Calliope mini ist.

Neu-Programmierung und Schlüssel

Das Neu-Programmieren des Calliope mini kann dazu führen, dass der Schlüssel des Calliope mini gelöscht wird, aber das andere Gerät (Computer, Telefon, Tablet usw.) hat weiterhin eine Kopie des Schlüssels. Das andere Gerät wird weiterhin versuchen, sich mit dem Calliope mini zu verbinden, aber dann wird es alle Befehle vom Calliope mini ignorieren, da der Calliope mini keinen gültigen Schlüssel hat. Um wieder kommunizieren zu können, müssen die Geräte erneut Schlüssel austauschen. Du musst das andere Gerät (Computer, Telefon, Tablet usw.) dazu bringen, den Schlüssel "zu vergessen" und dann den Kopplungsprozess erneut durchlaufen. Dies kannst du in den Bluetooth-Einstellungen durch das Entkoppeln (un-pair) tun.

Hier sind Beispiele für das Entkoppeln in den jeweiligen Betriebssystemen:

### iOS Entkoppeln
<video width="320" height="240" controls> <source src="https://user-images.githubusercontent.com/1421446/149056052-7e46139f-718e-443a-a550-fae258d8e9c2.mp4" type="video/mp4"> </video>
Der Calliope mini wird wahrscheinlich einen ähnlichen Namen haben wie "Calliope mini [XXXXX]", wobei "XXXXX" der eindeutige Name deines Calliope mini ist.

### macOS Entkoppeln
<video width="320" height="240" controls> <source src="https://user-images.githubusercontent.com/1421446/149055265-510663ac-4243-4d7d-a922-9b40f27a1d3a.mp4" type="video/mp4"> </video>
Der Calliope mini wird wahrscheinlich einen ähnlichen Namen haben wie "Calliope mini [XXXXX]", wobei "XXXXX" der eindeutige Name deines Calliope mini ist.

### Android Entkoppeln
<video width="320" height="240" controls> <source src="https://user-images.githubusercontent.com/1421446/149252273-4bd5c3ae-7389-4ef5-ac34-43e34076cbaf.mp4" type="video/mp4"> </video>
Der Calliope mini wird wahrscheinlich einen ähnlichen Namen haben wie "Calliope mini [XXXXX]", wobei "XXXXX" der eindeutige Name deines Calliope mini ist.

### Windows Entkoppeln
<video width="320" height="240" controls> <source src="https://user-images.githubusercontent.com/1421446/149252110-cc18c5ba-0cdd-4823-af8b-047f2a683a6d.mp4" type="video/mp4"> </video>

Video-Link zur Windows-Entkopplung

Der Calliope mini wird wahrscheinlich einen ähnlichen Namen haben wie "Calliope mini [XXXXX]", wobei "XXXXX" der eindeutige Name deines Calliope mini ist.

### ~hint
### Neu-Programmierung ohne erneutes Koppeln

Wenn du nur kleine Änderungen an einem gekoppelten Calliope mini vornimmst, kannst du ihn normalerweise neu programmieren, ohne den gespeicherten Schlüssel zu verlieren.

### ~
# Tastaturdienst #keyboard

### Starten des Tastaturdienstes #keyboard-startKeyboardService

```sig
keyboard.startKeyboardService()
```

Startet den Tastaturdienst. Dies muss im start-Block ausgeführt werden. Alle anderen Tastaturblöcke erfordern, dass der Dienst gestartet ist.

### ~hint
Anzeigen der iOS-Tastatur mit dem Tastaturdienst

Wenn der reguläre Tastaturdienst mit iOS verwendet wird, wird die Nutzung der Bildschirmtastatur deaktiviert. Du kannst sie wieder aktivieren, indem du einen eject mit dem Medien-Dienst sendest.

### ~
## Senden von Tastenanschlägen #keyboard-sendString

```sig
keyboard.sendString()
```

Sendet eine Sequenz von Zeichen nacheinander. Zum Beispiel ist [keyboard.sendString('Hallo Tastatur!')] gleichbedeutend mit dem Tippen der einzelnen Buchstaben nacheinander.

### Sondertasten #keyboard-keys

```sig
keyboard.keys()
```

Tasten, die nicht in Zeichenketten getippt werden können. Um z.B. das Drücken von "Enter" zu simulieren, sende ``enter``, wie in: ``[keyboard.sendString(keyboard.keys(keyboard._Key.enter))]``

Diese können mit getippten Zeichen kombiniert werden, indem sie zusammengefügt werden: ``[keyboard.sendString('Hallo Tastatur!'+keyboard.keys(keyboard._Key.enter))]``

## Modifikatortasten #keyboard-modifiers

```sig
keyboard.modifiers()
```

Modifikatortasten sind Tasten wie "Strg" oder "Alt", die Windows-Taste auf einem PC oder die Befehlstaste auf einem Mac. Modifikatoren ändern eine andere Taste und werden häufig für spezielle Befehle verwendet. Zum Beispiel wird das gleichzeitige Drücken von Strg und "S" oft zum Speichern von Dateien verwendet (Befehl und "S" auf Macs). Du kannst ein "Strg+S" senden, indem du den Strg-Modifikator zu "s" hinzufügst: [keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.control) + "s")]. Der Modifikator ändert das erste Zeichen, das nach dem "+" hinzugefügt wird. Zum Beispiel würde [keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.control) + "stop")] "Strg+s" senden und dann "t", "o" und schließlich "p".

Einige Befehle erfordern mehrere Modifikatoren, die ebenfalls zusammengefügt werden können. Alle Modifikatoren in einer Serie wirken sich auf das erste Nicht-Modifikator-Zeichen aus. Zum Beispiel kann das gleichzeitige Drücken von Strg und Alt und der Löschen-Taste folgendermaßen erfolgen: [keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.control) + keyboard.modifiers(keyboard._Modifier.alt) + keyboard.keys(keyboard._Key.delete))].

Es ist auch möglich, eine Sequenz von modifizierten Tasten zu senden. Auf Macs kopiert z.B. Befehl + "c" Objekte, und Befehl + "v" fügt kopierte Objekte ein. Ein Kopieren/Einfügen/Einfügen könnte durch folgende Zeile erfolgen:

[keyboard.sendString("" + keyboard.modifiers(keyboard._Modifier.apple) + "c" + keyboard.modifiers(keyboard._Modifier.apple) + "v" + keyboard.modifiers(keyboard._Modifier.apple) + "v") ].

## Senden mehrerer gleichzeitig gedrückter Tasten #keyboard-sendSimultaneousKeys

```sig
keyboard.sendSimultaneousKeys()
```

Dieser Befehl befindet sich im erweiterten Abschnitt „...mehr“ der Befehle. Er ermöglicht das gleichzeitige Senden von bis zu 6 Tasten. Dies ist wie das gleichzeitige Drücken mehrerer Tasten. Das "+" im Block kann erweitert werden, um zusätzliche Kontrolle darüber zu haben, wann Tasten losgelassen werden. Zum Beispiel möchtest du beim Spielen eines Videospiels möglicherweise die rechte Pfeiltaste gedrückt halten, um dich nach rechts zu bewegen: [keyboard.sendSimultaneousKeys(keyboard.keys(keyboard._Key.right), true)].

Irgendwann möchtest du vielleicht die Leertaste drücken, um zu springen, während du dich immer noch nach rechts bewegst: [keyboard.sendSimultaneousKeys("" + keyboard.keys(keyboard._Key.right) + " ", true)].

Schließlich möchtest du möglicherweise alle Tasten loslassen: ``[keyboard.releaseKeys()]``

Loslassen aller "gehaltenen" Tasten #keyboard-releaseKeys

```sig
keyboard.releaseKeys()
```
Lässt alle Tasten los, die durch [keyboard.sendSimultaneousKeys("...", true)] gehalten wurden.

## Rohe Scancodes für zusätzliche Tasten #keyboard-rawScanCode

```sig
keyboard.rawScancode()
```

HID-Tastaturen senden "Scancodes", die Tasten darstellen. Möglicherweise möchtest du Tasten senden, die hier nicht abgedeckt sind, wie die Funktionstasten (F1 usw.). Du kannst dies tun, indem du den Scancode für die Taste sendest. Unterstützte Scancodes findest du ab Seite 83 in den "HID Usage Tables for Universal Serial Bus (USB) v 1.21". Wenn du beispielsweise die Taste F1 im Handbuch nachschlägst, findest du den Scancode 112 (in der AT-101-Spalte der Tabelle). Um eine F1-Taste zu senden: ``keyboard.sendString(keyboard.rawScancode(112))]``

## Steuern der Übertragungsrate #keyboard-setEventsPerSecond

```sig
keyboard.setEventsPerSecond()
```

Legt die Anzahl der Tasten fest, die pro Sekunde gesendet werden können. Das Maximum beträgt 33 und das minimum 5. Der Standardwert ist 28.

## Erkennung, ob die Nutzung des Tastaturdienstes geändert wurde #keyboard-setStatusChangeHandler

```sig
keyboard.setStatusChangeHandler()
```
Das Gerät, das den Dienst nutzt, muss den Dienst "abonnieren". Dieser Ereignishandler zeigt an, dass sich der Status des Abonnements geändert hat (entweder hat das andere Gerät abonniert oder das Abonnement aufgehoben). Dies ist ein Indikator dafür, dass das Gerät "zuhört". Einige Betriebssysteme, wie Android, abonnieren jeden Dienst, unabhängig davon, ob sie ihn nutzen oder nicht.

## Erkennung, ob der Tastaturdienst möglicherweise in Verwendung ist #keyboard-isEnabled

```sig
keyboard.isEnabled()
```

true zeigt an, dass das Gerät derzeit für den Dienst abonniert ist. false zeigt an, dass das Gerät nicht derzeit abonniert ist. Dies kann bedeuten, dass das andere Gerät ausgeschaltet oder außerhalb der Reichweite ist.

# Medien-Dienst #media #media-keys

## Starten des Medien-Dienstes #media-startMediaService

```sig
media.startMediaService()
```

Startet den Medien-Dienst. Dies muss im start-Block ausgeführt werden. Alle anderen Medien-Blöcke erfordern, dass der Dienst gestartet ist.

## Spezifische Medientasten

```sig
media.keys(media._MediaKey.next)
```

Wähle eine spezifische Medientaste zum Senden. Es können nur die aufgeführten Tasten gesendet werden.

## Senden einer Medientaste #media-sendCode

```sig
media.sendCode()
```
Sendet eine Medientaste. Zum Beispiel, um "Play/Pause" zu senden: ``[media.sendCode(media.keys(media._MediaKey.playPause))]``

## ~hint
#### Anzeigen der iOS-Tastatur mit dem Tastaturdienst

Wenn der reguläre Tastaturdienst mit iOS verwendet wird, wird die Nutzung der Bildschirmtastatur deaktiviert. Du kannst sie wieder aktivieren, indem du einen Eject sendest: ``[media.sendCode(media.keys(media._MediaKey.eject))]``

### ~
## Erkennung, ob die Nutzung des Medien-Dienstes geändert wurde #media-setStatusChangeHandler

```sig
media.setStatusChangeHandler()
```

# Der Ereignishandler zeigt an, ob sich der Status der Nutzung des Medien-Dienstes geändert hat.

Das Gerät, das den Dienst nutzt, muss den Dienst "abonnieren". Dieser Ereignishandler zeigt an, dass sich der Status des Abonnements geändert hat (entweder hat das andere Gerät abonniert oder das Abonnement aufgehoben). Dies ist ein Indikator dafür, dass das Gerät "zuhört". Es ist jedoch nicht perfekt. Einige Betriebssysteme, wie Android, abonnieren jeden Dienst, unabhängig davon, ob sie ihn nutzen oder nicht.

## Erkennung, ob der Medien-Dienst möglicherweise in Verwendung ist #media-isEnabled


```sig
media.isEnabled()
```

true zeigt an, dass das Gerät derzeit für den Dienst abonniert ist. false zeigt an, dass das Gerät nicht derzeit abonniert ist. Dies kann bedeuten, dass das andere Gerät ausgeschaltet oder außerhalb der Reichweite ist.

## Maus-Dienst #mouse

Starten des Maus-Dienstes #mouse-startMouseService

```sig
mouse.startMouseService()
```

Startet den Maus-Dienst. Dies muss im start-Block ausgeführt werden. Alle anderen Maus-Blöcke erfordern, dass der Dienst gestartet ist.

```sig
mouse.movexy()
```

Bewegt die Maus um die angegebenen Werte in x- (horizontal) und y- (vertikal) Richtung. x kann von -127 bis 127 reichen. y kann von -127 bis 127 reichen.

```sig
mouse.click()
```

Klickt auf die linke Maustaste.

```sig
mouse.middleClick()
```

Klickt auf die mittlere Maustaste.

```sig
mouse.rightClick()
```

Klickt auf die rechte Maustaste.

```sig
mouse.scroll()
```

Scrollt das Scrollrad um die angegebene Anzahl von "Klicks". Die Klicks können von -127 bis 127 reichen.

```sig
mouse.send()
```

Sendet alle Mausaktionen gleichzeitig. x ist die horizontale Verschiebung (-127 bis 127), y ist die vertikale Verschiebung (-127 bis 127), left gibt an, ob die linke Maustaste gedrückt ist, middle gibt an, ob die mittlere Maustaste gedrückt ist, right gibt an, ob die rechte Maustaste gedrückt ist, scroll ist der Scroll-Wert (-127 bis 127), und hold gibt an, ob die Tasten "gehalten" werden sollen, bis der nächste Maus-Befehl kommt (wenn false, werden die Tasten "geklickt").

Erkennung, ob die Nutzung des Maus-Dienstes geändert wurde #mouse-setStatusChangeHandler

```sig
mouse.setStatusChangeHandler()
```

Das Gerät, das den Dienst nutzt, muss den Dienst "abonnieren". Dieser Ereignishandler zeigt an, dass sich der Status des Abonnements geändert hat (entweder hat das andere Gerät abonniert oder das Abonnement aufgehoben). Dies ist ein Indikator dafür, dass das Gerät "zuhört". Es ist jedoch nicht perfekt. Einige Betriebssysteme, wie Android, abonnieren jeden Dienst, unabhängig davon, ob sie ihn nutzen oder nicht.

Erkennung, ob der Maus-Dienst möglicherweise in Verwendung ist #mouse-isEnabled

```sig
mouse.isEnabled()
```

true zeigt an, dass das Gerät derzeit für den Dienst abonniert ist. false zeigt an, dass das Gerät nicht derzeit abonniert ist. Dies kann bedeuten, dass das andere Gerät ausgeschaltet oder außerhalb der Reichweite ist.

### ~hint
## iOS AssistiveTouch #assistivetouch

Eine Maus kann in iOS verwendet werden, wenn die AssistiveTouch-Funktion aktiviert ist. Weitere Details finden sich hier.

### ~
## Absoluter Maus-Dienst #absolute-mouse

Der Absolute Maus-Dienst funktioniert derzeit nur unter macOS und Windows. Interaktionen zwischen dem absoluten Maus-Dienst und dem Maus-Dienst sind möglicherweise nicht eindeutig definiert.

Starten des absoluten Maus-Dienstes #absmouse-startAbsoluteMouseService

```sig
absmouse.startAbsoluteMouseService()
```

Startet den absoluten Maus-Dienst. Dies muss im start-Block ausgeführt werden. Alle anderen Blöcke des absoluten Maus-Dienstes erfordern, dass der Dienst gestartet ist.

```sig
absmouse.movexy()
```

Bewegt den Mauszeiger an eine spezifische Position. x reicht von -32767 bis 32767. -32767 repräsentiert die linke Seite des Bildschirms und 32767 die rechte Seite. y reicht von -32767 bis 32767. -32767 repräsentiert die Oberseite des Bildschirms und 32767 die Unterseite. (0,0) ist das Zentrum des Bildschirms.

### ~hint
## Bildschirmkoordinaten und Zuordnung

Du kannst:

Die Auflösung deines Bildschirms ermitteln (z.B. 2560x1600)
Die Entfernung zu einem Objekt messen, das du anklicken möchtest, sowie die gesamte Bildschirmbreite und -höhe
Die Koordinaten des Objekts auf dem Bildschirm schätzen
Den map-Block (``[y=Math.map(0,0,0,0,0)]``) verwenden, um von Bildschirmkoordinaten zu absoluten Mauskoordinaten zu konvertieren
Zum Beispiel, wenn:

Der Bildschirm 28 cm breit ist und eine horizontale Auflösung von 2560 Pixeln hat
Das Objekt, das du anklicken möchtest, 6 cm vom linken Rand entfernt ist
Dann ist die x-Koordinate ungefähr: 6 cm / 28 cm * 2560 Pixel = 548 Pixel.

Die absolute y-Koordinate kann berechnet werden durch: [y=Math.map(548,0,2560,-32767,32767)].

### ~
```sig
absmouse.click()
```

Klickt auf die linke Maustaste.

```sig
absmouse.middleClick()
```

Klickt auf die mittlere Maustaste.

```sig
absmouse.rightClick()
```

Klickt auf die rechte Maustaste.

```sig
absmouse.send()
```

Sendet alle Aktionen des absoluten Maus-Dienstes gleichzeitig. x: Zahl, y: Zahl, left: boolesch, middle: boolesch, right: boolesch, hold: boolesch): void;

x ist die horizontale Position der Maus (-32767 bis 32767), y ist die vertikale Position der Maus (-32767 bis 327679), left gibt an, ob die linke Maustaste gedrückt ist, middle gibt an, ob die mittlere Maustaste gedrückt ist, right gibt an, ob die rechte Maustaste gedrückt ist, und hold gibt an, ob die Tasten "gehalten" werden sollen, bis der nächste Maus-Befehl kommt (wenn false, werden die Tasten "geklickt").

Erkennung, ob die Nutzung des absoluten Maus-Dienstes geändert wurde #absmouse-setStatusChangeHandler

```sig
absmouse.setStatusChangeHandler()
```

Das Gerät, das den Dienst nutzt, muss den Dienst "abonnieren". Dieser Ereignishandler zeigt an, dass sich der Status des Abonnements geändert hat (entweder hat das andere Gerät abonniert oder das Abonnement aufgehoben). Dies ist ein Indikator dafür, dass das Gerät "zuhört". Es ist jedoch nicht perfekt. Einige Betriebssysteme, wie Android, abonnieren jeden Dienst, unabhängig davon, ob sie ihn nutzen oder nicht.

Erkennung, ob der absolute Maus-Dienst möglicherweise in Verwendung ist #absmouse-isEnabled

```sig
absmouse.isEnabled()
```

true zeigt an, dass das Gerät derzeit für den Dienst abonniert ist. false zeigt an, dass das Gerät nicht derzeit abonniert ist. Dies kann bedeuten, dass das andere Gerät ausgeschaltet oder außerhalb der Reichweite ist.

## Gamepad-Dienst #gamepad

# Starten des Gamepad-Dienstes #gamepad-startGamepadService

```sig
gamepad.startGamepadService()
```

Startet den Gamepad-Dienst. Dies muss im start-Block ausgeführt werden. Alle anderen Gamepad-Blöcke erfordern, dass der Dienst gestartet ist.

Steuerkreuz-Tasten (D-Pad) #gamepad-_dpad

```sig
gamepad._dpad(GameDirection.noDirection)
```

Ein Richtungswert für das Steuerkreuz.

Tasten #gamepad-_buttons

```sig
gamepad._buttons()
```

Ein Wert, der angibt, ob eine bestimmte Taste gedrückt ist oder nicht.

Senden eines Gamepad-Befehls #gamepad-send

```sig
gamepad.send()
```

Sendet alle Gamepad-Aktionen gleichzeitig. buttons ist eine Menge von Tasten und deren aktuellem Status, x ist die horizontale Verschiebung (-127 bis 127), y ist die vertikale Verschiebung (-127 bis 127), dpad ist der Wert des Steuerkreuzes, z ist die Verschiebung entlang der z-Achse (-127 bis 127), rx ist die Drehung um die x-Achse.

Erkennung, ob die Nutzung des Gamepad-Dienstes geändert wurde #gamepad-setStatusChangeHandler

```sig
gamepad.setStatusChangeHandler()
```

Das Gerät, das den Dienst nutzt, muss den Dienst "abonnieren". Dieser Ereignishandler zeigt an, dass sich der Status des Abonnements geändert hat (entweder hat das andere Gerät abonniert oder das Abonnement aufgehoben). Dies ist ein Indikator dafür, dass das Gerät "zuhört". Es ist jedoch nicht perfekt. Einige Betriebssysteme, wie Android, abonnieren jeden Dienst, unabhängig davon, ob sie ihn nutzen oder nicht.

Erkennung, ob der Gamepad-Dienst möglicherweise in Verwendung ist #gamepad-isEnabled

```sig
gamepad.isEnabled()
```

true zeigt an, dass das Gerät derzeit für den Dienst abonniert ist. false zeigt an, dass das Gerät nicht derzeit abonniert ist. Dies kann bedeuten, dass das andere Gerät ausgeschaltet oder außerhalb der Reichweite ist.

### Weitere Ideen und Herausforderungen

## Hier sind einige Beispiele: https://youtu.be/n4J5GN72N_4

Erstelle eine Maus mit dem Beschleunigungssensor
Erstelle ein Gamepad mit dem Beschleunigungssensor
Nutze die Tastaturunterstützung, um eine Präsentation (Google Slides, PowerPoint, Keynote, usw.) zu steuern
Verwende den Calliope mini, um Bilder aufzunehmen und Aufnahmen auf deinem Telefon/Tablet zu starten/stoppen. Hinweis: Die Kamera-App der meisten mobilen Geräte nimmt ein Bild auf, wenn eine Lautstärketaste gedrückt wird.
Erstelle eine Fernbedienung zum Abspielen/Pausieren von Musik und/oder zur Lautstärkeregelung.
Automatisiere repetitive Computeraufgaben.
Tipps

## iOS Bildschirm-Tastatur

Nutze die Media-Auswurftaste, um die Tastatur zu verwenden, während der Tastatur-Dienst aktiv ist.

## Windows

Möglicherweise benötigst du eine Anwendung, um die von dieser Erweiterung bereitgestellten GamePad-Steuerungen an ein bestimmtes Spiel anzupassen.

## macOS

Möglicherweise benötigst du eine Anwendung, um die von dieser Erweiterung bereitgestellten GamePad-Steuerungen an ein bestimmtes Spiel anzupassen. Anwendungen wie Joystick Monitor können helfen zu testen, ob/wie das GamePad erkannt wird.

## iOS

Unterstützt keine Maus oder Gamepad, es sei denn, AssistiveTouch ist aktiviert.
Unterstützt das Medien-"Stoppen" nicht.
Unterstützt keine Absolute Mouse.

## Android

Unterstützt keine Absolute Mouse.
Verschiedene Links & Referenzen



## Supported targets
for PXT/microbit
for PXT/calliopemini

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

