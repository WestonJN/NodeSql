
DROP TABLE IF EXISTS "visitors";
DROP SEQUENCE IF EXISTS visitors_visitorid_seq;
CREATE SEQUENCE visitors_visitorid_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1;

CREATE TABLE "public"."visitors" (
    "visitorid" integer DEFAULT nextval('visitors_visitorid_seq') NOT NULL,
    "visitorname" character varying(30),
    "visitorage" integer,
    "dateofvisit" date,
    "timeofvisit" time without time zone,
    "assistant" character varying(30),
    "comments" character varying(350),
    CONSTRAINT "visitors_pkey" PRIMARY KEY ("visitorid")
) WITH (oids = false);

