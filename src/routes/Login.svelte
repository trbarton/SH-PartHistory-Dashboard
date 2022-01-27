<script>
    import Profile from './Profile.svelte';
    import { auth, signInPrompt, signOutFn } from '../firebase';
    import { authState } from 'rxfire/auth';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    function login() {
        signInPrompt();
    }
</script>

<style></style>

<main>
    <h1>Login</h1>
{#if user}
    <Profile {...user} />
    <button on:click={ () => signOutFn() }>Logout</button>
    <hr>
{:else}
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
</main>