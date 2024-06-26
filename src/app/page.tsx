import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <h1 className="text-3xl font-bold text-white md:text-5xl">PastPaperPro</h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <strong>ユーザー同士で解答を導き出す</strong>
          <div/>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/image.png"
            width={800}
            height={460}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <Image
            src="/image.png"
            width={260}
            height={320}
            className='block md:hidden'
            alt='Screenshots of the dashboard project showing mobile version'
          />
        </div>
        <Link
            href="/auth/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> 
          </Link>
      </div>
        </div>
    </main>
  );
}