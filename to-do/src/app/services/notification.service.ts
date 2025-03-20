import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  showNotification(message: string) {
    const notification = document.createElement('div');
    notification.innerText = message;
    notification.className = 'notification';
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}
