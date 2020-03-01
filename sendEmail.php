<?php

  //Informację o emailu, na który będzie wysyłana wiadomość
  $admin_email = "mdinvestments2018@gmail.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comment'];

  //wysyłamy email
  mail($admin_email, "$subject", $comment, "From:" . $email);

  //komunikat potwierdzający
  echo "Dziękujemy za kontakt z nami!";
  }

?>