### 01-使用技术

完成该项目需要具备以下知识：

- div + css 布局
- flex 布局
- Less
- 原生js + jquery 使用
- rem适配
- **echarts基础**



### 02- 案例适配方案

- 设计稿是1920px  

  1. flexible.js 把屏幕分为 24 等份

  2. cssrem 插件的基准值是  80px 

     插件-配置按钮---配置扩展设置--Root Font Size 里面 设置。 

     但是别忘记重启vscode软件保证生效


### 03-基础设置

- body 设置背景图 ，缩放为 100%  ， 行高1.15
- css初始化

### 04-Echarts-体验

官方教程：[五分钟上手ECharts](https://www.echartsjs.com/zh/tutorial.html#5 分钟上手 ECharts)

- 下载echarts  https://github.com/apache/incubator-echarts/tree/4.5.0  

使用步骤：

1. 引入echarts 插件文件到html页面中
2. 准备一个具备大小的DOM容器

```html
<div id="main" style="width: 600px;height:400px;"></div>
```

3.  初始化echarts实例对象

```js
var myChart = echarts.init(document.getElementById('main'));
```

4. 指定配置项和数据(option)

```js
var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
```

5. 将配置项设置给echarts实例对象

```js
myChart.setOption(option);
```

### 05-Echarts-基础配置

> 需要了解的主要配置：`series` `xAxis` `yAxis` `grid` `tooltip` `title` `legend` `color` 

- series

  - 系列列表。每个系列通过 `type` 决定自己的图表类型
  - 大白话：图标数据，指定什么类型的图标，可以多个图表重叠。

- xAxis：直角坐标系 grid 中的 x 轴

  - boundaryGap: 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。

- yAxis：直角坐标系 grid 中的 y 轴

- grid：直角坐标系内绘图网格。 

- title：标题组件

- tooltip：提示框组件

- legend：图例组件

- color：调色盘颜色列表

  数据堆叠，同个类目轴上系列配置相同的`stack`值后 后一个系列的值会在前一个系列的值上相加。
  
  ```javascript
  option = {
      // color设置我们线条的颜色 注意后面是个数组
      color: ['pink', 'red', 'green', 'skyblue'],
      // 设置图表的标题
      title: {
          text: '折线图堆叠123'
      },
      // 图表的提示框组件 
      tooltip: {
          // 触发方式
          trigger: 'axis'
      },
      // 图例组件
      legend: {
         // series里面有了 name值则 legend里面的data可以删掉
      },
      // 网格配置  grid可以控制线形图 柱状图 图表大小
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          // 是否显示刻度标签 如果是true 就显示 否则反之
          containLabel: true
      },
      // 工具箱组件  可以另存为图片等功能
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      // 设置x轴的相关配置
      xAxis: {
          type: 'category',
          // 是否让我们的线条和坐标轴有缝隙
          boundaryGap: false,
          data: ['星期一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
       // 设置y轴的相关配置
      yAxis: {
          type: 'value'
      },
      // 系列图表配置 它决定着显示那种类型的图表
      series: [
          {
              name: '邮件营销',
              type: 'line',
             
              data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
              name: '联盟广告',
              type: 'line',
  
              data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
              name: '视频广告',
              type: 'line',
            
              data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
              name: '直接访问',
              type: 'line',
            
              data: [320, 332, 301, 334, 390, 330, 320]
          }
      ]
  };
  
  ```
  
  ###  06-最终效果
  
  ![](\img\最终效果图.png)
  
  