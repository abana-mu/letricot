import { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const myForm = event.target;
    // const formData = new FormData(myForm);

    const formData = new FormData(event.currentTarget);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitMessage(true))
      .catch((error) => setErrorMessage(true));
  };

  return (
    <section id='contact' className='text-center px-4 sm:px-6 lg:px-8 pt-14 pb-14 bg-stone-200'>
      <h2 className='text-5xl xl:text-6xl tracking-wider mb-8'>Contact us</h2>
      <div className='max-w-xl mx-auto'>
        <div className='max-w-xl mx-auto mt-4 p-8 shadow-lg bg-white border border-black'>
          <form name='contact' method='POST' data-netlify='true' action='/thanks' netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='contact' />

            {/* Honeypot field for spam prevention */}
            <div hidden>
              <input name='bot-field' />
            </div>

            <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <div className='mb-4'>
                  <label className='block text-sm text-left font-medium leading-6 text-gray-900' htmlFor='firstName'>
                    First Name
                  </label>
                  <input
                    className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    id='firstName'
                    type='text'
                    name='firstName'
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-3'>
                <div className='mb-4'>
                  <label className='block text-sm text-left font-medium leading-6 text-gray-900' htmlFor='lastName'>
                    Last Name
                  </label>
                  <input
                    className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                    id='lastName'
                    type='text'
                    name='lastName'
                    required
                  />
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <label className='block text-sm text-left font-medium leading-6 text-gray-900' htmlFor='email'>
                Email
              </label>
              <input
                className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                id='email'
                type='email'
                name='email'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm text-left font-medium leading-6 text-gray-900' htmlFor='company'>
                Company
              </label>
              <input
                className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                id='company'
                type='text'
                name='company'
              />
            </div>

            <div className='col-span-full mb-4'>
              <label htmlFor='message' className='block text-sm text-left font-medium leading-6 text-gray-900'>
                Message
              </label>
              <div className='mt-2'>
                <textarea
                  type='text'
                  rows={5}
                  name='message'
                  id='message'
                  autoComplete='message'
                  className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='flex items-center justify-end'>
              <button
                className='group hover:no-underline inline-flex items-center gap-x-1.5 bg-stone-900 uppercase px-3 py-2 text-base font-medium text-gray-50 shadow-sm hover:bg-neutral-800'
                type='submit'>
                Submit
                <ArrowLongRightIcon className='-mr-0.5 h-5 w-5 group-hover:translate-x-1 transition' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
