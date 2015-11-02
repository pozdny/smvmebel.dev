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
            // Продолжаем проверку данных формы
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

    print_r($_POST);

    echo json_encode($json);

}