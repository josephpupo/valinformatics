import HenrikDevValorantAPI from 'unofficial-valorant-api'
import {writeFileSync} from 'fs'
import type {RequestEvent} from "@sveltejs/kit";
const VAPI = new HenrikDevValorantAPI();


export const GET = async() => {
    // @ts-ignore
    download("0;P;o;1;0t;1;0l;2;0a;1;0f;0;1b;0")
    return new Response(JSON.stringify({message: "successful creation"}), {status: 200});

}


async function download(crosshair_code: any) {
    const crosshair_data = await VAPI.getCrosshair({code: crosshair_code});
    // @ts-ignore
    writeFileSync(`${crosshair_code}.png`, crosshair_data.data);
}

