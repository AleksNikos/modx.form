{var $style = [
'logo' => 'display:block;margin: auto;',
'a' => 'color:#348eda;',
'p' => 'font-family: Arial;color: #666666;font-size: 12px;',
'h' => 'font-family:Arial;color: #111111;font-weight: 200;line-height: 1.2em;margin: 40px 30px;',
'h1' => 'font-size: 36px;',
'h2' => 'font-size: 28px;',
'h3' => 'font-size: 22px;',
'th' => 'font-family: Arial;text-align: left;color: #111111;border:1px solid #ddd;padding:3px 7px;',
'td' => 'font-family: Arial;text-align: left;color: #111111;',
]}

{var $site_url = ('site_url' | option) | preg_replace : '#/$#' : ''}
{var $assets_url = 'assets_url' | option}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>{'site_name' | option}</title>
</head>
<body style="margin:0;padding:0;background:#f6f6f6;">
<div style="height:100%;padding-top:20px;background:#f6f6f6;">
    {block 'logo'}
        <a href="{$site_url}">
            <img style="{$style.logo}"
                 src="{$site_url}{$assets_url}components/minishop2/img/web/ms2_small@2x.png"
                 alt="{$site_url}"
                 width="120" height="90"/>
        </a>
    {/block}
    <!-- body -->
    <table class="body-wrap" style="padding:0 20px 20px 20px;width: 100%;background:#f6f6f6;margin-top:10px;">
        <tr>
            <td></td>
            <td class="container" style="border:1px solid #f0f0f0;background:#ffffff;width:800px;margin:auto;">
                <div class="content">
                    <table style="width:100%;">
                        <tr>
                            <td>
                                <h3 style="{$style.h}{$style.h3}">
                                    {block 'title'}
                                        miniShop2
                                    {/block}
                                </h3>

                                {block 'products'}
                                    <table style="width:90%;margin:auto;">
                                        <thead>
                                        <tr>
                                            <th style="{$style.th}">{'ms2_cart_title' | lexicon}</th>
                                            <th style="{$style.th}">{'ms2_cart_cost' | lexicon}</th>
                                        </tr>
                                        </thead>
                                        {foreach $products as $product}
                                            <tr>
                                                <td style="{$style.th}">
                                                    {if $product.id?}
                                                        {$product.name}
                                                    {/if}
                                
                                                </td>
                                                <td style="{$style.th}">{$product.price} {'ms2_frontend_currency' | lexicon}</td>
                                            </tr>
                                        {/foreach}
                                        <tfoot>
                                        <tr>
                                            <th style="{$style.th}">Итого</th>
                                            <th style="{$style.th}">
                                                {$total.cart_cost} {'ms2_frontend_currency' | lexicon}
                                            </th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                {/block}
                            </td>
                        </tr>
                    </table>
                    
                    <table style="width:100%;">
                        <tr>
                            <td>
                                <h3 style="{$style.h}{$style.h3}">
                                    Данные получателя
                                </h3>
                                {block 'infauser'}
                                    <table style="width:90%;margin:auto;">
                                        
                                        <tr>
                                            <td style="{$style.th}">Email</td>
                                            <td style="{$style.th}">{$user.email}</td>
                                        </tr>
                                        <tr>
                                            <td style="{$style.th}">Получатель</td>
                                            <td style="{$style.th}">{$address.receiver}</td>
                                        </tr>
                                        {if $address.phone}
                                            <tr>
                                                <td style="{$style.th}">Телефон</td>
                                                <td style="{$style.th}">{$address.phone}</td>
                                            </tr>
                                        {/if}
                                        {if $address.comment}
                                            <tr>
                                                <td style="{$style.th}">Комментарий</td>
                                                <td style="{$style.th}">{$address.comment}</td>
                                            </tr>
                                        {/if}
                                        <tr>
                                            <td style="{$style.th}">Способ оплаты</td>
                                            <td style="{$style.th}">{$payment.name}</td>
                                        </tr>
                                        
                                        
                                    </table>
                                {/block}
                            </td>
                        </tr>
                    </table>
                    
                    <table style="width:100%;">
                        <tr>
                            <td>
                                <h3 style="{$style.h}{$style.h3}">
                                    Данные о сайте
                                </h3>
                                {block 'infasite'}
                                    <table style="width:90%;margin:auto;">
                                        {if $address.pj_site_name}
                                            <tr>
                                                <td style="{$style.th}">Название сайта</td>
                                                <td style="{$style.th}">{$address.pj_site_name}</td>
                                            </tr>
                                        {/if}
                                        {if $address.pj_active_sphere}
                                            <tr>
                                                <td style="{$style.th}">Сфера деятельности компании</td>
                                                <td style="{$style.th}">{$address.pj_active_sphere}</td>
                                            </tr>
                                        {/if}    
                                        {if $address.pj_language_count}
                                            <tr>
                                                <td style="{$style.th}">Сколько языковых версий</td>
                                                <td style="{$style.th}">{$address.pj_language_count}</td>
                                            </tr>
                                        {/if}
                                        {if $address.pj_site_competitors}
                                            <tr>
                                                <td style="{$style.th}">Сайты конкурентов</td>
                                                <td style="{$style.th}">{$address.pj_site_competitors}</td>
                                            </tr>
                                        {/if}
                                        {if $address.pj_dop_info}
                                            <tr>
                                                <td style="{$style.th}">Дополнительная информация</td>
                                                <td style="{$style.th}">{$address.pj_dop_info}</td>
                                            </tr>
                                        {/if}
                                        <tr>
                                            <td style="{$style.th}">Существующие рабочии материалы</td>
                                            <td style="{$style.th}">
                                                {if $address.field_brendbook == 1}Брендбук, {/if}
                                                {if $address.field_logo == 1}Логотип, {/if}
                                                {if $address.field_slogan == 1}Слоган, {/if}
                                                {if $address.field_text == 1}Текст, {/if}
                                                {if $address.field_photom == 1}Фотоматериалы, {/if}
                                                {if $address.field_videom == 1}Видео материалы, {/if}
                                                {if $address.field_ilustration == 1}Илюстрации{/if}
                                            </td>
                                        </tr>
                                        {if $address.pj_photo_bank == 1}
                                            <tr>
                                                <td style="{$style.th}">Возможность покупки изображений в фотобанке</td>
                                                <td style="{$style.th}">Да</td>
                                            </tr>
                                        {/if}
                                    </table>
                                {/block}
                            </td>
                        </tr>
                    </table>
                    
                 
                </div>
                <!-- /content -->
            </td>
            <td></td>
        </tr>
    </table>
    <!-- /body -->
    <!-- footer -->
    <table style="clear:both !important;width: 100%;">
        <tr>
            <td></td>
            <td class="container">
                <!-- content -->
                <div class="content">
                    <table style="width:100%;text-align: center;">
                        <tr>
                            <td align="center">
                                <p style="{$style.p}">
                                    {block 'footer'}
                                    <a href="{$site_url}" style="color: #999999;">
                                        {'site_name' | option}
                                    </a>
                                    {/block}
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
                <!-- /content -->
            </td>
            <td></td>
        </tr>
    </table>
    <!-- /footer -->
</div>
</body>
</html>
