# Welcome to Haxball TS Webpack Startup

Haxball TS Webpack Startup aims to ease the creation of new haxball rooms, by providing a "starter kit" of libraries and folder setup. I use this in my projects to speed up development and configuration. Simply fork this repository to get started! This repo is not an an enchancement of the API, and intends to be as lightweight and minimal as possible to allow for full freedom in your haxball bot development.

This project utilizes the following:

- Webpack
  - Easily divide and organize your code into multiple files and folders, and then bundle them into one file.
- Typescript (with ts-loader)
  - All haxball API functions annotated and documented
- Puppeteer
  - Easily test your code with one command. Puppeteer opens a browser, loads the room script, and joins the test room for you in seconds.

# Files

### Bundles

This project is mainly divided into two folders:

- Room
- Server

**Room** is home to all your haxball code, onPlayerChat, onBallKick etc.
**Server** is home to all your nodejs code. This is where you can manage puppeteer and connect to a database

As a result, webpack will create **2** bundles, one room-bundle.js and one server-bundle.js both found in the /dist folder.

### Config

There are a few files where you can configure a few different settings:

1.  src/server/index.ts
    Here you can configure the room name that will be used for testing, found in the joinRoom() function. "Haxball Nickname" can be changed to any name you would like.

          joinRoom(browser, roomLink, "Haxball Nickname")

Additionally, by default the project is not headless, meaning you will be able to see the browser window. If you want to hide the browser, you can set "IS_HEADLESS" to **true**

          const  IS_HEADLESS  =  false;

2.  src/room/roomConfig.ts
    Here you can configure the settings for the room, room name, max players etc. I moved this to a new file so any changes you make to the room name or token don't get picked up by git. Make sure you load your token here, so that you can bypass the reCAPCTHA. You can choose to solve the captcha yourself, but if you take too long puppeteer will close the browser automatically.

# Running

1. Install all dependencies for this project: Webpack, tsloader, puppeteer, typescript

   npm install

2. Next run the **build** command so you can build both bundles.

   npm run build

3. Then run the **start** command to load the room.

   npm run start

4. Watch is enabled in the webpack.config file meaning any changes you make will be automatically saved. Just do "npm run start" to rerun the room with any new changes you make!

   npm run start
