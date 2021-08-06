import React, { useState } from 'react'


const LoginForm = (props) => {
    
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [formErrors, setFormErrors] = useState({});
  
    const [allentry, setallEntry] = useState([])


    const HandleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        })


    }

    const SubmitForm = (e) => {
        e.preventDefault();

       const error = validate(data)
    
            setFormErrors(error);
                    
        setallEntry([...allentry, data.email, data.password])

        console.log(allentry);
        setData({
            email: "",
            password: ""
        });


        props.history.push('/Questions')
    }

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Cannot be blank";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid email format";
        }
        if (!values.password) {
          errors.password = "Cannot be blank";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        }
        return errors;
      };
    
      console.log("Error ::",formErrors)
      return (
        <div className="login-container">
            <form action="" onSubmit={SubmitForm}>
                <div>
                    <label htmlFor="email">Email </label><br />
                    <input type="text" name="email" value={data.email} id="email" onChange={HandleChange} />
                    {formErrors && formErrors.email && <div>{formErrors.email}</div>}
                </div>

                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" value={data.password} id="password" onChange={HandleChange} />
                    {formErrors && formErrors.email && <div>{formErrors.password}</div>}
                </div>

                <button className="button" type="submit" >Log in</button>
            </form>

        </div>

    )
}
export default LoginForm