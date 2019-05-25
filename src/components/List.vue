<template>
  <div id="todo-list" class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h1 class="text-center">Listado de tareas</h1>
        <form v-on:submit.prevent="addNewTask">
          <label for="tasknameinput">Task Name</label>
          <input v-model="taskname" type="text" id="tasknameinput" class="form-control">
          <button v-if="this.isEdit == false" type="submit" class="btn btn-success btn-block mt-3">Agregar</button>
          <button v-else type="button" v-on:click="updateTask()" class="btn btn-primary btn-block mt-3">Editar</button>
        </form>
      </div>
    </div>

    <table class="table">
      <tr v-for="(todo) in todos" v-bind:key="todo.id" v-bind:title="todo.title">
        <td class="text-left">{{todo.title}}</td>
        <td class="text-right">
          <button v-on:click="editTask(todo.title, todo.id)" class="btn btn-info">Editar</button>
          <button v-on:click="deleteTask(todo.id)" class="btn btn-danger">Borrar</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List',
  data () {
    return {
      todos: [],
      taskname: '',
      isEdit: false
    }
  },
  mounted () {
    this.getTask()
  },
  methods: {
    getTask () {
      axios({
        method: 'GET',
        url: '/api/tareas'
      }).then(
        result => {
          console.log(result.data)
          this.todos = result.data
        },
        error => {
          console.error(error)
        }
      )
    },
    addNewTask () {
      axios.post('/api/tareas', {
        title: this.taskname
      }).then(
        res => {
          this.taskname = ''
          this.getTask()
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    },
    editTask (title, id) {
      this.id = id
      this.taskname = title
      this.isEdit = true
    },
    updateTask () {
      axios.put(`/api/tareas/${this.id}`,
        {
          title: this.taskname
        }
      ).then(
        res => {
          this.taskname = ''
          this.isEdit = false
          this.getTask()
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    },
    deleteTask (id) {
      axios.delete(
        `/api/tareas/${id}`
      ).then(
        res => {
          this.taskname = ''
          this.getTask()
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
