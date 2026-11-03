/*
 * Datos del equipo de Marketing — KINGFA (金发科技)
 * Fuente: MX_Sales_Group_Members_Detailed.json (campo "region").
 *
 * LIDERAZGO aparece arriba en TODAS las páginas de región.
 * "lideres" son los líderes de equipo de cada región (se muestran antes de los integrantes).
 * Para agregar una región nueva, añade un objeto a REGIONES con el mismo formato.
 */

const LIDERAZGO = [
  {
    nombre: "Sam",
    nombreLocal: "许柏华",
    rol: "Jefe de Marketing para América",
    puesto: "Asistente del Gerente General de Marketing y Jefe del Departamento de Marketing de Kingfa USA",
    email: "xubohua@kingfa.com.cn",
    telefono: null,
  },
  {
    nombre: "Jason Liu",
    nombreLocal: "刘放",
    rol: "Gerente México",
    puesto: "Gerente Regional · México",
    email: "liufang@kingfa.com.cn",
    telefono: null,
  },
];

const ING = "Ingeniero de Ventas";
const LIDER = "Ingeniero de Ventas"; // la etiqueta "Líder de equipo" se agrega en la tarjeta

const REGIONES = [
  {
    id: "frontera",
    nombre: "Frontera",
    descripcion: "Equipo que atiende a clientes de la región Frontera.",
    lideres: [
      { nombre: "Dylan", nombreLocal: "陈平", puesto: LIDER, email: "chenping@kingfa.com.cn", telefono: "+52 444 111 6246" },
    ],
    integrantes: [
      { nombre: "Jay Wu", puesto: ING, email: "jaywu@kingfa.com.cn", telefono: null },
    ],
  },
  {
    id: "bajio",
    nombre: "Bajío",
    descripcion: "Equipo que atiende a clientes de la región Bajío.",
    lideres: [
      { nombre: "Tim Shang", nombreLocal: "商吉庆", puesto: LIDER, email: "shangjiqing@kingfa.com.cn", telefono: "+1 734 612 4054" },
    ],
    integrantes: [
      { nombre: "Roy Tan", nombreLocal: "谭荣帅", puesto: ING, email: "tanrongshuai@kingfa.com.cn", telefono: null },
      { nombre: "Blake", nombreLocal: "高承希", puesto: ING, email: "gaochengxi@kingfa.com.cn", telefono: null },
      { nombre: "Hiro Kawaguchi", puesto: ING, email: "KAWAGUCHITETSUHIRO@kingfa.com.cn", telefono: null },
      { nombre: "Ernesto Perez", puesto: ING, email: "ernestoperez@kingfa.com", telefono: null },
      { nombre: "Pablo Pacheco", puesto: ING, email: "pablopacheco@kingfa.com", telefono: null },
      { nombre: "Julio Cesar Madera Nuñez", puesto: ING, email: "julionunez@kingfa.com.cn", telefono: null },
    ],
  },
  {
    id: "norte",
    nombre: "Norte",
    descripcion: "Equipo que atiende a clientes de la región Norte.",
    lideres: [
      { nombre: "Jordi Alec Perez Cruz", puesto: LIDER, email: "jperez@kingfa.com.cn", telefono: null },
      { nombre: "William Wang", nombreLocal: "王俊", puesto: LIDER, email: "wangjun1@kingfa.com.cn", telefono: null },
    ],
    integrantes: [
      { nombre: "Walter Martinez", puesto: ING, email: "waltermartinez@kingfa.com.cn", telefono: null },
    ],
  },
  {
    id: "centro",
    nombre: "Centro",
    descripcion: "Equipo que atiende a clientes de la región Centro.",
    lideres: [
      { nombre: "Celso Palomar", puesto: LIDER, email: "cpalomar@kingfa.com", telefono: "+52 55 2968 4274" },
    ],
    integrantes: [
      { nombre: "Kalyd Ontiveros", puesto: ING, email: "kalydontiveros@kingfa.com", telefono: "+52 55 2521 9781" },
      { nombre: "Arturo Torres", puesto: ING, email: "arturotorres@kingfa.com", telefono: "+52 221 146 7420" },
      { nombre: "Joshua Hernandez", puesto: ING, email: null, telefono: "+52 55 2739 5599" },
    ],
  },
];
