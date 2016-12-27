define(["../toolkit/config"], function () {
    require(["jquery", "searchSelect"], function ($) {
        $("#btnGet").click(function () {
            alert($("#searchselect").searchSelect("selectedValue") +":"+ $("#searchselect").searchSelect("selectedText"));
        });
        $("#btnDisabled").click(function () {
            $("#searchselect").searchSelect("disabled",true);
        });

        $("#btnEnabled").click(function () {
            $("#searchselect").searchSelect("disabled",false);
        });

    })
});
