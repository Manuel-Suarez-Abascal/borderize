// script to toggle the extension on and off
document.getElementById('toggle-switch').addEventListener('change', function() {
    chrome.runtime.sendMessage({toggle: this.checked});
});
