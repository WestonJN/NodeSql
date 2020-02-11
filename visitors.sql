
DROP TABLE IF EXISTS "visitors";
DROP SEQUENCE IF EXISTS visitors_visitor_id_seq;
CREATE SEQUENCE visitors_visitor_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1;

CREATE TABLE "public"."visitors" (
    "visitor_id" integer DEFAULT nextval('visitors_visitor_id_seq') NOT NULL,
    "visitor_name" character varying(30),
    "visitor_age" integer,
    "date_of_visit" date,
    "time_of_visit" time without time zone,
    "assistant" character varying(30),
    "comments" character varying(350),
    CONSTRAINT "visitors_pkey" PRIMARY KEY ("visitor_id")
) WITH (oids = false);

