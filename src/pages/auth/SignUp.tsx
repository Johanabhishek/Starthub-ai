import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../../firebase-config"; // Make sure this path is correct for your project

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'founder', // Default to founder
    agreeToTerms: false
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- Form Validation ---
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 6) {
        setError('Password should be at least 6 characters long');
        return;
    }
    if (!formData.agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // --- Step 1: Create the user in Firebase Authentication ---
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log("Signed up successfully:", user);

      // --- Step 2: Save the user's profile data to Firestore ---
      // This creates a new document in the "users" collection with the user's unique ID
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        userType: formData.userType,
        createdAt: new Date() // Good practice to store a creation timestamp
      });

      console.log("User profile created in Firestore.");

      // --- Step 3: Redirect the user based on their chosen type ---
      if (formData.userType === 'founder') {
        navigate('/founder/profile');
      } else {
        navigate('/investor/dashboard');
      }
      
    } catch (firebaseError: any) {
      // --- Handle specific Firebase errors ---
      if (firebaseError.code === 'auth/email-already-in-use') {
        setError('An account with this email address already exists.');
      } else {
        setError('Failed to create an account. Please try again.');
        console.error("Error signing up:", firebaseError.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/signin" className="font-medium text-primary hover:text-primary/90">
              sign in to your existing account
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* ... all your form JSX remains the same ... */}
          <div className="rounded-md shadow-sm">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="sr-only">First name</label>
                <input type="text" name="firstName" id="first-name" autoComplete="given-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md sm:rounded-tr-none sm:rounded-tl-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="First name" value={formData.firstName} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">Last name</label>
                <input type="text" name="lastName" id="last-name" autoComplete="family-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:rounded-t-md sm:rounded-tl-none sm:rounded-tr-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="mt-[-1px]">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Email address" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mt-[-1px]">
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="mt-[-1px]">
              <label htmlFor="confirm-password" className="sr-only">Confirm password</label>
              <input id="confirm-password" name="confirmPassword" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>
          {/* ... Radio buttons, terms, and submit button JSX ... */}
           <div className="mt-6">
             <div className="relative">
               <div className="absolute inset-0 flex items-center">
                 <div className="w-full border-t border-gray-300"></div>
               </div>
               <div className="relative flex justify-center text-sm">
                 <span className="px-2 bg-gray-50 text-gray-500">
                   I am a
                 </span>
               </div>
             </div>
             
             <div className="mt-4 grid grid-cols-2 gap-3">
               <div>
                 <label className={`relative flex items-center justify-center px-4 py-3 border ${formData.userType === 'founder' ? 'bg-primary/10 border-primary' : 'border-gray-300'} rounded-md shadow-sm cursor-pointer hover:border-primary`}>
                   <input type="radio" name="userType" value="founder" className="sr-only" checked={formData.userType === 'founder'} onChange={handleChange} />
                   <span className={`text-sm font-medium ${formData.userType === 'founder' ? 'text-primary' : 'text-gray-900'}`}>
                     Founder
                   </span>
                 </label>
               </div>
               <div>
                 <label className={`relative flex items-center justify-center px-4 py-3 border ${formData.userType === 'investor' ? 'bg-primary/10 border-primary' : 'border-gray-300'} rounded-md shadow-sm cursor-pointer hover:border-primary`}>
                   <input type="radio" name="userType" value="investor" className="sr-only" checked={formData.userType === 'investor'} onChange={handleChange} />
                   <span className={`text-sm font-medium ${formData.userType === 'investor' ? 'text-primary' : 'text-gray-900'}`}>
                     Investor
                   </span>
                 </label>
               </div>
             </div>
           </div>
           <div className="flex items-center">
             <input id="agree-terms" name="agreeToTerms" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" checked={formData.agreeToTerms} onChange={handleChange} required />
             <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
               I agree to the{' '}
               <a href="#" className="font-medium text-primary hover:text-primary/90">
                 Terms and Conditions
               </a>
             </label>
           </div>
           <div>
             <button type="submit" disabled={isLoading} className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
               {isLoading ? 'Creating account...' : 'Create account'}
             </button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
