---
title: How to create and set up a Beatoraja profile
aliases:
  - How to create and set up a Beatoraja profile
description:
tags:
  - bms
---
> [!info] FYI
> This is a setup thought for a public IIDX cabinet, not necessarily meant for playing at home, and specially for members and people playing at [Nextage Madrid](nextagemadrid.com)
>
> Feel free to replicate this setup for your own place or any other. Further notes on how to setup Beatoraja in general can be found here: https://wcko87.github.io/beatoraja-english-guide/
> 
> For any questions regarding what's written here or submitting profiles for the cab, feel free to contact me on:
> - Discord: @elmiamiman
> - Telegram: @ElMiamiMan

> [!tip] TL;DR
> 1. Create your profile on beatoraja's launcher and rename accordingly
> 2. Rename your profile folder, found in `player` folder
> 3. Set up your skins and modifiers in-game
> 4. Set your own Bokutachi IR connection (optional)
> 5. Send your profile with your skin resources to @any 
> 6. Once available in the cab's beatoraja, change in-game with F5 in keyboard > Misc Options > Select profile (last row) > Switch
> 7. ???
> 8. Profit
>    
> Alternatively, get an operator to create a profile for you from our templates and create a Bokutachi account in place if wanted

> [!fail] Inappropriate or problematic media
> Please refrain of sending your profile if it contains inappropriate or problematic audio, images or videos. This will be inspected manually and will be removed if any of these are to be found.
# Create your profile
Open Endless Dream's launcher and create a new profile from there. Once created you might want to rename your profile with your desired username.

![[../img/profile.png]]

Now, you may go to Beatoraja's `player` folder, find your profile's folder and rename said folder with your desired username.

![[../img/profile-folder.png]]
# Set up your skin resources
On this setup the main skins are the following:
- Music Select: Luxe Flat
- Play 7K/14K: WMIX II
- Result/Course Result: WMIX II Result
- Skin Select: m-select

This will cover how these skin were set up for multiple profiles and one is expected to use the same skins, however this could be done for virtually any skin compatible with Beatoraja.

Skins will be found in Beatoraja's `skin` folder. WMIX II Result will be taken as a example.

![[../img/profile-result-skin.png]]

The method used here to have the same skin for multiple people ***but with your customizations***, is to create different `.luaskin` files and their correspondent `.lua` files. The folder structure here would be the following:

```
|- skin
   |- WMIIX_FHD (e.g.)
      |- result
         |- parts
         |- courseData.json
         |- courseResult.luaskin
         |- courseResult_your_name.luaskin
         |- json.lua
         |- result.luaskin
         |- result_your_name.luaskin
         |- ...
         |- resultMain.lua
         |- resultMain_your_name.lua
         |- resultMain_course.lua
         |- resultMain_course_your_name.lua
```

Each file corresponds as follows:
- `result.luaskin`: Skin entry for Result screen
- `courseResult.luaskin`: Skin entry for Course Result screen
- `resultMain.lua`: LUA code for Result screen
- `resultMain_course.lua`: LUA code for Course Result screen

To keep it shortly, `.luaskin` files are the ones that will let you select "your skin for your profile", the `.lua` code itself is what will have whatever customizations you have for your Result screen. You can simply copy and paste as many as you need and then modify them manually.

Again, keep in mind that this would be only for WMIX II Result, but do consider using this method for any other skin of any other type, you may need to figure out though. 

