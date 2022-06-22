if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'FrontEnd'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'FrontEnd'.");
}var FrontEnd = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var elementAt = Kotlin.kotlin.text.elementAt_94bcnn$;
  var digitToInt = Kotlin.kotlin.text.digitToInt_myv2d0$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var jogador1;
  var jogador2;
  var vez;
  var tabuleiro;
  var padroesVitoria;
  function jogador(vez) {
    return vez === 1 ? jogador1 : jogador2;
  }
  function next() {
    var tmp$, tmp$_0;
    jogador1 = (Kotlin.isType(tmp$ = document.getElementById('jogador1'), HTMLInputElement) ? tmp$ : throwCCE()).value;
    jogador2 = (Kotlin.isType(tmp$_0 = document.getElementById('jogador2'), HTMLInputElement) ? tmp$_0 : throwCCE()).value;
    if (equals(jogador1, ''))
      jogador1 = 'Jogador 1';
    if (equals(jogador2, ''))
      jogador2 = 'Jogador 2';
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    vez = 1;
    limpar_tela();
    carregar_tela_game();
  }
  function back() {
    limpar_tela();
    carregar_tela_login();
  }
  function btn_velha(id) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var elemento = document.getElementById(id);
    (tmp$ = elemento != null ? elemento.parentNode : null) != null ? tmp$.removeChild(elemento) : null;
    var message = document.getElementById('message');
    (tmp$_0 = message != null ? message.parentNode : null) != null ? tmp$_0.removeChild(message) : null;
    var tela = document.getElementById('tela');
    if (vez === 1) {
      tela != null ? (tela.innerHTML = (tela != null ? tela.innerHTML : null) + (' <img class=' + '"' + id + '"' + ' src=' + '"' + 'img/x.jpg' + '"' + ' height=' + '"' + '60' + '"' + ' width=' + '"' + '60' + '"' + '> ')) : null;
      tabuleiro[digitToInt(elementAt(id, 3))] = 'X';
      vez = 2;
    } else {
      tela != null ? (tela.innerHTML = (tela != null ? tela.innerHTML : null) + (' <img class=' + '"' + id + '"' + ' src=' + '"' + 'img/o.jpg' + '"' + ' height=' + '"' + '60' + '"' + ' width=' + '"' + '60' + '"' + '> ')) : null;
      tabuleiro[digitToInt(elementAt(id, 3))] = 'O';
      vez = 1;
    }
    if (haVencedor()) {
      tela != null ? (tela.innerHTML = (tela != null ? tela.innerHTML : null) + (' ' + '\n' + '          <h1 id=' + '"' + 'message' + '"' + ' class=' + '"' + 'message' + '"' + '><font face=' + '"' + 'Lucida Console' + '"' + ' size=' + '"' + '6' + '"' + ' color=' + '"' + '#ffffff' + '"' + '> ' + jogador(vez === 1 ? 2 : 1) + ' VENCEU!!! <\/font> <\/h1>' + '\n' + '          ')) : null;
      var botoes = document.getElementById('botoes');
      (tmp$_1 = botoes != null ? botoes.parentNode : null) != null ? tmp$_1.removeChild(botoes) : null;
    } else if (haEmpate()) {
      tela != null ? (tela.innerHTML = (tela != null ? tela.innerHTML : null) + ' \n          <h1 id="message" class="message"><font face="Lucida Console" size="6" color="#ffffff"> Partida Empatada <\/font> <\/h1>\n          ') : null;
      var botoes_0 = document.getElementById('botoes');
      (tmp$_2 = botoes_0 != null ? botoes_0.parentNode : null) != null ? tmp$_2.removeChild(botoes_0) : null;
    } else {
      tela != null ? (tela.innerHTML = (tela != null ? tela.innerHTML : null) + (' ' + '\n' + '          <h1 id=' + '"' + 'message' + '"' + ' class=' + '"' + 'message' + '"' + '><font face=' + '"' + 'Lucida Console' + '"' + ' size=' + '"' + '6' + '"' + ' color=' + '"' + '#ffffff' + '"' + '> ' + jogador(vez) + ', Sua Vez <\/font> <\/h1>' + '\n' + '          ')) : null;
    }
  }
  function haVencedor(padraoVitoria) {
    if (padraoVitoria === void 0)
      padraoVitoria = padroesVitoria[0];
    return !equals(tabuleiro[padraoVitoria[0]], '') && equals(tabuleiro[padraoVitoria[0]], tabuleiro[padraoVitoria[1]]) && equals(tabuleiro[padraoVitoria[0]], tabuleiro[padraoVitoria[2]]) ? true : !equals(padraoVitoria, padroesVitoria[7]) ? haVencedor(padroesVitoria[indexOf(padroesVitoria, padraoVitoria) + 1 | 0]) : false;
  }
  function haEmpate(elemento, index) {
    if (elemento === void 0)
      elemento = tabuleiro[0];
    if (index === void 0)
      index = 0;
    return equals(elemento, '') ? false : index === 8 ? true : haEmpate(tabuleiro[index + 1 | 0], index + 1 | 0);
  }
  function carregar_tela_login() {
    var tela_login = document.getElementById('tela');
    tela_login != null ? (tela_login.innerHTML = ' \n          <h1 class="title">\n               <font face="Lucida Console" size="10" color="#ffffff"> JOGO DA VELHA <\/font>\n          <\/h1>\n\n          <div class="inputs">\n               <font id="font1" face="Lucida Console" size="5" color="#ffffff"> Jogador 1: <\/font> <input id="jogador1"\n                    type="text"><\/input> <br><br><br>\n               <font id="font2" face="Lucida Console" size="5" color="#ffffff"> Jogador 2: <\/font> <input id="jogador2"\n                    type="text"><\/input>\n          <\/div>\n\n          <button id="next" class="next" type="button" onclick="FrontEnd.next()"><img src="img/seta.jpg" alt="Submit"width="50" height="40"><\/button>\n\n     ') : null;
  }
  function carregar_tela_game() {
    var tela_game = document.getElementById('tela');
    tela_game != null ? (tela_game.innerHTML = '\n' + '          <h1 class=' + '"' + 'title' + '"' + '>' + '\n' + '               <font face=' + '"' + 'Lucida Console' + '"' + ' size=' + '"' + '10' + '"' + ' color=' + '"' + '#ffffff' + '"' + '> JOGO DA VELHA <\/font>' + '\n' + '          <\/h1>' + '\n' + '\n' + '          <button id=' + '"' + 'back' + '"' + ' class=' + '"' + 'back' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + 'FrontEnd.back()' + '"' + '><img src=' + '"' + 'img/seta-invertida.jpg' + '"' + ' alt=' + '"' + 'Submit' + '"' + ' width=' + '"' + '50' + '"' + ' height=' + '"' + '40' + '"' + '><\/button>' + '\n' + '\n' + '          <h1 id=' + '"' + 'message' + '"' + ' class=' + '"' + 'message' + '"' + '>' + '\n' + '               <font face=' + '"' + 'Lucida Console' + '"' + ' size=' + '"' + '6' + '"' + ' color=' + '"' + '#ffffff' + '"' + '> ' + jogador1 + ', Sua Vez <\/font>' + '\n' + '          <\/h1>' + '\n' + '\n' + '          <img class=' + '"' + 'velha' + '"' + ' src=' + '"' + 'img/velha.jpg' + '"' + ' height=' + '"' + '370' + '"' + ' width=' + '"' + '420' + '"' + '>' + '\n' + '\n' + '          <div id=' + '"' + 'botoes' + '"' + ' class=' + '"' + 'botoes' + '"' + '>' + '\n' + '          <button id=' + '"' + 'btn0' + '"' + ' class=' + '"' + 'btn0' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn0')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <button id=' + '"' + 'btn1' + '"' + ' class=' + '"' + 'btn1' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn1')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <button id=' + '"' + 'btn2' + '"' + ' class=' + '"' + 'btn2' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn2')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <button id=' + '"' + 'btn3' + '"' + ' class=' + '"' + 'btn3' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn3')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <button id=' + '"' + 'btn4' + '"' + ' class=' + '"' + 'btn4' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn4')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <button id=' + '"' + 'btn5' + '"' + ' class=' + '"' + 'btn5' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn5')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <button id=' + '"' + 'btn6' + '"' + ' class=' + '"' + 'btn6' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn6')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <button id=' + '"' + 'btn7' + '"' + ' class=' + '"' + 'btn7' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn7')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <button id=' + '"' + 'btn8' + '"' + ' class=' + '"' + 'btn8' + '"' + ' type=' + '"' + 'button' + '"' + ' onclick=' + '"' + "FrontEnd.btn_velha('btn8')" + '"' + '><alt=' + '"' + 'Submit' + '"' + '><\/button>' + '\n' + '          <\/div>' + '\n' + '\n' + '          <h1 class=' + '"' + 'name1' + '"' + '>' + '\n' + '               <font face=' + '"' + 'Lucida Console' + '"' + ' size=' + '"' + '6' + '"' + ' color=' + '"' + '#ffffff' + '"' + '>' + jogador1 + '<\/font>' + '\n' + '          <\/h1>' + '\n' + '\n' + '          <h1 class=' + '"' + 'name2' + '"' + '>' + '\n' + '               <font face=' + '"' + 'Lucida Console' + '"' + ' size=' + '"' + '6' + '"' + ' color=' + '"' + '#ffffff' + '"' + '>' + jogador2 + '<\/font>' + '\n' + '          <\/h1>' + '\n' + '\n' + '          <img class=' + '"' + 'X' + '"' + ' src=' + '"' + 'img/x.jpg' + '"' + ' height=' + '"' + '55' + '"' + ' width=' + '"' + '55' + '"' + '>' + '\n' + '\n' + '          <img class=' + '"' + 'O' + '"' + ' src=' + '"' + 'img/o.jpg' + '"' + ' height=' + '"' + '55' + '"' + ' width=' + '"' + '55' + '"' + '>' + '\n' + '\n' + '    ') : null;
  }
  function limpar_tela() {
    var tela = document.getElementById('tela');
    tela != null ? (tela.innerHTML = ' ') : null;
  }
  function main() {
    carregar_tela_login();
  }
  _.next = next;
  _.back = back;
  _.btn_velha = btn_velha;
  _.main = main;
  jogador1 = '';
  jogador2 = '';
  vez = 1;
  tabuleiro = ['', '', '', '', '', '', '', '', ''];
  padroesVitoria = [new Int32Array([0, 1, 2]), new Int32Array([0, 4, 8]), new Int32Array([0, 3, 6]), new Int32Array([1, 4, 7]), new Int32Array([2, 5, 8]), new Int32Array([2, 4, 6]), new Int32Array([3, 4, 5]), new Int32Array([6, 7, 8])];
  main();
  Kotlin.defineModule('FrontEnd', _);
  return _;
}(typeof FrontEnd === 'undefined' ? {} : FrontEnd, kotlin);
