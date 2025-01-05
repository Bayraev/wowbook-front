import NextBtn from "@/assets/svg/next-button.svg";
import Ligh from "@/assets/svg/light.svg";
import Image from "next/image";
import { Button } from "../ui/Button";
// import { DevCanvas } from "../dev_canvas/DevCanvas";
import { BookCard } from "../shared/BookCard";
import { cn } from "@/lib/utils";

interface Book {
  collection_id: number;
  name: string;
  author: string;
  image: string;
}

interface NewsProps {
  dict: Record<string, any>;
  newsBooks: Book[];
}
export default function News({ dict, newsBooks }: NewsProps) {
  return (
    <section className="max-w-1140 2xl:max-w-base mx-auto px-2.5 md:px-10 lg:px-10 2xl:px-5 mt-[30px]">
      {/* <DevCanvas /> */}
      <Button
        text={dict.News.newbts}
        icon={<Image src={NextBtn} alt="next" className="h-5" />}
      />

      <div className="relative">
        <div className="relative z-10 border-2 border-[#271822]/80 bg-gradient__popular rounded-28 mt-4">
          <div className="no-scroll border-2 border-[#634357] rounded-28 p-4 md:p-4 lg:p-6 2xl:p-8">
            <div className="sm:hidden absolute w-[88px] h-[calc(100%-4px)] right-[2px] top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#392131] to-[#3c2333]/0 z-10 rounded-[26px] "></div>

            <div className="relative flex gap-3.5 overflow-x-auto no-scroll px-4 -mx-4 lg:px-0 lg:mx-0">
              {newsBooks.map((book, index) => (
                <BookCard
                  className={cn(
                    newsBooks.length - 1 !== index ? "-z-[1]" : "z-10"
                  )}
                  name={book.name}
                  author={book.author}
                  image={book.image}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <Image
          src={Ligh}
          alt="light"
          className="absolute sm:left-10 top-1/2 -translate-y-1/2 w-full h-[600px] -z-10"
        />
      </div>
    </section>
  );
}
