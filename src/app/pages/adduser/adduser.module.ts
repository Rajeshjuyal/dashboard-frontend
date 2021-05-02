import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AdduserRoutingModule } from './adduser-routing.module';
import { AdduserComponent } from './adduser.component';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
    imports: [
        CommonModule,
        AdduserRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        ChartistModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
    ],
    exports: [],
    declarations: [
        AdduserComponent,

    ],
    providers: [],
})
export class AdduserModule { }
