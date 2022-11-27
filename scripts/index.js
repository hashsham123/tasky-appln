const state = {
    taskList :[],

};
// dom manipulations
const taskmodal=document.querySelector(".task__modal__body");

// to ceate a card on home page
const htmltaskcontent = ({id,title,description,type,url})=>`
<div class='col md-6 col-lg-4 mt-3' id=${id} key=${id}>
<div class='card shadow-sm task__card'>
<div class='card-header' d-flex justify-content-end task__card__header>
<button type = 'button' class='btn btn-outline-info mr-2' name=${id}> 
<i class = 'fa fa-pensil-alt' name='${id}'></i>
<button>

<button type = 'button' class='btn btn-outline-danger mr-2' name=${id}> 
<i class = 'fa fa-trash-alt' name='${id}'></i>
<button>

<div class='card-body'>
${
    url && `<img width='100%' src=${url} alt='card image here  class="card-image-top '/>`
}

<h4> class='task__card__tile'>${title} </h4>
<p class='description trim-3-lines text-muted' data-group_editor='false'>${description}</p>
<div class='tags text-white d-flex flex-wrap'>
<span class='badge bg-primary m-1'>${type}<span>

</div>
</div>
<div class='card-footer'>
<button type='button' class='btn btn-outline-primary  data-bs-toggle="modal"  data-bs-target="#showTask"'>open Task</button
</div>
</div>
</div>
</div>
`
