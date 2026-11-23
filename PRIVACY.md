# Drive HUD · Privacy

**Short version:** Drive HUD has no account, no ads and no analytics. What you do in the app stays on your phone. The app only goes online to download maps and updates, and nothing about you is sent unless you choose to send it.

## What stays on your phone

- Your places (home, work, saved places), recent searches and trips.
- Your garage: cars, their photos and driving totals.
- Your settings and HUD colours.
- The map packs you downloaded.

You can copy all of it with *Settings › Your data › Export* and move it to another phone. On Android the app also keeps a copy in your phone's *Downloads* folder after each trip (`drive-hud-backup.json`, replaced each time; *Settings › Your data › Automatic copy* turns it off): uninstalling the app deletes its data but not that file, and *Restore your data* in the first-run setup brings it back. The copy never leaves your phone unless you send it somewhere.

## When the app goes online, and to where

| What | Where | What is sent |
|---|---|---|
| Downloading or updating map packs, and the small Europe map used to find towns in countries whose map you don't have | GitHub (this repository's releases) | the file being downloaded |
| Looking for a new version (at most once a day, or *Check for updates*) and downloading it | GitHub | nothing about you: it reads the list of versions |
| *Satellite* or *Relief* map type, only if you choose it | Esri (ArcGIS Online) | which map tiles are shown, so roughly the area you are looking at |
| Opening a short Google Maps link shared with the app | Google | that link, to find the place it points to |

Navigation, routes, search and the HUD work offline, on the phone.

## Trip recordings (optional)

With *Record trip sensors* on (off by default), each trip's GPS track and motion sensors are saved as a file in your phone's *Downloads* folder. The file also has an anonymous id of the installation (random, no name or email), the app and phone model, and the garage car used.

The file is **encrypted on the phone** before it is saved: only the developer's private key can open it. Nobody else can read it, including whoever carries it.

At the end of a recorded trip you choose what to do with it, and nothing is sent unless **you** tap one of these:
- **Send to the developer:** the encrypted file goes to the developer's small server (a Cloudflare Worker). The server only accepts encrypted recordings, keeps nothing about who sent it (no name, no IP address), and deletes each file after the developer collects it, or after 30 days at most.
- **Send via GitHub:** opens a public issue form; you attach the file yourself. The issue is deleted once the developer has collected the file.
- **Share:** the file goes to whatever app you pick (WhatsApp, Drive, email…).

## Android permissions and why

| Permission | Why | Stored or sent? |
|---|---|---|
| Location | Navigation and the speedometer | Only in trip recordings, if you turn them on |
| Notification access | Shows who calls, messages and the song playing on the HUD | No |
| Microphone | Moves the music visualizer with the sound | No: nothing is recorded |
| Phone, call log, contacts | The caller's name on the HUD, and answering with the car's or headset's button | No |
| Display over other apps | Brings the HUD back in front after a call | No |
| Do not disturb access | Hides other apps' pop-ups during a trip, and puts your own setting back after | No |
| Modify system settings (optional) | Uses the HUD style's sound as the ringtone during a trip | No |
| Install apps | Installs updates from inside the app (you always confirm) | No |

## Questions

[Open an issue](https://github.com/V-1per/hud/issues/new/choose) and ask.
