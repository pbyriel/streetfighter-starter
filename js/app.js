function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

$(document).ready(function () {
    $(".ryu").mouseenter(function () {
        $(".ryu-still").hide();
        $(".ryu-ready").show();
    })
        .mouseleave(function () {
            $(".ryu-ready").hide();
            $(".ryu-still").show();
        })
        .mousedown(function () {
            playHadouken();
            $(".ryu-ready").hide();
            $(".ryu-throwing").show();
            $(".hadouken").finish().show()
                .animate(
                    {"left": "720px"},
                    1000,
                    function () {
                        $(this).hide();
                        $(this).css({"left": "-12px"});
                    }
                );
        })
        .mouseup(function () {
            $(".ryu-throwing").hide();
            $(".ruy-ready").show();
        });
    $(document).keydown(function (event) {
        if (event.keyCode == "88") {
            $(".ryu-throwing").hide();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $(".hadouken").finish().hide();
            $('.ryu-cool').show();
        }
    })
        .keyup(function (event) {
            if (event.keyCode == "88") {
                $('.ryu-cool').hide();
                $('.ryu-still').show();
            }
        });
    $('.info').click(function () {
        $(".how").slideToggle();
    });
});




