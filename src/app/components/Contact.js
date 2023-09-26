import { useState } from 'react';

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
    <section id='contact' className='text-center px-4 sm:px-6 lg:px-8 pt-14 pb-14'>
      <h2 className='text-5xl xl:text-6xl tracking-wider mb-8'>Contact us</h2>
      <div className='max-w-xl mx-auto'>
        <div className='max-w-xl mx-auto mt-10 p-8'>
          <form name='contact' method='POST' data-netlify='true'>
            <input type='hidden' name='form-name' value='contact' />

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
                First Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='firstName'
                type='text'
                name='firstName'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
                Last Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='lastName'
                type='text'
                name='lastName'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                name='email'
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='company'>
                Company
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='company'
                type='text'
                name='company'
              />
            </div>

            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* <form onSubmit={handleSubmit} className='pb-12' id='contact-form' name='contact' method='POST' data-netlify='true'>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label htmlFor='first-name' className='block text-sm text-left font-medium leading-6 text-gray-900'>
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label htmlFor='last-name' className='block text-sm text-left font-medium leading-6 text-gray-900'>
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label htmlFor='email' className='block text-sm text-left font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label htmlFor='company' className='block text-sm text-left font-medium leading-6 text-gray-900'>
                Company
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='company'
                  id='company'
                  autoComplete='company'
                  className='block w-full rounded-sm border border-gray-900 py-3 px-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
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
          </div>
          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <div>{submitMessage && <p>Your form was successfully submitted</p>}</div>
            <div>{errorMessage && <p>Oh no, there was an error... please contact us at @@@</p>}</div>
            <button
              type='submit'
              className='bg-neutral-900 rounded-sm uppercase px-5 py-2.5 text-md font-medium text-gray-50 shadow-sm hover:bg-neutral-800'>
              Sumbit
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
}
