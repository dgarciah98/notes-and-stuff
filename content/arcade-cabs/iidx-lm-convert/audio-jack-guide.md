---
title: Audio Jack wiring
alias:
  - 2. Audio Jack wiring
description: Audio Jack wiring diagrams and planification for LM convert
sticker: emoji//1f3a7
aliases:
tags:
  - arcade-cabs
  - lm-convert
---
This section contains all related documentation, notes and results related to the process of setting up headphone jack connectors on a Tricoro cabinet, in order to make it work like a LM cabinet, while making use of the BIO2 dedicated connections that are already programmed for this purpose on LM cabinets.

 > [!tldr] Planning
> - Get the same harness for CN15 (PHDR-26VS) and build it into an XMR-8V harness, the existing cable for 1P keys ([[#BI2A wiring]]) can be reused.
> - Short both HP and REC pins to ground in order to have headphones always enabled
> 	- Alternatively build some audio jack cables, using the mic pin for HP DETECT.
> 	- Either way headphone amplifiers will be needed.
> - Given previous points, rewiring shouldn't be needed.
## Audio Jack wiring outline
![[audio-jack/cn15-wiring.svg]]
### Alternative outline with audio cables
![[audio-jack/cn15-wiring-with-audio-cable.svg]]
![[bio2/cn15-wires.jpg]]![[bio2/cn15-wires-to-relay.jpg]]![[audio-jack/cn15-bio2.jpg]]

---
## CN15
> [!check]- Bill Of Materials 
> If any link stops working, just try to searching for the piece in specific for the time being, you'll probably find it.
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
>	- TRS 3.5mm male jack plug: https://es.aliexpress.com/item/1005005672946991.html
>	- Sheathed wire (4 cores): https://es.aliexpress.com/item/1005007924124268.html
>- Headphone amplifiers
>	- MAX4410 board: https://es.aliexpress.com/item/1005006230596608.html
>		- XH JST kit: https://es.aliexpress.com/item/1005006847308001.html
>		- DC input connector 2.1mmx5.5mm: https://es.aliexpress.com/item/1005007870346260.html
>	- HA400 amp (knock-off): https://es.aliexpress.com/item/1005006614134556.html
### BI2A wiring
![[audio-jack/cn15-bi2a-wiring.svg]]
### BI2X wiring
![[audio-jack/cn15-bi2x-wiring.svg]]
#### Headphones wiring
![[audio-jack/cn15-bi2x-headphones-wiring.svg]]
![[audio-jack/cn15-bi2x-pinout.png]]

CN15 is the easiest one since it could be left as it is, but if you want headphones to work, you'll need to add a few more cables (see [[#BI2X wiring]]). From here you have two options:
- Short all HP and REC DETECT pins to GND, REC DETECT pins may be just left unused ([[#Audio Jack wiring outline|diagram]])
- Build headphone cables that mainly go to the sound card, with an extra cable soldered to the jack's mic pin that goes to each HP DETECT pin on CN15 ([[#Alternative outline with audio cables|diagram]])

The first approach is more of a workaround than anything, but it allows you to modify headphone volume through the touch screen since this makes the game believe that both headphones are connected.

The second solution ensures that the headphones will work properly since the game will detect that they have been plugged to either 1P or 2P jack and will let you change headphone volume through the volume settings in the touch screen.

>[!tip] XONAR ports
>First thing to take into account is that the respective outputs for each player on the XONAR are as it follows, from top to bottom:
>- P1: SIDE output (last port)
>- P2: REAR OUTPUT (4th port)

The audio cables were made with a length of **~180cm** (shorter than I would like, 200cm may be better) and by soldering TRRS/4-pole female jack plugs with TRS/3-pole male jack plugs, leaving the female jack's mic pin separated for crimping and inserting it in their respective HP DETECT pin. (References can be seen [[audio-jack-guide#^audio-cables|here]] and [[audio-jack-guide#^cn15-with-detect|here]]). Additionally I also made a harness for "easier" management of HP DETECT pins, as shown [[audio-jack-guide#^hp-detect-harness|here]].

The audio cables can be taken outside through some holes that can be found inside the cabinet, you can see that through some of them the wires for the woofer speakers and woofer LED lights are being passed through, I used the one that is further away (third hole) which also connects directly outside unlike the other ones, which are covered with a metal plate.
![[audio-jack/audio-cable-runthrough.jpg]]
*Audio cable being passed through the farthest of the holes, the nearest two carry wires for the woofer speaker and the woofer LEDs respectively*

![[audio-jack/audio-cable-runthrough2.jpg]]
![[audio-jack/audio-cable-runthrough3.jpg]]
*Audio cable outside the cabinet. Metal plate that covers the other cables can be seen in the back*

At this point the headphone functionality should be working right away, the only remaining detail is that the audio by itself will be very low, so you will need an amplifier for both channels.
![[audio-jack/audio-jack-demo.mp4]]
*Demonstration of headphone detect functionality working, before adding amplifiers (the highlighting of the volume control isn't really appreciated in the video)*

Based on the diagrams of an LM cab, and assuming both the headphone amplifier and headphone jack PCBs match those of Sound Voltex Valkyrie cabs (or at least Nemsys cabs, since they would have very similar components as these two, if not the same), the amplifier handles the signal coming from the SENS pin and then signals JACK DETECT (HP DETECT on BIO2's CN15) and REC DETECT (same name on BIO2) depending on the connected device, and also all grounds in the amplifier are merged (reflected in [[#Headphones wiring|this diagram]])

For the record, the headphone detect functionality works without any amplifier in the middle of the setup (i.e. connecting [[audio-jack-guide#^audio-cables|these cables]]as they are), which indicates that the minimum requirement for it to work is to have some kind of continuity. From what I've tested at least the ground continuity should not be cut at any point in between the headphone jack and the XONAR port path.

For this, I personally recommend to get some MAX4410 amplifier boards if you want a really low-cost option with the "disadvantage" of having to build the necessary components yourself.

Initially, Behringer HA400 amplifiers were used as a first approach, since I already had one set up for headphones. The issue with these amplifiers is their ground connections and how they are merged, HA400 amplifiers have them merged only for the audio input and DC input, *__not__* the audio output. 

In order to make them work, I had to shim it by joining grounds (badly soldering a wire) between the input and output plugs. This partially resolved the issue, the detection was not perfect and apparently 3-pole headphones would not sound at all. Finally I had to discard these amplifiers as an option since they wouldn't satisfy my objective.
![[audio-jack/amp-setup-ha400-shim.jpg]]
![[audio-jack/amp-setup-ha400-shim2.jpg]]*Shimmed audio cables for headphone detect functionality with a HA400 amplifier. You may notice how the black wires (grounds) are soldered together*

MAX4410 amplifier boards in the other hand have all of its grounds merged, which is similar to how Konami's amplifier is done and ensures the condition for continuity. The only work done was crimping some XH JSTs and soldering some audio jacks and a DC jack. After connecting the audio cables to the amplifier, it turned out to work without any issue.
![[audio-jack/audio-jack-demo2.mp4]]
*Demonstration of headphone detect functionality working, after adding MAX4410 amps and audio jack brackets*

Only caveat with MAX4410 amplifiers is that, possibly due to merged grounds, the noise floor might be a bit high, meaning that you would hear some white noise when connecting headphones. In practice it's almost unnoticeable when playing but when no audio is playing some white noise might be heard. Also take into account that these amplifiers are **_loud_**.

In order to keep the amplifiers somewhat in place a small enclosure was made to put them inside and have them inside the cabinet. The model for 3D printing can be found here: 
<iframe src="https://www.printables.com/embed/1699313" width="640" height="190" scrolling="no" frameborder="0"></iframe>

You can see examples of the enclosure starting from [[audio-jack-guide#^max4410-setup|here]].

The audio jacks are positioned just below the deck, trying to keep them under the player buttons like in a Lightning Model cabinet, and to keep it fancy (and secured) a little 3D printed bracket was set up, made by @roxandtol:
<iframe src="https://www.printables.com/embed/1624880" width="640" height="190" scrolling="no" frameborder="0"></iframe>

These brackets are attached using the M5 screws that you can find below the deck. You can see references [[audio-jack-guide#^audio-jack-case|here]] and [[audio-jack-guide#^audio-jack-case2|here]].
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

![[audio-jack/audio-cable-results.jpg]]
*Audio jack with 3D printed bracket*
^audio-jack-case

![[audio-jack/audio-cable-results2.jpg]]*Audio jack with 3D printed bracket from below, using one of the screws from below the deck*
^audio-jack-case2

![[audio-jack/cn15-hp-detect.jpg]]*Harness for HP Detect*
^hp-detect-harness

![[audio-jack/amp-setup-ha400.jpg]]*Amplifier setup with HA400 amplifiers (discarded)*
^ha400-setup

![[audio-jack/max4410-box2.jpg]]*MAX4410 boards inside 3D printed enclosure*
^max4410-setup

![[audio-jack/max4410-box3.jpg]]*Amplifier setup with MAX4410 boards*
^max4410-setup2

![[audio-jack/max4410-box.jpg]]*MAX4410 boards inside 3D printed enclosure with soldered components*
^max4410-box

![[audio-jack/max4410-box4.jpg]]*MAX4410 enclosure from behind, showing jack inputs and outputs, and DC input*
^max4410-box2