(() => {
  const robo = document.querySelector(".robo");
  let estatiticas = {};

  let getStatistics = (parameter) => {
    const obj = document.querySelector(`[data-statistics=${parameter}]`);
    return parseInt(obj.textContent, 10);
  };

  let setStatistics = (parameter, value) => {
    const obj = document.querySelector(`[data-statistics=${parameter}]`);
    obj.textContent = value.toString();
    updateStatistics();
  };

  let updateStatistics = () => {
    estatiticas = {
      forca: getStatistics("forca"),
      poder: getStatistics("poder"),
      energia: getStatistics("energia"),
      velocidade: getStatistics("velocidade"),
    };
  };
  updateStatistics();

  let getPecas = () => {
    return document.querySelectorAll(".controle-ajuste");
  };

  let setMechaValue = (event) => {
    const types = event.target.dataset;
    let targ;
    if (types.minus) {
      const where = types.minus;
      targ = document.querySelector(`[data-parte=${where}]`);
      if (parseInt(targ.value, 10) > 0)
        targ.value = (parseInt(targ.value) - 1).toString();
    }
    if (types.plus) {
      const where = types.plus;
      targ = document.querySelector(`[data-parte=${where}]`);
      if (parseInt(targ.value, 10) >= 0)
        targ.value = (parseInt(targ.value) + 1).toString();
    }
  };

  const botoes = getPecas();
  botoes.forEach((botao) => {
    botao.addEventListener("click", setMechaValue);
  });
})();
