import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='text-center head_text'>
        Explore and Post on
        <br className='max-md:hidden' />
        <span className=' blue_gradient text-center'> Deep Blogs </span>
      </h1>

      <Feed/>

    </section>
  )
}

export default Home