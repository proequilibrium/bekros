<template>
  <q-item ref="id" bordered padding class="rounded-borders" style="max-width: 600px">
    <q-item-section>Product {{ product.pdf_link }}</q-item-section>
    <q-item-section>des {{ product.description }}</q-item-section>
    <q-item-section>stock {{ product.stock_code }}</q-item-section>
    <q-item-section>package {{ product.package_type }}</q-item-section>
    <q-input type="number" v-model="product.ordered" class=col></q-input>
    <q-item-section>{{ product.price }}Kc</q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ['product', 'id'],
  name: 'OrderLine',
  data () {
    return {}
  }
}
</script>
