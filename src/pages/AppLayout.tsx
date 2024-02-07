import { Outlet, useNavigation } from 'react-router-dom';
import { Loader } from '../components/ui/loader';
import { Header } from '../components/header';

export function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-auto">
        <main className="mx-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
