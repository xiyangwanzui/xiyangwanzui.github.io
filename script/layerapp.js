define(["../toolkit/config"], function () {
    require(["jquery", "layer"], function ($) {

        //弹出一个警告框
        $('#alert').on('click', function () {
            layer.alert('内容');
        });

        //弹出一个询问框
        $('#confirm').on('click', function () {
            layer.confirm('您是如何看待前端开发？', {
                btn: ['重要', '奇葩'] //按钮
            }, function () {
                layer.msg('的确很重要', { icon: 1 });
            }, function () {
                layer.msg('也可以这样', {
                    time: 20000, //20s后自动关闭
                    btn: ['明白了', '知道了']
                });
            });
        });

        //弹出一个信息框
        $('#msg').on('click', function () {
            //信息框-例3
            layer.msg('这是最常用的吧');
        });

        //弹出一个页面层
        $('#page').on('click', function () {
            layer.open({
                type: 1,
                area: ['600px', '360px'],
                shadeClose: true, //点击遮罩关闭
                content: '\<\div style="padding:20px;">自定义内容\<\/div>'
            });
        });

        //弹出一个iframe层
        $('#iframe').on('click', function () {
            layer.open({
                type: 2,
                title: 'iframe父子操作',
                maxmin: true,
                shadeClose: true, //点击遮罩关闭层
                area: ['800px', '520px'],
                content: 'test/iframe.html'
            });
        });

        //弹出一个loading层
        $('#loading').on('click', function () {
            var ii = layer.load();
            //此处用setTimeout演示ajax的回调
            setTimeout(function () {
                layer.close(ii);
            }, 1000);
        });


        //弹出一个tips层
        $('#tips').on('click', function () {
            layer.tips('Hello tips!', '#tips');
        });

        //弹出一个prompt层
        $('#prompt').on('click', function () {
            layer.prompt({
                title: '输入任何口令，并确认',
                formType: 1 //prompt风格，支持0-2
            }, function (pass) {
                layer.prompt({ title: '随便写点啥，并确认', formType: 2 }, function (text) {
                    layer.msg('演示完毕！您的口令：' + pass + ' 您最后写下了：' + text);
                });
            });
        });

    });
});
