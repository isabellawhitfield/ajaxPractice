
$(document).ready(function(){
    $('body').click(function(){
     $(this).css('color','pink');
    });


$.ajax({
    url:'js/MOCK_DATA.json',
    type:'GET',
    data:'json',
    success: function(data){
        console.log(data)
        var i;
        for (i=0; i<data.length; i++){
            document.getElementById('result').innerHTML +=
            '<div class="card" style="width: 14rem;">' +
            '<img src="'+ data[i].image +'" class="card-img-top" alt="Animal Image">' +
                '<div class="card-body">' +
                    '<h5 class="card-title">' + data[i].animal_common + '</h5>' +
                    '<p class="card-text">' + data[i].animal_scientific +'</p>' +
                '</div>' +
                '</div>' +
            '</div>'; 
            }


    },
    error:function(){
        console.log('error')
    }
});

});