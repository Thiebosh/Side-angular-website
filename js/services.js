$(function() {
    function displayContent1() {
        $("#option1-content").css({
            "display": "initial"
        });
        $("#option2-content").css({
            "display": "none"
        });
        $("#option3-content").css({
            "display": "none"
        })

        $("#option1").css({
            "box-shadow": "4px 4px 8px grey"
        });
        $("#option2").css({
            "box-shadow": "initial"
        });
        $("#option3").css({
            "box-shadow": "initial"
        });
    }
    function displayContent2() {
        $("#option2-content").css({
            "display": "initial"
        });
        $("#option1-content").css({
            "display": "none"
        });
        $("#option3-content").css({
            "display": "none"
        })

        $("#option2").css({
            "box-shadow": "0px 6px 8px grey"
        });
        $("#option1").css({
            "box-shadow": "initial"
        });
        $("#option3").css({
            "box-shadow": "initial"
        });
    }
    function displayContent3() {
        $("#option3-content").css({
            "display": "initial"
        });
        $("#option1-content").css({
            "display": "none"
        });
        $("#option2-content").css({
            "display": "none"
        })

        $("#option3").css({
            "box-shadow": "-4px 4px 8px grey"
        });
        $("#option1").css({
            "box-shadow": "initial"
        });
        $("#option2").css({
            "box-shadow": "initial"
        });
    }

    switch($(location).attr('hash')) {
        case "#1":
            displayContent1();
            break;
        case "#2":
            displayContent2();
            break;
        case "#3":
            displayContent3();
            break;
    }

    $(".option1").on("click", () => displayContent1());

    $(".option2").on("click", () => displayContent2());

    $(".option3").on("click", () => displayContent3());
});
