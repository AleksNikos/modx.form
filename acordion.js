! function(i) {
  var o, n;
  i('.acordion_title').on('click', function() {
    o = i(this).parents(".accordion_item"), n = o.find('.info'),
      o.hasClass('active_block') ? (o.removeClass('active_block'),
        n.slideUp()) : (o.addClass('active_block'), n.stop(!0, !0).slideDown(),
        o.siblings('.active_block').removeClass('active_block').children(
          '.info').stop(!0, !0).slideUp())
  })
}(jQuery);

// HTML
{$_modx->runSnippet('!getImageList',[
  'tvname'        => 'priceMigx'
  'wrapperTpl'    => '@CODE: <div id="accordion">[[+output]]</div>',
  'tpl'           => 'priceMigxTpl',
  'docid'         => $_modx->resource.id,
  'limit'         => 0
])}
<!-- $priceMigxTpl -->
<div class="accordion_item [[+idx:is=`1`:then=`active_block`]]">
    <h3 class="acordion_title">[[+title]] <span class="ac_close"></span></h3>
    <div class="info" style="display: [[+idx:is=`1`:then=`block`]];">
      <div class="table-responsive"> 
        <table class="table">
          <thead>
            <tr>
              <th>par_1</th>
              <th>par_2</th>
              <th>par_3</th>
            </tr>
          </thead>
          <tbody>
            {$_modx->runSnippet('!getImageList',[
              'tvname'        => 'priceInMigx'
              'value'         => '[[+priceInMigx]]', 
              'tpl'           => '@CODE: <tr>
                  <td>[[+par_1]]</td>
                  <td>[[+par_2]]</td>
                  <td>[[+par_3]]</td>
                </tr>',
              'limit'         => 0
            ])}
          </tbody>
        </table>
      </div>
    </div>
</div>

//CSS
/* ACORDION */
#accordion .accordion_item {
  margin-bottom: 1px;
  position: relative;
  margin-bottom: 10px;
}
#accordion .acordion_title {
  position: relative;
  font-weight: 400;
  font-size: 26px;
  color: #000;
  cursor: pointer;
  padding: 21px 15px 21px;
  border-bottom: 1px solid #000;
  -webkit-transition: all .2s linear;
  -moz-transition: all .2s linear;
  -ms-transition: all .2s linear;
  -o-transition: all .2s linear;
  transition: all .2s linear;
}
#accordion .acordion_title:hover {
  opacity: 0.85;
}
#accordion .active_block .acordion_title {
  font-weight: 700;
}
#accordion .info {
  display: none;
  padding: 21px 0 0;
  overflow: hidden;
  background-color: #fff;
}
#accordion .info_item {
  margin-bottom: 10px;
}
#accordion .ac_close {
  position: absolute;
  right: 32px;
  top: 50%;
  margin-top: -22.5px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
#accordion .active_block .ac_close {
  background-color: #2297d8;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
#accordion .ac_close:before, #accordion .ac_close:after {
  position: absolute;
  left: 21.5px;
  top: 7px;
  content: '';
  height: 30px;
  width: 2px;
  background-color: #000;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
#accordion .ac_close:before {
  transform: rotate(0deg);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
#accordion .ac_close:after {
  transform: rotate(90deg);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
#accordion .active_block .ac_close:before, #accordion .active_block .ac_close:after {
  background-color: #fff;
}
#accordion .active_block .ac_close:before {
  transform: rotate(45deg);
}
#accordion .active_block .ac_close:after {
  transform: rotate(135deg);
}
#accordion .active_block .acordion_title:hover .ac_close:before {
  transform: rotate(90deg);
}
#accordion .active_block .acordion_title:hover .ac_close:after {
  transform: rotate(180deg);
}
#accordion .acordion_title:hover .ac_close:before,
#accordion .acordion_title:focus .ac_close:before {
  transform: rotate(45deg);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
#accordion .acordion_title:hover .ac_close:after,
#accordion .acordion_title:focus .ac_close:after {
  transform: rotate(135deg);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
/* ac table */
#accordion table {
  text-align: center;
  margin: 0;
}
#accordion table thead tr th {
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  color: #000;
}
#accordion table thead tr th span {
  display: block;
}
#accordion table tbody tr td {
  vertical-align: middle;
  color: #000;
  font-weight: 400;
}
/* END ac */
