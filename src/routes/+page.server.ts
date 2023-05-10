import HenrikDevValorantAPI from 'unofficial-valorant-api'
import {writeFileSync} from 'fs'
const VAPI = new HenrikDevValorantAPI();
let crosshair_cards = [
    {
    name: "mako",
    description: "makos crosshair",
    img_url: "./images/0;P;o;1;0t;1;0l;2;0a;1;0f;0;1b;0.png"
    }
]


export const load = () => {
    return {
        crosshair_cards
    }
}


export const actions = {
    // @ts-ignore
    default: async ({request}) => {
        const data = await request.formData()
        const name = data.get('name');
        const description = data.get('description');
        const code = data.get('code');
        const base_url = "./"
        const img_url = base_url.concat(code).concat(".png");
        console.log(img_url);
        /*console.log(code)
        console.log(name)
        console.log(description)*/
        download(code)


        const crosshair_card = {
            name,
            description,
            img_url
        }

        crosshair_cards.push(crosshair_card)

        return {
            success: true,  
        };
    }
} 


async function download(crosshair_code: any) {
    const crosshair_data = await VAPI.getCrosshair({code: crosshair_code});
    // @ts-ignore
    writeFileSync(`./static/${crosshair_code}.png`, crosshair_data.data);
}
