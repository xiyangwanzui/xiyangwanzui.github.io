Toolkit.define(["jquery", "require-css!css/modules/checkbox.css"], function ($) {

    $.fn.extend(
    {
        checkbox: function (options, param) {
            if (!options) {
                options = {};
            }

            if ((typeof options).toLocaleString() == "string") {

                // 设置或者获得选中的值
                var checked = function (param) {
                    if (param!=undefined) {
                        this.prop("checked", param);
                        if (param) {
                            this.parent().parent().addClass('cbr-checked');
                        }
                        else {
                            this.parent().parent().removeClass('cbr-checked');
                        }
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
                // 默认参数
                var config = {
                    disabled: options.disabled || false,
                    checked: options.checked || false
                }

                // 初始化
                $wrapper = '<div class="cbr-replaced"><div class="cbr-input"></div><div class="cbr-state"><span></span></div></div>';
                this.after($wrapper);
                this.addClass('cbr-done');
                var $wrp = this.next();
                $wrp.find('.cbr-input').append(this);

                if (config.disabled || this.prop('disabled')) {
                    this.prop("disabled", true);
                    $wrp.addClass('cbr-disabled');
                }

                if (config.checked || this.prop('checked') || this.attr('checked')) { // 条件3是考虑到IE8下，未指定type的inputJS无法通过prop获取checked的BUG
                    this.prop("checked",true);
                    $wrp.addClass('cbr-checked');
                }

                // Style apply
                var styles = ['toolkit-checkbox-color-black', 'toolkit-checkbox-color-darkgreen', 'toolkit-checkbox-color-green', 'toolkit-radio-color-lightblue', 'toolkit-checkbox-color-darkred', 'toolkit-checkbox-color-orange', 'toolkit-checkbox-color-red', 'toolkit-checkbox-color-blue', 'toolkit-checkbox-color-blue', 'toolkit-checkbox-color-purple', 'toolkit-checkbox-color-pink', 'toolkit-checkbox-color-brown', 'toolkit-checkbox-color-turquoise', 'toolkit-checkbox-color-yellow', 'toolkit-checkbox-color-gray'];

                var checkbox = this;

                jQuery.each(styles, function (key, val) {
                        var cbr_class =  val;

                        if (checkbox.hasClass(cbr_class)) {
                            $wrp.addClass(cbr_class);
                            checkbox.removeClass(cbr_class);
                        }
                    });

                // Events
                $wrp.on('click', function (event) {
                    if (checkbox.prop('disabled'))
                        return;

                    if (jQuery(event.target).is(checkbox) == false) {
                        checkbox.prop('checked', !checkbox.prop('checked'));
                        checkbox.trigger('change');
                    }
                });

                this.on('change', function (ev) {
                    $wrp.removeClass('cbr-checked');
                    if (checkbox.prop('checked'))
                        $wrp.addClass('cbr-checked');
                });

                $(this).addClass("toolkit-checkbox");
            }
        }
    });

    // HTML 实例化
    $(".toolkit-checkbox").each(function (index, element) {
        var soptions = $(element).attr("data-options");
        if (soptions) {
            var options = JSON.parse(soptions);
        } else {
            var options = {};
        }
        $(element).checkbox(options);
    });

    return $;
})