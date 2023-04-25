<script>
    import HenrikDevValorantAPI from 'unofficial-valorant-api';
    //import {writeFileSync} from 'fs';
    const VAPI = new HenrikDevValorantAPI();
    
    /**///function to download crosshair based off
    ///**
    //* @param {string} crosshair_code - The string
    //*/
    //async function download(crosshair_code){
    //    const crosshair_data = await VAPI.getCrosshair({code: crosshair_code});
    //    writeFileSync(`${crosshair_code}.png`, crosshair_data.data);
    //}
    
    
    
    
    
    /**
     * @type {{ name: any; image_url: any; description: any; }}
     */
     export let info
</script>

<infoCard>
    <p class = "name">{info.name}</p> 
    <img alt = {info.name} src = {info.image_url}/>
    <p class = "description">{info.description}</p>
    <button>copy this!</button>
</infoCard>

<style>


infoCard{
    margin: 20px;
    padding: 20px;
    box-shadow: 1px 1px 10px 0px #b2b2b2;
    border-radius: 10px;

    display: grid;  

    grid-template: 
        "name"
        "image"
        "description"
        /min-content;

        column-gap: 10px;
}

infoCard img{
    grid-area: image;
    max-height: 100%;

}

infoCard [class = 'name']{
    grid-area: name;
    max-height: 100%;
    font-size: 20px;
    margin: 0;
}

infoCard [class = 'description']{
    grid-area: description;
    max-height: 30%;
    font-size: 50px;
}



</style>