---
title: WS2812b Lights wiring
alias:
  - 4. WS2812b Lights wiring
description: WS2812b lights wiring diagrams and planification for LM convert
sticker: emoji//1f6a8
tags:
  - arcade-cabs
  - lm-convert
---
> [!warning] WIP

> [!warning] Proceed with Caution
> ### Careful when making the harnesses for this part
> Due to the amount of current that will be transported through the wires that connect the LEDs with the respective source of power, you'll probably need a big enough wire gauge for feeding +5V to the LEDs, and also keep the same gauge size for grounds.
> 
> For this part I will use 22 AWG since it's the biggest or at least one of the bigger gauges that the used JST terminals allow.
> 
> **KEEP IN MIND** that this is still a work in progress and hasn't been tested as of now.

> [!check]- Bill Of Materials
> If any link stops working, just try to searching for the piece in specific for the time being, you'll probably find it.
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
> - #### LED lightning
> 	- WS2812B 60led/m and 100led/m tape: https://es.aliexpress.com/item/1005005910958172.html
> 	- 3Pin AWG22 wire (just in case): https://es.aliexpress.com/item/33032954455.html
> 	- JST connectors AWG22: https://es.aliexpress.com/item/33042936981.html
> 	- B2010 Tape diffusor: https://es.aliexpress.com/item/1005008042786167.html
> 	- T0511 Tape diffusor (for compane): https://es.aliexpress.com/item/1005008376388272.html
> 	- D1313 180º Tape diffusor (for TP sides) https://es.aliexpress.com/item/1005008109124457.html
> 	- Spotlights alternative:
> 		- WS2812B boards (3bit and 1bit): https://es.aliexpress.com/item/1005007503733494.html
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

This section contains all related documentation, notes and results related the process of installing and setting up addresssable LED lights on a Tricoro cabinet, in order to behave and look like the light system of a LM cabinet, while making use of the BIO2 dedicated connections that are already programmed for this purpose on LM cabinets.
# Lightning model outline
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
*LM WS2812b LEDs outline*
# Legacy outline (theory)
![[ws2812b-wiring/iidx-legacy-leds-outline.JPG]]
*Tricoro cabinet outline of the setup for the WS2812b LEDs*
# CN18
## WS2812b lights wiring outline 
![[ws2812b-wiring/cn18-wiring.svg]]

For this you will likely need an external PSU in order to feed all the required LEDs, since the PCB's PSU probably will not be enough. The LED data is taken out from CN18.
## LED tapes
### Measurements
- Diffusors used are 2cm width long
- 
#### Pillars
- 1 meter (~98cm) per bar (4 meters)
![[Pasted image 20251209183355.jpg]]
![[Pasted image 20251209183405.jpg]]
#### Upper
-
#### Sides
- From bottom of cab to mark on the metal piece: 85cm
![[Pasted image 20251209183429.jpg]]

#### Compane
- 41 cm, below deck, just above door
#### TP sides
- On each side: 27cm
- Without covering all of panel's height: 25cm
- Running connecting cable below deck: ~112cm

### PILLAR 1P
1P barrier
- 68 LED tape x2
- 61 LED tape x1
![[pillar1p-led-tape.png]]
### PILLAR 2P
2P barrier
- 68 LED tape x2
- 61 LED tape x1
![[pillar2p-led-tape.png]]
### UPPER
Upper corners, LEDs above speakers, header LEDS seem to be independent
- 54 LED tape x2
- 11 LED tape x2
- 57 White LED tape x2

Will mainly use 60led/m tape for the top speaker LEDs, trying to cover both 54 LED tapes.

Options are:
- Using 100led/m tape for the 11 LED tapes, on the sides of the top beam (as drafted [[ws2812b-lights-guide#Legacy outline (theory)|here]]
- Get WS2812B LED boards and have them inside the spotlights
![[upper-led-tape.png]]
### SIDE 1P
1P side under deck and barrier
- 45 LED tape x1

![[side1p-led-tape.png]]
### SIDE 2P
2P side under deck and barrier
- 45 LED tape x1

![[side2p-led-tape.png]]
### COMP (compane)
Strip under deck
- 21 LED tape x1

Will use the T0511 tape diffuser since it's going to be the less visible one and lightning will be more than enough. Might use 60led/m tape since it will cover more length
![[comp-led-tape.png]]
### TP SIDE
Strips on touch panel sides
- 17 LED tape x2

Will use the D1313 tape diffuser in order to assimilate how it looks on a real LM, since it looks like the diffuser itself is sitting on the panel, therefore a 180º diffuser might do the trick.

Might use 60led/m tape depending of how it looks. 
![[tpside-led-tape.png]]
### BASS
Strips on bass shaker
- 19 LED tape x2

Might not add LEDs to bass shaker since having them where feet will be moving around can bring more trouble than anything.
![[base-led-tape.png]]