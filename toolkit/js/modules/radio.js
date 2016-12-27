Toolkit.define(["jquery", "require-css!css/modules/radio.css"], function ($) {

    $.fn.extend(
    {
        radio: function (options, param) {
            if (!options) {
                options = {};
            }

            if ((typeof options).toLocaleString() == "string") {

                // 设置或者获得选中的值
                var checked = function (param) {  // radio的特殊性，只能设置true
                    if (param!=undefined) {
                        this.prop("checked", param);
                        if (param) {
                            this.parent().parent().addClass('cbr-checked');
                            $("input[name='" + this.attr("name") + "']").each(function (index, element) {
                                if (!$(element).prop('checked')) {
                                    $(element).parent().parent().removeClass('cbr-checked');
                                }
                            })
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

                $wrapper = '<div class="cbr-replaced"><div class="cbr-input"></div><div class="cbr-state"><span></span></div></div>';
                this.after($wrapper);
                this.addClass('cbr-done');
                var $wrp = this.next();
                $wrp.find('.cbr-input').append(this);
                $wrp.addClass('cbr-radio');

                if (config.disabled || this.prop('disabled')) {
                    this.prop("disabled", true);
                    $wrp.addClass('cbr-disabled');
                }

                if (config.checked || this.prop('checked') || this.attr('checked')) { // 条件3是考虑到IE8下，未指定type的inputJS无法通过prop获取checked的BUG
                    this.prop("checked",true);
                    $wrp.addClass('cbr-checked');
                }

                // Style apply
                var styles = ['toolkit-radio-color-black', 'toolkit-radio-color-darkgreen', 'toolkit-radio-color-green', 'toolkit-radio-color-lightblue', 'toolkit-radio-color-darkred', 'toolkit-radio-color-orange', 'toolkit-radio-color-red', 'toolkit-radio-color-blue', 'toolkit-radio-color-blue', 'toolkit-radio-color-purple', 'toolkit-radio-color-pink', 'toolkit-radio-color-brown', 'toolkit-radio-color-turquoise', 'toolkit-radio-color-yellow', 'toolkit-radio-color-gray'];

                var radio = this;

                jQuery.each(styles, function (key, val) {
                        var cbr_class =  val;

                        if (radio.hasClass(cbr_class)) {
                            $wrp.addClass(cbr_class);
                            radio.removeClass(cbr_class);
                        }
                    });

                // Events
                $wrp.on('click', function (event) {
                    if (radio.prop('disabled'))
                        return;

                    if (jQuery(event.target).is(radio) == false) {
                        radio.prop('checked', !radio.prop('checked'));
                        radio.trigger('change');
                    }
                });

                this.on('change', function (ev) {
                    $wrp.removeClass('cbr-checked');
                    if (radio.prop('checked'))
                        $wrp.addClass('cbr-checked');

                    $("input[name='" + radio.attr("name") + "']").each(function (index, element) {
                        if (!$(element).prop('checked')) {
                            $(element).parent().parent().removeClass('cbr-checked');
                        }
                    })
                });

                $(this).addClass("toolkit-radio");
            }
        }
    });

    // HTML 实例化
    $(".toolkit-radio").each(function (index, element) {
        var soptions = $(element).attr("data-options");
        if (soptions) {
            var options = JSON.parse(soptions);
        } else {
            var options = {};
        }
        $(element).radio(options);
    });

    return $;
})