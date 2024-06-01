document.getElementById('navigateButton').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://en.wikipedia.org/wiki/Special:Random' });
});