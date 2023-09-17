//your JS code here. If required.
function writeOnDOMLoad(){
	let textNode = document.createTextNode("DOM load success")
	var body = document.body;  
	 while (body.firstChild) {
                body.removeChild(body.firstChild);
            }
	body.appendChild(textNode)
}

document.addEventListener("DOMContentLoaded", writeOnDOMLoad);