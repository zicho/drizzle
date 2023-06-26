<script lang="ts">
	export let name: string;
	export let placeholder: string;
	export let errorMessage: string[] | undefined;
	export let required: boolean = false
	export let type: "text" | "password" = "text";
	export let value: string;

	const inputProperties = {  value, type };

	const displayName = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<label class="label" for={name}>
	<span class="font-bold">{displayName}</span>
	{#if errorMessage}<span class="text-error">{errorMessage[0]}</span>{/if}
</label>
<input
	class="input input-bordered w-full"
	id={name}
	name={name}
	{...inputProperties}
	bind:value={value}
	placeholder={placeholder ? placeholder : displayName}
	aria-label={placeholder ? placeholder : displayName}
	required={required}
/>
