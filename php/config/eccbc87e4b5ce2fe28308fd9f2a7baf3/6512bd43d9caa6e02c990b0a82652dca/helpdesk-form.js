$("body").append('<div id="support-button" style="position: fixed;right: 0px;bottom: 100px"><a data-toggle="modal" href="#sp-modal"  class="btn btn-primary btn-lg">Contact Us</a></div>');$("body").append('<div id="sp-modal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">Test</h4></div><div class="modal-body"><form role="form" action="http://local.support.cz/submit.php" id="sp-support-forms"><input id="domain" name="domain" type="hidden"><div id="alertMessage" class="alert" style="display:none;"></div><input type="hidden" name="formId" value="11"><input type="hidden" name="userId" value="3"><div class="form-group"><label for="">Email</label><input name="email" type="email" placeholder="Your Email" id="" class="form-control"></div><div class="form-group"><label for="">Message</label><textarea name="message" type="textarea" placeholder="Your message" id="" class="form-control"></textarea></div><div class="form-group"><label for="">Newsletter</label><input name="newsletter" type="checkbox" placeholder="Want to send newsletter" id="" class="form-control"></div><div class="btn-group btn-group-justified"><a onclick="$(function(){ $(&quot;#submitNewForm&quot;).trigger(&quot;click&quot;); });" type="submit" class="btn-default btn">Submit</a><input type="submit" id="submitNewForm" style="display: none;"></div></form></div></div></div></div>');$("#domain").val(window.location.hostname);$('form#sp-support-forms').on('submit', function(e) { e.preventDefault();var parsed=null; $.post($(this).attr('action'), $(this).serializeArray(), function(data) { parsed = $.parseJSON(data.form); $('#alertMessage').addClass(data['class']); $('#alertMessage').show(); $('#alertMessage').html(data['alertMessage']);},'json'); });