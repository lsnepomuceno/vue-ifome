<template>
  <q-toolbar>
    <q-toolbar-title>
      <div class="row">
        <div class="col text-center">
          <q-btn flat dense class="full-width no-hover">
            <div class="row">
              <div class="col-12">
                <q-icon name="home" />
              </div>
              <div class="col-12">Início</div>
            </div>
          </q-btn>
        </div>

        <div class="col text-center">
          <q-btn flat dense class="full-width no-hover">
            <div class="row">
              <div class="col-12">
                <q-icon name="search" />
              </div>
              <div class="col-12">Busca</div>
            </div>
          </q-btn>
        </div>

        <div class="col text-center">
          <q-btn flat dense class="full-width no-hover">
            <div class="row">
              <div class="col-12">
                <q-icon name="receipt_long" />
              </div>
              <div class="col-12">Pedidos</div>
            </div>
          </q-btn>
        </div>

        <div class="col text-center">
          <q-btn flat dense class="full-width no-hover">
            <div class="row">
              <div class="col-12">
                <q-icon name="person_outline" />
              </div>
              <div class="col-12">Perfil</div>
            </div>
          </q-btn>
        </div>
      </div>
    </q-toolbar-title>
  </q-toolbar>
</template>

<style>
.no-hover:hover > .q-focus-helper {
  background-color: transparent !important;
}
</style>
