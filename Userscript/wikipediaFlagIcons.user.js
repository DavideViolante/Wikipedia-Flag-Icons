// ==UserScript==
// @name            Wikipedia Flag Icons
// @description     Display flag icons to Wikipedia languages list on left sidebar.
// @icon            http://en.wikipedia.org/favicon.ico
// @version         2020.04.01 (2.0)
// @namespace       wikiflagicons
// @author          https://github.com/DavideViolante/
// @downloadURL     https://github.com/DavideViolante/Wikipedia-Flag-Icons/raw/master/Userscript/wikipediaFlags.user.js
// @grant           none
// @include         http*://*.wikipedia.org/*
// @include         http*://*.wikimedia.org/*
// @include         http*://*.wiktionary.org/*
// @include         http*://*.wikibooks.org/*
// @include         http*://*.wikidata.org/*
// @include         http*://*.wikinews.org/*
// @include         http*://*.wikiquote.org/*
// @include         http*://*.wikisource.org/*
// @include         http*://*.wikiversity.org/*
// @include         http*://*.wikivoyage.org/*
// ==/UserScript==

// Flag icons by http://www.famfamfam.com/lab/icons/flags/

// Customize the following 2 parameters
const primaryLang = 'en';
const secondaryLang = 'it';

const flagUrl = 'https://github.com/DavideViolante/Wikipedia-Flag-Icons/raw/master/Chrome%20Extension/WikipediaFlagIcons/flags/';

function getFirstElemByClassName(className) {
  return document.getElementsByClassName(className)[0];
}

(function () {

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
      spanElem1.innerHTML = `<img src="${flagUrl}${flagLangCode[prop]}.png" alt="${flagLangCode[prop]}" title="${flagLangCode[prop]}"> `;
    }
  }

  // Show the current flag near the title
  const currentLang = currentUrl.split('.')[0].substring(8);
  const pageTitleElem = document.getElementById('firstHeading');
  const spanElem2 = document.createElement('span');
  if (pageTitleElem) {
    pageTitleElem.appendChild(spanElem2);
    spanElem2.innerHTML = ` <img src="${flagUrl}${flagLangCode[currentLang]}.png" alt="Current language" title="Current language">`;
  }

  // Show the secondary flag with link near the title
  if (primaryLang !== secondaryLang && pageTitleElem) {
    const spanElem3 = document.createElement('span');
    // Visiting primary language page
    if (currentUrl.includes(`${primaryLang}.wikipedia`)) {
      pageTitleElem.appendChild(spanElem3);
      const secondaryLangElem = getFirstElemByClassName(`interlanguage-link interwiki-${secondaryLang}`);
      if (secondaryLangElem) {
        const { href, title } = secondaryLangElem.lastChild;
        spanElem3.innerHTML = ` <a href="${href}"><img src="${flagUrl}${flagLangCode[secondaryLang]}.png" alt="${title}" title="${title}"></a>`;
      }
    // Visiting secondary language or other language page
    } else {
      pageTitleElem.appendChild(spanElem3);
      const primaryLangElem = getFirstElemByClassName(`interlanguage-link interwiki-${primaryLang}`);
      if (primaryLangElem) {
        const { href, title } = primaryLangElem.lastChild;
        spanElem3.innerHTML = ` <a href="${href}"><img src="${flagUrl}${flagLangCode[primaryLang]}.png" alt="${title}" title="${title}"></a>`;
      }
    }
  }

})();
