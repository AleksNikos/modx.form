var Callback = {

    initialize: function(afConfig) {
        if (typeof afConfig == 'undefined') {
            afConfig = window.afConfig;
        }

        if(!jQuery().ajaxForm) {
            document.write('<script src="'+afConfig.assetsUrl+'js/lib/jquery.form.min.js"><\/script>');
        }

        $(document).on('submit', afConfig.formSelector, function(e) {
            $(this).ajaxSubmit({
                dataType: 'json'
                ,url: afConfig.actionUrl
                ,beforeSubmit: function(fields, form) {
                    var inputs = form.find('input.init'),
                        valid = true;
                    inputs.tooltip('destroy');
                    $.each(inputs, function(index, val) {
                        var input = $(val),
                            val = input.val(),
                            formGroup = input.parents('.form-group'),
                            label = formGroup.find('label').text().toLowerCase(),
                            textError = 'Введите ' + label;
                        if(val.length === 0){
                            formGroup.addClass('has-error').removeClass('has-success');
                            input.tooltip({
                                trigger: 'manual',
                                placement: 'top',
                                title: textError
                            }).tooltip('show');
                            valid = false;
                        }else{
                            formGroup.addClass('has-success').removeClass('has-error');
                        }
                    });
                }
            
                ,success: function(response, status, xhr, form) {
                    /*form.find('input,textarea,select,button').attr('disabled', false);*/
                    if (!response.success) {
                        if (response.data) {
                            var key, value;
                            for (key in response.data) {
                                if (response.data.hasOwnProperty(key)) {
                                    value = response.data[key];
                                    form.find('.error_' + key).html(value);
                                }
                            }
                        }
                    }
                    else {

                        form.find('.modal-body').html(response.message);
                        form.find('.modal_content').html('').detach();
                        form.find('.modal-footer').html('').detach();
                    }
                }
  
            });
            e.preventDefault();
            return false;
        });

        
        $(document).on('ready', function(){
            var $backdrop = $('.modal-backdrop'), $modal = $('.modal');
            var bz = $backdrop.css('z-index'), mz = $modal.css('z-index');
            if (bz >= mz) {
                $modal.css('z-index', bz+1);
            }
        });
        
    }

};

if (window.afConfig) {
    Callback.initialize();
}
