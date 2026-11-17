# Drive HUD

> [!WARNING]
> **This app is still in development.** It probably has bugs and things that are awkward to use. Please [report problems and suggest improvements](https://github.com/V-1per/hud/issues/new/choose): every report helps.

A head-up display for any car: the phone lies on the dashboard and its screen reflects on the windscreen. Navigation works offline, with its own maps and routing (OpenStreetMap data), in English, Portuguese, Spanish, French, German or Italian.

This repository only holds the **files and versions** of the app. The source code is private.

## Downloads

- **Android app**: the `HUD.apk` file of the [latest release](https://github.com/V-1per/hud/releases/latest). It is not on the Play Store yet: see [Installing on Android](#installing-on-android), including what to do if Play Protect or the phone blocks it.
- **Map packs**: release [`maps`](https://github.com/V-1per/hud/releases/tag/maps). The app downloads them itself the first time it opens: you choose the countries. Available now: Portugal (mainland 26 MB, Azores, Madeira), Spain (mainland 85 MB, Balearic and Canary Islands), Andorra, and Italy in 5 regions (North-west, North-east, Centre, South, Islands; 17–35 MB each).

## Installing on Android

The app is not on the Play Store yet, so Android shows some warnings the first time. This is normal for any app installed from outside the store. Download the APK **only from this page**.

1. On the phone, open the [latest release](https://github.com/V-1per/hud/releases/latest) and tap `HUD.apk`. If the browser says the file "might be harmful", tap **Download anyway**.
2. Open the downloaded file. If Android says installing from this source is not allowed, tap **Settings**, switch on **Allow from this source**, and go back.
3. Tap **Install**.

Installing over an older version keeps your saved places and trips.

### If Google Play Protect blocks it

Play Protect blocks apps it does not know yet ("Blocked by Play Protect" or "Unsafe app blocked").

1. On the warning, tap **More details** (sometimes a small arrow).
2. Tap **Install anyway**.

If there is no "Install anyway" option:

1. Open the **Play Store**, tap your profile picture (top right) and then **Play Protect**.
2. Tap the gear icon and switch off **Scan apps with Play Protect**.
3. Install `HUD.apk`.
4. **Switch Play Protect back on** straight after.

### If the phone's own blocker stops the installation

Some phones have their own installation blocker that stops every app from outside the store, even before Play Protect. On Samsung (One UI 6 or newer) it is called **Auto Blocker**, and the message says the installation was blocked by Auto Blocker.

1. Open **Settings → Security and privacy → Auto Blocker**.
2. Switch it **off**.
3. Install `HUD.apk`.
4. **Switch Auto Blocker back on** straight after. The app keeps working with it on.

Other brands have similar options, usually under Settings → Security (for example a "security scan" before installing): allow the installation, then switch the protection back on.

### Other messages

- **"App not installed"**: check that the phone has free space. If you installed a copy of the app that you got from someone else, uninstall it first.
- Still stuck? [Open an issue](https://github.com/V-1per/hud/issues/new/choose) with the exact message (a screenshot helps) and the phone model.

## Problems and suggestions

Open an [issue](https://github.com/V-1per/hud/issues/new/choose) (a free GitHub account is needed): "Report a problem" for something that goes wrong, "Suggest an improvement" for ideas. The app has the same link in **Settings → Problems and suggestions**. Say which phone (or PC) you use and the app version (also in Settings).

## Versions

| Version | What it added or improved over the previous one |
|---|---|
| **2.1** | Much faster rerouting (back on the route at once, a better way searched in the background); about 35–40 % less memory per map; search by acronym ("CML") and by place + area, paste a map link or coordinates; calls and messages on the HUD in a small card in the look of each style (who is calling, WhatsApp/SMS messages, only while driving); a call sound per style that replaces the ringtone during a trip; red LED numbers in blue; the 80s road bends like the real one; faint roads around on the HUD maps; the Colour button and the glow work in every style. |
| 2.0 | First big update. No map inside the app (APK from ~30 MB to 5 MB): a first-run wizard asks the language (English, Portuguese, Spanish, French, German or Italian, with flags) and the countries (search, "Select all", "Only Europe"; big countries split into regions), and downloads their maps. Routes across borders and regions (Lisbon → Madrid, Milan → Rome). Open Google Maps / WhatsApp location links with the app, and share places. Speed-limit estimates follow each country's rules. Settings in categories, with Language and Maps (switch on/off, delete, add countries). "My location" button. "In development" notice and a link to report problems. Safe start if the phone runs out of memory loading maps. Voice guidance removed. |
| 1.16 | Easier to use: tapping the map shows a place card ("Go here", "Save") instead of changing the route; "Where to?" search bar with Home, Work and recent places; saved places are edited only in "Edit" mode, with "Undo" after deleting; ending a trip needs a long press; first-use tips that highlight the button they talk about. |
| 1.15 | Arrival times that learn from how you drive; battery/heat saving mode (on by itself below 20 %); export and import your data between PC and phone. |
| 1.14 | Up to 3 stops on the way; quick filters search along the route (e.g. petrol stations) and add a result as a stop. |
| 1.13 | Search by house number ("Rua do Brasil 93") and post code; up to two alternative routes, with the extra time and "via …". |
| 1.12 | Motorway exit signs ("Exit 9 · EN 6-8 · Estoril") and lane guidance; estimated speed limit where the map has none; in tunnels the HUD keeps moving at your last speed. |
| 1.11 | Removed four HUD styles that did not work well. |
| 1.10 | Two more HUD styles (classic racing simulator, TV broadcast graphics). |
| 1.9 | Music on the HUD: song name and an audio visualiser in the retro styles; fixes to the retro styles. |
| 1.8 | HUD styles inspired by video games (round mini-map "open world" and others). |
| 1.7 | New layout of the Modern HUD (route map on the left, big arrow in the middle, speed on the right); two new retro styles. |
| 1.6 | Search bar and quick filters like a normal map app; map types (default, simplified, night, satellite, terrain); HUD styles in Settings. |
| 1.5 | New look and name "Drive HUD": start screen, map-only home with round buttons, saved places, timeline of trips, profile, Home / Work. |
| 1.4 | Sea, rivers, lakes and parks on the map; much better search; 36 000 more places. |
| 1.3 | After the first test drive: GPS updates every second, rerouting in ~2 s, light planning map, smoother mini-map, incoming-call icon on the HUD. |
| 1.2 | "No GPS signal" warning; mini-map zooms out with speed; list of all turns. |
| 1.1 | Speed limit and speeding warning, speed cameras, avoid tolls, Home and Work, recent destinations, progress bar to the next turn. |
| 1.0 | First version: offline map of mainland Portugal, own routing and the HUD with the next turn, for Android and PC. |

## Credits

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, available under the Open Database License (ODbL). Sea from the [osmdata.openstreetmap.de](https://osmdata.openstreetmap.de) water polygons (ODbL). Flags from [flag-icons](https://github.com/lipis/flag-icons) (MIT).

The app itself is © its author, all rights reserved.
