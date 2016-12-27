Toolkit.define(["jquery", "inputmask"], function ($) {

    $.fn.extend(
    {
        mask: function (options) {
            if (!options) {
                options = {};
            }

            // 初始化
            this.inputmask(options);

            $(this).addClass("toolkit-mask");
        }
    });

    // HTML 实例化
    $(".toolkit-mask").each(function (index, element) {
        var soptions = $(element).attr("data-options");
        if (soptions) {
            var options = JSON.parse(soptions);
        } else {
            var options = {};
        }
        $(element).mask(options);
    });

    return $;
})