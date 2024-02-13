import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from "chart.js";
import "../style/Graph.css"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);


function Graph() {

  const data = {
      labels: ["a", "b", "c", "d", "e", "f", "g"],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
  }

  return (
    <center>
      <h1>Página dos gráficos</h1>
      <div className="chart">
        <Line
          options={{
            type: 'line',
            data: data,
            maintainAspectRatio: false
          }}
          width={500}
          height={500}
          data={data}
        />
      </div>
    </center>
  )
}

export default Graph;
