import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

export interface CompanyConfig {
  companyName: string;
  companyLink: string;
  logoPath: string;
  logo: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  socialMedia: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    darkMode: boolean;
  };
  features: {
    enableChat: boolean;
    enableFeedback: boolean;
  };
}

@Injectable({
    providedIn: 'root'
  })
  export class CompanyConfigService {
    private config: CompanyConfig | null = null;
    private config$: Observable<CompanyConfig> | null = null;
  
    constructor(private http: HttpClient) {}
  
    getConfig(): Observable<CompanyConfig> {
      if (!this.config$) {
        this.config$ = this.http.get<CompanyConfig>('./assets/company-details.json').pipe(
          tap(config => this.config = config),
          shareReplay(1)
        );
      }
      return this.config$;
    }
  
    get currentConfig(): CompanyConfig | null {
      return this.config;
    }
  }
  
  export function initializeAppFactory(configService: CompanyConfigService): () => Promise<void> {
    return () => lastValueFrom(configService.getConfig()).then(() => {});
  }
  
  export const APP_CONFIG_PROVIDER: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    deps: [CompanyConfigService],
    multi: true
  };
  