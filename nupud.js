$(document).ready(function () {
    nup = $(".nupud");
    nup.find("p").not(".cat").hide();
    nup.find("li.cat").find("img").attr("src","pildid/tanel/cat.gif");

    nup.find("li").on("pngks",function () {
        let cl = this.className;
        $(this).find("img").attr("src","pildid/tanel/"+cl+".png");
    });

    nup.find("li").click(function () {
        let cl = this.className;
        nup.find("p").hide();
        nup.find("li").not("."+cl).trigger("pngks");
        $("p."+cl).show();
    }).hover(function () {
        let cl = this.className;
        $(this).find("img").attr("src","pildid/tanel/"+cl+".gif");
    }, function () {
        let cl = this.className;
        if ($(".nupud").find("p."+cl).is(":hidden")) {
            $(this).find("img").attr("src","pildid/tanel/"+cl+".png");
        }
    });
});