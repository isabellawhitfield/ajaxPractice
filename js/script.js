console.log('HIIIIII');

$(document).ready(function(){
    $('body').click(function(){
     $(this).css('color','blue');
    });

$.ajax({
    url:'https://api.unsplash.com/collections?page=1&client_id=ab174486c6960192fbb5cd13997305e3abdd3f21658ed7a6a10ba1816e7a1845',
    type:'GET',
    data:'json',
    success: function(data){
        console.log(data)
        var i;
        for (i=0; i<data.length; i++){
            document.getElementById('result').innerHTML +=
            '<div class="card" style="width: 18rem;">' +
            '<img src="'+ data[i].image +'" class="card-img-top" alt="Plant Image">' +
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