$(function() {
    // Du code en jQuery
    $('p').css({
        color: 'blue'
    });
    $('.maclasse').css({
        color: 'red'
    });
    $('#unediv').css({
            color: 'green',
            width: '150px',
            height: '150px',
            backgroundColor: 'yellow'
        })
        //alert("jQuery est prêt!");
        //console.log("jQuery est prêt!");
    $('#unediv').on('click', function() {
        alert("Ce code fonctionne")
    });
    $('button').on('click', function() {
        $('#unediv').css({
            backgroundColor: 'red'
        });
    })

})

document.querySelector("body").style.backgroundColor = "blue";