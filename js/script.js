// <script type="text/javascript">
//     // Функция ymaps.ready() будет вызвана, когда
//     // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
//     ymaps.ready(init);
//     function init(){ 
//         // Создание карты.    
//         var myMap = new ymaps.Map("map", {
//             // Координаты центра карты.
//             // Порядок по умолчанию: «широта, долгота».
//             // Чтобы не определять координаты центра карты вручную,
//             // воспользуйтесь инструментом Определение координат.
//             center: [59.957201, 30.317891],
//             // Уровень масштабирования. Допустимые значения:
//             // от 0 (весь мир) до 19.
//             zoom: 7
//         });
//     }
// </script>

$(document).ready(function() {

  $('.burger').click(function (){
    $('.nav').slideToggle(); 
    $(this).toggleClass('burger--open');
  });

  $('.video__gallery').slick({
    prevArrow: '<button class="btn--prev"></button>',
    nextArrow: '<button  class="btn--next"></button>',
    slidesToShow: 1,
  centerMode: true,
  variableWidth: true
  });

  ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
center: [59.941993, 30.279423],// center
zoom: 14,
controls: []
}),

// Создаём макет содержимого.
MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
hintContent: 'Собственный значок метки',
balloonContent: 'Это красивая метка'
}, {
// Опции.
// Необходимо указать данный тип макета.
iconLayout: 'default#image',
// Своё изображение иконки метки.
iconImageHref: 'images/geotag.png',
// Размеры метки.
iconImageSize: [30, 42],
// Смещение левого верхнего угла иконки относительно
// её "ножки" (точки привязки).
iconImageOffset: [-5, -38]
});

myMap.behaviors.disable('scrollZoom');

myMap.geoObjects
.add(myPlacemark);
});

});
