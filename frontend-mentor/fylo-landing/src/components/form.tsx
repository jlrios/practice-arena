import { Button } from './button'

export const Form = () => {
  return (
    <div className='absolute top-[-200px] left-0 right-0 text-center py-10 px-6 bg-Navy-850 rounded-[9px] w-[336px] mx-auto'>
      <h2 className='font-bold mb-4 text-[20px]'>Get early access today</h2>
      <p className='text-sm mb-8'>
        It ony takes a minute to sign up and our free starter tier is extremely generous.
        If you have
      </p>
      <form className='flex flex-col gap-6' action="">
        <input className='bg-white rounded-3xl placeholder:text-gray-400 text-center h-12' type="email" placeholder="email@example.com" />
        <Button text='Get Started For Free' />
      </form>
    </div>
  )
}