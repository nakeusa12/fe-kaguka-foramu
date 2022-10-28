import { Route, Routes } from 'react-router-dom';

import { PaymentsPage }  from '../pages/Payments';
import Create from '../pages/Payments/create';
import Edit from '../pages/Payments/edit';

export function PaymentsRoute() {
  return (
    <Routes>
      <Route path='/' element={<PaymentsPage />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:paymentId' element={<Edit />} />
    </Routes>
  );
}