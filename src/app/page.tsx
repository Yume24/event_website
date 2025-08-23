import Hero from "@/components/hero/Hero";
import Countdown from "@/components/countdown/Countdown";
import Sponsors from "@/components/sponsors/Sponsors";
import Patrons from "@/components/sponsors/Patrons";

export default function Home() {
    return (
        <>
            <Hero/>
            <main>
                <section>
                    <h2 className="text-4xl m-10 text-center">Do rozpoczęcia konkursu pozostało:</h2>
                    <Countdown dateToCountdown={new Date("Apr 11, 2026 8:00:00")}/>
                </section>
                <div className="divider divider-neutral opacity-50 w-1/2 m-auto"></div>
                <section>
                    <h2 className="text-4xl m-10 text-center">Nasi Sponsorzy:</h2>
                    <Sponsors/>
                </section>
                <div className="divider divider-neutral opacity-50 w-1/2 m-auto"></div>
                <section>
                    <h2 className="text-4xl m-10 text-center">Patroni Medialni:</h2>
                    <Patrons/>
                </section>
            </main>
        </>
    )
}
