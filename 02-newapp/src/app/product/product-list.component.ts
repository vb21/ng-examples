import { Component, OnInit } from '@angular/core';

var PRODUCTS = [{"id":1,"name":"Tiffany Clock","price":99.0,"description":"Bacon ipsum dolor amet meatball biltong ground round alcatra short ribs chicken pancetta brisket. Leberkas meatball beef drumstick ribeye. Pork pancetta meatloaf brisket picanha sausage, pork belly venison. Andouille tongue pork belly, cow short ribs filet mignon t-bone chuck bacon hamburger corned beef spare ribs turkey turducken. Brisket tri-tip andouille ham hock venison, kevin ball tip picanha. Pork loin alcatra ball tip tail.\n\n\n                            Frankfurter sausage cow, porchetta pig strip steak alcatra pork sirloin doner hamburger cupim andouille beef ribs kevin. Ham hock beef ribs corned beef, turducken shank capicola alcatra prosciutto kevin ball tip strip steak andouille picanha biltong brisket. Shank pork chop capicola ribeye turkey, meatball ham prosciutto. Ribeye turkey bacon flank t-bone beef ribs ground round porchetta shankle short loin rump short ribs cow.","imageName":"clock.jpg"},{"id":2,"name":"Self-Driving Car","price":29000.0,"description":"Bacon ipsum dolor amet meatball biltong ground round alcatra short ribs chicken pancetta brisket. Leberkas meatball beef drumstick ribeye. Pork pancetta meatloaf brisket picanha sausage, pork belly venison. Andouille tongue pork belly, cow short ribs filet mignon t-bone chuck bacon hamburger corned beef spare ribs turkey turducken. Brisket tri-tip andouille ham hock venison, kevin ball tip picanha. Pork loin alcatra ball tip tail.\n\n\n                            Frankfurter sausage cow, porchetta pig strip steak alcatra pork sirloin doner hamburger cupim andouille beef ribs kevin. Ham hock beef ribs corned beef, turducken shank capicola alcatra prosciutto kevin ball tip strip steak andouille picanha biltong brisket. Shank pork chop capicola ribeye turkey, meatball ham prosciutto. Ribeye turkey bacon flank t-bone beef ribs ground round porchetta shankle short loin rump short ribs cow.","imageName":"car.jpg"},{"id":3,"name":"Big Gulp","price":19.0,"description":"Bacon ipsum dolor amet meatball biltong ground round alcatra short ribs chicken pancetta brisket. Leberkas meatball beef drumstick ribeye. Pork pancetta meatloaf brisket picanha sausage, pork belly venison. Andouille tongue pork belly, cow short ribs filet mignon t-bone chuck bacon hamburger corned beef spare ribs turkey turducken. Brisket tri-tip andouille ham hock venison, kevin ball tip picanha. Pork loin alcatra ball tip tail.\n\n\n                            Frankfurter sausage cow, porchetta pig strip steak alcatra pork sirloin doner hamburger cupim andouille beef ribs kevin. Ham hock beef ribs corned beef, turducken shank capicola alcatra prosciutto kevin ball tip strip steak andouille picanha biltong brisket. Shank pork chop capicola ribeye turkey, meatball ham prosciutto. Ribeye turkey bacon flank t-bone beef ribs ground round porchetta shankle short loin rump short ribs cow.","imageName":"wine.jpg"},{"id":4,"name":"Gift Certificate","price":2.0,"description":"Bacon ipsum dolor amet meatball biltong ground round alcatra short ribs chicken pancetta brisket. Leberkas meatball beef drumstick ribeye. Pork pancetta meatloaf brisket picanha sausage, pork belly venison. Andouille tongue pork belly, cow short ribs filet mignon t-bone chuck bacon hamburger corned beef spare ribs turkey turducken. Brisket tri-tip andouille ham hock venison, kevin ball tip picanha. Pork loin alcatra ball tip tail.\n\n\n                            Frankfurter sausage cow, porchetta pig strip steak alcatra pork sirloin doner hamburger cupim andouille beef ribs kevin. Ham hock beef ribs corned beef, turducken shank capicola alcatra prosciutto kevin ball tip strip steak andouille picanha biltong brisket. Shank pork chop capicola ribeye turkey, meatball ham prosciutto. Ribeye turkey bacon flank t-bone beef ribs ground round porchetta shankle short loin rump short ribs cow.","imageName":null}];

@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

   products: Array<any> = PRODUCTS;

   constructor() {}

   ngOnInit() { }

    addProduct(value) {
        this.products.push(value);
    }



}
