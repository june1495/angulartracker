import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { SelectedComponent } from './components/selected/selected.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    SelectedComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
