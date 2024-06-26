import { ScrollToTop } from '@/components/ScrollToTop'
import { Footer } from '@/components/footer'
import { Whatsapp } from '@/components/whatsapp'
import { Outlet, useNavigation } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Header } from '../components/header'
import { Loader } from '../components/ui/loader'

export function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}


      <Header />

      <div className="overflow-auto">

        <main className="mx-auto ">
          <ScrollToTop />
          <Outlet />
        </main>
        <Footer />
        <Whatsapp />
        <Toaster richColors />
      </div>
    </div>
  )
}
