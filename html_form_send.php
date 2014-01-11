<html>
<head>
<style type="text/css">
* {
	margin: 0px;
	padding: 0px;
	border: 0px;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
body {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	color: #555;
/*	display: none;*/
}
a, a:visited {
	text-decoration: none;
	color: #3ac8e9;
}
a:hover {
	cursor: pointer;
	color: #9de4f4;
}
h1 {
	padding: 10px 0 30px 0;
	margin: 0 0 20px 0;
	font-size: 36px;
	font-weight: bold;
	color: #2a2a2a;
	border-bottom: 5px #2a2a2a solid;
}
</style>
</head>
<body>
<h1>Contact Us</h1>
<?php
if(isset($_REQUEST['email'])) {
     
    // CHANGE THE TWO LINES BELOW
    $email_to = "jeff_caspian@hotmail.com";
	//$email_to = "jooeasttesco@gmail.com";
     
    $email_subject = "Feedback from JooEastSB.com";
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go <a href=\"contact.html\">back</a> and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_REQUEST['first_name']) ||
        !isset($_REQUEST['last_name']) ||
        !isset($_REQUEST['email']) ||
        !isset($_REQUEST['telephone']) ||
        !isset($_REQUEST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $first_name = $_REQUEST['first_name']; // required
    $last_name = $_REQUEST['last_name']; // required
    $email_from = $_REQUEST['email']; // required
    $telephone = $_REQUEST['telephone']; // not required
    $comments = $_REQUEST['comments']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- place your own success html below -->
 
Thank you for contacting us. We will be in touch with you very soon.
</body>
</html>
<?php
}
die();
?>