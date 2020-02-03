
var pass = document.querySelector('input')

var first =0;


document.querySelector('.button').addEventListener('click', ask)
let re = localStorage.getItem("cook")||0
if (re === "ray"){
		document.querySelector('section').style.display="none"
		document.querySelector('main').style.display="block"
}

function ask(){
	if (pass.value.toLowerCase() === "ray"){
		const re ="ray"
		localStorage.setItem("cook", re)
		document.querySelector('section').style.display="none"
		document.querySelector('main').style.display="block"
	}
	else if (localStorage.getItem("cook") === "ray"){
		document.querySelector('section').style.display="none"
		document.querySelector('main').style.display="block"
	}
	else{
		pass.value = "";
		document.querySelector('section h6').innerText= "Hint: It's end with letter y."
	}
}



