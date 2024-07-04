import React from 'react';
import { Badge } from 'flowbite-react';
import { HiCheck, HiClock } from 'react-icons/hi';
import bell from '../../public/images/users/bell.png';
function NotificationBadge() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="gray">
        <img
          src="/images/users/bell.png"
          alt=""
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
        />
      </Badge>
    </div>
  );
}

export default NotificationBadge;
