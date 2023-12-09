import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import { FcHighPriority, FcDeleteDatabase } from 'react-icons/fc';

export default function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="flex items-center mb-4 space-x-2">
        {alert.type === 'error' ? <FcHighPriority /> : <FcDeleteDatabase />}
        <p className="flex-1 text-base font-semibold leading-7 text-black">
          <strong>{alert.data}</strong>
        </p>
      </p>
    )
  );
}
