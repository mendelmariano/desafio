import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public product: Product;

  constructor(private router: Router, private produtoService: ProductService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtoService.readById(id).subscribe(

      produto=>{
        this.product=produto
      }
      );
  }

  updateProduct():void {
    this.produtoService.update(this.product).subscribe(
      ()=>{
        this.produtoService.showMessage('Produto atualizado com sucesso!');
        this.router.navigate(['/products']);
      }
    )

  }



  cancel():void {
    this.router.navigate(['/products']);
   }

}
