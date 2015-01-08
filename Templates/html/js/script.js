function $() {
	return document.querySelector.apply(document, arguments);
}

if (navigator.userAgent.toLowerCase().indexOf("xcode") != -1) {
	document.documentElement.classList.add("xcode");
}

$("#jump-to").addEventListener("change", function(e) {
	location.hash = this.options[this.selectedIndex].value;
});
