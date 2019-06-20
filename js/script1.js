$(document).ready(function(){

	$('.field-select').selectric();

  var slickEnable = false;

  $(window).on('resize', function(){
    checkCarouselEnable();
  });

  checkCarouselEnable();

  function checkCarouselEnable() {
    var viewportWidth = $(window).innerWidth();
    if( viewportWidth < 600 ) {
      if( slickEnable == false ) {
        $('.carousel').slick();
        slickEnable = true;
      }
    }
    else {
      if( slickEnable == true ) {
        $('.carousel').slick('unslick');
        slickEnable = false;
      }
    }
  }

});

	// alert('hello world!');

	// $('.post p').hide();

	// var postsTexts = $('.post').span(find);
	// $(postsTexts).attr('data-number', 'qwerty');

	// $('.post_title').on('click', function(){
	// 	console.log( $(this).text() );
	// });
