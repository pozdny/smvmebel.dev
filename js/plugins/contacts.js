/**
 * Created by Valentina on 02.11.2015.
 */
/**
 * Contact form
 */

$(document).ready(function(e) {
    var form = $('#form_sendmail');
    // ............CUSTOM VALIDATE METHODS.........................//
    $.validator.addMethod("requiredPhone", function(value, element, param) {
        value = value.replace('+7 (___) ___-__-__');

        if ( !this.depend( param, element ) ) {
            return "dependency-mismatch";
        }
        if ( element.nodeName.toLowerCase() === "select" ) {
            var val = $( element ).val();
            return val && val.length > 0;
        }
        if ( this.checkable( element ) ) {
            return this.getLength( value, element ) > 0;
        }
        return $.trim( value ).length > 0;
    }, "Укажите ваш телефон");
    $.validator.addMethod("onlyLetters", function(value, element, param) {
        return value.match(/^[�-�� \-]+$/i);
    }, "Допустим ввод только символов русского алфавита");
    $.validator.addMethod("minlengthPhone", function(value, element, param) {
        value = value.replace('+7(', '');
        value = value.replace('+7 (', '');
        value = value.replace('+7', '');
        value = value.replace('+7 ', '');
        value = value.replace('(', '');
        value = value.replace(')', '');
        value = value.replace(') ', '');
        value = value.replace(/-/g, '');
        value = value.replace(/ /g, '');
        value = value.replace(/_/g, '');

        var length = $.isArray( value ) ? value.length : this.getLength( $.trim( value ), element );
        return this.optional( element ) || length >= param;
    }, "Телефон должен быть не менее {0} символов");

    $.validator.addMethod("maxlengthPhone", function(value, element, param) {
        value = value.replace('+7(', '');
        value = value.replace('+7 (', '');
        value = value.replace('+7', '');
        value = value.replace('+7 ', '');
        value = value.replace('(', '');
        value = value.replace(')', '');
        value = value.replace(/-/g, '');
        value = value.replace(/ /g, '');
        value = value.replace(/_/g, '');
        var length = $.isArray( value ) ? value.length : this.getLength( $.trim( value ), element );
        return this.optional( element ) || length <= param;
    }, "Телефон должен быть не более {0} символов");
    $.validator.addMethod('phoneSimbols', function(value, element, param){
        return value.match(/^[0-9 \-\(\)\+]+$/);
    }, "Некорректный номер телефона");
    $('input[name=phone]').mask('+7 (999) 999-99-99',{placeholder:"+7 (___) ___-__-__ ", autoclear: false});
    // ............VALIDATE ZAMER FORM.........................//
    form.validate({
        debug:true,

        rules: {
            question: {
                required:true,
                maxlength : 300
            },
            name: {
                required:true,
                onlyLetters: true,
                minlength : 2
            },
            phone: {
                phoneSimbols:true,
                minlengthPhone: 10,
                maxlengthPhone: 10
            },
            email: {
                email: true
            }
        },
        messages: {
            question: {
                required: "Заполните поле Сообщение"
            },
            name: {
                required: "Заполните поле Имя",
                minlength: "Колич. символов меньше 2"
            },

            email:{
                email: "Некорректный e-mail"

            }
        },
        errorElement: "span",
        errorPlacement: function(error, element) {
            error.insertAfter(element);
            /*var box = $('<div class="tooltip right" role="tooltip">')
             .append($('<div class="tooltip-arrow">'))
             .append($('<div class="tooltip-inner">')
             .append(error));*/

        },
        success: function(label) {
            label.addClass('valid').append($("<i>").attr({class:"fa fa-check"}));


        },
        submitHandler: function() {
           /* var btn = $('#btnZamerSend');
            var arr = zamerForm.serializeArray();
            var url = 'index.php?route=common/contact_form/sendmail';
            btn.button('loading');
            $.ajaxSetup({
                url:url,
                type: "POST",
                dataType:"json",
                cache:false,
                success: function(data)
                {
                    answerMmodal('#myModalZamer', '#myModalZamerAnswer',zamerForm );

                },
                error: function(obj, err)
                {

                }
            });
            $.ajax({
                data:{
                    action:'zamer',
                    arr:arr
                }
            }).always(function () {
                btn.text('�������� �����').removeClass('disabled').attr({disabled:false});

            });*/
        }
    });
    /*
    $('#form_sendmail').submit(function() {
        console.log('555');
        var form = $(this);
        var data = form.serialize(); console.log(data);
        $.ajaxSetup({
            url: 'sendmail.php',
            type: 'POST',
            dataType: 'json'
        });


        $.ajax({
            data: data,
            beforeSend: function (XMLHttpRequest) {
                //
                $('.contact__form').fadeTo("slow", 0.33);
                $('#form_sendemail .has-error').removeClass('has-error');
                $('#form_sendemail .help-block').html('');
                $('#form_message').removeClass('alert-success').html('');
            },
            success: function (json, textStatus) {
                if (json.error) {
                    // Error messages
                    if (json.error.name) {
                        $('#form_sendemail input[name="name"]').parent().addClass('has-error');
                        $('#form_sendemail input[name="name"]').next('.help-block').html(json.error.name);
                    }
                    if (json.error.email) {
                        $('#form_sendemail input[name="email"]').parent().addClass('has-error');
                        $('#form_sendemail input[name="email"]').next('.help-block').html(json.error.email);
                    }
                    if (json.error.message) {
                        $('#form_sendemail textarea[name="message"]').parent().addClass('has-error');
                        $('#form_sendemail textarea[name="message"]').next('.help-block').html(json.error.message);
                    }
                    if (json.error.recaptcha) {
                        $('#form-captcha .help-block').addClass('has-error');
                        $('#form-captcha .help-block').html(json.error.recaptcha);
                    }
                }
                // Refresh Captcha
                grecaptcha.reset();
                //
                if (json.success) {
                    $('#form_message').addClass('alert-success').html(json.success);
                    setTimeout(function () {
                        $('#form_message').removeClass('alert-success').html('');
                    }, 4000);
                }

            },
            complete: function (XMLHttpRequest, textStatus) {
                //
                $('.contact__form').fadeTo("fast", 1);
            }
        });

        return false;
    })*/

});