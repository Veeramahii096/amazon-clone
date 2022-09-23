
  import {Elements} from '@stripe/react-stripe-js';
  import {loadStripe} from '@stripe/stripe-js';
  
  const stripePromise = loadStripe('pk_test_51Li441SEqeYd8iuHfx9V4A5rTHY9Y0lkpUlqTLSuehMbvnFd2BwW8MsDqSnWqwnybuMUtdkVvV2mLnjAtJT16JLm000BGY67Qm');
  
  const Wrapper = (props) => (
    <Elements stripe={stripePromise}>
      <MyComponent {...props} />
    </Elements>
  );
  
  
  //const stripePromise = loadStripe('pk_test_51Li441SEqeYd8iuHfx9V4A5rTHY9Y0lkpUlqTLSuehMbvnFd2BwW8MsDqSnWqwnybuMUtdkVvV2mLnjAtJT16JLm000BGY67Qm');