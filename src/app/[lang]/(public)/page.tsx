import AdsSection from "@/components/main_page/AdsSection";
import Apps from "@/components/main_page/AboutSection";
import News from "@/components/main_page/NewsSection";
import Popular from "@/components/main_page/PopularSection";
import getDictionary from "@/i18n/getDictionary";

interface Book {
  collection_id: number;
  name: string;
  author: string;
  image: string;
}

export default async function Home({
  params,
}: {
  params: Promise<{
    lang: string;
  }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const _ad_banners = getAdBanners(lang);
  const _book_data = getBookData(lang);
  const _app_links = getInfoLinks(lang);

  const [ad_banners, book_data, app_links] = await Promise.all([
    _ad_banners,
    _book_data,
    _app_links,
  ]);

  return (
    <main className="py-[1.875rem] xl:py-[4.375rem]">
      <AdsSection
        big_banners={ad_banners.big_banners}
        small_banner={ad_banners.small_banner}
      />
      <Popular dict={dict} popularBooks={book_data.popular} />
      <News dict={dict} newsBooks={book_data.new} />
      <Apps dict={dict} app_links={app_links} />
    </main>
  );
}

interface Banner {
  image_url: string;
  redirect_to: string;
}

async function getAdBanners(
  language: string
): Promise<{ big_banners: Banner[]; small_banner: Banner }> {
  const res = await fetch(
    `https://api.worldwords.io/web/main/ads?language=${language}`,
    {
      headers: {
        authorization: `Bearer ${process.env.BACKEND_JWT}`,
      },
    }
  );
  return res.json().then((res) => res.data);
}

async function getBookData(
  language: string
): Promise<{ popular: Book[]; new: Book[] }> {
  const res = await fetch(
    `https://api.worldwords.io/web/main/books?language=${language}`,
    {
      headers: {
        authorization: `Bearer ${process.env.BACKEND_JWT}`,
      },
    }
  );
  return res.json().then((res) => res.data);
}

async function getInfoLinks(language: string): Promise<{
  app_link_ios: string;
  app_link_android: string;
  agreement_link: string;
  privacy_link: string;
  tg_chat_link: string;
}> {
  const res = await fetch(
    `https://api.worldwords.io/web/info?language=${language}`,
    {
      headers: {
        authorization: `Bearer ${process.env.BACKEND_JWT}`,
      },
    }
  );
  return res.json().then((res) => res.data);
}
