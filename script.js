const LIMITE_INFERIOR = 10000;

function obtenerDatosUsuario() {
  const nombreDeUsuario = document.getElementById("nombre").value;
  const numeroDePlaneta = parseInt(
    document.getElementById("numeroPlaneta").value
  );
  if (isNaN(numeroDePlaneta)) {
    throw new Error("El número del planeta ingresado no es válido");
  }
  return { nombreDeUsuario, numeroDePlaneta };
}

function contarSaltos(numeroDePlaneta) {
  if (numeroDePlaneta <= LIMITE_INFERIOR) {
    throw new Error(
      "Lo siento, el numero de planeta tiene que ser mayor a 10000"
    );
  }

  let saltosTotales = 0;
  while (numeroDePlaneta !== 1) {
    numeroDePlaneta % 2 === 0
      ? (numeroDePlaneta /= 2)
      : (numeroDePlaneta = numeroDePlaneta * 3 + 1);
    saltosTotales++;
  }
  return `Número total de saltos: ${saltosTotales}`;
}

function manejarError(error) {
  alert(error.message);
}

function manejarEnvioFormulario(event) {
  event.preventDefault();
  try {
    const { nombreDeUsuario, numeroDePlaneta } = obtenerDatosUsuario();
    const resultado = contarSaltos(numeroDePlaneta);
    document.getElementById(
      "resultado"
    ).innerHTML = `${nombreDeUsuario}, ${resultado}`;
  } catch (error) {
    manejarError(error);
  }
}

document
  .getElementById("formulario")
  .addEventListener("submit", manejarEnvioFormulario);
