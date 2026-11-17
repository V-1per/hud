# Drive HUD: earlier versions

What each earlier version added, newest first. Only the [latest version](https://github.com/V-1per/hud/releases/latest) can be downloaded, and it includes everything below.

---

## 2.2.3 · Second Opinion
**In short:** Call fixes for Android 15; capes and landmarks first in search.

- Android 15: the HUD now comes back to the front when you answer a call. Android 15 had been blocking this.
- "Do not disturb" goes back to exactly how you had it after the trip, also on Android 15 and also when the app is closed.
- The caller's name on the HUD is no longer left over from an earlier WhatsApp call or missed call.
- Other apps' pop-ups are hidden only on real trips, not in the simulation.
- Search: capes, peaks, bays, nature reserves and viewpoints come first ("cabo da roca" finds the cape), and the same place mapped several times shows once.

## 2.2.2 · Back on Track
**In short:** Smarter rerouting, no more false "Recalculating".

- **No more false "Recalculating":** when the route comes back close to itself (out along one road and back along the road next to it, loops, the other carriageway), GPS drift could make the HUD think you were on the way back, facing the wrong way, and recalculate. In tests on the map of Lisbon this happened on about 1 in 3 routes; now on almost none.
- **Wrong turns noticed sooner:** turning onto a road close to the route (a slip road, a parallel street) used to be noticed only up to ~500 m later. The HUD now looks at which road you are on, so it notices after about 50 m, and in 9 out of 10 cases within ~120 m.
- **One new route, from where you are:** the new route starts on the road you are driving, not on a road next to it, and does not begin by sending you back the way you came. In the tests, nearly every wrong turn now needs one new route instead of several.

## 2.2.1 · Pick Up!
**In short:** The HUD comes back as soon as you answer; call timer.

- When you answer a call (on the phone, the car radio or the HUD card), the HUD comes back almost at once and the card plays a short "answered" animation.
- During a call, the music visualizer shows how long the call has lasted. Android does not let any app hear the call itself.

## 2.2 · Ring Ring
**In short:** Calls and messages fixed; PC version and online preview.

- Calls and messages work again after an update. Android quietly disconnected notification access after an update, so the HUD showed "Unknown number" and no messages. The app now reconnects it by itself.
- Answering from the car radio: the HUD comes back to the front a second later, and again when the call ends. Tap the call card to answer or hang up.
- Pop-ups from other apps (WhatsApp, etc.) are hidden during a trip. Messages show only on the HUD card, and calls ring as usual. This uses "Do not disturb", which goes back to how it was at the end of the trip.
- Music title and visualizer work again after a call.
- Settings → Music has a new "During a trip" section that lists the permissions still missing. The HUD also warns at the start of a trip if one is missing.

## 2.1 · Fine Tuning
**In short:** Faster rerouting, lighter maps, calls on the HUD.

- Much faster rerouting: after leaving the route the app gets back to it in hundredths of a second, then looks for a better way in the background without freezing the HUD.
- About 35–40 % less memory per map (Spain: from ~1.3 GB to ~750 MB).
- Search: acronyms ("CML"), place + area ("CML campo grande"), and paste a Google Maps link or coordinates in the search bar.
- Calls and messages on the HUD in a small card in the look of each style: who is calling and incoming messages (WhatsApp, SMS…), only while driving. Long messages slide along; no messages during a call. Needs notification access (Settings → Music).
- A call sound for each HUD style (Settings → Look → Call sound): the style's own tone or a file of yours. During a trip it replaces the phone's ringtone, which comes back at the end.
- Red LED style: all numbers in blue. 80s road style: the road in the middle bends like the real one.
- HUD maps show the roads around, faint. The Colour button works in every style; the glow uses the colours of each part.
- Smoother first-use tips, the list of maps no longer freezes the screen, and other small fixes.

## 2.0 · Pick Your World
**In short:** Choose the countries you want; routes across borders.

- No map inside the app: a first-run wizard asks the language (English, Portuguese, Spanish, French, German, Italian) and the countries, then downloads their maps (Portugal, Spain, Andorra, Italy in 5 regions).
- Routes across borders and regions (Lisbon → Madrid, Milan → Rome).
- Open Google Maps / WhatsApp location links with the app; share places.
- Easier to use (1.16): place card when tapping the map, "Where to?", edit mode and Undo for saved places, long press to end a trip, first-use tips.
- Settings in categories; "My location" button; speed-limit estimates per country.
- Voice guidance removed.

## 1.16 · Easy Does It
**In short:** easier to use.

- Tapping the map shows a place card ("Go here", "Save") instead of changing the route.
- A "Where to?" search bar with Home, Work and recent places.
- Saved places can only be changed in "Edit" mode, and "Undo" brings back a place you deleted.
- Ending a trip needs a long press, so it can't be ended by accident.
- First-use tips that point at the button they talk about.

## 1.15 · Learns Your Way
**In short:** arrival times that learn from you, and a saving mode.

- Arrival times learn from how you drive.
- Battery and heat saving mode: animations at about 15 frames a second and 80 % brightness on Android. It turns on by itself below 20 % battery when the phone isn't charging.
- "Your data": export places, profile, trips, settings and learned times to a file, and import it on another device (PC ↔ phone).

## 1.14 · Pit Stop
**In short:** stops on the way, and search along the route.

- Up to 3 stops between the start and the destination. Each stop has its own "You have reached the stop" step, and rerouting keeps the stops you haven't reached yet.
- With a route, the quick filters (petrol stations, for example) search along it, within 1 km and in the order you pass them. Any result can be added as a stop in the right place.

## 1.13 · Other Ways
**In short:** house numbers, post codes and alternative routes.

- Search by house number ("Rua do Brasil 93") and by post code.
- Up to two alternative routes next to the fastest one, with the extra time and "via …". Tap one to choose it. Lisbon–Porto, for example: A1, A8 and A13/A23.

## 1.12 · Take the Exit
**In short:** motorway exit signs and lane guidance.

- Motorway exit signs ("Exit 9 · EN 6-8 · Estoril") under the big arrow, in the retro styles and in the list of turns.
- Lane guidance: which lanes lead to your exit.
- Leaving a motorway or dual carriageway by a slip road is always announced, even where the road splits gently.
- An estimated speed limit where the map has none.
- In tunnels (no GPS) the HUD keeps moving at your last speed.

## 1.11 · Less Is More
**In short:** four weaker HUD styles removed.

- Removed the Arcade neon, Telemetry, Classic simulator and TV broadcast styles after trying them. If one of them was chosen, the app goes back to the Modern style.

## 1.10 · Race Day
**In short:** two more HUD styles.

- Classic simulator: the look of a late-1990s racing simulator, with a round dial and needle, a red zone from the road's speed limit and a trip progress bar.
- TV broadcast: modern TV race graphics, with dark glass panels, red accents, a speed bar and a progress line.

## 1.9 · Turn It Up
**In short:** music and an audio visualizer on the HUD.

- The song playing and an audio visualizer in the retro styles (Windows media controls on the PC; the phone's music player on Android).
- Retro VFD: visualizer in the centre and route map on the right.
- Arc: a bigger arc and the song name in the display.
- 80s road: new layout with the song, arrival time and distance left.
- The retro styles never grow past the edge of the screen.

## 1.8 · Game On
**In short:** HUD styles inspired by video games.

- Open world: a round route map with the destination as a waypoint and the next step shown as an objective.
- Arcade neon and Telemetry, later removed in 1.11.

## 1.7 · New Look
**In short:** a new Modern HUD and two retro styles.

- New layout of the Modern HUD: route map on the left, big arrow in the middle, speed on the right.
- Two new retro styles.

## 1.6 · Like a Map App
**In short:** search bar, quick filters and map types.

- A search bar and quick filters like a normal map app.
- Map types: default, simplified, night, satellite and terrain.
- HUD styles chosen in Settings.

## 1.5 · Drive HUD
**In short:** a new look and a new name.

- New name, "Drive HUD", and a start screen.
- A map-only home screen with round buttons.
- Saved places, a timeline of trips, a profile, Home and Work.

## 1.4 · More to Find
**In short:** sea, rivers and parks, and much better search.

- Sea, rivers, lakes and parks on the map.
- Much better search, with 36 000 more places.

## 1.3 · First Drive
**In short:** fixes after the first test drive.

- GPS updates every second.
- Rerouting in about 2 seconds.
- A lighter planning map and a smoother mini-map.
- An incoming-call icon on the HUD.

## 1.2 · Signal Lost
**In short:** a "No GPS" warning and a smarter mini-map.

- A "No GPS signal" warning.
- The mini-map zooms out as you speed up.
- A list of all the turns.

## 1.1 · Know the Limits
**In short:** speed limits, cameras and avoiding tolls.

- Speed limit and a speeding warning.
- Speed cameras.
- Avoid tolls.
- Home and Work, recent destinations.
- A progress bar towards the next turn.

## 1.0 · Hello, Road
**In short:** the first version.

- An offline map of mainland Portugal and the app's own route finding, with no internet needed.
- The HUD with the next turn, for Android and PC.

---

Map data © OpenStreetMap contributors (ODbL).
