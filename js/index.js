new jBox("Modal", {
  width: 1000,
  height: 400,
  attach: "#myModal",
  draggable: "title",
  overlay: false,
  title: "<b>Gráfico de evaluaciones</b>",
  content:
    "<p>Gráfico de anillo donde se visualizan las evaluaciones de los equipos, clasificándolas según su estado. </p>" +
    "<table><tr><td><div class='circulo'></div></td><td>Equipo o componente en perfecto estado de funcionamiento, sin daños y sin fallas.</td></tr> <tr><td><div class='circulo' style='background:#9CCC65'></div></td><td>Equipo o componente en estado de funcionamiento estándar, sin mayores daños, fallas o desviaciones.</td></tr> <tr><td><div class='circulo' style='background:#FFEB3B'></div></td><td>Equipo o componente o condición de daño o falla menor, importante de registrar para seguimiento o consideración en planes de mantenimiento con fecha de intervención mayor a 7 días.</td></tr> <tr><td><div class='circulo' style='background:#FFCE56'></div></td><td>Equipo, componente o condición de daño o falla relevante, importante de registrar para alertar y considerar para mantenimiento con fecha de intervención menor a 7 días.</td></tr><tr><td><div class='circulo' style='background:#F03E3E'></div></td><td>Equipo, componente o condición en daño o falla crítica, importante de alertar, generando alarmas y notificación a responsables. Se debe considerar para mantenimiento con fecha de intervención inmediata o a más tardar en 24 horas después de registrada la condición.</td></tr></table>",
  addClass: "target",
});

new jBox("Modal", {
  width: 500,
  height: 100,
  attach: "#myModal-1",
  draggable: "title",
  overlay: false,
  title: "<b>Cumplimiento semanal de inspección</b>",
  content:
    "<p>Gráfico de cumplimiento semanal que compara el número de actividades de inspección planificadas con las actividades de inspección realizadas.</p>",
  addClass: "target",
});

new jBox("Modal", {
  width: 600,
  height: 250,
  attach: "#myModal-2",
  draggable: "title",
  overlay: false,
  title: "<b>Ranking equipos</b>",
  content:
    "<p>Ranking de equipos ordenados de mayor a menor relevancia (R), esta varía según el índice de criticidad SOMA.</p>" +
    "<table><tr><td><div class='circulo' style='background:#9CCC65'></div></td><td>Relevancia de 1 a 4</td></tr> <tr><td><div class='circulo' style='background:#FFEB3B'></div></td><td>Relevancia de 5 a 10</td></tr> <tr><td><div class='circulo' style='background:#F44336'></div></td><td>Relevancia de 12 a 36 </td></tr> </table>",
  addClass: "target",
});

new jBox("Modal", {
  width: 500,
  height: 100,
  attach: "#myModal-3",
  draggable: "title",
  overlay: false,
  title: "<b>Condiciones monitoreadas</b>",
  content:
    "<p>Cantidad de condiciones monitoreadas de los equipos inspeccionados, clasificadas en: totales, relevantes (urgentes más inmediatos) y solucionados.</p>",
  addClass: "target",
});

new jBox("Modal", {
  width: 500,
  height: 200,
  attach: "#myModal-4",
  draggable: "title",
  overlay: false,
  title: "<b>Pareto daños por componente</b>",
  content:
    "<p>El diagrama de Pareto muestra las inspecciones por componente, donde se ordena de mayor a menor los componentes con mayor cantidad de reportes sobre sus condiciones y a la vez el porcentaje de daños por componente. </p>",
  addClass: "target",
});

new jBox("Modal", {
  width: 500,
  height: 150,
  attach: "#myModal-5",
  draggable: "title",
  overlay: false,
  title: "<b>Tendencias</b>",
  content:
    "<p>Tendencias de las condiciones de los componentes y masivos de polines en función de cada semana.</p>",
  addClass: "target",
});

new jBox("Modal", {
  width: 500,
  height: 150,
  attach: "#myModal-6",
  draggable: "title",
  overlay: false,
  title: "<b>Modos de falla</b>",
  content:
    "<p>Cada porción representa la distribución actual de las condiciones en los componentes del equipo.</p>",
  addClass: "target",

  // "<p><b>Que es</b> </p>"+
  // "<i>Gráfico de cumplimiento semanal que compara el número de actividades de inspección planificadas con las actividades de inspección realizadas.</i>",
});

new jBox("Modal", {
  width: 1000,
  height: 400,
  attach: "#myModal-7",
  draggable: "title",
  overlay: false,
  title: "<b>Información</b>",
  content:
    "<p>Los colores a un costado corresponden al estado del reporte más crítico.</p>" +
    "<table><tr><td><div class='circulo'></div></td><td>Equipo o componente en perfecto estado de funcionamiento, sin daños y sin fallas.</td></tr> <tr><td><div class='circulo' style='background:#9CCC65'></div></td><td>Equipo o componente en estado de funcionamiento estándar, sin mayores daños, fallas o desviaciones.</td></tr> <tr><td><div class='circulo' style='background:#FFEB3B'></div></td><td>Equipo o componente o condición de daño o falla menor, importante de registrar para seguimiento o consideración en planes de mantenimiento con fecha de intervención mayor a 7 días.</td></tr> <tr><td><div class='circulo' style='background:#FFCE56'></div></td><td>Equipo, componente o condición de daño o falla relevante, importante de registrar para alertar y considerar para mantenimiento con fecha de intervención menor a 7 días.</td></tr><tr><td><div class='circulo' style='background:#F03E3E'></div></td><td>Equipo, componente o condición en daño o falla crítica, importante de alertar, generando alarmas y notificación a responsables. Se debe considerar para mantenimiento con fecha de intervención inmediata o a más tardar en 24 horas después de registrada la condición.</td></tr></table>",
  addClass: "target",

  // "<p><b>Que es</b> </p>"+
  // "<i>Gráfico de cumplimiento semanal que compara el número de actividades de inspección planificadas con las actividades de inspección realizadas.</i>",
});
