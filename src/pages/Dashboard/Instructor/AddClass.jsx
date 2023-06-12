import { useForm } from 'react-hook-form';
import userData from '../../../hooks/userData';
import api from '../../../lib/API';
import { useState } from 'react';
import toast from 'react-hot-toast';
const AddClass = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [loggedUser] = userData()
  const onSubmit = (data) => {
    setIsLoading(true);
    const formData = {
      className: data.className,
      classImage: data.classImage,
      instructorName: loggedUser.name,
      instructorEmail: loggedUser.email,
      availableSeats: data.availableSeats,
      price: data.price,
      status: 'pending',
      createdAt: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
      numberOfStudents: 0,
      students: []
    }
    api.post('classes', formData)
      .then(res => {
        setIsLoading(false);
        reset()
        toast.success('Class added successfully.');
      }
      )
      .catch(err => {
        setIsLoading(false);
        toast.error('Failed to add class.');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Class Name </span>
        </label>
        <input
          className="input border border-tertiary focus:outline-none focus:border-primary px-4 py-2 rounded-md"
          type="text" {...register('className', { required: true })} />
        {errors.className && <span>This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label"><span className='label-text'>Thumbnail</span></label>
        <input className='input border-tertiary focus:outline-none' type="text" {...register('classImage', { required: true })} />
        {errors.classImage && <span>This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label"><span className='label-text'>Name</span></label>
        <input className='input border-tertiary focus:outline-none' type="text" value={loggedUser?.name} readOnly {...register('instructorName')} />
      </div>
      <div className="form-control">
        <label className="label"><span className='label-text'>Email</span></label>
        <input className='input border-tertiary focus:outline-none' type="email" value={loggedUser?.email} readOnly {...register('instructorEmail')} />
      </div>
      <div className="form-control">
        <label className="label"><span className='label-text'>Available Seats</span></label>
        <input className='input border-tertiary focus:outline-none' type="number" {...register('availableSeats', { required: true, min: 0 })} />
        {errors.availableSeats && <span>This field is required</span>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className='label-text'>Price</span>
        </label>
        <input className='input border-tertiary focus:outline-none' type="number" {...register('price', { required: true, min: 0 })} />
        {errors.price && <span>This field is required</span>}
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
            </svg> : 'Add Class'}
        </button>
      </div>
    </form>
  );
}

export default AddClass