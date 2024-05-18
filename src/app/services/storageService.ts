import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private storage: Storage) {
  
   }

  async saveCredentials(email: string, password: string) {
    try {
      await this.storage.set('credentials', { email, password });
    } catch (error) {
      console.error('Error saving credentials to storage', error);
    }
  }

  async getCredentials() {
    try {
      return await this.storage.get('credentials');
    } catch (error) {
      console.error('Error getting credentials from storage', error);
      return null;
    }
  }

  async clearCredentials() {
    try {
      await this.storage.remove('credentials');
    } catch (error) {
      console.error('Error clearing credentials from storage', error);
    }
  }
}
