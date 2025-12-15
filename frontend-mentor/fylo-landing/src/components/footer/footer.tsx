import { ContactItem } from "./contact-item"

interface ContactInformation {
  text: string;
  iconUrl: string;
  alt: string
}

const contactInformation: ContactInformation[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconUrl: '/images/icon-location.svg',
    alt: 'Location.'
  },
  {
    text: '+1-543-123-4567',
    iconUrl: '/images/icon-phone.svg',
    alt: 'Phone.'
  },
  {
    text: 'example@fylo.com',
    iconUrl: '/images/icon-email.svg',
    alt: 'Email.'
  },
]

export const Footer = () => {
  return(
    <footer className='pt-[260px] pb-[300px] px-6'>
      <img className='mb-10' src="/images/logo.svg" alt="Logo." />
      <div className='flex flex-col gap-4'>

      </div>
      {
        contactInformation.map((contact: ContactInformation) => (
          <ContactItem key={contact.alt} {...contact} />
        ))
      }
    </footer>
    )
}