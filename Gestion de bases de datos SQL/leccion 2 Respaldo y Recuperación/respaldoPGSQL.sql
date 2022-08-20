--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: actualizar_descuento(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.actualizar_descuento() RETURNS trigger
    LANGUAGE plpgsql
    AS $$BEGIN

--UPDATE productos
--SET descuento = precio * 0.1, 
--    precio_final = precio - descuento;

--INSERT INTO productos (nombre, codigo, precio, descuento, precio_final)
--VALUES (OLD, OLD, OLD, descuento, precio_final);

NEW.descuento = NEW.precio*0.1;
NEW.precio_final = NEW.precio*0.9;
RETURN NEW;

RETURN NEW;

END$$;


--
-- Name: aplicar_descuento(real); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.aplicar_descuento(porcentaje real DEFAULT 10) RETURNS real
    LANGUAGE plpgsql
    AS $$BEGIN

UPDATE productos
SET descuento = precio * porcentaje / 100;

UPDATE productos
SET precio_final = precio * (100 - porcentaje) / 100;

RETURN NULL;

END$$;


--
-- Name: registrar_cambio_de_nombre(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.registrar_cambio_de_nombre() RETURNS trigger
    LANGUAGE plpgsql
    AS $$BEGIN
INSERT INTO cambios_de_nombres (id, descripcion, fecha) VALUES
(1, CONCAT('cambio de nombre de: <', OLD.nombre, '> a <', NEW.nombre, '>'), NOW());

RETURN NEW;

END$$;


--
-- Name: reporte_ventas(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.reporte_ventas() RETURNS real
    LANGUAGE plpgsql
    AS $$DECLARE total real;
BEGIN

SELECT SUM(costo) INTO total FROM ventas;
RETURN total;

END$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cambios_de_nombres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cambios_de_nombres (
    id integer NOT NULL,
    descripcion character varying NOT NULL,
    fecha date NOT NULL
);


--
-- Name: contenedores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contenedores (
    id integer NOT NULL,
    largo real NOT NULL,
    ancho real NOT NULL,
    alto real NOT NULL,
    nombre character varying
);


--
-- Name: contenedores_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contenedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contenedores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contenedores_id_seq OWNED BY public.contenedores.id;


--
-- Name: cuidadanos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cuidadanos (
    id integer NOT NULL,
    "ddu " character varying NOT NULL,
    nombre character varying NOT NULL
);


--
-- Name: documentos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.documentos (
    id integer NOT NULL,
    titulo character varying NOT NULL,
    palabras_clave character varying NOT NULL,
    contenido text NOT NULL,
    autor character varying NOT NULL,
    publicado boolean NOT NULL,
    fecha_publicada date NOT NULL
);


--
-- Name: documentos_borrador; Type: MATERIALIZED VIEW; Schema: public; Owner: -
--

CREATE MATERIALIZED VIEW public.documentos_borrador AS
 SELECT documentos.id,
    documentos.titulo,
    documentos.palabras_clave,
    documentos.contenido,
    documentos.autor,
    documentos.publicado,
    documentos.fecha_publicada
   FROM public.documentos
  WHERE (documentos.publicado = false)
  WITH NO DATA;


--
-- Name: documentos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.documentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: documentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.documentos_id_seq OWNED BY public.documentos.id;


--
-- Name: documentos_publicados; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.documentos_publicados WITH (security_barrier='true') AS
 SELECT documentos.id,
    documentos.titulo,
    documentos.palabras_clave,
    documentos.contenido,
    documentos.autor,
    documentos.publicado,
    documentos.fecha_publicada
   FROM public.documentos
  WHERE (documentos.publicado = true);


--
-- Name: equipos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.equipos (
    id integer NOT NULL,
    nombre character varying NOT NULL
);


--
-- Name: jugadores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.jugadores (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    puntos integer,
    equipo_id integer,
    dias_jugados integer
);


--
-- Name: equipos_con_puntos; Type: MATERIALIZED VIEW; Schema: public; Owner: -
--

CREATE MATERIALIZED VIEW public.equipos_con_puntos AS
 SELECT equipos.nombre,
    sum(jugadores.puntos) AS sum
   FROM (public.jugadores
     JOIN public.equipos ON ((jugadores.equipo_id = equipos.id)))
  GROUP BY equipos.nombre
  WITH NO DATA;


--
-- Name: equipos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.equipos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: equipos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.equipos_id_seq OWNED BY public.equipos.id;


--
-- Name: eventos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.eventos (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_fin date NOT NULL
);


--
-- Name: eventos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.eventos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: eventos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.eventos_id_seq OWNED BY public.eventos.id;


--
-- Name: jugadores_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.jugadores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: jugadores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.jugadores_id_seq OWNED BY public.jugadores.id;


--
-- Name: mensage; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.mensage (
    id integer NOT NULL,
    envia character varying NOT NULL,
    recibe character varying NOT NULL,
    mensaje text NOT NULL
);


--
-- Name: mensage_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.mensage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: mensage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.mensage_id_seq OWNED BY public.mensage.id;


--
-- Name: novatos; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.novatos AS
 SELECT jugadores.nombre,
    jugadores.puntos
   FROM public.jugadores
  WHERE (jugadores.dias_jugados <= 7)
  ORDER BY jugadores.puntos DESC;


--
-- Name: platos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.platos (
    id integer NOT NULL,
    modelo character varying NOT NULL,
    radio integer NOT NULL
);


--
-- Name: platos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.platos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: platos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.platos_id_seq OWNED BY public.platos.id;


--
-- Name: producto; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.producto (
    id integer NOT NULL,
    precio double precision NOT NULL
);


--
-- Name: productos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.productos (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    codigo integer NOT NULL,
    precio real NOT NULL,
    descuento real,
    precio_final real
);


--
-- Name: productos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: productos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying
);


--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: ventas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ventas (
    id integer NOT NULL,
    descripcion character varying NOT NULL,
    costo real NOT NULL
);


--
-- Name: ventas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ventas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ventas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ventas_id_seq OWNED BY public.ventas.id;


--
-- Name: contenedores id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contenedores ALTER COLUMN id SET DEFAULT nextval('public.contenedores_id_seq'::regclass);


--
-- Name: documentos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documentos ALTER COLUMN id SET DEFAULT nextval('public.documentos_id_seq'::regclass);


--
-- Name: equipos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.equipos ALTER COLUMN id SET DEFAULT nextval('public.equipos_id_seq'::regclass);


--
-- Name: eventos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.eventos ALTER COLUMN id SET DEFAULT nextval('public.eventos_id_seq'::regclass);


--
-- Name: jugadores id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.jugadores ALTER COLUMN id SET DEFAULT nextval('public.jugadores_id_seq'::regclass);


--
-- Name: mensage id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.mensage ALTER COLUMN id SET DEFAULT nextval('public.mensage_id_seq'::regclass);


--
-- Name: platos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platos ALTER COLUMN id SET DEFAULT nextval('public.platos_id_seq'::regclass);


--
-- Name: productos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Name: ventas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ventas ALTER COLUMN id SET DEFAULT nextval('public.ventas_id_seq'::regclass);


--
-- Data for Name: cambios_de_nombres; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.cambios_de_nombres (id, descripcion, fecha) FROM stdin;
1	cambio de nombre de: <> a <CARLOS>	2022-08-02
\.


--
-- Data for Name: contenedores; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.contenedores (id, largo, ancho, alto, nombre) FROM stdin;
5	2	8	10	A4
6	5	5.5	5.5	A5
7	10.5	5	3.2	A6
4	8	8	8	A3
2	20	-30	15	A1
3	3	3.1	10.5	A2
\.


--
-- Data for Name: cuidadanos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.cuidadanos (id, "ddu ", nombre) FROM stdin;
1	A1	LUIS
2	B1\n	MARCOS
3	C1	ANA2
4	D1	CARLOS
\.


--
-- Data for Name: documentos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.documentos (id, titulo, palabras_clave, contenido, autor, publicado, fecha_publicada) FROM stdin;
1	moda	camisa negra	Aqu├¡ tenemos	Luis Torres	t	2019-01-01
2	deporte	futbol jugadores	Un art├¡culo	Manuel Vera	t	2019-02-01
3	comida	arroz aceituna negra	Comiendo ensalada	Carolina Mata	f	2019-02-10
4	futbol	copa futbol	El ganador e	Miriam Castro	f	2019-03-15
\.


--
-- Data for Name: equipos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.equipos (id, nombre) FROM stdin;
1	Barca
2	Real Madrid
\.


--
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.eventos (id, nombre, fecha_inicio, fecha_fin) FROM stdin;
1	A1	2019-01-03	2019-03-03
\.


--
-- Data for Name: jugadores; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.jugadores (id, nombre, puntos, equipo_id, dias_jugados) FROM stdin;
1	Pike	15	1	15
2	Maradona	50	2	30
3	Messi	55	1	31
4	Cristiano	45	2	20
5	Ronal	5	1	5
6	Raul	8	1	6
7	Marco	10	2	3
8	Sanchez	10	2	7
\.


--
-- Data for Name: mensage; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.mensage (id, envia, recibe, mensaje) FROM stdin;
3	Ana	Luis	Responde por favor
1	luiS	ana	Hola k tal?
2	anA	luis	Aqu├¡ y tu k tal?
\.


--
-- Data for Name: platos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.platos (id, modelo, radio) FROM stdin;
1	A1	5
2	A2	8
3	A3	1
4	A4	2
\.


--
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.producto (id, precio) FROM stdin;
1	1500
2	1800
3	2500
\.


--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.productos (id, nombre, codigo, precio, descuento, precio_final) FROM stdin;
7	Jesus	123	18.45	14.76	3.69
8	Carlos	321	25.48	20.383999	5.0959997
9	Omar	258	1003.156	802.52484	200.6312
12	Marexy	741	85	8.5	76.5
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.usuarios (id, nombre) FROM stdin;
1	zhent
2	fazt
3	dfpro
\.


--
-- Data for Name: ventas; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.ventas (id, descripcion, costo) FROM stdin;
1	venta1	80.5
2	venta2	50.2
3	venta3	80.3
\.


--
-- Name: contenedores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contenedores_id_seq', 6, true);


--
-- Name: documentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.documentos_id_seq', 4, true);


--
-- Name: equipos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.equipos_id_seq', 2, true);


--
-- Name: eventos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.eventos_id_seq', 1, true);


--
-- Name: jugadores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.jugadores_id_seq', 8, true);


--
-- Name: mensage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.mensage_id_seq', 3, true);


--
-- Name: platos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.platos_id_seq', 4, true);


--
-- Name: productos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.productos_id_seq', 12, true);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);


--
-- Name: ventas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ventas_id_seq', 3, true);


--
-- Name: cambios_de_nombres cambios_de_nombres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cambios_de_nombres
    ADD CONSTRAINT cambios_de_nombres_pkey PRIMARY KEY (id);


--
-- Name: contenedores contenedores_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contenedores
    ADD CONSTRAINT contenedores_pkey PRIMARY KEY (id);


--
-- Name: contenedores cr_largo_positivo; Type: CHECK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE public.contenedores
    ADD CONSTRAINT cr_largo_positivo CHECK ((largo > (0)::double precision)) NOT VALID;


--
-- Name: productos cr_mayor_cero; Type: CHECK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE public.productos
    ADD CONSTRAINT cr_mayor_cero CHECK ((precio > (0)::double precision)) NOT VALID;


--
-- Name: productos cr_precio_descuento_mayor_cero; Type: CHECK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE public.productos
    ADD CONSTRAINT cr_precio_descuento_mayor_cero CHECK ((descuento > (0)::double precision)) NOT VALID;


--
-- Name: productos cr_precio_mayor_descuento; Type: CHECK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE public.productos
    ADD CONSTRAINT cr_precio_mayor_descuento CHECK ((precio > precio_final)) NOT VALID;


--
-- Name: productos cr_unico_codigo; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT cr_unico_codigo UNIQUE (codigo);


--
-- Name: contenedores cr_unico_nombre; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contenedores
    ADD CONSTRAINT cr_unico_nombre UNIQUE (nombre);


--
-- Name: cuidadanos cuidadanos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cuidadanos
    ADD CONSTRAINT cuidadanos_pkey PRIMARY KEY (id);


--
-- Name: documentos documentos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documentos
    ADD CONSTRAINT documentos_pkey PRIMARY KEY (id);


--
-- Name: equipos equipos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.equipos
    ADD CONSTRAINT equipos_pkey PRIMARY KEY (id);


--
-- Name: eventos eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id);


--
-- Name: jugadores jugadores_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.jugadores
    ADD CONSTRAINT jugadores_pkey PRIMARY KEY (id);


--
-- Name: mensage mensage_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.mensage
    ADD CONSTRAINT mensage_pkey PRIMARY KEY (id);


--
-- Name: platos platos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platos
    ADD CONSTRAINT platos_pkey PRIMARY KEY (id);


--
-- Name: producto producto_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);


--
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: ventas ventas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_pkey PRIMARY KEY (id);


--
-- Name: productos actualizando_descuento; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER actualizando_descuento BEFORE INSERT OR UPDATE OF precio ON public.productos FOR EACH ROW EXECUTE FUNCTION public.actualizar_descuento();


--
-- Name: cuidadanos cambiando_nombre; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER cambiando_nombre AFTER INSERT ON public.cuidadanos FOR EACH ROW EXECUTE FUNCTION public.registrar_cambio_de_nombre();


--
-- Name: documentos_borrador; Type: MATERIALIZED VIEW DATA; Schema: public; Owner: -
--

REFRESH MATERIALIZED VIEW public.documentos_borrador;


--
-- Name: equipos_con_puntos; Type: MATERIALIZED VIEW DATA; Schema: public; Owner: -
--

REFRESH MATERIALIZED VIEW public.equipos_con_puntos;


--
-- PostgreSQL database dump complete
--

