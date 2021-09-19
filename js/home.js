$(function() {
    function selectFirst() {
        $("#carousel-btn1").css({
            "background-color": "rgb(80, 140, 110)"
        });
        $("#carousel-btn2").css({
            "background-color": "#20622B"
        });
        $("#carousel-btn3").css({
            "background-color": "#20622B"
        });

        $("#image-holder").css({
            "left": "0px"
        })
    }
    selectFirst();

    $("#carousel-btn1").on("click", () => selectFirst());

    $("#carousel-btn2").on("click", function() {
        $(this).css({
            "background-color": "rgb(80, 140, 110)"
        });
        $("#carousel-btn1").css({
            "background-color": "#20622B"
        });
        $("#carousel-btn3").css({
            "background-color": "#20622B"
        });

        $("#image-holder").css({
            "left": "-800px"
        })
    });

    $("#carousel-btn3").on("click", function() {
        $(this).css({
            "background-color": "rgb(80, 140, 110)"
        });
        $("#carousel-btn1").css({
            "background-color": "#20622B"
        });
        $("#carousel-btn2").css({
            "background-color": "#20622B"
        });

        $("#image-holder").css({
            "left": "-1600px"
        })
    });
});
