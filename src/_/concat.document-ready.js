$(".breadcrumb__list").closest(".section__container").addClass("is--breadcrumb");
var card=$("[data-services-card]"),result=$("#services-result ul");card.on("change",function(){1==$(this).prop("checked")?($("#services-result").addClass("is--visible"),$(document).find(result).append("<li>"+$(this).val()+"</li>")):($(document).find("li:contains('"+$(this).val()+"')").remove(),0==$("#services-result ul li").length&&$("#services-result").removeClass("is--visible"))});
var res="noname-browser",userAgent=navigator.userAgent.toLowerCase();-1!=userAgent.indexOf("msie")&&(res="is--msie"),-1!=userAgent.indexOf("trident")&&(res="is--msie"),-1!=userAgent.indexOf("firefox")&&(res="is--firefox"),$(".chat__block").addClass(res),$(".chat__textarea").focusout(function(){var e=$(this);e.text().replace(" ","").length||e.empty()});


var form_panel=$("[data-form-validation]"),phone=$(".form__control[type='tel']"),file=$(".form__file-input"),file_name=$(".form__file-name"),input=$(".form__control"),reset=$(".form__reset");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),form_panel.validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1}),input.on("input",function(){$(this).siblings(".form__result").addClass("is--open"),$(this).siblings(".form__clear").addClass("is--active")}),file.on("change",function(e){console.log($(this).val()),$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,""))}),reset.on("click",function(e){file_name.html(file_name.data("heading"))});
$("img").addClass("img-responsive");

$(".informer__panel.is--basket").closest("body").addClass("is--informer-basket"),$(".informer__panel.is--order").closest("body").addClass("is--informer-basket");


var humb=$("[data-hamburger]"),resize=$("[data-resize]"),collapse=$(".navbar__aside"),html=$("html");humb.on("click",function(){$(this).toggleClass("is--active"),$(collapse).toggleClass("is--open"),$(html).toggleClass("is--open-navbar")}),resize.on("click",function(){$(this).toggleClass("is--full"),$(html).toggleClass("is--full-site")}),$(document.body).on("click",function(e){0==$(e.target).closest(".navbar__aside-container").length&&0==$(e.target).closest("[data-hamburger]").length&&(humb.removeClass("is--active"),$(html).removeClass("is--open-navbar"),$(collapse).removeClass("is--open"))});

var link=$(".tabs__link"),dropdown=".tabs__dropdown span",name=$(".tabs__item.active .tabs__link").text();$(dropdown).text(name),link.on("shown.bs.tab",function(t){var n=$(this).text();$(this).closest(".tabs__panel").find(dropdown).text(n)});
$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled");
$(".nav-tabs").scrollingTabs();
$("[data-selectize-default]").selectize({sortField:"text",lockOptgroupOrder:!0}),$("[data-selectize-multiple]").selectize({plugins:["remove_button"],delimiter:","});
"use strict";$(function(){var s=$("[data-slick-catalog]"),a=($("[data-slick-catalog]").data("slick-prev"),$("[data-slick-catalog]").data("slick-next"),$("[data-slick-catalog-card]")),t=$("[data-slick-catalog-card-nav]"),i=$("[data-slick-catalog-card-table]"),l=($('[data-slider-slick="slick-gallery"]'),$('[data-slider-slick="slick-partners"]'),$('[data-slider-slick="slick-edu"]'),'<button type="button" class="slick-btn  is--prev  is--bg"><span class="sr-only">Предыдущий слайд</span></button>'),o='<button type="button" class="slick-btn  is--next  is--bg"><span class="sr-only">Следующий слайд</span></button>',e=$(".slick-count");s.on("init reInit afterChange",function(s,a,t,i){var l=(t||0)+1;$(this).find(e).html("<span>"+l+"</span><span> / </span><span>"+a.$dots[0].children.length+"</span>")}),$(".section__section").each(function(){$("[data-slick-catalog]",$(this)).slick({slide:".card__item",slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,autoplay:!1,variableWidth:!0,infinite:!1,prevArrow:$(this).find(".slick-btn.is--prev"),nextArrow:$(this).find(".slick-btn.is--next"),responsive:[{breakpoint:768,settings:{arrows:!1}}]})}),a.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0,fade:!0,autoplay:!0,autoplaySpeed:4e3,prevArrow:l,nextArrow:o,asNavFor:t,responsive:[{breakpoint:768,settings:{dots:!0}}]}),t.slick({slidesToShow:5,slidesToScroll:1,asNavFor:a,centerMode:!0,arrows:!0,variableWidth:!0,prevArrow:l,nextArrow:o,focusOnSelect:!0}),i.slick({slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1,variableWidth:!0,infinite:!1,prevArrow:l,nextArrow:o,responsive:[{breakpoint:768,settings:{arrows:!1,slidesToShow:1}}]})});