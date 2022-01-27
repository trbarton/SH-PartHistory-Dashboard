<script>
    import Router from "svelte-spa-router";

    import Login from "./routes/Login.svelte";
	import Dashboard from "./routes/Dashboard.svelte";

    const routes = {
        // Exact path
        "/": Login,

        // Using named parameters, with last being optional
        "/dashboard": Dashboard,

        // Catch-all
        // This is optional, but if present it must be the last
        "*": Login,
    };
</script>

<Router {routes} />
