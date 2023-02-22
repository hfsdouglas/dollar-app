<template>
  <h1>Comprar Dólar</h1>
  <div class="container">
    <div class="app-container">
      <h2>Consultar Valores</h2>
      <div class="input-values">
        <span class="p-float-label money-inputs">
          <primevue-inputtext id="input-dolar" type="text" v-model="real" />
          <label for="input-dolar">Real</label>
        </span>
        <span class="p-float-label money-inputs">
          <primevue-inputtext id="input-dolar" type="text" v-model="dollar" />
          <label for="input-dolar">Dólar</label>
        </span>
      </div>
      <div class="action-buttons">
        <primevue-button label="Consultar" @click="calc" :disabled="!real || !dollar"/>
        <primevue-button label="Limpar" @click="clear"/>
      </div>
    </div>
    <div class="response-container" v-if="conversion">
      <h2>Resultado</h2>
      <div v-html="response"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      dollar: null,
      real: null, 
      conversion: null, 
      response: ''
    }
  }, 
  methods: {
    clear: function() {
      this.dollar = null;
      this.real = null;
      this.conversion = null;
      this.response = ''
    }, 
    calc: function() {
      this.conversion = (this.real / this.dollar).toFixed(2);
      this.response = `<p>Com <strong>R$${this.real} reais</strong> é possível comprar <strong>$${this.conversion} dólares</strong> à <strong>$${this.dollar}</strong> cada.</p>`;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1 {
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
}

h2 {
  margin: 0;
  text-align: center;
}

.app-container, 
.response-container {
  border: 2px solid #2c3e50;
  border-radius: 15px;
  padding: 40px;
  width: 320px
}

.input-values {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.money-inputs,
.action-buttons {
  margin-top: 2rem;
}

.action-buttons {
  display: flex;
  justify-content: space-around;
}

.action-buttons > button {
  width: 100px;
}

p {
  text-align: center;
}

</style>
