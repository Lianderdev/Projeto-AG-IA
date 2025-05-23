document.getElementById("agForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const popSize = document.getElementById("popSize").value;
  const mutationRate = document.getElementById("mutationRate").value;
  const generations = document.getElementById("generations").value;
  const target = document.getElementById("target").value;
  const output = document.getElementById("output");
  const errorMsg = document.getElementById("errorMsg");

  if (!popSize || !mutationRate || !generations || !target) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Preencha todos os campos corretamente!";
    return;
  }

  errorMsg.style.display = "none";
  output.textContent = `Rodando AG com ${popSize} indivíduos, ${mutationRate}% mutação, ${generations} gerações e alvo "${target}"...`;
});

function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}

const title = "Bem-vindo ao Projeto AG + IA";
const text1 = "Este site executa um Algoritmo Genético para otimizar hiperparâmetros de um modelo de aprendizado de máquina utilizando o dataset CIFAR-100.";
const text2 = "Você pode configurar parâmetros como tamanho da população, taxa de mutação e número de gerações. O backend está containerizado em Docker e utiliza FastAPI.";
const text3 = "Por favor, insira os parâmetros corretamente. Caso tenha dúvidas, consulte a documentação ou peça ajuda ao suporte.";

const speed = 25;

function typeWriter(elementId, text, callback) {
  let i = 0;
  const el = document.getElementById(elementId);
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      setTimeout(callback, 300);
    }
  }
  type();
}

window.onload = () => {
  typeWriter("modalTitle", title, () => {
    typeWriter("modalText1", text1, () => {
      typeWriter("modalText2", text2, () => {
        typeWriter("modalText3", text3, () => {
          document.getElementById("understoodButton").style.display = "inline-block";
        });
      });
    });
  });
};

function closeModal() {
  document.getElementById("infoModal").style.display = "none";
}

 