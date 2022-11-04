/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.clear()

   function blackjack () {
      const isJogoAtivo= confirm("Quer iniciar uma nova rodada?")
    
      if(isJogoAtivo){
         console.log("Boas vindas ao Jogo de blackjack!")
  
        function sorteiaCartas(){
           let primeiraCarta = comprarCarta()
           let segundaCarta = comprarCarta()
  
           while (primeiraCarta.texto.includes("A")
        && segundaCarta.texto.includes("A")
        ){
           primeiraCarta = comprarCarta()
           segundaCarta = comprarCarta()
        }
           return[primeiraCarta, segundaCarta]
        }
  
        const cartasJogador = sorteiaCartas()

        let totalJogador = cartasJogador[0].valor + cartasJogador[1].valor
        
        //const cartasJogador = []
        // let primeiraCartaJogador = comprarCarta()
        // let segundaCartaJogador = comprarCarta()
  
        // while (primeiraCartaJogador.texto.includes("A")
        // && segundaCartaJogador.texto.includes("A")
        // ){
        //    primeiraCartaJogador = comprarCarta()
        //    segundaCartaJogador = comprarCarta()
  
        //    // console.log("Jogador:", primeiraCartaJogador, segundaCartaJogador)
        // }
        // cartasJogador.push(primeiraCartaJogador)
        // cartasJogador.push(segundaCartaJogador)
        
        const cartasComputador = sorteiaCartas()

        let totalComputador = cartasComputador[0].valor + cartasComputador[1].valor 
  
        //const cartasComputador=[]
        // let primeiraCartaComputador = comprarCarta()
        // let segundaCartaComputador = comprarCarta()
  
        // while (primeiraCartaComputador.texto.includes("A")
        // && segundaCartaComputador.texto.includes("A")
        // ){
        //    primeiraCartaComputador = comprarCarta()
        //    segundaCartaComputador = comprarCarta()
  
        //    // console.log("computador:", primeiraCartaComputador, segundaCartaComputador)
        // }
        // cartasComputador.push(primeiraCartaComputador)
        // cartasComputador.push(segundaCartaComputador)
  
         
         const cartasJogadorStr = cartasJogador.map((carta) => {
           return carta.texto
         })

         const cartasComputadorStr = cartasComputador.map((carta) => {
            return carta.texto
          })
  
          //Comprar carta a mais jogador 

         while (totalJogador < 21 &&
           confirm(`Suas cartas são: ${cartasJogadorStr.join(" ")}. A carta revelada do computador é ${cartasComputador[0].texto}.
           Você que comprar mais uma carta?`)
           ){
              const cartaComprada = comprarCarta()
              cartasJogador.push(cartaComprada)
              cartasJogadorStr.push(cartaComprada.texto)
              totalJogador += cartaComprada.valor

              if(totalJogador > 21){
               console.log("Você estorou.")
               console.log(`Jogador: Cartas - ${cartasJogadorStr.join (" ")} - Pontuação = ${totalJogador}`)
               console.log(`Computador: Cartas -  ${cartasComputadorStr.join(" ")} - Pontuação = ${totalComputador}`)
               console.log("Computador venceu")
               return 
              }
              
         }
  
      //Comprar cartar a mais computador  
         while (totalComputador < totalJogador){
              const cartaComprada = comprarCarta()
              cartasComputador.push(cartaComprada)
              cartasComputadorStr.push(cartaComprada.texto)
              totalComputador += cartaComprada.valor

              if (totalComputador == 21){
               break
              }

              if(totalComputador > 21){
               console.log("Computador estorou.")
               console.log(`Jogador: Cartas - ${cartasJogadorStr.join (" ")} - Pontuação = ${totalJogador}`)
               console.log(`Computador: Cartas - ${cartasComputadorStr.join(" ")} - Pontuação = ${totalComputador}`)         
               console.log("Você venceu")
               return 
              }
         }
  
  
        console.log(`Jogador: Cartas - ${cartasJogadorStr.join (" ")} - Pontuação = ${totalJogador}`)
        console.log(`Computador: Cartas - ${cartasComputadorStr.join(" ")} - Pontuação = ${totalComputador}`)
    
         if(totalJogador > totalComputador){
            console.log("Jogador venceu")
         } else if (totalJogador < totalComputador){
            console.log("Computador venceu")
         } else {
            console.group("Empate")
         }
  
      } else {
         console.log("Jogo acabou.")
      }
  
   }

   blackjack ()