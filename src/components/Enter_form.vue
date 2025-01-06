<script setup>
import Button_1 from './Button_1.vue';
import { ref } from 'vue';

let phone = ref('');
let password = ref('');

import { useRouter } from 'vue-router';
const router = useRouter();

const lk = async() => {
  let query = `http://127.0.0.1:8000/api/login?phone=${phone.value}&password=${password.value}`;
  let response = await fetch(query, { method: "POST" });
  const json = await response.json(); 
  if (typeof json['error'] == "undefined") {
    const token_id = json.access_token;
    localStorage.setItem("token", token_id);
    router.push('lk');
  }
};
</script>

          <router-link to="/registration">
          </router-link>
            @click="lk"
