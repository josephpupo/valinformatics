<script type ="module" src=src/views/xhairgenerator.js>
    
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
    text-align:center;
    margin: 20px;
    padding: 20px;
    box-shadow: 1px 1px 10px 0px #b2b2b2;
    border-radius: 10px;
    justify-content: center;
    grid-template-rows: auto;

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
    justify-content: center;
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