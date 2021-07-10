var finish = function(){
    var name = document.getElementById("username");
    var unit = document.getElementById("unit");
    var sex = document.getElementsByName("性别");
    for(var i=0;i<sex.length;i++){
         if(sex[i].checked){
             var sexValue = sex[i].value;
            }
        }
    var phone = document.getElementById("phone");
    var hotel = document.getElementsByName("酒店");
    for(var i=0;i<hotel.length;i++){
        if(hotel[i].checked){
            var hotelValue = hotel[i].value;
           }
       }
    var houseNumber = document.getElementById("houseNumber");
    var roomType = document.getElementsByName("房间类型");
    for(var i=0;i<roomType.length;i++){
        if(roomType[i].checked){
            var roomTypeValue = roomType[i].value;
           }
       }
    var result = "姓名:" + name.value +"\n"+"单位:"+unit.value+"\n"+"性别:" + sexValue +"\n"+"手机:"+phone.value+"\n"+"酒店:" + hotelValue +"\n"+"房间类型:"+houseNumber.value+"\n"+"酒店:" + roomTypeValue ;
    alert(result);
}

