<!-- DOP files
     ajaxForm.js
     fiNotRequredIfSet.php
     fiRegexp.php -->

<!-- add chunk -->
<!-- $allForm -->
{include 'allForm' formTpl='ajaxFormTpl' emailSubject='Консультация с сайта ' successMessage='Спасибо, ваша заявка отправлена'}

{set $validate='
name:required,
newField:required,
email:email:fiNotRequredIfSet=phone,phone:fiNotRequredIfSet=email:fiRegexp=#(^$|^(\+7|8) [0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}$)#'}

<!-- $sendEmailTpl
     $ajaxFormTpl -->
{'!AjaxForm' | snippet : [
    'snippet'                                 => 'FormIt',
    'form'                                    => $formTpl,
    'frontend_css'                            => '',
    'frontend_js'                             => 'assets/components/project/app/js/ajaxForm.js',
    'hooks'                                   => 'email',
    'emailSubject'                            => $emailSubject ? $emailSubject ~ $_modx->config.site_url : 'Заявка на обратный звонок с сайта' ~ $_modx->config.site_url,
    'emailFrom'                               => $_modx->config.emailsender,
    'emailTo'                                 => $_modx->config.key_email ? $_modx->config.key_email : 'palma.elekak@yandex.ru',
    'emailBCC'                                => $_modx->config.key_email_manager ? $_modx->config.key_email_manager : 'likelid@yandex.ru',
    'emailTpl'                                => 'sendEmailTpl',
    'validate'                                => $validate,
    'customValidators'                        => 'fiNotRequredIfSet,fiRegexp',
    'name.fiNotRequredIfSetMessage'           => 'Введите ваше имя или, как к вами лучше обратиться',
    'phone.fiNotRequredIfSetMessage'          => 'Укажите ваш телефон',
    'phone.fiRegexpMessage'                   => 'Укажите в формате +7 XXX-XX-XX',
    'email.fiNotRequredIfSetMessage'          => 'Или укажите ваш E-mail',
    'validationErrorMessage'                  => 'Заполните все необходимые поля',
    'successMessage'                          => $successMessage ? $successMessage :'Ваша заявка успешно отправленна! Скоро наш менеджер свяжется с вами',
    'submitVar'                               => 'sendOrder'
]}

<!-- $ajaxForm_tpl Default HTML form botstrap 3 or botstrap 4 -->
<form class="order-form ajax_form" novalidate>
  <input type="hidden" value="{$_modx->config.site_url}{$_modx->makeUrl($_modx->resource.id)}" name="page_url">
  <div class="form-group">
    <input type="text" class="form-control" id="name" name="name" placeholder="Имя" required>
    <div data-error-for="name"></div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="phone" name="phone" placeholder="Телефон" required>
    <div data-error-for="phone"></div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="email" name="email" placeholder="E-mail" required>
    <div data-error-for="email"></div>
  </div>
  <div class="form-group">
    <textarea class="form-control" id="message" name="message" placeholder="Краткое сообщение"></textarea>
  </div>
  <div class="toggle-alert alert" role="alert" style="display:none;"></div>
  <div class="form-group btn-wrap">
    <button type="submit" class="btn" name="_sendOrder" value="1">Оправить</button>
  </div>
  <div class="alert alert-info" role="alert">
    Нажимая на кнопку, Вы даете согласие на обработку своих персональных данных и соглашаетесь с 
    <a href="{$_modx->makeUrl(100)}">политикой конфиденциальности</a>
  </div>
</form>

<!-- $sendEmailTpl -->
{if $name}
  <p><strong>Имя:</strong> {$name}</p>
{/if}
{if $phone}
  <p><strong>Телефон:</strong> {$phone}</p>
{/if}
{if $email}
  <p><strong>Почта:</strong> {$email}</p>
{/if}
{if $message}
  <p><strong>Сообщение:</strong> {$message}</p>
{/if}
{if $page_url}
  <p><strong>Форма отправлена со <a href="{$page_url}">страницы</a></strong></p>
{/if}
