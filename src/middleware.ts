import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Customize as needed, or leave empty for default protection
  // publicRoutes: ["/"],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",  // Matches all routes except static files and Next.js internals
    "/(api|trpc)(.*)",         // Protect API routes
  ],
};