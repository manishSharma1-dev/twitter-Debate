import React from 'react'

const topicsIdea = [
  {
    data: 'Ai',
  },
  {
    data : 'Giving robots conciousness',
  },
  {
    data: 'Software',
  },
  {
    data : 'Robots',
  },
  {
    data: 'Quantum-Computing',
  },
  {
    data: 'Robots-workers',
  },
  {
    data : 'Exploring-other-dimension',
  },
  {
    data: 'Electrical-Vechile',
  },
  {
    data: 'Web-3',
  },
  {
    data: 'Virtual-Reality',
  },
  {
    data : 'Blockchain',
  },
  {
    data : 'bio-Weapon',
  },
  {
    data : 'LLM',
  },
  {
    data : 'Deepseek vs qwen',
  },
  {
    data : 'chatgpt',
  },
  {
    data : 'Agi',
  },
  {
    data : 'Nuclear power plant',
  }
]

export default function Topics({ props }) {

  return (
    <div className='flex justify-between flex-wrap flex-shrink-0 gap-y-5 gap-x-3 pt-5 md:px-16 xs:px-8'>

      {topicsIdea.map((data,id) => (
        <div className={`text-white px-2 py-1 rounded-md bg-black`} key={id}  onClick={()=> {props(data.data)}}>
          <p className='text-xs cursor-pointer text-center' onClick={()=> { props(data.data)}}> {data.data}</p>
        </div>
      ))}

    </div>
  )
}
