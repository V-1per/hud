# Drive HUD

> [!WARNING]
> **This app is still in development.** It probably has bugs and things that are awkward to use. Please [report problems and suggest improvements](https://github.com/V-1per/hud/issues/new/choose): every report helps.

A head-up display for any car: the phone lies on the dashboard and its screen reflects on the windscreen. Navigation works offline, with its own maps and routing (OpenStreetMap data), in English, Portuguese, Spanish, French, German or Italian.

This repository only holds the **files and versions** of the app. The source code is private.

## Downloads

- **Android app**: the `HUD.apk` file of the [latest release](https://github.com/V-1per/hud/releases/latest). It is not on the Play Store yet: see [Installing on Android](#installing-on-android), including what to do if Play Protect or the phone blocks it.
- **Try it in the browser**: [v-1per.github.io/hud](https://v-1per.github.io/hud/) opens the app online, with the maps of Portugal and a simulated drive (no install).
- **PC (Windows, developer version)**: `Drive-HUD-PC-DEV-2.2.5.4.zip` in the [latest release](https://github.com/V-1per/hud/releases/latest). Unzip it and run `Drive HUD.exe`. It includes trip simulation.
- **Map packs**: release [`maps`](https://github.com/V-1per/hud/releases/tag/maps). The app downloads them itself the first time it opens: you choose the countries. Available now (with cemeteries, lakes, bays, capes and nature reserves since November 2026): Portugal (mainland 26 MB, Azores, Madeira), Spain (mainland 85 MB, Balearic and Canary Islands), Andorra, and Italy in 5 regions (North-west, North-east, Centre, South, Islands; 17–35 MB each).

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

| Version | Name | In short | |
|---|---|---|---|
| **2.2.5.4** | Clean Slate | Saved HUD colours can be deleted. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](https://github.com/V-1per/hud/releases/tag/v2.2.5.4) |
| 2.2.5.3 | Smooth Glide | The planning map drags and zooms smoothly. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#2253--smooth-glide) |
| 2.2.5.2 | Name Tag | The version shown while the app opens and at the bottom of Settings. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#2252--name-tag) |
| 2.2.5.1 | True Colours | Colours that keep each style's shades, text colour, saved colours, HEX codes; text size for text only. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#2251--true-colours) |
| 2.2.5 | Make It Yours | HUD customiser: live preview and a colour wheel; a cleaner screen while driving. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#225--make-it-yours) |
| 2.2.4 | Long Live the HUD! | Longer battery: automatic brightness and lighter drawing. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#224--long-live-the-hud) |
| 2.2.3 | Second Opinion | Call fixes for Android 15; capes and landmarks first in search. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#223--second-opinion) |
| 2.2.2 | Back on Track | Smarter rerouting, no more false "Recalculating". | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#222--back-on-track) |
| 2.2.1 | Pick Up! | The HUD comes back as soon as you answer; call timer. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#221--pick-up) |
| 2.2 | Ring Ring | Calls and messages fixed; PC version and online preview. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#22--ring-ring) |
| 2.1 | Fine Tuning | Faster rerouting, lighter maps, calls on the HUD. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#21--fine-tuning) |
| 2.0 | Pick Your World | Choose the countries you want; routes across borders. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#20--pick-your-world) |
| 1.16 | Easy Does It | Easier to use: place cards, "Where to?" bar. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#116--easy-does-it) |
| 1.15 | Learns Your Way | Arrival times that learn from you; saving mode. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#115--learns-your-way) |
| 1.14 | Pit Stop | Up to 3 stops; search along the route. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#114--pit-stop) |
| 1.13 | Other Ways | House numbers and post codes; alternative routes. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#113--other-ways) |
| 1.12 | Take the Exit | Exit signs, lane guidance, tunnels. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#112--take-the-exit) |
| 1.11 | Less Is More | Four weaker HUD styles removed. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#111--less-is-more) |
| 1.10 | Race Day | Two more HUD styles. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#110--race-day) |
| 1.9 | Turn It Up | Music and visualizer on the HUD. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#19--turn-it-up) |
| 1.8 | Game On | Video game HUD styles. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#18--game-on) |
| 1.7 | New Look | New Modern HUD layout; two retro styles. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#17--new-look) |
| 1.6 | Like a Map App | Search bar, quick filters, map types. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#16--like-a-map-app) |
| 1.5 | Drive HUD | New look and name: Drive HUD. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#15--drive-hud) |
| 1.4 | More to Find | Sea, rivers and parks; much better search. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#14--more-to-find) |
| 1.3 | First Drive | Fixes after the first test drive. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#13--first-drive) |
| 1.2 | Signal Lost | "No GPS" warning; mini-map zoom. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#12--signal-lost) |
| 1.1 | Know the Limits | Speed limits, cameras, avoid tolls. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#11--know-the-limits) |
| 1.0 | Hello, Road | First version: offline Portugal, own routing, the HUD. | [![Know more…](https://img.shields.io/badge/Know%20more%E2%80%A6-2f81f7?style=flat-square)](CHANGELOG.md#10--hello-road) |

## Credits

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, available under the Open Database License (ODbL). Sea from the [osmdata.openstreetmap.de](https://osmdata.openstreetmap.de) water polygons (ODbL). Flags from [flag-icons](https://github.com/lipis/flag-icons) (MIT).

The app itself is © its author, all rights reserved.
