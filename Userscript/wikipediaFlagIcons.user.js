// ==UserScript==
// @name            Wikipedia Flag Icons
// @description     Display flag icons to Wikipedia languages list on left sidebar.
// @icon            http://en.wikipedia.org/favicon.ico
// @version         2016.08.12 (1.2)
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

// customize the following 2 vars
var primaryLanguage = "en";
var secondaryLanguage = "en";

var flagUrl = "https://github.com/DavideViolante/Wikipedia-Flag-Icons/raw/master/Chrome%20Extension/WikipediaFlagIcons/flags/";

(function(){

	var flagLangCode = {
		en: "gb", de: "de", es: "es", fr: "fr", it: "it", nl: "nl", ja: "jp", pl: "pl", ru: "ru", sv: "se",
		vi: "vn", id: "id", ms: "my", cs: "cz", ko: "kr", hu: "hu", no: "no", pt: "pt", ro: "ro", sr: "rs",
		fi: "fi", tr: "tr", uk: "ua", zh: "cn", bs: "ba", bg: "bg", da: "dk", et: "ee", el: "gr", he: "il",
		ge: "ge", uz: "uz", am: "et", arz: "eg", az: "az", be: "by", bi: "vu", bn: "bd", hy: "am", is: "is",
		hr: "hr", lv: "lv", lt: "lt", sk: "sk", sl: "si", th: "th", ga: "ie", ka: "ge", kk: "kz", ne: "np",
		kl: "gl", km: "kh", ky: "kg", lb: "lu", lo: "la", mg: "mg", mk: "mk", mn: "mn", mt: "mt", ps: "af",
		rw: "rw", si: "lk", sm: "ws", so: "so", sq: "al", tg: "tj", tk: "tm", ur: "pk", uz: "uz", 
		hi: "in", ca: "catalonia", eo: "eo", sco: "scotland", tet: "tl"
	};

	// show the flags in language sidebar
	for(var prop in flagLangCode) {
		var element = document.createElement("span");
		var langClass = document.getElementsByClassName("interlanguage-link interwiki-"+prop)[0];
		if(langClass) {
			langClass.insertBefore(element, langClass.firstChild);
			element.innerHTML = '<img src="'+flagUrl+flagLangCode[prop]+'.png"> ';
		}
	}

	// show the current flag near the title
	var currentLang = window.location.href.split(".")[0].substring(8);
	var titleClass = document.getElementById("firstHeading");
	var element2 = document.createElement("span");
	if(titleClass) {
		titleClass.appendChild(element2);
		element2.innerHTML = ' <img src="'+flagUrl+flagLangCode[currentLang]+'.png" alt="Current" title="Current">';
	}
    if(window.location.href.indexOf(primaryLanguage+".wikipedia") !== -1) {
		var element3 = document.createElement("span");
		if(titleClass) {
			titleClass.appendChild(element3);
			var auxLangUrl = document.getElementsByClassName("interlanguage-link interwiki-"+secondaryLanguage)[0];
			if(auxLangUrl) {
				auxLangUrl = auxLangUrl.lastChild.href;
				element3.innerHTML = ' <a href="'+auxLangUrl+'"><img src="'+flagUrl+flagLangCode[secondaryLanguage]+'.png"></a>';
			}
		}
	} else if(window.location.href.indexOf(secondaryLanguage+".wikipedia") !== -1) {
		var element4 = document.createElement("span");
		if(titleClass) {
			titleClass.appendChild(element4);
			var auxLangUrl = document.getElementsByClassName("interlanguage-link interwiki-"+primaryLanguage)[0];
			if(auxLangUrl) {
				auxLangUrl = auxLangUrl.lastChild.href;
				element4.innerHTML = ' <a href="'+auxLangUrl+'"><img src="'+flagUrl+flagLangCode[primaryLanguage]+'.png"></a>';
			}
		}
	} else {
		if(currentLang !== primaryLanguage) {
			var element5 = document.createElement("span");
			if(titleClass) {
				titleClass.appendChild(element5);
				var auxLangUrl = document.getElementsByClassName("interlanguage-link interwiki-"+primaryLanguage)[0];
				if(auxLangUrl) {
					auxLangUrl = auxLangUrl.lastChild.href;
					element5.innerHTML = ' <a href="'+auxLangUrl+'"><img src="'+flagUrl+flagLangCode[primaryLanguage]+'.png"></a>';
				}
			}
		}
	}
	
})();
