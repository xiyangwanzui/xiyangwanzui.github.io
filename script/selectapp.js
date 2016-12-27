define(["../toolkit/config"], function () {
    require(["jquery", "select"], function ($) {
        $("#btnGet").click(function () {
            alert($("#select").select("selectedValue") + ":" + $("#select").select("selectedText"));
        });

        $("#btnRemoveAll").click(function () {
            $("#select").select("remove");
        });

        $("#btnDisabled").click(function () {
            $("#select").select("disabled",true);
        });

        $("#btnEnabled").click(function () {
            $("#select").select("disabled", false);
        });

    })
});
