function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();
  var check = document.getElementById('sincorreta');
  var close = document.getElementById('fechar');

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };
    check.style.display = 'none';

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    //logica para se o nome e senha forem incorretos
    check.style.display = 'block';
    close.style.display = 'block';
  }
}
function view() {
  var senha = document.getElementById('senha');

  if (senha.type == 'password'){
    senha.type = 'text';
  }else {
    senha.type = 'password';
  }
}

function closeview(){
  var check = document.getElementById('sincorreta');
  var close = document.getElementById('fechar');

  check.style.display = 'none';
  close.style.display = 'none';

}