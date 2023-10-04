import Image from 'next/image'
import Link from 'next/link'
import CompanyIcon from '../../../public/icon.svg'

export default function NavTitle() {
  return (
    <section>
      <Link href="/" className='flex flex-row items-center gap-[3px]'>
        <CompanyIcon className='h-[50px] md:h-[60px] xl:h-[69px]'/>
        <h1 className='font-bold leading-[17px] tracking-tighter md:text-lg md:leading-[20px] xl:text-2xl xl:leading-[26px]'>Upstate<br/>Digital<br/>Design</h1>
      </Link>
    </section>
  )
}