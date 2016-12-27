define(["../toolkit/config"], function () {
    require(["jquery", "date"], function ($) {
        $("#btnGet").click(function () {
            alert($("#date").date("val"));
        });

        $("#btnSet").click(function () {
            $("#date").date("val","2016-10-12");
        });
        $("#btnSetStartDate").click(function () {
            $("#date").date("startDate", "-1d");
        });
        $("#btnSetEndDate").click(function () {
            $("#date").date("endDate", "+10d");
        });
        $("#btnDisabled").click(function () {
            $("#date").date("disabled", true);
        });
        $("#btnEnabled").click(function () {
            $("#date").date("disabled",false);
        });
    })
});
