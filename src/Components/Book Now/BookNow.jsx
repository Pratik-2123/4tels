import React from 'react'

function BookNow() {
  return (
    <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700">
                            Book Now
                        </h1>
                        <p className="text-gray-400 dark:text-gray-400">
                            Please upload your details.
                        </p>
                    </div>
                    <div className="m-7">
                        <form action="https://api.web3forms.com/submit" method="POST" encType="multipart/form-data">
                            {/* <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> */}
                            {/* <input type="hidden" name="subject" value="New Submission from Web3Forms" /> */}
                            {/* <input type="checkbox" name="botcheck" id="" className="display: none;" /> */}
                            {/* <input type="hidden" name="redirect" value="https://web3forms.com/success" /> */}

                            <div className="flex mb-6 space-x-4">
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="fname" className="block mb-2 text-sm text-gray-600 ">First Name</label>
                                    <input type="text" name="name" id="first_name" placeholder="John" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="lname" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Last Name</label>
                                    <input type="text" name="last_name" id="lname" placeholder="Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                                </div>
                            </div>

                            <div className="flex mb-6 space-x-4">
                                <div className="w-full md:w-1/2">
                                    <label htmlFor="vehicle" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Vehicle number</label>
                                    <input type="text" name="vehicle" id="vehicle" placeholder="HR 25 DQ XXXX" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                                </div>

                                <div className="w-full md:w-1/2">
                                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-600 dark:text-gray-400">Phone Number</label>
                                    <input type="text" name="phone" id="phone" placeholder="+91 987654XXXX" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Upload RC book</label>
                                <input type="file" id="attachment" name="attachment" accept="image/jpeg,image/png" required />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BookNow