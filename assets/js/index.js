
$('#tbody').on('click','a:last-child',function(){
    if (!confirm('真的删除？')){
        return
    }
    // 获取点击的对象的id属性
    let id =$(this).attr('data-id')
    // 点击的对象存起来--闭包
    let dianthis=this;
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:8080/delherouser',
        data:{id},
        success:function(hh){
            if (hh.code==200){
                alert(hh.msg)
                // 返回数据提示数据库删除了就把页面的也删除
              $(dianthis).parents('tr').remove();
            }
        }
    })
})