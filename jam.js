$(function () {
  /* =========================================
        COUNTDOWN 
     ========================================= */
  $("#clock-b")
    .countdown("2021/8/31")
    .on("update.countdown", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="holder m-2"><span class="h1 font-weight-bold">%D</span> Hari</div>' +
            '<div class="holder m-2"><span class="h1 font-weight-bold">%H</span> Jam</div>' +
            '<div class="holder m-2"><span class="h1 font-weight-bold">%M</span> Menit</div>' +
            '<div class="holder m-2"><span class="h1 font-weight-bold">%S</span> Detik</div>'
        )
      );
    });
});
