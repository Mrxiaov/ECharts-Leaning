// 柱状图
(function () {
	//1.初始化
	let myChart = echarts.init(document.querySelector('.bar .chart'))
	//2.配置
	const option = {
		color: ["#2f89cf"],
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '0%',
			top: '10px',
			right: '0%',
			bottom: '4%',
			containLabel: true,

		},
		xAxis: [
			{
				type: 'category',
				data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12'
				},
				// 不显示x轴的线
				axisLine: {
					show: true
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12'
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)',
						width: 2
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)',
						// width: 2
					}
				},
			}
		],
		series: [
			{
				name: '直接访问',
				type: 'bar',
				barWidth: '30%',
				data: [200, 300, 300, 900, 1500, 1200, 600],
				itemStyle: {
					barBorderRadius: 5
				}
			}
		]
	};
	//3.配置应用
	myChart.setOption(option)
	// 自适应
	window.addEventListener("resize", function () {
		myChart.resize();
	})
})();

// 柱状图-右
(function () {
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	let myChart = echarts.init(document.querySelector('.bar-right .chart'))
	const option = {
		grid: {
			top: "10%",
			left: "22%",
			bottom: "10%"
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: "category",
				inverse: true,
				data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
				// 不显示y轴的线
				axisLine: {
					show: false
				},
				// 不显示刻度
				axisTick: {
					show: false
				},
				// 把刻度标签里面的文字颜色设置为白色
				axisLabel: {
					color: "#fff"
				}
			},
			{
				data: [702, 350, 610, 793, 664],
				inverse: true,
				// 不显示y轴的线
				axisLine: {
					show: false
				},
				// 不显示刻度
				axisTick: {
					show: false
				},
				// 把刻度标签里面的文字颜色设置为白色
				axisLabel: {
					color: "#fff"
				}
			},
		],

		series: [
			{
				name: "条",
				type: "bar",
				data: [70, 34, 60, 78, 69],
				yAxisIndex: 0,
				// 修改第一组柱子的圆角
				itemStyle: {
					barBorderRadius: 20,
					// 此时的color 可以修改柱子的颜色
					color: function (params) {
						// params 传进来的是柱子对象
						// dataIndex 是当前柱子的索引号
						return myColor[params.dataIndex];
					}
				},
				// 柱子之间的距离
				barCategoryGap: 50,
				//柱子的宽度
				barWidth: 10,
				// 显示柱子内的文字
				label: {
					show: true,
					position: "inside",
					// {c} 会自动的解析为 数据  data里面的数据
					formatter: "{c}%"
				}
			},
			{
				name: "框",
				type: "bar",
				barCategoryGap: 0,
				barWidth: 15,
				yAxisIndex: 1,
				data: [100, 100, 100, 100, 100],
				itemStyle: {
					color: "none",
					borderColor: "#00c1de",
					borderWidth: 3,
					barBorderRadius: 15
				}
			}
		]
	}
	myChart.setOption(option)
})();


