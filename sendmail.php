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
    $json['error'] = '';
    $question = $_POST['question'];
    $name     = $_POST['name'];
    $email    = $_POST['email'];
    $phone    = $_POST['phone'];
    if ((utf8_strlen(trim($question < 1)))) {
        $json['error']['question'] = 'Заполните поле "Ваш вопрос"';
    }
    if ((utf8_strlen(trim($name['name'])) < 1)) {
        $json['error']['name'] = 'Заполните поле "Ваше имя"';
    }
    if(!empty($email['email'])){
        if ((utf8_strlen($email) > 96) || !preg_match('/^[^\@]+@.*.[a-z]{2,15}$/i', $email)) {
            $json['error']['email'] = 'Некорректный формат';
        }
    }
    if ((utf8_strlen($phone) < 15)) {
        $json['error']['telephone'] = 'Количество символо должно быть не меньше 7';
    }
    else{
        if (!preg_match('/^\+?\d[\d\(\)\ \-\+]{4,15}\d$/', $this->request->post['telephone'])) {
            $json['error']['telephone'] = $this->language->get('error_telephone');
        }
    }
    print_r($_POST);

    echo json_encode($json);

}