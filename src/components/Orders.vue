<template>
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
      style="max-width: 800px"
    >
      <q-item-section>{{ product.pdf_link }}</q-item-section>
      <q-item-section>{{ product.description }}</q-item-section>
      <q-item-section>{{ product.stock_code }}</q-item-section>
      <q-item-section>{{ product.package_type }}</q-item-section>
      <q-item-section>{{ product.price }}Kc</q-item-section>
      <q-input type="number" v-model="product.ordered" class="col"></q-input>
      <q-item-section avatar>
        <q-avatar color="teal" text-color="white" icon="bluetooth" />
      </q-item-section>
    </q-item>
  </q-list>
</template>
<script>
// import OrderLine from 'components/OrderLine.vue'

export default {
  name: 'Orders',
  components: {
    // OrderLine
  },
  data () {
    return {
      products: [
        {
          pdf_link: '101.pdf',
          description: 'jednanula jednicka',
          stock_code: '101',
          package_type: 'A5 100 listu',
          ordered: 0,
          price: 48
        },
        {
          pdf_link: '202.pdf',
          description: 'dvanula dvojka',
          stock_code: '202',
          package_type: 'A6 100 listu',
          ordered: 0,
          price: 148
        }
      ]
    }
  }
}
</script>
