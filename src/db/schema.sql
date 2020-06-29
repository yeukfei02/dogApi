--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: dog; Type: TABLE; Schema: public; Owner: donaldwu
--

CREATE TABLE public.dog (
    id integer NOT NULL,
    "bredFor" character varying,
    "breedGroup" character varying,
    height jsonb,
    "lifeSpan" character varying,
    name character varying,
    origin character varying,
    temperament character varying,
    weight jsonb,
    "dogUserId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.dog OWNER TO donaldwu;

--
-- Name: dog_id_seq; Type: SEQUENCE; Schema: public; Owner: donaldwu
--

CREATE SEQUENCE public.dog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dog_id_seq OWNER TO donaldwu;

--
-- Name: dog_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donaldwu
--

ALTER SEQUENCE public.dog_id_seq OWNED BY public.dog.id;


--
-- Name: dog_images; Type: TABLE; Schema: public; Owner: donaldwu
--

CREATE TABLE public.dog_images (
    id integer NOT NULL,
    width character varying,
    height character varying,
    url character varying,
    "dogUserId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.dog_images OWNER TO donaldwu;

--
-- Name: dog_images_id_seq; Type: SEQUENCE; Schema: public; Owner: donaldwu
--

CREATE SEQUENCE public.dog_images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dog_images_id_seq OWNER TO donaldwu;

--
-- Name: dog_images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donaldwu
--

ALTER SEQUENCE public.dog_images_id_seq OWNED BY public.dog_images.id;


--
-- Name: dog_user; Type: TABLE; Schema: public; Owner: donaldwu
--

CREATE TABLE public.dog_user (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.dog_user OWNER TO donaldwu;

--
-- Name: dog_user_id_seq; Type: SEQUENCE; Schema: public; Owner: donaldwu
--

CREATE SEQUENCE public.dog_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dog_user_id_seq OWNER TO donaldwu;

--
-- Name: dog_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: donaldwu
--

ALTER SEQUENCE public.dog_user_id_seq OWNED BY public.dog_user.id;


--
-- Name: dog id; Type: DEFAULT; Schema: public; Owner: donaldwu
--

ALTER TABLE ONLY public.dog ALTER COLUMN id SET DEFAULT nextval('public.dog_id_seq'::regclass);


--
-- Name: dog_images id; Type: DEFAULT; Schema: public; Owner: donaldwu
--

ALTER TABLE ONLY public.dog_images ALTER COLUMN id SET DEFAULT nextval('public.dog_images_id_seq'::regclass);


--
-- Name: dog_user id; Type: DEFAULT; Schema: public; Owner: donaldwu
--

ALTER TABLE ONLY public.dog_user ALTER COLUMN id SET DEFAULT nextval('public.dog_user_id_seq'::regclass);


--
-- Data for Name: dog; Type: TABLE DATA; Schema: public; Owner: donaldwu
--

COPY public.dog (id, "bredFor", "breedGroup", height, "lifeSpan", name, origin, temperament, weight, "dogUserId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: dog_images; Type: TABLE DATA; Schema: public; Owner: donaldwu
--

COPY public.dog_images (id, width, height, url, "dogUserId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: dog_user; Type: TABLE DATA; Schema: public; Owner: donaldwu
--

COPY public.dog_user (id, email, password, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: dog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donaldwu
--

SELECT pg_catalog.setval('public.dog_id_seq', 1, false);


--
-- Name: dog_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donaldwu
--

SELECT pg_catalog.setval('public.dog_images_id_seq', 1, false);


--
-- Name: dog_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: donaldwu
--

SELECT pg_catalog.setval('public.dog_user_id_seq', 1, false);


--
-- Name: dog_user PK_0e47068be8d1aea4497d70be100; Type: CONSTRAINT; Schema: public; Owner: donaldwu
--

ALTER TABLE ONLY public.dog_user
    ADD CONSTRAINT "PK_0e47068be8d1aea4497d70be100" PRIMARY KEY (id);


--
-- Name: dog PK_187826f37fd8e592a5711350db1; Type: CONSTRAINT; Schema: public; Owner: donaldwu
--

ALTER TABLE ONLY public.dog
    ADD CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY (id);


--
-- Name: dog_images PK_56542145d125e8a70bed0df5cfd; Type: CONSTRAINT; Schema: public; Owner: donaldwu
--

ALTER TABLE ONLY public.dog_images
    ADD CONSTRAINT "PK_56542145d125e8a70bed0df5cfd" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

