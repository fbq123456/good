$(function () {
    var form = layui.form


    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        yuan: function (value) {
            // if (value === $($('[name = oldPwd]').val())) {
            //     layui.layer.msg('新密码和旧密码不能相同')
            // }
            if (value === $('[name = oldPwd]').val()) {
               return ''
            }
        }
    })

})