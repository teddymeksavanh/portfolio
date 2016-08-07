Template.home.onCreated(() => {
    "use strict";

    window.addEventListener('load', function load(){
        window.removeEventListener('load', load, false);
        navbar.init();
        scroll.init();
    });

    var navbar = {
        init : function(){
            navbar.setNavbar();
            navbar.isActive();
        },
        //Setter
        setNavbar : function(){
            this._navbar = jQuery('.portfolio-navbar');
        },
        //Getter
        getNavbar : function(){
            return this._navbar;
        },
        isActive : function(){
            navbar.getNavbar().find('li a').click(function(e){
                navbar.getNavbar().find('li').removeClass('active');
                var thisParent = jQuery(this).parent();
                if(!thisParent.hasClass('active'))
                    thisParent.addClass('active');
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
                    navbar.scrollToAnchor(jQuery("#section"+i));
                } else if (event.keyCode == 38) {
                    if(i<=1)
                        i=1;
                    else
                        i--;
                    event.preventDefault();
                    navbar.scrollToAnchor(jQuery("#section"+i));
                }
            });
        },
        scrollToAnchor : function(selectr){
            jQuery('html,body').animate({scrollTop: selector.offset().top},'slow');
        }
    };
});