import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import env from "@/lib/env";

const client = neon(env.DATABASE_URL);

export const db = drizzle(client);
