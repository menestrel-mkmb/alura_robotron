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

  let updateStatistics = () => {
    estatiticas = {
      forca: getForca(),
      poder: getPoder(),
      energia: getEnergia(),
      velocidade: getVelocidade(),
    };
  };
  updateStatistics();

  console.log(estatiticas);
  setPoder(400);
  console.log(estatiticas);
})();
