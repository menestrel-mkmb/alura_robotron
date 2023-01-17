(() => {
  const robo = document.querySelector(".robo");

  let estatiticas = {
    forca: 0,
    poder: 0,
    energia: 0,
    velocidade: 0,
  };

  const pecas = {
    braco: {
      forca: 29,
      poder: 35,
      energia: -21,
      velocidade: -5,
    },

    blindagem: {
      forca: 41,
      poder: 20,
      energia: 0,
      velocidade: -20,
    },

    nucleo: {
      forca: 0,
      poder: 7,
      energia: 48,
      velocidade: -24,
    },

    perna: {
      forca: 27,
      poder: 21,
      energia: -32,
      velocidade: 42,
    },

    foguete: {
      forca: 0,
      poder: 28,
      energia: 0,
      velocidade: -2,
    },
  };

  let getStatistics = (parameter) => {
    const obj = document.querySelector(`[data-statistics=${parameter}]`);
    return parseInt(obj.textContent, 10);
  };

  let setStatistics = (parameter, value) => {
    const obj = document.querySelector(`[data-statistics=${parameter}]`);
    obj.textContent = (parseInt(obj.textContent, 10) + value).toString();
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
    let targ, where;

    types.minus ? (where = types.minus) : (where = types.plus);
    targ = document.querySelector(`[data-parte=${where}]`);
    if (targ.value == 0 && types.minus) return;
    targ.value = (
      parseInt(targ.value, 10) + (types.minus ? -1 : +1)
    ).toString();

    const names = Object.keys(pecas[where]);
    const numbers = Object.values(pecas[where]);
    names.forEach((name, index) => {
      const num = numbers[index];
      setStatistics(name, types.plus ? num : -num);
    });
  };

  const botoes = getPecas();
  botoes.forEach((botao) => {
    botao.addEventListener("click", setMechaValue);
  });
})();
