import React from 'react'

export default function Login() {
  return (
    <div>
       <form>
            <label htmlFor="email">email: </label>
            <input type="email" name="email" required="" />
            <br />
            <label htmlFor="password">password: </label>
            <input type="password" name="password" required="" />
            <br />
            <input type="submit" defaultValue="Login!" />
      </form>

    </div>
  )
}
