<template>
    <div class="container">
        <vuetable ref="vuetable"
                  :http-fetch="getData"
                  :fields="fields"
                  :sort-order="sortOrder"
                  :query-params="makeQueryParams"
                  data-path="data"
                  :per-page="perPage"
                  :transform="transformData"
                  @vuetable:pagination-data="onPaginationData"
        ></vuetable>

        <div class="pagination ui basic segment grid">
            <vuetable-pagination-info ref="paginationInfo"
                                      info-template="Exibindo {from} a {to} do total de {total} itens"
                                      no-data-template=""
            ></vuetable-pagination-info>

            <vuetable-pagination ref="pagination"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </div>
</template>
<script>
  import Vuetable from "vuetable-2/src/components/Vuetable";
  import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
  import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";

  export default {
    name: "StateTable",
    components: {
      Vuetable,
      VuetablePagination,
      VuetablePaginationInfo
    },
    data() {
      return {
        fields: [
          {
            name: "nome",
            title: '<i class="grey address card outline icon"></i>Nome',
            width: "20%",
            sortField: "nome"
          },
          {
            name: "abreviacao",
            title: '<i class="grey address book outline icon"></i>Abreviação',
            width: "20%",
          },
          {
            name: "datacriacao",
            title: '<i class="grey clock outline icon"></i>Data de Criação',
            width: "20%",
          },
          {
            name: "dataalteracao",
            title: '<i class="grey clock outline icon"></i>Data de Atualização',
            width: "20%",
          },
        ],
        sortOrder: [
          {
            field: "Name",
            direction: "asc"
          }
        ],
        perPage: 10,
        apiKey: process.env.VUE_APP_X_API_KEY,
        apiUrl: process.env.VUE_APP_API_URL,
      };
    },
    methods: {
      getData (apiUrl) {
        this.$http.defaults.baseURL = this.apiUrl + '/v1/estados';
        this.$http.defaults.headers.common['X-Api-Key'] = this.apiKey;
        return this.$http.get(apiUrl)
      },
      makeQueryParams (sortOrder, currentPage, perPage) {
        return {
          sort: sortOrder[0].field,
          order: sortOrder[0].direction === 'asc' ? 1 : -1,
          page: currentPage,
          pageSize: perPage
        }
      },
      transformData (data) {
        
        const transformed = {};

        transformed.data = [];
        for (var i=0; i < data.data.length; i++) {
          transformed.data.push({
            id: data.data[i].estadoid,
            nome: data.data[i].nome,
            abreviacao: data.data[i].abreviacao,
            datacriacao: data.data[i].datacriacao,
            dataalteracao: data.data[i].dataalteracao,
          });
        }

        return transformed;
      },
    onPaginationData(paginationData) {
        this.$refs.pagination.setPaginationData(paginationData);
        this.$refs.paginationInfo.setPaginationData(paginationData);
      },
      onChangePage(page) {
        this.$refs.vuetable.changePage(page);
      }
    }
  };
</script>

<style>
    .vuetable-head-wrapper table.vuetable th.sortable {
        cursor: pointer
    }
    .container {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
