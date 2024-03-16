<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email_to = "dibyadyutidutta49@gmail.com"; // Change this to your email address
    $email_subject = "New message from Job Horizon Contact Form";

    $email_from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_message = "Name: ".$name."\n";
    $email_message .= "Email: ".$email_from."\n";
    $email_message .= "Subject: ".$subject."\n";
    $email_message .= "Message: \n".$message."\n";

    $headers = 'From: '.$email_from."\r\n" .
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send the email
    mail($email_to, $email_subject, $email_message, $headers);

    // Redirect back to the contact page with a success message
    header('Location: /contact?success=true');
    exit();
}
?>
