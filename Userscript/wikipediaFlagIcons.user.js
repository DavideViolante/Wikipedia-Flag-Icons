// ==UserScript==
// @name            Wikipedia Flag Icons
// @description     Display flag icons to Wikipedia languages list on left sidebar.
// @icon            http://en.wikipedia.org/favicon.ico
// @version         2015.03.26 (1.0)
// @namespace       wikiflagicons
// @author          https://github.com/DavideViolante/
// @downloadURL     https://github.com/DavideViolante/Wikipedia-Flag-Icons/raw/master/Userscript/wikipediaFlags.user.js
// @grant           none
// @include         http*://*.wikipedia.org/wiki/*
// @include         http*://*.wikimedia.org/*
// @include         http*://*.wiktionary.org/wiki/*
// @include         http*://*.wikibooks.org/wiki/*
// @include         http*://*.wikidata.org/*
// @include         http*://*.wikinews.org/wiki/*
// @include         http*://*.wikiquote.org/wiki/*
// @include         http*://*.wikisource.org/wiki/*
// @include         http*://*.wikiversity.org/wiki/*
// @include         http*://*.wikivoyage.org/*
// ==/UserScript==

// Flag icons by http://www.famfamfam.com/lab/icons/flags/

(function(){

	var flagLangCode = {
		en: "usgb", de: "de", es: "es", fr: "fr", it: "it", nl: "nl", ja: "jp", pl: "pl", ru: "ru", sv: "se",
		vi: "vn", id: "id", ms: "my", cs: "cz", ko: "kr", hu: "hu", no: "no", pt: "pt", ro: "ro", sr: "rs",
		fi: "fi", tr: "tr", uk: "ua", zh: "cn", bs: "ba", bg: "bg", da: "dk", et: "ee", el: "gr", he: "il",
		hr: "hr", lv: "lv", lt: "lt", nn: "no", sk: "sk", sl: "si", th: "th",
		hi: "in", ca: "catalonia", simple: "gb", eo: "eo"
	};

	for(var prop in flagLangCode) {
		var element = document.createElement("span");
		var langClass = document.getElementsByClassName("interlanguage-link interwiki-"+prop)[0];
		if(langClass) {
			langClass.insertBefore(element, langClass.firstChild);
			element.innerHTML = '<img src="https://github.com/DavideViolante/Wikipedia-Flag-Icons/blob/master/Chrome%20Extension/WikipediaFlagIcons/flags/'+flagLangCode[prop]+'.png"> ';
		}
	}
	
})();
