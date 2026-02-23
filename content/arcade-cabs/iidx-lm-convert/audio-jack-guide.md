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
> [!warning] WIP
> - Audio cables not yet tested

> [!todo] TODO
> - Add results for audio cables
> - Add results from the inside of the cab

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

For the audio cables, I've made them with a length of ~180cm and soldering TRRS/4-pole female jack plugs with TRS/3-pole male jack plugs, leaving the mic pin from the female jack alone for crimping and put it in their respective HP DETECT pin. 
# Results
![[audio-jack/cn15-cable-2.jpg]]
![[audio-jack/cn15-cable.jpg]]
![[audio-jack/audio-cables.jpg]]