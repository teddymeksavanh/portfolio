Template.home.onCreated(() => {
    var i = 1;

    $(document).on("keydown", function (event) {

        if (event.keyCode == 40) {
            i++;
            if(i > 4)
                i = 4;
            scrollToAnchor($("#section"+i));
        } else if (event.keyCode == 38) {
            i--;
            if(i < 1)
                i = 1;
            event.preventDefault();
            scrollToAnchor($("#section"+i));
        }
    });

    function scrollToAnchor(aid){
        $('html,body').animate({scrollTop: aid.offset().top},'slow');
    }

    console.log(i);
});