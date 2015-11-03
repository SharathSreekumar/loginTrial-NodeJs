window.onload = function(){
	$('#signup').css('display','none');
	//$('#createAcc').attr('disabled',true);
}

function hide(frame1,frame2,btn1,btn2){//(frame-to-disable, frame-to-enable, btn-to-deactivate, btn-to-activate)
	$(frame1).hide('slow');
	$(frame2).show('slow');
	$(btn1).removeClass('active');
	$(btn2).addClass('active');
}

function reset(){
	$('#email').value='';
	$('pass').value='';
	$('cnpass').value='';
}

function verify(){//verify(email,password,confirm-password)
	var x = document.forms["formCreate"]["email"].value;
	var y = document.forms["formCreate"]["pass"].value;
	var z = document.forms["formCreate"]["cnpass"].value;
    
    if (x == null || x == "" || y == null || y == "" || z == null || z == "") {
        alert("Please complete the form");
        return false;
    }else if (y!=z){
    	alert("Password Incorrect!");
    	return false;
    }
}

function verifyLogin() {
	var user = document.forms["formLogin"]["userid"].value;
	var pass = document.forms["formLogin"]["pass"].value;

	if(user==null||user==""||pass==null||pass==""){
		alert("Please enter UserId and Password");
        return false;	
	}
}