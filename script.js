
console.log("Machuca Garage: página iniciada");

/* ========================================
   FORMULARIO DE COTIZACIÓN POR WHATSAPP
======================================== */

const formularioCotizacion = document.getElementById("cotizacionForm");

if (formularioCotizacion) {
  formularioCotizacion.addEventListener("submit", function (event) {
    event.preventDefault();

    const marca = document.getElementById("marcaVehiculo")?.value.trim();
    const modelo = document.getElementById("modeloVehiculo")?.value.trim();
    const anio = document.getElementById("anioVehiculo")?.value;
    const servicio = document.getElementById("servicioVehiculo")?.value;
    const consulta = document.getElementById("consultaVehiculo")?.value.trim() || "";

    // Comprobar que los datos obligatorios estén completos
    if (!marca || !modelo || !anio || !servicio) {
      alert("Por favor, completa los datos obligatorios del vehículo y selecciona un servicio.");
      return;
    }

    const mensaje = [
      "Hola, Machuca Garage. Quisiera solicitar una cotización.",
      "",
      "DATOS DEL VEHÍCULO",
      "Marca: " + marca,
      "Modelo: " + modelo,
      "Año: " + anio,
      "",
      "SERVICIO SOLICITADO",
      servicio,
      "",
      "CONSULTA",
      consulta || "No agregué detalles adicionales.",
      "",
      "¿Me podrían orientar con el servicio y su cotización?"
    ].join("\n");

    // Número de WhatsApp del taller, con código de país y sin el signo +
    const numeroWhatsApp = "56979511233";

    const enlaceWhatsApp =
      "https://api.whatsapp.com/send?phone=" +
      numeroWhatsApp +
      "&text=" +
      encodeURIComponent(mensaje);

    // Abrir WhatsApp con el mensaje preparado
    window.location.assign(enlaceWhatsApp);
  });
}

/* ========================================
   MENÚ MÓVIL
======================================== */

const botonMenu = document.getElementById("menu-toggle");
const menuPrincipal = document.getElementById("menu-principal");

if (botonMenu && menuPrincipal) {
  botonMenu.addEventListener("click", () => {
    const abierto = menuPrincipal.classList.toggle("menu-abierto");

    botonMenu.setAttribute("aria-expanded", String(abierto));
    botonMenu.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú"
    );

    botonMenu.textContent = abierto ? "✕" : "☰";
  });

  menuPrincipal.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menuPrincipal.classList.remove("menu-abierto");
      botonMenu.textContent = "☰";
      botonMenu.setAttribute("aria-expanded", "false");
      botonMenu.setAttribute("aria-label", "Abrir menú");
    });
  });
}
