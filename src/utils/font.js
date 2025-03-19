import { 
    Nunito, 
    Archivo_Narrow, 
    Syne, 
    DM_Serif_Display, 
    DM_Sans, 
    Poppins, 
    Rubik, 
    Fira_Sans, 
    Josefin_Sans, 
    Roboto_Mono, 
    Fjalla_One, 
    Inter 
} from "next/font/google";

const nunito_init = Nunito({
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
    variable: "--font-nunito",
    subsets: ["latin"],
});
  
const archivo_narrow_init = Archivo_Narrow({
    // weight: '200',
    variable: "--font-archivo_narrow",
    subsets: ["latin"],
});
  
const syne_init = Syne({
    // weight: '200',
    variable: "--font-syne",
    subsets: ["latin"],
});
  
const dm_serif_display_init = DM_Serif_Display({
    weight: '400',
    variable: "--font-dm_serif_display",
    subsets: ["latin"],
});
  
const dm_sans_init = DM_Sans({
    weight: '200',
    variable: "--font-dm_sans",
    subsets: ["latin"],
});

const poppins_init = Poppins({ 
    weight: '100',
    variable: "--font-poppins",
    subsets: ["latin"],
});
  
const rubik_init = Rubik({
    weight: '300',
    variable: "--font-rubik",
    subsets: ["latin"],
});
  
const fira_sans_init = Fira_Sans({
    weight: '200',
    variable: "--font-fira_sans",
    subsets: ["latin"],
});
  
const josefin_sans_init = Josefin_Sans({ 
    weight: '200',
    variable: "--font-josefin_sans",
    subsets: ["latin"],
});
  
const roboto_mono_init = Roboto_Mono({
    weight: '200',
    variable: "--font-roboto_mono",
    subsets: ["latin"],
});
  
const fjalla_one_init = Fjalla_One({
    weight: '400',
    variable: "--font-fjalla_one",
    subsets: ["latin"],
});
  
const inter_init = Inter({
    weight: '200',
    variable: "--font-inter",
    subsets: ["latin"],
});

export const nunito = nunito_init.variable
export const archivo_narrow = archivo_narrow_init.variable
export const syne = syne_init.variable
export const dm_serif_display = dm_serif_display_init.variable
export const dm_sans = dm_sans_init.variable
export const poppins = poppins_init.variable
export const rubik = rubik_init.variable
export const fira_sans = fira_sans_init.variable
export const josefin_sans = josefin_sans_init.variable
export const roboto_mono = roboto_mono_init.variable
export const fjalla_one = fjalla_one_init.variable
export const inter = inter_init.variable