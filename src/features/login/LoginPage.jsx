import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        fetch("/some-api", { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <div className="container">
            <form className="form" method="post" onSubmit={handleSubmit}>
                <label>
                    <h3>Username</h3>
                    <div>
                        <input
                            className="input"
                            name="Username"
                            placeholder="Enter Username"
                        />
                    </div>
                </label>
                <label>
                    <h3>Password</h3>
                    <input
                        className="input"
                        name="Password"
                        placeholder="Enter Password"
                    />
                </label>

                <div>
                    <button className="login" type="submit">
                        Login
                    </button>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="myCheckbox" defaultChecked={true} />{" "}
                        <span>Remember me</span>
                    </label>
                </div>

                <div className="reset_container">
                    <button className="reset" type="reset">
                        Cansel
                    </button>
                </div>
            </form>
        </div>
    );
}
