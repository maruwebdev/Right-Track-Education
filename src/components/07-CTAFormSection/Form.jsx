import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const [studentName, setStudentName] = useState('')
    const [parentName, setParentName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [ugCourse, setUGCourse] = useState('')
    const [pgCourse, setPGCourse] = useState('')
    const [specializedCourse, setSpecializedCourse] = useState('')
    const [boardResult, setBoardResult] = useState('')
    const [studyState, setStudyState] = useState('')
    const [query, setQuery] = useState('')
    const [result, setResult] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();
        setResult('Sending...');
    
        // 1. Data collect karo (variables must match your template {{...}})
        const templateParams = {
            studentName: studentName,
            parentName: parentName,
            mobileNumber: mobileNumber,
            email: email,
            city: city,
            state: state,
            ugCourse: ugCourse,
            pgCourse: pgCourse,
            specializedCourse: specializedCourse,
            boardResult: boardResult,
            studyState: studyState,
            query: query,
            // Optional: From name setup
            name: studentName 
        };
    
        // 2. EmailJS Send (Replace with YOUR IDs)
        emailjs.send(
            'service_051pe2c',      // Tera Service ID
            'template_ydlagjh',   // Jo abhi save kiya wahan se copy karo
            templateParams,
            'hh36JsrIj9znBBkBT'     // Account -> API Keys se copy karo
        )
        .then((response) => {
            setResult('Form Submitted Successfully! ✅');
            // Clear all states
            setStudentName(''); setParentName(''); setMobileNumber(''); setEmail('');
            setCity(''); setState(''); setUGCourse(''); setPGCourse('');
            setSpecializedCourse(''); setBoardResult(''); setStudyState(''); setQuery('');
        })
        .catch((err) => {
            console.error('EmailJS Error:', err);
            setResult('Submission Failed. Please try again.');
        });
    };
    
      return (
        <form
        onSubmit={submitHandler}
        className='text-black flex flex-col '>
    
              <div className='flex flex-col h-190 md:h-140 p-4'>
    
    
              <label htmlFor="Sname" className='text-sm font-medium leading-5'>Your Name</label>
    
              <input
              onChange={(e)=>{
                setStudentName(e.target.value)
              }}
              value={studentName}
               type="text"
               id='Sname'
               placeholder='your name'
               required
               className='outline-none mb-1.5 py-1 sm:py-0 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1 w-full'
              />
    
              <label htmlFor="Gname" className='text-sm font-medium leading-5'>Parent/Guardian Name</label>
    
              <input
               onChange={(e)=>{
                setParentName(e.target.value)
              }}
              value={parentName}
               type="text"
               id='Gname'
               placeholder='parent/guardian name'
               required
               className='outline-none mb-1.5 py-1 sm:py-0 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1 w-full'
              />
    
    
              <label htmlFor="mobile" className='text-sm font-medium leading-5'>Mobile No.</label>
    
              <input
               onChange={(e)=>{
                setMobileNumber(e.target.value)
              }}
              value={mobileNumber}
               type="text"
               id='mobile'
               placeholder='mobile no.'
               required
               className='outline-none mb-1.5 py-1 sm:py-0 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1 w-full'
              />
    
    
             <label htmlFor="email" className='text-sm font-medium leading-5'>Your Email</label>
    
              <input
               onChange={(e)=>{
                setEmail(e.target.value)
              }}
              value={email}
               type="email"
               id='email'
               placeholder='enter your email'
               required
               autoComplete='email'
               className='outline-none mb-2 py-1 sm:py-0 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1 w-full'
              />
    
              <fieldset>
    
              <legend className="text-sm font-medium leading-5">Your City/State</legend>
              <div className="flex gap-2  sm:flex-row">
    
              <label className="flex-1">
    
              <span className="block text-xs text-gray-600">City</span>
    
              <input
               onChange={(e)=>{
                setCity(e.target.value)
              }}
              value={city}
              name="city"
              placeholder="City"
              required
              autoComplete="address-level2"
              className='w-full mb-1.5 py-1 sm:py-0 outline-none bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1'
             />
              </label>
    
    
              <label className="flex-1">
    
              <span className="block text-xs text-gray-600">State</span>
    
              <input
               onChange={(e)=>{
                setState(e.target.value)
              }}
              value={state}
               name="state"
               placeholder="State"
               required
               autoComplete="address-level1"
               className='w-full mb-1.5 py-1 sm:py-0 outline-none bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1'
              />
    
              </label>
    
              </div>
    
              </fieldset>
    
    
              <fieldset className="">
    
              <legend className="text-sm font-medium leading-5">Course/Stream Interested In</legend>
    
              <div className="flex gap-2 flex-col lg:flex-row  ">
              <label className="sr-only" htmlFor="ug">UG</label>
    
              <select
               onChange={(e)=>{
                setUGCourse(e.target.value)
              }}
              value={ugCourse}
              id="ug"
              name="ug"
              className="lg:w-28 py-1 sm:py-0 outline-none mb-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1">
    
              <option value="">UG</option>
              <option value="btech">B.Tech</option>
              <option value="bca">BCA</option>
              <option value="bva">BVA</option>
              <option value="ba">BA</option>
              <option value="bba">BBA</option>
              <option value="bcom">B.Com</option>
              <option value="bsc">B.Sc</option>
              <option value="bpharma">B.Pharma</option>
              <option value="dpharma">D.Pharma</option>
              <option value="bhm">BHM</option>
              <option value="bjmc">BJMC</option>
              <option value="ballb">BA-LLB</option>
              </select>
    
              <label className="sr-only" htmlFor="pg">PG</label>
    
              <select
               onChange={(e)=>{
                setPGCourse(e.target.value)
              }}
              value={pgCourse}
              id="pg"
              name="pg"
              className="lg:w-25 mb-2 py-1 sm:py-0 outline-none bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1">
    
              <option value="">PG</option>
              <option value="mtech">M.Tech</option>
              <option value="mca">MCA</option>
              <option value="ba">BA</option>
              <option value="mba">MBA</option>
              <option value="mcom">M.Com</option>
              <option value="msc">M.Sc</option>
              <option value="mpharma">M.Pharma</option>
              <option value="mjmc">MJMC</option>
              <option value="mhm">MHM</option>
              </select>
    
              <label className="sr-only" htmlFor="special">Specialized</label>
    
              <select
               onChange={(e)=>{
                setSpecializedCourse(e.target.value)
              }}
              value={specializedCourse}
              id="special"
              name="special"
              className="lg:w-29 mb-2 py-1 sm:py-0 outline-none bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1">
    
              <option value="">Specialized</option>
              <option value="design">Design</option>
              <option value="law">LAW</option>
              <option value="hotelmanagement">Hotel Management</option>
              </select>
    
              </div>
              </fieldset>
    
    
              <label htmlFor="score" className="text-sm font-medium leading-5">12th Board (Score)</label>
    
              <input
               onChange={(e)=>{
                setBoardResult(e.target.value)
              }}
              value={boardResult}
              type="text"
              id='score'
              placeholder='percent/gpa'
              required
              className='outline-none mb-1.5 py-1 sm:py-0 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1 w-full' />
    
    
              <label htmlFor="state" className="text-sm font-medium leading-5">Preferred Study State</label>
    
              <select
               onChange={(e)=>{
                setStudyState(e.target.value)
              }}
              value={studyState}
              name="state"
              id="state"
              required
              className='outline-none mb-1.5 py-1 sm:py-0 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1 w-full' >
    
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              </select>
    
    
              <label htmlFor="query" className="text-sm font-medium leading-5">Send Us Your Query</label>
    
              <textarea
               onChange={(e)=>{
                setQuery(e.target.value)
              }}
              value={query}
              id="query"
              className=' mb-1.5 py-1 sm:py-0 bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 px-1 w-full'>
              </textarea>
    
              <button type='submit'
              className='w-full rounded-md cursor-pointer active:scale-95 text-white font-medium bg-emerald-600 py-2 hover:bg-emerald-700 transition-colors ease-in duration-200'>Book Free Consultation</button>
    
              {/* Status message area */}
              {result && (
                <div className="fixed inset-0 bg-black/25  flex justify-center items-center z-50">
                  <div className="bg-white  p-6 sm:p-8 rounded-lg shadow-2xl text-center max-w-sm mx-4">
                    <p className="text-lg font-semibold mb-4">
                      {result}
                    </p>
                    {result !== 'Sending...' && (
                      <button
                        onClick={() => setResult('')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg active:scale-95"
                      >
                        Close
                      </button>
                    )}
                  </div>
                </div>
              )}
              </div>
            </form>  )
}

export default Form