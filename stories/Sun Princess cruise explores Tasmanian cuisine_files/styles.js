$(function() {
    // empty
    if ( $(".bgfix").length ){
        $('[data-background]').each(function( index ) {
            $(this).css("cssText", "background-image:url('" + $(this).data("background") + "') !important");

        });
    }


    if ( $('body.deck .theme-custom.ford-index').length ) {
        $("body.deck").addClass("fordhome");
    }

    // storymap issue on mobile on android only - jdz 21/12/2016
    function wordInString(s, word){
        return new RegExp( '\\b' + word + '\\b', 'i').test(s);
    }

    if(wordInString($('meta[name=keywords]').attr('content'), 'storymap-iframe') && $('.story.mobile').length){
        $( '#story-read-more' ).on( 'click', function() {
            $('.story-iframe.secondary-asset iframe').attr('src', $('.story-iframe.secondary-asset iframe').attr('src'));
        });
    }


    // Event Widget Move
    // --------------------------------------------------------------------
    if($('#newscorpau_static_template-567').length){
        $('#newscorpau_static_template-567').prependTo('#comments-notice');
        $('#newscorpau_static_template-567').css('padding-bottom','20px');
    }

    if($('#newscorpau_static_template-570').length){
        $('#newscorpau_static_template-570').prependTo('#comments-notice');
        $('#newscorpau_static_template-570').css('padding-bottom','20px');
    }

    if($('#newscorpau_static_template-575').length){
        $('#newscorpau_static_template-575').prependTo('#newscorpau_capi_sync_collection-1775');
        $('#newscorpau_static_template-575').css('padding-bottom','20px');
    }

    // Marketing test
    // --------------------------------------------------------------------
    var hostNameTest = window.location.hostname,
        isThisUAT = /(theaustralianuat)\./.test(hostNameTest);

    if(isThisUAT ){
        $('body').addClass('UAT-ENVIRONMENT');
    }


    // deck global var, grabs deck id.
    var keywords = $('meta[name=keywords]').attr("content");

    // deck next prev if first.
    if ( keywords.indexOf('deck-7673') !== -1 ) {
        // hide prev.
        $("body.deck #content div.container.spp2 .promo-module.promo-showcase .promo-block.prev").hide();
    }

    // deck newsletter signup
    if ( keywords.indexOf('deck-8222') !== -1 ) {
        // hide breadcrumb.
        $("body.deck #breadcrumbs").hide();
    }


    //deck hotty for anchor card. find prev sibling and set margin-bottom to 0px
    if ( $("body.deck").length ){
        $('div.anchor').each(function() {
            $(this).prev().css( "margin-bottom", "0px" );
        });
    };


    // missing data attr due to crop issue
    $( "figure a" ).each(function( index ) {
        if ($(this).attr("data-size") === 'undefined') {
            jQuery(this).attr("data-size","1024x768")
        }
    });




});



