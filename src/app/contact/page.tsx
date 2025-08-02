import React from 'react';
import { Metadata } from 'next';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact & Book Appointment | London Eyecare Collective',
  description: 'Contact our expert team or book your eye examination online. Located on Harley Street, London. Premium eye care services with convenient booking.',
};

export default function ContactPage() {
  return <ContactForm />;
}