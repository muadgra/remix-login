import type { ActionFunction, LinksFunction } from "@remix-run/node";
import { Link, useActionData, useSearchParams } from "@remix-run/react";
import { createUserSession, login, getUserId } from "~/utils/session.server";
export const action: ActionFunction = async ({ request,}) => {
    const form = await request.formData();
    const loginType = form.get("loginType");
    const username = form.get("username");
    const password = form.get("password");
    let x = username ? username.toString() : "deneme";
    
    let userId = getUserId(request);
    console.log(userId);
    return createUserSession(x, "/jokes");
}

export default function Login() {
    const actionData = useActionData();
    return (
        <div className="container">
            <div className="content" data-light="">
                <h1>Login</h1>
                <form method="post">
                    
                    
                    <div>
                        <label htmlFor="username-input">Username</label>
                        <input
                            type="text"
                            id="username-input"
                            name="username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password-input">Password</label>
                        <input
                            id="password-input"
                            name="password"
                            type="password"
                        />
                    </div>
                    <button type="submit" className="button">
                        Submit
                    </button>
                </form>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/jokes">Jokes</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function getUserSession(request: Request) {
    throw new Error("Function not implemented.");
}
