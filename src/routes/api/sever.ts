import HenrikDevValorantAPI from 'unofficial-valorant-api'
import {writeFileSync} from 'fs'
import type {RequestEvent} from "@sveltejs/kit";


const VAPI = new HenrikDevValorantAPI();
async function download(crosshair_code: any) {
    const crosshair_data = await VAPI.getCrosshair({code: crosshair_code});
    // @ts-ignore
    writeFileSync(`${crosshair_code}.png`, crosshair_data.data);
}

export async function POST({request} : RequestEvent){
    let crosshair_code : any = await request.json();
    download(crosshair_code);
}

