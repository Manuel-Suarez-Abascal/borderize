// The background script is used to instruct the extension when it should be active in all pages
// if toggle is true, execute content.js
// if toggle is false, remove all border styles from all elements in the page
let toggle = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.getToggle) {
        sendResponse({toggle: toggle});
    } else if (request.toggle !== undefined) {
        toggle = request.toggle;

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (toggle) {
                chrome.tabs.executeScript(tabs[0].id, {
                    file: 'content.js'
                });
            } else {
                chrome.tabs.executeScript(tabs[0].id, {
                    code: 'document.querySelectorAll("*").forEach(function(node) { if(node.style) { node.style.removeProperty("border"); } });'
                });
            }
        });
    }
});
