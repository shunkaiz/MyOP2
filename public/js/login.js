$(function(){
	$("#loginUsername").blur(function(event){
	$(this).popover('hide');
		$(this).popover('hide');
		if($(this).val() == ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if($(this).val().length<6){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else{
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});	


	$("#loginEmail").blur(function(){	   			
		$email = $(this).val();
		$(this).popover('hide');
		if($(this).val() === ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test($email ))){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else{
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});


	$("#loginPassword").blur(function(){	   			
		$(this).popover('hide');
		if($(this).val() == ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}
		else{
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});	


	$("#loginRePassword").blur(function(){	   			
		$psw = $("#loginPassword").val();
		$(this).popover('hide');
		if($(this).val() == ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if($psw === $(this).val()){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}else{
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});


	$("#loginSubmit").click(function(){
		event.preventDefault();	
		if(!$("#email2").val() || !$("#password2").val()){
			alert("Username or Password cannot be empty!");
		}else{
		
			
	   		/* php post method*/
			$.post('../myop/php/user-verify.php', $("#form2").serialize(), function(response) {
			   	//console.log(response.name);
			   	if(response.name){
			   		$("#myModa2").modal('hide');
			   		$("#signUp").hide();
			   		$("#signIn").hide();
			   		$("#wel").show();
			   		$(".navbar-right").find(".dropdown").show();
			   		$(".user-sm").html(response.name);
			   		
			   	}else{
			   		alert("Incorrect Username or Password!");
			   		$("#email2").val("");
			   		$("#password2").val("");
			   	}		
			}, "json");
		}
		
	   	});	
});