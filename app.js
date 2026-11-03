// Funciones compartidas para dibujar tarjetas de personas

const ICONOS = {
  whatsapp:
    '<svg class="ico wa" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.7A11.8 11.8 0 0 0 23.9 12c0-3.2-1.2-6.1-3.5-8.4z"/></svg>',
  correo:
    '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  telefono:
    '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
};

function escapar(texto) {
  const d = document.createElement("div");
  d.textContent = texto ?? "";
  return d.innerHTML;
}

function iniciales(nombre) {
  return nombre
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");
}

function contactosHTML(p) {
  const partes = [];
  if (p.email) {
    partes.push(`<a href="mailto:${escapar(p.email)}">${ICONOS.correo}${escapar(p.email.toLowerCase()).replace("@", "<wbr>@")}</a>`);
  }
  if (p.telefono) {
    const tel = p.telefono.replace(/[^\d+]/g, "");
    partes.push(`<a href="tel:${tel}">${ICONOS.telefono}Llamar · ${escapar(p.telefono)}</a>`);
    partes.push(
      `<a class="whatsapp" href="https://wa.me/${tel.replace("+", "")}" target="_blank" rel="noopener">${ICONOS.whatsapp}WhatsApp</a>`
    );
  }
  if (!partes.length) partes.push('<span class="vacio">Contacto por confirmar</span>');
  return `<div class="contactos">${partes.join("")}</div>`;
}

function personaHTML(p, { destacado = false, lider = false, rol = "" } = {}) {
  return `
    <article class="persona${destacado ? " destacado" : ""}${lider ? " lider" : ""}" data-busqueda="${escapar(
      [p.nombre, p.nombreLocal, p.puesto, p.email].join(" ").toLowerCase()
    )}">
      <div class="cabeza">
        <div class="avatar" aria-hidden="true">${escapar(iniciales(p.nombre))}</div>
        <div>
          ${rol ? `<div class="rol">${escapar(rol)}</div>` : ""}
          <h3>${escapar(p.nombre)}${p.nombreLocal ? ` <span class="local">· ${escapar(p.nombreLocal)}</span>` : ""}</h3>
          <div class="puesto">${escapar(p.puesto)}</div>
        </div>
      </div>
      ${contactosHTML(p)}
    </article>`;
}

function navHTML(actual) {
  const enlaces = [`<a href="index.html"${actual === "inicio" ? ' aria-current="page"' : ""}>Inicio</a>`];
  REGIONES.forEach((r) => {
    enlaces.push(
      `<a href="region.html?id=${r.id}"${actual === r.id ? ' aria-current="page"' : ""}>${escapar(r.nombre)}</a>`
    );
  });
  const nav = document.getElementById("nav");
  nav.innerHTML = enlaces.join("");
  // En teléfonos, desplaza el menú para que la sección actual quede visible
  const activo = nav.querySelector('[aria-current="page"]');
  if (activo && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = activo.offsetLeft - (nav.clientWidth - activo.offsetWidth) / 2;
  }
}

// Figuras geométricas decorativas (se insertan solas en cada página)
(function decorar() {
  const formas = (clases) =>
    `<div class="formas" aria-hidden="true">${clases.map((c) => `<span class="${c}"></span>`).join("")}</div>`;

  document.querySelectorAll(".portada").forEach((el) => {
    el.insertAdjacentHTML("afterbegin", formas([
      "f-disco", "f-anillo a1", "f-anillo rojo a2", "f-puntos", "f-rayas", "f-triangulo",
      "f-medio", "f-cuadro blanco", "f-estrella e1", "f-estrella blanca e2", "f-estrella blanca e3",
    ]));
  });

  const juegos = [
    ["f-anillo naranja", "f-estrella", "f-puntos naranja"],
    ["f-triangulo naranja", "f-cuadro", "f-rayas naranja"],
    ["f-anillo naranja", "f-estrella", "f-puntos naranja"],
  ];
  document.querySelectorAll(".seccion").forEach((el, i) => {
    const n = i % 3;
    el.classList.add(`deco-${n + 1}`);
    el.insertAdjacentHTML("afterbegin", formas(juegos[n]));
  });
})();
