<template>
    <div class="container mx-auto shadow bg-white p-4">
        <h2>Sign Up</h2>
        <form @submit.prevent="onSubmit">
             <label class="block">
            <span class="text-gray-700 font-medium">Username:</span>
            <input
              class="form-input mt-1 block w-full"
              placeholder="Jane Doe" v-model="username" name="username"
            />
          </label>
          <label class="block">
            <span class="text-gray-700 font-medium">Email:</span>
            <input
              class="form-input mt-1 block w-full"
              placeholder="Jane Doe" v-model="email" name="email"
            />
          </label>
          <label class="block">
            <span class="text-gray-700 font-medium">Password:</span>
            <input type='password'
              class="form-input mt-1 block w-full"
              placeholder="********" v-model="password" name="password"
            />
          </label>
           <label class="block">
            <span class="text-gray-700 font-medium">Password Confirmation:</span>
            <input type='password'
              class="form-input mt-1 block w-full"
              placeholder="********" v-model="password" name="re_password"
            />
          </label>
            <button type="submit" class="btn bg-green-500 text-white mt-2">
                <icon svgdata="mdiWhatsapp" class="" />
                 Registrarme!</button>
        </form>
    </div>
</template>

<script>

export default {
  layout: 'wide',
  
  data() {
    return {
      username: '',
      email: '',
      password: '',
      re_password: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(event)
    }
  }
}
</script>

<style lang="scss">
</style>