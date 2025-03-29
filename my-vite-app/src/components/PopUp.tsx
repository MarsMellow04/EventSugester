import React from 'react'

const PopUp = ({ openPopUp, closePopUp }) => {

  const handlelosePopUp = (e) => {
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  if (openPopUp !== true) return null

  return (
    <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 bottom-0 flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
      <div 
        className='p-4 shadow-inner rounded-xl bg-gray-600'>
        <div
          className='w-full p-3 flex flex-col justify-center items-center bg-gray-600'>
          <h2
            className='font-semibold py-3 text-center text-xl'>
              Share Via
          </h2>
        </div>
        <div className='flex flex-row'> 
        <button className='basis-1/2 mr-2'>  
        <svg className="w-10 h-10 fill-current stroke-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6657 3.88789C15.3991 2.94272 14.5305 2.25 13.5 2.25H10.5C9.46954 2.25 8.60087 2.94272 8.33426 3.88789M15.6657 3.88789C15.7206 4.0825 15.75 4.28782 15.75 4.5V4.5C15.75 4.91421 15.4142 5.25 15 5.25H9C8.58579 5.25 8.25 4.91421 8.25 4.5V4.5C8.25 4.28782 8.27937 4.0825 8.33426 3.88789M15.6657 3.88789C16.3119 3.93668 16.9545 3.99828 17.5933 4.07241C18.6939 4.20014 19.5 5.149 19.5 6.25699V19.5C19.5 20.7426 18.4926 21.75 17.25 21.75H6.75C5.50736 21.75 4.5 20.7426 4.5 19.5V6.25699C4.5 5.149 5.30608 4.20014 6.40668 4.07241C7.04547 3.99828 7.68808 3.93668 8.33426 3.88789" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
            Copy to clipboard
        </button>
        <button className='basis-1/2 ml-2'> Create a QR code </button>
        </div>
      </div>
    </div>
  )
}

export default PopUp