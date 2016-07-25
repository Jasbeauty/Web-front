## task0001--ife
#### HTML & CSS
* doctype  
`<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于 `<HTML>` 标签之前  
`<!DOCTYPE>` 它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令

* ul / ol / dl
 * ul: 无序列表  
 ```ruby
 <ul>
  <li>...</li>
  <li>...</li>
  <li>...</li>
 </ul>
 ```   
 * ol: 有序列表  
 ```ruby
 <ol>
   <li>...</li>
   <li>...</li>
   <li>...</li>
 </ol>
 ```  
 * dl: 自定义列表  
 ```ruby
 <dl class="...">
   <dt>标题</dt>
   <dd>...</dd>
   <dt>标题</dt>
   <dd>...</dd>
 </dl>
 ```

* html语义化  
便于开发者阅读和写出更优雅的代码，同时让浏览器的爬虫和机器很好地解析  
> 爬虫：网络爬虫，是一种自动获取网页内容的程序

* css选择器  
[参考手册](http://www.w3school.com.cn/cssref/css_selectors.asp)

* position值和属性区别   
[css定位](http://www.w3school.com.cn/css/css_positioning.asp)

| 值 | 属性 |  
| :---: | :---: |  
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定 |  
| fixed | 生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定 |  
| relative | 生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素 |  
| static | 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）|  
| inherit | 规定应该从父元素继承 position 属性的值|  


* css清除浮动  
`overflow: hidden`  
[原理](https://www.zhihu.com/question/30938856)

* html节点居中的各种实现方式  
[html各种居中对齐](http://blog.csdn.net/xukai871105/article/details/30115407/)  

* 圣杯布局、双飞翼布局  
[In Search of the Holy Grail](http://alistapart.com/article/holygrail)  
[双飞翼布局介绍-始于淘宝UED](http://www.imooc.com/wenda/detail/254035)  
[两者区别](http://www.cnblogs.com/imwtr/p/4441741.html)
> UED: 用户体验设计（user experience design）

* 负外边距  
[原理](http://www.cnblogs.com/2050/archive/2012/08/13/2636467.html#2457812)  
[实用：在页面布局中的作用        ](http://www.cnblogs.com/jscode/archive/2012/08/28/2660078.html)  

* 文档流  
文档流是相对于盒子模型讲的
元素浮动之后，会让它跳出文档流，也就是说当它后面还有元素时，其他元素会无视它所占据了的区域，直接在它身下布局。但是文字却会认同浮动元素所占据的区域，围绕它布局，也就是没有拖出文本流。
但是绝对定位后，不仅元素盒子会拖出文档流，文字也会出文本流。那么后面元素的文本就不会在认同它的区域位置，会直接在它后面布局，不会在环绕。
当然你可以使用 index-z 来让底部的元素到上面来，类似于一个图层的概念
