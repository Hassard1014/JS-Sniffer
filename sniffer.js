var h = screen.availHeight;
var w = screen.availWidth;


function getBrowserName () {
    var lsBrowser = navigator.userAgent;
    
    if (lsBrowser.indexOf("MSIE") >= 0) {
        return "MSIE";
    }  else if (lsBrowser.indexOf("Firefox") >= 0 ) {
        return "Firefox";
    }  else if (lsBrowser.indexOf("Chrome") >= 0) {
        return "Chrome";
    }  else if (lsBrowser.indexOf("Safari") >= 0) {
        return "Safari";
    }  else if (lsBrowser.indexOf("Opera") >= 0) {
        return "Opera";
    }  else {
        return "Unknown";
    }
}

function getBrowserVersion() {
    var ua = navigator.userAgent;
    var browser = getBrowserName();
    var findIndex = ua.indexOf(browser) + browser.length + 1;
    var browserVersion = parseFloat(
        ua.substring(findIndex, findIndex + 3));
    
    return browserVersion;
}

var browserName = getBrowserName();
var browserVersion = getBrowserVersion();

if (browserName == "MSIE") {
    if (browserVersion < 9) {
        document.write ("Your version of IE is too old");
    } else {
        document.write("You are using version " + browserVersion + " of the IE browser to view this page in a browser whose inner window that is "+ w +" pixels wide and "+ h  +" pixels tall.");
    }
}  else if (browserName == "Firefox") {
    document.write("You are using version " + browserVersion + " of the Firefox browser to view this page in a browser whose inner window that is "+ w +" pixels wide and "+ h  +" pixels tall.");
}  else if (browserName == "Safari") {
    document.write("You are using version " + browserVersion + " of the Safari browser to view this page in a browser whose inner window that is "+ w +" pixels wide and "+ h  +" pixels tall.");
}  else if (browserName == "Chrome") {
    document.write("You are using version " + browserVersion + " of the Chrome browser to view this page in a browser whose inner window that is "+ w +" pixels wide and "+ h +" pixels tall.");
}  else if (browserName == "Opera") {
    document.write("You are using version " + browserVersion + " of the Opera browser to view this page in a browser whose inner window that is "+ w +" pixels wide and "+ h +" pixels tall.");
}  else {
    document.write("Sorry this browser version is not supported.");
}

