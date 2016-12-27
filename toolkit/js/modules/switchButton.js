Toolkit.define(["jquery", "require-css!css/modules/switchButton.css"], function ($) {

    $.fn.extend(
    {
        switchButton: function (options, param) {
            if (!options) {
                options = {};
            }

            if ((typeof options).toLocaleString() == "string") {

                // 设置或者获得选中的值
                var checked = function (param) {
                    if (param != undefined) {
                        this.prop("checked", param);
                        return $;
                    }
                    else {
                        return this.prop("checked");
                    }
                }

                // 设置不可用
                var disabled = function (param) {
                    if (param != undefined) {
                        this.prop("disabled", param);
                        if (param) {
                            this.parent().parent().addClass('cbr-disabled');
                        }
                        else {
                            this.parent().parent().removeClass('cbr-disabled');
                        }
                    }
                    else {
                        return this.prop("disabled");
                    }
                }

                var Fun = eval(options);
                return Fun.call(this, param);
            }
            else {
                $(this).addClass("toolkit-switchButton");
            }
        }
    });

    return $;
})