import {Injectable} from '@angular/core';
import {Commission} from './commission.model';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout'

@Injectable()
export class CommissionService {
  private GET_TIMEOUT_IN_MILLISECONDS = 60 * 1000;
  private POST_TIMEOUT_IN_MILLISECONDS = 20 * 1000;
  private DELETE_TIMEOUT_IN_MILLISECONDS = 20 * 1000;

  private url = 'http://localhost:8080/v1/commissions/';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) { }

  add(newCommission: Commission): Promise<Commission> {
    return this.http.post(this.url, JSON.stringify(newCommission), {headers: this.headers})
      .timeout(this.POST_TIMEOUT_IN_MILLISECONDS)
      .toPromise()
      .then(response => {
        return response.json() as Commission
      }).catch(this.handleError);
  }

  getCommissions(): Promise<Commission[]> {
    return this.http.get(this.url)
      .timeout(this.GET_TIMEOUT_IN_MILLISECONDS)
      .toPromise()
      .then(response => {
        return response.json() as Commission[]
      }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  delete(commission: Commission): Promise<boolean> {
    return this.http.delete(this.url + commission.id)
      .timeout(this.DELETE_TIMEOUT_IN_MILLISECONDS)
      .toPromise()
      .then(response => true)
      .catch(reason => false);
  }
}
