import Image from "next/image";
import React from "react";
import { images } from "@/utils";
import Ellipse from "@/components/Ellipse";
import Link from "next/link";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";

function Banner() {
  return (
    <main className="h-auto mt-10 border-y-[2px] border-black py-10 w-full  grid sm:grid-cols-2 sm:gap-0 gap-6 justify-between ">
      <SpotifyNowPlaying />
      <section className="w-full sm:h-full  sm:pl-[15px] sm:border-l-[0.2px] border-black ">
        <Link href={"https://en.wikipedia.org/wiki/Billions_(TV_series)"}>
          <Image
            src={images.banner}
            alt="banner"
            className="w-full bluri object-cover h-[221px]"
          />
        </Link>
        <section className="mt-5 flex items-center gap-3">
          <Ellipse isup={false} color={"bg-black"} />
          <Link
            target="_blank"
            href={"https://en.wikipedia.org/wiki/Billions_(TV_series)"}
            className="Mono text-xs"
          >
            Currently Watching Billions
          </Link>
        </section>
      </section>
    </main>
  );
}

export default Banner;
