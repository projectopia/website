import Link from 'next/link';

import { GeneratorForm } from '@/components/generator-form';

export default function GeneratorPage() {
  return (
    <section aria-label="form-generator-section" className="mt-20 flex justify-center px-4">
      <div className="w-300 max-w-full bg-white rounded-3xl drop-shadow p-10 xl:p-20 flex gap-5 xl:gap-10">
        <div className="flex-1">
          <div className="sticky top-20 space-y-5">
            <h1 className="text-4xl xl:text-5xl font-bold">Generate Repository</h1>
            <p className="leading-[26px]">
              Complete this form to create your project inside your Github Repository using Projectopia&apos;s template.
              Once finished, you will receive a confirmation email from us.
            </p>
            <p className="leading-[26px]">
              You can also contribute to projectopia’s template collection by checking out this{' '}
              <Link className="text-purple font-bold" href={''}>
                link.
              </Link>
            </p>
          </div>
        </div>
        <GeneratorForm />
      </div>
    </section>
  );
}
