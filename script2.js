(async function(){ // pedir algo pro chart js enviar resposta. quando ele enviar vou ver o que fazer.
    new Chart( 
       document.getElementById('grafico2'),
       {
         type: 'line',
         data: {
             labels: ["Janeiro","Fevereiro",
                      "Março", "Abril",
                      "Maio","Junho"],
          datasets:[
             {
                 label: 'Número de faltas 1°semestre',
                 data: [10,2,12,5,9,1]
             }
          ]
         }
       }
     )
 })();