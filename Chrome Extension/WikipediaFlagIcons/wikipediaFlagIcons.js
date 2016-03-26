// Name:            Wikipedia Flag Icons
// Description:     This script display flag icons to Wikipedia languages list on left sidebar.
// Author:          Davide Violante - https://github.com/DavideViolante/		
// DownloadURL:     https://github.com/DavideViolante/Wikipedia-Flag-Icons/

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
			element.innerHTML = '<img src="'+chrome.extension.getURL("flags/"+flagLangCode[prop]+".png")+'"> ';
		}
	}
	
})();
