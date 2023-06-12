import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import api from '../lib/API';

const Login = () => {
  const { signIn, googleSignIn, githubSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      const user = await signIn(data.email, data.password);
      console.log(user);
      toast.success(`Welcome ${user?.displayName || user?.name || user?.user?.displayName}!`);
      setIsLoading(false);
      navigate(from, { replace: true });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.error('User not found');
      }
      if (error.code === 'auth/wrong-password') {
        toast.error('Wrong password');
      }
      if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email');
      }
      if (error.code === 'auth/too-many-requests') {
        toast.error('Too many requests');
      }
      if (error.code === 'auth/user-disabled') {
        toast.error('User disabled');
      }
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      googleSignIn()
        .then(user => {
          const saveUser = {
            type: 'student',
            name: user.user.displayName,
            email: user.user.email,
            phone: user.user.phoneNumber,
            photoURL: user.user.photoURL,
            uid: user.user.uid,
            status: 'active',
            createdAt: new Date(),
            numberOfClasses: [],
            gender: user.user.gender || "Didn't Provided"
          }
          api.post('users/google', saveUser)
            .then(data => {
              // localStorage.setItem('usertype', 'student')
              toast.success(`Welcome ${user?.displayName || user?.name || user?.user?.displayName}!`);
              navigate(from, { replace: true });
              setIsLoading(false);
            })
            .catch(error => {
              setIsLoading(false)
            })
        })
    } catch (error) {
      if (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  }
  const handleGithubLogin = async () => {
    setIsLoading(true);
    try {
      githubSignin()
        .then(user => {
          const saveUser = {
            type: 'student',
            name: user.user.displayName,
            email: user.user.email,
            phone: user.user.phoneNumber,
            photoURL: user.user.photoURL,
            uid: user.user.uid,
            status: 'active',
            createdAt: new Date(),
            numberOfClasses: [],
            gender: user.user.gender || "Didn't Provided"
          }
          api.post('users/google', saveUser)
            .then(data => {
              localStorage.setItem('usertype', 'student')
              toast.success(`Welcome ${user?.displayName || user?.name || user?.user?.displayName}!`);
              navigate(from, { replace: true });
              setIsLoading(false);

            })
            .catch(error => {
              setIsLoading(false)
            })
        })
    } catch (error) {
      if (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>MusicFrame | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="card p-5 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body p-0 pb-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className=' relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: 'Password is required' })}
                    placeholder="password"
                    className="input input-bordered"
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
                <button
                  className="btn bg-primary text-white hover:bg-tertiary"
                  type="submit"
                  disabled={isLoading}>
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
                    </svg> : 'Login'}
                </button>
              </div>
            </form>
            <div className="flex gap-5 justify-center mb-3">
              <button className="p-2 px-4 rounded-lg text-lg duration-200 ease-linear bg-tertiary text-white hover:bg-primary" type="button" onClick={handleGoogleLogin}>
                <FaGoogle />
              </button>
              <button className="p-2 px-4 rounded-lg text-lg duration-200 ease-linear bg-tertiary text-white hover:bg-primary" type="button" onClick={handleGithubLogin}>
                <FaGithub />
              </button>
            </div>
            <small>New ? <Link to="/register" className="text-primary font-semibold text-md">Create an account</Link> </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
