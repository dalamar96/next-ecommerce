import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 flex-wrap">
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={item.media?.mainMedia?.image?.url || "cat.png"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="font-medium tracking-wider">
              {item.name}
            </h1>
          </Link>
        ))}
    </div>
  );
};

export default CategoryList;
