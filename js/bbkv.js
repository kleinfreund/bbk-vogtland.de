$(document).ready(function(){
    var $animateTime = 500;

    $('.members').on('click', '.member__link', function(event) {
        event.preventDefault();

        var $memberContent = $(this).next('.member__content');

        var $justShown = $memberContent.filter('.visible').removeClass('visible');

        $memberContent.not($justShown).addClass('visible');

        if($memberContent.height() === 0){
            autoHeightAnimate($memberContent, $animateTime);
        } else {
            $memberContent.stop().animate({ height: '0' }, $animateTime);
        }
    });

    function autoHeightAnimate(element, time){
        var $curHeight = element.outerHeight(),
            $autoHeight = element.css('height', 'auto').outerHeight();

        element.outerHeight($curHeight);

        element.stop().animate({ height: $autoHeight }, parseInt(time));
    }
});
