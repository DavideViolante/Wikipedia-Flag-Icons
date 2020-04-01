// Saves options to chrome.storage.sync.
function saveOptions() {
  const primaryLang = document.getElementById('primaryLang').value;
  const secondaryLang = document.getElementById('secondaryLang').value;
  chrome.storage.sync.set({ primaryLang, secondaryLang }, function() {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

// Restores select box state using the preferences stored in chrome.storage.
function restoreOptions() {
  // Use default value
  chrome.storage.sync.get(['primaryLang', 'secondaryLang'], function(values) {
    document.getElementById('primaryLang').value = values.primaryLang;
    document.getElementById('secondaryLang').value = values.secondaryLang;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
