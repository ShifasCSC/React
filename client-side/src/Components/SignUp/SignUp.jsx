import React from "react";
function SignUp(){
    return(
        <>
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Register</h2>
        </div>

        <div class=" max-w-md mx-auto mt-2 shadow-xl shadow-slate-700 md:mt-16">
            <div class="overflow-hidden bg-white rounded-md shadow-md">
                <div class="px-2 py-6 sm:px-8 sm:py-7">
                    <form action="#" method="POST">
                        <div class="space-y-2">
                            
                                <label for="" class="text-base font-medium text-gray-900">Username </label>
                                <div class=" relative text-gray-400 focus-within:text-gray-600">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Enter your full name"
                                        class="block w-full py-2 pl-1 pr-2 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email </label>
                                <div class="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                   

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter email "
                                        class="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Phone </label>
                                <div class="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                   

                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter email "
                                        class="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Password </label>
                                <div class="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                    

                                    <input
                                        type="password"
                                        name="pwd"
                                        id="pwd"
                                        placeholder="Enter your password"
                                        class="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Confirm Password </label>
                                <div class="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                    

                                    <input
                                        type="password"
                                        name="cpwd"
                                        id="cpwd"
                                        placeholder="Confirm your password"
                                        class="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Confirm Password </label>
                                <div class="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                    <select className="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" name="acctype" id="acctype">
                                        <option value="">--select--</option>
                                        <option value="seller">seller</option>
                                        <option value="buyer">buyer</option>
                                    </select>
                                </div>
                            </div>


                            <div>
                                <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                    Create account
                                </button>
                            </div>

                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    )
}
export default SignUp