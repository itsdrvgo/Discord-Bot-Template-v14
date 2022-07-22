# Discord.JS v14 Bot Template

Hello, this repository represents the basic template to get started with a Discord Bot in Discord.JS v14. You can clone or fork this repository and start making changes if you want.

## Requirements:
* Node.JS version 16.9.0 or higher (Recommended latest LTS version of NodeJS, install it from [here](https://nodejs.org/en/))
* Discord.JS v14 (Install it from [here](https://www.npmjs.com/package/discord.js/v/14.0.3))

## How to start the bot?
If you already have created your Discord Bot Application, please skip to `step 5`.
1. Go [this site](https://discord.com/developers/applications) and click on **New Application**, and just name it whatever you want.
2. After the creation of the application, head over to the menu **Tab**, and push the buttons on the right side for everything except, *REQUIRES OAUTH2 CODE GRANT* this option. An example image is shown below!
![Setup the Bot like this](/Images/bot.png "Discord Developers Portal")
You can enable the *MESSAGE INTENT* also if you want.
3. Go to the **OAuth2** menu, and head over to the sub-menu called **URL Generator**. In the scopes, please check on *Bot* & *applications.commands*. Underneath inside the last box, choose your permissions and copy the URL that is generated below.
4. Paste the url in another tab and invite the bot to your server.
5. After inviting the bot, open this project in your IDE, and write `npm i` in the Console/Shell and hit enter. For VS Code users, hit `Ctrl + J` to open up the terminal and then run this command. This will install all the required packages!
6. Now, go back to your **Discord Developers Portal** and go to the menu **Bot**. Here click on *Reset Token* & copy this token.
7. Go to the file *.env* and replace the token with `YOUR_BOT_TOKEN`. The final one should look like this,
`DISCORD_TOKEN = ewtgwsry.784ny03574yvn952784yup092y3u41.4ttw4ty4wy9`
8. Now go to your server and create a logs channel if you don't have and copy it's ID. If you don't know how to copy ID of an element in Discord [follow this](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
9. Go again to the `.env` file and replace that ID with `LOGS_CHANNEL_IN_YOUR_SERVER`. The final one should look like this,
`LOGS = 8981463146845232`
10. Go to your console, write `node .` and hit enter. If you've done everything correctly, the bot should be turned on now!

## How to add my own file?
* For any type of commands, please head over to the folder, **Commands** and create another folder inside it. **DO NOT ADD A FILE INSIDE COMMANDS FOLDER**. It should be, *Commands > Information > ping.js*. So, we've the main folder, then a category folder and then the `js` file.
* For any type of events, please head over to the folder, **Events** and follow the procedure of adding Commands.