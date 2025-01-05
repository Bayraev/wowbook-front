import Books from '@/components/account_page/Books';
import Infocards from '@/components/account_page/Infocards';
import '@/app/globals.css';
import Line from '@/components/ui/Line';
// import getDictionary from '@/i18n/getDictionary';
import React from 'react';
import Toys from '@/components/account_page/Toys';
import Stickers from '@/components/account_page/Stickers';
import Albums from '@/components/account_page/Albums';

type TParams = Promise<{ lang: string }>;

export default async function Page(props: { params: TParams }) {
  const params = await props.params;

  return (
    <div className="box py-[40px] px-[83px]">
      {/* <FragmentRowOne /> */}
      <Infocards params={params} />
      <Line />
      <Books />
      <Line />
      <Toys />
      <Line />
      <Stickers />
      <Line />
      <Albums />
    </div>
  );
}
