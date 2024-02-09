//transfer with smoothing to the selected section
$("a[href^='#']").click(function (e) {
    let linkHref= $(e.target).attr('href');
    let currentSectionOffeset= $(linkHref).offset().top;
    $('html,body').animate({scrollTop:currentSectionOffeset}, 500);
})