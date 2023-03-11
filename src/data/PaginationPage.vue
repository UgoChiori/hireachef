<!-- <template>
    <ul class="pagination" v-if="data.chefs > 5 || currentPage > 1">
        <li class="pagination-item" title="page">
          <button
            type="pagination-item"
            @click="onClickFirstPage"
            :disabled="isInFirstPage"
          >
            <i class="fas-fa-chevron-left"></i>
            <i class="fas-fa-chevron-left"></i>
          </button>
        </li>
  
        <li class="pagination-item" title="page">
          <button
            type="pagination-item"
            @click="onClickPreviousPage"
            :disabled="isInFirstPage"
          >
            <i class="fas-fa-chevron-left"></i>
          </button>
        </li>
        <li class="pagination-item" v-for="(page, index) in pages" :key="index">
          <button
            type="pagination-item"
            @click="onClickPage(page.number)"
            :class="{ active: isPageActive(page.number) }"
          >
            {{ page.number}}
          </button>
        </li>
        <li class="pagination-item" title="page">
          <button
            type="pagination-item"
            @click="onClickNextPage"
            :disabled="isInLastPage"
          >
            <i class="fas-fa-chevron-right"></i>
          </button>
        </li>
        <li class="pagination-item" title="page">
          <button
            type="pagination-item"
            @click="onClickLastPage"
            :disabled="isInLastPage"
          >
            <i class="fas-fa-chevron-left"></i>
            <i class="fas-fa-chevron-left"></i>
          </button>
        </li>
      </ul>
    
  </template>
  
  <script>
  // import Pagination from "@/data/PaginationPage.vue";
//   import axios from "axios";
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    name: "PaginationPage",
  
    props: {
      data: {
        type: Array,
        required: true,
      },
      maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3,
      },
      totalPages: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      perPage: {
        type: Number,
        required: true,
      },
      initialPage: {
        type: Number,
        required: true,
      },
    },
  
    computed: {
      paginatedData() {
        let start = (this.currentPage - 1) * this.perPage,
          end = start + this.perPage;
        return this.data.slice(start, end);
      },
      startPage() {
        if (this.currentPage === 1) return 1;
        if (this.currentPage === this.totalPages)
          return (
            this.totalPages -
            this.maxVisibleButtons +
            (this.maxVisibleButtons - 1)
          );
  
        return this.currentPage - 1;
      },
      endPage() {
        return Math.min(
          this.startPage + this.maxVisibleButtons - 1,
          this.totalPages
        );
      },
      pages() {
        let range = [];
        for (let i = this.startPage; i <= this.endPage; i++) {
          range.push({ number: i, isActive: i === this.currentPage });
        }
        return range;
      },
      isInFirstPage() {
        return this.currentPage === 1;
      },
      isInLastPage() {
        return this.currentPage === this.totalPages;
      },
      ...mapGetters(["chefs"]),
    },
    methods: {
      onClickFirstPage() {
        this.$emit(`pagechanged`, 1);
      },
      onClickPreviousPage() {
        this.$emit(`pagechanged`, this.currentPage - 1);
      },
      onClickPage(page) {
        this.$emit(`pagechanged`, page);
      },
      onClickNextPage() {
        this.$emit(`pagechanged`, this.currentPage + 1);
      },
      onClickLastPage() {
        this.$emit(`pagechanged`, this.totalPages);
      },
    isPageActive(page) {
      return this.currentPage === page;
    },
    
    
    ...mapActions(["getChefs"]),
    onPageChanged(page) {
      this.currentPage = page;
      this.getChefs(page);
    },
   
    
    },
  };
    </script> -->