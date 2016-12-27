Toolkit.define(["jquery", "font","bootstrap-datepicker", "require-css!css/modules/date.css"], function ($) {

    $.fn.extend(
    {
        date: function (options, param) {
            if (!options) {
                options = {};
            }

            if ((typeof options).toLocaleString() == "string") {
                
                // 设置或者获得选中的值
                var val = function (param) {
                    if (param) {
                        this.datepicker('update', param);
                        return $;
                    }
                    else {
                        return $(this).val();
                    }
                }

                var startDate = function (param) {
                    if (param) {
                        this.datepicker("setStartDate",param);
                        return $;
                    }
                    else {
                      //  return this.datepicker("getStartDate");
                    }
                }


                var endDate = function (param) {
                    if (param) {
                        this.datepicker("setEndDate", param);
                        return $;
                    }
                    else {
                        //  return this.datepicker("getStartDate");
                    }
                }

                // 设置不可用
                var disabled = function (param) {
                    if (param != undefined) {
                        $(this).prop("disabled", param);
                        if (param) {
                            this.next().addClass("disabled");
                        }
                        else {
                            this.next().removeClass("disabled");
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
                    editable:false,
                    autoclose:true,
                    language: "cn",
                    format:'yyyy-mm-dd',
                    clearBtn: false,
                    daysOfWeekDisabled: []    // 数字0-6代表星期日至星期六
                }

                $wrapper = '<div class="input-group date"><div class="input-group-addon"> <span class="fa fa-calendar"></span></div></div>';
                this.after($wrapper);
                var $wrp = this.next();
                $wrp.prepend(this);
                var that = this;

                this.next().click(function () {
                    if (!that.prop("disabled")) {
                        that.datepicker("show");
                    }
                });

                // 初始化
                this.prop("readonly", !(options.editable || config.editable));

                this.datepicker({
                    autoclose:options.autoclose || config.autoclose,
                    language: config.language,
                    format: options.format || config.format,
                    clearBtn: options.clearBtn || config.clearBtn,
                    daysOfWeekDisabled: options.daysOfWeekDisabled || config.daysOfWeekDisabled,
                    disableTouchKeyboard: true,
                    StartDate: options.StartDate || config.StartDate,
                    endDate: options.endDate || config.endDate
                });

                $(this).addClass("toolkit-date");
            }
        }
    });

    // HTML 实例化
    $(".toolkit-date").each(function (index, element) {
          var soptions = $(element).attr("data-options");
        if (soptions) {
            var options = JSON.parse(soptions);
        } else {
            var options = {};
        }
        $(element).date(options);
    });

    return $;
})