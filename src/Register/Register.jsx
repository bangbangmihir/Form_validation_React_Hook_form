import React,{useRef} from "react";
import { useForm } from "react-hook-form";
import "./register.css"

const Register = () => {
  const { register, handleSubmit, formState: { errors },watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onsubmit =(data)=> alert(JSON.stringify(data));

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="form-control">
          <label>FirstName</label>
          <input type="text"  autoComplete="off" {...register("firstname", { required: true,maxLength: 20,
          pattern: /^[A-Za-z]+$/i })} />
          {errors?.firstname?.type === "required"&&(<p>FirstName Required</p>)}
          {errors?.firstname?.type === "maxLength"&&(<p>firstName can not exceed with more than 20 letter</p>)}
          {errors?.firstname?.type === "pattern"&&(<p>Alphabetical character only</p>)}
        </div>
        <div className="form-control">
          <label>LastName</label>
          <input type="text" autoComplete="off" {...register("lastname", { required: true,maxLength: 20,
          pattern: /^[A-Za-z]+$/i })} />
          {errors?.lastname?.type === "required"&&(<p>LastName Required</p>)}
          {errors?.lastname?.type === "maxLength"&&(<p>lastname can not exceed with more than 20 letter</p>)}
          {errors?.lastname?.type === "pattern"&&(<p>Alphabetical character only</p>)}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" autoComplete="off" {...register("email", { required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
          {errors?.email?.type === "required"&&(<p>Email Required</p>)}
          {errors?.email?.type === "pattern"&&(<p>Invalid Email</p>)}
        </div>
        <div className="form-control">
          <label>Phone</label>
          <input autoComplete="off" {...register("phone", { required: true})} />
          {errors?.phone?.type === "required"&&(<p>Phone Required</p>)}
          {errors?.phone&&(<p>Mobile Number Must be 10 digit</p>)}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input  autoComplete="off" type="password" {...register("password", { required: true,pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i })} />
          {errors?.password?.type === "required"&&(<p>Password Required</p>)}
          {errors?.password?.type==="pattern"&&(<p>Password is not strong</p>)}
        </div>
        <div className="form-control">
          <label>Confirm-Password</label>
          <input  autoComplete="off" type="password" {...register("cpassword", { required: true,pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i ,validate:value=>value===password.current })} />
          {errors?.cpassword?.type === "required"&&(<p>Password Required</p>)}
          {errors?.cpassword?.type==="pattern"&&(<p>Password is not strong</p>)}
          {errors?.cpassword?.type==="validate"&&(<p>Password doesn't Match</p>)}
        </div>
        
        {/* <div className="form-control">
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
        </div> */}
    
        <button type="submit" id="btn">Register</button>
          
    
      </form>
    </div>
  );
};

export default Register;
