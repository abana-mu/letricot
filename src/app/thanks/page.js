import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className='bg-stone-200 h-screen w-full flex justify-center items-center'>
      <div className='max-w-xl mx-auto p-8 border-black border bg-white shadow-lg'>
        <h1 className='text-2xl font-bold mb-4'>Thank you for contacting us!</h1>
        <p className='mb-6'>We've received your contact details and will get back to you soon.</p>
        <Link
          href='/'
          className='group hover:no-underline inline-flex items-center gap-x-1.5 bg-stone-900 uppercase px-3 py-2 text-base font-medium text-gray-50 shadow-sm hover:bg-neutral-800'
          type='submit'>
          <ArrowLongLeftIcon className='-mr-0.5 h-5 w-5 group-hover:-translate-x-1 transition' />
          Back to website
        </Link>
      </div>
    </div>
  );
}
