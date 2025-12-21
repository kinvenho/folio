"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Ellipse from "@/components/Ellipse";

export default function SpotifyNowPlaying() {
    const [track, setTrack] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch("/api/spotify/now-playing");
                const data = await response.json();
                setTrack(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Spotify data:", error);
                setLoading(false);
            }
        };

        fetchNowPlaying();
        // Refresh every 30 seconds
        const interval = setInterval(fetchNowPlaying, 30000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <section className="w-full h-full sm:pr-[15px] sm:border-r-[0.2px] border-black">
                <div className="w-full relative justify-center items-center flex h-[221px] bg-[#001314]">
                    <p className="text-white Mono text-xs">Loading...</p>
                </div>
                <section className="mt-5 flex items-center gap-3">
                    <Ellipse isup={true} color={"bg-[#1DB954]"} />
                    <p className="Mono text-xs">Connecting to Spotify</p>
                </section>
            </section>
        );
    }

    if (!track || !track.title) {
        return (
            <section className="w-full h-full sm:pr-[15px] sm:border-r-[0.2px] border-black">
                <Link
                    href={
                        "https://open.spotify.com/user/g2odg599t3r8tfk72nqvy0xvz?si=77463cead4ca47b8"
                    }
                >
                    <div className="w-full relative justify-start items-end flex p-5 h-[221px] bg-[#001314]">
                        <div className="text-white">
                            <p className="Mono text-xs">Not playing</p>
                        </div>
                    </div>
                </Link>
                <section className="mt-5 flex items-center gap-3">
                    <Ellipse isup={false} color={"bg-gray-400"} />
                    <Link
                        target="_blank"
                        href={
                            "https://open.spotify.com/user/g2odg599t3r8tfk72nqvy0xvz?si=77463cead4ca47b8"
                        }
                        className="up"
                    >
                        View my Spotify
                    </Link>
                </section>
            </section>
        );
    }

    return (
        <section className="w-full h-full sm:pr-[15px] sm:border-r-[0.2px] border-black">
            <Link href={track.songUrl || "#"} target="_blank">
                <div className="w-full relative overflow-hidden h-[221px] bg-gradient-to-br from-[#1DB954] to-[#191414] group">
                    {track.albumImageUrl && (
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                            <Image
                                src={track.albumImageUrl}
                                alt={track.title}
                                fill
                                className="object-cover blur-sm"
                            />
                        </div>
                    )}
                    <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                        <div className="bg-black/60 backdrop-blur-sm p-3 rounded-lg">
                            <p className="text-white font-bold text-sm truncate">
                                {track.title}
                            </p>
                            <p className="text-white/80 Mono text-xs truncate">
                                {track.artist}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <section className="mt-5 flex items-center gap-3">
                <Ellipse isup={track.isPlaying} color={"bg-[#1DB954]"} />
                <Link target="_blank" href={track.songUrl || "#"} className="up">
                    {track.isPlaying ? "Now Playing" : "Last Played"}
                </Link>
            </section>
        </section>
    );
}
