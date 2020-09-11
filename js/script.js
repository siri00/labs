// current year
$('#year').text(new Date().getFullYear());

// initializing Scroll spy
$('.body').scrollspy(
    {
        target:'#main-nav',
    }
);