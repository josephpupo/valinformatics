<script type="module">
	import PlayerInfo from "/Users/josephpupo/Desktop/CSC190/Valorant Store/valinformatics/src/views/player-info.svelte";
	export let data;
	const player_info = data.crosshair_cards
	console.log(player_info)
</script>	


<div class="header" id= "h1">
	<h1>valorant crosshair storage</h1>

</div>

<form method="POST">	
	<input
		type = "text"
		name = "name"
		placeholder= "name the crosshair"
	/>
	<input
		type = "text"
		name = "description"
		placeholder = "describe the crosshair"
	/>
	<input
		type = "text"
		name = "code"
		placeholder = "crosshair code"
	/>
	<button type="submit">submit</button>
</form>





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

	/*
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
	}*/
</style>

 	

