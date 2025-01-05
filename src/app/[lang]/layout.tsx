import type { Metadata } from 'next';
import '@/app/globals.css';
import 'swiper/css';
import { Montserrat } from 'next/font/google';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Background from '@/components/layouts/Background';
import getDictionary from '@/i18n/getDictionary';

// import ThemeProvider from "@/components/layouts/ThemeProvider";

const montserratFont = Montserrat({
  display: 'swap',
  // weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin-ext', 'latin', 'vietnamese'],
  variable: '--font-monserrat',
});

export const metadata: Metadata = {
  title: 'World of Words Marketplace',
  description: 'World of Words Marketplace',
  openGraph: {
    title: 'World of Words Marketplace',
    description: 'World of Words Marketplace',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const _app_links = getInfoLinks(lang);

  const [app_links] = await Promise.all([_app_links]);

  return (
    <html lang="en">
      <body className={`${montserratFont.variable}`}>
        <div className="overflow-x-hidden">
          <div className="relative z-20 mt-[83px]">
            <Header dict={dict} lang={lang} />
            {children}
            <Footer params={params} app_links={app_links} />
          </div>
          <Background />
        </div>
      </body>
    </html>
  );
}

async function getInfoLinks(language: string): Promise<{
  app_link_ios: string;
  app_link_android: string;
  agreement_link: string;
  privacy_link: string;
  tg_chat_link: string;
}> {
  const res = await fetch(`https://api.worldwords.io/web/info?language=${language}`, {
    headers: {
      authorization: `Bearer ${process.env.BACKEND_JWT}`,
    },
  });
  return res.json().then((res) => res.data);
}
