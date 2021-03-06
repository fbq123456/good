$(function () {
    var layer = layui.layer
    var form = layui.form


    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        yuan: function (value) {
            if (value === $('[name = oldPwd]').val()) {
                return '新旧密码不能相同'
            }
        },

        tong: function (value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码不一致！'
            }
        }
    })

    $('.layui-form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg('修改失败')
                }
                layer.msg('修改密码成功')
                $('.layui-form')[0].reset()
            }
        })
    })
    // $('.layui-form').on('submit', function (e) {
    //     e.preventDefault()
    //     $.ajax({
    //         method: 'POST',
    //         url: '/my/updatepwd',
    //         data: $(this).serialize(),
    //         success: function (res) {
    //             if (res.status !== 0) {
    //                 return layui.layer.msg('更新密码失败！')
    //             }
    //             layui.layer.msg('更新密码成功！')
    //             // 重置表单
    //             $('.layui-form')[0].reset()
    //         }
    //     })
    // })


})