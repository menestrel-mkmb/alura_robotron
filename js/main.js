(() => {
  const robo = document.querySelector(".robo");
  let estatiticas = {};

  let getForca = () => {
    return parseInt(
      document.querySelector(".estatistica-numero.forca").textContent,
      10
    );
  };

  let setForca = (valor) => {
    document.querySelector(".estatistica-numero.forca").textContent =
      valor.toString();
    updateStatistics();
  };

  let getPoder = () => {
    return parseInt(
      document.querySelector(".estatistica-numero.poder").textContent,
      10
    );
  };

  let setPoder = (valor) => {
    document.querySelector(".estatistica-numero.poder").textContent =
      valor.toString();
    updateStatistics();
  };

  let getEnergia = () => {
    return parseInt(
      document.querySelector(".estatistica-numero.energia").textContent,
      10
    );
  };

  let setEnergia = (valor) => {
    document.querySelector(".estatistica-numero.energia").textContent =
      valor.toString();
    updateStatistics();
  };

  let getVelocidade = () => {
    return parseInt(
      document.querySelector(".estatistica-numero.velocidade").textContent,
      10
    );
  };

  let setVelocidade = (valor) => {
    document.querySelector(".estatistica-numero.velocidade").textContent =
      valor.toString();
    updateStatistics();
  };

  let getPecas = () => {
    return document.querySelectorAll(".controle-ajuste");
  };

  let setMechaValue = (event) => {
    const types = event.target.dataset;
    let targ;
    if (types.minus) {
      const operation = "minus";
      const where = types.minus;
      targ = document.querySelector(`[data-parte=${where}]`);
      if (parseInt(targ.value, 10) > 0)
        targ.value = (parseInt(targ.value) - 1).toString();
    }
    if (types.plus) {
      const operation = "plus";
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

  let updateStatistics = () => {
    estatiticas = {
      forca: getForca(),
      poder: getPoder(),
      energia: getEnergia(),
      velocidade: getVelocidade(),
    };
  };
  updateStatistics();
})();
