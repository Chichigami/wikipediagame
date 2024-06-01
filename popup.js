var url = 'https://raw.githubusercontent.com/Chichigami/wikipediagame/main/dailylink.txt';

fetch(url)
  .then(response => {
    return response.text();
  })
  .then(data => { 
    console.log(data[start]);
  })


document.getElementById('navigateButton').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://en.wikipedia.org/wiki/Special:Random' });
});