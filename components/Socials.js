// linkd
import Link from 'next/link'

// icons
import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiTelegramLine, 
  RiWechatLine,
} from 'react-icons/ri'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.youtube.com/@Chin-Seila'} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
    </Link>
    <Link href={'https://www.instagram.com/mister._.seila/'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/chin.seila.5'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiTelegramLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiWechatLine />
    </Link>
  </div>;
};

export default Socials;
