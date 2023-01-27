<!-- eslint-disable -->
<template>
  <div class="container">
    <h1>OK, Let's create something great</h1>
    <form @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Your Name" />
      <label>Email</label>
      <input type="email" v-model="email" name="email" placeholder="Your Email" />
      <label>Message</label>
      <textarea name="message" v-model="message" cols="30" rows="5" placeholder="Message">
      </textarea>

      <button type="submit" class="btn btn-info fade-in">
        <i class="fas fa-paper-plane" aria-hidden="true" />
        GET IN TOUCH
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        /* eslint-disable */
        console.log("debug");
        emailjs.sendForm(
          "service_uimbwsp",
          "template_22aws9b",
          e.target,
          "4fikDaRLSko50i0Jw",
          {
            name: this.name,
            email: this.email,
            message: this.meessage,
          }
        );
      } catch (error) {
        /* eslint-disable */
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #b8c7b9;
}

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 30px;
}

@media screen and (min-width: 991px) {
  .container {
    width: 50%;
  }

  h1 {
    margin-bottom: 50px;
    font-size: 30px;
  }
}

h1 {
  margin-bottom: 20px;
  font-size: 20px;
}
</style>
