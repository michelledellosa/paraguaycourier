import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://paraguaycourier.com/eappnew/eappnew.php';

  constructor(private http: HttpClient) {}

  loginService(email: string, pass: string) {
    let token;
    if (localStorage.getItem('tokenFCM')) {
      token = localStorage.getItem('tokenFCM');
     // console.log('el token es = ', token);
    } else {
      token = '';
    }
    const data = {
      a: 'loginv2',
      usuario: email,
      password: pass,
      fcmtoken: token,
    };

    // Define las cabeceras que deseas enviar
    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    // Convierte los datos a formato x-www-form-urlencoded
    const body = this.convertirAFormUrlEncoded(data);
    
    // Realiza la solicitud POST
    return this.http.post(
      this.apiUrl, //'https://paraguaycourier.com/eappnew/eappnew.php',
      body,
      { headers: header }
    );
  }

  forgotService(email: string) {
    // Define los datos que deseas enviar
    const data = {
      a: 'forgot',
      email: email,
    };

    // Define las cabeceras que deseas enviar
    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    // Convierte los datos a formato x-www-form-urlencoded
    const body = this.convertirAFormUrlEncoded(data);

    // Realiza la solicitud POST
    return this.http.post(
      this.apiUrl, //'https://paraguaycourier.com/eappnew/eappnew.php',
      body,
      { headers: header }
    );
  }

  forgotServiceV2(email: string) {
    const data = {
      a: 'forgotv2',
      email: email,
    };

    // Define las cabeceras que deseas enviar
    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'insomnia/8.5.1',
    });

    // Convierte los datos a formato x-www-form-urlencoded
    const body = this.convertirAFormUrlEncoded(data);

    // Realiza la solicitud POST
    return this.http.post(
      this.apiUrl, //'https://paraguaycourier.com/eappnew/eappnew.php',

      body,
      { headers: header }
    );
  }

  registerService(
    data: string,
    data2: string,
    data3: string,
    data4: string,
    data5: string,
    data6: string,
    data7: string,
    data8: string,
    sucursal: string,
    token: string
  ) {
    // Define los datos que deseas enviar
    const params = {
      a: 'registerv2',
      data: data,
      data2: data2,
      data3: data3,
      data4: data4,
      data5: data5,
      data6: data6,
      data7: data7,
      data8: data8,
      sucursal: sucursal,
      token: token.replace(/^"(.*)"$/, '$1'),
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    // Convierte los datos a formato x-www-form-urlencoded
    const body = this.convertirAFormUrlEncoded(params);

    return this.http.post(
      this.apiUrl, //'https://paraguaycourier.com/eappnew/eappnew.php',
      body,
      { headers: header }
    );
  }

  registerServiceV2(
    name: string,
    lastname: string,
    nro_document: string,
    birthdate: string,
    email: string,
    password: string,
    direction: string,
    prefix: string,
    cell_phone: string,
    business_name: string,
    ruc: string,
    branch: string,
    country: string,
    department: string,
    city: string,
    recommended: string,
    token: string
  ) {
    // Define los datos que deseas enviar
    const params = {
      a: 'registerv2',
      nombre: name,
      apellido: lastname,
      nro_documento: nro_document,
      fecha_nacimiento: birthdate,
      email: email,
      password: password,
      direccion: direction,
      prefijo: prefix,
      celular: cell_phone,
      razon_social: business_name,
      ruc: ruc,
      retirar_de: branch,
      pais: country,
      ciudad: city,
      departamento: department,
     
      recomendado: recommended,
      token: token.replace(/^"(.*)"$/, '$1'),
    };

    console.log(params, 'params')

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    // Convierte los datos a formato x-www-form-urlencoded
    const body = this.convertirAFormUrlEncoded(params);

    return this.http.post(
      'https://paraguaycourier.com/eappnew/eappnew.php',//this.apiUrl, //'https://paraguaycourier.com/eappnew/eappnew.php',
      body,
      { headers: header }
    );
  }

  
  
  async branchOffices() {
    const data = {
      a: 'sucursales',
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = this.convertirAFormUrlEncoded(data);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, body, { headers: header }).subscribe(
        (resp: any) => {
          const branches = resp.data; 
          resolve(branches);
        },
        (error) => {
          console.error('Error al realizar la solicitud:', error);
          reject(error);
        }
      );
    });
  }

  async getPrefix() {
    const data = {
      a: 'prefijos',
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = this.convertirAFormUrlEncoded(data);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, body, { headers: header }).subscribe(
        (resp: any) => {
          const prefix = Object.keys(resp.data);
          resolve(prefix);
        },
        (error) => {
          console.error('Error al realizar la solicitud:', error);
          reject(error);
        }
      );
    });
  }

  async getRecomendedBy() {
    const data = {
      a: 'recomendado_por',
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = this.convertirAFormUrlEncoded(data);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, body, { headers: header }).subscribe(
        (resp: any) => {
          const recomendedBy = resp.data;
          resolve(recomendedBy);
        },
        (error) => {
          console.error('Error al realizar la solicitud:', error);
          reject(error);
        }
      );
    });
  }
  /*
  async getCountries(): Promise<any> {
    const data = {
      a: 'pais_dep_ciudad',
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = this.convertirAFormUrlEncoded(data);

    try {
      const resp = await this.http
        .post(this.apiUrl, body, { headers: header })
        .toPromise();
      return resp;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      return null;
    }
  }*/

  async getCountries(): Promise<any> {
    const data = {
      a: 'pais_dep_ciudad',
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = this.convertirAFormUrlEncoded(data);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, body, { headers: header }).subscribe(
        (resp: any) => {
          const countries = Object.keys(resp.data);
          resolve(countries);
        },
        (error) => {
          console.error('Error al realizar la solicitud:', error);
          reject(error);
        }
      );
    });
  }

  async getDepartments(countryName: string): Promise<any> {
    const data = {
      a: 'pais_dep_ciudad',
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = this.convertirAFormUrlEncoded(data);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, body, { headers: header }).subscribe(
        (resp: any) => {
          let departments;
          let departmentByCountry = resp.data[countryName];
          if (departmentByCountry != null) {
            departments = Object.keys(departmentByCountry);
          }

          resolve(departments);
        },
        (error) => {
          console.error('Error al realizar la solicitud:', error);
          reject(error);
        }
      );
    });
  }

  async getCities(countryName: string, department: string): Promise<any> {
    const data = {
      a: 'pais_dep_ciudad',
    };

    const header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = this.convertirAFormUrlEncoded(data);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, body, { headers: header }).subscribe(
        (resp: any) => {
          let departmentByCountry = resp.data[countryName];

          // Verificar si el país existe en los datos recibidos
          if (!departmentByCountry) {
            reject(`El país '${countryName}' no fue encontrado.`);
            return;
          }

          let cities = departmentByCountry[department];

          // Verificar si el departamento existe en los datos del país
          if (!cities) {
            reject(
              `El departamento '${department}' no fue encontrado en '${countryName}'.`
            );
            return;
          }

          resolve(cities);
        },
        (error) => {
          console.error('Error al realizar la solicitud:', error);
          reject(error);
        }
      );
    });
  }

  private convertirAFormUrlEncoded(data: any): string {
    let params = new HttpParams();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        params = params.append(key, data[key]);
      }
    }
    return params.toString();
  }

  
  registrarUsuario(datos: any) {


    
    const url = 'https://paraguaycourier.com/eappnew/eappnew.php';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = this.encodeFormData(datos);

    return this.http.post(url, body, { headers });
  }

  private encodeFormData(data: any) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }
 
}
