!function(d,e,a){var p=d(e);d(a).ready(function(){var a=d("body"),t={Hover:"hover",Active:"active",ShowNavMain:"show-nav-main",FixedHeader:"show-fixed-header",PageLoad:"page-load"},e={Mobile:!1,Desktop:!1,Tablet:!1},r={Scroll:0,WinWidth:0};function o(){setTimeout(function(){d(".carrousel-home .caroufredsel_wrapper").height(d(".carrousel-home .slider-content").outerHeight())},50)}function n(e){var a=e.clone();e.after(a),e.remove(),a.attr("style","").find(".slider-content").attr("style","")}function l(e,a){(e.find(".slider-content").length?e.find(".slider-content"):e.find(".slider__slides")).carouFredSel(a)}function s(){a.removeClass(t.ShowNavMain),d(".expanded.mn-item-lvl-1").removeClass("expanded")}function c(){r.WinWidth=p.width(),e.Desktop=1024<r.WinWidth,e.Mobile=r.WinWidth<=767,e.Tablet=r.WinWidth<=1024&&768<=r.WinWidth}d(".newsletter-form .nf-main-content").prepend('<a href="#" class="newsletter-close"></a>'),d(".article_list .global-wrapper, .article .global-wrapper, body.partner .global-wrapper, body.catalogue .global-wrapper, body.page-events .global-wrapper").prepend('<div class="page-circle">'),d(".gla-item-img").wrap('<div class="gla-item-img-wrapper">'),d(".an-item-illust").wrap('<div class="an-item-img-wrapper">'),d(".la-list .la-item-content").wrapInner('<div class="la-item-content-inner">'),d(".exposer-focus img").wrap('<div class="af-image">').parent().css("background-image: url("+d(".exposer-focus img").attr("src")+")"),d(".carrousel-home .la-slider").append('<a href="#" class="slider-arrow slider-arrow--prev"><i class="ico-arrow-left"></i></a>').append('<a href="#" class="slider-arrow slider-arrow--next"><i class="ico-arrow-next"></i></a>'),d(".petit-carrousel-home .la-slider").append('<a href="#" class="slider-arrow slider-arrow--prev"></a>').append('<a href="#" class="slider-arrow slider-arrow--next"></a>'),d(".carrousel-anim-home .la-slider").append('<a href="#" class="slider-arrow slider-arrow--prev"></a>').append('<a href="#" class="slider-arrow slider-arrow--next"></a>'),d(".article-title .inside").append(d(".article-title .at-illust").wrap('<div class="article-image-wrapper">').parent().detach()),d(".article-title .article-image-wrapper").append(d(".article-title .at-theme").detach()),d("body:not(.exposer) .site-banner .main-navigation").prepend('<a href="#" class="mn-close"></a>'),d(".mn-close").click(function(e){e.preventDefault(),s()}),c(),a.on("click touchstart",function(e){d(e.target).parents(".main-navigation").length||s()}),d(".newsletter-form").click(function(){d(event.target).parents(".newsletter-form").length||(a.removeClass("show-newsletter"),d(".newsletter-form").fadeOut())}),d("body:not(.exposer) .site-banner .mn-item-lvl-1 > .mn-link").click(function(e){e.preventDefault(),d(this).parent().toggleClass("expanded").siblings().removeClass("expanded"),d(".mn-item-lvl-1").hasClass("expanded")?a.addClass("show-nav-main"):a.removeClass("show-nav-main")}),d(".btn-menu").click(function(e){e.preventDefault(),a.toggleClass(t.ShowNavMain)}),d('[href="#newsletter"]').click(function(e){d(".newsletter-form").length&&(e.preventDefault(),a.addClass("show-newsletter"),d(".newsletter-form").fadeIn(400))}),d(".newsletter-close").click(function(e){e.preventDefault(),a.removeClass("show-newsletter"),d(".newsletter-form").fadeOut(400)}),d(".resultat-recherche-home .catal-ex-item-buttons").each(function(){var e=d(this),a=e.closest(".catal-ex-item-content").find(".catal-ex-item-desc");e.detach().appendTo(a)}),d(".jsTabs .tabs__nav a").click(function(e){var a=d(this),t=a.parent().index(),i=a.closest(".jsTabs");e.preventDefault(),a.parent().add(i.find(".tab:nth-child("+(t+1)+")")).addClass("active").siblings().removeClass("active")}),function(e){for(i=0;i<e.length;i++)d(e[i]).attr("data-aos","fade-in")}([".global-wrapper",".block:not(.article-focus):not(.newsletter-form)",".article-intro",".article-content",".cl-content","ul.style3",".tabs",".calendar-item",".pub-banner",".gla-item",".la-list",".la-list .la-item",".paginatoin",".article-content blockquote",".article-content figure"]),p.on("load",function(){d("body").addClass("loaded"),o(),d(".youmax").each(function(){d(this).youmax({skin:"block1",apiKey:"AIzaSyC9-ccCSlXZk2tfJflKjIfxi8EuzDzPVqk",vimeoAccessToken:"",clientId:"28499349757-od8saulfhctvu2ao84569p6hls66396c.apps.googleusercontent.com",channel:"",youtube_playlist_videos:[{name:"Videos",url:"https://www.youtube.com/playlist?list=PLpYLoB8csAVfVmPjL_rT6OzuClZ98NC2z",selected:!0}],loadMode:"paginate-sides",loadButtonSize:"small",hideHeader:!0,hideNavigation:!0,hideComments:!0,hideLoadMore:!0,hideDefinition:!0,maxResults:3,tabStyle:"wire",youmaxBackgroundColor:"#ffffff",maxContainerWidth:960,fourColumnThumbnailWidth:"100%",fourColumnThumbnailLeftRightMargin:"0",videoProtocol:"https:"})}),d(".carrousel-home .la-slider").append('<div class="slider-background">'),e.Desktop&&function(){function e(e,a,t){e.attr({"data-top-bottom":"transform: translate3d(0, "+a+", 0)","data-bottom-top":"transform: translate3d(0, "+t+", 0)"})}setTimeout(function(){e(d(".carrousel-home .slider-image"),"130px","-50px"),e(d(".carrousel-home .slider-background"),"130px","-50px"),e(d(".page-circle"),"150px","-150px"),e(d(".la-list .la-item-img"),"80px","-80px"),e(d(".an-item-img-wrapper"),"60px","-40px"),e(d(".article-focus img"),"100px","-40px"),e(d(".block-social .block__image"),"150px","-150px"),skrollr.init()},50)}(),AOS.init({offset:p.height()/8,duration:800}),setTimeout(function(){AOS.refresh()},500)}),p.on("scroll",function(){r.Scroll=p.scrollTop(),a.toggleClass(t.FixedHeader,10<r.Scroll),o()}),p.on("resize orientationchange",function(){c(),o()}),d(".carrousel-home .slider").length&&(n(d(".carrousel-home .la-slider")),p.on("load",function(){l(d(".carrousel-home .la-slider"),{width:"100%",items:1,responsive:!0,scroll:{fx:"fade",duration:400,onBefore:function(){d(this).find(".la-item").removeClass("active")},onAfter:function(){d(this).find(".la-item:first-child").addClass("active")}},swipe:{onTouch:!0,onMouse:!1},auto:{play:!0,timeoutDuration:7e3},prev:".carrousel-home .slider-arrow--prev",next:".carrousel-home .slider-arrow--next",pagination:{container:".carrousel-home .slider-pagin"},onCreate:function(){d(this).find(".la-item:first-child").addClass("active"),d(".carrousel-home .la-item-img").each(function(){d(this).wrap('<div class="slider-image">')})},infinite:!0})})),d(".petit-carrousel-home .slider").length&&(n(d(".petit-carrousel-home .slider")),p.on("load",function(){l(d(".petit-carrousel-home .slider"),{width:"100%",items:1,responsive:!0,scroll:{fx:"fade",duration:400,onBefore:function(){d(this).find(".la-item.active").removeClass("active")},onAfter:function(){d(this).find(".la-item:first-child").addClass("active")}},swipe:{onTouch:!0,onMouse:!1},auto:{play:!0,timeoutDuration:5e3},prev:".petit-carrousel-home .slider-arrow--prev",next:".petit-carrousel-home .slider-arrow--next",pagination:{container:".petit-carrousel-home .slider-pagin"},onCreate:function(){d(this).find(".la-item:first-child").addClass("active")},infinite:!0})})),d(".carrousel-anim-home .slider").length&&(n(d(".carrousel-anim-home .slider")),p.on("load",function(){l(d(".carrousel-anim-home .slider"),{width:"100%",items:1,responsive:!0,scroll:{fx:"fade",duration:400,onBefore:function(){d(this).find(".la-item.active").removeClass("active")},onAfter:function(){d(this).find(".la-item:first-child").addClass("active")}},swipe:{onTouch:!0,onMouse:!1},auto:{play:!0,timeoutDuration:5e3},prev:".carrousel-anim-home .slider-arrow--prev",next:".carrousel-anim-home .slider-arrow--next",pagination:{container:".carrousel-anim-home .slider-pagin"},onCreate:function(){d(this).find(".la-item:first-child").addClass("active")},infinite:!0})}))})}(jQuery,window,document);
