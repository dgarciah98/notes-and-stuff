---
title: WS2812B Lights wiring
alias:
  - 4. WS2812B Lights wiring
description: WS2812B lights wiring diagrams and planification for LM convert
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
> 	- WS2812B 60led/m, 100led/m and 120led/m tape (SMD 2020): https://es.aliexpress.com/item/1005005910958172.html
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

Keep in mind that all LED tapes are ***WS2812B***, regular RGB ones or a different kind of addressable LED won't work, WS2812 do work but signal data will be addressed wrong. 

Some solutions for this part of the convert make use of 3D printed objects, which you can find them all in the following link: [https://www.printables.com/@MiamiMan/collections/3484132](https://www.printables.com/@MiamiMan/collections/3484132)
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

For this you will likely need an external PSU in order to feed all the required LEDs, since the PCB's PSU probably will not be enough. 

A LM cabinet uses a 150W PSU, and given the amount of LEDs that need to be powered and assuming all are 5050 LEDs, the math checks out. In my case, I worked with 2020 LEDs, and at the time of writing I'm still missing some LED sections (only did COMPANE, UPPER and TP SIDE), there with this many LEDs of this kind the power consumption doesn't reach 150W at all, so if you reach at this point using 2020 LEDs, you can safely use a 100W PSU. If you plan on setting all LEDs with 5050 tapes, you might as well get a 150W PSU, or a 200W PSU even, if you want to make sure the LEDs aren't underpowered.

The LED data for each LED circuit is taken out from CN18.
![[cn18-result.jpg]]*CN18 populated with some data wires*

The following picture shows the corresponding harness to DC TAPE LED, connecting TAPE_LED_PSU and TAPE_LED_BIO2 in the diagram above. This harness connects all the 5V and ground wires coming from the PSU (which can be faintly seen further away in the image) to every branching wire that goes to each LED circuit, merging also into the 5V IN and GND pins from BIO2.
![[ws2812b-wiring/dc-tape-led-result.jpg]]
*Corresponding harness to DC TAPE LED, merging TAPE_LED_PSU*
## LED tapes
### Measurements
- Used diffusors are the following
	- PILLAR and SIDE: 2cm wide (WIP)
	- TP SIDE: 1.3cm wide
	- COMPANE: 1.1cm wide
	- UPPER: no diffusor used
#### Pillars
- 1 meter (~98cm) per bar (4 meters)
![[Pasted image 20251209183355.jpg]]
![[Pasted image 20251209183405.jpg]]
#### Upper/Top speaker
- From CN18 to upper part of top speaker: ~140cm
- Total top speaker length: 111cm
- Top speaker depth: ~40cm
- Inside top speaker, total LED PCB length end to end: 101cm
- PCB support assembly: 50.5cm
- Total PCB support length, end to end: 45.2
- LED PCB screw hole distance: 5cm
#### Sides
- From bottom of cab to mark on the metal piece: 85cm
![[Pasted image 20251209183429.jpg]]

#### Compane
- From CN18 to tape: ~100cm
- Length below deck, just above door: 41cm
#### TP sides
- From CN18 to tape: ~100cm
- On each side: 27cm
- Without covering all of panel's height: 25cm
- Running connecting cable below deck: ~112cm
- Diffuser measurements:
	- Bottom surface: ~16.5cm
	- Top surface: ~18cm
	- Cut angle: ~120-125º

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

A 120led/m strip has been used to replace the original LED PCBs that are "inside" the top speaker, which can be actually be found right on top of the speaker's acrylic. For this some 3D printed custom channels have been made for the used tape, so they can be held and located at the same spot as the PCBs, replicating more or less the result of the original PCBs.

The spotlights have been repurposed by setting up some small PCBs with WS2812B LEDs and also printing some custom made 3D printed supports to fit in the lightbulb socket inside each spotligh and hold these PCBs.

All of these 3D printed objects can be found in the following links: 
<iframe src="https://www.printables.com/embed/1739105" width="640" height="190" scrolling="no" frameborder="0"></iframe>
<iframe src="https://www.printables.com/embed/1738752" width="640" height="190" scrolling="no" frameborder="0"></iframe>

According to the LM manual, the LED strips circuit is the following:

| CEILING LEFT | ->  | TITLE LEFT | ->  | TITLE RIGHT | ->  | CEILING RIGHT |
| ------------ | --- | ---------- | --- | ----------- | --- | ------------- |
| 54 LEDs      |     | 11 LEDs    |     | 11 LEDs     |     | 54 LEDs       |


Which would correspond (in theory) to the following path in a LM cabinet:
![[ws2812b-wiring/upper/upper-led-diagram-lm.png]]

For the top speaker itself, the original LED lightbulbs from the spotlights and LED boards were removed and replaced with supports and channels to hold the new LEDs in place.
![[ws2812b-wiring/upper/led-bulb.jpg]]
![[ws2812b-wiring/upper/led-bulb2.jpg]]
*Original Tricoro E11 Blue LED lightbulbs*
^tricoro-led-bulbs

![[ws2812b-wiring/upper/upper-tricoro-leds.jpg]]
*Tricoro top speaker LED boards*

Removing the lightbulbs is pretty straightforward, like any other bulb. Next, to access the LED boards:
1. Remove the grid in front the top speaker by taking out 5 screws at the top and 4 at the bottom of the structure
2. Remove the metal plate below the top speaker by taking out 4 wood screws
3. Lift the metal structure covering the boards by taking out 4 wood screws
4. Remove the top speaker acrylic by taking out 4 top screws at the top part of the acrylic, the bottom screws can be lightly unscrewed so you don't have to take them off completely

Right after removing the acrylic, the LED boards can be taken out by removing the screws that hold them.

With this done, the custom channels can be set, looking in the end like this:
![[ws2812b-wiring/upper/upper-led-channel.jpg]]
![[ws2812b-wiring/upper/upper-led-channel2.jpg]]
*Custom LED tape channel, replacing the LED boards*

These channels hold the LED tapes that correspond to the CEILING section of the UPPER lightning, resulting like this:
![[ws2812b-wiring/upper/upper-led-tape.jpg]]
![[ws2812b-wiring/upper/upper-led-tape2.jpg]]
*Working LED tape within the channels*

For the spotlights, custom supports for Edison E11 sockets were put in place, which hold WS2812B LED boards that will correspond to the TITLE section of the UPPER lightning:
![[ws2812b-wiring/upper/upper-led-supports.jpg]]
![[ws2812b-wiring/upper/upper-led-supports2.jpg]]
*Custom LED board supports, replacing the LED lightbulbs*

Regarding the LED boards themselves, 30º reflecting lenses were used in order to disperse the emitted light by the LEDS, in an attempt to replicate how the original bulbs would disperse their light.

For the ones used, a bit of DIY work was needed since they wouldn't fit the LEDs nor within the board properly, thus I had to cut their corners and use some cyanoacrylate glue to keep them in place.

With everything set up, the spotlights look like this:
![[ws2812b-wiring/upper/upper-led-setup.jpg]]
*Complete wiring the UPPER left section*

Finally, the resulting path for the UPPER lightning looks like the following:
![[ws2812b-wiring/upper/upper-tricoro-led-diagram.jpg]]*Final wiring path for UPPER LEDs*

#### UPPER Results
![[ws2812b-wiring/upper/upper-result.jpg]]
*Working UPPER lightning*
^upper-result

![[ws2812b-wiring/upper/upper-demo.mp4]]
*UPPER lightning demonstration*
^upper-demo

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

Since this strip will be less visible, a T0511 tape diffuser has been used and a 60led/m tape inside, which will cover almost all of the measured 41cm of length.

A 3D printed channel was made for the purpose of keeping the diffuser in place instead of having it glued directly and fall off in the future. It can be found in the following link: 
<iframe src="https://www.printables.com/embed/1738774" width="640" height="190" scrolling="no" frameborder="0"></iframe>

Pretty straightforward installation, the easiest to setup since you only need to run a long enough cable.

The only downside is that the 3D printed channel will get in the way of the door and opening it may get more difficult, but pressing the channel upwards should make enough space for the door to pass below.
![[ws2812b-wiring/compane/compane-channel.jpg]]
*3D printed channel below deck, with LED tape and diffuser set up*
#### COMPANE Results
![[ws2812b-wiring/compane/compane-result.jpg]]
*COMPANE tape working*
^compane-result

![[ws2812b-wiring/compane/compane-test-service.jpg]]
*COMPANE tape working, with service door open*
^compane-result2

![[ws2812b-wiring/compane/compane-demo.mp4]]
*COMPANE tape demonstration*
^compane-demo

### TP SIDE
Strips on touch panel sides
- 17 LED tape x2

A 100led/m LED strip has been used for this lightning section, and a D1313 180º tape diffuser has been order in order to replicate how it looks on a real LM. Furthermore, a custom 3D printed channel has been designed to put on each side of the front panel, which holds the diffuser and tape in place.

The printable object for the channel can be found in the following link:
<iframe src="https://www.printables.com/embed/1738774" width="640" height="190" scrolling="no" frameborder="0"></iframe>

For the channels, some 3D printed brims were additionally designed to reduce the needed space to fit the diffuser and also hiding the tape cables running through the channel.
![[ws2812b-wiring/tpside/tpside-channel.jpg]]

The tape diffuser has to be cut down to a certain length in order to fit well enough in the channel with the brims. Since the used LED strip is 100led/m, the resulting tape will be 17cm long, meaning that the resulting diffuser cut has to be of similar length.

In my case, a bit of DIY work was done by cutting the diffuser in an angle between 120º and 125º more or less in order to hide any small space that resulted from cutting the diffuser, plus giving it a nicer finish. The diffuser cut lengths I did can be seen in the following picture:
![[ws2812b-wiring/tpside/tpside-diffuser-cut.jpg]]

The first tape, with this setup, gets a bit tricky, since it was difficult to pass the cable connectors through the diffuser, as it is not that big, so in order to have the tape inside the diffuser with both cable ends, the tape had to be passed through the diffuser first and then solder the other cable end. The resulting tape with the diffuser looks like this:
![[ws2812b-wiring/tpside/tpside-first-tape.jpg]]

For this first tape, putting the diffuser inside the channel with its stoppers will look like this:
![[ws2812b-wiring/tpside/tpside-channel-diffuser.jpg]]

The setup though will be as easy as COMPANE, you'd simply have to set the channels in place making use of the panel's M4 screws and run the harness below the deck.
The final result will look like this:
![[ws2812b-wiring/tpside/tpside-demo.mp4]]

![[tpside-led-tape.png]]
### BASS
Strips on bass shaker
- 19 LED tape x2

> [!missing] #wontdo
> Might not add LEDs to bass shaker since having them where feet will be moving around can bring more trouble than anything.

![[base-led-tape.png]]