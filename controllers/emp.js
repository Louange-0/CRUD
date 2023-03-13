const Emp = require('../models/emp')
const mongoose = require('mongoose')
function create(req,res,next){
  let empName = req.body.empName;
  let empEmail = req.body.empEmail;
  let empMobile = req.body.empMobile;
  let emp = new Emp({
    empName,
    empEmail,
    empMobile
  })
  emp.save().then((data)=>{
    res.send(data)
  }).catch((err)=>{
    if(err.name==='ValidationError'){
        res.status(422).send(err);
    }else{
        next(err);
    }
  });
}
function view(req,res,next){
    Emp.find({}).then((data)=>{
        res.send(data)
    })
}

async function update(req, res, next) {
    try {
      const emp = await Emp.findByIdAndUpdate(req.params.id, req.body);
      res.send({ success: "Updation successfull" });
    } catch (err) {
      res.status(500).send({ error: "Problem with Updating the Employee record" });
    }
  }
  function remove(req, res, next) {
    Emp.findByIdAndDelete(req.params.id)
      .then(() => {
        res.send({success: 'Employee deleted successfully'});
      })
      .catch((err) => {
        return res.status(500).send({error: "Problem with Deleting the Employee recored"});
      });
  }
  
  
module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove