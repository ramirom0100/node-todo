const fs = require('fs')
let todoList = []
const saveData = () => {
    let data = JSON.stringify(todoList)
    fs.writeFile('DB/data.json', data, (e) => {
        if (e) throw new Error('No se pudo grabar')
    })
}
const loadData = () => {
    try {
        todoList = require('../db/data.json')
    } catch (error) {
        todoList = []
    }
}
const getListado = () => {
    loadData()
    return todoList
}
const crear = (descripcion) => {
    loadData()
    let todo = {
        descripcion,
        completado: false
    }
    todoList.push(todo)
    saveData()
    return todo
}
const actualizar = (descripcion, completado = true) => {
    loadData()
    let index = todoList.findIndex(tarea => tarea.descripcion === descripcion)
    if (index != -1) {
        todoList[index].completado=completado
        saveData()
        return true
    }
    return false
}
const borrar = (descripcion) => {
    loadData()
    let index = todoList.findIndex(tarea => tarea.descripcion === descripcion)
    if (index != -1) {
        todoList.splice(index,1)
        saveData()
        return true
    }
    return false
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}