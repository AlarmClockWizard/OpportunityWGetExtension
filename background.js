debugger; //set an default breakpoint for the debugger

function notify(message) 
{
  console.log("background script received message");

  chrome.notifications.create(
  {
    "type": "basic",
    "iconUrl": chrome.extension.getURL("icons/link-48.png"),
    "title": "title!!!",
    "message": "message!!!"
  });
}


chrome.runtime.onMessage.addListener(notify);
chrome.browserAction.setIcon({path:"images/iconActiveOnline.png"});