/*global jQuery:false */
(function($) {


  //jQuery to collapse the navbar on scroll
  /*$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $(".top-area").addClass("top-padding");
      $(".navbar-brand").addClass("reduce");

      $(".navbar-custom ul.nav ul.dropdown-menu").css("margin-top", "11px");

    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".top-area").removeClass("top-padding");
      $(".navbar-brand").removeClass("reduce");

      $(".navbar-custom ul.nav ul.dropdown-menu").css("margin-top", "16px");

    }
  });
*/
	var navMain = $(".navbar-collapse"); 
	navMain.on("click", "a:not([data-toggle])", null, function () {
	   navMain.collapse('hide');
	});

  //scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('.navbar-nav li a').bind('click', function(event) {
      var $anchor = $(this);
      var nav = $($anchor.attr('href'));
      if (nav.length) {
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
      }
    });
    $('.page-scroll a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  jQuery('.appear').appear();
  jQuery(".appear").on("appear", function(data) {
    var id = $(this).attr("id");
    jQuery('.nav li').removeClass('active');
    jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
  });


  (function($, window, document, undefined) {

    var gridContainer = $('#grid-container'),
      filtersContainer = $('#filters-container');

    // add listener for filters click
    filtersContainer.on('click', '.cbp-filter-item', function(e) {

      var me = $(this),
        wrap;

      // get cubeportfolio data and check if is still animating (reposition) the items.
      if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {

        if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
          wrap = $('.cbp-l-filters-dropdownWrap');

          wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

          wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

          me.addClass('cbp-filter-item-active');
        } else {
          me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        }

      }

    });

  })(jQuery, window, document);


})(jQuery);
$(window).load(function() {
  $(".loader").delay(100).fadeOut();
  $("#page-loader").delay(100).fadeOut("fast");
});
