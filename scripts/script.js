function signInButton() {

	var dom = document.getElementById('header-down-account-icon-signInID').style;
	if (dom.display == 'none') {
		dom.display = 'block';
		document.getElementById('SignIn').style.borderBottom = '4px solid rgba(255,255,255,1)';
	} else {
		dom.display = 'none';
		document.getElementById('SignIn').style.borderBottom = 'none';
	}
}

function validateFeedBack() {

	valid = true;
	
	//-------name validate--------
	validateNameFeedBack();
	if(document.getElementById('name').value == ''){
		document.getElementsByClassName("errName2")[1].style.display = 'inline-block';
		valid = false;
	}else {
		document.getElementsByClassName("errName2")[1].style.display = 'none';
	}

	//------email validate------
	if (document.getElementById('email').value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == 0){
		document.getElementsByClassName("errEmail")[0].style.display = 'none';
	}
	else {
		document.getElementsByClassName("errEmail")[0].style.display = 'inline-block';
		valid = false;
	}

	//------subject- menu validate------
	if (document.getElementById('subject-menu').value != 'select a subject') {

		document.getElementById("errSubject").style.display = 'none';
	}
	else {
		document.getElementById("errSubject").style.display = 'inline-block';
		valid = false;
	}

	//------message-field validate------
	if (document.getElementById('input-field').value != "") {

		document.getElementById("errTextarea").style.display = 'none';

	}
	else {
		document.getElementById("errTextarea").style.display = 'inline-block';
		valid = false;
	}


	//----------the return value----------
	return valid ? true : false;
}
function whenFocus(element) {
	element.style.backgroundColor = "yellow";

}

function whenBlur(element) {
	element.style.backgroundColor = "white";
}

function validateNameFeedBack() {

	var dom = document.getElementById('name');
	var domErr = document.getElementsByClassName("errName2")[0];

	if (dom.value.search(/^[^0-9]{1,}$/) != 0 && dom.value != '') {
		domErr.style.display = 'inline-block';
		valid = false;
	} else {
		domErr.style.display = 'none';
	}
}

function validateLogin() {
	var validate = true;

	if (document.getElementById('login-name').value == "") {
		validate = false;
		document.getElementById('errName').style.display = 'inline-block';
	} else {
		document.getElementById('errName').style.display = 'none';
	}

	if (document.getElementById('login-pass').value == "") {
		validate = false;
		document.getElementById('errPass').style.display = 'inline-block';
	} else {
		document.getElementById('errPass').style.display = 'none';
	}

	return validate ? true : false;
}

