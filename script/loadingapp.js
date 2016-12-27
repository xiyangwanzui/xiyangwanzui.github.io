define(["../toolkit/config"], function () {
    require(["jquery", "loading"], function ($) {
        setTimeout(function () {
            $("#body").loading("complete");
        }, 5000)
    })
});