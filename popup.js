var url = 'https://raw.githubusercontent.com/Chichigami/wikipediagame/main/dailylink.json';
var dailyStart, dailyEnd

fetch(url)
  .then(response => {
    return response.text();
  })
  .then(data => {
    data = JSON.parse(data)
    dailyStart = data.start
    dailyEnd = data.end
  })

document.getElementById('navigateButton').addEventListener('click', () => {
    chrome.tabs.create({ url: dailyStart });
});