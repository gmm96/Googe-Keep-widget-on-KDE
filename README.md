# Google Keep widget for KDE Plasma 5

### KDE 5 widget to display notes from Google Keep in desktop screen.

<p align="center">
    <a href="https://kde.org/"><img src="https://avatars.githubusercontent.com/u/14312869?s=200&v=4" alt="KDE logo" width="70" style="border-radius:10%"/></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://kde.org/es/plasma-desktop/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/KDE_Plasma_5_banner.png" alt="Plasma 5" height="70" style="border-radius:10%"/></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://store.kde.org/p/998902/"><img src="https://images.pling.com/cache/85x85-2/img/00/00/36/37/54/998902/7e86dd71b4f9a7377904a03080e58168743e1.png" alt="Webslice" height="70" style="border-radius:10%"/></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://keep.google.com"><img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Google_Keep_icon_%282015-2020%29.svg" alt="Google Keep" height="73" style="border-radius:10%"/></a>
</p>



## Installation

Firstly, we need to install **qt5-webview**, which it's the only **dependency** the plasmoid has.

    sudo pacman -Syu qt5-webview

We can install [**Webslice** KDE 5 Applet](https://store.kde.org/p/998902/) by going to the website, downloading the zip and installing the plugin, or we can just use KDE plugin installer either way.



## Usage

When all has been installed, it's time to configure it.

The plasmoid is designed to show just a note at the same time, so you should do the following configuration:
1. **Copy URL** of certain Google Keep note.
2. Go to desktop environment, **add a Webslice plasmoid**.
3. Open Webslice plasmoid configuration.
4. In *General tab*, **paste Google Keep note URL**.
5. In *Advanced tab*, copy content from file [GoogleKeepWidgetDesign.js](./GoogleKeepWidgetDesign.js) and paste it on 
tab's last field for **personalized javascript execution**.
6. Save settings.



## Screenshots

![Template Creator - Dolphin Service Menu](screenshots/screenshot1.png "Template Creator - Dolphin Service Menu")
