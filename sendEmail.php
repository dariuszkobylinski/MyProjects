<?php

// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['imienazwisko'];

// Tworzymy zmienną dla adresu email
$email = $_POST['adresEmail'];

// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "dariusz.kobylinski@wp.pl";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "mdinvestments2018@gmail.com";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Salon Kosmetyczny";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Dodajemy UTF-8 do naglowka naszej wiadomości

$naglowek = "";
$naglowek .= "Od:" . $odkogo . " \n";
$naglowek .= "Content-Type:text/plain;charset=utf-8";

// Wysyłamy wiadomość
mail($dokogo, $tytul, $wiadomosc, $naglowek);
//$sukces = mail($dokogo, $tytul, $wiadomosc, $naglowek);

// Przekierowywujemy na potwierdzenie
// if ($sukces){
//   print "<meta http-equiv=\"refresh\" content=\"0;URL=potwierdzenie.html\">";
// }
// else{
//   print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
// }
?>

