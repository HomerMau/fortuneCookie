// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
const revealCookie = document.querySelector("#img1")

// Eventos

revealCookie.addEventListener("click", raffleMessage)
btnReset.addEventListener("click", raffleMessage)
document.addEventListener("keydown", function (event) {
  if (event.key == "Enter" && screen2.classList.contains("hide")) {
    raffleMessage()
  } else if (event.key == "Enter" && screen1.classList.contains("hide")) {
    raffleMessage()
  }
})

// Funções
function raffleMessage() {
  toggleScreen()
  let randomNumber = Math.round(Math.random() * 10)

  switch (randomNumber) {
    case 0: 
    screen2.querySelector("h2").innerText =
    "A paciência é o primeiro passo para se corrigir um erro."
    break
    case 1:
      screen2.querySelector("h2").innerText =
        "Um plano é tão bom quanto os que o realizam."
        break
    case 2:
      screen2.querySelector("h2").innerText =
        "Falhar com honra é melhor do que ter sucesso trapaceando."
        break
    case 3:
      screen2.querySelector("h2").innerText =
        "Uma única chance é uma galáxia de esperança."
        break
    case 4:
      screen2.querySelector("h2").innerText =
        "Dura é a estrada que leva até a grandeza."
        break
    case 5:
      screen2.querySelector("h2").innerText =
        "Acredite em si mesmo ou ninguém mais acreditará."
        break
    case 6:
      screen2.querySelector("h2").innerText =
        "Fácil nem sempre significa simples."
        break
    case 7:
      screen2.querySelector("h2").innerText =
        "Coroas são herdadas, reinos são conquistados."
        break
    case 8:
      screen2.querySelector("h2").innerText =
        "O homem sábio lidera, o homem forte segue."
        break
    case 9:
      screen2.querySelector("h2").innerText =
        "O futuro tem muitos caminhos, escolha bem."
  break
        case 10:
      screen2.querySelector("h2").innerText =
        "Escolha o que é certo, e não o que é fácil."
        break
        default:;
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
