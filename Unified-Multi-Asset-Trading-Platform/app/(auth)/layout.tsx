import Link from "next/link";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) redirect("/");

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/007/073/487/small/stock-market-of-currency-exchange-rate-on-monitor-screen-free-photo.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <section className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl w-full max-w-md">
        <Link href="/" className="auth-logo text-2xl font-bold block mb-6 text-center">
          UMATP
        </Link>

        {children}
      </section>
    </main>
  );
};

export default Layout;
