$("body").append('<div id="support-button" style="position: fixed;right: 0px;bottom: 100px"><a data-toggle="modal" href="#sp-modal"  class="btn btn-primary btn-lg">Contact Us</a></div>');$("body").append('<div id="sp-modal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title"></h4></div><div class="modal-body"><form role="form" action="http://local.support.cz/submit.php" id="sp-support-forms"><input id="domain" name="domain" type="hidden"><div id="alertMessage" class="alert" style="display:none;"></div><input type="hidden" name="formId" value="61"><input type="hidden" name="userId" value="1"><div class="form-group"><label for="sadasd"></label><input name="sadasd" type="text" placeholder="" id="sadasd" class="form-control"></div><div class="form-group"><label for="dd"></label><input name="dd" type="text" placeholder="" id="dd" class="form-control"></div><div class="form-group"><label for="sd"></label><input name="sd" type="text" placeholder="" id="sd" class="form-control"></div><div class="btn-group btn-group-justified"><a onclick="$(function(){ $(&quot;#submitNewForm&quot;).trigger(&quot;click&quot;); });" type="submit" class="btn-default btn"></a><input type="submit" id="submitNewForm" style="display: none;"></div></form></div></div></div></div>');$("#domain").val(window.location.hostname);$('form#sp-support-forms').on('submit', function(e) { e.preventDefault();var parsed=null; $.post($(this).attr('action'), $(this).serializeArray(), function(data) { $('#alertMessage').addClass(data['class']); $('#alertMessage').show(); $('#alertMessage').html(data['alertMessage']);},'json'); });