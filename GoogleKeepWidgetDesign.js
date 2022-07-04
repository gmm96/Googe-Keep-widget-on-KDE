var background = document.getElementsByClassName("VIpgJd-TUo6Hb-xJ5Hnf XKSfm-L9AdLc-AHe6Kc eo9XGd")[0];
background.style.opacity="0.97";
background.style.filter="blur(5px)";
background.style.webkitFilter = "blur(5px);";

var outestBox = document.getElementsByClassName("VIpgJd-TUo6Hb XKSfm-L9AdLc eo9XGd")[0];
outestBox.style.height="95%";
outestBox.style.width="99.8%";
outestBox.style.left="1px";
outestBox.style.top="30px";

var outerBox = outestBox.getElementsByClassName("IZ65Hb-n0tgWb IZ65Hb-bJ69tf oT9UPb IZ65Hb-QQhtn")[0];
outerBox.style.width="100%";
outerBox.style.height="95%";

var innerBox = outerBox.getElementsByClassName("IZ65Hb-TBnied zTETae-h1U9Be-hxXJme")[0];
innerBox.style.width="100%";
innerBox.style.height="100%";

var innestBox = innerBox.getElementsByClassName("IZ65Hb-s2gQvd")[0];
innestBox.style.height="93%";
innestBox.style.maxHeight="93%";
innestBox.style.minHeight="93%";

var modifiedLabel = innestBox.getElementsByClassName("IZ65Hb-jfdpUb")[0];
modifiedLabel.remove();

var cancelButton = innerBox.getElementsByClassName("Q0hgme-LgbsSe Q0hgme-fmcmS-LgbsSe IZ65Hb-iib5kc VIpgJd-LgbsSe")[0];
cancelButton.remove();

var toolsBox = innerBox.getElementsByClassName("IZ65Hb-INgbqf")[0];
toolsBox.style.display="flex";
toolsBox.style.justifyContent="space-evenly";
toolsBox.style.alignContent="space-between";