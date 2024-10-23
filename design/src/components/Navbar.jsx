import {useState} from 'react'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('feed')
    const handleActiveNav = (link) => setNavActive(link)

    return (
        <div className='fixed w-full max-w-[20rem] h-full -bg--primary-color px-8 py-4'>
            <div className="">
                <h1 className='text-xl -text--dark-green tracking-wider font-semibold'>BongoHealth</h1>
                <div className="flex items-center gap-5 my-8">
                    <img className='w-24 h-24 rounded-full' src="people-images/person1.jpg" alt="" />
                    <div>
                        <h4 className='font-semibold text-md'>Abdul Weah</h4>
                        <p>@<span className="underline -text--dark-green" >abdoweah</span></p>
                    </div>
                </div>
            </div>
            <ul className="flex flex-col">
                <li className={`nav-item ${activeNav === 'feed' ? '-bg--dark-green' : null}`} onClick={() => setActiveNav('feed')}>
                    <img className='nav-icon' src="icons/explore.png"/>
                    <p>Feed</p>
                </li>
                <li className={`nav-item ${activeNav === 'articles' ? '-bg--dark-green' : null}`} onClick={() => setActiveNav('articles')}>
                    <img src="icons/article.png" className='nav-icon'/>
                    <p>Articles</p>
                </li>
                <li className={`nav-item ${activeNav === 'chat' ? '-bg--dark-green' : null} `} onClick={() => setActiveNav('chat')}>
                    <img src="icons/chat.png" className='nav-icon'/>
                    <p>Chat</p>
                </li>
                <li className={`nav-item ${activeNav === 'friends' ? '-bg--dark-green' : null}`} onClick={() => setActiveNav('friends')}>
                    <img src="icons/friends.png" className='nav-icon'/>
                    <p>Friends</p>
                </li>
                <li className={`nav-item ${activeNav === 'media' ? '-bg--dark-green' : null}`} onClick={() => setActiveNav('media')}>
                    <img src="icons/media.png" className='nav-icon'/>
                    <p>Media</p>
                </li>
                <li className={`nav-item ${activeNav === 'settings' ? '-bg--dark-green' : null}`} onClick={() => setActiveNav('settings')}>
                    <img src="settings.png" className='nav-icon'/>
                    <p>Settings</p>
                </li>
            </ul>
        </div>
    )
}

export default Navbar