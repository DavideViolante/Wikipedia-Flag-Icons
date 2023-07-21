// This extension was created with the help of Chat GPT
const flagLangCode = {
  en: 'gb', de: 'de', es: 'es', fr: 'fr', it: 'it', nl: 'nl', ja: 'jp', pl: 'pl', ru: 'ru', sv: 'se',
  vi: 'vn', id: 'id', ms: 'my', cs: 'cz', ko: 'kr', hu: 'hu', no: 'no', pt: 'pt', ro: 'ro', sr: 'rs',
  fi: 'fi', tr: 'tr', uk: 'ua', zh: 'cn', bs: 'ba', bg: 'bg', da: 'dk', et: 'ee', el: 'gr', he: 'il',
  ge: 'ge', uz: 'uz', am: 'et', arz: 'eg', az: 'az', be: 'by', bi: 'vu', bn: 'bd', hy: 'am', is: 'is',
  hr: 'hr', lv: 'lv', lt: 'lt', sk: 'sk', sl: 'si', th: 'th', ga: 'ie', ka: 'ge', kk: 'kz', ne: 'np',
  kl: 'gl', km: 'kh', ky: 'kg', lb: 'lu', lo: 'la', mg: 'mg', mk: 'mk', mn: 'mn', mt: 'mt', ps: 'af',
  rw: 'rw', si: 'lk', sm: 'ws', so: 'so', sq: 'al', tg: 'tj', tk: 'tm', ur: 'pk', uz: 'uz',
  hi: 'in', ca: 'catalonia', eo: 'eo', sco: 'scotland', tet: 'tl'
};

// Define a function to get the flag URL based on the language code
function getFlagUrl(langCode) {
  return chrome.runtime.getURL(`images/flags/${flagLangCode[langCode]}.png`);
}

// Function to add the image element inside the link
function addFlagImage(link, prop) {
  const img = document.createElement('img');
  img.src = getFlagUrl(prop);
  img.alt = prop;
  img.title = prop;
  img.style.marginRight = '5px'; // Add 5px space between the image and text (adjust as needed)
  link.insertBefore(img, link.firstChild);
}

// Find links with the specified selector and apply the flag as a child inside the link
const links = document.querySelectorAll('.interlanguage-link');
links.forEach(link => {
  // Get the language code from the class name (e.g., 'interwiki-en' -> 'en')
  const prop = link.className.match(/interwiki-(\w+)/)[1];
  addFlagImage(link, prop);
});