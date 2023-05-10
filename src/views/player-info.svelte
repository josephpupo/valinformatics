<script> 
    /**
     * @type {{ name: any; img_url: any; description: any; }}
     */
     export let info

</script>

<infoCard>
    <p class = "name">{info.name}</p> 
    <img alt = {info.name} src = {info.img_url}/>
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
    max-height: 400px;
        display: grid;  


        grid-template: 
            "name"
            "image"
            "description"
            /min-content
}

infoCard img{
    grid-area: image; 
    width: 174px;    
    

}

infoCard [class = 'name']{
    grid-area: name;
    font-size: 20px;
}

infoCard [class = 'description']{
    grid-area: description;
    font-size: 50px;
}



</style>