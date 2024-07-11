import React from 'react'

const topicsIdea = [
  {
    data : 'finance',
  },
  {
    data: 'Ai',
  },
  {
    data: 'Software',
  },
  {
    data : 'Robots',
  },
  {
    data: 'Quantum Computing',
  },
  {
    data: 'Software',
  },
  {
    data : 'Space',
  },
  {
    data: 'Electrical Vechile',
  },
  {
    data: 'Investing',
  },
  {
    data: 'Virtual Reality',
  },
  {
    data : 'Blockchain',
  },
  {
    data: 'Education',
  },
  {
    data: 'Web-3',
  },
]

export default function Topics({ props }) {

  return (
    <div className='flex justify-between flex-wrap flex-shrink-0 gap-4 mt-16 mb-10 mr-5'>

      {topicsIdea.map((data,id) => (
        <div className='box-for-opponent' key={id}  onClick={()=> { props(data.data)}}>
          <p className='font-bold text-sm cursor-pointer text-center' onClick={()=> { props(data.data)}}> {data.data}</p>
        </div>
      ))}

    </div>
  )
}
