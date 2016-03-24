// @name            Wikipedia Flag Icons
// @description     This script adds flag icons to Wikipedia languages list.
// @icon            http://en.wikipedia.org/favicon.ico
// @version         2015.03.24 (0.1)
// @namespace       wikilangflags
// @author          https://github.com/davideviolante/
// @downloadURL     https://github.com/davideviolante/
// @grant           none
// @include         http*://*.wikipedia.org/wiki/*
// @include         http*://*.wiktionary.org/wiki/*
// @include         http*://*.wikiversity.org/wiki/*
// @include         http*://*.wikisource.org/wiki/*
// @include         http*://*.wikibooks.org/wiki/*
// @include         http*://*.wikiquote.org/wiki/*
// @include         http*://*.wikinews.org/wiki/*

// Flag icons by http://www.famfamfam.com/lab/icons/flags/

(function(){

	var wikiLangCode = ["en", "de", "es", "fr", "it", "nl", "ja", "pl", "ru", "sv", "vi", "id", "ms",
						"cs", "ko", "hu", "no", "pt", "ro", "sr", "fi", "tr", "uk", "zh", "bs", "bg",
						"da", "et", "el", "he", "hr", "lv", "lt", "nn", "sk", "sl", "th",
						"hi", "ca", "simple", "eo"];

	var flagLangCode = {
		en: "gb", de: "de", es: "es", fr: "fr", it: "it", nl: "nl", ja: "jp", pl: "pl", ru: "ru", sv: "se",
		vi: "vn", id: "id", ms: "my", cs: "cz", ko: "kr", hu: "hu", no: "no", pt: "pt", ro: "ro", sr: "rs",
		fi: "fi", tr: "tr", uk: "ua", zh: "cn", bs: "ba", bg: "bg", da: "dk", et: "ee", el: "gr", he: "il",
		hr: "hr", lv: "lv", lt: "lt", nn: "no", sk: "sk", sl: "si", th: "th",
		hi: "in", ca: "catalonia", simple: "gb", eo: "eo"
	};

	for(var i=0; i<wikiLangCode.length; i++) {
		var element = document.createElement("span");
		var langClass = document.getElementsByClassName("interlanguage-link interwiki-"+wikiLangCode[i])[0];
		if(langClass) {
			langClass.insertBefore(element, langClass.firstChild);
			element.innerHTML = '<img src="https://raw.githubusercontent.com/DavideViolante/Wikipedia-Flag-Icons/master/flags/'+flagLangCode[wikiLangCode[i]]+'.png"> ';
		}
		
	}
	

})();
