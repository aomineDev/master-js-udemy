'use strict'

var Project = require('../models/project'),
fs = require('fs');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo Test del controlador de project'
        });
    },
    saveProject: function(req, res){
        var project = new Project(),
        params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;
        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar.'});
            if(!projectStored) return res.status(404).send({message: 'No se ah podido guardar el proyecto'});
            return res.status(200).send({project: projectStored});  
        });
    },
    getProject: function(req, res){
        var projectId = req.params.id;
        if( projectId == null) return res.status(404).send({message: 'El proyecto no existe'});

        Project.findById(projectId, (err, project) =>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!project) return res.status(404).send({message: 'El proyecto no existe'});
            return res.status(200).send({project});
        });
    },
    getProjects: function(req, res){
        Project.find({}).sort('-year').exec((err, projects)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los proyectos'});
            if(!projects) return res.status(404).send({message: 'Proyectos no encontrados'});
            return res.status(200).send({projects});
        })
    },
    updateProject: function(req, res){
        var projectId = req.params.id,
        update = req.body;
        Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdated) => {
            if(err) return res.status(500).send({message: 'Error al actualizar'});
            if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe'});
            return res.status(200).send({project: projectUpdated});
        });
    },
    deleteProject: function(req, res){
        var projectId = req.params.id;
        Project.findByIdAndRemove(projectId, (err, projectDelete)=>{
            if(err) return res.status(500).send({message: 'Error al eliminar el proyecto'});
            if(!projectDelete) return res.status(404).send({message: 'El proyecto seleccionado no se encontro'});
            return res.status(200).send({project: projectDelete});
        });
    },
    uploadImage: function(req, res){
        var projectId = req.params.id,
        fileName = 'No subida...';
        if(req.files){
            var filePath = req.files.image.path,
            fileSplit = filePath.split('\\');
            fileName = fileSplit[1];
            var extSplit = fileName.split('\.'),
            fileExt = extSplit[1];

            if(fileExt == 'jpg' || fileExt == 'png' || fileExt == 'jpeg' || fileExt == 'gif'){
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
                    if(err) return res.status(500).send({message: 'Error al subir el archivo'});
                    if(!projectUpdated) return res.status(404).send({message: 'El proyecto seleccionado no se encontro en la base de datos'});
                        return res.status(200).send({project: projectUpdated});
                    }); 
            }else{
                fs.unlink(filePath, () => {
                    return res.status(200).send({message: 'La extensión no es valida.'});
                });
            }           
        }else{
            return res.status(200).send({message: fileName});
        }
    }
};
module.exports = controller;