interface Props {
  text: string;
  iconUrl: string;
  alt: string;
}

export const ContactItem = ({text, iconUrl, alt}: Props) => {
  return(
    <div className='flex items-start gap-6'>
      <img className='mt-1' src={iconUrl} alt={alt} />
      <p>{text}</p>
    </div>
  )
}