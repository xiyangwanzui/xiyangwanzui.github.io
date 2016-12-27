define(["../toolkit/config"], function () {
    require(["jquery", "switchButton"], function ($) {
        $("#btnGet").click(function () {
            alert($("#switchButton").switchButton("checked"));
        });

        $("#btnSet").click(function () {
           $("#switchButton").switchButton("checked",true);
        });

        $("#btnDisabled").click(function () {
            $("#switchButton").switchButton("disabled", true);
        });

        $("#btnEnabled").click(function () {
            $("#switchButton").switchButton("disabled", false);
        });

        $("#btnDisable").click(function () {
            alert($("#switchButton").switchButton("disabled"));
        });
    })
});
