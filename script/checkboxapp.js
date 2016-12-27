define(["../toolkit/config"], function () {
    require(["jquery", "checkbox"], function ($) {
        $("#btnGet").click(function () {
            alert($("#checkbox").checkbox("checked"));
        });

        $("#btnSet").click(function () {
            $("#checkbox").checkbox("checked", false);
        });
        $("#btnDisabled").click(function () {
            $("#checkbox").checkbox("disabled",true);
        });

        $("#btnEnabled").click(function () {
            $("#checkbox").checkbox("disabled",false);
        });
    })
});
