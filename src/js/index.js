import './code_block_custom.js';

// jquery masonry
import '../../node_modules/jquery-bridget/jquery-bridget.js';
import '../../node_modules/masonry-layout/dist/masonry.pkgd.js';
import '../../node_modules/imagesloaded/imagesloaded.pkgd.min.js';

// jquery magnefic popup
import '../../node_modules/magnific-popup/dist/magnific-popup.css';
import '../../node_modules/magnific-popup/dist/jquery.magnific-popup.js';

// infinite-scroll
import '../../node_modules/imagesloaded/imagesloaded.pkgd.js';
import '../../node_modules/infinite-scroll/dist/infinite-scroll.pkgd.js';
import '../../node_modules/jquery-bridget/jquery-bridget.js';


$(function() {

    /////
    // Webpackでmasonryをビルドする場合のお作法
    //    https://github.com/desandro/masonry/issues/936
    //    https://masonry.desandro.com/extras.html#webpack
    // Webpackでimagesloadedをビルドする場合のお作法
    //    https://github.com/desandro/imagesloaded#webpack
    // Webpackでinfinite-scrollをビルドする場合のお作法
    //    https://infinite-scroll.com/extras.html#webpack-browserify
    /////
    var jQueryBridget = require('jquery-bridget');
    var imagesLoaded = require('imagesloaded');
    var Masonry = require('masonry-layout');
    var InfiniteScroll = require('infinite-scroll');
    jQueryBridget( 'imagesLoaded', imagesLoaded, $ );
    jQueryBridget( 'masonry', Masonry, $ );
    jQueryBridget( 'infinitescroll', InfiniteScroll, $ );
    InfiniteScroll.imagesLoaded = imagesLoaded;

    var msnry = new Masonry( '#masonry', {
        itemSelector : '.item',
        columnWidth  : 5,
        isFitWidth   : false,
        isAnimated   : true,
        animationOptions: {
            duration : 750,
            easing   : 'linear',
            queue    : false
        }
    });


    var infScroll = new InfiniteScroll( '#masonry', {

        // onInit
        //   2ページ目以降を infinite-scrollで追加する際にmagnefic-popupの初期化を行う
        //
        //   refs
        //     https://infinite-scroll.com/options.html#oninit
        //     https://stackoverflow.com/questions/46348603/infinite-scroll-with-magnific-popup-callback
        onInit: function() {
            this.on( 'append', function() {
                console.log('Infinite Scroll appended.')
                console.log('magnefic-popup initialization.')
                $('.magnific-popup').magnificPopup({
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 200,
                    preloader: false
                });
            });
        },

        // history: false
        //   disable changing the URL by setting.
        //   refs
        //     https://github.com/metafizzy/infinite-scroll/issues/701#issuecomment-321832327
        //     https://infinite-scroll.com/options.html#history
        history         : false,
        appendCallback  : true,
        scrollThreshold : 10,
        append          : '.item',
        outlayer        : msnry,
        navSelector     : '#page-nav',
        nextSelector    : '#page-nav a',
        path            : '#page-nav a',
        itemSelector    : '.item',
        status          : '.page-load-status'
    });

    $('.page-load-status').hide();

});
