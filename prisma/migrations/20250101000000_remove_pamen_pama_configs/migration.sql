-- Remove pamen and pama config entries
DELETE FROM "public"."Config" WHERE "key" = 'PENSIUN_USIA_PAMEN';
DELETE FROM "public"."Config" WHERE "key" = 'PENSIUN_USIA_PAMA';
