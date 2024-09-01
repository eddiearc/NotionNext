import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

/**
 * 页脚
 * @param {*} props
 * @returns
 */
export default function Footer (props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
  const { isDarkMode } = useGlobal()
  return <footer className="relative w-full px-6 border-t" style={{
    color: isDarkMode ? 'white' : 'black',
  }}>
        <DarkModeButton className='text-center pt-4'/>
        <div className="text-black-300 container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-center items-center text-sm">
            &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights reserved.
        </div>
    </footer>
}
