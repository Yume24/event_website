import Hero from "@/components/hero/Hero";
import Countdown from "@/components/countdown/Countdown";

export default function Home() {
    return (
        <>
            <Hero/>
            <main>
                <section>
                    <h2 className="text-4xl m-10 text-center">Do rozpoczęcia konkursu pozostało:</h2>
                    <Countdown dateToCountdown={new Date("Apr 11, 2026 8:00:00")}/>
                </section>
            </main>
        </>
    )
}
