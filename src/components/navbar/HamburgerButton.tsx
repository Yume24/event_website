import React from "react";

export default function HamburgerButton({ toggleVerticalNavbarAction }: { toggleVerticalNavbarAction: (param: boolean) => void }) {
    return (<div className="flex-none lg:hidden">
        <button className="btn btn-square btn-ghost m-5" onClick={() => toggleVerticalNavbarAction(true)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
        </button>
    </div>)
}