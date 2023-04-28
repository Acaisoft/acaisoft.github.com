import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <DefaultSeo
        title="Acaisoft - cloud-based end to end application development"
        description="From idea to production - we are a solution company focusing on building cloud-based end-to-end SaaS platforms."
        openGraph={{
          images: [{ url: `${process.env.NEXT_PUBLIC_URL}/og.png` }],
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <Component {...pageProps} />
    </main>
  );
}
