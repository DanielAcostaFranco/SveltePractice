<script>
    function loginHandler() {

        console.log('Login form submitted');
    }
</script>
<form on:submit|preventDefault={loginHandler}>
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Email" maxlength="255" required />

    <label for="password">Password</label>
    <input type="password" id="password" placeholder="Password" minlength="6" maxlength="255" required/>

    <button type="submit">Login</button>
</form>

<style>
    button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: 0 auto;
    }
</style>


