export default function() {
  // this.get('/products', function(schema, request){
  //   return schema.products.all();
  // })
  this.get('/products');
  this.post('/products');
  this.get('/products/:id');
  this.put('/products/:id'); // or this.patch
  this.del('/products/:id');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/products');
    this.post('/products');
    this.get('/products/:id');
    this.put('/products/:id'); // or this.patch
    this.del('/products/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
