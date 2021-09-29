import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  position: relative;
  left: 750px;
  top: 200px;
`;

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Products",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  series: [
    {
      name: "Temp",
      colorByPoint: true,
      data: [
        {
          name: "motor",
          y: 40,
          sliced: true,
          selected: true,
        },
        {
          name: "fan",
          y: 60,
        },
      ],
    },
  ],
};

function Graphs() {
  return (
    <Container>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
  );
}

export default Graphs;
