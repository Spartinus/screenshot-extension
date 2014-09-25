$(function () {
  $('[tr]').each(function() {
    var tag = $(this).attr('tr');
    var message = chrome.i18n.getMessage(tag);
    if (message) {
      $(this).html(message);
    } else if (settings.dev) {
      $(this).html('<small>[' + tag + ']</small>' +  $(this).text());
    }
  });
});