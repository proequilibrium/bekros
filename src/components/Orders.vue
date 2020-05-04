<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-list
        bordered
        separator
        padding
        class="rounded-borders text-primary col q-gutter-md"
        style="max-width: 600px">
        <q-item>Cena: {{ orderDetails.total }}</q-item>
        <q-item
          v-for="(orderedProduct, id) in orderDetails.productList"
          :key="id"
          @click="logString(orderedProduct)">
          <q-item-section class="row">
            <q-item-label>Kod produktu: {{ orderedProduct.code }} objednano: {{ orderedProduct.ordered }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list
        bordered
        separator
        padding
        class="rounded-borders"
        style="max-width: 600px"
      >
        <q-item
          v-for="(product, id) in products"
          :key="id"
          bordered
          padding
          class="rounded-borders"
          style="max-width: 1200px"
        >

          <q-item-section class="col-9">
            <q-item-label class="">{{ product.code }}</q-item-label>
            <div class="row justify-between">
              <q-item-label class="col-8">{{ product.desc }}</q-item-label>
              <q-item-label class="col-2">{{ product.pack }}</q-item-label>
              <q-item-label class="col-2">{{ intToCZK(product.price) }}</q-item-label>
            </div>
          </q-item-section>

          <q-item-section avatar class="col float-left q-gutter-md">
            <q-avatar color="teal" text-color="white" icon="picture_in_picture" />
          </q-item-section>
          <q-item-section class="col q-gutter-md">
            <q-input type="number" v-model="product.ordered" class="col"></q-input>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<script>
// import OrderLine from 'components/OrderLine.vue'
import tiskopisy from 'assets/tiskopisy.json'

export default {
  name: 'Orders',
  components: {
    // OrderLine
  },
  data () {
    return {
      products: tiskopisy
    }
  },
  methods: {
    logString (tolog) {
      console.log(tolog)
    },
    intToCZK (price) {
      return new Intl.NumberFormat('cs', {
        style: 'currency',
        currency: 'CZK',
        minimumFractionDigits: 2
      }).format(price)
    }
  },
  computed: {
    orderDetails () {
      let total = 0
      var productList = []
      let product = []
      for (product of this.products) {
        if (product.ordered && product.ordered > 0) {
          total += product.ordered * product.price
          const prodLine = {
            code: product.code,
            ordered: product.ordered
          }
          productList.push(prodLine)
        }
      }
      return {
        productList,
        total
      }
    }
  }
}
</script>
