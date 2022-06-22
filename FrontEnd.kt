import kotlinx.browser.*
import org.w3c.dom.*

private var jogador1 = ""
private var jogador2 = ""
private var vez:Int  = 1
private var tabuleiro = arrayOf("", "", "", "", "", "","", "", "")
private val padroesVitoria = arrayOf(
    intArrayOf(0, 1, 2),
    intArrayOf(0, 4, 8),
    intArrayOf(0, 3, 6),
    intArrayOf(1, 4, 7),
    intArrayOf(2, 5, 8),
    intArrayOf(2, 4, 6),
    intArrayOf(3, 4, 5),
    intArrayOf(6, 7, 8))

private fun jogador(vez:Int):String = if(vez == 1) jogador1 else jogador2

@JsName("next")
fun next() {
    jogador1 = (document.getElementById("jogador1") as HTMLInputElement).value
    jogador2 = (document.getElementById("jogador2") as HTMLInputElement).value
    if(jogador1 == "") jogador1 = "Jogador 1"
    if(jogador2 == "") jogador2 = "Jogador 2"
    tabuleiro = arrayOf("", "", "", "", "", "","", "", "")
    vez = 1
    limpar_tela()
    carregar_tela_game()
}

@JsName("back")
fun back() {
     limpar_tela()
     carregar_tela_login()
}

@JsName("btn_velha")
fun btn_velha(id:String) {
     val elemento = document.getElementById("$id")
     elemento?.parentNode?.removeChild(elemento)

     val message = document.getElementById("message")
     message?.parentNode?.removeChild(message)

     val tela = document.getElementById("tela")

     if(vez == 1) {
          tela?.innerHTML += """ <img class="$id" src="img/x.jpg" height="60" width="60"> """
          tabuleiro[id.elementAt(3).digitToInt()] = "X"
          vez = 2
     } else {
          tela?.innerHTML += """ <img class="$id" src="img/o.jpg" height="60" width="60"> """
          tabuleiro[id.elementAt(3).digitToInt()] = "O"
          vez = 1
     }

     if(haVencedor()) {
          tela?.innerHTML += 
          """ 
          <h1 id="message" class="message"><font face="Lucida Console" size="6" color="#ffffff"> ${jogador(if(vez == 1) 2 else 1)} VENCEU!!! </font> </h1>
          """
          val botoes = document.getElementById("botoes")
          botoes?.parentNode?.removeChild(botoes)
     } else if(haEmpate()) {
          tela?.innerHTML += 
          """ 
          <h1 id="message" class="message"><font face="Lucida Console" size="6" color="#ffffff"> Partida Empatada </font> </h1>
          """
          val botoes = document.getElementById("botoes")
          botoes?.parentNode?.removeChild(botoes)
     } else {
          tela?.innerHTML += 
          """ 
          <h1 id="message" class="message"><font face="Lucida Console" size="6" color="#ffffff"> ${jogador(vez)}, Sua Vez </font> </h1>
          """
     }
}

private fun haVencedor(padraoVitoria:IntArray = padroesVitoria[0]):Boolean = 
    if(tabuleiro[padraoVitoria[0]] != "" && tabuleiro[padraoVitoria[0]] == tabuleiro[padraoVitoria[1]]
       && tabuleiro[padraoVitoria[0]] == tabuleiro[padraoVitoria[2]]) true
    else if(!padraoVitoria.equals(padroesVitoria[7])) haVencedor(padroesVitoria[padroesVitoria.indexOf(padraoVitoria) + 1])
    else false

private fun haEmpate(elemento:String = tabuleiro[0], index:Int = 0):Boolean = 
    if(elemento == "") false
    else if(index == 8) true
    else haEmpate(tabuleiro[index + 1], index + 1)

private fun carregar_tela_login() {
    val tela_login = document.getElementById("tela")
    tela_login?.innerHTML = 
     """ 
          <h1 class="title">
               <font face="Lucida Console" size="10" color="#ffffff"> JOGO DA VELHA </font>
          </h1>

          <div class="inputs">
               <font id="font1" face="Lucida Console" size="5" color="#ffffff"> Jogador 1: </font> <input id="jogador1"
                    type="text"></input> <br><br><br>
               <font id="font2" face="Lucida Console" size="5" color="#ffffff"> Jogador 2: </font> <input id="jogador2"
                    type="text"></input>
          </div>

          <button id="next" class="next" type="button" onclick="FrontEnd.next()"><img src="img/seta.jpg" alt="Submit"width="50" height="40"></button>

     """
}

private fun carregar_tela_game() {
    val tela_game = document.getElementById("tela")
    tela_game?.innerHTML = 
    """
          <h1 class="title">
               <font face="Lucida Console" size="10" color="#ffffff"> JOGO DA VELHA </font>
          </h1>

          <button id="back" class="back" type="button" onclick="FrontEnd.back()"><img src="img/seta-invertida.jpg" alt="Submit" width="50" height="40"></button>

          <h1 id="message" class="message">
               <font face="Lucida Console" size="6" color="#ffffff"> $jogador1, Sua Vez </font>
          </h1>

          <img class="velha" src="img/velha.jpg" height="370" width="420">

          <div id="botoes" class="botoes">
          <button id="btn0" class="btn0" type="button" onclick="FrontEnd.btn_velha('btn0')"><alt="Submit"></button>
          <button id="btn1" class="btn1" type="button" onclick="FrontEnd.btn_velha('btn1')"><alt="Submit"></button>
          <button id="btn2" class="btn2" type="button" onclick="FrontEnd.btn_velha('btn2')"><alt="Submit"></button>
          <button id="btn3" class="btn3" type="button" onclick="FrontEnd.btn_velha('btn3')"><alt="Submit"></button>
          <button id="btn4" class="btn4" type="button" onclick="FrontEnd.btn_velha('btn4')"><alt="Submit"></button>
          <button id="btn5" class="btn5" type="button" onclick="FrontEnd.btn_velha('btn5')"><alt="Submit"></button>
          <button id="btn6" class="btn6" type="button" onclick="FrontEnd.btn_velha('btn6')"><alt="Submit"></button>
          <button id="btn7" class="btn7" type="button" onclick="FrontEnd.btn_velha('btn7')"><alt="Submit"></button>
          <button id="btn8" class="btn8" type="button" onclick="FrontEnd.btn_velha('btn8')"><alt="Submit"></button>
          </div>

          <h1 class="name1">
               <font face="Lucida Console" size="6" color="#ffffff">$jogador1</font>
          </h1>

          <h1 class="name2">
               <font face="Lucida Console" size="6" color="#ffffff">$jogador2</font>
          </h1>

          <img class="X" src="img/x.jpg" height="55" width="55">

          <img class="O" src="img/o.jpg" height="55" width="55">

    """
}

private fun limpar_tela() {
    val tela = document.getElementById("tela")
    tela?.innerHTML = """ """
}

fun main() {
     carregar_tela_login()
}