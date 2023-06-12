import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import "./style.css"
import useSClass from '../../../hooks/useSClass';
import { useParams } from 'react-router-dom';
const Pay = () => {
    const { id } = useParams();
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY)
    const [classes] = useSClass();
    const payClass = classes?.find(item => item._id === id);
    return (
        <div className='w-full h-full mt-5'>
            <Elements
                stripe={stripePromise}
            >
                <CheckoutForm cart={payClass} />
            </Elements>
        </div>
    )
}

export default Pay