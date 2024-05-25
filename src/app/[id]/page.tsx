import { Metadata } from "next";
import { Props } from "./types";
import IdMain from "@/features/idMain";
import { generateTitle } from "./model";
import { fetchData } from "@/request/idFetch";
export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const title = generateTitle(id);
    return {
        title,
    };
}

export default async function News({ params: { id } }: Props) {
    const photos = await fetchData(id);
    return (
        <IdMain props={photos} />
    );
}
