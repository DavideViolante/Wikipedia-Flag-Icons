chrome.browserAction.onClicked.addListener(function(activeTab) {
  chrome.tabs.create({ 'url': 'options.html' });
});

chrome.storage.sync.set({ primaryLang: 'en', secondaryLang: 'en' }, function() {});
