var login=(function(d){var a;function i(j){this.config=j;d("button[type=submit]").click(function(){a=d(this)});d("#forgotPwdLink").on("click mousedown",function(){b(j.usernameId)})}function g(j){return j.indexOf("?")>=0}function c(j,k){return j.indexOf(k+"=")>=0}function h(j,k){if(g(j)){return j+"&"+k}else{return j+"?"+k}}function e(j,l,k){k=encodeURIComponent(k);if(c(j,l)){return j.replace(new RegExp(l+"=[^&]*"),l+"="+k)}else{if(l&&k){return h(j,l+"="+k)}}return j}function b(l){var m=d("#"+l).val(),j=d("#forgotPwdLink"),k=j.attr("href");if(k){j.attr("href",e(k,"ruid",m))}}function f(){return a&&a[0].hasAttribute("formnovalidate")}return{init:i,shouldSkipValidation:f}}(jQuery));(function(g){var z,w={},m="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",u,h,a=login.init;function p(A){y();o();g(window).on("orientationchange",t);g(window).on("resize",d);g(window).one("touchstart",function(){u=true;g("html").addClass("touch").css("background-attachment","initial")});b();g("input").blur(function(){if(u){h=true}setTimeout(function(){h=false},0)});a.call(login,A);s(A)}function o(){d();var A=g("#background video");if(A.length){A.prop("hidden",false);if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion)").matches){A.prop("autoplay",false);A[0].pause()}}}function t(){var B=g("#background"),C=g(".has-footer > footer"),A=g(document).height();if(C.length){A=C.position().top}if(B.length){A-=B.position().top}B.css("height",A)}function b(){g("[id$=-options-toggle]").click(function(){var A=g(this),B=A.find("button[aria-expanded]");if(B.attr("aria-expanded")==="true"){e(A)}else{f(A)}})}function f(B){var C=B.find("button[aria-expanded]"),A=B.next(g("[id$=-options]"));A.prop("hidden",false).css("display","none").slideDown(400,function(){B.removeClass("options-collapsed").addClass("options-expanded");C.attr("aria-expanded",true)})}function e(B){var C=B.find("button[aria-expanded]"),A=B.next(g("[id$=-options]"));A.slideUp(400,function(){B.removeClass("options-expanded").addClass("options-collapsed");C.attr("aria-expanded",false);A.attr("hidden",true)})}function d(){var B=c();if(B!=z){z=B;r(B)}var A=g(".overlay:visible");if(A.length){l(A)}t()}function r(){var A=g(".overlay:visible");if(A.length){l(A)}}function y(){g("button[data-id-ref]").click(function(){var C=g(this),D=C.data("idRef")?g("#"+C.data("idRef")):C.next("[role=dialog]");q(D,C);return false});g("[role=dialog] .close, [role=dialog] .cancel").click(function(){x(g(this).closest("[role=dialog]"))});var B=null;var A=false;g(document).on({keydown:function(C){if(C.keyCode==27){x(g(".overlay:visible"))}},focusout:function(C){B=C.target},focusin:function(D){var E=g(".overlay:visible");if(E.length&&g(D.target).closest(".overlay").length==0){var C=E.find(m).first();if(C.is(B)){i(E)}else{n(E)}}}})}function k(A){A.attr("tab-index",0);A.focus()}function n(A){var B=A.find(m);B.first().focus()}function i(A){var B=A.find(m);B.last().focus()}function q(B,A){if(!B.data("dialogType")){B.data("dialogType","overlay")}B.data("triggerElem",A);setTimeout(function(){l(B);g("html").css("overflow","hidden");B.attr("aria-hidden",false).css("display","");g("#background, header, main, footer").attr("aria-hidden",true);B.find("> .content").css("max-height","100%");n(B)},h?500:0)}function x(A){if(A.is(":visible")){A.attr("aria-hidden",true).css("display","");g("#background, header, main, footer").attr("aria-hidden",false);A.find("> .content").css("max-height","");g("html").css("overflow","");j(A)}}function j(B){var A=B.data("triggerElem");if(A){if(g(":focus").closest(".overlay").is(B)){A.focus()}}}function l(D){if(D.is(".overlay")){var B=window.innerHeight||g(window).height();D.css({height:B,left:"",top:""});var C=!D.is(":visible");D.show();var A=D.find("> .content");A.css({top:Math.max(0,(B-A.outerHeight())/2),left:(D.outerWidth()-A.outerWidth())/2});if(C){D.hide()}}}function c(){return g("#breakpoints").css("font-family")}function v(B,A){w[A]=B}function s(A){if(A&&A.name){w[A.name](A)}else{for(var B in w){w[B](A)}}}login.init=p;login.getBreakpoint=c;login.registerInitFunction=v;login.showOverlay=q}(jQuery));var shared=function(){function g(){b();f()}function f(){$("button[data-continue-url]").click(function(){window.location.href=$(this).data("continueUrl")})}function c(h){return $("label.float[for="+h.attr("id")+"]")}function e(h){try{return h.is(":-webkit-autofill")}catch(i){}return false}function d(j,h){var i=$(j);return i.val()||e(i)||h=="focus"||(h!="blur"&&j===document.activeElement)}function a(k,h){var j=$(k),i=c($(k));if(d(k,h)){i.removeClass("accessibly-hidden");if(j.attr("placeholder")){j.data("placeholder",j.attr("placeholder")).attr("placeholder","")}}else{i.addClass("accessibly-hidden");if(j.data("placeholder")){j.attr("placeholder",j.data("placeholder"));j.removeData("placeholder")}}}function b(){var h=$("input").filter(function(){return c($(this)).length>0});h.on("focus",function(i){a(this,i.type)}).on("blur input",function(i){a(this,i.type)}).on("animationstart",function(i){a(this);switch(i.originalEvent.animationName){case"onAutoFillStart":c($(this)).addClass("autofill");break;case"onAutoFillCancel":c($(this)).removeClass("autofill");break}}).each(function(){a(this);if(e($(this))){c($(this)).addClass("autofill")}})}return{init:g}}();function CircleLoader(d){var j=d.loopOnce?1:2,n=d.loopOnce?1:360,k=d.loopOnce?-90:0,a=d.container.getElementsByTagName("circle")[0],f=parseInt(a.getAttribute("cx"),10),e=parseInt(a.getAttribute("cy"),10),l=parseInt(a.getAttribute("stroke-dasharray"),10),i=!!window.requestAnimationFrame,b,c;function h(q){if(!q){q=(new Date()).valueOf()}if(!c){c=q}var o=q-c,p=(o%d.loopTime)/d.loopTime,s=(n*p)+k,r=l*(3-j*p);a.transform.baseVal.getItem(0).setRotate(s,f,e);a.style.strokeDashoffset=r;if(i){b=requestAnimationFrame(h)}}function g(){c=0;a.style.strokeDasharray=l;b=i?requestAnimationFrame(h):setInterval(h,16)}function m(){if(window.cancelAnimationFrame){cancelAnimationFrame(b)}else{clearInterval(b)}a.style.strokeDashoffset=0}return{startLooping:g,stopLooping:m}}login.initPushNotifications=function(d){var k=d.loaderDelay,c=d.interval,h,i=d.timeout,b;function f(){if(window.CircleLoader){b=new CircleLoader({container:$("#loader")[0],loopTime:k});b.startLooping()}}function a(){f();var n=c;h=setInterval(function(){if(n>i){clearInterval(h);n=0;e("timeout")}else{g();n+=c}},c);login.init()}a();function g(){$.ajax({url:"/api/cmfa/poll",dataType:"json",timeout:i,error:function(n,o){m(o)},success:function(o,p,n){m(o.pollResponse)}})}function m(n){switch(n){case"DENIED":e("denied");break;case"PENDING":break;case"APPROVED":j();break;default:e("timeout");break}}function j(){clearInterval(h);if(b){b.stopLooping()}$("form").submit()}function e(n){if(b){b.stopLooping()}clearInterval(h);$("#loader, #remember_me, #push-message").attr("hidden","true");$("#warning").prop("hidden",false);if(n==="denied"){$("#expired_heading").attr("hidden","true");$("#denied_heading").prop("hidden",false)}else{$("#expired_heading").prop("hidden",false);$("#denied_heading").attr("hidden","true")}l()}function l(){$("#authentication-options-toggle").remove();$("#authentication-options").finish().prop("hidden",false).css("display","block")}};