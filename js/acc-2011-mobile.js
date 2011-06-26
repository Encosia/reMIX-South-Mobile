$('div').live('pageshow', function(event, ui) {
  try {
    clicky.log($.mobile.path.get() || '/', document.title);
  }
  catch(e) {}
});