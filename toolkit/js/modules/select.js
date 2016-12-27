Toolkit.define(["jquery", "jquery-ui", "jquery-selectBoxIt", "perfect-scrollbar", "require-css!css/lib/font-awesome.css"], function ($) {

    $.fn.extend(
    {
        select: function (options,param) {
            if (!options) {
                options = {};
            }

            if ((typeof options).toLocaleString() == "string") {
                
                // 设置或者获得选中的值
                var selectedValue = function (param) {
                    if (param) {
                        $(this).data("selectBox-selectBoxIt").selectOption(param);
                        return $;
                    }
                    else {
                        return $(this).val();
                    }
                }

                // 设置或者获得选中的文本
                var selectedText = function (param) {
                    if (param) {
                        $(this).data("selectBox-selectBoxIt").selectOption(param);
                        return $;
                    }
                    else {
                        return $(this).find("option:selected").text();
                    }
                }

                // 添加option的方法;示例：$(selector).select("add", { value: "new option", text: "new option" });
                var add = function (param) {
                    $(this).data("selectBox-selectBoxIt").add(param);
                };

                // 删除
                var remove = function (param) {
                    $(this).data("selectBox-selectBoxIt").remove(param);
                }

                // 设置不可用
                var disabled = function (param) {
                    if (param != undefined) {
                        this.prop("disabled", param);
                    }
                    else {
                        return this.prop("disabled");
                    }
                }

                var Fun = eval(options);
                return Fun.call(this, param);
            }
            else {
                // 默认参数
                var config = {
                    defaultText: options.defaultText || "请选择",
                    showFirstOption: !(options.showFirstOption || false),
                    data: options.data || null
                }

                // 初始化
                this.selectBoxIt({
                    showEffect: 'fadeIn',
                    hideEffect: 'fadeOut',
                    showFirstOption: config.showFirstOption,
                    //defaultText: config.defaultText,
                    populate: config.data
                })

                // 美化滚动条（IE8无效）
                if (!Toolkit.device().ieVision || parseInt(Toolkit.device().ieVision) > 8) {
                    this.on('open', function () {
                        // Adding Custom Scrollbar
                        $(this).data('selectBoxSelectBoxIt').list.perfectScrollbar();
                    })
                }

                $(this).addClass("toolkit-select");
            }
        }
    });

    // HTML 实例化
    $(".toolkit-select").each(function (index, element) {
          var soptions = $(element).attr("data-options");
        if (soptions) {
            var options = JSON.parse(soptions);
        } else {
            var options = {};
        }
        $(element).select(options);
    });

    return $;
})