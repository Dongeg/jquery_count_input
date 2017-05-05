(function ($) {
    function countInput(that,options) {
        this.opts=$.extend({},countInput.DEFULTS,options);
        this._createInput(that);
    }
    countInput.DEFULTS={
        maxNum:'999',
        width:'100px',
        height:'30px',
        reduce:reduce={
            class:'jian'
        },
        plus:plus={
          class:'jia'
        },
        input:input={
            class:'input'
        }
    }
    countInput.prototype._createInput=function(that){
        var opts=this.opts;
        var ctn="<div class='count_input_ctn' style='display: flex;justify-content: center;'><div>";
        var reduce="";
        var plus="";
        var input="";
        $(that).append(ctn);
        var $count_input_ctn=$(".count_input_ctn");
        $count_input_ctn.css('width',opts.width);
        $count_input_ctn.css('height',opts.height);
        //此处可以修改内部样式
        $count_input_ctn.append("<span style='border-radius: 4px 0 0 4px;border: 1px solid #ddd;width: 25%;background: #fff;display:flex;align-items: center;justify-content: center;cursor: pointer;'>-</span>");
        $count_input_ctn.append("<input value='1' style='width: 50%;text-align: center'' type='text' readonly>")
        $count_input_ctn.append("<span style='border-radius: 0 4px 4px 0;border: 1px solid #ddd;width: 25%;background: #fff;display:flex;align-items: center;justify-content: center;cursor: pointer;'>+</span>");
        var jian=$count_input_ctn.children()[1];
        var input=$count_input_ctn.children()[2];
        var jia=$count_input_ctn.children()[3];
        $.each(opts.reduce,function (i,value) {
            $(jian).attr(i,value);
        })
        $.each(opts.input,function (i,value) {
            $(input).attr(i,value);
        })
        $.each(opts.plus,function (i,value) {
            $(jia).attr(i,value);
        })
        $(jian).click(function(){
            var num=$(input).val();
            $(input).val(Math.max(1,--num));
        })
        $(jia).click(function() {
            var num = $(input).val();
            $(input).val(Math.min(opts.maxNum,++num));
        })
    }
    $.fn.extend({
        countInput:function(options){
            that=this
            new countInput(that,options);
        }
    })
})(jQuery)
/*
 实例
 要在#test中添加这个插件

 $('#test').countInput({
 maxNum:"5",
 width:"300px",       //整体的宽
 height:"100px",      //整体的高

 reduce:reduce={      //减号上要附加的属性
 class:'jian',
 name:'1'
 },
 plus:plus={          //加号上要附加的属性
 class:'jia',
 name:'2'
 },
 input:input={        //输入框上要附加的属性
 class:'input',
 name:'3'
 }
 })
*
* */