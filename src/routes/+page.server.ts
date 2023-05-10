import HenrikDevValorantAPI from 'unofficial-valorant-api'
import {writeFileSync} from 'fs'
const VAPI = new HenrikDevValorantAPI();

export const actions = {
    // @ts-ignore
    default: async ({request}) => {
        const formData = await request.formData()
        const code = formData.get('code');
        console.log(code)
        download(code)

        return {
            message: "code submitted"
        };
    }
} 


async function download(crosshair_code: any) {
    const crosshair_data = await VAPI.getCrosshair({code: crosshair_code});
    // @ts-ignore
    writeFileSync(`${crosshair_code}.png`, crosshair_data.data);
}
