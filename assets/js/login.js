$(function () {
    $('#link_reg').on('click', function () {
        $('.box').hide()
        $('.box-zhu').show()
    })
    $('#link_age').on('click', function () {
        $('.box').show()
        $('.box-zhu').hide()
    })




    var form = layui.form
    var layer = layui.layer
    form.verify({
        pws: [/^[\S]{6,12}$/, '密码必须输入6-12位，不能添加空格'],


        refals: function (value) {
            var pas = $('#pa').val()
            if (pas !== value) {
                return '两次密码输入不一致'
            }
        }
    })
    $('#form-zhu').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: '/api/reguser',
            data: $('#form-zhu').serialize(),
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功，请登录！')
                $('#link_age').click()
            }
        })
    })

    $('#form-deng').submit(function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('账号或密码错误')
                }
                layer.msg('res.message')
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }
        })
    })

})
