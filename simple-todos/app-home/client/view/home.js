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
                    if(i>=nbSection)
                        i=nbSection;
                    else
                        i++;
                    scroll.scrollToAnchor(jQuery("#section"+i));
                } else if (event.keyCode == 38) {
                    if(i<=1)
                        i=1;
                    else
                        i--;
                    event.preventDefault();
                    scroll.scrollToAnchor(jQuery("#section"+i));
                }
            });
        },
        scrollToAnchor : function(selector){
            jQuery('html,body').animate({scrollTop: selector.offset().top},'slow');
        }
    };

    navbar.init();
    scroll.init();
});