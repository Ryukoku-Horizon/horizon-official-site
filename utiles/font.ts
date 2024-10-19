import { Teko, Rubik_Mono_One, Kanit} from "next/font/google";

export const teko = Teko({
    subsets: ["latin"],
    variable: "--font-teko",
    display: "swap",
});

export const rubik_mono_one = Rubik_Mono_One({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-rubik",
    display: "swap",
});

export const kanit = Kanit({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-kanit",
    display: "swap",
});