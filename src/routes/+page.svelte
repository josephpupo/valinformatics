<div class="header" id= "h1">
	<h1>valorant informatics</h1>
</div>

<info-cards>
	{#each player_info as info}
	<!-- svelte-ignore component-name-lowercase -->
	<PlayerInfo info ={info}></PlayerInfo>
	{/each}
</info-cards>


<style>
	.header{
		padding: 10px;
		background-color: rgb(0, 0, 0);
		color:rgb(255, 255, 255);
		text-align: center;
		position: sticky;
		top: 0;
	}
	
	info-cards{
		display: grid;
		justify-content: center;	
		grid-template-columns: repeat(3, 1fr);




	}
</style>


<script>
	import PlayerInfo from "/Users/josephpupo/Desktop/CSC190/Valorant Store/valinformatics/src/views/player-info.svelte";
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
	},
	{
		name: "crosshair 2",
		image_url: "https://www.talkesport.com/wp-content/uploads/image-439.png",
		description: "this is another crosshair"
	},
	{
		name: "crosshair 2",
		image_url: "https://www.talkesport.com/wp-content/uploads/image-439.png",
		description: "this is another crosshair"
	},
	{
		name: "crosshair 2",
		image_url: "https://www.talkesport.com/wp-content/uploads/image-439.png",
		description: "this is another crosshair"
	},
	{
		name: "crosshair 2",
		image_url: "https://www.talkesport.com/wp-content/uploads/image-439.png",
		description: "this is another crosshair"
	},
	
	]
	
</script>	 	

