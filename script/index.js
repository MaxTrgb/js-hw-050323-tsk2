$(document).ready(function() {
    $(".toggle-arrow").click(function() {
      var block = $(this).closest('.block');
      if ($(this).hasClass('left')) {
        block.toggleClass('hidden');
        $(this).toggleClass('left right').html($(this).hasClass('left') ? '&lt;' : '&gt;');
      } else {
        var leftBlock = block.prev('.block');
        leftBlock.toggleClass('hidden');
        $(this).toggleClass('left right').html($(this).hasClass('left') ? '&lt;' : '&gt;');
      }
    });
  
    $(".resize-bar").mousedown(function(e) {
      var block = $(this).closest('.block');
      var startY = e.clientY;
      var startHeight = parseInt(block.css('height'));
  
      $(document).mousemove(function(e) {
        var deltaY = startY - e.clientY;
        var newHeight = startHeight + deltaY;
  
        if (newHeight >= 100) {
          block.css('height', newHeight + 'px');
        }
      });
  
      $(document).mouseup(function() {
        $(document).off('mousemove');
        $(document).off('mouseup');
      });
    });
  });