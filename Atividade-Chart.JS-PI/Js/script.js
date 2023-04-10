const labels = [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];
  const labels2 = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Temperatura',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      labels2: ' Umidade Média',
      backgroundColor: 'rgb(0, 0, 255)',
      borderColor: 'rgb(0, 0, 255)',
      data: [90, 89, 93 , 87 , 88 ,[22 , 24 , 27 , 23, 20 , 18]],
    }
  ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  const config2 = {
    type: 'bar',
    data: data,
    options: {}
  };

  setInterval(changeGradient, 3000);

function changeGradient() {
  var grad = document.getElementById("grad");
  grad.classList.remove("gradient");
  grad.offsetWidth = grad.offsetWidth;
  grad.classList.add("gradient");
}
