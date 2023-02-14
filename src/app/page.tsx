import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1'>
      <div className='flex-1 overflow-hidden'>

      </div>
      <div className='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient'>
        <form action="" className='stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6'>

        </form>

        <div className='px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6'>
          <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" className="underline">ChatGPT Feb 13 Version</a>
          . Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.
        </div>
      </div>
    </main>
  )
}
