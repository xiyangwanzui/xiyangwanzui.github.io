Toolkit.define(["jquery", "select2", "perfect-scrollbar", "require-css!css/modules/searchSelect.css", "font"], function ($) {

    $.fn.extend(
    {
        searchSelect: function (options, param) {
            if (!options) {
                options = {};
            }

            if ((typeof options).toLocaleString() == "string") {
                
                // 设置或者获得选中的值
                var selectedValue = function (param) {
                    if (param) {
                        $(this).select2("val",param);
                        return $;
                    }
                    else {
                        return this.select2("val");
                    }
                }

                // 获得选中的文本
                var selectedText = function () {
                        return $(this).select2('data').text;
                }

                // 设置不可用
                var disabled = function (param) {
                    if (param != undefined) {
                        $(this).select2("enable", !param);
                    }
                    else {
                        return this.select2("enable");
                    }
                }

                var Fun = eval(options);
                return Fun.call(this, param);
            }
            else {
                // 默认参数
                var config = {
                    placeholder: options.placeholder || "请选择",
                    allowClear: !(options.allowClear || false),
                    data: options.data || null
                }

                // 初始化
                this.select2({
                    placeholder: config.placeholder,
                    allowClear: true
                })

                // 美化滚动条（IE8无效）
                if (!Toolkit.device().ieVision || parseInt(Toolkit.device().ieVision) > 8) {
                    this.on('select2-open', function () {
                        // Adding Custom Scrollbar
                        $(this).data('select2').results.perfectScrollbar();
                    });
                }

                $(this).addClass("toolkit-searchSelect");
            }
        }
    });

    // HTML 实例化
    $(".toolkit-searchSelect").each(function (index, element) {
          var soptions = $(element).attr("data-options");
        if (soptions) {
            var options = JSON.parse(soptions);
        } else {
            var options = {};
        }
        $(element).searchSelect(options);
    });

    return $;
})