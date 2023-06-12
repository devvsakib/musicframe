import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import api from '../lib/API';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Register = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = data => {
    setIsLoading(true);
    if (data.password !== confirmPassword) {
      toast.error('Password and confirm password not match.');
      setIsLoading(false);
      return;
    }
    createUser(data.email, data.password)
      .then(result => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = {
              type: 'student', name: data.name, email: data.email, phone: data.phone, photoURL: data.photoURL, uid: result.user.uid, status: 'active', createdAt: new Date(), numberOfClasses: [],
              gender: data.gender
            }
            api.post('/users', saveUser)
              .then(data => {
                setIsLoading(false);
                reset();
                toast.success('Register successfully.');
                navigate('/');
              })
              .catch(error => {
                setIsLoading(false);
                if (error.message === 'Failed to fetch') {
                  toast.error('Server is down. Please try again later.');
                }
              })
          })
          .catch(error => {
            setIsLoading(false);
            if (error.message === 'Failed to fetch') {
              toast.error('Server is down. Please try again later.');
            }
          })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Email already in use.');
        }
        if (error.code === 'auth/invalid-email') {
          toast.error('Invalid email.');
        }
        if (error.code === 'auth/weak-password') {
          toast.error('Password should be at least 6 characters.');
        }
        setIsLoading(false);
      }
      )
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>MusicFrame | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen my-10 z-0">
        <div className="card p-5 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0 pb-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
              {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            {/* phone number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input type="text"  {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select className=" px-3 py-3 rounded-lg bg-transparent border" {...register('gender', { required: true })}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <span>This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className='relative w-full'>
                <input type={showPassword ? 'text' : 'password'} {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                })} placeholder="password" className="w-full input input-bordered" />
                <span className='cursor-pointer absolute right-2 top-3'>
                  {showPassword ? (
                    <FaEyeSlash onClick={handleShowPassword} className="text-2xl" />
                  ) : (
                    <FaEye onClick={handleShowPassword} className="text-2xl" />
                  )}
                </span>
              </div>
              {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have One Uppercase <br /> One lower case<br /> One number <br /> One special character.</p>}
            </div>
            {/* confirm password here */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className='relative w-full'>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'} placeholder="Confirm password" className="w-full input input-bordered"
                />
                <span className='cursor-pointer absolute right-2 top-3'>
                  {showPassword ? (
                    <FaEyeSlash onClick={handleShowPassword} className="text-2xl" />
                  ) : (
                    <FaEye onClick={handleShowPassword} className="text-2xl" />
                  )}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-primary hover:bg-tertiary text-white" type="submit" disabled={isLoading}>
                {isLoading ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width={20}
                    preserveAspectRatio="xMidYMid"
                    style={{ background: 'none' }}
                  >
                    <circle
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="10"
                      r="35"
                      strokeDasharray="165 57"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="1s"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                      ></animateTransform>
                    </circle>
                  </svg> : 'Register'}
              </button>
            </div>
          </form>
          <p><small>Already have an account? <Link to="/login" className="text-primary font-semibold text-md">Login</Link></small></p>
        </div>

      </div>
    </>
  );
};

export default Register;