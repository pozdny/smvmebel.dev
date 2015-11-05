<?php
/**
 * Created by PhpStorm.
 * User: Valentina
 * Date: 02.11.2015
 * Time: 13:35
 */
header('Content-Type: application/json');
$json = array();
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $recaptcha = $_POST['g-recaptcha-response'];

    /*if(!empty($recaptcha))
    {
        include("getCurlData.php");
        $google_url="https://www.google.com/recaptcha/api/siteverify";
        $secret='6LepFhATAAAAABT2q2y2acSN4dez4--iFs9EoQr0';
        $ip = $_SERVER['REMOTE_ADDR'];
        $url = $google_url."?secret=".$secret."&response=".$recaptcha."&remoteip=".$ip;
        $res = getCurlData($url);
        $res = json_decode($res, true);
        //reCaptcha введена
        if($res['success'])
        {
            echo '123';
            //
        }
        else
        {
            echo '4444';
            $msg="Please re-enter your reCAPTCHA.";
        }


    }
    else
    {
        $msg="Please re-enter your reCAPTCHA.";
    }*/
    $json['error'] = '';
    $question = trim($_POST['question']);
    $name     = trim($_POST['name']);
    $email    = trim($_POST['email']);
    $phone    = $_POST['phone'];
    $to = 'pozdny@mail.ru'.', '; // Укажите е-mail, на который вы желаете получать заказы
    $to.= 'ppozdny@gmail.com';

    $site_name   = 'smvmebel.ru';
    $site_email  = 'pozdny@mail.ru';

    $subject = "=?utf-8?B?" . base64_encode("Запрос с сайта ".$site_name) . "?=";
    $message = '<html>
<head>
        <title>Посетитесь Вашего сайта отправил следующие данные:</title>
</head>
<body>
    <table style="border-collapse: collapse; width: 50%; border-top: 1px solid #DDDDDD; border-left: 1px solid #DDDDDD; margin-bottom: 20px;">
   <tr><td style="border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; background-color: #EFEFEF; padding: 7px; font-weight: bold; ">Имя:</td><td style="border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; background-color: #FFFFFF; padding: 7px;">'.$name.'</td></tr>
    <tr><td style="border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; background-color: #EFEFEF; padding: 7px; font-weight: bold; ">Телефон:</td><td style="border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; background-color: #FFFFFF; padding: 7px;">'.$phone.'</td></tr>
   <tr><td style="border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; background-color: #EFEFEF; padding: 7px; font-weight: bold; ">E-mail:</td><td style="border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; background-color: #FFFFFF; padding: 7px;">'.$email.'</td></tr>
   <tr><td style="border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; background-color: #EFEFEF; padding: 7px; font-weight: bold; ">Вопрос:</td><td style="border-right: 1px solid #DDDDDD; border-bottom: 1px solid #DDDDDD; background-color: #FFFFFF; padding: 7px;">'.$question.'</td></tr>
   </table>
</body>
</html>';


$header   = "From: \"{$site_name}\" <{$site_email}>\n";
$header.= "Content-type: text/html; charset=\"utf-8\"";
mail($to, $subject, $message, $header);
$json["success"] = "Ваше сообщение было отправлено!";
echo json_encode($json);

}