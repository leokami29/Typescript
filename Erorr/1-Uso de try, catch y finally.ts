try {
    // Código que puede generar errores
    let result = 10 / 0;
    console.log(result);
  } catch (error) {
    // Captura y manejo de errores
    console.log("Ocurrió un error:", error);
  } finally {
    // Bloque opcional que se ejecuta siempre, sin importar si hay errores o no
    console.log("Bloque finally");
  }
  