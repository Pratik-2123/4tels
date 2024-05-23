import React from 'react'

function BookNow() {
  return (
    <div class="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div class="container mx-auto">
                <div class="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div class="text-center">
                        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                            Book Now
                        </h1>
                        <p class="text-gray-400 dark:text-gray-400">
                            Please upload your details.
                        </p>
                    </div>
                    <div class="m-7">
                        <form action="https://api.web3forms.com/submit" method="POST" enctype="multipart/form-data">
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                            <input type="checkbox" name="botcheck" id="" style="display: none;" />
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                            <div class="flex mb-6 space-x-4">
                                <div class="w-full md:w-1/2">
                                    <label for="fname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">First Name</label>
                                    <input type="text" name="name" id="first_name" placeholder="John" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="w-full md:w-1/2">
                                    <label for="lname" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Last Name</label>
                                    <input type="text" name="last_name" id="lname" placeholder="Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                            </div>

                            <div class="flex mb-6 space-x-4">
                                <div class="w-full md:w-1/2">
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>

                                <div class="w-full md:w-1/2">
                                    <label for="phone" class="block text-sm mb-2 text-gray-600 dark:text-gray-400">Phone Number</label>
                                    <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                            </div>

                            <div class="mb-6">
                                <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Upload RC book</label>
                                <input type="file" id="attachment" name="attachment" accept="image/jpeg,image/png" required />
                            </div>
                            <div class="mb-6">
                                <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
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