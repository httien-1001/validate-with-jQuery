
    function check(){
        var _tien_1=document.getElementById('tien_1');
        var _tien_2=document.getElementById('tien_2');
        var _tien_3=document.getElementById('tien_3');
        var _tien_4=document.getElementById('tien_4');
    // if (_tien_1.value=='') {
    //     $("#tien_1").addClass('red_border');
    //     $('#error_1_1').removeClass('hidden');
    //     return false; 
    // } else {
    //     $('#tien_1').removeClass('red_border');
    //     $('#error_1_1').addClass('hidden');
    //     return true;
    // }
    var reg_mail = /^[a-zA-Z0-9]{3,10}[@][a-zA-Z]{2,5}[.][a-z]{2,3}$/;
    var regex_mail = reg_mail.test(_tien_2.value);
    

    // if (_tien_2.value=='') {
    //     $("#tien_2").addClass('red_border');
    //     $('#error_2_1').removeClass('hidden');
    //     return false;
    // } else if(!regex_mail) {
    //     $("#tien_2").addClass('red_border');
    //     $('#error_2_1').addClass('hidden');
    //     $('#error_2_2').removeClass('hidden');
    //     return false;
    // } else {
    //     $("#tien_2").removeClass('red_border');
    //     $('#error_2_1').addClass('hidden');
    //     $('#error_2_1').addClass('hidden');
    //     return true;
    // }

    // if (_tien_3.value=='') {
    //     $("#tien_3").addClass('red_border');
    //     $('#error_3_1').removeClass('hidden');
    //     return false;
    // } else {
    //     $("#tien_2").removeClass('red_border');
    //     $('#error_2_1').addClass('hidden');
    //     return true;
    // }
    
    if (_tien_4.value != _tien_3.value) {
        $("#tien_4").addClass('red_border');
        $('#error_4_1').removeClass('hidden');
        return false;
    } else {
        $("#tien_4").addClass('red_border');
        $('#error_4_1').removeClass('hidden');
        return true;
    }
}