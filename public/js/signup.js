$(function(){
	$("#signupUsername").blur(function(){
		$(this).popover('hide');
		if($(this).val() === ""){
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

	$("#signupEmail").blur(function(event){
		$value = $(this).val();
		$(this).popover('hide');
		$(this).popover('hide');
		if($(this).val() === ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test($value ))){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else{
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
			$(this).popover('hide');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});
	$ycode = "10000";
	$("#ycode").blur(function(){ 			
		$(this).popover('hide');
		if($(this).val() === ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if($(this).val() != $ycode){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else if($(this).val() == $ycode){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});
	   			   		   			
	$("#signupPassword").blur(function(){	   			
		$(this).popover('hide');
		if($(this).val() === ""){
			$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else{
         	$($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});

	$("#repsw").blur(function(){	   			
		$psw = $("#signupPassword").val();
		$(this).popover('hide');
		if($(this).val() ===""){
         $($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ban-circle customempty');
		}else if($psw != $(this).val()){
         $($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-remove-circle customfalse');
		}else{
         $($(this).parent()).find(".glyIcon").attr('class', 'glyIcon glyphicon glyphicon-ok-circle customtrue');
		}	   			
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).popover('show');
	});

	/*
transition of ycode block
	*/
	$("#ycode").hide();

	$("#v-email").click(function(){
		$email = $(this).parents("#form1").find("#email");
		if($(this).parents("#form1").find("#emaili").children("span").last().hasClass("customtrue")){
			$(".ycode-box").hide();
			$("#ycode").show();
			var $address = $email.val();
			$.post("../myop/php/email-verify.php", {to: $address}, function(data){
				$ycode = data;
			});
		}else{
			$email.popover('show');
		}
	});

	// $("#signupSubmit").click(function(event){
	// 	/*
	// 	$.ajax({type:'POST', url: 'localhost:8080/login/login.php', data:{username: $("#username").val(), password: $("#password").val()}, success:function(response){
	// 		$("#resText").html(response);
	// 		}
	// 	});
	// 	*/
	// 	var passed = true;
	// 	event.preventDefault();
	// 	$(".inputContent").each(function(){
	// 		if(!$(this).children("glyIcon").last().hasClass('customtrue')){
	// 			passed = false;
	// 		var $name = $(this).find("input").prop("name");
	// 			alert("Please look at the "+$name+" part.");
	// 			return false;
	// 		}
	// 	});
		
	// 	/* php post method*/
 //   	if(passed){		
 //   			var $x = $("#uname").val();
 //   			var $z = $("#email").val();
 //   			var $y = $("#password").val();
 //   			console.log($x +" "+ $z+" "+$y);
 //   			$.post('../myop/php/db_connect.php', $("#form1").serialize(), function(response) {
 //   				console.log(response);
 //   				$("#submit").parent().append("<span class='namen'>Submitted!</span>");
 //   				$("#submit").siblings(".namen").delay("slow").fadeOut(200);
 //   			});
 //   	}
	// });	
});