import { createBrowserRouter } from 'react-router-dom';
import Main from '@/view/main';
import PhoneNumber from '@/components/phone-number';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'phone-number',
        element: <PhoneNumber />,
      },
    ],
  },
]);

export default router;
