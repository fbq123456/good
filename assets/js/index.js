$(function () {
    getUserInfo()
    var layer = layui.layer
    $('.text-a').on('click', function () {
        layer.confirm('确认退出', { icon: 3, title: '提示' }, function (index) {
            localStorage.removeItem('token')
            location.href = '/login.html'
            layer.close(index);
        });
    })
})

function getUserInfo() {
    $.ajax({
        type: 'GET',
        url: '/my/userinfo',
        success: function (res) {
            // console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败!')
            }
            renderAvatar(res.data)
        }
    })
}




function renderAvatar(ures) {
    var name = ures.nickname || ures.username
    $('.add').html('欢迎!&nbsp;&nbsp;' + name)
    if (ures.user_pic !== null) {
        $('.layui-nav-img').attr('src', ures.user_pic).show()
        $('.text-avatar').hide()
    } else {
        var fiset = name[0].toUpperCase()
        $('.text-avatar').html(fiset).show()
        $('.layui-nav-img').hide()
    }
}


