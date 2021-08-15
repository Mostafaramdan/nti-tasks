class Users{
    users =[
        {id:new Date().getTime(),name:'mostafa',email:'mostafa@gmail.com',password:'123456'},
    ]
    constructor (){
        this.showAll(this.users);
        this.createUpdate();
        this.update();
        this.delete();
    }
    showAll(users){
        users.forEach(u => {
            let tr = document.createElement('tr')
            tr.appendChild( this.createElement('td',[u.id]))
            tr.appendChild( this.createElement('td',[u.name]))
            tr.appendChild( this.createElement('td',[u.email]))
            tr.insertAdjacentHTML('beforeend',`
                <td user-id=${u.id}>
                    <button  class="btn btn-secondary btn-edit" data-bs-toggle="modal" data-bs-target="#form">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>`,'td')
            document.querySelector('tbody').append(tr)
        });
    }
    createElement(tagName,innerData){
        let element = document.createElement(tagName)
            element.innerHTML = innerData;
        return element;
    }
    createUpdate(){
        let user={}
        let Users=this;
        document.querySelector("form").addEventListener('submit', function(e){
            e.preventDefault();
            for (let [key, val] of new FormData(this)) {
                user[key]=val;
            }
            let id = document.querySelector("input[name='id']").value;
            if(id){
                Users.users[Users.users.indexOf(Users.users.find(e=>{e.id==id }))]= user
                document.querySelector(`td[user-id="${id}"]`).parentElement.remove()
            }else{
                user['id']=new Date().getTime();
                Users.users.push(user)
            }
            Users.showAll([user])
            document.getElementById('close-model').click();
        });
    }
    delete(){
        let Users= this;
        document.getElementsByTagName('body')[0].addEventListener('click',function(e){
            if (e.target.tagName == 'BUTTON' && e.target.classList.contains("btn-danger")){
                if(confirm('do you want to delete this Item')){
                    let id= this.parentElement.getAttribute('user-id')
                    e.target.parentElement.parentElement.remove()
                    Users.users.splice(Users.users.indexOf(Users.users.find(e=>{e.id==id })),1)
                }
            }
        })
    }
    update(){
        let Users= this;
        let body = document.getElementsByTagName('body')[0];
        body.addEventListener('click',function(e){
            if (e.target.tagName == 'BUTTON' && e.target.classList.contains("btn-edit")){
                document.querySelector("input[name='id']").value= e.target.parentElement.getAttribute('user-id');
                document.getElementById('create-update').classList='btn btn-warning update';
                document.getElementById('create-update').innerText='Update';
                document.getElementById('exampleModalLabel').innerHTML='Update a User'
                let id= e.target.parentElement.getAttribute('user-id')
                let user = Users.users.find(e=>{return e.id==id })
                document.querySelector("input[name='name']").value=user.name
                document.querySelector("input[name='email']").value=user.email
                document.querySelector("input[name='password']").value=user.password
            }
        })
    }
}