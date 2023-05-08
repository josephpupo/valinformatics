<div class="header" id= "h1">
	<h1>valorant informatics</h1>

</div>

<div class="input">
	<input type = "text" id="code" placeholder="crosshair code">
</div>

<div class="button">
	<button type="button" on:click={() => getInputValue()}>submit</button>
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

	.input{
		display: grid;
		justify-content: center;
		margin: auto;
		padding: 12px 20px;
		width: auto;
	}

	::placeholder{
		text-align: center;
	}

	.button{
		display: grid;
		justify-content: center;
		box-sizing: border-box;
		padding: 12px 20px;
	}
</style>


<script type="module">


	import PlayerInfo from "/Users/josephpupo/Desktop/CSC190/Valorant Store/valinformatics/src/views/player-info.svelte";
	
	function getInputValue(){
		var value = document.getElementById('code');
		var code = value?.innerText
		alert(value);
	}

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

