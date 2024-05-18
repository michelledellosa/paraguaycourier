import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FCMService {

  private readonly firebaseApiUrl = 'https://fcm.googleapis.com/fcm/send';
  private readonly serverKey = 'AAAAiPGT-Wk:APA91bG4gHmSPWiSOKBoRfTFAZzS2PG5eN0tyiluI4qAV6cG20dQC0r8tPzqhlQpDf4IAZ6u8kCST95svrWB8jse-RRPqfHBUFuY8sE2qzUQVwzqMVAEn9OF7xMf6EYMRelH-jzc-DTy';

  constructor(private http: HttpClient) { }

  subscribeToTopic(topic: string, token: string) {
    const body = {
      to: `/topics/${topic}`,
      registration_tokens: [token]
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `key=${this.serverKey}`
    };

    return this.http.post(this.firebaseApiUrl, body, { headers });
  }
}