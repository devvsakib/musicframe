import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../../../lib/API';
import userData from '../../../hooks/userData';
import { useNavigate } from 'react-router-dom';

const Payment = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loggedUser] = userData();
    const [isLoading, setIsLoading] = useState(false);
    const [cardError, setCardError] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        api.post('create-payment-intent', { price: cart?.price }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
            .catch(err => {
                console.log(err);
            })
    }, [cart.price])

    const handleSubmit = async (event) => {

        setIsLoading(true);
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            setCardError(error.message);
        }
        else {
            setCardError(null);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: loggedUser?.displayName || loggedUser?.name || "Unknown",
                    email: loggedUser?.email || "anonymous"
                }
            }
        });

        if (confirmError) {
            setIsLoading(false);

            toast.error(confirmError.message);
            setCardError(confirmError.message);
        }
        if (paymentIntent?.status === 'succeeded') {
            toast.success('Payment Successful');
            const payment = {
                name: loggedUser?.displayName || loggedUser?.name,
                email: loggedUser?.email,
                className: cart.className,
                classImage: cart.classImage,
                instructorName: cart.instructorName,
                instructorEmail: cart.instructorEmail,
                transactionId: paymentIntent.id,
                price: cart.price,
                date: new Date(),
                classId: cart.classId
            }
            api.post('/payments', payment, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => {
                    navigate('/dashboard/enrolledclasses');
                    if (res.data.result.insertedId) {
                        // display confirm
                        setIsLoading(false);
                    }
                })

        }



    };

    return (
        <form onSubmit={handleSubmit} className='w-full md:w-3/5 mx-auto'>

            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="bg-gradient-to-br from-primary to-quaternary px-4 py-1 rounded text-white font-semibold mt-5" disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {cardError && <div id="payment-message">{cardError}</div>}
        </form>
    )
}

export default Payment