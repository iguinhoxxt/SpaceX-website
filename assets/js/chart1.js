var ctx = document.getElementById("lineChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Ganhos em $",
        data: [
          2050, 2358, 3100, 3800, 4800, 5000, 5500, 6600, 7450, 8950, 9300,
          12900,
        ],
        backgroundColor: ["rgba(85,85,85, 1)"],
        borderColor: "rgb(41, 155, 99)",

        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
