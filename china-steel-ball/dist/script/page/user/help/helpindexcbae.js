function dispmoreitem(a,b,c){var d='<div class="help-more"> <ul class="more-list cl" id="morelistcontent"></ul><div class="more-page"><span class="pagination-bar"  id="notice_pager"></span></div></div>';$("#contentdata").html(d),$.ajax({type:"POST",url:WJF.util.filterUrl("/help/ajax"),data:{action:"get-list",cid:a,field:b,keyword:c},dataType:"json",cache:!1,success:function(d){if(200!=d.code)return void $("#morelistcontent").html(I18NMessage.page.help.DATA_ERROR_PROMPT);var e=Math.ceil(d.data.total/15);laypage({cont:"notice_pager",pages:e,curr:1,groups:5,skip:!0,count:d.data.total,limit:15,limits:[10,20,30,40,50],lang:WJF.util.getSystemLang(),jump:function(d){$.ajax({type:"POST",url:WJF.util.filterUrl("/help/ajax"),cache:!1,data:{action:"get-list",page_num:d.curr,page_row:15,cid:a,field:b,keyword:c},success:function(a){if(200!=a.code)return void $("#morelistcontent").html(I18NMessage.page.help.DATA_ERROR_PROMPT);if(a.data.total>0){var b=template("helpmorelist_tpl",a.data);$("#morelistcontent").html(b)}else $("#morelistcontent").html(I18NMessage.page.help.DATA_WITHOUT)},error:function(a){$("#morelistcontent").html(I18NMessage.page.help.DATA_ERROR_PROMPT)}})}})},error:function(a){}})}function indexcontentdata(a){$.each(a.data,function(a,b){$.ajax({type:"POST",url:WJF.util.filterUrl("/help/ajax"),data:{action:"get-list",cid:b._id,page_row:6},dataType:"json",cache:!1,success:function(a){if(200==a.code&&a.data.total>0){var c={cid:b._id,strname:b.name,list:a.data.list},d=template("help_ritemlist_tpl",c);$("#helpcontentlist").append(d),$("#helpcontentlist .main-section").children("div").each(function(a){var b=$(this).find(".itemmore");b.off("click"),b.on("click",function(){dispmoreitem($(this).data("cid"),"","")})})}},error:function(a){}})})}function removeactivestyle(){$("#helpleftnavlist").children("li").each(function(a){$(this).removeClass("active")})}function getQueryStringByName(a){var b=location.search.match(new RegExp("[?&]"+a+"=([^&]+)","i"));return null==b||b.length<1?"":b[1]}$(function(){var a="",b=getQueryStringByName("did");""!=b&&(a=b),$.ajax({type:"POST",url:WJF.util.filterUrl("/help/ajax"),data:{action:"get-category"},dataType:"json",cache:!1,success:function(b){if(200==b.code){var c=template("help_left_navlist_tpl",b);c='<li class="active"><a href="/help">'+I18NMessage.page.help.HELP_MAIN_HTML+"<i></i></a></li>"+c,$("#helpleftnavlist").html(c),$("#helpleftnavlist").children("li").each(function(a,b){var c=$(this).find(".hitemb");c.click(function(){dispmoreitem($(this).data("did"),"",""),removeactivestyle(),$(this).parent().addClass("active")})}),$("#contentdata").html('<div class="help-main"  id="helpcontentlist"></div>'),indexcontentdata(b),""!==a&&$('[data-did="15"]').trigger("click")}},error:function(a){}}),$(".help-search .search-btn").click(function(){var a=$(".help-search .search-select").val(),b=$(".help-search .search-input").val();dispmoreitem("",a,b)})});