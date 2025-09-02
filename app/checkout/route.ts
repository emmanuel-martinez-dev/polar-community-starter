// checkout/route.ts
import { Checkout } from "@polar-sh/nextjs";

export const GET = Checkout({
    accessToken: process.env.POLAR_ACCESS_TOKEN,
    successUrl: process.env.SUCCESS_URL,
    server: "sandbox", // Use sandbox if you're testing Polar - omit the parameter or pass 'production' otherwise
    theme: "dark", // Enforces the theme - System-preferred theme will be set if left omitted
});


