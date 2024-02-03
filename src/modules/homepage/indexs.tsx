// Dependencies
import { Spinner } from "@chakra-ui/react";
import React, { useState } from "react";

const Apps = () => {
  const [email, setEmail] = useState('');
  const [waitlistData, setWaitlistData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to validate the email on the FE.
  const isValidEmail = (email: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  // Function to submit Waitlist data
  const submitWaitlist = () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);

    const data = {
      email,
      waitlist_id: 596,
      referral_link: document.URL,
    };

    // Simulating the API call
    setTimeout(() => {
      // Simulating a successful response
    

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex w-full h-full p-6">
      {!waitlistData ? (
        <form className="w-full space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-gray-700">
              What is your email?
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Please enter your email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-md border border-gray-200 text-base p-2 text-gray-700"
            />
          </div>

          <div className="mt-4">
            <button
              type="button"
              disabled={loading}
              onClick={submitWaitlist}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-3 py-2 w-full transition duration-300"
            >
              {loading ? <Spinner color="#ffffff" /> : "Sign up for the waitlist"}
            </button>
            {error && (
              <div className="text-center mt-2 text-xs text-red-500 px-6">
                {error}
              </div>
            )}
          </div>
        </form>
      ) : (
        <div className="text-gray-700">
       
          <div className="mt-4">
            <button
              type="button"
              disabled={loading}
              onClick={() => setWaitlistData(null)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-3 py-2 w-full transition duration-300"
            >
              Return to signup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
