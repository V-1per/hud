# Drive HUD

> [!WARNING]
> **This app is still in development.** It probably has bugs and things that are awkward to use. Please [report problems and suggest improvements](https://github.com/V-1per/hud/issues/new/choose): every report helps.

A head-up display for any car: the phone lies on the dashboard and its screen reflects on the windscreen. Navigation works offline, with its own maps and routing (OpenStreetMap data), in English or Portuguese.

This repository only holds the **files and versions** of the app. The source code is private.

## Downloads

- **Android app**: the `HUD.apk` file of the [latest release](https://github.com/V-1per/hud/releases/latest). Open it on the phone and allow installing from that source (it is not on the Play Store yet).
- **Map packs**: release [`maps`](https://github.com/V-1per/hud/releases/tag/maps). The app downloads them itself the first time it opens: you choose the countries. Available now: mainland Portugal (26 MB), mainland Spain (85 MB) and Italy (115 MB).

## Problems and suggestions

Open an [issue](https://github.com/V-1per/hud/issues/new/choose) (a free GitHub account is needed): "Report a problem" for something that goes wrong, "Suggest an improvement" for ideas. The app has the same link in **Settings → Problems and suggestions**. Say which phone (or PC) you use and the app version (also in Settings).

## Versions

| Version | What it added or improved over the previous one |
|---|---|
| **2.0** | First big update. No map inside the app (APK from ~30 MB to 5 MB): a first-run wizard asks the language (English or Portuguese, with flags) and the countries (search, "Select all", "Only Europe"), and downloads their maps. Routes across borders (Lisbon → Madrid). Speed-limit estimates follow each country's rules. Settings → Language and Settings → Maps (switch on/off, delete, add countries). "My location" button on the map. "In development" notice and a link to report problems. Voice guidance removed. |
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
