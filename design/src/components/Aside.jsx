import React from 'react'

const Aside = () => {
  
  return (
    <div className='fixed top-0 right-0 w-full max-w-[20rem] h-full p-5'>
      <section className=''>
        <h1 className='text-xl -text--dark-green tracking-wider mb-4 font-semibold'>Top Articles</h1>
        <div className='flex items-center gap-4 w-full overflow-hidden'>
          <div className='px-1 py-4 text-wrap w-[12rem] h-[15rem] relative rounded-md' style={{background: "url('article-images/article.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='z-10 absolute bottom-1 ml-2 mb-2 '>
              <button className='-bg--medium-green rounded-md px-4 py-2 mb-2 hover:-bg--dark-green -text--light-green'>Read</button>
              <h3 className='text-sm -text--light-green font-semibold'>Impact of informal employment on individuals mental health</h3>
              <p className='text-xs -text--light-green my-2'> Trending <span className='bg-white mx-2 w-4 h-4 rounded-3xl'></span> 5hrs ago</p>
            </div>
          </div>
          <div className='px-1 py-4 text-wrap w-[12rem] h-[15rem] relative rounded-md' style={{background: "url('article-images/article.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='z-10 absolute bottom-1 ml-2 mb-2 '>
              <button className='-bg--medium-green rounded-md px-4 py-2 mb-2 hover:-bg--dark-green -text--light-green'>Read</button>
              <h3 className='text-sm -text--light-green font-semibold'>Impact of informal employment on individuals mental health</h3>
              <p className='text-xs -text--light-green my-2'> Trending <span className='bg-white mx-2 w-4 h-4 rounded-3xl'></span> 5hrs ago</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-4'>
        <h1 className='text-xl -text--dark-green tracking-wider mb-4 font-semibold'>Suggestions</h1>
        <div className='flex flex-col gap-1 justify-start'>
          <div className='flex items-center justify-between px-4 py-2 rounded-sm -shadow--medium-green shadow-sm'>
            <div className='flex items-center w-1/3 gap-2'>
              <img className='w-10 h-10 rounded-[50%]' src="people-images/person2.jpg" alt="" />
              <p className='font-medium text-xs text-wrap'>James Cornel</p>
            </div>
            <button className='-text--medium-green text-xs border -border--medium-green rounded-md px-2 py-1 mb-2 hover:-bg--dark-green'>Follow</button>
          </div>
          <div className='flex items-center justify-between px-4 py-2 rounded-sm -shadow--medium-green shadow-sm' >
            <div className='flex items-center w-1/3 gap-2'>
              <img className='w-10 h-10 rounded-[50%]' src="people-images/person2.jpg" alt="" />
              <p className='font-medium text-xs text-wrap'>James Cornel</p>
            </div>
            <button className='-text--medium-green text-xs border -border--medium-green rounded-md px-2 py-1 mb-2 hover:-bg--dark-green'>Follow</button>
          </div>
          <div className='flex items-center justify-between px-4 py-2 rounded-sm -shadow--medium-green shadow-sm'>
            <div className='flex items-center w-1/3 gap-2'>
              <img className='w-10 h-10 rounded-[50%]' src="people-images/person2.jpg" alt="" />
              <p className='font-medium text-xs text-wrap'>James Cornel</p>
            </div>
            <button className='-text--medium-green text-xs border -border--medium-green rounded-md px-2 py-1 mb-2 hover:-bg--dark-green' >Follow</button>
          </div>
        </div>
        
        <a className='text-center underline text-xs -text--medium-green hover:text-dark-green hover:text-sm transition-all delay-200' href="#">see more..</a>

      </section>
    </div>
  )
}

export default Aside;