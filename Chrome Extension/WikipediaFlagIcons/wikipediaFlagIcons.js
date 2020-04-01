// Name:            Wikipedia Flag Icons
// Description:     This script display flag icons to Wikipedia languages list on left sidebar.
// Author:          Davide Violante - https://github.com/DavideViolante/		
// DownloadURL:     https://github.com/DavideViolante/Wikipedia-Flag-Icons/

// Flag icons by http://www.famfamfam.com/lab/icons/flags/

(function () {

  function chromeGetUrl(str) {
    return chrome.extension.getURL(`flags/${str}.png`);
  }


  function getFirstElemByClassName(className) {
    return document.getElementsByClassName(className)[0];
  }

  const currentUrl = window.location.href;
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

  // For each language add the img element with the flag
  for (const prop in flagLangCode) {
    const spanElem1 = document.createElement('span');
    const langElem = getFirstElemByClassName(`interlanguage-link interwiki-${prop}`);
    if (langElem) {
      langElem.insertBefore(spanElem1, langElem.firstChild);
      spanElem1.innerHTML = `<img src="${chromeGetUrl(flagLangCode[prop])}" alt="${flagLangCode[prop]}" title="${flagLangCode[prop]}"> `;
    }
  }

  // Show the current flag near the title
  const currentLang = currentUrl.split('.')[0].substring(8);
  const pageTitleElem = document.getElementById('firstHeading');
  const spanElem2 = document.createElement('span');
  if (pageTitleElem) {
    pageTitleElem.appendChild(spanElem2);
    spanElem2.innerHTML = ` <img src="${chromeGetUrl(flagLangCode[currentLang])}" alt="Current language" title="Current language">`;
  }

  chrome.storage.sync.get(['primaryLang', 'secondaryLang'], function (values) {
    // Show the secondary flag with link near the title
    if (values.primaryLang !== values.secondaryLang && pageTitleElem) {
      const spanElem3 = document.createElement('span');
      // Visiting primary language page
      if (currentUrl.includes(`${values.primaryLang}.wikipedia`)) {
        pageTitleElem.appendChild(spanElem3);
        const secondaryLangElem = getFirstElemByClassName(`interlanguage-link interwiki-${values.secondaryLang}`);
        if (secondaryLangElem) {
          const { href, title } = secondaryLangElem.lastChild;
          spanElem3.innerHTML = ` <a href="${href}"><img src="${chromeGetUrl(flagLangCode[values.secondaryLang])}" alt="${title}" title="${title}"></a>`;
        }
      // Visiting secondary language or other language page
      } else {
        pageTitleElem.appendChild(spanElem3);
        const primaryLangElem = getFirstElemByClassName(`interlanguage-link interwiki-${values.primaryLang}`);
        if (primaryLangElem) {
          const { href, title } = primaryLangElem.lastChild;
          spanElem3.innerHTML = ` <a href="${href}"><img src="${chromeGetUrl(flagLangCode[values.primaryLang])}" alt="${title}" title="${title}"></a>`;
        }
      }
    }
  });

})();
