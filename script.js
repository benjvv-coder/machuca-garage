
console.log("Machuca Garage: página iniciada");
/* ========================================
   FORMULARIO DE COTIZACIÓN POR WHATSAPP
======================================== */

const formularioCotizacion = document.getElementById("cotizacionForm");

if (formularioCotizacion) {
  formularioCotizacion.addEventListener("submit", function (event) {
    event.preventDefault();

    const marca = document.getElementById("marcaVehiculo").value.trim();
    const modelo = document.getElementById("modeloVehiculo").value.trim();
    const anio = document.getElementById("anioVehiculo").value;
    const servicio = document.getElementById("servicioVehiculo").value;
    const consulta = document.getElementById("consultaVehiculo").value.trim();

    const mensaje = [
      "Hola, Machuca Garage. Quisiera solicitar una cotización.",
      "",
      "*DATOS DEL VEHÍCULO*",
      "Marca: " + marca,
      "Modelo: " + modelo,
      "Año: " + anio,
      "",
      "*SERVICIO SOLICITADO*",
      servicio,
      "",
      "*CONSULTA*",
      consulta || "No agregué detalles adicionales.",
      "",
      "¿Me podrían orientar con el servicio y su cotización?"
    ].join("\n");

    const numeroWhatsApp = "56959828285";
    const enlaceWhatsApp =
      "https://wa.me/" + numeroWhatsApp +
      "?text=" + encodeURIComponent(mensaje);

    window.open(enlaceWhatsApp, "_blank", "noopener,noreferrer");
  });
}