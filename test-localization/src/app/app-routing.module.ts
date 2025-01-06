import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: 'Home' }
  },
  {
    path: 'test',
    component: TestComponent,
    data: { title: 'Test' },

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Enable hash routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
