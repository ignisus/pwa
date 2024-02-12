<div align="center">
# Move to [GitLab](https://gitlab.com/ignisus/pwa)
# Ignisus Progressive Web App

[![pipeline status](https://gitlab.com/ignisus/pwa/badges/main/pipeline.svg)](https://gitlab.com/ignisus/pwa/-/commits/main)
[![coverage report](https://gitlab.com/ignisus/pwa/badges/main/coverage.svg)](https://gitlab.com/ignisus/pwa/-/commits/main)
[![Latest Release](https://gitlab.com/ignisus/pwa/-/badges/release.svg)](https://gitlab.com/ignisus/pwa/-/releases)

[![ANGULAR](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/TR/2014/REC-html5-20141028/)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/)
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/)
[![TS](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![BROWSER](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](https://www.mozilla.org/en-US/firefox/new/)
[![AndroidStudio](https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white)](https://developer.android.com/studio)

</div>

### 📃 Index

1. [Setup](#setup) <br>
   1.1 [Linux setup](#linux) <br>
   [Database](#database) <br>
   1.2 [Mac setup](#mac) <br>
   1.3. [Windows setup](#windows) <br>
2. [Wikis](#wikis) <br>
   2.1 [StoryBook](#storybook) <br>
3. [Acknowledgments](#acknowledgments)

# 💡 Setup <a name="setup"></a>

## 🐧 GNU Linux Setup (Flatpak Version) <a name="linux"></a>

### 📌 Visual Code Flatpak System Terminal Fix:

edit settings.json and add:

#You can change here bash or zsh.

    {
        "terminal.integrated.defaultProfile.linux": "bash",
        "terminal.integrated.profiles.linux": {
            "bash": {
            "path": "/usr/bin/flatpak-spawn",
            "args": [
                "--env=TERM=xterm-256color",
                "--host",
                "script",
                "--quiet",
                "/dev/null"
            ]
            },
            "zsh": {
            "path": "/usr/bin/flatpak-spawn",
            "args": [
                "--env=TERM=vscode",
                "--env=SHELL=zsh",
                "--host",
                "script",
                "--quiet",
                "/dev/null"
            ]
            }
        },
    }

### 📌 Nvm install and setup:

Install dependences like make, debian example: `apt install build-essential`, fedora example: `sudo dnf groupinstall "Development Tools"` / `rpm-ostree install make`.

Run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash` for a nvm repository.

Run `source ~/.bashrc` for update sources.

Run `nvm install --lts` get lastest nvm LTS. (Last tested: Node.js v20.11.0)

Run `nvm use --lts` for set nvm.

### 📌 Angular install

Run `npm install -g @angular/cli` install cli.

Run `npm install -g npm` to update npm.

Run `npm install` for all dependences.

### 📌 Angular update

Run `ng update @angular/cli & ng update @angular/core` for update all angular.

Run `npm update` for update all dependences.

Run `npm upgrade` for upgrade all dependences.

### 📌 Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/` (port could vary if in use). The application will automatically reload if you change any of the source files.

### 📌 Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### 📌 Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### 📌 Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### 📌 Flatpak help

To open on android studio you can configure `CAPACITOR_ANDROID_STUDIO_PATH` environment variable.

1- Try to find route of your IDE `flatpak list | grep com.google.AndroidStudio`

2- Setup it example `export CAPACITOR_ANDROID_STUDIO_PATH=/var/home/user/.var/app/com.google.AndroidStudio`

### 📌 Compile WebApp

Run `ng build` or we prefer: `ng build --configuration=production` to compile/build the WebApp.

The project/build artifacts will be stored in the `dist/` directory.

### 📌 Compile Android

Run `npx cap add android` create Android proyect.

Run `npx cap copy` & `npx cap sync` to copy and sync assets.

Run `npx cap open android` open Android Studio.

Run `npx cap run android` run the project on a device or emulator.

### 📌 Compile IOS

Run `npx cap add ios` create IOS proyect.

Run `npx cap copy` & `npx cap sync` to copy and sync assets.

Run `npx cap open ios` open the project in Xcode

Run `npx cap run ios` run the project on a device or simulator.

### 📌 Database <a name="database"></a>

The preferred database is MongoDB.

The first step is install Docker on Linux

MariaDB - SQL

docker pull mariadb

docker run -d \
--name ignisus-sql \
-e MYSQL_ROOT_PASSWORD=test \
-e MYSQL_DATABASE=ignisus \
-e MYSQL_USER=ignisus \
-e MYSQL_PASSWORD=test \
-p 3306:3306 \
mariadb

MongoDB - NoSQL

docker pull mongo

docker run -d --name ignisus -p 27017:27017 mongo

docker container ls

docker exec -it ignisus mongosh

ExistDB - XML

docker pull existdb/existdb:latest

docker run -d -p 8080:8080 --name ignisus-xml existdb/existdb:latest

### 📌 Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Guide to compile Android/Ios [Capacitor Full Guide](https://capacitorjs.com/docs/).

You can use more python versions with `curl https://pyenv.run | bash`.

## 🍎 Mac setup <a name="mac"></a>

Install lastest LTS of node.js and setup angular.

I recommend using nvm [NVM for Mac Os](https://github.com/nvm-sh/nvm#troubleshooting-on-macos)

From here you can follow the [Linux guide](#linux) to continue.

## 🪟 Windows setup <a name="windows"></a>

Install lastest LTS of node.js and setup angular.

Recommend using nvm [NVM for Windows](https://github.com/coreybutler/nvm-windows)

Recommend using WSL [WSL for Windows](https://learn.microsoft.com/en-us/windows/wsl/install)

From here you can follow the [Linux guide](#linux) to continue.

# 📑 Wikis: <a name="wikis"></a>

## 📌 StoryBook <a name="storybook"></a>

[Link](https://gitlab.com/ignisus/pwa/-/wikis/StoryBook)

# 🫂 Acknowledgments: <a name="acknowledgments"></a>
