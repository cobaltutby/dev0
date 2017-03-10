import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';
import { AppModule }              from './app/app.module';


if (process.env.ENV === 'production') {
   enableProdMode();
   document.write('<title>Server App</title>')
 }
 else
 {
   document.write('<title>Local App</title>');
   var url = require("file-loader?emmitFile=true!./myfile.html")
   console.log(url);
 }

platformBrowserDynamic().bootstrapModule(AppModule);
    
