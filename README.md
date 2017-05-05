# jquery_count_input
jquery 左减右加输入框小插件
调用方法

``html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>加减输入框插件插件</title>
    <style type="text/css">
        .jian{
            color: rebeccapurple;
        }
    </style>
</head>
<body>
    <div id="test">

    </div>
    <script src="jquery.3.2.1.min.js"></script>
    <script src="jquery_count_input/jquery_count_input.js"></script>
    <script>
       $('#test').countInput({
         maxNum:"5",          //输入框输入的最大值
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
    </script>
</body>
</html>
``
