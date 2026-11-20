function Login() {
  function loginHandler() {
    console.log('Login form submitted')
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      loginHandler()
    }}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Email" maxLength={255} required />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        minLength={6}
        maxLength={255}
        required
      />

      <button type="submit">Login</button>
    </form>
  )
}

export default Login
