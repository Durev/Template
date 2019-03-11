// Timeout with fade for alerts
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function alertTimeout(){
	setTimeout(function(){
    $('#flash').removeClass('fadeIn');
		$('#flash').addClass('fadeOut');
		sleep(1000).then(() => {
			$('#flash').remove();
		});
  }, 7000);
}

alertTimeout();