---
title: Audio Jack wiring
alias:
  - 2. Audio Jack wiring
description: Audio Jack wiring diagrams and planification for LM convert
sticker: emoji//1f3a7
date: 2026-02-21
tags:
  - arcade-cabs
  - lm-convert
---
> [!todo] TODO
> - Add pictures with headphone amplifiers

 > [!tldr] Planning
> - Get same harness for CN15 (PHDR-26VS) and build to XMR-8V harness, the existing cable for 1P keys ([[#BI2A wiring]]) can be reused
> - Short to ground both HP and REC pins, since we don't have the headphone amp
> 	- Alternatively build some audio jack cables, using the mic pin for HP DETECT
> - Given previous points, rewiring shouldn't be needed
## Audio Jack wiring outline
![[audio-jack/cn15-wiring.svg]]
### Alternative outline with audio cables
![[audio-jack/cn15-wiring-with-audio-cable.svg]]
![[bio2/cn15-wires.jpg]]![[bio2/cn15-wires-to-relay.jpg]]![[audio-jack/cn15-bio2.jpg]]

---
## CN15
> [!check]- Bill Of Materials 
> - #### PCB connector: 
> 	- PHDR-26VS:
> 		- Harness: https://es.aliexpress.com/item/1005008107323180.html
> 		- Terminals (SPHD-001T-P0.5): https://es.aliexpress.com/item/1005003975795283.html
> 	  
> - #### Other end of cable:
> 	- XMR-08V:
>		- Connector and terminals: https://es.aliexpress.com/item/1005009346695309.html
>		- Terminals (SXM-001T-P0.6): https://es.aliexpress.com/item/1005008545862370.html	
>- #### Audio cable:
>	- TRRS 3.5mm female jack plug: https://es.aliexpress.com/item/1005008150971423.html
>	- TRS 3.5mm male jack plug: https://es.aliexpress.com/item/1005009754865907.html
>	- Sheathed wire: https://es.aliexpress.com/item/1005007924124268.html
### BI2A wiring
![[audio-jack/cn15-bi2a-wiring.svg]]
### BI2X wiring
![[audio-jack/cn15-bi2x-wiring.svg]]
![[audio-jack/cn15-bi2x-pinout.png]]

CN15 is the easiest one since it could be left as it is, but if you want headphones to work you need to add a few more cables (check [[#BI2X wiring]]). From here you have two options:
- Short all HP and REC DETECT pins to GND, REC DETECT pins may be just left unused ([[#Audio Jack wiring outline|diagram]])
- Build a headphone cable that mainly goes to the audio card, with a extra cable soldered to the mic pin of the jack and goes to each HP DETECT pin on CN15 ([[#Alternative outline with audio cables|diagram]])

The first option is more of a shim than anything, but it lets you setup headphone volume through the touch screen since this makes the game believe that both headphones are connected.

The second solution ensures that the headphones will work since the game will detect that they have been plugged to either 1P or 2P jack and will let you change headphone volume.

For the audio cables, I've made them with a length of **~180cm** (shorter than I would like, 200cm may be better) and soldering TRRS/4-pole female jack plugs with TRS/3-pole male jack plugs, leaving the mic pin from the female jack alone for crimping and put it in their respective HP DETECT pin. (References can be seen [[audio-jack-guide#^audio-cables|here]] and [[audio-jack-guide#^cn15-with-detect|here]])

The audio cables can be taken outside through some holes that can be found inside the cabinet, you can see that through some of them the wires for the woofer speakers and woofer LED lights are being passed through, I used the one that is further away (third hole) which also connects directly outside unlike the other ones which are covered with a metal plate.
![[audio-jack/audio-cable-runthrough.jpg]]
*Audio cable being passed through the farthest of the holes, the nearest two carry wires for the woofer speaker and the woofer LEDs respectively*

![[audio-jack/audio-cable-runthrough2.jpg]]
![[audio-jack/audio-cable-runthrough3.jpg]]
*Audio cable outside the cabinet. Metal plate that covers the other cables can be seen in the back*

At this point the headphone functionality should be working right away, the only detail left is that the audio by itself will be very low, so you will need an amplifier for both channels. Behringer HA400 amps work really well and can be very cheap.

The audio plugs are positioned just below the deck to assimilate their position like a Lightning Model cabinet, and to keep it fancy (and secured) a little 3D printed case was set up, made by @roxandtol: 
> TODO: add files
# Results
![[audio-jack/cn15-cable-2.jpg]]
*CN15 connector for legacy harness*

![[audio-jack/cn15-cable.jpg]]
*New CN15 harness with HP DETECT and REC DETECT shorted to ground*

![[audio-jack/audio-cables.jpg]]
*Audio cables with microphone pins crimped for CN15*
^audio-cables

![[audio-jack/cn15-results.jpg]]
*CN15 with HP DETECT pins (last two white wires), coming from the audio cables*
^cn15-with-detect

![[audio-jack/audio-cable-result.jpg]]