Now, for each type, you will need to set it up as it follows:
#### `result_your_name.luaskin`
```lua
SKINTYPE = 15
local t = require("resultMain_your_name")
if skin_config then
	return t.main()
else
	return t.header
end
```
#### `resultMain_your_name.lua`
```lua
local main_state = require("main_state")

local user = "your_name" -- replace with your profile name

local header = {
	type = 7,
	name = "WMII FHD RESULT (" .. user .. ")",
	...
	-- for example, the background images will be found at
	-- parts/BG/your_name/A/*.png
	-- and so on for every folder that you want to use for each rank or clear
	-- PS: if you remove the extension off the path it can load mp4 files
	filepath = {
		{ name = "Help Language", path = "parts/lang/*.png", def = "en" },
		{ name = "clearAAA", path = "parts/BG/" .. user .. "/AAA/*", def = "Random" },
		{ name = "clearAA", path = "parts/BG/" .. user .. "/AA/*", def = "Random" },
		{ name = "clearA", path = "parts/BG/" .. user .. "/A/*", def = "Random" },
		{ name = "fontRANK", path = "parts/RANK/*.png", def = "block" },
		{ name = "clear", path = "parts/BG/" .. user .. "/CLEAR/*", def = "Random" },
		{ name = "falied", path = "parts/BG/" .. user .. "/FAILED/*", def = "Random" },
	},
}

local function main()
	...
	skin.source = {
		{id = 1, path = "parts/system/result_base.png"},
		{id = 2, path = "parts/BG/" .. user .. "/A/*"},
		{id = 3, path = "parts/BG/" .. user .. "/AA/*"},
		{id = 4, path = "parts/BG/" .. user .. "/AAA/*"},
		{id = 5, path = "parts/BG/" .. user .. "/CLEAR/*"},
		{id = 6, path = "parts/BG/" .. user .. "/FAILED/*"},
		...
	}	
```

That's it for the skin setup, now you'll need to setup your result backgrounds. As pointed right above, you will need to nest all rank and clear folders into one with a username that matches the one you want to use. The folder structure would be the following:
```
|- skin
   |- WMIIX_FHD (e.g.)
      |- result
         |- parts
            |- BG
               |- your_name
                  |- A
                  |- AA
                  |- AAA
                  |- CLEAR
                  |- CLEAR_COURSE
                  |- FAILED
                  |- FAILED_COURSE
               |- another_name
               |- yet_another_name
               |- foon
               ...
```

Needless to say, you may put here whatever you may want, however ***keep problematic or inappropriate images and videos out of this***.
# Set a Bokutachi account (optional)
For uploading your scores to a score tracker, you will need to set up an IR connection on your profile. The de-facto IR for LR2oraja is Bokutachi, but you can set up other IRs if you want.

Keep in mind that this is optional as in not necessary at all, but really convenient if you want to keep track of your scores, have them saved online, or compare with rivals.

In order to set up Bokutachi, you will need an API key from the IR and put it in your profile through the launcher (or manually modifying your profile's `config_player.json`)

First, you need to create a Bokutachi account at [boku.tachi.ac](https://boku.tachi.ac), if you already have one just skip this part.

![[../img/bokutachi-register.png]]

Once you're in, click on `Import Scores` -> `BMS` -> `LR2oraja IR`:
![[../img/bokutachi-import.png]]

![[../img/bokutachi-ir.png]]

Within the guide for LR2oraja IR, click `this link`, as it can be seen here:
> [!note] Small heads up
> You may need to download the Bokutachi IR JAR in order to be able to select in in Endless Dream's launcher. If you don't have it yet this is the moment to download it, just follow the indications as shown in the guide to have it ready or go to [Tachi's Github releases page](https://github.com/zkldi/Tachi/releases)

![[../img/bokutachi-this-link.png]]

Clicking it will send you to a page like this. Create the key, reveal it and copy it. You can copy later if you need it if you go to your Profile tab and click `My Integrations`.
![[../img/bokutachi-create-key.png]]

Once you have your API key, go to Endless Dream's launcher, go to the `IR` tab, select `Bokutachi IR` from the IR dropdown, and fill as it follows:
- User ID: your Bokutachi login ID
- Password your Beatoraja IR API key

![[../img/profile-ir.png]]

# Set your profile in the cab
At this point, you might want to get into the game to also configure your modifiers, speed, skin parameters, etc.

Compile your profile and skin resources in a ZIP following this structure:
```
|- player
|  |- your_username
|- skin
   |- WMIX_II
   |- Luxe_Flat
   |- whatever_skin
```

If you have your profile ready to submit, feel free to contact to these handles to have them set up in the cabinet:
- Discord: @elmiamiman
- Telegram: @ElMiamiMan
