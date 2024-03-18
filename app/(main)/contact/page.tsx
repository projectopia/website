import Image from 'next/image';

import { contactPenguinsImage } from '@/public';
import { ContactForm } from '@/components/contact-form';
import SubscribeSection from '@/components/home/subscribe-section';

export default function Contact() {
  return (
    <>
      <section aria-label="contact-section" className="flex justify-center px-4">
        <div className="w-300 max-w-full bg-white rounded-3xl relative mt-40 drop-shadow p-10 xl:p-20 flex gap-5 xl:gap-10">
          <Image
            src={contactPenguinsImage}
            alt="Contact Penguins Image"
            className="absolute w-135 h-auto left-1/2 -translate-x-1/2 -top-[123px]"
          />
          <div className="flex-1">
            <div className="sticky top-20 space-y-5">
              <h1 className="text-4xl xl:text-5xl font-bold">Get in touch</h1>
              <p className="leading-[26px] text-gray">
                Our team is prepared to assist you with any inquiries, custom demos, technical support, or suggestions
                you may have.
              </p>
              <p className="leading-[26px] text-gray">
                Similar to our efficient project generation, we strive to promptly address your questions. Let&apos;s
                connect!
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <SubscribeSection />
    </>
  );
}
