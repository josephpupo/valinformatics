<script>
import PlayerInfo from "/Users/josephpupo/Desktop/CSC190/Valorant Store/src/views/player-info.svelte";
    const player_info = [
        {
            name: "crosshair",
            image_url: "https://www.talkesport.com/wp-content/uploads/image-438.png",
            description: "dawgies crosshair"
        },
        {
            name: "crosshair 2",
            image_url: "https://www.talkesport.com/wp-content/uploads/image-439.png",
            description: "this is another crosshair"
        }
    ]
</script>


<header>
    <h1>Valorant Info</h1>
</header>

<info-cards>
    {#each player_info as info}
        <!-- svelte-ignore component-name-lowercase -->
        <PlayerInfo info ={info}></PlayerInfo>
    {/each}
</info-cards>





<style>
    h1{
        text-align: center;
    }

    header{
        grid-area: header;
        text-align: right;
    }

    info-cards{
        display: grid;
    }
</style>