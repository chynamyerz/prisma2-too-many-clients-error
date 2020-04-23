-- MAIN TABLES

-- User

CREATE TABLE "public"."User" (
  id       SERIAL PRIMARY KEY NOT NULL,
  email    VARCHAR(255) UNIQUE NOT NULL,
  "password" VARCHAR(255) NOT NULL
);

COMMENT ON TABLE "public"."User" IS 'A user.';
