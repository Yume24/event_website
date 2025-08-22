import Link from "next/link"

export default function AuthButtons() {
    return (
        <>
            <Link className="hidden lg:btn btn-outline m-3" href="">Zaloguj się</Link>
            <Link className="hidden lg:btn m-3 mr-8" href="">Rejestracja</Link>
        </>
    )
}