---
title: WS2812b Lights wiring
alias:
  - 4. WS2812b Lights wiring
description: WS2812b lights wiring diagrams and planification for LM convert
sticker: emoji//1f6a8
date: 2026-02-19
---
> [!warning] WIP

> [!check]- Bill Of Materials
> - #### CN18 (lights output): 
> 	- PHDR-16VS: 
> 		- 26 AWG Harness (2x8P): https://es.aliexpress.com/item/1005004746953918.html
> 		- 24 AWG harness (2x8P): https://es.aliexpress.com/item/1005005169172801.html
> 		- 22 AWG harness: https://es.aliexpress.com/item/1005009277050529.html
> 		- Terminals (SPHD-001T-P0.5): https://es.aliexpress.com/item/1005003975795283.html
> 		- LED tapes
> 		- 68 LED tape x4
> 		- 61 LED tape x2
> 		- 54 LED tape x2
> 		- 11 LED tape x2
> 		- 57 White LED tape x2
> 		- 45 LED tape x2
> 		- 21 LED tape x1
> 		- 17 LED tape x1
> 		- 19 LED tape x1
> 		- Total: 17 LED tapes
> 			- https://es.aliexpress.com/item/1005005922059410.html
> 			- https://es.aliexpress.com/item/1005009737052138.html
> 			- https://es.aliexpress.com/item/1005006094726999.html
>
> - #### DC TAPE LED
> 	- RECOMMENDED to use 22 AWG cable for feeding 5V to all tapes
> 	- XADR-20V -> XADRP-20V -> CN18 (PHDR-16VS) & LEDs
> 		- XADR-20V:
> 			- Connector: https://es.aliexpress.com/item/1005008510643553.html
> 			- Terminals (SXAM-001T-P0.6): https://es.aliexpress.com/item/1005008545737745.html
> 		- XADRP-20V
> 			- Connector: https://www.aliexpress.com/item/1005007898440466.html
> 			- Terminals (SXA-001T-P0.6): https://es.aliexpress.com/item/1005004425152785.html
> - #### External PSU
> 	- MEAN WELL 5V 90W LRS-100-5 PSU
## Lightning model outline
> [!tldr] Legend
> - Red: BASS
> - Blue: SIDE_1P
> - Green: SIDE_2P
> - Orange: COMPANE
> - Gray: UPPER
> - Brown: TP SIDE
> - Pink: PILLAR_1P
> - Yellow: PILLAR_2P 

![[ws2812b-wiring/lightning-leds-outline.png]]
## Legacy outline (theory)
![[ws2812b-wiring/iidx-legacy-leds-outline.JPG]]
## CN18
### WS2812b lights wiring outline 
![[ws2812b-wiring/cn18-wiring.svg]]

For this you will likely need an external PSU in order to feed all the required LEDs, since the PCB's PSU probably will not be enough. The LED data is taken out from CN18.
### LED tapes
#### Measurements
- Diffusors used are 2cm width long
- 
##### Pillars
- 1 meter (~98cm) per bar (4 meters)
![[Pasted image 20251209183355.jpg]]
![[Pasted image 20251209183405.jpg]]
##### Upper
-
##### Sides
- From bottom of cab to mark on the metal piece: 85cm
![[Pasted image 20251209183429.jpg]]

##### Compane
- 41 cm, below deck, just above door
##### TP sides
- On each side: 27cm
- Without covering all of panel's height: 25cm
- Running connecting cable below deck: ~112cm

#### PILLAR 1P
1P barrier
- 68 LED tape x2
- 61 LED tape x1
![[pillar1p-led-tape.png]]
#### PILLAR 2P
2P barrier
- 68 LED tape x2
- 61 LED tape x1
![[pillar2p-led-tape.png]]
#### UPPER
Upper corners, LEDs above speakers, header LEDS seem to be independent
- 54 LED tape x2
- 11 LED tape x2
- 57 White LED tape x2
![[upper-led-tape.png]]
#### SIDE 1P
1P side under deck and barrier
- 45 LED tape x1
![[side1p-led-tape.png]]
#### SIDE 2P
2P side under deck and barrier
- 45 LED tape x1
![[side2p-led-tape.png]]
#### COMP (compane)
Strip under deck
- 21 LED tape x1
![[comp-led-tape.png]]
#### TP SIDE
Strips on touch panel sides
- 17 LED tape x2
![[tpside-led-tape.png]]
#### BASS
Strips on bass shaker
- 19 LED tape x2
![[base-led-tape.png]]