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
