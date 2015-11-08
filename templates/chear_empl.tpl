<div id="modal-catalog">
    <div class="content">
        <div class="modal-body">
            <div class="product_info">
                <div class="product_images">
                    <div class="main_image">
                        <a class="colorbox" title="Кресла для сотрудников" href="img/catalog/empl/big/1.jpg">
                            <div class="zoom">
                                <i class="fa fa-search-plus"></i>
                            </div>
                            <img title="" src="img/catalog/empl/1.jpg">
                        </a>
                    </div>

                    <div class="image-additional">
                        <div class="slider">
                            <div class="slide">
                                <img src="img/catalog/empl/1.jpg" data-src="img/catalog/empl/1.jpg" data-popup="img/catalog/empl/big/1_1.jpg" title="Кресло для сотрудников" alt="Кресло для сотрудников" />
                            </div>
                            <div class="slide">
                                <img src="img/catalog/empl/2.jpg" data-src="img/catalog/empl/2.jpg" data-popup="img/catalog/empl/big/2.jpg" title="Кресло для сотрудников" alt="Кресло для сотрудников" />
                            </div>
                            <div class="slide">
                                <img src="img/catalog/empl/1.jpg" data-src="img/catalog/empl/1.jpg" data-popup="img/catalog/empl/big/1.jpg" title="Кресло для сотрудников" alt="Кресло для сотрудников" />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="right_block">
                    <h3 class="modal-title">Кресла для сотрудников</h3>
                    <p>
                        В общем, если вас очень беспокоит, что текстовый контент с вашего сайта разворовывается, то следует воспользоваться этим инструментом,
                        чтобы Яндекс считал ваш сайт первоисточником. Но что это конкретно даёт сайту, в официальной справке всё же не сказано.
                        Хочется думать, что если данная ПС считает конкретный сайт источником контента, то и ранжирование этого сайта будет улучшено.
                        Или же ухудшено у тех сайтов, которые этот контент воруют… В общем, точно не известно. К тому же в Яндексе написано следующее:
                    </p>
                </div>

            </div>
            <div class="btn-block">
                <button class="btn btn-send order" id="btn-order" data-target="#modalOrder">Предварительный заказ</button>
            </div>
            <div class="price_list">
                <h3 class="modal-title">Прайс-лист на модели кресел для сотрудников</h3>
                <table class="table table-bordered table-striped table-condensed">
                    <thead>
                    <tr>
                        <th>Название модели</th>
                        <th>Стоимость, руб.</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="row">Калифорния1</td>
                        <td>12 599</td>
                    </tr>
                    <tr>
                        <td scope="row">Калифорния2</td>
                        <td>12 599</td>
                    </tr>
                    <tr>
                        <td scope="row">Калифорния3</td>
                        <td>12 599</td>
                    </tr>
                    <tr>
                        <td scope="row">Калифорния4</td>
                        <td>12 599</td>
                    </tr>
                    <tr>
                        <td scope="row">Калифорния5</td>
                        <td>12 599</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<script>
    <!--
    $(document).ready(function() {

        $('.colorbox').colorbox({
            overlayClose: true,
            opacity: 0.5,
            rel: "colorbox"
        });

        //MODAL
        $('.order').Mmodal({
            width: 600,
            height: 'auto',
            delay: 500
        });
        $('#btn-order').on('click', function(){
            $(this).blur();
        })
    });
    //-->
    //Замена большой картинки на маленькую при клике
    $(document).on('click',".product_info .image-additional img",function(e){
        e.preventDefault();
        var img_src = $(this).data('src');
        var img_popup = $(this).data('popup');
        $(".product_info .main_image img").attr('src',img_src);
        $(".product_info .main_image a").attr('href',img_popup);
    });


</script>