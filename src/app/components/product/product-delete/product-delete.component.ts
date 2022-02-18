import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  public product:Product;

  constructor(private router: Router,
              private produtoService: ProductService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.produtoService.readById(id).subscribe(

      produto=>{
        console.log("teste ",this.product);
        this.product=produto
      }
      );
  }



  deleteProduct():void {
    if(confirm("Deseja excluir este produto?")){
    this.produtoService.delete(this.product.id).subscribe(
      ()=>{
        this.produtoService.showMessage('Produto deletado com sucesso!');
        this.router.navigate(['/products']);
      }
    )
    }else{
      return
    }

  }



  cancel():void {
    this.router.navigate(['/products']);
   }

}
