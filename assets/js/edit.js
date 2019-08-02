;(()=>{
let id = location.search.substring(4);
$.ajax({
    type:'get',
    data:{id},
    url:'http://127.0.0.1:8080/byiddata',
    success:function(hh){
        $('#name').val(hh.name)
        if(hh.gender=='女'){
            $('#nv').prop('checked',true);
        }
        $('#photo').attr('src',hh.img)
        $("#headSrc").val(hh.img)
        $('#id').val(hh.id)
    }
});
// 点击换图片
$('#img').on('change',function(){
    let img=this.files[0]
    // console.log(img);
    // 只要选择了图片上传
    if (img.name!=undefined){
        $('#headSrc').val('../assets/image/'+img.name)
        $('#photo').attr('src','../assets/image/'+img.name)
    }  
})

// 点击完成修改英雄信息
$('#sub').on('click',function(){
    // 获取表格信息
    let data=$('#form').serialize();
$.ajax({
    type:'post',
    url:'http://127.0.0.1:8080/changeherouser',
    data,
    success:function(hh){
        if (hh.code==200){
            alert(hh.msg)
            location.href ='/index';
        }
    }
}); 
})






})();