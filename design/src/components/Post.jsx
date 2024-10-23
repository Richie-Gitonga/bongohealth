import {useState} from 'react'

const Post = ({ image }) => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const handleDisplayMenu = () => setDisplayMenu(!displayMenu)

  return (
    <div className='px-5 py-2.5 -bg--light-green rounded-lg mx-auto my-4 shadow-sm'>
      <div className="mb-2">
        <div className="relative flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img className='w-12 h-12 rounded-full' src="people-images/person1.jpg" alt="" />
              <div>
                <h4 className='font-semibold text-md'>Abdul Weah</h4>
                <p>@<span className="underline -text--dark-green" >abdoweah</span></p>
              </div>
          </div>
          <img className='w-8 h-8 cursor-pointer' src="icons/menu.png" alt="" onClick={() => handleDisplayMenu()}/>
          {
            displayMenu && <ul className={`w-25 h-25 absolute right-10 shadow-sm -shadow--medium-green z-10 -bg--secondary-color`}>
            <li className='p-2 text-xs -text--muted-green border-b-[1px] -border-b--medium-green cursor-pointer hover:-text--dark-green hover:font-medium hover:text-sm delay-75 transition-all'>Bookmark</li>
            <li className='p-2 text-xs -text--muted-green border-b-[1px] -border-b--medium-green cursor-pointer hover:-text--dark-green hover:font-medium hover:text-sm delay-75 transition-all'>Remove</li>
          </ul>
          }
          
        </div>
      </div>
      <div className="body">
        <p className='text-sm text-regular my-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        { image ? <img className='w-full max-h-[20rem] rounded-lg' src={image} alt="post-image" />: null}
      </div> 
      <ul className="flex items-center gap-5 my-4">
        <li className='flex items-center gap-2'>
          <img className='w-6 h-6' src="icons/view.png" alt="" />
          <p className='text-xs -text--muted-green hover:underline cursor-pointer font-semibold'>212</p>
        </li>
        <li className='flex items-center gap-2'>
          <img className='w-4 h-4' src="icons/heart.png" alt="" />
          <p className='text-xs -text--muted-green hover:underline cursor-pointer font-semibold'>like</p>
        </li>
        <li className='flex items-center gap-2'>
          <img className='w-4 h-4' src="icons/comment.png" alt="" />
          <p className='text-sm -text--muted-green hover:underline cursor-pointer font-semibold'>comment</p>
        </li>
      </ul>
    </div>
  )
}

export default Post