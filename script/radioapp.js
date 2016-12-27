define(["../toolkit/config"], function () {
    require(["jquery", "radio"], function ($) {
        $("#btnGet").click(function () {
            alert($("#radio1").radio("checked"));
        });

        $("#btnSet").click(function () {
            $("#radio3").radio("checked", true);
        });
        $("#btnDisabled").click(function () {
            $("#radio3").radio("disabled",true);
        });

        $("#btnEnabled").click(function () {
            $("#radio3").radio("disabled",false);
        });
    })
});
