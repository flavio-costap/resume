import { StaticImageData } from "next/image";

export type  certificationsType =  {
    title: string;
    organization: string;
    period: string;
    credential: string;
    skills: string[];
    link: string;
    logo: StaticImageData;
}[]