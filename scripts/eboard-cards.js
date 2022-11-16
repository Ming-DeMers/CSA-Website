$(document).ready(function () {
  $('.card-back').addClass('hidden');
});

// Enacts the card flip animation. Parameter: the ID of the card (usually their last name)
function card_flip(LastName) {
  let name = "#" + LastName
  let front = (name + " .card-front");
  let back = (name + " .card-back");
  $(name).toggleClass('flip-card');
  setTimeout(function () {
    $(front).toggleClass('hidden');
    $(back).toggleClass('hidden');
  }, 300);
}

$('#ChristinaZeng').click(function () {
  card_flip("ChristinaZeng")
});

$('#SophiaTeng').click(function () {
  card_flip("SophiaTeng")
});

$('#NicoleLee').click(function () {
  card_flip("NicoleLee")
});

$('#BenWang').click(function () {
  card_flip("BenWang")
});

$('#ArthurSun').click(function () {
  card_flip("ArthurSun")
});

$('#TiffanyLee').click(function () {
  card_flip("TiffanyLee")
});

$('#KevinHuang').click(function () {
  card_flip("KevinHuang")
});

$('#SaraLok').click(function () {
  card_flip("SaraLok")
});

$('#KimLin').click(function () {
  card_flip("KimLin")
});

$('#JonYeung').click(function () {
  card_flip("JonYeung")
});

$('#AngelLin').click(function () {
  card_flip("AngelLin")
});

$('#BrandonLee').click(function () {
  card_flip("BrandonLee")
});

$('#LeoChen').click(function () {
  card_flip("LeoChen")
});

$('#JadeNguyen').click(function () {
  card_flip("JadeNguyen")
});

$('#AvaTan').click(function () {
  card_flip("AvaTan")
});

$('#JasmineUm').click(function () {
  card_flip("JasmineUm")
});

$('#KarenZhao').click(function () {
  card_flip("KarenZhao")
});

$('#KazuyaChue').click(function () {
  card_flip("KazuyaChue")
});

$('#EthanShan').click(function () {
  card_flip("EthanShan")
});

$('#LoganChang').click(function () {
  card_flip("LoganChang")
});

$('#DerekXie').click(function () {
  card_flip("DerekXie")
});
