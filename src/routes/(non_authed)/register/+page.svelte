<script lang="ts">
	import { enhance } from '$app/forms';
	import FormInput from '$lib/components/FormInput.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col items-center justify-center pb-48 h-screen">
	<div class="w-full md:w-1/2 lg:w-1/3">
		<form use:enhance method="post" class="px-8 pt-6 pb-8 bg-base-100 shadow-lg">
			<h1 class="font-bold tracking-tight text-2xl mb-8">Register a new account</h1>
			<div class="mb-4">
				<FormInput name="username" placeholder="Enter your username" />
			</div>
			<div class="mb-6">
				<FormInput name="password" placeholder="Enter your password" password />
			</div>
			<div class="mb-6">
				<FormInput name="confirm_password" placeholder="Confirm password" password />
			</div>
			<div class="flex items-center justify-center">
				<button class="btn btn-primary w-full" type="submit"> Sign In </button>
			</div>
		</form>

		<div class="shadow-lg p-8 bg-error mt-8 text-center">
			<span class="text-error-content">Error</span>
		</div>
	</div>
</div>

<style>
	:global(body) {
		overflow: hidden;
	}
</style>
