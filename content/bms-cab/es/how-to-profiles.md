---
title: Cómo crear y configurar un perfil de Beatoraja
aliases:
  - Cómo crear y configurar un perfil de Beatoraja
description:
tags:
  - bms
---
> [!info] Información
> Esta configuración está pensada para una máquina IIDX pública; no está necesariamente destinada a jugar en casa, si no para los socios y las personas que juegan concretamente en [Nextage Madrid](nextagemadrid.com)
>
> Puedes basarte en esta configuración para usarla cualquier otro lugar si quieres. Encontrarás más información sobre como preparar Beatoraja en general aquí: https://wcko87.github.io/beatoraja-english-guide/
> 
> Si tienes alguna pregunta sobre lo que se explica aquí o sobre cómo enviar perfiles para la máquina, no dudes en contactar conmigo a través de:
> - Discord: @elmiamiman
> - Telegram: @ElMiamiMan

> [!tip] Resumen rápido
> 1. Crea tu perfil desde el launcher de beatoraja y cámbiale el nombre según corresponda
> 2. Cambia el nombre de la carpeta de tu perfil, que se encuentra dentro de la carpeta `player`
> 3. Configura tus skins y modificadores dentro del juego
> 4. Configura tu propia conexión IR de Bokutachi (opcional)
> 5. Envía tu perfil junto con los recursos de tus skins a @elmiamiman en Discord
> 6. Cuando esté disponible en el beatoraja de la máquina, cambia de perfil dentro del juego pulsando F5 en el teclado > Misc Options > Select profile (última fila) > Switch
> 7. ???
> 8. ¡A disfrutar!
>    
> Como alternativa, puedes pedir a un operador que cree un perfil para ti a partir de nuestras plantillas y, si quieres, que cree también una cuenta de Bokutachi en el propio local.

> [!fail] Contenido multimedia inapropiado o problemático
> No envíes tu perfil si contiene audio, imágenes o vídeos inapropiados o problemáticos. Todo el contenido se revisará manualmente y se eliminará si se encuentra algo de este tipo.
# Crear tu perfil
Abre el launcher de Endless Dream y crea un perfil nuevo desde ahí. Una vez creado, puedes cambiarle el nombre para poner el nombre de usuario que quieras.

![[../img/profile.png]]

A continuación, ve a la carpeta `player` de Beatoraja, busca la carpeta de tu perfil y cámbiale el nombre para que coincida con el nombre de usuario que quieras.

![[../img/profile-folder.png]]
# Configurar los recursos de tus skins
En esta configuración se utilizan principalmente las siguientes skins:
- Music Select: Luxe Flat
- Play 7K/14K: WMIX II
- Result/Course Result: WMIX II Result
- Skin Select: m-select

Aquí se explicará cómo se han configurado estas skins para varios perfiles. Se espera que se utilicen las mismas skins, aunque este método podría aplicarse prácticamente a cualquier skin compatible con Beatoraja.

Encontrarás las skins en la carpeta `skin` de Beatoraja. En este ejemplo se utilizará WMIX II Result.

![[../img/profile-result-skin.png]]

El método utilizado para que varias personas puedan usar la misma skin ***pero con las personalizaciones de cada uno*** consiste en crear distintos archivos `.luaskin` y sus correspondientes archivos `.lua`. La estructura de carpetas sería la siguiente:

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

Cada archivo corresponde a lo siguiente:
- `result.luaskin`: identificador de la skin para la pantalla Result
- `courseResult.luaskin`: identificador de la skin para la pantalla Course Result
- `resultMain.lua`: código LUA para la pantalla Result
- `resultMain_course.lua`: código LUA para la pantalla Course Result

Resumiendo, los archivos `.luaskin` son los que te permiten seleccionar «tu skin para tu perfil», mientras que el propio código `.lua` contiene las personalizaciones que hayas hecho para la pantalla Result. Basta con copiar y pegar tantos archivos como necesites y modificarlos manualmente.

Recuerda que este ejemplo es únicamente para WMIX II Result, aunque podrías utilizar este método con cualquier otra skin. De ser así, tendrás que averiguar cómo adaptarlo. 

A continuación se indica cómo debes configurar cada tipo de archivo:
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
	-- por ejemplo, las imágenes de fondo estarán en
	-- parts/BG/your_name/A/*.png
	-- y así para cada carpeta donde que quieras tener imágenes
	-- nota: si quitas la extensión de la ruta puedes cargar videos mp4
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

Con esto termina la configuración de la skin. Ahora tendrás que configurar los fondos de resultados. Como se ha indicado antes, debes agrupar todas las carpetas de rangos y clears dentro de otra carpeta cuyo nombre de usuario coincida con el perfil que quieras utilizar. La estructura de carpetas sería la siguiente:
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

No hace falta decir que aquí puedes poner lo que quieras, pero ***no incluyas imágenes ni vídeos problemáticos o inapropiados***.
# Configurar una cuenta de Bokutachi (opcional)
Para subir tus puntuaciones a un Internet Ranking, tendrás que configurar una conexión IR en tu perfil. Por lo general para LR2oraja se usa Bokutachi, aunque puedes configurar otras IR si lo prefieres.

Ten en cuenta que esto es totalmente opcional, pero resulta muy práctico si quieres llevar un seguimiento de tus puntuaciones, guardarlas en la nube o compararlas con las de tus rivales.

Para configurar Bokutachi, necesitarás una clave API de la IR e introducirla en tu perfil a través del launcher (o modificando manualmente el archivo `config_player.json` de tu perfil).

Primero, tienes que crear una cuenta de Bokutachi en [boku.tachi.ac](https://boku.tachi.ac). Si ya tienes una, puedes saltarte este paso.

![[../img/bokutachi-register.png]]

Una vez dentro, haz clic en `Import Scores` -> `BMS` -> `LR2oraja IR`:
![[../img/bokutachi-import.png]]

![[../img/bokutachi-ir.png]]

En la guía de LR2oraja IR, haz clic en `this link`, tal y como se muestra aquí:
> [!note] Aviso
> Es posible que tengas que descargar el archivo JAR de Bokutachi IR para poder seleccionarlo en el launcher de Endless Dream. Si todavía no lo tienes, este es el momento de descargarlo. Sigue las instrucciones de la guía para dejarlo preparado o visita la [página de lanzamientos de Tachi en GitHub](https://github.com/zkldi/Tachi/releases).

![[../img/bokutachi-this-link.png]]

Al hacer clic, llegarás a una página como esta. Crea la clave, muéstrala y cópiala. Si la necesitas más adelante, puedes volver a copiarla desde la pestaña Profile, haciendo clic en `My Integrations`.
![[../img/bokutachi-create-key.png]]

Cuando tengas tu clave API, abre el launcher de Endless Dream, ve a la pestaña `IR`, selecciona `Bokutachi IR` en el desplegable de IR e introduce los siguientes datos:
- User ID: tu ID de inicio de sesión de Bokutachi
- Password: tu clave API de Beatoraja IR

![[../img/profile-ir.png]]

# Instalar tu perfil en la máquina
Llegados a este punto, quizá quieras entrar en el juego para configurar también tus modificadores, la velocidad, los parámetros de las skins, etc.

Agrupa tu perfil y los recursos de tus skins en un archivo ZIP con la siguiente estructura:
```
|- player
|  |- your_username
|- skin
   |- WMIX_II
   |- Luxe_Flat
   |- whatever_skin
```

Si ya tienes tu perfil listo para enviarlo, puedes contactar con cualquiera de estas cuentas para que lo instalen en la máquina:
- Discord: @elmiamiman
- Telegram: @ElMiamiMan
