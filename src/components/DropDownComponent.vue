<template>
      <div @click="toggleDropdown(index)"  :key="index" :class="{'bg-blue-100': this.isOpen[index], 'hover:bg-blue-100': this.isOpen[index]}" class="dropdown flex text-gray-700 hover:bg-gray-100 p-2 xl:px-6 px-3 ml-4">
        <button  :class="{'text-blue-500': this.isOpen[index]}">{{ CategoryName }}</button>
        <ul v-if="isOpen[index]" class="dropdown-list w-56 bg-blue z-40">
          <li v-for="option in options" :key="option.id" @click="selectOption(option, index)" class="p-6">
            <a :href="option.href">{{ option.name }}</a>
          </li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="pl-2 w-4">
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
        </svg>
      </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: [],
      selectedOption: null,
      selectedDropdownIndex: null,
      CategoryName: 'To add Here',
      options: [
        { id: 1, name: 'Go to Catalogue',href: "catalogue"}, // Placeholder à changer
        { id: 2, name: 'Go to Article', href: "article"}, // Placeholder à changer
        { id: 3, name: 'Go to Profil', href: "profil"}, // Placeholder à changer
        { id: 4, name: 'Go to Create', href: "/category/article/create"}, // Placeholder à changer
        { id: 5, name: 'Go to Dashboard', href: "/dashboard/home"}, // Placeholder à changer


      ]
    };
  },
  mounted() {
    document.addEventListener('click', this.closeDropdowns);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdowns);
  },
  methods: {
    toggleDropdown(index) {
      if (this.selectedDropdownIndex === index) {
        this.isOpen[index] = !this.isOpen[index];
      } else {
        this.isOpen = this.isOpen.map(() => false); // Close all dropdowns
        this.isOpen[index] = true; // Open the clicked dropdown
        this.selectedDropdownIndex = index; // Update the selected index
      }
    },

    selectOption(option, index) {
      this.selectedOption = option.name;
      this.isOpen[index] = false;
      this.$emit('option-selected', option);
    },
    closeDropdowns(event) {
      if (!event.target.closest('.dropdown')) {
        this.isOpen = this.isOpen.map(() => false);
        this.selectedDropdownIndex = null;
      }
    }
  }
};
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  padding: 20px;
  margin: 0;
  list-style-type: none;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
}

.dropdown-list li:hover {
  background-color: #ddd;
}
</style>
