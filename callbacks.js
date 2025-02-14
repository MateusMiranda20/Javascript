// Exatamente! O callback serve para esperar ou executar algo depois que uma ação acontece.

// Ele é muito útil quando trabalhamos com código que não roda imediatamente, como:
// ✅ Esperar um tempo (exemplo: setTimeout()).
// ✅ Esperar uma resposta do servidor (exemplo: buscar dados de uma API).
// ✅ Esperar um usuário clicar num botão (eventos).

// Resumindo: o callback ajuda a controlar o que acontece depois de outra ação terminar.

// Se quiser testar na prática, posso te passar alguns desafios! 🚀


function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
    min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
