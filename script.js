//your JS code here. If required.
function writeOnDOMLoad(){
	let textNode = document.createTextNode("DOM load success")
	var body = document.body;       
	body.appendChild(textNode)
}

document.addEventListener("DOMContentLoaded", writeOnDOMLoad);