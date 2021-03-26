import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
	FooterComponent,
	FruitproductsComponent,
	FruitbannerComponent,
	CompanyComponent,
	// FruitbannerboxComponent,
	FruitcestaComponent,
	FruitfooterComponent,
	FruittopbarComponent,
	TopbarComponent,
	FruitcartComponent,
	PagoComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'footer',component:FooterComponent},
	{path:'company',component:CompanyComponent},
	{path:'fruittopbar',component:FruittopbarComponent},
	{path:'fruitproducts',component:FruitproductsComponent},
	{path:'fruitbanner',component:FruitbannerComponent},
	// {path:'fruitbannerbox',component:FruitbannerboxComponent},
	{path:'fruitcesta',component:FruitcestaComponent},
	{path:'fruitfooter',component:FruitfooterComponent},
	{path:'fruitcart',component:FruitcartComponent},
	{path:'pago',component:PagoComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

