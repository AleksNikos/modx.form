function onCalc(){
// Переменные
var priceOneKm = 20,
    result = 0, 
    bort = {
      "3" : {600 : "Борт 3м"},
      "4" : {800 : "Борт 4м"},
      "5" : {950 : "Борт 5м"},
    },
    stela = {
      "3" : {500 : "Стрела 3м"},
      "4" : {700 : "Стрела 4м"},
      "5" : {900 : "Стрела 5м"},
    };
          
  //add option function 
  function insertVar(){
      var htmlB = '',
          htmlS = '',
          size,
          price;
      for(size in bort){
        for (price in bort[size]) {
          htmlB += '<option data-size="'+size+'" data-price="'+price+'">'+bort[size][price]+' - '+price+' руб</option>';
        } 
      }
      for(size in stela){
        for (price in stela[size]) {
          htmlS += '<option data-size="'+size+'" data-price="'+price+'">'+stela[size][price]+' - '+price+' руб</option>';
        } 
      }
      $('#sBort').append(htmlB);
      $('#sStrela').append(htmlS);
  }insertVar();
        
  // default text
  $('#result').text(result);
  $('#bText').html('<i>*</i> Длина борта не выбрана');
  $('#sText').html('<i>*</i> Длина стрелы не выбрана');
  $('#loadText').html('<i>*</i> Растояние до загрузки не указано');
  $('#unloadText').html('<i>*</i> Растояние от загрузки не указано');
        
  // change function
  function changeField() {
    result = 0; 
    //bort field
    bSize = $('#sBort option').filter(':selected').data('size');
    bPrice = $('#sBort option').filter(':selected').data('price');
    if ($('#sBort option').index($('#sBort option:selected')) > 0 ){
      $('#bText').html('<i>*</i> Длина борта: '+bSize+'м - '+bPrice+' руб');
    } else {
      $('#bText').html('<i>*</i> Длина борта не выбрана');
    }
    //strela field
    sSize = $('#sStrela option').filter(':selected').data('size');
    sPrice = $('#sStrela option').filter(':selected').data('price');
    if ($('#sStrela option').index($('#sStrela option:selected')) > 0 ){
      $('#sText').html('<i>*</i> Длина стрелы: '+sSize+'м - '+sPrice+' руб');
    } else {
      $('#sText').html('<i>*</i> Длина стрелы не выбрана');
    }
    //rang element
    loadText    = $('#loadText');
    unloadText  = $('#unloadText');
    var loadval   = $('#load').val();
    var unloadval = $('#unload').val();
    if (loadval > 0) {loadText.html('<i>*</i> Растояние до загрузки '+loadval+' км');
    } else {loadText.html('<i>*</i> Растояние до загрузки не указано');}

    if (unloadval > 0) {unloadText.html('<i>*</i> Растояние от загрузки '+unloadval+' км');
    } else {unloadText.html('<i>*</i> Растояние от загрузки не указано');}
    newload   = Number(loadval);
    newunload = Number(unloadval);

    //console.log(newload + newunload);
    recalc();
  }
        
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
        
  function recalc(){
    bPrice = isNumeric(bPrice) ? bPrice : 0;
    sPrice = isNumeric(sPrice) ? sPrice : 0;
    priceLoad   = isNumeric(newload) ? newload : 0;
    priceUnLoad = isNumeric(newunload) ? newunload : 0;
    result = ((bPrice + sPrice) + (priceLoad * priceOneKm) + (priceUnLoad * priceOneKm));

    changeTable();
  }
        
  function changeTable(){
    $('#result').text(result);
  }
        
  $('#sBort,#sStrela,#load,#unload').change(function(){
    changeField();
  })
        
  // select
  $('select').selecter();
        
  $('#load,#unload').ionRangeSlider({
      type: "single",
      grid: true,
      min: 0,
      max: 500,
      from: 0,
      step: 5,
      prefix: 'km '
  });
}

//html 
<form id="calc">
  <div class="form-group grid">
    <label for="sBort">Борт</label>
    <select id="sBort">
        <option selected>Размер борта</option>
    </select>
    <div id="bText" class="text"></div>
  </div>
  <div class="form-group grid">
    <label for="sStrela">Стрела</label>
    <select id="sStrela">
        <option selected>Размер стрелы</option>
    </select>
    <div id="sText" class="text"></div>
  </div>
  <hr>
  <div class="form-group">
    <div class="grid from_to">
      <span>Растояние от КАД (загрузка)</span>
      <span id="loadText" class="text"></span>
    </div>
    <input type="text" id="load" value="0" />
  </div>
  <div class="form-group">
    <div class="grid from_to">
      <span>Растояние от КАД (разгрузка)</span>
      <span id="unloadText" class="text"></span>
    </div>
    <input type="text" id="unload" value="0" />
  </div>
  <div class="wrapper_result">
    Общая стоимость услуги: <span id="result"></span> <i class="fa fa-rub" aria-hidden="true"></i>
  </div>
  <div class="tarif">Цена указана по тарифу <a href="#">Стандарт</a> <br>с 14 до 19 часов</div>
</form>


//checkbox and radio calc 
var calc = {
    summ: 0, // сумма изначально 0
    valueArray: (function () { //массив изначально создается на основе данных value выбранных кнопок
        var array = [],
            arrayLength = $('#form_calc .calc_wr').length;
        for (var i = 0; i < arrayLength; i++) {
            array[i] = parseInt($('#form_calc .calc_wr').eq(i).find('input:checked').data('price')) || 0;
        };
        return array;
    })(),
    summation: function () { //суммирует значения массива с данными
        var summ = 0,
            i = this.valueArray.length - 1;
        for (; i >= 0; i--) {
            summ += this.valueArray[i];
        };
        this.summ = summ;
        $("#summ").html(calc.summ);
    },
    changeEvent: function () {	//подключение обработчика событий
      $("#form_calc input[type='radio']").change(function () {	//для радиокнопок
            var element = event.target,
                elementValue = parseInt(element.dataset.price),
                elementId = $(element).parents('.calc_wr').index();
            calc.valueArray[elementId] = elementValue;
            calc.summation ();
        });

        $("#form_calc input[type='checkbox']").change(function () {	//для чекбоксов
            var element = event.target,
              // Цена элемента
                elementValue = parseInt(element.dataset.price),
                elementId = $(element).parents('.calc_wr').index();
            if (!element.checked) {
                elementValue = 0;
            };
            calc.valueArray[elementId] = elementValue;
            calc.summation ();
        });
    },
    init: function () {
        calc.summation ();
        calc.changeEvent ();
    }
};
calc.init ();

//html checkbox and radio
<form id="form_calc">
    <div class="form-group calc_wr">
      <label for="corp">Корпусная мебель</label>
      <input type="checkbox" id="corp" data-price="200" />
    </div>

    <div class="form-group calc_wr">
      <label for="tehnika">Техника</label>
      <input type="checkbox" id="tehnika"  data-price="500" />
    </div>

    <div class="form-group calc_wr">
      <label for="ss">Техника</label>
      <input type="radio" name="ss"  data-price="100" />
      <input type="radio" name="ss"  data-price="200" />
      <input type="radio" name="ss"  data-price="300" />
    </div>
</form>
