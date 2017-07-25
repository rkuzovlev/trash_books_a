import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs';
import * as urlJoin from 'url-join';

@Injectable()
export class ApiService {
	private apiUrl: string = '/api/';
	private token: string = null;

	constructor(
		private http: Http
	) { }

	private addToken(options?: RequestOptionsArgs): RequestOptions{
		var newOptions: RequestOptions;

		if (options){
			newOptions = new RequestOptions(options);
		} else {
			newOptions = new RequestOptions();
		}

		if (!newOptions.headers){
			newOptions.headers = new Headers();
		}

		if (this.token && this.token.length > 0){
			newOptions.headers.set("x-token", this.token);
		}

		return newOptions;
	}

	private _catchError(err: any){
        if (err instanceof Response) {
			return Observable.throw(err.json().body || 'backend server error');
        }

        return Observable.throw('backend server error');
	}

	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		var newOptions = this.addToken(options);
		return this.http.get(urlJoin(this.apiUrl, url), newOptions).catch(this._catchError);
	}

	post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		var newOptions = this.addToken(options);
		return this.http.post(urlJoin(this.apiUrl, url), body, newOptions).catch(this._catchError);
	}

	put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		var newOptions = this.addToken(options);
		return this.http.put(urlJoin(this.apiUrl, url), body, newOptions).catch(this._catchError);
	}
}
