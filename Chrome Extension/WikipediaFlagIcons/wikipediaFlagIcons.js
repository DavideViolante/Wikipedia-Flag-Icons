// Name:            Wikipedia Flag Icons
// Description:     This script display flag icons to Wikipedia languages list on left sidebar.
// Author:          Davide Violante - https://github.com/DavideViolante/		
// DownloadURL:     https://github.com/DavideViolante/Wikipedia-Flag-Icons/

// Flag icons by http://www.famfamfam.com/lab/icons/flags/

(function(){

	var chromeGetUrl = function(string) {
		return chrome.extension.getURL("flags/"+string+".png");
	}

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
			element.innerHTML = '<img src="'+chrome.extension.getURL("flags/"+flagLangCode[prop]+".png")+'"> ';
		}
	}

	// show the current flag near the title
	var currentLang = window.location.href.split(".")[0].substring(8);
	var titleClass = document.getElementById("firstHeading");
	var element2 = document.createElement("span");
	if(titleClass) {
		titleClass.appendChild(element2);
		element2.innerHTML = ' <img src="'+chromeGetUrl(flagLangCode[currentLang])+'" alt="Current" title="Current">';
	}
	chrome.storage.sync.get(["primaryLanguage", "secondaryLanguage"], function(values) {
        if(window.location.href.indexOf(values.primaryLanguage+".wikipedia") !== -1) {
			var element3 = document.createElement("span");
			if(titleClass) {
				titleClass.appendChild(element3);
				var auxLangUrl = document.getElementsByClassName("interlanguage-link interwiki-"+values.secondaryLanguage)[0];
				if(auxLangUrl) {
					auxLangUrl = auxLangUrl.lastChild.href;
					element3.innerHTML = ' <a href="'+auxLangUrl+'"><img src="'+chromeGetUrl(flagLangCode[values.secondaryLanguage])+'"></a>';
				}
			}
		} else if(window.location.href.indexOf(values.secondaryLanguage+".wikipedia") !== -1) {
			var element4 = document.createElement("span");
			if(titleClass) {
				titleClass.appendChild(element4);
				var auxLangUrl = document.getElementsByClassName("interlanguage-link interwiki-"+values.primaryLanguage)[0];
				if(auxLangUrl) {
					auxLangUrl = auxLangUrl.lastChild.href;
					element4.innerHTML = ' <a href="'+auxLangUrl+'"><img src="'+chromeGetUrl(flagLangCode[values.primaryLanguage])+'"></a>';
				}
			}
		} else {
			if(currentLang !== values.primaryLanguage) {
				var element5 = document.createElement("span");
				if(titleClass) {
					titleClass.appendChild(element5);
					var auxLangUrl = document.getElementsByClassName("interlanguage-link interwiki-"+values.primaryLanguage)[0];
					if(auxLangUrl) {
						auxLangUrl = auxLangUrl.lastChild.href;
						element5.innerHTML = ' <a href="'+auxLangUrl+'"><img src="'+chromeGetUrl(flagLangCode[values.primaryLanguage])+'"></a>';
					}
				}
			}
		}
    });
	
})();
