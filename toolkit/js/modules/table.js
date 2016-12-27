Toolkit.define(["jquery", "require-css!css/modules/table.css", "font","bootstrap-dataTables"], function ($) {

    $.fn.extend(
    {
        table: function (options, param) {
            if (!options) {
                options = {};
            }

            if ((typeof options).toLocaleString() == "string") {

                // 设置或者获得选中的值
                var checked = function (param) {  // radio的特殊性，只能设置true
                    if (param != undefined) {
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

                // 添加样式
                this.addClass("toolkit-table table table-bordered");

                // 默认参数
                var config = {
                    showProcessing: options.showProcessing === undefined ? true : options.showProcessing, // 是否显示加载过程
                    serverMode: options.serverMode === undefined ? true : options.serverMode, // 是否启用服务器模式
                    filter: options.filter || false,
                    pageSize: [[10, 25, 50, 100, -1], ["10", "20", "50", "100", "All"]] || options.pageSize,
                    language: {
                        sLengthMenu: "每页显示 _MENU_ 条记录",
                        sZeroRecords: "抱歉， 没有找到",
                        sInfo: "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
                        sInfoEmpty: "没有数据",
                        sInfoFiltered: "(从 _MAX_ 条数据中检索)",
                        oPaginate: {
                            sFirst: "首页",
                            sPrevious: "前一页",
                            sNext: "后一页",
                            sLast: "尾页"
                        },
                        sZeroRecords: "没有检索到数据",
                        sProcessing: "加载中..."
                    },
                    ajax:options.ajax===undefined?  {
                        url:"data.json",
                        data:function(d){
                            d.param = "myValue";
                            d.custom = $('#myInput').val();
                        }
                    } : options.ajax,
                    columns:[]
                };

                if (!(options.columns === undefined)) {
                    $(options.columns).each(function (index, element) {
                        config.columns.push({data:element.field});
                    });
                }

                this.dataTable({
                    processing: config.showProcessing,
                    serverSide: config.serverMode,
                    searching: config.filter,
                    aLengthMenu: config.pageSize,
                    oLanguage: config.language,
                    ajax: config.ajax,
                    columns: config.columns,
                    createdRow: function (row, data, dataIndex) {
                        $(row).children('td').each(function (index, element) {
                            if (options.columns[index].align) {
                                $(element).attr('style', 'text-align: ' + options.columns[index].align);
                            }
                            else {
                        //        $(element).attr('style', 'text-align:center');
                            }
                        });
                    }
                });

            }
        }
    });

    // HTML 实例化
    $(".toolkit-table").each(function (index, element) {
         var soptions = $(element).attr("data-options");
        if (soptions) {
            var options = JSON.parse(soptions);
           
        } else {
            var options = {};
        }
        $(element).table(options);
    });

    return $;
})