import {useState} from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'

const Feed = () => {
  const [ activeLink, setActiveLink] = useState("friends");

  const handleNavActive = (link) => {
    setActiveLink(link)
  }

  return (
    <>
      <Layout>
        <div className='mx-auto w-full max-w-[40rem]'>
          <header className='w-full max-w-[40rem] fixed top-0 flex items-center justify-between p-4 -bg--secondary-color -shadow--secondary-color'>
              <h1 className='text-xl -text--dark-green tracking-wider font-semibold' >Feed</h1>
              <ul className='flex items-center gap-4'>
                  <li><a href="#" className={`text-sm  ${activeLink === 'friends' ? '-text--muted-green': '-text--medium-green'}`} onClick={() => handleNavActive('friends')}>friends</a></li>
                  <li><a href="#" className={`text-sm  ${activeLink === 'popular' ? '-text--muted-green': '-text--medium-green'}`} onClick={() => handleNavActive('popular')}>popular</a></li>
                  <li><a href="#" className={`text-sm  ${activeLink === 'recents' ? '-text--muted-green': '-text--medium-green'}`} onClick={() => handleNavActive('recents')}>recents</a></li>
              </ul>
          </header>
          <div className='mt-16'>
            <Post />
            <Post image={'post-images/post.jpg'}/>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>

      </Layout>
    </>
  )
}

export default Feed