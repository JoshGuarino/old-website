function home()
{
  $('html,body').animate({
    scrollTop: $("#title").offset().top},
    'slow');
}

function about()
{
  let h = window.innerHeight;
  h = h * .15;
  $('html,body').animate({
    scrollTop: $(".about").offset().top-h},
    'slow');
}

function port()
{
  let h = window.innerHeight;
  h = h * .15;
  $('html,body').animate({
    scrollTop: $(".portfolio").offset().top-h},
    'slow');
}

function exp()
{
  let h = window.innerHeight;
  h = h * .15;
  $('html,body').animate({
    scrollTop: $(".experience").offset().top-h},
    'slow');
}

function cont()
{
  let h = window.innerHeight;
  h = h * .15;
  $('html,body').animate({
    scrollTop: $(".contact").offset().top-h},
    'slow');
}

