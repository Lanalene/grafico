
(async function(){ // pedir algo pro chart js enviar resposta. quando ele enviar vou ver o que fazer.
   new Chart( 
      document.getElementById('grafico1'),
      {
        type: 'bar',
        data: {
            labels: ["Português","Matemática",
                     "Biologia", "Programação 2",
                     "Redes II","Prog. Mobile"],
         datasets:[
            {
                label: 'Média de Notas 1°semestre',
                data: [7,5,10,9.5,8,6]
            }
         ]
        }
      }
    )
})();