<?php
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$subject = $_POST["subject"];
$message = $_POST["message"];
 
$EmailTo = "placeofvino@gmail.com";
$email_Subject = "We Guard";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";

$Body .= "Subject: ";
$Body .= $subject;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $email_Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>