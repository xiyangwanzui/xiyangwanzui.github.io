Toolkit.define(["jquery", "require-css!css/modules/loading.css"], function ($) {

    $.fn.extend(
    {
        loading: function (options, param) {
            if (!options) {
                options = {};
            }

            if ((typeof options).toLocaleString() == "string") {

                // 设置或者获得选中的值
                var complete = function (param) {
                    $(".toolkit-page-loading-overlay").addClass('loaded');
                }

                var Fun = eval(options);
                return Fun.call(this, param);
            }
            else {
                // 默认参数
                var config = {
                }

                // 初始化
                $wrapper = '<div class="toolkit-page-loading-overlay"><div class="toolkit-page-loading-loader"></div></div></div>';
                this.append($wrapper);

                $(this).addClass("toolkit-loading");
            }
        }
    });

    // HTML 实例化
    $(".toolkit-loading").each(function (index, element) {
        var soptions = $(element).attr("data-options");
        if (soptions) {
            var options = JSON.parse(soptions);
        } else {
            var options = {};
        }
        $(element).loading(options);
    });

    return $;
})