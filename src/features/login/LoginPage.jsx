import React from "react";
import "./LoginPage.css";
<<<<<<< HEAD

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

=======
import { useState } from "react";


export default function LoginPage() {

    const [values, setValues] = useState({
        username:'',
        password:'',
        checkbox: true,
    })
    let myRef=React.createRef()



const onChange =(e) =>{

    // if (e.target.value.trim()) {
    //     myRef.current.removeAttribute('disabled')
    // }

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setValues({...values,[e.target.name]: value})

}

    function handleSubmit(e) {

        console.log(values)
        e.preventDefault();

        setValues({
            username: "",
            password: "",
            checkbox: false,
        });
        e.target.reset()




        // const form = e.target;
        // const formData = new FormData(form);
        // const formJson = Object.fromEntries(formData.entries());
        // form.reset()
        //
        // console.log(formJson);


    }


>>>>>>> 856ce26c49a3f55e4b7626b5ed3b5916819a9997
    return (
        <div className="container">
            <form className="form" method="post" onSubmit={handleSubmit}>
                <label>
                    <h3>Username</h3>
                    <div>
                        <input
<<<<<<< HEAD
                            className="input"
                            name="Username"
=======
                            value={values.username}
                            onChange={onChange}
                            className="input"
                            name="username"
>>>>>>> 856ce26c49a3f55e4b7626b5ed3b5916819a9997
                            placeholder="Enter Username"
                        />
                    </div>
                </label>
                <label>
                    <h3>Password</h3>
                    <input
<<<<<<< HEAD
                        className="input"
                        name="Password"
=======
                        value={values.password}
                        onChange={onChange}
                        className="input"
                        type="password"
                        name="password"
>>>>>>> 856ce26c49a3f55e4b7626b5ed3b5916819a9997
                        placeholder="Enter Password"
                    />
                </label>

                <div>
<<<<<<< HEAD
                    <button className="login" type="submit">
=======
                    <button ref={myRef} className="login" type="submit" disabled={!values.password || !values.username}>
>>>>>>> 856ce26c49a3f55e4b7626b5ed3b5916819a9997
                        Login
                    </button>
                </div>
                <div className="checkbox">
                    <label>
<<<<<<< HEAD
                        <input type="checkbox" name="myCheckbox" defaultChecked={true} />{" "}
=======
                        <input onChange={onChange} type="checkbox" name="checkbox" checked={values.checkbox} />{" "}
>>>>>>> 856ce26c49a3f55e4b7626b5ed3b5916819a9997
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
<<<<<<< HEAD
=======

>>>>>>> 856ce26c49a3f55e4b7626b5ed3b5916819a9997
}
