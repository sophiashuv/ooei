$("a[href^='#']").click(function(e) {
	e.preventDefault(); // ми не переходімо по ссилці

	let position = $($(this).attr("href")).offset().top; // визначаємо відстань ззверху до елемента з атрібутом href

	$("body, html").animate({
		scrollTop: position
	}, 1000);
});


// згортання хедера
let init_header_position = $('#header').offset().top;
$(window).on("scroll", function() {
    let header = $('#header');
    scroll = $(window).scrollTop();
    if (scroll >= init_header_position){
        header.addClass('fixed_header');
        $('.description').addClass('padding_top');
    } else {
        header.removeClass('fixed_header');
        $('.description').removeClass('padding_top');
    }
});
