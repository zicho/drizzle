<script lang="ts">
	export let name: string;
	export let password: boolean = false;
	export let placeholder: string;

	const displayName = name.charAt(0).toUpperCase() + name.slice(1);
</script>

<label class="label" for={name}>
	<span class="font-bold">{displayName}</span>
	<span class="text-error">Error</span>
</label>
<input
	class="input input-bordered w-full"
	id={name}
	{name}
	type={password ? 'password' : 'text'}
	placeholder={placeholder ? placeholder : displayName}
/>
