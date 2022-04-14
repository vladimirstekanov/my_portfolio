const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menu.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skill__ratings-counter'),
      lines = document.querySelectorAll('.skill__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



$(document).ready(function(){
    $('.contacks__form').validate({
        rules: {
            name: "required",
            privacy: "required",
            email: {
                required: true,
                email: true
            }
            
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            privacy: "Пожалуйста, подтвердите политику конфиденциальности",
            email: {
                required: "Пожалуйста, введите адрес электронной почты",
                email: "Неправильно введен адрес электронной почты"
            }
            
        }
    });
});

$('.contacks__form').submit(function(e) {
    e.preventDefault();
    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('.contacks__form').trigger('reset');
    });
    return false;
});
