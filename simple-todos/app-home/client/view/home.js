Template.home.onRendered(()=>{
    "use strict";

    var myCarousel = {
        init : function(){
            myCarousel.setHomeCarousel();
            myCarousel.setHomeNavbar();
            myCarousel.setHomeCarouselItem();

            myCarousel.size();
            myCarousel.resize();
            myCarousel.showControl();
        },
        setHomeCarousel : function(){
            this._homeCarousel = jQuery('.home-carousel');
        },
        setHomeCarouselItem : function(){
            this._homeCarouselItem = jQuery('.home-carousel .item');
        },
        setHomeNavbar : function(){
            this._homeNavbar = jQuery('.home-navbar');
        },
        getHomeCarousel : function(){
            return this._homeCarousel;
        },
        getHomeCarouselItem : function(){
            return this._homeCarouselItem;
        },
        getHomeNavbar : function(){
            return this._homeNavbar;
        },
        size: function(){
            myCarousel.getHomeCarousel().css('height', jQuery(window).height() - myCarousel.getHomeNavbar().height());
            myCarousel.getHomeCarouselItem().css('height', jQuery(window).height() - myCarousel.getHomeNavbar().height());
        },
        resize: function(){
            $(window).on("resize", function(){
                myCarousel.size();
            });
        },
        showControl : function(){
            myCarousel.getHomeCarousel().hover(function(){
                jQuery('.carousel-control span').removeClass('hidden');
            }, function(){
                jQuery('.carousel-control span').addClass('hidden');
            });
        }
    };

    myCarousel.init();
});

Template.home.onCreated(() => {
    "use strict";

    var navbar = {
        init : function(){
            navbar.setNavbarA();
            navbar.setNavbarLi();
            navbar.setNavbarCollapse();
            navbar.setNavbarToggle();

            navbar.toggleOpacity();
            navbar.isActive();
        },
        //Setter
        setNavbarToggle : function(){
            this._navbarToggle = jQuery('.portfolio-toggle');
        },
        setNavbarA : function(){
            this._navbarA = jQuery('.portfolio-navbar li a');
        },
        setNavbarCollapse : function(){
            this._navbarCollapse = jQuery('.navbar-collapse');
        },
        setNavbarLi : function(){
            this._navbarLi = jQuery('.portfolio-navbar li');
        },
        //Getter
        getNavbarToggle : function(){
            return this._navbarToggle;
        },
        getNavbarCollapse : function(){
            return this._navbarCollapse;
        },
        getNavbarA : function(){
            return this._navbarA;
        },
        getNavbarLi : function(){
            return this._navbarLi;
        },
        isActive : function(){
            navbar.getNavbarA().click(function(e){
                navbar.getNavbarLi().removeClass('active');
                var thisParent = jQuery(e.currentTarget).parent();
                if(!thisParent.hasClass('active'))
                    thisParent.addClass('active');
            });
        },
        toggleOpacity: function(){
            navbar.getNavbarToggle().click(function(){
                if(!navbar.getNavbarCollapse().hasClass('in'))
                    navbar.getNavbarToggle().css('opacity', 1);
                else
                    navbar.getNavbarToggle().css('opacity', .7);
            });
        }
    };

    var scroll = {
        init : function(){
            scroll.defaultTop();
            scroll.goToSection(4);
            scroll.keyboardImageChange();
        },
        //Setter

        //Getter

        defaultTop : function(){
            jQuery(window).on('beforeunload', function() {
                jQuery(window).scrollTop(0);
            });
        },
        goToSection : function(nbSection){
            var i = 1;

            jQuery(document).on("keydown", function (event) {

                if (event.keyCode == 40) {
                    if (i >= nbSection){
                        i = nbSection;
                    }else{
                        i++;
                        scroll.scrollToAnchor(jQuery("#section"+i));
                    }

                    jQuery('.home-keyboard-down').css('opacity', 1);
                    setTimeout(function(){
                        jQuery('.home-keyboard-down').css('opacity', .7);
                    }, 200);

                } else if (event.keyCode == 38) {
                    if(i<=1) {
                        i = 1;
                    }else {
                        i--;
                        scroll.scrollToAnchor(jQuery("#section"+i));
                    }
                    jQuery('.home-keyboard-up').css('opacity', 1);
                    setTimeout(function(){
                        jQuery('.home-keyboard-up').css('opacity', .7);
                    }, 200);
                }
            });
        },
        scrollToAnchor : function(selector){
            jQuery('html,body').animate({scrollTop: selector.offset().top},'slow');
        },
        keyboardImageChange : function(){
            jQuery(window).scroll(function() {
                if(jQuery(window).scrollTop() > 80) {
                    jQuery('.home-keyboard-down').attr('src', '/icon/keyboard-down-black.png');
                    jQuery('.home-keyboard-up').attr('src', '/icon/keyboard-up-black.png');
                }else{
                    jQuery('.home-keyboard-up').attr('src', '/icon/keyboard-up-white.png');
                    jQuery('.home-keyboard-down').attr('src', '/icon/keyboard-down-white.png');
                }
            });
        }
    };

    navbar.init();
    scroll.init();
});