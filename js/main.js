$(document).ready(function(){


    if (window.innerWidth<=1000)
        $("nav").addClass("humburger");
    else
        $("nav").removeClass("humburger");

    $("input[name='tell']").inputmask("+7 (999) 999-99-99");  //static mask

    $(".checkoutModalOpen").click(function(){
        $('#checkoutModal').arcticmodal();
    });

    $(".outdoorAdverstingModalOpen").click(function () {
        $("#outdoorAdverstingModal").arcticmodal();
    });

    $("form").on( "submit", function( event ) {
        event.preventDefault();
        var data = $(this).serialize();
        $.post('http://totcopy.su/feedback.php',data).then(()=>{
            $.notify("Спасибо! Заявка отправлена!");
        })
            .catch(()=>{
                $.notify("Ошибка отправки данных",'error');
            });
    });

    $(window).resize(function (e) {
        console.log(e.target.innerWidth)
        if (e.target.innerWidth<=1000)
            $("nav").addClass("humburger");
        else
            $("nav").removeClass("humburger");
    });

    $(document).on("click","nav.humburger",function () {
        $(this).addClass("open");
    });

    $("#topBtn").click(function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    window.onscroll = function(){
        var btnTop = document.getElementById("topBtn");

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    }

    $(document).on("mouseleave","nav.humburger.open",function () {
        $(this).removeClass("open");
    });



});