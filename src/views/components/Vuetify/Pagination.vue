<template>
  <div id="page-pagination">
    <v-container
      grid-list-xl
      container--fluid
    >
      <v-layout
        row
        wrap
      >
        <v-flex lg12>
          <app-widget title="Default">
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-pagination
                v-model="page"
                :length="6"
              />
            </div>
          </app-widget>
          <app-widget
            title="Visiable Limit"
            class="mt-3"
          >
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-pagination
                v-model="page"
                :length="15"
                :total-visible="7"
              />
            </div>
          </app-widget>
          <app-widget
            title="Short"
            class="mt-3"
          >
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-pagination
                v-model="page"
                :length="5"
              />
            </div>
          </app-widget>
          <app-widget
            title="Round"
            class="mt-3"
          >
            <div
              slot="widget-content"
              class="text-center"
            >
              <v-pagination
                v-model="page"
                :length="5"
                circle
              />
            </div>
          </app-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AppWidget from '@/views/layout/components/AppWidget.vue';


export default {
  name: 'Pagination',
  components: {
    AppWidget,
  },
  data: () => ({
    page: 1,
  }),
};
</script>
