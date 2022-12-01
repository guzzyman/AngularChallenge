import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { BooksComponent } from "./books/books.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', component: BooksComponent },
    { path: 'cart', pathMatch: 'full', component: CartComponent },
    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'register', pathMatch: 'full', component: RegisterComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }