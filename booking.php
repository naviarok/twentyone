<?php 

    $name     = trim($_POST['name']);
    $lastname = trim($_POST['lastname']);
    $phone    = trim($_POST['phone']);
    $email    = trim($_POST['email']);
    $date     = trim($_POST['date']);
    $time     = trim($_POST['time']);

    if(empty($name) AND empty($lastname) AND empty($phone) AND empty($email) AND empty($date) AND empty($time))
    {
        exit;
    }
    else 
    {
        $recipient = 'info@companyemail.com';
        $subject   = 'Book a table';

        $mail_body =
            "Name:  "     . $name   ."\r\n" .
            "Lastname: "  . $lastname ."\r\n" .
            "Phone: "     . $phone ."\r\n" .
            "Email: "     . $email ."\r\n" .
            "Date: "      . $date ."\r\n" .
            "Time:  "     . $time;


        $header = "From: " . $name . " <" . $recipient . ">\r\n";
        mail($recipient, $subject, $mail_body, $header);
            
        echo 'Send';
    }

     