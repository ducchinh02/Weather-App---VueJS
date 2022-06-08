// const menu_item = document.querySelectorAll('.menu-item');
// menu_item.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         menu_item.forEach((item)=>{
//             item.classList.remove('active')
//         })
//         item.classList.add('active')
//         console.log('ok')
//     })
// }) 

// async function changeWeather(){
// let url = `https://api.openweathermap.org/data/2.5/onecall?lat=21.028511&lon=-94.04&exclude=hourly,daily&appid=2f33c299d2fdba428023d884c1ab3dfc
// `
// let base = await fetch(url).then(res=>res.json())
// console.log(base)
// }

// changeWeather()
// var ctx = document.getElementById("myChart");
//             this.chart = new Chart(ctx, {
//               type: "line",
//               data: {
//                 labels: this.dates,
//                 datasets: [
//                   {
//                     label: "Avg. Temp",
//                     backgroundColor: "rgba(54, 162, 235, 0.5)",
//                     borderColor: "rgb(54, 162, 235)",
//                     fill: false,
//                     data: this.temps
//                   }
//                 ]
//               },
//               options: {
//                 title: {
//                   display: true,
//                   text: "Temperature with Chart.js"
//                 },
//                 tooltips: {
//                   callbacks: {
//                     label: function(tooltipItem, data) {
//                       var label =
//                         data.datasets[tooltipItem.datasetIndex].label || "";
  
//                       if (label) {
//                         label += ": ";
//                       }
  
//                       label += Math.floor(tooltipItem.yLabel);
//                       return label + "°F";
//                     }
//                   }
//                 },
//                 scales: {
//                   xAxes: [
//                     {
//                       type: "time",
//                       time: {
//                         unit: "hour",
//                         displayFormats: {
//                           hour: "M/DD @ hA"
//                         },
//                         tooltipFormat: "MMM. DD @ hA"
//                       },
//                       scaleLabel: {
//                         display: true,
//                         labelString: "Date/Time"
//                       }
//                     }
//                   ],
//                   yAxes: [
//                     {
//                       scaleLabel: {
//                         display: true,
//                         labelString: "Temperature (°F)"
//                       },
//                       ticks: {
//                         callback: function(value, index, values) {
//                           return value + "°F";
//                         }
//                       }
//                     }
//                   ]
//                 }
//               }
//             });