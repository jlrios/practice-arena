interface Props {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const TestimonialCard = ({name, image, quote, role}: Props) => {
  return (
    <div className='bg-Navy-850 rounded-sm p-6 w-[280px]'>
      <blockquote className='text-[12px] mb-4'>{quote}</blockquote>
      <div className='flex gap-2 items-center'>
        <img className='size-6 rounded-full' src={image} alt={name} />
        <div>
          <h3 className='font-bold text-[12px]'>{name}</h3>
          <p className='text-[10px]'>{role}</p>
        </div>
      </div>
    </div>
  )
}