import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            
        }
    },
    mutations:,
    actions:{
        addCart(){
            const productInCartIndex = this.cart.items.findIndex(
                (ci) => ci.productId === productData.id
              );
        
              if (productInCartIndex >= 0) {
                this.cart.items[productInCartIndex].qty++;
              } else {
                const newItem = {
                  productId: productData.id,
                  title: productData.title,
                  image: productData.image,
                  price: productData.price,
                  qty: 1,
                };
                this.cart.items.push(newItem);
              }
              this.cart.qty++;
              this.cart.total += productData.price;
        }
    },
    getters,
})

export default store