### JS 学习笔记  
#### 语言特点
基于对象和事件驱动的并且具有安全性能的解释型脚本语言   
* 解释型：浏览器直接解释执行，不需要编译   
* 基于对象：可以直接使用JS已经创建的对象    
* 事件驱动：可以用事件驱动的方式直接响应客户端的输入，无需经过服务器端程序  
* **安全性：** 不允许访问本地硬盘（e.g.无法读取本地的文件等），不能将数据写入到服务器上；并且不能对网络文档进行修改和删除，只能通过浏览器进行事件浏览和动态交互  
* 跨平台：JS依赖于浏览器本身，与操作系统无关  

> JS 与 JAVA 的区别  
 * 两者毫无关系  
 * JS基于对象－－－JAVA面向对象  
 * JS解释型的编程语言（传递到客户端之前是不需要编译的）－－－JAVA编译型的编程语言（传递到客户端之前必须要编译，然后才可以执行）  
 * JS弱变量（使用变量前不需要申明，而会在运行的时候检查其数据类型）－－－JAVA强变量（引用变量时必须要申明变量数据类型）

#### 基本格式
```ruby
页面直接引用：  
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<script type="text/javascript">
.....
</script>
```  
可以放在`<head>...</head>`标签中（标准），也可以放在`<body>...</body>`标签中  
```ruby
外部调用（常用）：  
<body>  
 <script src="..路径/文件名.js" charset="utf-8">  
 </script>  
</body>  
```  

#### 相关语法   
* JS中的[保留关键字](http://www.runoob.com/js/js-reserved.html)不能用作变量名，函数名以及标签  

* 科学记数法 `3.14E9` 表示3.14乘以10的9次方  

* JS中可以用整数0代表false，使用非0的整数来代表true  

* [JS转义字符](http://www.w3school.com.cn/js/js_special_characters.asp)  
* 变量名由字母、数字、下划线组成，不能以数字开头；变量名严格区分大小写  

* 在function外部申明的都是全局变量，不管有没有使用var；在function内部使用var申明的变量是局部变量，不使用var申明直接赋值的变量是全局变量  

* 循环语句    
  ```ruby  
  for(var i=1;i<=10;i++){
    ...
  }  
  ```   

  ```ruby
  var i=1; //先在while外部初始化
  while(i<=10){
    ...
    i++; //步长也是在｛｝内定义的
  }
  ```    

* [JS事件参考手册](http://www.w3school.com.cn/jsref/jsref_events.asp)  

* 如果把数字与字符串相加，结果将成为字符串（e.g."5"+5=55; 5+5=10）  

* 运算符  
  ```ruby  
  i=1;j=i++; //结果j=1,i=2  
    //因为i++是先用后加的  
  i=1;j=++i; //结果j=2,i=2  
    //因为++i是先加后用的  
  ```   

* JS事件解析  
  [JavaScript事件 详细讲解](http://blog.163.com/hongshaoguoguo@126/blog/static/18046981201311735325175/)  
  [最详细的JavaScript和事件解读](http://www.codeceo.com/article/javascript-event-anay.html)  
  [原生JS事件详解](http://www.cnblogs.com/iyangyuan/p/4190773.html)  

* [JS中substring()方法与substr()方法的区别](http://blog.csdn.net/mcy478643968/article/details/3514987)  

* [split()方法](http://www.w3school.com.cn/jsref/jsref_split.asp)  
  ```ruby  
  "www.java1995.com".split(".",2)  
  结果为：www 和 java1995两个数组
  ```

* [JS的Math对象](http://www.w3school.com.cn/jsref/jsref_obj_math.asp)  
* [JS的window对象](http://www.cnblogs.com/kissdodog/archive/2013/01/01/2841464.html)  

* [JS的DOM操作](http://www.cnblogs.com/kissdodog/archive/2012/12/25/2833213.html)       
  [JavaScript与DOM（上）-- 适用于新手](http://www.cnblogs.com/TomXu/archive/2012/02/16/2351331.html)  
  [JavaScript与DOM（下）](http://www.cnblogs.com/TomXu/archive/2012/02/17/2351938.html)  
  [JS正则表达式](http://www.cnblogs.com/rubylouvre/archive/2010/03/09/1681222.html)  
  [正则表达式基本语法（上）](http://www.cnblogs.com/dolphinX/p/3486214.html)  
  [正则表达式相关方法（下）](http://www.cnblogs.com/dolphinX/p/3486136.html)  
  [正则表达式](http://wiki.hotoo.me/RegExp.html)

#### 参考资料  
[深入理解JavaScript系列](http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html)  
