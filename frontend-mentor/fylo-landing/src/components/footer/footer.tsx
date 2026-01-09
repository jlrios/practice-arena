import type { JSX } from 'react';

import { ContactItem } from "./contact-item";
import { FooterListItem } from "./footer-list-item";
import { FacebookIcon } from "./facebook-icon";
import { XIcon } from './x-icon';
import { InstagramIcon } from './instagram-icon';

interface ContactInformation {
  text: string;
  iconUrl: string;
  alt: string
}

interface Media {
  text: string,
  icon: JSX.Element,
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

const pages: string[] = [
  'About us',
  'Jobs',
  'Press',
  'Blog'
]

const conditions: string[] = [
  'Contact us',
  'Terms',
  'Privacy' 
]

const medias: Media[] = [
  {
    text: 'facebook',
    icon: <FacebookIcon />  
  },
  {
    text: 'x',
    icon: <XIcon/>
  },
  {
    text: 'instagram',
    icon: <InstagramIcon />
  }
]

export const Footer = () => {
  return(
    <footer className='pt-[260px] pb-[160px] px-6'>
      <img className='mb-10' src="/images/logo.svg" alt="Logo." />
      <div className='flex flex-col gap-4'>
        {
          contactInformation.map((contact: ContactInformation) => (
            <ContactItem key={contact.alt} {...contact} />
          ))
        }
      </div>
      <div className='flex flex-col gap-8 mt-16'>
        <ul>
          {
            pages.map((page: string) => (
              <FooterListItem key={page} text={page} />
            ))
          }
        </ul>
        <ul>
          {
            conditions.map((condition: string) => ( 
              <FooterListItem key={condition} text={condition} />
            ))
          }
        </ul>
      </div>
      <div className='flex justify-center gap-4'>
        {
          medias.map((media: Media) => (
            <div key={media.text} className='text-white hover:text-Teal-200 cursor-pointer border rounded-full size-[30px] p-0.5'>
            {media.icon}
            </div>
          )) 
        }
      </div>
    </footer>
  )
}